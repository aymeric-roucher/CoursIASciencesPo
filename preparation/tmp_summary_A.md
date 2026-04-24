# Summary — Ultra Intelligence, pp. 6-32 (Introduction + Chapter 1)

## Introduction (pp. 6-7)

### Points
- Humanity stands at the threshold of the greatest revolution in its history.
- Looking back across centuries, most past technological paradigm shifts were triggered by seemingly minor innovations: e.g. the wheel was simply a way to move chariots faster than dragging them; Sumerian cuneiform signs on papyrus were originally just for keeping commercial accounts — yet those "minor" inventions were revolutionary.
- What is happening now is far more exciting: we are beginning to build thinking machines.
- Vivid framing image: a slab of metal that responds to you with a human voice, with such sagacity that, hidden behind a sheet, you would have the illusion of conversing with a human being (this is a description of the Turing test).
- AI is the most revolutionary invention of humanity; the mind can get lost for a long time speculating about the possibilities it opens up.
- AIs are being developed that are increasingly advanced and impressive; researchers promise further major progress and the emergence of AI systems powerful enough to replace us in most daily tasks, driving a profound transformation of our societies.
- What strikes about this emergence of machine intelligence is the dazzling speed of its rise: in a few years, machines that could barely complete a sentence have learned to speak, argue, write poems and philosophy, and solve mathematical problems.
- Public reactions split into two great poles:
  - Techno-optimists: "AI will continue to develop rapidly, rise beyond human intelligence, and the future will be better for it."
  - Skeptics: "Certainly not; this is a false promise, AI will never match human intelligence."
- At both poles, one often finds the same error: confusing *probable* with *desirable* (probable vs. souhaitable).
  - Techno-optimists are often domain experts who naturally want to see their efforts succeed.
  - The skeptics are often those who don't want this emergence to happen and reassure themselves by repeating that "the rocket won't even lift off the ground."
- The book tries to go beyond this confusion: ultra intelligence seems possible and even probable, and some of its consequences are dangerous and deserve the most attentive study.
- Plan of the book announced as a rocket metaphor:
  - Part I: inspect the components of the rocket — trace the evolution of AI up to today, laying the foundations of contemporary AI.
  - Part II: analyze the trajectory of the rocket — progress in recent years, the fuels (energy, data, compute power), and estimate whether AI can reach "escape velocity" toward an ultra-intelligence (a superhuman artificial intelligence).
  - Part III: consequences of the arrival of ultra-intelligent AIs. Counter to the common view that a tool has no moral value because its effect depends only on use, the author defends the idea that every tool, by its very form, favors certain good or bad uses. AI is one of the most powerful tools ever created by humanity, so we must explore its potential impact on our country, on those around us, our environment and way of life.
- Final part: proposals for action.
- Methodological caveat (footnote 2, p. 7): the author apologizes in advance for English words — all research and engineering is in English; using an unknown French word would often betray the original meaning by cutting it from its usual context.

### Sources / name-drops
- Turing test — GPT-4 described as "the first LLM to pass it" (footnote 1, p. 6)
- GPT-4 (footnote 1, p. 6)

### Key quotes
- "L'humanité se tient au seuil de la plus grande révolution de son histoire." (p. 6)
- "Ce qui se produit sous nos yeux est autrement plus exaltant : nous commençons à construire des machines pensantes." (p. 6)
- "À ces deux pôles, on trouve souvent la même erreur, qui consiste à confondre *probable* et *souhaitable*." (p. 6)
- "L'ultra intelligence semble possible et même probable ; or, certaines de ses conséquences sont dangereuses et doivent faire l'objet de l'étude la plus attentive." (p. 6)

---

## Part I — Brève histoire de l'intelligence artificielle (p. 8)

### Points
- AI ("IA") has seen unprecedented bubbling of ideas and developments in recent years, but its roots go deeper.
- Its history is a saga punctuated by thunderclaps and reversals — a progressive technological construction whose stones still lie at the foundations of today's great algorithms.
- To start at the beginning, we return to the middle of the past century, on the eve of World War II.

---

## Chapter 1. La machine apprend : les réseaux de neurones (pp. 9-32)

### 1.1 Les ordinateurs contre Enigma (pp. 9-10)

#### Points
- In 1930 the German army began encrypting its communications using the Enigma machine, reputed to be inviolable.
- Enigma used three rotating rotors to substitute other letters for those of the original message, following a sequence that depended on a "key" — a three-letter string giving the rotors' initial configuration.
- French and Polish intelligence services set to work decrypting the code. Three years later they got hold of the machine's plans and dissected how it worked.
- Once a message was intercepted, one only needed to find the key to decode it. But obtaining this combination among hundreds of thousands of possibilities would have required titanic computing capacity to test each one.
  - Footnote 3 (p. 9): Testing all possible keys would "merely" have meant 26^3 = 17,576 combinations — but each machine also had a unique plug-board (cabling) combination that had to be recovered, multiplying the number of combinations to test.
- Polish mathematician Marjan Rejewski designed dedicated electronic circuits for decryption — the first electronic computers in history.
- After the 1939 invasion of Poland, Rejewski was welcomed by the French intelligence services to continue developing his machines.
- In 1940, Polish knowledge was transmitted to the United Kingdom. A British team led by Alan Turing resumed the work at Bletchley Park. Thanks to ever more powerful computers, they managed to decode most messages.
- The Germans, still believing their code inviolable, never understood what sorcery kept the Atlantic Allied convoys so often dodging their submarines.
- The decryption of Enigma gave the Allies a decisive advantage — it is sometimes estimated to have hastened Allied victory by two years.
- In any case, Enigma's breaking launched the construction of the first computers, already equipped with the function that would remain their only viable use until the 2010s: executing simple calculations at high speed in order to run algorithms.
- Technical focus — algorithms:
  - An algorithm is an ordered sequence of predefined steps, executed to give a result called "output" based on parameters called "inputs."
  - Analogy: a cooking recipe is an algorithm (ingredients = input, finished dish = output). Computer programs are likewise algorithms.
  - Example: an Allied decryption program takes the encoded message as input, tries all possible keys, and once one produces correct German output, stops and returns the decoded message.
  - Algorithms can be written as pseudo-code. Example given: computing the mean of a list — initialize "sum" to 0, iterate through elements, divide by number of elements.
  - Today's computers don't excel at "initiative," but they execute predetermined operations at the speed of light, making them extremely powerful for running algorithms — that's what they were built for.
  - Computer programs can reach great complexity, up to simulating an intelligence, but always keep the same method: take one or more inputs, process them in a predefined way to obtain an output.

