// UI glue — tiny DOM helpers, form handlers, example links.

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  // Show the loaded vocab size in the header and in the "How it works" section.
  const size = W2V.VOCAB.length.toLocaleString();
  $("#vocab-size").textContent = size;
  $$(".vocab-size-inline").forEach((el) => (el.textContent = size));

  function renderTable(tableEl, rows) {
    tableEl.innerHTML = "";
    if (!rows) return;
    for (const [word, sim] of rows) {
      const tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" + word + "</td>" +
        "<td>" + sim.toFixed(3) + "</td>";
      tableEl.appendChild(tr);
    }
  }

  function renderError(tableEl, message) {
    tableEl.innerHTML =
      '<tr><td colspan="2" class="error">' + message + "</td></tr>";
  }

  // ---- Similar words ----------------------------------------------------
  const simForm = $("#sim-form");
  const simTable = $("#sim-table");
  const targetInput = $("#target-word");

  function doSimilar(word) {
    if (!word) return;
    targetInput.value = word;
    const r = W2V.similar(word, 10);
    if (r.error) renderError(simTable, r.error);
    else renderTable(simTable, r.results);
  }

  simForm.addEventListener("submit", (e) => {
    e.preventDefault();
    doSimilar(targetInput.value.trim());
  });

  // ---- Word algebra -----------------------------------------------------
  const algForm = $("#alg-form");
  const algTable = $("#alg-table");
  const pos1 = $("#w-pos1");
  const neg = $("#w-neg");
  const pos2 = $("#w-pos2");

  function doAlgebra(a, b, c) {
    pos1.value = a; neg.value = b; pos2.value = c;
    const positive = [];
    const negative = [];
    if (a) positive.push(a);
    if (c) positive.push(c);
    if (b) negative.push(b);
    if (positive.length === 0 || negative.length === 0) {
      renderError(algTable, "Fill at least one positive box and one negative box.");
      return;
    }
    const r = W2V.algebra(positive, negative, 10);
    if (r.error) renderError(algTable, r.error);
    else renderTable(algTable, r.results);
  }

  algForm.addEventListener("submit", (e) => {
    e.preventDefault();
    doAlgebra(pos1.value.trim(), neg.value.trim(), pos2.value.trim());
  });

  // ---- Example-link handlers -------------------------------------------
  // Clicking an example just fills the input boxes; the student presses the
  // button to see the result.
  $$(".examples a[data-sim]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      targetInput.value = a.dataset.sim;
      targetInput.focus();
    });
  });

  $$(".examples a[data-alg]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const [p1, neg1, p2] = a.dataset.alg.split(",");
      pos1.value = p1;
      neg.value = neg1;
      pos2.value = p2;
      pos1.focus();
    });
  });

  // Auto-run the flagship example on page load so something is on screen.
  doAlgebra("king", "man", "woman");
})();
