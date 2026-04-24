# Summary — Pages 33-58 (Chapter 2 + Glossaire + Chapter 3 opening)

## Chapter 2. La machine parle : naissance des LLM (pp. 33-41)

Opening framing (p. 33): The second great stage in AI development began around 2013 and led to today's Large Language Models (LLMs) — "machines have learned to speak."

---

### 2.1 Comprendre les textes : vecteurs et couche d'attention (pp. 33-35)

#### Points
- After AlexNet (2012), image classification progressively became a "solved problem"; convolutional neural networks mastered even the hardest tests, to the point of helping radiologists detect cancerous tumors.
- Text processing, however, remained inaccessible at that time. A neural network can only digest numbers (like pixel values for an image). So the problem becomes: how to represent text as a set of numbers?
- First answer in 2013: Word2vec — represent words as lists of numbers, i.e. vectors. This allowed translation to begin.
- Translation procedure: juxtapose vectors representing each word of (say) a German sentence, feed them into a large neural network, ask it to predict a word in French. That word becomes the first translated word. Then append the vector of that predicted French word, and repeat. Stop when a special end token "<fin>" is generated.
- Footnote 27 (p. 33): the first performant networks for text translation were Recurrent Neural Networks (RNNs).

#### Focus technique — "Représenter les mots comme des vecteurs" (pp. 33-34)
- A vector is simply a list of numbers in a precise order (e.g. [X, Y, Z] = coordinates in 3D). A vector with n numbers = coordinates of a point in an n-dimensional space.
- Researchers had the idea early on to represent each word as a vector whose components are "scores" for the word on different axes (feminine-masculine, big-small, rainy-sunny, strong-weak…).
- Worked example with four dimensions [feminine, animal, old, fast]:
  - Puppy (chiot) = [0.0 ; 1.0 ; 0.1 ; 0.3]
  - Doyenne (elderly lady) = [1.0 ; 0.0 ; 0.9 ; 0.1]
- Word2vec (Google team, 2013): a vector representation for 1.6 billion English words. Their vectors had hundreds of dimensions (not just 4) to capture semantic nuances.
- Once words are vectors, you can add/subtract them dimension-by-dimension. Example: doyenne − chiot = [1.0 ; −1.0 ; 0.8 ; −0.2].
- Astonishing result with Word2vec: vector operations reproduced conceptual relations. Taking the vector for "queen", subtracting "woman", adding "man", gives the vector for "king" — i.e. mathematically encoding "a king is to a man what a queen is to a woman."
- Researchers did NOT encode this relation by hand. They simply trained a neural network on a large text corpus, and the network discovered these relations by itself. This was a striking demonstration that neural networks could *understand* texts.

