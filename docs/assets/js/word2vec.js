// Word2Vec utility functions.
//
// Assumes a global `wordVecs` object is already loaded (see data/wordvecs*.js),
// with every vector L2-normalised. That means cosine similarity reduces to the
// plain dot product, so this stays a handful of lines.

const W2V = (() => {
  const VOCAB = Object.keys(wordVecs);
  const DIM = wordVecs[VOCAB[0]].length;

  // Flatten into one Float32Array of shape [VOCAB.length * DIM] for speed.
  // One pass over ~25 000 words in the loop below is comfortably fast.
  const MATRIX = new Float32Array(VOCAB.length * DIM);
  for (let i = 0; i < VOCAB.length; i++) {
    const v = wordVecs[VOCAB[i]];
    for (let j = 0; j < DIM; j++) MATRIX[i * DIM + j] = v[j];
  }

  function lookup(word) {
    if (wordVecs.hasOwnProperty(word)) return wordVecs[word];
    const lower = word.toLowerCase();
    if (wordVecs.hasOwnProperty(lower)) return wordVecs[lower];
    return null;
  }

  function normalise(vec) {
    let mag = 0;
    for (let j = 0; j < DIM; j++) mag += vec[j] * vec[j];
    mag = Math.sqrt(mag);
    if (mag === 0) return vec;
    const out = new Float32Array(DIM);
    for (let j = 0; j < DIM; j++) out[j] = vec[j] / mag;
    return out;
  }

  // Returns the N closest words to `queryVec` (assumed unit-norm),
  // excluding any word in `excludeSet`.
  function nearest(queryVec, n, excludeSet = new Set()) {
    const sims = new Float32Array(VOCAB.length);
    for (let i = 0; i < VOCAB.length; i++) {
      let s = 0;
      const off = i * DIM;
      for (let j = 0; j < DIM; j++) s += queryVec[j] * MATRIX[off + j];
      sims[i] = s;
    }
    // partial sort: keep top n
    const heap = [];
    for (let i = 0; i < VOCAB.length; i++) {
      if (excludeSet.has(VOCAB[i])) continue;
      if (heap.length < n) {
        heap.push([VOCAB[i], sims[i]]);
        if (heap.length === n) heap.sort((a, b) => a[1] - b[1]);
      } else if (sims[i] > heap[0][1]) {
        heap[0] = [VOCAB[i], sims[i]];
        // re-bubble (heap is tiny, n=10)
        heap.sort((a, b) => a[1] - b[1]);
      }
    }
    heap.sort((a, b) => b[1] - a[1]);
    return heap;
  }

  function similar(word, n = 10) {
    const v = lookup(word);
    if (!v) return { error: `No vector for "${word}"` };
    return { results: nearest(v, n, new Set([word, word.toLowerCase()])) };
  }

  function algebra(positive = [], negative = [], n = 10) {
    const exclude = new Set();
    const sum = new Float32Array(DIM);
    for (const w of positive) {
      const v = lookup(w);
      if (!v) return { error: `No vector for "${w}"` };
      for (let j = 0; j < DIM; j++) sum[j] += v[j];
      exclude.add(w); exclude.add(w.toLowerCase());
    }
    for (const w of negative) {
      const v = lookup(w);
      if (!v) return { error: `No vector for "${w}"` };
      for (let j = 0; j < DIM; j++) sum[j] -= v[j];
      exclude.add(w); exclude.add(w.toLowerCase());
    }
    return { results: nearest(normalise(sum), n, exclude) };
  }

  return { VOCAB, DIM, similar, algebra };
})();