#### Sources / name-drops
- Enigma machine (1930, German army)
- Marjan Rejewski — Polish mathematician (builder of first electronic decryption circuits) (p. 9)
- Alan Turing — British team leader, Bletchley Park, 1940 (p. 9)
- Endnote reference i (about Rejewski's work)
- Endnote reference ii (Enigma hastening Allied victory by two years)

#### Key quotes
- "Le décryptage d'Enigma donna aux Alliés un avantage décisif, au point qu'on estime parfois qu'il a hâté de deux ans la victoire alliée." (p. 9)

---

### 1.2 Un premier essai (pp. 10-12)

#### Points
- In the 1950s, with the rapid development of computers and the possibility to "program" them to modify the algorithms they executed, machines could now solve certain elementary mental tasks: mental arithmetic, list sorting, solving simple equations.
- Footnote 4 (p. 10): This possibility to reprogram machines was introduced in 1945 with a new computer architecture proposed by John von Neumann, which stored programs (the algorithms) in memory. Before that, programs were physical wirings that had to be set manually.
- A question arose immediately: "Can these machines be made more intelligent, maybe to the point of surpassing humans?" — the beginning of a passionate quest: how to build a thinking machine?
- Section "Un abus de langage ?" (A misuse of language?):
  - Can the name "intelligence" really be given to a computer algorithm?
  - Some AIs use "neural networks," but the term is almost an abuse: at the lowest level, these "neurons" function very differently from human neurons. The machine merely chains together simple mathematical functions.
  - Yet complexity can emerge from simple phenomena. An ant operates by elementary rules and communicates rudimentarily with others — yet from these elementary mechanisms emerges the collective efficiency of the colony that explores immense zones. Simplicity of basic bricks doesn't exclude system efficiency and complexity.
  - Today's algorithms already have capabilities once attributed to great human intelligence: extremely fast, polyglot, polymath, immense knowledge, even humor. They make mistakes a child would correct — not human intelligence — but still something powerful.
  - Whether the machine is "intelligent" depends on the definition of intelligence, an endlessly debated issue. If consciousness is part of the criterion, a machine may never be intelligent. If intelligence is defined broadly as the ability to orient means by adapting to an environment to accomplish goals, today's algorithms fit reasonably well.
  - Appealing to the adage "all models are false, but some are useful," the author allows himself the anthropomorphic approximation of "artificial intelligence." It is less wrong to say an algorithm is intelligent when it writes a poem in Farsi than to say a dog is intelligent when it finds its way home.
  - Footnote 5 (p. 11): "anthropomorphic" = "lending human traits to a non-human thing."
  - Similarly, other anthropomorphic terms like *preference* will be used: "the algorithm *prefers* choice A to choice B." Even though the algorithm has no personal preference, this shortcut is simpler than "the scores of sub-words leading to choice A are higher than those leading to choice B." To mark this distance from reality, such anthropomorphic terms will be marked with *asterisks* — so one should really write *intelligence* artificielle.

#### Sources / name-drops
- John von Neumann — new computer architecture, 1945 (footnote 4, p. 10)

#### Key quotes
- "La simplicité des briques de base n'exclut pas l'efficacité et la complexité du système." (p. 11)
- "Tous les modèles sont faux, mais certains sont utiles" (scientific adage) (p. 11)
- "Il est moins faux de dire qu'un algorithme est intelligent quand il écrit un poème en farsi que de dire qu'un chien est intelligent quand il a retrouvé son chemin." (p. 11)

---

### 1.3 Symbolistes contre connexionnistes (pp. 12-16)

#### Points
- With rapid computer development, researchers began trying to build machines that could solve well-defined problems: "read the digits in a given image" or "predict the probability of delay of the next subway given the latest passage times."
- A first approach, put into practice by American psychologist Frank Rosenblatt starting in 1950, consisted in reconstructing reasoning from the bottom up, stacking simple reasoning bricks to make more complex reasoning emerge.
- The ant colony analogy: an ant decides using simple, almost mechanical reasoning, yet combining and multiplying these elementary mechanisms, the colony obtains complex behaviors allowing it to explore efficiently. Why not compose such elementary mechanisms to progressively reach higher levels of abstraction and solve complex problems?
- Starting from this idea, Rosenblatt created elementary mathematical functions he called **neurons**. Architecture:
  - Each neuron takes several input signals, transforms them into one output signal.
  - Each input signal can be stronger or weaker (negative or positive values) and arrives via a channel carrying a coefficient, also called a **weight**, representing the importance the neuron gives to that signal.
  - The neuron sums all these inputs, each multiplied by its weight; if the sum exceeds a threshold, it activates and transmits the sum onward; otherwise, it transmits a signal of zero.
- Footnote 6 (p. 12): The mechanism described here is the ReLU function; many other activation functions exist, such as SwiGLU used in Meta's Llama-3 models.
- Figure 2 — schematic of an individual neuron with inputs, weights (colored from blue = negative to red = positive), sum, activation, and output. In the example, the sum is negative (below the zero threshold), so the neuron transmits zero.
- 📎 **[Figure 2, p. 13]** — Schematic of a single neuron: input signals, weighted channels (blue = negative, red = positive), summation, activation (ReLU), output. Example shown with sum = -0.79 → output 0.
- Neural network structure: the output of one neuron is transmitted via new connections to each neuron in the next layer, becoming an input for each of them. Each neuron may or may not activate in turn. Signals thus propagate from layer to layer, with specific weights assigned to each connection linking one layer's neurons to the next.
- Example: determine what animal is in an image, between two options — "fox" or "elephant."
- Footnote 7 (p. 13): this is a "classification" problem (output among predetermined values, here two). In contrast, a "regression" problem predicts one or several numbers that can take any value, e.g. predicting a stock price.
- Figure 3 — a complete neural network. Input = pixel values; layer 1 = simple shapes; layer 2 = complex shapes; output = detected species (Renard / Éléphant). The network is illustrated on an elephant image showing a "detect elongated snout" neuron (not activated — it's not a fox) and a "detect elephant tusks" neuron (strongly activated).
- 📎 **[Figure 3, p. 14]** — A full neural network applied to an elephant image: inputs = pixel values, layer 1 detects simple shapes, layer 2 detects complex shapes (snout, tusks), output = "Renard" / "Éléphant". Connection weights shown as blue-to-red colored arrows, arrow transparency = transmitted signal intensity.
- Input variables correspond to each pixel of the black-and-white image. Example: square images 20×20 pixels = 400 pixels, with values between 0 (black) and 1 (white), making 400 input variables. The network has a first layer of 400 neurons, several intermediate layers, and a final layer with just two neurons — one assigned to "fox," one to "elephant." Whichever activates more strongly is the prediction.
- The network output is always uncertain (the network can *be wrong*), so we call it the **prediction**. Strictly, "*proposition*" would be more apt (no notion of time), but *prediction* has become the standard term.
- The great strength of a neural network lies in the ability to tune it arbitrarily finely by varying the connection weights. Each neuron can thus be specialized to detect a particular proposition about the image, and neurons can build on one another.
- Worked example: suppose neuron A on layer n detects "the image shows an elongated, pointed, white object," and neuron B on layer n+1 detects "the image represents an elephant":
  - The weight from A to B should be positive, so that when A detects a tusk-like shape, B is helped to activate.
  - Conversely, if neuron C on layer n+1 detects "the image represents a fox," the weight from A to C should be negative — a fox has no tusk-like attribute.
- Each successive layer builds on previous ones to reach higher abstraction:
  - Layer 0 (input) = raw pixel signals.
  - Layer 1 = detects elementary shapes (each neuron specialized for one shape).
  - Layer 2 = detects motifs like "claw" or "ear."
  - Final layer = identifies the animal.
- All "*intelligence*" or "*knowledge*" of the network must be encoded in these connection weights. For one network, changing the weights completely changes its predictions. Example: swap the weights leading to the "elephant" output neuron with those leading to the "fox" neuron, leaving the rest of the network unchanged, and all predictions are inverted.
- While weights aren't well tuned, the network *knows* nothing — output neurons' activations (the "prediction") are random. Once tuned properly, the network can recognize with good precision the animal represented by the input image. This is the first working AI algorithm.
- Today's most advanced AI algorithms have more complex architectures than simple successive layers of neurons — new components can be inserted between layers to process signals differently — but they keep the same network structure: interconnected neurons with adjustable weights.

#### Sources / name-drops
- Frank Rosenblatt — American psychologist, 1950 (p. 12)
- ReLU activation function (footnote 6, p. 12)
- SwiGLU activation function — used in Meta's Llama-3 models (footnote 6, p. 12)

---

### 1.4 L'hiver de l'intelligence artificielle (pp. 16-18)

#### Points
- The construction of neural networks — called the **connectionist** approach because it relies on connecting many simple elements — first intrigued scientists by its attempt to imitate the human brain.
- After some successes, it was briefly the object of loud publicity.
- Footnote 8 (p. 16): The *New York Times* wrote in 1958 that this was "the embryo of an electronic computer that the Navy hopes will walk, speak, see, write, reproduce itself, and be conscious of its existence."
- But practical application quickly showed its limits: it hit a major difficulty — how to determine connection weights? Rosenblatt had to manually tune each weight in the whole network. Tuning was laborious and could outright fail — hard to find the right weights for complex problems. If the problem changed (e.g., not just foxes and elephants but a dozen new animal species, or cars and everyday objects), tuning had to start from scratch.
- The connectionist approach, unworkable at the time, progressively lost favor with the scientific community.
- Unable, as hoped, to reconstruct reasoning from the bottom up by assembling elementary bricks, researchers tried the opposite approach: building from the top down, starting directly at a high level of abstraction.
- The goal: describe the world through mathematical formulas — to "formalize" it. If a situation could be transcribed in mathematical symbols, applying the right calculation rules could compute a conclusion as the result of an operation.
- This other direction was named the **symbolic approach**. Theoretically appealing because, if successful, it would be absolutely reliable — but also extremely ambitious: the required mathematical language would have to express exactly all the concepts of the world (even abstract ideas already formulated or yet to be born) and formalize all decisions we make, including the most mechanical ones.
- Footnote 9 (p. 16): Another limit of the symbolic approach — using only symbols present or absent, black or white, forgoes all the nuances of reasoning where concepts would be uncertain or fuzzy.
- To limit this challenge's complexity, the symbolic community began restricting itself to specific domains like medicine. Yet even these specialized systems were difficult to design, and performance was mediocre. This approach bore little fruit and also fell into disuse.
- Thus began in the 1980s the "AI winter" — a long period of stagnation and doubt.
- Section "Loi de Moore et explosion de la puissance de calcul":
  - The connectionist approach had failed because of the difficulty of tuning network weights. Retrospectively, it lacked a **learning method** — an algorithm by which the network could automatically adjust itself from data, "learn" from that data.
  - But connectionists would have a second chance: a great force was working for them — available compute power was multiplying.
  - In 1965, Gordon Moore, future CEO of Intel, noted that the number of transistors (basic logic bricks) on an integrated circuit (processor) doubled every two years. Consequently, compute power available at constant price doubled at the same rhythm.
  - Named "Moore's law" after its inventor, this observation held for fifty years despite yearly predictions of its imminent end, and still holds its inexorable rhythm. Compute speed for a given cost has thus been multiplied by a billion over the last fifty years (figure 4).
  - Figure 4 shows the exponential curve of FLOPs per $1 from 1900 (Analytical Engine, ~1e-6) to 2020s (NVIDIA B100, ~1e12), passing through ENIAC, IBM 701, Apple II, IBM PC, Pentium II, GTX Titan.
  - 📎 **[Figure 4, p. 17]** — Moore's law: log-scale plot of FLOPs per $1 from 1900 to 2020s, ascending from Analytical Engine (~10^-6) through ENIAC, IBM 701, Apple II, IBM PC, Pentium II, GTX Titan up to NVIDIA B100 (~10^12). Y-axis grows by factors of 10.
  - Moore's law implies compute power is "multiplied by a factor 2 every two years" — by definition, exponential growth. The term "exponential growth" is used too often, which makes us forget its power: it is literally an **explosion**.
  - Footnote 10 (p. 18): In nuclear explosions, the chain reaction also follows an exponential law — doubling of neutrons at regular intervals.
- Illustrative tale — "the tyrant, the sage, and the chessboard" (13th century, by Kurdish historian Ibn Khallikan):
  - A tyrant reigning over India in immemorial times learned of the new game of chess and became passionately addicted, playing day and night and neglecting the kingdom.
  - He taught it to his generals to sharpen their strategic sense and even had chessboards placed in temples at the feet of gods' statues.
  - He wished to meet the inventor — a simple old sage named Sissa, who barely dared look at the throne.
  - The king, surprised by Sissa's simplicity, offered him the reward of his choice. Sissa first refused, but finally smiled and asked: "I want you to give me the grains of wheat that will cover a chessboard, laid as follows: one grain on the first square, two on the next, then four, and so on, doubling each square, until the last square is covered."
  - The king, amused, ordered slaves to begin pouring grains. Very quickly, the jars ran dry. All the palace granaries were insufficient, and all the kingdom's reserves would not have sufficed. Filling the chessboard would have required 2^64 grains of wheat — approximately 10^19 grains (10,000,000,000,000,000,000) — a mass more than six times that of all living beings on Earth.
  - For comparison: between 1900 and 2020, compute power available for the same price was multiplied by about 10^18 — almost as much as in the fable. This explosion of compute power is what carried the current AI revolution.

#### Sources / name-drops
- *New York Times*, 1958 article on Rosenblatt's machine (footnote 8, p. 16)
- Gordon Moore — future CEO of Intel, 1965 (p. 17)
- Moore's law (p. 17)
- Ibn Khallikan — 13th-century Kurdish historian, author of the tale of the tyrant, the sage, and the chessboard (p. 18)
- Figure 4 milestones: Analytical Engine, ENIAC, IBM 701, Apple II, IBM PC, Pentium II, GTX Titan, NVIDIA B100

#### Key quotes
- "Ainsi débuta dans les années 1980 « l'hiver de l'IA », une longue période de stagnation et de doute." (p. 16)
- *New York Times* (1958): "l'embryon d'un ordinateur électronique dont la Marine espère qu'il marche, parle, voie, écrive, se reproduise lui-même et soit conscient de son existence" (footnote 8, p. 16)
- "C'est cette explosion de la puissance de calcul qui a porté la révolution actuelle de l'IA." (p. 18)

---

### 1.5 Yann Le Cun et l'apprentissage automatique (pp. 18-20)

#### Points
- 1980 marks the true beginning of modern AI. At that time the connectionist approach was still banned from the scientific community.
- A young twenty-year-old Frenchman, Yann Le Cun, reads the account of a debate held a few years earlier between linguist Noam Chomsky and developmental psychologist Jean Piaget.
- The Chomsky-Piaget debate:
  - Noam Chomsky maintained the existence in the brain of pre-established structures enabling language learning.
  - Jean Piaget defended the opposite idea: everything is learned, and the construction of language happens progressively as intelligence develops.
- Footnote 11 (p. 18): Y. Le Cun, *Quand la Machine apprend. La révolution des neurones artificiels et de l'apprentissage profond*, Odile Jacob, 2019.
- This idea of a progressive construction of reasoning aligned with connectionist ideas. Le Cun, seduced, had the immediate intuition that this idea of learning should be deepened and applied to algorithms.
- Footnote 12 (p. 19): On the parallel with the human brain — a hypothesis formulated by Donald Hebb in the 1950s, now called the "Hebbian hypothesis," states that "neurons that fire together wire together." This has been confirmed by neurological studies, suggesting the real brain uses connectionist learning processes.
- Recall: the only barrier to neural network development was that performance depended entirely on connection weights, and tuning them was too laborious. But if an automatic procedure could make networks "learn" by adjusting the weights until good predictions emerged, the difficulty would be solved.
- Illustration via the cooking recipe algorithm (takes ingredients as input, applies the recipe, gives a finished cake as output). Cooking time is one parameter — how to tune it to get the best recipe?
  - Automatic recipe tuning = applying a learning algorithm (itself an algorithm, developed to optimize another algorithm).
  - The cook starts with cooking time = 25 minutes; once the cake is ready, he tastes it. If overcooked, he subtracts two minutes; if undercooked, he adds three.
  - He iterates, adjusting "cooking time" at each new preparation, until the recipe is perfectly tuned. He then stops and notes the final recipe.
- Footnote 13 (p. 19): Of course this method for a cake recipe is laborious — dozens of trials before a perfect cake. But in computing, successive tests happen in an instant.
- This idea of automating the search for the best parameters is a field called "automatic learning," better known by its English name **machine learning**.
- When Yann Le Cun begins his PhD, he decides to dust off neural networks and lays the first stones.
- Section "Le Cun parvient à faire apprendre son réseau de neurones":
  - Automatic learning requires many examples. For a cake recipe with just one parameter, a few examples suffice. But neural networks have hundreds of parameters — if not billions. Automatic learning applied to them requires a vastly larger dataset.
  - Recall the animal-recognition network. To train it, thousands of examples are needed — each a pair: input variable (a photo) and expected output value ("fox" or "elephant"). This collection is called a **dataset**, said to be **annotated** since each entry carries its expected answer as annotation.
  - How to use this dataset to automatically tune network weights? Tuning is far from simple because such networks are "deep" — many intermediate layers build on each other to progress in abstraction. It's hard to tune intermediate layers given only input/output values. How to explain the link between adjusting a weight in layer 14 and the output of the network twenty layers further?
  - That's the entire challenge of the discipline called **deep learning** (apprentissage profond). Deep learning is a sub-category of machine learning, just as neural networks are a sub-category of algorithms.
  - The learning algorithm built by Le Cun reuses a mathematical technique called **backpropagation of the gradient** (rétropropagation du gradient), applied to machine learning.
  - In brief: the network-in-training is run on thousands of examples; for each example, it computes the prediction, then the gap between prediction and true answer; then it adjusts the connection weights by a small notch in the direction that reduces this gap. Example by example, step by step, the learning algorithm refines the network's predictions until it is optimally tuned and performs well on the training task.
  - Le Cun consolidates the theory (endnote iv), building on concomitant work of a Canadian named **Geoffrey Hinton**, and applies it to neural networks.
  - His goal: help the American postal service automatically read handwritten zip codes on checks. His network must take as input a 28×28-pixel photo of a digit (endnote v) and return as output the digit written in the photo.
  - Le Cun builds his network, applies his learning procedure on thousands of examples. Result: dazzling success — his neural network far surpasses all systems of the era.
  - Le Cun's system is then deployed to recognize handwritten digits on checks, with great success: by the late 1990s, it processes 10 to 20% of all checks cashed in the United States.

#### Sources / name-drops
- Yann Le Cun — young 20-year-old Frenchman in 1980 (p. 18)
- Noam Chomsky — linguist (p. 18)
- Jean Piaget — developmental psychologist (p. 18)
- Y. Le Cun, *Quand la Machine apprend. La révolution des neurones artificiels et de l'apprentissage profond*, Odile Jacob, 2019 (footnote 11, p. 18)
- Donald Hebb — 1950s, "Hebbian hypothesis" / "neurons that fire together wire together" (footnote 12, p. 19)
- Geoffrey Hinton — Canadian researcher (p. 20)
- Endnote iii (on the mathematical technique of backpropagation)
- Endnote iv (on Le Cun consolidating the theory)
- Endnote v (on 28×28-pixel digit photos)

#### Key quotes
- "Cette idée d'automatiser la recherche des meilleurs paramètres pour un algorithme est un champ d'étude appelé « apprentissage automatique », plus connu sous le nom anglais de *machine learning*." (p. 19)

---

### 1.6 Apprentissage puis inférence (pp. 20-25, "Focus technique" on descent)

#### Points
- Yann Le Cun made **learning** (training) possible — training the network by automatically adjusting its weights from thousands of input examples. This technique is roughly the same as today's, and it is by applying it that we progressively give our networks the capacity to *reason*.
- For today's giant networks, this training costs millions of euros, lasts months, and can mobilize hundreds of thousands of processors in server farms consuming as much electricity as an entire French department.
- For this reason, a model's *knowledge* stops at a certain date: since retraining would take months, one can't integrate yesterday's news.
- Footnote 14 (p. 21): we will see that this "knowledge" is extremely fuzzy.
- Once training has pushed the network to satisfactory performance, the weight values are **frozen** — they're just lists of positive or negative numbers in memory. Then the network can be used for its initial purpose: making predictions.
- This second step is called **inference**. Here, the network simply predicts a result from one input example; the signal passes through the neurons' connections only once; inference lasts at most a few seconds. When a user dialogues with a chatbot, it's inference.
- Always keep in mind the distinction: *learning* is like the thousands of experiments needed to develop a physics formula; *inference* is the simple application of that formula to one example.
  - When we say training or optimization — that's the learning step.
  - When we say prediction, generation, or completion — that's inference.
- Figure 5 — Difference between training and inference:
  - Training / Learning: an automatic procedure adjusts the AI (the "model") based on a training dataset. For a neural network, tuning = setting connection weights. Infrastructure: thousands of GPUs running continuously for months.
  - Usable model: just a list of numbers representing each layer's connection weights, e.g. [0.15; -2.37; ...; 0.87; -0.13]. Can be published.
  - Usage / Inference: make the AI "*think*": give it inputs to obtain its output ("prediction"). For an LLM this output is the completion of text; if run multiple times, the LLM completes the whole text. Infrastructure: a single GPU running for a few seconds.
- 📎 **[Figure 5, p. 21]** — Difference between training and inference: three-box diagram showing (1) Training/Apprentissage (automatic weight adjustment on dataset, thousands of GPUs for months), (2) Usable model = list of connection weights [0.15; -2.37; …; 0.87; -0.13], publishable, (3) Usage/Inference (feed input → get prediction, single GPU for seconds).

#### Technical focus (pp. 22-25) — "Apprentissage : trouver la vallée la plus basse par descente de gradient"
- "How to make a neural network — whose weights were initialized randomly — learn or train so it becomes performant on a task?"
- Using the fox/elephant classification example:
  - Training ingredient: a dataset of annotated photos, e.g. n°1 [photo_1193.jpg; "fox"], n°2 [photo_2194.jpg; "fox"], n°3 [photo_7167.jpg; "elephant"]. At least hundreds needed.
  - Create a multi-layer network with a final layer of two neurons. Neuron 1 → fox, neuron 2 → elephant.
  - Connection weights are random numbers; predictions at this stage are random — the network is useless.
  - We want to train it — tune its weights for correct predictions.
- We want to find the best set of parameters: the weights giving the lowest average number of wrong predictions on the training data.
- Footnote 18 (p. 22): The terms "weights" and "parameters" are used interchangeably.
- This average error is called the **cost function** (*loss function* in English, often *loss*) — "cost" because error is a cost to minimize; "function" because this average error varies *as a function of* the chosen parameters.
- Footnote 19 (p. 22): *loss function* in English, often just *loss*.
- To find the best parameters minimizing the cost function, imagine a network with only 2 parameters (A and B) — a drastic simplification since real models have thousands or billions.
- Visualization: 3D graph with A on X axis, B on Y axis, cost function value on Z axis — a mountainous landscape (figure 6).
- 📎 **[Figure 6, p. 23]** — 3D "mountainous" cost-function landscape over parameters A (X-axis) and B (Y-axis); arrows show the gradient-descent path from "Départ" via "Pas successifs" toward the global minimum (deepest valley), with a shallower local minimum also visible.
- Mountains = bad parameters, high error. Valleys = local minima — good parameters. Goal: find the deepest valley, called the **global minimum**.
- Random initialization = random starting point on this landscape, a bad way to start a hike.
- Why not compute the global minimum directly?
  - Gridding the landscape — e.g. 20 values on each axis = 400 combinations — works for a simple 2D landscape, but real networks have millions of parameters. For a million parameters with 10 values on each axis, there would be 10^(1,000,000) combinations — we'd still be testing in centuries. Constrained by compute, we must restrict tests to a very small zone.
- Analogy of the mountaineer lost in a snowstorm:
  - Seeking refuge at the bottom of the valley, he can't see one meter ahead.
  - Illuminating intuition: to reach the bottom, always go downhill. He gauges the slope on his current square meter: which side is higher, which is lower? This slope is mathematically called the **gradient**. He computes it to orient himself and takes a small step downward, modifying his position (parameters X and Y) to decrease altitude.
- Applying the same method to choose how to vary parameters:
  - Randomly draw a few (say four) examples from the dataset — pairs of photo + animal name.
  - Compute the network's prediction on each.
  - Compare to the true name: correct or wrong?
  - For each correct prediction, reinforce the weights that helped produce it.
  - For each wrong prediction, penalize (diminish) the responsible weights.
- Le Cun's backpropagation is the key algorithm that traces back up the network starting from the end (the prediction) to establish this individual "responsibility" of each weight in the correct or wrong prediction.
  - Example: if on the four drawn examples, parameter A was on average responsible for too high an activation on output neuron n°1 (i.e., A made us overestimate the probability the image is a fox), we want to reduce A. Conversely, if increasing B would have slightly decreased that over-prediction, we want to increase B.
- The mountaineer descends a tiny altitude. Repeating this procedure hundreds of thousands of times, he keeps descending, like a ball rolling downhill under gravity, until finding the deepest valley — the configuration of weights with the fewest errors.
- This algorithm is called **gradient descent**.
- Isn't there a risk the mountaineer gets stuck in a local minimum (a shallow valley)? Surprisingly, no: most of the time, gradient descent descends long enough to find a very good minimum.
- This algorithm, while refined since Le Cun and Hinton — e.g., today we add *inertia* to the ball to prevent it stopping in the first basin — has kept its fundamental principles and remains the basis of AI today.
- Footnote 20 (p. 25): For more, see Adam and AdamW algorithms, widely used today.

#### Sources / name-drops
- Gradient descent (algorithm name)
- Adam / AdamW optimizers (footnote 20, p. 25)

#### Key quotes
- "Dans le cas des réseaux gigantesques d'aujourd'hui, cet apprentissage coûte des millions d'euros, dure des mois et peut mobiliser des centaines de milliers de processeurs, dans des fermes de serveurs qui consomment autant d'électricité qu'un département français entier." (p. 21)
- "Quand un utilisateur dialogue avec un chatbot, il s'agit d'inférence." (p. 21)

---

### 1.7 La « conspiration du deep learning » (pp. 25-26)

#### Points
- Despite Yann Le Cun's and Geoff Hinton's first successes, the AI winter isn't over. Other algorithms work effectively on small datasets and don't require training procedures as complex as neural networks.
- Footnote 21 (p. 25): For example the SVM, which resembles a one-layer neural network.
- Moreover, training procedures for deep neural networks offer no theoretical guarantee of success — the gradient-descent mountaineer might remain stuck in a valley less deep than the optimum.
- Footnote 22 (p. 25): Mathematically, the cost landscape is "non-convex," so local optima can exist that are not the sought global optimum.
- Deep neural networks are considered less elegant and remain banned from the mainstream AI community.
- In the 2000s, Yann Le Cun collaborates with Geoff Hinton and Yoshua Bengio at the Canadian Institute for Advanced Research (CIFAR). Many regard them as cranks — Le Cun nicknames the team the "conspiracy of deep learning." They do not surrender.
- The development of **GPUs** (a new processor type that considerably accelerates the matrix multiplications essential to their algorithms) finally lets them express the power of learning on their networks, thanks to ever-larger datasets published each year.
- Footnote 23 (p. 25): **Graphics processing unit** (GPU) — initially developed for 3D graphics matrix multiplications, particularly for video games.
- They convince a growing fringe of the community. Each year, machine-learning researchers worldwide meet at large congresses to present ideas and results.
- In 2007, the **NeurIPS** conference refuses, without explanation, the workshop proposed by the trio to showcase their models' prowess. Undeterred, they organize a parallel workshop funded by CIFAR and charter their own bus to transport participants. It is a resounding success — three hundred researchers attend, and it becomes the most attended event of the conference (endnote vi).
- Deep learning then starts to impose itself in several domains, notably image processing.
- **Alex Krizhevsky**, a student of Hinton, tackles image classification: given an image, determine what object it represents.
- How to measure algorithm performance (a necessary condition for improvement)? The scientific community uses specific datasets called **benchmarks** ("bancs de test"). Like training datasets, each example is an input + expected answer pair. One transmits each input to the network, gets a prediction, counts the percentage of matches with the expected answer — the model's score.
- The biggest challenge of the time is the immense test benchmark **ImageNet**: twelve million images to classify among twenty-two thousand categories.
- In 2012, at the **ECCV** conference, Krizhevsky unveils his neural network. Before a packed room and in the presence of **Fei-Fei Li**, director of Stanford's SAIL lab and creator of ImageNet, he announces his network has surpassed the world's best model — by halving the number of errors.
- It doesn't take long for neural networks to impose themselves on all benchmarks. Computer scientist **Richard Sutton** described this victory as a "bitter lesson": all the most sophisticated symbolic approaches aiming to reproduce the way we believe we reason are beaten hands-down by the connectionist approach — simple stacks of neurons, provided they are trained with enough data and compute.
- Carried by deep learning's successes, Yann Le Cun is hired by Mark Zuckerberg to launch AI research at Meta (then Facebook). Since, he has directed Meta's effort to propose **open models** — publishing their architecture and their weights.
- Footnote 24 (p. 26): Precise English typology — ***open weights*** (open weights) for models whose architecture and weights are public; ***open source*** for those that also publish all resources needed to train them.

#### Sources / name-drops
- SVM (Support Vector Machine) — contrast algorithm (footnote 21, p. 25)
- Yoshua Bengio — collaborator with Le Cun and Hinton (p. 25)
- CIFAR — Canadian Institute for Advanced Research (p. 25)
- GPU (graphics processing unit) (footnote 23, p. 25)
- NeurIPS conference, 2007 (p. 25)
- Alex Krizhevsky — Hinton's student (p. 26)
- Fei-Fei Li — director of Stanford's SAIL lab, creator of ImageNet (p. 26)
- ImageNet — 12 million images, 22,000 categories (p. 26)
- ECCV conference, 2012 (p. 26)
- Richard Sutton — "bitter lesson" on deep learning victory (p. 26)
- Mark Zuckerberg — hiring Le Cun for Meta/Facebook AI research (p. 26)
- Meta (ex-Facebook) — open-model strategy (p. 26)
- Endnote vi (about the 2007 CIFAR workshop success)

#### Key quotes
- "Le Cun surnomme leur équipe la « conspiration du *deep learning* »." (p. 25)
- "Toutes les approches symbolistes les plus sophistiquées visant à reproduire la manière dont nous croyons raisonner sont battues à plate couture par l'approche connexionniste de simples empilements de neurones, pourvu qu'ils soient entraînés avec suffisamment de données et de puissance de calcul." (p. 26)

---

### 1.8 Il ne suffit pas de prédire (pp. 27-31)

#### Points
- We've seen how Le Cun and Hinton's backpropagation enables neural networks to learn — to use data to automatically tune their connection weights and give correct predictions for future inputs. But learning alone isn't enough for the tool to provide real added value.
- Section "La machine peut apprendre bien ou mal":
  - Networks with enough neurons are **universal approximators** — thanks to their particular structure, by tuning their internal parameters (connection weights), they can reproduce any input-output relation. The network is flexible enough to imitate any function, whether mapping millions of image pixels to "it's a fox," or the same pixels to "the photo was taken in Mozambique," or any other task.
- Technical focus — "L'approximation universelle grâce aux fonctions non-linéaires":
  - An essential component: apply a non-linear function (activation function) to each neuron's output before transmitting the signal. In our earlier example, the non-linear function was "if my input is negative, I return 0; otherwise, I return my input" — the ReLU function.
  - If we only connected neurons that sum input signals with coefficients (without a non-linear function), the entire network would be "linear" in math terms — undesirable properties like "if you multiply all inputs (e.g., pixel values) by 0.5, the output is also multiplied by 0.5."
  - Such a network wouldn't be useful: dividing a cat photo's brightness by two (= halving each pixel value) would halve the output neuron's value — "this is a cat" would become half as certain. Not what we want: at night cats may be gray but are no less cats; we want the network to still identify them with the same certainty.
  - The non-linear activation function breaks linearity — a necessary condition for the network to be a universal approximator.
- Universal approximation is a big asset, but not enough to produce useful predictions.
- Dictionary analogy:
  - A dictionary is also an algorithm: input a word like "palimpseste," output the corresponding definition ("noun, masc. A. – Manuscript on parchment from ancient authors that Medieval copyists erased to overwrite with a second text").
  - The dictionary is also a universal approximator — definitions can be modified, as *Le Petit Robert* does every year.
  - But when looking for a word not in it, the dictionary is useless. In real-world problems, it's fundamental to give the model an input never seen in training and still get a correct prediction. E.g., an image classifier must identify a dog even if it's an unknown breed.
- Risk of training on a specific dataset: our AI becomes a dictionary — memorizing training data until getting excellent training scores, but unable to handle a new example. Such a trained model is like a student cheating by writing crib-sheets for the whole course — incapable of answering as soon as the question differs slightly. This phenomenon is called **overfitting** ("surapprentissage"), illustrated in figure 28 [sic]. Such a model is incapable of **generalizing** what it has learned.
- Figure 7 — training set: 3000 random points [latitude; longitude], with value 0 (blue = not in France) or 1 (red = in France).
- 📎 **[Figure 7, p. 28]** — Training set visualization: 3000 random [latitude; longitude] points scattered over a 3D plot, red points (value 1, in France) clustered inside the country's footprint, blue points (value 0, outside) surrounding them.
- Figure 8 — several models attempting to predict "this point is in France" (0/1) from latitude and longitude:
  - 8A: **Underfitting** — prediction fails to reproduce even training points (a smooth, blurry surface that doesn't match France's shape).
  - 8B: **Overfitting** — prediction varies a lot; even if correct on all training points, it won't be on unknown points (a spiky jagged surface).
  - 8C: **Satisfactory prediction** — network of 5 layers of 30 neurons, trained for 100,000 steps (clean blocky prediction approximating France's shape).
- 📎 **[Figure 8A, p. 29]** — Underfitting: a smooth, blurry 3D prediction surface over latitude/longitude that fails to reproduce even the training points (no France shape visible).
- 📎 **[Figure 8B, p. 30]** — Overfitting: a spiky, jagged prediction surface — correct on training points but wildly varying, failing to generalize to unknown points.
- 📎 **[Figure 8C, p. 30]** — Satisfactory prediction from a 5-layer × 30-neuron network trained for 100,000 steps: a clean blocky plateau approximating the shape of France.
- The right way to learn: instead of memorizing training examples by heart, retain the reasonings to apply when solving them — reasonings that will generalize much more easily to unknown examples. The network can create sufficiently broad resolution categories like "if there's a triangular snout and no trunk, the animal is probably a dog rather than an elephant." Such reasoning by assimilation to a known class is called a **heuristic**. None alone will solve the problem, but combining heuristics lets the model find an answer even in new cases — like the photo of an unknown breed.

#### Sources / name-drops
- *Le Petit Robert* (dictionary, p. 28)

---

### 1.9 Simplifier les heuristiques : le rasoir d'Ockham (pp. 31-32)

#### Points
- How to prevent the model from falling into memorization and instead favor heuristics? A very effective means is to force the model to simplify its reasoning structures. E.g., constrain the model to use no more than ten decision criteria — impossible to cheat by memorizing a thousand question-answer pairs: the only way to get good training performance will be to develop efficient heuristics.
- This follows **Ockham's razor**, a methodological principle formulated by the English Franciscan monk **William of Ockham** in the 14th century: "Multiples must not be used without necessity."
  - Footnote 26 (p. 31): Latin: *Pluralitas pluralitas non est ponenda sine necessitate*.
- This means: when seeking to explain a phenomenon, if we have the choice between two theses that seem to agree equally with observations, favor the one using the fewest different factors. One could explain any phenomenon with an absurd thesis given enough exceptions and variants. But the simplest theory cannot cheat: if it matches reality, then it IS reality.
- We often use this principle unconsciously. Example: a schoolchild late to morning French class explains his tardiness by bad luck — the teacher will doubtless think the student simply slept in.
- This search for simplicity invalidates most conspiracy theories. If climate warming were a conspiracy-fabricated invention, it would require flawless coordination of thousands of actors around the globe falsifying huge volumes of observations. Simpler to admit the climate is warming, even if unpleasant consequences follow.
- Bertrand Russell called Ockham's razor "the supreme methodological maxim in philosophy" (endnote vii).
- Ockham's razor is the source of many deep-learning techniques. Example: **regularization** — during training, a tendency is added for all connection weights to approach 0. If a weight isn't pushed toward a significant positive or negative value by training, it's useless; regularization will progressively push it back toward 0, deactivating the connection. Regularization prunes the network to simplify its structure, as when we simplify a line of reasoning. Empirically, it produces much better-performing trained networks.
- Simplification has limits — the theory must keep enough subtlety to fit observations. **Albert Einstein** summarized the balance to strike: "Everything should be made as simple as possible, but not simpler." For neural networks it's the same — a balance to find between network simplicity and its capacity to reproduce training observations.
- **Richard Sutton** regretted that effort invested in building sophisticated reasoning structures is of little use compared to raw compute power training on millions of examples. Does the preceding paragraph (showing good mechanism choice favors learning) contradict his view?
- In reality these two points don't contradict — they concern two different levels of intelligence. Sutton's point bears on the base level (reasoning itself): dictating reasonings to the machine oneself is inefficient. But going up a level, it's possible to give the model the right structures to let it learn efficiently. We don't explain to the machine how to solve each problem, but we give it the necessary structures to learn, and apply the right learning methods so the machine discovers all methods by itself — just as a good teacher doesn't only dictate preconceived solutions but prefers to help students learn.

#### Sources / name-drops
- William of Ockham — English Franciscan monk, 14th century (p. 31)
- Ockham's razor — Latin *Pluralitas pluralitas non est ponenda sine necessitate* (footnote 26, p. 31)
- Bertrand Russell — quoted on Ockham's razor being "the supreme methodological maxim in philosophy" (p. 32)
- Albert Einstein — "Everything should be made as simple as possible, but not simpler" (p. 32)
- Richard Sutton — "bitter lesson" again evoked (p. 32)
- Endnote vii (Russell quote)

#### Key quotes
- "Les multiples ne doivent pas être utilisés sans nécessité." (Ockham) (p. 31)
- "La théorie la plus simple ne peut pas tricher : si elle coïncide avec la réalité, c'est qu'elle est la réalité." (p. 31)
- "Tout doit être rendu aussi simple que possible, mais pas plus simple que cela." (Einstein) (p. 32)
- "On n'explique pas à la machine la méthode de résolution de chaque problème, mais on lui donne les structures nécessaires pour apprendre, et on lui applique les bonnes méthodes d'apprentissage pour lui faire découvrir par elle-même toutes ces méthodes, de la même manière qu'un bon professeur ne dicte pas seulement aux élèves des solutions préconçues, mais préfère les aider à apprendre." (p. 32)

---

## Consolidated source/name-drop list (all pp. 6-32)

- Turing test (footnote 1, p. 6)
- GPT-4 (p. 6)
- Enigma (1930) (p. 9)
- Marjan Rejewski (p. 9)
- Alan Turing, Bletchley Park (1940) (p. 9)
- John von Neumann (1945 architecture) (footnote 4, p. 10)
- Frank Rosenblatt (1950) (p. 12)
- ReLU, SwiGLU, Llama-3 (Meta) (footnote 6, p. 12)
- *New York Times* (1958 quote on Rosenblatt) (footnote 8, p. 16)
- Gordon Moore / Intel / Moore's law (1965) (p. 17)
- Ibn Khallikan, 13th-century Kurdish historian — tale of the chessboard (p. 18)
- Yann Le Cun (p. 18)
- Noam Chomsky, Jean Piaget (p. 18)
- Y. Le Cun, *Quand la Machine apprend*, Odile Jacob, 2019 (footnote 11, p. 18)
- Donald Hebb, Hebbian hypothesis (1950s) (footnote 12, p. 19)
- Geoffrey Hinton (p. 20)
- Adam / AdamW optimizers (footnote 20, p. 25)
- SVM (footnote 21, p. 25)
- Yoshua Bengio (p. 25)
- CIFAR (Canadian Institute for Advanced Research) (p. 25)
- GPU (graphics processing unit) (footnote 23, p. 25)
- NeurIPS conference, 2007 (p. 25)
- Alex Krizhevsky (p. 26)
- ImageNet (12M images, 22K categories) (p. 26)
- ECCV 2012 (p. 26)
- Fei-Fei Li, SAIL / Stanford (p. 26)
- Richard Sutton, "bitter lesson" (pp. 26, 32)
- Mark Zuckerberg, Meta (ex-Facebook) (p. 26)
- Open-weights vs open-source terminology (footnote 24, p. 26)
- *Le Petit Robert* (p. 28)
- William of Ockham, 14th century, Ockham's razor (p. 31)
- Bertrand Russell (p. 32)
- Albert Einstein (p. 32)
- Endnotes referenced in text: i (Rejewski), ii (Enigma war impact), iii (backpropagation), iv (Le Cun theory), v (28×28 pixel digits), vi (CIFAR 2007 workshop success), vii (Russell quote)