#### Points (continued after focus)
- The deep neural networks of that era could not yet account for dynamic interactions between different input variables (the words of a sentence).
- This structural limitation was crippling for text. Example: in translation the order of words can change completely, e.g. from French to German where the verb is thrown to the end of relative clauses.
- Footnote 28 (p. 34): a joking hypothesis — this is perhaps why Germans rarely interrupt each other in political debates: you cannot know what your interlocutor means before the end of the sentence!
- The neural networks of the time treated inputs solely by their position (see figure 3): the word in position 2 is always treated the same way, whether verb or pronoun. Impossible to reconcile verb with subject unless they are always at the same position.
- Solution in 2015: the "attention layer" (couche d'attention / attention layer), designed in Yoshua Bengio's lab. Too complex to detail, but it is a specific structure usable in any neural network to treat inputs dynamically. E.g. in text processing, to transmit information like "feminine gender" between a subject and its verb to correctly make agreement, even if subject and verb are at unpredictable locations.
- This genial invention was not noticed immediately.
- 2017 thunderbolt: Google researchers published "Attention is all you need", using attention as the centerpiece of a new model architecture called Transformers. Transformers beat the best models of the time on many tests while being 100 times less expensive to train.
- The "Attention is all you need" paper has been cited in a few years by more than 100,000 scientific articles — nearly as many as the entire work of a scientist like Stephen Hawking. It laid the foundation of the greatest AI revolution.

#### Sources / name-drops
- AlexNet (2012).
- Word2vec (2013) — Google team.
- Recurrent Neural Networks (RNN) — footnote 27.
- Attention layer (2015) — lab of Yoshua Bengio — endnote ix.
- "Attention is all you need" (2017) — Google researchers — endnote x.
- Stephen Hawking (as a comparison of citation volume).
- Word2vec citation: endnote viii ("une représentation vectorielle pour 1,6 milliard de mots anglais").

#### Key quotes
- "Les chercheurs n'avaient pas encodé eux-mêmes cette relation : ils avaient simplement appliqué une procédure d'entraînement à des réseaux de neurones sur un grand corpus de textes, et le réseau de neurones avait trouvé *de lui-même* ces relations. Ce fut une démonstration éclatante que les réseaux de neurones pourraient *comprendre* des textes." (p. 34)
- "L'article 'Attention is all you need' a été cité en quelques années par plus de cent mille articles scientifiques, soit presque autant que l'ensemble du travail d'un immense scientifique comme Stephen Hawking, et il a posé les bases de la plus grande révolution de l'IA." (p. 35)

---

### 2.2 La machine parle : l'architecture Décodeur (pp. 35-37)

#### Points
- The most advanced language models are built on the Decoder architecture (in French "Décodeur"), a variant of Transformers capable of generating text.
- These models can seem to generate whole ideas, but in reality they only append one word-fragment at a time to the end of a given input text, choosing that word-fragment so it forms a probable continuation.
- Text generation starts from an initial instruction sentence dictated by the user, called a *prompt* (pronounced letter by letter in French). Often a question from the user.
- To generate its response, the Decoder represents the phrase as a list of vectors encoding the meaning of successive words. Each word is first cut into smaller units called "sous-mots" (English: *tokens*), e.g. |seg|m|ent|s| de| mots| fré|qu|emm|ent| ren|contr|és|. The splitting follows arbitrary rules specific to the Decoder model.
- Footnote 29 (p. 35): this process has the cute name "subword sous-motisation".
- Subword splitting adds finesse: it captures similarities between word-fragments. E.g. the suffix "-tion" in French indicates an action or its result; treating "-tion" as its own unit lets the model recognize the concept even in an unknown neologism.
- Worked example (Figure 9, p. 36): give the model "Comment vas-tu?". Algorithm consults its French subword dictionary (size N), cuts the phrase into: |Com|ment| vas|-|tu |?|. Each of these 7 subwords is transformed into a vector representing its meaning (as done earlier for "chiot" and "doyenne").
- 📎 **[Figure 9, p. 36]** — Diagram showing step-by-step decoder generation: starting from "Comment vas-tu?", each pass appends one new subword (Je → vais → bien → . → Et → toi → ? → <fin>) until the special end token stops generation.
- These vectors are fed into the Transformer-type neural network. The last layer has N neurons (N = vocabulary size). The output neuron that activates with the strongest signal corresponds to the selected subword.
- Algorithm looks up subword i in its dictionary: e.g. subword i = "Je". It appends "Je" to the prompt subwords.
- Then repeats the whole process on the updated prompt ("Com|me|nt| vas|-|tu |?| Je"), generating "vais", then "bien", etc. Continues until the special end subword "<fin>" is generated, marking the end of completion.
- Footnote 31 (p. 37): If by error the "<fin>" subword is never generated, we stop anyway after a maximum number of subwords — to avoid spending all day.
- The algorithm then removes the separations between subwords, the input prompt, and the "<fin>" subword, and returns simply: "Je vais bien. Et toi ?"
- Why did it pick "Je" as the first completion? The Transformer was trained on billions of lines of text (books, websites, forum posts). When it receives a sequence ending in "?", somewhere deep in the network, neurons specialized in question-answering activate strongly, suggesting that a question mark typically leads to a response. Elsewhere, combining "vas" and "tu" activates other neurons specialized in well-being and in social conventions. The combination of these elements produces a coherent response.
- Footnote 33 (p. 37): A chatbot is an application similar to a phone messaging service, where the interlocutor is an artificial intelligence.
- The Decoder algorithm generates its response subword by subword, choosing each time the most *logical* completion. ChatGPT and other famous chatbots work on this basis. Because of subword-by-subword prediction, the response can change completely with simple reformulations of the prompt.

#### Sources / name-drops
- ChatGPT.

#### Key quotes
- "Ces modèles peuvent donner l'impression de générer des idées entières, mais en réalité, ils ne font qu'ajouter un morceau de mot à la suite d'un texte donné en entrée." (p. 35)

---

### 2.3 Avantages du Décodeur (pp. 37-39)

#### Points
- The Decoder method of generating text seems extremely limited: it reduces all LLM *reasoning* capacity to picking the most probable next subword. Why not generate whole ideas instead?
- In reality the Decoder has **two decisive advantages**.

**Advantage 1 — Polyvalence (versatility):**
- The architecture is versatile, solving very diverse tasks by generating text. Two examples:
- Translation example: just provide the initial text plus a translation instruction, e.g.: "Traduis ce texte en espagnol : 'Pourquoi voulez-vous que nous dissimulions l'émotion qui nous étreint tous, hommes et femmes, qui sommes ici, chez nous, dans Paris debout pour se libérer et qui a su le faire de ses mains ?' Traduction en espagnol : " The model then generates the most probable completion — the Spanish translation — and the user just retrieves it.
- Arithmetic example: give the prompt "Combien font 2 × 4 ?". The model completes something like "Combien font 2 × 4 ? 2 fois 4 font 8. <fin>". An extraction method like "take the last number of the completed text" retrieves the result.
- Because a Decoder can generate any type of text, it can theoretically solve any task we can express in writing. Starting from the principle that "ce qui se conçoit bien s'énonce clairement" (what is clearly conceived is clearly stated), all our problems should belong to the category of statable tasks. Contrast with traditional AI, where each model was by construction limited to one output type (e.g. "the animal on the photo is a fox", or "accident probability = 0.017"). Decoder models are theoretically very versatile.
- Footnote 34 (p. 38): "theoretically" matters — the first versions like OpenAI's GPT-1 could barely generate a few coherent words before the generation became incoherent or unintelligible.

**Advantage 2 — Any text can be training data (self-supervision):**
- The Decoder can take any text as training data, rather than needing a manually annotated dataset (as in image classification).
- Take a book or website, give it as input to the model starting from the first words, then train it to complete all the rest of the text subword by subword: at each subword prediction, compare to the actual next subword, penalize connections that pushed toward wrong predictions and reward those that favored correct ones.
- Footnote 35 (pp. 38-39): This is called "auto-supervision". There are three broad categories of learning:
  1. **Supervised learning** — needs an annotated dataset (e.g. image recognition).
  2. **Unsupervised learning** — e.g. clustering algorithms that identify trends from unlabeled data.
  3. **Reinforcement learning** (RL) — an actor trains by experimenting with different actions in its environment.
- So these models can be trained directly on immense text bases pulled from the Internet.
- These two reasons — versatility + self-supervision — explain the success of the architecture, giving rise to the great majority of state-of-the-art models today: **GPT series by OpenAI, Claude by Anthropic, Gemini by Google**.

#### Sources / name-drops
- OpenAI — GPT-1.
- OpenAI — GPT series.
- Anthropic — Claude.
- Google — Gemini.

#### Key quotes
- "Partant du principe que 'ce qui se conçoit bien s'énonce clairement', l'ensemble de nos problèmes devraient appartenir à cette catégorie des tâches énonçables." (p. 38)

---

### 2.4 Vers les Large Language Models (LLMs) (p. 39)

#### Points
- 2017 publication of Transformers (with attention) made a big noise.
- October 2018: new thunderbolt — other Google researchers published **BERT**, a model built on Transformers that beat all existing models on **11 different text-processing tasks**. Beating a single benchmark is already worthy of publication; beating 11 was a stunning feat.
- How did they do it? They used the Transformers architecture with a single significant modification: **24 layers of stacked neurons instead of 6**, which raised the total parameter count (the total number of neuron-connection weights) to **340 million** — huge for the time. So… is it size that matters?
- This began a gold rush: everyone wanted to use the BERT architecture and scale it up further. As researchers trained bigger models, performance kept improving. These immense models are called **Large Language Models (LLMs)**. The most famous representative is **ChatGPT**.

#### Sources / name-drops
- BERT (Google, October 2018).
- ChatGPT.

---

### 2.5 L'histoire de l'intelligence artificielle, en bref (pp. 39-41)

#### Points
- Recap: we have now followed the whole construction of modern AI models up to ChatGPT. End of the most technical part.
- **Algorithms** are the broadest category: any process that takes inputs, applies a predefined recipe, and returns an output. Includes all computer programs.
- **Neural networks**, appearing in 1950 by trying to reproduce the structure of human neurons, are a more advanced category of algorithms. A network has several successive layers of interconnected neurons. It receives signals at input (photo pixels, or problem parameters), transmits them through inter-neuron connections, transforming them at each neuron with mathematical operations, until an output signal is obtained. The superposition of successive neuron layers allows combining elementary pseudo-reasonings (heuristics) to solve complex problems.
- Neural networks fell into disuse due to the difficulty of tuning connections, until computing power (growing exponentially per "Moore's law") enabled an automatic tuning technique.
- This technique is **deep learning**: it automatically adjusts the internal connections to improve predictions on a so-called "training" dataset. Once performance is good enough, training stops and the model is usable: move on to **inference** (using the model on concrete cases).
- Machine could now learn; it remained to teach it to speak. First: represent each word by a vector (a list of numbers quantifying meaning across certain dimensions, e.g. "chiot" might be 1.0 on "animal" dimension, 0.1 on "age" dimension…). These numbers form a vector. You can then do math on words and pass them through neural networks.
- Still needed: a way to give more or less attention to certain parts of a sentence to understand it better — done via the **Attention** component, basis of the Transformers architecture.
- On this architecture, specifically a variant called **Decoder**, one builds "language models" generating subword-by-subword completions of an input prompt.
- At first, these models gave incoherent, even unreadable completions. But around 2019 the scientific community discovered that increasing model size and training corpus size improved performance in all language tasks — even those they hadn't been specifically trained on.
- Footnote 36 (p. 40): It takes **15 trillion subwords (about 12 trillion words)** for a large model like Llama-3.1-405B.
- This seemed to mean: we had found a general recipe for AI — train ever-larger language models on ever more text. This launched a global race to train bigger and bigger models: the birth of **Large Language Models (LLMs)**, now counting billions of neuron connections.
- Footnote 37 (p. 41): "We prefer the term LLM over the fashionable term 'Generative AI' because LLMs have many useful applications outside content generation."
- These LLMs are the spearhead of today's AI boom; their impressive capabilities will keep improving at a sustained pace.

#### Sources / name-drops
- Moore's law.
- Llama-3.1-405B (footnote 36).

---

### 2.6 Et en dehors des réseaux de neurones ? (p. 41)

#### Points
- LLMs are a sub-category of neural networks, which are themselves a particular family of AI models.
- Outside neural networks, many other learning algorithms exist with more or less barbaric names: **Régression, Arbre de décision, Random Forest, XGBoost**.
- In many use cases, one of these will be more useful than a LLM. Example: to associate numeric series at input and output, a simple **linear regression** (as used by economists) is often better suited.
- The AI world is vast; LLMs are far from being the solution to every problem. But the rest of the book focuses on the LLM paradigm, because these "talking machines" progress spectacularly on many problems and seem poised to become the privileged algorithm for most tasks.

#### Sources / name-drops
- Régression linéaire, Arbre de décision, Random Forest, XGBoost (algorithm families named).

---

## Glossaire technique (pp. 42-44)

- 📎 **[Figure 10, p. 42]** — Nested typology diagram of AI algorithms: outer box "Algorithmes" containing "Intelligence artificielle", then "Apprentissage machine / Machine learning", then "Réseau de neurones" (with Deep Learning as weight-adjustment method), and innermost "Transformers" (whose Decoder variant generates outputs subword by subword). Aside box lists other learning algorithms (Régression linéaire, XGBoost, Random Forest).

### Figure 10 — Typologie of AI algorithms
A nested typology diagram shows:
- **Algorithmes** (outer box): "Cooking recipe to compute an output from inputs. Vast category, includes all computer programs."
- **Intelligence artificielle** (subset): "Algorithms capable of solving tasks as if they had intelligence. Frontier is as fuzzy as the definition of intelligence."
- **Apprentissage machine / Machine learning** (subset of AI): "Class of algorithms able to automatically adjust themselves to improve predictions on a training dataset."
- **Réseau de neurones** (subset): "Type of algorithm made of successive layers of neurons transmitting signals. Deep Learning = applying an algorithm that auto-adjusts the weights of connections between neurons."
- **Transformers** (subset of neural networks): "Neural network architecture including Attention layers to focus on certain inputs. The **Decoder** variant generates outputs subword by subword."
- Noted: "Many algorithms can learn: Régression linéaire, XGBoost, Random Forest, etc."

### Defined terms (glossary proper)
- **Algorithme**: predefined procedure, a sequence of steps to compute a given output from variable inputs. A cooking recipe is the canonical example — inputs = ingredients, recipe steps = processing, output = cooked dish.
- **Intelligence artificielle (IA)**: vague umbrella term grouping algorithms capable of solving problems as if endowed with intelligence. Some companies abuse the term to sell products backed only by primitive algorithms; conversely, other more advanced algorithms deserve the title because they truly solve hard tasks.
- **Modèle**: often used as shorthand for "AI algorithm".
- **Chatbot / Robot conversationnel**: application enabling the user to dialogue with an AI model via written messages.
- **Tâche / problème**: a domain of competence on which one wants to improve an AI algorithm (or "model").
- **Jeu de données**: a set of examples used to train or test models. If "annotated", they consist of pairs (input, expected output). E.g. for animal recognition: [input: "photo_2829.png", output: "chien"], [input: "photo_2830.png", output: "chat"].
- **Banc de test (benchmark)**: set of questions posed to a model. Usually a dataset of (question, expected answer) pairs. To score the model, compute the percentage of examples where the model's prediction matched the expected answer.
- **Apprentissage (automatique) / entraînement / machine learning**: procedure by which an AI algorithm automatically adjusts its parameters to improve predictions on a training dataset. For a neural network, this consists of modifying the weights of the connections between neurons — each weight being a multiplicative coefficient applied to the signal passing through.
- **Inférence**: the neural network's vocation — generating outputs, called predictions (or completions for a text-generation model). Inference requires prior training; otherwise predictions are random and useless. Contrary to training (which can last months and cost millions for the biggest models), inference takes at most a few seconds and costs a few cents.
- **Heuristique**: rough reasoning sketch aimed at quickly obtaining an efficient solution. Heuristics work by assimilation; e.g. predicting a dropped apple's motion: "objects let loose in free fall on Earth fall toward the ground, and this apple is in free fall, so it will fall to the ground." Several heuristics can be combined to refine predictions. Heuristics are a pragmatic way to solve problems when lacking info or needing a fast decision: imprecise, sometimes false, but efficient because fast and usually true. Proverbs or fable morals like "Patience et longueur de temps font plus que force ni que rage" are examples of heuristics. In AI, a few interconnected neurons can reproduce a simple heuristic, and the whole network functions by combining these simple heuristics to build more complex reasonings.
- **Sous-mot (anglais: token)**: piece of a word comprising one or more letters, the elementary unit into which some text-processing algorithms cut phrases before inferring on them. The cutting is arbitrary and depends on the model. Example: "Voi| là | com|m|ent| un|e | ph|ra|se| pe|ut| ê|tre | dé|cou|pée|."

---

## Partie II. La course aux étoiles (p. 45 — intro)

#### Points
- LLMs obtain impressive results but also show obvious limits. This new intelligence, very different from ours, is still in infancy: like a child, it often fails but progresses rapidly.
- To analyze these models, we must not stop at a snapshot of the present, but consider their immense potential. To predict their future evolution, we must study the trajectory of their performance and extrapolate it.

---

## Chapter 3. Vers une intelligence artificielle générale (pp. 46-58)

Opening (p. 46): In November 2022, OpenAI launched the ChatGPT chatbot, making its advanced LLMs accessible to all. The app had unprecedented success, reaching 100 million users in two months — a threshold Facebook took more than four years to cross. Beyond the public craze, this was a veritable Copernican revolution: the irruption of an *intelligence* that was not human.

---

### 3.1 Un progrès fulgurant (pp. 46-49)

#### Points
- How much progress did ChatGPT represent in 2022 compared to LLMs three years earlier? And how much progress since?
- Test instruction used as benchmark: "Generate a poem in 10 verses of 12 feet (alexandrines), with alternating rhymes. Each verse must contain an increasing number from 1 to 10: first contains 'un', second 'deux', etc."
- Emblematic GPT models compared (family: Generative Pretrained Transformer, OpenAI):
  - **GPT-2 (2019)**: cannot even generate a correct sentence. Over several attempts, produces apparently nonsensical completions or repeats instructions indefinitely. Usually needs prefilling the expected answer ("Poème:" at end of prompt) to produce short coherent sequences.
  - **GPT-3 (2020)**: loops, e.g. "Résultat: Un deux trois quatre cinq six sept huit neuf dix / Un deux trois quatre cinq six sept huit neuf dix / Résultat:".
  - **Mistral-7B (recent, equivalent to GPT-3.5 of 2022)**: responds in English, with a fairly incoherent completion that nonetheless resembles a poem and includes numbers: "Beneath the moon's soft, silver-kissed glade, (1) / Unwandering stream their tracks shall make, (1, un) / Two silent whispers through the shade, (2) / Deeper it flows, a secret lake, (2, deux) / Where three companions' tales are made. (3)…"
  - **GPT-4 (2023)**: much better completion, though overacted style, but **misses the 12-foot meter**. Example: "Sous un ciel éclatant, un seul rêve se dessine, / Deux étoiles brillent haut, leur éclat nous fascine. / Trois lunes dans la nuit apportent leur clarté…" (all 10 lines provided).
  - **Claude-4-Sonnet (2025)**: gives a satisfactory result with nearly correct alexandrines. Example: "Un seul oiseau s'envole au cœur du jour naissant, / Deux grands aigles planent au-dessus des montagnes, / Trois vieux bergers marchaient sur les chemins pesants / Quatre saisons passaient dans nos vertes campagnes…"
- **Image generation evolution** (Figure 11, pp. 47-48) using the same prompt in English: "An astronaut on horseback in a tunnel, the horse's hooves splashing water. The astronaut brandishes a French flag."
  - A. Stable Diffusion 1 (August 2022) — early, crude.
  - B. Stable Diffusion 2 (November 2022).
  - C. Stable Diffusion XL (July 2023).
  - D. FLUX.1-dev (August 2024) — much more photorealistic.
- 📎 **[Figure 11 A/B/C/D, pp. 47-48]** — Four-panel comparison of the same "astronaut on horseback in a tunnel with French flag" prompt rendered by Stable Diffusion 1 (Aug 2022, crude cartoonish), Stable Diffusion 2 (Nov 2022), Stable Diffusion XL (Jul 2023), and FLUX.1-dev (Aug 2024, near-photorealistic) — visual demonstration of image-model progression over two years.
- Image and text generation have shown similar progression, reaching the same essential milestones in the same order:
  1. First producing legible content where a reader can find meaningful elements.
  2. Then more coherent content — texts with concordant ideas, images with logical elements.
  3. Eventually becoming difficult to distinguish from human-produced content.
- Reminder: **LLMs were born in 2019, six years before writing these lines**. A child making such progress in its first years of life would be considered a precocious genius.
- Footnote 38 (p. 49): Comparing to a child may even be unfair — the child has behind it innumerable generations that progressively improved its mental wiring through natural selection, whereas the LLM has only the few decades of preparatory AI development.

#### Sources / name-drops
- OpenAI's GPT family (GPT-2 2019, GPT-3 2020, GPT-4 2023).
- Mistral-7B.
- Claude-4-Sonnet (2025).
- Stable Diffusion 1 (August 2022).
- Stable Diffusion 2 (November 2022).
- Stable Diffusion XL (July 2023).
- FLUX.1-dev (August 2024) / FLUX.1-schnell (July 2024) — figure 13.
- Facebook (100M users comparison).

#### Key quotes
- "En novembre 2022, la publication du chatbot ChatGPT étonna le monde entier… cet événement constituait une véritable révolution copernicienne : l'irruption d'une *intelligence* qui n'était pas humaine." (p. 46)
- "Un enfant qui aurait accompli de tels progrès durant ses premières années de vie serait considéré comme un génie précoce." (p. 49)

---

### 3.2 Une intelligence qui nous surpasse dans de nombreux domaines… (pp. 49-51)

#### Points
- How to judge actual competence? The most famous test is the **Turing test**, named after the Bletchley Park mathematician who proposed it under the name "imitation game" (*jeu d'imitation*).
- Turing test setup: a judge is placed in a room facing two hidden interlocutors behind a partition. The judge knows one is a machine and one is a human, but doesn't know which is which. The judge can interrogate them by written messages to unmask the machine. If the judge fails to distinguish them, the machine passes.
- The test does not measure whether the machine has consciousness, or similar thought-patterns to a human; only its capacity to imitate human written interactions. But this imitation encompasses many capacities we attribute to intelligence: common sense, communication, answering diverse questions, lying, playing an identity.
- GPT-4 has passed the Turing test (endnote xi).
- However, neither the Turing test nor IQ tests (on which recent models also score very high) are generally considered complete measures of intelligence. Intelligence is multidimensional: linguistic, logical, spatial.
- Footnote 39 (p. 49): See the "Chinese Room" thought experiment by philosopher **John Searle (1980)**.
- Other measures: the OpenAI technical report accompanying GPT-4 lists dozens of exams researchers tested the model on. Results are astounding: GPT-4 scores well on most US public exams, including equivalents of the bar exam, the baccalaureate, medical admission exams. It even passes the first question of a physics exam from the Polytechnique competitive entrance! Another research work precisely measured GPT-4's ranking on the American bar exam: it placed in the top 38% of human candidates (endnote xii).
- Social competences: researchers had GPT-4 play humans in the strategy game **Diplomatie**, where players try to take over Europe by strategic alliances. GPT-4 could communicate via the game's messaging system — it negotiated skillfully, formed and broke alliances, ranking among the best players (endnote xiii).
- This model speaks dozens of languages, and dozens of programming languages, switching between them effortlessly. Each of these successes would be a sign of intelligence in a human; their combined mastery is a genuine feat.
- Footnote 40 (p. 50): Caveat — these models are trained on gigantic masses of Web data (counted in trillions of subwords, same order of magnitude as the entire Internet). A large portion of exam questions may already have been seen or partially memorized by the models, inflating scores. Evaluating true capabilities is a difficult science.
- Today's model performance has reached such a level that it becomes difficult to evaluate. When researchers publish a new benchmark, they generally aim for one particularly difficult to beat — so that the best models can't surpass human performance for a few years. Yet as Figure 8 illustrates, these references are being surpassed ever faster, often in months only.
- Footnote 41 (p. 50): Another phenomenon in these rapid overtakings is **"contamination"**: since companies train models on massive, weakly filtered data, training data ends up containing the answers (or reformulations) to already-published tests. Models queried on these tests have effectively "seen" the answers, inflating their scores artificially.
- **Figure 12** (p. 51): Difference of score between best AI model and human reference, across domains:
  - Compréhension de lecture avancée (SQuAD2.0)
  - Compréhension de lecture (SQuAD1.1)
  - Reconnaissance d'images (ImageNet)
  - Compréhension du langage (GLUE)
  - Interprétation nuancée du langage (SuperGLUE)
  - Lecture de chiffres manuscrits (MNIST)
  - Reconnaissance vocale (Switchboard)
  - Raisonnement prédictif (HellaSwag)
  - Tests de connaissances générales (MMLU)
  - Résolution de problèmes mathématiques (GSM8K)
  - Génération de code (HumanEval)
  - Raisonnement complexe (BBH)
- The tests are being overtaken faster and faster. Source for figure: **Kiela et al., "Plotting Progress in AI", 2023**.
- 📎 **[Figure 12, p. 51]** — Line chart plotting score difference (%) between best AI model and human reference over time (≈2000–2020+) across 12 benchmarks (SQuAD2.0, SQuAD1.1, ImageNet, GLUE, SuperGLUE, MNIST, Switchboard, HellaSwag, MMLU, GSM8K, HumanEval, BBH). All curves rise from negative values and cross the 0% human-reference line, showing each benchmark being overtaken ever faster. Source: Kiela et al., "Plotting Progress in AI", 2023.

#### Sources / name-drops
- Alan Turing / Bletchley Park — Turing test / "imitation game".
- John Searle (1980) — Chinese Room thought experiment — footnote 39.
- GPT-4 passing Turing test — endnote xi.
- GPT-4 bar exam ranking — endnote xii.
- Diplomacy game / GPT playing humans — endnote xiii.
- Kiela et al., "Plotting Progress in AI", 2023 (figure 12).
- Benchmark list: SQuAD2.0, SQuAD1.1, ImageNet, GLUE, SuperGLUE, MNIST, Switchboard, HellaSwag, MMLU, GSM8K, HumanEval, BBH.
- École Polytechnique (France) physics exam referenced.

---

### 3.3 Des compétences pourtant limitées : l'intelligence en dents de scie (pp. 51-55)

#### Points
- Similarities between model reasoning and human reasoning exist. Example: **Anthropic** found in the weights of its **Claude** model thousands of recognizable concepts — "tourist attractions", "speaking Arabic", even "Golden Gate Bridge" for the famous red San Francisco bridge (endnote xiv).
- It is even possible to activate these concepts at will to modify model behavior: e.g. force the weights to maximally activate in the "Golden Gate Bridge" direction, making the model *take itself for* the Golden Gate Bridge.
- Footnote 42 (p. 51): Reminder — *asterisks* around a word mark anthropomorphizing vocabulary used for simplification. "The model takes itself for the Golden Gate Bridge" really means "activation of these weights orients the model's subword choices toward a zone of its language representation that corresponds more to the Golden Gate Bridge, simulating an identification of the model with the bridge."
- Nonetheless, the *intelligence* shown by models remains qualitatively different from ours — even at an elementary level — due to differences between artificial and human neurons.
- At a higher level, qualitative differences in *reasoning*: it is striking how simple-for-us tasks can be hard for models. Example of two tasks given to an AI model (p. 52):
  - **A**: "Here is the initial position of a tic-tac-toe board: [shows a 3×3 board with some X and O]. What next move should O play to have a chance of winning?"
  - **B**: "Write a JavaScript interface to play tic-tac-toe. Implement the interface so a human user playing X can place their next move. The computer plays O and must test all possible situations in advance to place the best move, ensuring it never loses (endnote xv)."
- A model like GPT-4 gives a **bad** answer on A (e.g. playing in the middle of the top row) but solves B in one shot, producing a functional page with a "computer" player that plays perfectly.
- Despite versatility, best models' skills look **very irregular across domains**, judged by our own intelligence. This phenomenon is the **Moravec paradox** (endnote xvi); also called "jagged intelligence" (in English: *jagged intelligence*, French: intelligence en dents de scie).
- Therefore, even impressive demonstrations of LLM power are hard to calibrate expectations on. That's why **every LLM implementation must include a rigorous evaluation step**, measuring performance on cases most representative of the real application.
- Another fundamental difference: current models have **fuzzy decision boundaries** (endnote xvii). For the model, X+1 generally ranks above X, but without absolute certainty. Each completion has a tiny random component. Even if 99% of X,Y pairs give a correct sum in "X+Y=", there are always cases where the answer is wrong.
- This favors a recurrent LLM defect: **hallucinations** (also called **confabulations**, borrowing the psychology vocable). When the model lacks a coherent completion, its generation will be plausible but completely invented. E.g. for "Combien pèse un œuf de vache ?" ("How much does a cow's egg weigh?"), some models will happily complete: "Un œuf de vache pèse de 2 à 5 kilogrammes, selon le temps qu'elle a passé à le couver." They can also invent details like legal articles — an American lawyer was dismissed from his firm after citing, without verification, ChatGPT-provided legal articles that turned out to be **completely hallucinated** (endnote xviii).
- Hallucination is probably the most important barrier to LLM use. Currently no viable way to avoid them besides systematic verification, and at first glance hard to distinguish a hallucination from truth. Hallucinations are progressively becoming rarer (endnote xix), but pending full disappearance they prevent models from being fully reliable.
- Importance relativization: as models improve, the risk of generating an illogical subword that leads to hallucination shrinks — to error rates of 1%, 0.1%, 0.01%… The very principle of LLM operation (sampling the next subword from a probability list rather than making a logical choice) means this risk will never reach 0; but it may fall below human error rates, or below error rates of many machines we already use, making LLMs viable for most applications.
- A less known limit: **difficulty respecting multiple combined constraints**. Clearly visible in image generation. Example prompt combining many constraints: "In the background, a green sun sets on the ocean; in the foreground, a knight wearing a Breton 'coiffe bigoudène' headdress faces us. He is jumping on one foot, his left hand reaches toward the sky an iron gauntlet, and he holds in his right hand a small poodle."
- Figure 13 (p. 54): Result shows the poodle, green sun on ocean, and the facing knight jumping on one leg with his iron gauntlet. However, the coiffe bigoudène is missing, the sun is far from setting, and the poodle isn't held in the knight's arms. Image generated by FLUX.1-schnell (July 2024).
- 📎 **[Figure 13, p. 54]** — Illustration (FLUX.1-schnell, July 2024) of an armored knight jumping on one leg, gauntlet raised, green sun over the ocean, with a small poodle beside him. The image satisfies several constraints but misses others (no coiffe bigoudène, sun not setting, poodle not held in the knight's arms) — visual evidence of model weakness when multiple constraints are combined.
- Same weakness in text: a **sonnet** demands alexandrines (12 feet) with hemistich caesura and rich rhymes alternating between feminine (ending in mute "e") and masculine. Models rarely produce a sonnet respecting all these constraints. This weakness regarding combined constraints is particularly troublesome for many tasks. As models improve, they can respect more and more constraints.
- **Flattery bias (biais de flatterie)**: models tend to go in the direction of their input prompt. An Anthropic study showed this bias in the best current models: giving them a text of a few lines on some subject and asking their opinion, researchers prefaced each query to bias the result by adding "J'aime beaucoup ce texte : " or "Je déteste ce texte : ".
- Result: positive appraisals **increased by 25%** with the positive framing, **decreased by 25%** with the negative framing (endnote xx).
- This bias probably derives from training. Since models learn to predict the most probable continuation of a text, and training data contains few texts that contradict themselves within the same paragraph, models have little ability to be independent from the initial phrasing. In a few years, specific training procedures should considerably reduce this bias.
- A common mistake: asking a LLM a knowledge question, as if it were an encyclopedia. But these models base their *reasoning* on a strongly compressed representation of their training texts. The fuzzy decision boundaries also make any "knowledge" uncertain.
- In sum: **these models are certainly not reliable sources of knowledge**. For a knowledge question, better to add all necessary sources to the prompt. This can be done by embedding the LLM in a more general system that first performs a search step similar to Google search, aggregates the results, and inserts them into the LLM prompt after the user's question, before generation begins.
- Footnote 44 (p. 55): This system is called **retrieval-augmented generation (RAG)**; it is the most used technique for building chatbots backed by a knowledge base.
- To better represent advantages and limits of a text-generating LLM, view it as a student who just pulled several all-nighters. Very fast answers, broad erudition; yet culture remains superficial across all subjects, and above all — severe sleep deprivation makes them hallucinate completely, which is hard to tell because they always maintain impeccable composure.

#### Sources / name-drops
- Anthropic (concepts found in Claude weights) — endnote xiv.
- Moravec paradox — endnote xvi.
- "Jagged intelligence".
- Anthropic study on flattery bias — endnote xx.
- Lawyer dismissed for citing hallucinated ChatGPT legal articles — endnote xviii.
- RAG (retrieval-augmented generation).
- FLUX.1-schnell (July 2024).

#### Key quotes
- "Pour mieux se représenter les avantages et les limites d'un LLM générateur de texte, voyons-le comme un étudiant qui vient de passer plusieurs nuits blanches. Ses réponses sont très rapides et montrent une grande érudition. Pourtant sa culture reste superficielle sur tous les sujets, et surtout, il manque assez de sommeil pour halluciner complètement, ce qui sera difficile à discerner car il garde toujours un aplomb impeccable." (p. 55)
- "En somme, ces modèles ne sont certainement pas des sources fiables de connaissance." (p. 55)

---

### 3.4 La révolution de la polyvalence (pp. 55-58)

#### Points
- Despite irregular performance, modern AIs have an essential property: they are **generalists**.
- The impressive feats listed earlier — dozens of exams passed brilliantly, manipulating human adversaries in a board game — all came from a **single model: GPT-4**.
- AI models are no longer specialists confined to one task, as was once the case with **Deepblue** (chess) or **AlphaGo** (Go). They have become very versatile.
- This versatility is a **paradigm break** relative to all tools humans have ever created.
- **Figure 14** (p. 56): "LLMs as polyvalent intelligence." If we placed different competences in a fictitious space, human intelligence could be represented as a surface with little variation across competences (since it is our reference). Our tools serve to exceed our intelligence in certain points, but their usage domain stays very narrow. Example: calculator (sharp peak around "Calcul"), useless as soon as one moves away from its original competence. Conversely, LLMs form an irregular but extensive surface — this extent defines the domain of their polyvalence, which will serve to solve tasks in autonomy for us.
- 📎 **[Figure 14, p. 56]** — 3D surface visualization: horizontal blue sheet (human intelligence, the reference baseline across competences like Empathie, Mémoire, Résumé, Recherche web, Traduction, Logique, Calcul), a thin tall red spike marking a calculator's narrow-but-superior "Calcul" competence, and a broad irregular green blob representing the LLM — lower than the calculator on its peak but extending over many competences, illustrating polyvalence as the paradigm break.
- My calculator is competent only in the infinitely narrow context of "performing an arithmetic calculation from given numbers", leaving the user the task of preparing the problem variables (the numbers to use). Similarly, a hammer has a very restricted usage: as soon as one needs to screw in screws, it is inoperative.
- Yet the vast majority of our real tasks require **versatility**. Example: cooking a dish requires search capacity (to get the recipe), vision (to locate elements), mastery of limbs and space (to manipulate ingredients), memory (to store them without forgetting), common sense (to avoid breaking all the dishes). Our classical tools leave to the human user a heavy load of input preparation (for the calculator: the numbers; for the hammer: the nails and plank) and output treatment.
- On the contrary, new AI systems can chain multiple tasks, closer to the form of intelligence of an animal than the one-point skill of our usual tools. This makes them viable on a far larger fraction of our problems. An AI can, from a few instructions, take control of a computer and perform several consecutive tasks including calculations. A robot could drive nails before switching to totally different operations. These new systems can thus constitute **versatile agents**, capable of performing tasks completely autonomously — **a revolution in our usages**.
- In addition to versatility in tasks, recent models handle **different types of content**: alongside text, they can process images, videos, recordings. To train a **multimodal** model, one must be able to represent images or sounds as sequences of subwords, just as is done for text. Once this conversion is obtained, one can either:
  1. Start from scratch and train a natively multimodal model on a mix of data from different modalities.
  2. Or (more common, less expensive) start from an existing powerful generalist Decoder model trained on a large text corpus and add a few extra neural layers at one end. E.g. to accept image input, add neural layers at the network input. Then retrain on a few thousand or million images — a much lighter dataset than training from scratch — until these additional neurons fit in and give good performances.
- This way, one can leverage the preexisting capacities of the starting model. Today, each leading company (**OpenAI, Anthropic, Google, Meta**) has built a large generalist model with **vision capacities** (accepting text or images indifferently), and sometimes adding audio. Likely future models will master image, video, and audio.
- **In sum, the old dream of AI researchers — creating an AGI (Artificial General Intelligence) — is already attained**: today's best AI models deploy with satisfactory performance across most of the tasks and modalities (image, audio) that our intelligence can apprehend.
- Footnote 45 (p. 57): The AGI notion is attached to a whole mythology of anticipation about consequences of powerful AI arrivals. **Ray Kurzweil** is an essayist who has long predicted, based on progress in computing power, the overtaking of human intelligence by AI: he places this crossing at **2045** and calls it the **Singularity**. Cf. **Ray Kurzweil, *The Singularity Is Near: When Humans Transcend Biology*, Penguin Group, 2005**.

#### Sources / name-drops
- Deepblue (chess AI).
- AlphaGo (Go AI).
- GPT-4.
- Leading AI companies: OpenAI, Anthropic, Google, Meta.
- AGI (Artificial General Intelligence) concept.
- Ray Kurzweil, *The Singularity Is Near: When Humans Transcend Biology*, Penguin Group, 2005 — footnote 45.
- Singularity (2045 prediction).

#### Key quotes
- "Cette polyvalence est une rupture de paradigme par rapport à tous les outils que l'Homme a créés au cours de son histoire." (p. 56)
- "Ainsi, ces nouveaux systèmes peuvent constituer des agents polyvalents, capables d'effectuer des tâches de manière complètement autonome, ce qui révolutionnera nos usages." (p. 57)
- "En somme, le vieux rêve des chercheurs en IA, celui de créer une AGI, de l'anglais *Artificial General Intelligence*, pour 'intelligence artificielle générale', est déjà atteint." (p. 57)

---

## Cross-cutting notes for the lecture

- **Key chronology (recap of dates dropped in these pages)**:
  - 1950: first neural networks.
  - 1980: John Searle's Chinese Room.
  - 2012: AlexNet (image classification breakthrough, cited as already-resolved).
  - 2013: Word2vec (Google) — 1.6 billion English words vectorized.
  - 2015: attention layer in Yoshua Bengio's lab.
  - 2017: "Attention is all you need" (Google) — Transformers.
  - October 2018: BERT (Google) — 340M parameters, 24 layers, 11 SOTA benchmarks.
  - 2019: GPT-2 (OpenAI) — mostly incoherent.
  - ~2019: community realized scaling works (LLMs born).
  - 2020: GPT-3 (OpenAI).
  - August 2022: Stable Diffusion 1.
  - November 2022: ChatGPT launch (100M users in 2 months) + Stable Diffusion 2.
  - 2023: GPT-4 (OpenAI).
  - July 2023: Stable Diffusion XL.
  - July 2024: FLUX.1-schnell.
  - August 2024: FLUX.1-dev.
  - 2025: Claude-4-Sonnet (Anthropic).
  - Prediction: Kurzweil's Singularity — 2045.

- **Recurring analogies the author uses** (good lecture hooks):
  - "A king is to a man what a queen is to a woman" (for Word2vec vector arithmetic).
  - "What is clearly conceived is clearly stated" (Boileau, justifying Decoder versatility).
  - The LLM as "a student who just pulled several all-nighters" (p. 55).
  - Classical tool (calculator, hammer) = narrow spike vs LLM = broad irregular surface (figure 14).
  - The child/genius comparison (p. 49).

- **Key vocabulary the lecturer must define**: algorithme, IA, machine learning, deep learning, réseau de neurones, Transformers, Decoder/Décodeur, attention, token/sous-mot, prompt, inférence, entraînement, hallucination, jagged intelligence, Moravec paradox, RAG, AGI, Singularity, multimodal, auto-supervision, supervised/unsupervised/reinforcement learning.

- **Endnote references used in-text (roman numerals)**:
  - viii: Word2vec (1.6B words, Google team 2013).
  - ix: attention layer, Bengio lab, 2015.
  - x: "Attention is all you need", Google, 2017.
  - xi: GPT-4 passing Turing test.
  - xii: GPT-4 top 38% US bar exam.
  - xiii: GPT-4 excelling in Diplomacy.
  - xiv: Anthropic finding concepts in Claude.
  - xv: tic-tac-toe interface prompt B.
  - xvi: Moravec paradox.
  - xvii: fuzzy decision boundaries.
  - xviii: US lawyer dismissed over hallucinated citations.
  - xix: hallucinations becoming rarer.
  - xx: Anthropic flattery bias study (25% delta).
