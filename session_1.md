# Session 1. From calculators to ultra-intelligence

*Sciences Po Paris, English-language course for undergraduates.*
*Instructor: Aymeric Roucher, author of Ultra-Intelligence. 2-hour session, target pace around 140 wpm.*

---

# 0. Opening (about 3 min)

**Key points:**

- Today is going to be different from most classes you took this year.
- Course arc: 6 sessions walking from a British maths department in 1940 to the frontier of machines that outthink us.
- AGI-pilled framing: ultra-intelligence is possible and probable, and we constantly underestimate how fast the exponential takeoff is going.

> Today is going to be different. I am not going to read a history of AI off a slide. I am going to tell you a story, and the story has a twist: the machine at the end of it is, very probably, smarter than the person at the beginning.
>
> That is the arc of this course. 5 sessions. We start in 1940 in a hut in the English countryside, where a stuttering mathematician is trying to crack a German cipher, and we end, in Session 5, looking at curves that suggest the entity you will be talking to in a few years is, on most cognitive tasks that matter, better than you.
>
> Public reactions to this prospect split into two poles. Techno-optimists say AI will continue to develop rapidly, surpass human intelligence, and the future will be better for it. Skeptics say this is a false promise, AI will never match human intelligence. At both poles you find the same error: confusing what is *probable* with what is *desirable*. Optimists are often domain experts who want to see their efforts succeed. Skeptics are often the people who do not want this emergence to happen and reassure themselves by repeating that the rocket will not lift off. We are going to try to dodge that confusion. The argument of this course is that ultra-intelligence is possible and even probable, and that some of its consequences are dangerous and deserve serious study.
>
> One ground rule. We are AGI-pilled. We take as the working assumption, not a speculative possibility, that within the next few years humanity will build machines that outperform us on most cognitive tasks. We constantly underestimate how fast the exponential takeoff is going. Getting used to things getting faster is crazy hard, and we will have to if we want to play a part.
>
> The course follows a rocket metaphor. Today we look at the components: what a computer is, what a neural network is, how we got here. By the end of today, on the live demos, you will have seen the loss curve fall and the neurons specialize with your own eyes. Session 2 zooms in on the trajectory: scaling laws, ultra-intelligence. Sessions 3 and 4 cover the agents and how to use them in practice. Session 5 is the civilizational session: labor, power, what it means to be human in a world where cognition is no longer scarce.

---

# 1. Turing, Enigma, and Jack Good's paragraph (about 11 min)

**Key points:**

- Enigma's break by Rejewski and Turing produced the first electronic computers.
- Turing's 1950 imitation game replaces the question "can machines think" with a behavioral test. GPT-4 has passed it.
- Irving John Good, in 1965, writes the founding paragraph of the entire ultra-intelligence debate.

> 1930. The German army adopts a cipher machine called Enigma. Three rotors substitute letters according to a key, plus a plug board adding another combinatorial layer. The Germans believed, with reason, the code was unbreakable. The number of possible settings was so large that testing keys by hand at one per second would finish around the heat death of the universe. They used Enigma freely, for naval orders, submarine positions, troop movements. It was their secure channel.
>
> What they did not know is that, starting in 1932, Polish intelligence, led by the mathematician Marian Rejewski, had got hold of the machine's specifications and built dedicated electronic circuits to test Enigma keys at machine speed. Those circuits are arguably the first purpose-built electronic computers in history. After the 1939 invasion of Poland, Rejewski was welcomed by French intelligence, and in 1940 the Polish work was transmitted to the British. At Bletchley Park, in Buckinghamshire, a team led by Alan Turing picked up where Rejewski had left off, building bigger and faster machines called bombes. Thanks to Bletchley, the Allies were reading German naval communications close to real time for most of the war. Historians estimate the break shortened the war by about two years.
>
> The first real computers were built for one reason: to break a cipher. Not to play chess, not to talk to you, not to write poetry. To execute simple operations at very high speed. That is, by the way, still what computers do today. The word "algorithm" just means a recipe: an ordered sequence of predefined steps that takes inputs and produces an output. A cake recipe is an algorithm. Sorting a list is an algorithm. Finding an Enigma key is an algorithm. Computers are very good at running algorithms, very fast.
>
> Now Turing does something strange. In 1950, after contributing more to the Allied victory than almost any civilian alive, after being chemically castrated by the British state for homosexuality, a treatment that contributed to his suicide in 1954, Turing publishes a paper in the journal *Mind* called *Computing Machinery and Intelligence*. The paper opens with a question so naive it sounds like a child's: can machines think. Turing then says that question is useless, because nobody agrees on what thinking is, and proposes a replacement.
>
> The test. Imagine a judge in a room with a keyboard. The judge types messages and receives messages back, through a terminal. Behind the partition, two interlocutors: one human, one machine. The judge does not know which is which. The judge can ask anything. At the end the judge guesses. If, on average over many trials, the judge cannot do better than chance, the machine has, for practical purposes, passed the test. Turing called this the imitation game. We call it the Turing test.
>
> The test does not check whether the machine has consciousness, or thinking patterns similar to a human's. It only checks the capacity to imitate human written interaction. But that imitation embraces many capacities we would attribute to intelligence: common sense, the ability to communicate, to answer diverse questions, to lie, to play an identity. Notice what Turing has done. He has not answered the philosophical question. He has said the question is badly posed and replaced it with a behavioral one. If you cannot tell them apart, then insisting one of them is not really thinking is a move you have to justify, and good luck justifying it. Turing, in one paper, has shifted the burden of proof. For 75 years, people have been trying to shift it back. GPT-4 has passed the Turing test. So has, since, every frontier model.
>
> Now the most important quote of today's session. Irving John Good, "Jack Good", a British statistician who worked with Turing at Bletchley Park as one of his right-hand men. In 1965, 15 years after Turing's imitation-game paper, Good writes an essay called *Speculations Concerning the First Ultraintelligent Machine*. Here is the opening paragraph, slowly:
>
> "Let an ultraintelligent machine be defined as a machine that can far surpass all the intellectual activities of any man however clever. Since the design of machines is one of these intellectual activities, an ultraintelligent machine could design even better machines; there would then unquestionably be an intelligence explosion, and the intelligence of man would be left far behind. Thus the first ultraintelligent machine is the last invention that man need ever make, provided that the machine is docile enough to tell us how to keep it under control."
>
> 1965. The word "ultraintelligent". Recursive self-improvement, a machine that designs a better machine. The phrase "intelligence explosion". The conditional, "provided that the machine is docile enough", which is the entire modern field of AI alignment in 14 words. The term *ultra-intelligence* is Good's, 60 years ago. For most of those 60 years it was considered science fiction. The rest of the course will show why that view collapsed.

---

# 2. Royaumont, 1975: the consensus was wrong (about 8 min)

**Key points:**

- For two decades after Dartmouth, AI was dominated by the symbolic approach, which broke at the edges.
- Chomsky and Piaget shared the unstated assumption that intelligence cannot emerge from simple processes. That assumption lost.
- A young Yann LeCun reads the transcript and stakes his career on the opposite bet.

> We jump forward 25 years. The field called artificial intelligence is founded at the 1956 Dartmouth workshop in New Hampshire, and for the next two decades it is dominated by the symbolic approach. The idea: human reasoning is the manipulation of symbols and logical rules. If A implies B and A is true, then B is true. So if we want to build a thinking machine, we should code rules. An expert system. Good old-fashioned AI.
>
> This works, up to a point, for very narrow tasks: medical diagnosis in a specific domain, chess openings, theorem proving. But it is brittle. It has no common sense. A child knows, without being told, that if you push a glass off a table, it falls. An expert system only knows that if you have coded the rule "pushed objects on elevated flat surfaces tend to fall under gravity". The real world has billions of such micro-rules and you cannot code them all by hand. The symbolic approach is, in practice, a dead end.
>
> October 1975. The Abbey of Royaumont, a Cistercian monastery 30 kilometers north of Paris. One of the great debates of the decade. In one corner, the linguist Noam Chomsky. His position: human language is too complex and too universal across cultures to be merely learned. There is an innate universal grammar, hardwired into the brain. What children do when they learn French or Mandarin is not learn grammar from scratch, but set a few parameters on machinery they were born with. Intelligence has a strong innate structural basis. In the other corner, the developmental psychologist Jean Piaget. His position: intelligence is constructed. The child is not born with knowledge. The child interacts with the world, assimilates, accommodates, passes through stages, and intelligence at age 12 is the cumulative product of those interactions. Constructivism, the opposite of Chomsky's nativism.
>
> A young French engineering student named Yann LeCun reads the account of the debate shortly after. He is 20. Something clicks. He has been reading the work of Frank Rosenblatt, an American psychologist who in 1958 built the Perceptron, an early neural network inspired by the biology of the brain, designed to learn by adjusting connections between simple artificial neurons. The Perceptron had been killed, intellectually, by a 1969 book from Marvin Minsky and Seymour Papert pointing out the mathematical limits of single-layer networks and effectively defunding the field. Neural networks were, in 1975, a failed research program. A footnote.
>
> What LeCun sees in the transcript is that Piaget's idea of a progressive construction of reasoning fits naturally with what neural networks were trying to do. Build up complex behavior from simple parts, learn from interaction with the data. Chomsky's nativism, by contrast, was the opposite intuition: intelligence is given, not built. Combine Piaget's constructivist stance with Rosenblatt's neurons, add a learning algorithm neither Piaget nor Rosenblatt had, and you might get an artificial intelligence from the bottom up. He writes, decades later in his 2019 book *Quand la Machine Apprend*, that Royaumont was his calling.
>
> The 25 years between his thesis and his vindication are mostly cold. Grants are rejected. Papers are rejected. Hinton and Bengio meet him at the Canadian Institute for Advanced Research in the 2000s and they call themselves, half-jokingly, the "conspiracy of deep learning". By 2012, when AlexNet wins ImageNet, the cold years end suddenly. LeCun is hired by Mark Zuckerberg to launch AI research at Meta, then Facebook. LeCun, Hinton, and Bengio share the 2018 Turing Award for their work on deep learning. Hinton also wins the 2024 Nobel Prize in Physics, with John Hopfield, for the same body of work. A 35-year arc from the Royaumont audience to the Nobel.
>
> The lesson: at Royaumont in 1975, the right answer was on Piaget's side, but Piaget on his own would not have produced a working AI. It took Piaget's idea of construction, plus Rosenblatt's elementary neurons, plus a learning algorithm yet to be invented, plus enough compute to run that algorithm at scale. Each ingredient on its own was not enough. The combination was.

---

# 3. Intelligence from simple bricks (about 7 min)

**Key points:**

- An ant colony shows that complex global behavior can emerge from simple local rules.
- Hebb's "neurons that fire together, wire together" is the biological version of the same idea.
- Artificial neurons are caricatures, but stacked at scale they reproduce the principle.

> Now to the question Chomsky and Piaget never really posed: can intelligence emerge from simple, mindless, local mechanisms repeated at scale? The answer, now, is clearly yes.
>
> Consider an ant colony. An ant operates by a handful of elementary rules and communicates rudimentarily with other ants. Yet from these elementary mechanisms emerges the swarming of the colony, which can efficiently explore immense terrain, find the shortest path between the nest and a food source, regulate temperature, and coordinate. Simplicity of the basic bricks does not exclude efficiency and complexity of the system. From this idea, Rosenblatt asked: why not compose such elementary mechanisms to progressively reach higher levels of abstraction and solve complex problems?
>
> Conway's Game of Life, designed by the British mathematician John Horton Conway in 1970, makes the point even sharper. An infinite grid of cells. Each cell is alive or dead. Four rules. A live cell with fewer than two live neighbors dies, as if of loneliness. A live cell with two or three live neighbors stays alive. A live cell with more than three dies, as if of overcrowding. A dead cell with exactly three live neighbors comes alive. That is it. Four rules. From these four rules: oscillators, gliders, glider guns, factories. And, extraordinarily, a proof that the Game of Life is Turing-complete: anything a computer can compute can be built inside it. People have built clocks, calculators, processor simulations, and a simulation of the Game of Life inside the Game of Life. Four rules, infinite computation. The universe does not need complicated rules to produce complicated things.
>
> Now bring this back to brains. Consider a single biological neuron in your head. A cell that integrates chemical signals from its dendrites, and if the integrated signal crosses a threshold, fires an electrical spike down its axon, releasing neurotransmitters that trigger the next neurons. That is all a neuron does. There is no wisdom in a single neuron. There is no meaning in a single spike. And yet you have about 86 billion of them, with on average 10,000 connections each, all firing in parallel. Out of that comes you.
>
> The Canadian psychologist Donald Hebb, in his 1949 book *The Organization of Behavior*, proposed what is now called the Hebbian hypothesis: neurons that fire together, wire together. The strength of the connection between two neurons increases when they are active at the same time. One rule. Modern neuroscience has broadly confirmed Hebb: real brains use something very close to a connectionist learning process. So when LeCun, reading the Royaumont transcript, has his intuition, he is really crossing Rosenblatt's perceptron with Hebb's plasticity rule and asking what happens if you run the combination at scale, with the right learning algorithm.

---

# 4. The neuron and the network (about 18 min, with live demo)

**Key points:**

- A neuron is one line of arithmetic: weighted sum, then a non-linear switch.
- Stack neurons into layers, you get distributed representations: no single neuron holds "elephant", the concept is spread across the network.
- Training is gradient descent on a loss landscape: walk downhill. Backpropagation routes the blame for an error backward through the layers.
- Training is expensive and done once. Inference is cheap and done many times.

> Now we open the engine. A neural network is not complicated. It is arithmetic, performed at vast scale, with a clever trick that automatically adjusts the arithmetic until it does what you want.
>
> A neuron takes several input signals. Each input arrives through a channel that carries a coefficient, also called a *weight*, representing the importance the neuron gives to that signal. The neuron sums all the inputs, each multiplied by its weight. If the sum exceeds a threshold, it activates and transmits the sum onward. Otherwise it transmits zero. That is the whole neuron. The simplest activation function, the one used in most modern networks, is called ReLU: if the input is negative, output zero; if positive, pass it through. You could write it on a Post-it.
>
> *[Show on screen: Figure 2 (Ultra-Intelligence, p. 13). Schematic of a single neuron. Three inputs arrive from the left, each on a channel colored from blue (negative weight) to red (positive). The neuron sums, applies ReLU, outputs a signal. In the example shown, the sum is minus 0.79, so the neuron stays silent and outputs zero.]*
>
> Three input signals on the left, each multiplied by its weight. The sum is minus 0.79. Negative. ReLU outputs zero. The neuron is silent. Now imagine x1 went up. The weighted sum rises, crosses zero, the neuron fires, the signal flows to the next layer. The next-layer neuron does its own weighted sum of the signals from the previous layer, applies its own ReLU, and so on, layer after layer.
>
> A neural network is a list of layers. Each layer is a list of neurons. Each neuron does a weighted sum and a ReLU. That is the architecture. Why does it work? Because of a remarkable mathematical property: a neural network with enough neurons is a *universal approximator*. By tuning its internal parameters, it can reproduce, to arbitrary precision, almost any input-output relation you can imagine, whether that relation maps a million pixels to "fox" or "elephant", the same pixels to "this photo was taken in Mozambique", or any other task. The weights encode what the network knows. Change the weights, you change the network. Store the weights on disk, you store the model. Ship the weights, you ship the model. When somebody tells you "Meta released Llama 3", what they actually released is a file containing billions of weight values. Decimals. That is the whole model. A file of numbers. The English vocabulary distinguishes *open weights*, where the architecture and weights are public, from *open source*, where everything needed to retrain the model from scratch is also public, including the data pipeline. Llama and Mistral are open-weights releases. Truly open-source frontier models are rare.
>
> *[Show on screen: Figure 3 (Ultra-Intelligence, p. 14). Full neural network applied to an image of an elephant. Pixel inputs on the left. First hidden layer detects simple shapes. Second hidden layer detects more complex shapes: a tusk-like form, a trunk-like form. Final layer has two output neurons, "Renard" and "Éléphant"; the elephant neuron lights up. Connection weights drawn as arrows colored blue to red, transparency proportional to signal intensity.]*
>
> An elephant photo on the left. Each pixel becomes an input. For a 20-by-20 image, that is 400 input neurons. Each fires depending on the pixel values. The first hidden layer detects elementary shapes: an edge, a curve. The second hidden layer detects more complex shapes built from those: a tusk-like form, a trunk-like form. The final layer has two neurons, one assigned to "Renard" and one to "Éléphant". Whichever fires more strongly is the prediction.
>
> Notice what happened. Some neuron deep inside the network became a tusk detector. Not because we told it to. Because training drove it there. The whole apparent intelligence of the network is distributed across millions or billions of little neurons, each doing weighted sums and ReLUs. There is no box anywhere in the network labeled "elephant knowledge". There is no symbolic database of facts about elephants. The concept, if it lives anywhere, is distributed across a cloud of neurons spanning multiple layers. This is called distributed representation.
>
> So how does the network learn? We initialize all the weights randomly. The predictions are random garbage. We do what humans do with a new employee: we show it examples, we tell it the correct answer, when it gets it wrong we nudge.
>
> Here is a clarifying analogy. Think of a cake recipe as an algorithm: it takes ingredients as input and outputs a finished cake. One of its parameters is the cooking time. How do we tune it? The cook starts with cooking time at 25 minutes. Once the cake is ready, he tastes it. If overcooked, he subtracts two minutes. If undercooked, he adds three. He iterates, adjusting cooking time at each new bake, until the recipe is well-tuned. In computing, the same procedure runs in an instant rather than over weeks of cake-baking. Automating this kind of parameter tuning is the field called *automatic learning*, better known as *machine learning*. For a cake recipe with one parameter, a few examples suffice. For a neural network with millions of parameters, you need a vast dataset, and a more sophisticated procedure to update all the parameters at once.
>
> Define a number called the loss. The loss tells us how badly the network is doing on the training data: roughly, what fraction of examples did it get wrong. The English word is "loss function", in French *fonction de coût*. Low loss equals good network. Our goal: minimize the loss by adjusting the weights.
>
> *[Show on screen: Figure 6 (Ultra-Intelligence, p. 23). 3D mountainous cost-function landscape over two parameters A and B. Arrows mark a gradient-descent path from "Départ" through successive steps toward the global minimum, with a shallower local minimum visible aside.]*
>
> The loss is a function of the weights. Plot it as a landscape. Peaks are bad weights. Valleys are good. The deepest valley is the global minimum, the configuration of weights with the fewest errors. We start at a random point. Why not just compute the global minimum directly? Try gridding it: 20 values per axis is 400 combinations. Works for two weights. But a real network has a million. Or a billion. GPT-4 has more than a trillion. If we grid-searched a one-million-weight network with 10 values per weight, we get 10 to the power of 1 million combinations. The number of atoms in the observable universe is 10 to the 80. So we could not even list the combinations, let alone evaluate them, even if we used every atom in the universe as a calculator. Brute force is dead.
>
> The right image is a mountaineer in a snowstorm. Zero visibility. You cannot see the valley. But you can feel the slope under your feet. Take a step downhill. Reassess. Take another step downhill. Repeat. If there is any valley within walking distance, you will end up in it.
>
> This algorithm is called gradient descent. The "gradient" is the mathematical name for the slope. Negate it because we want to descend, multiply by a small number called the learning rate (the size of the step), update all the weights at once. Repeat hundreds of thousands of times. Surprisingly, the mountaineer almost never gets stuck in a useless local minimum. In high-dimensional spaces, almost all local minima have a loss close to the global one. Modern optimizers like Adam and AdamW add momentum, which keeps the ball rolling past shallow basins.
>
> Now the subtle question that stumped researchers for 20 years. In a deep network with many layers, the gradient is defined with respect to every single weight. If you have a million weights, you need a million partial derivatives. How do you compute them efficiently? The trick is called backpropagation. The intuition: we made a prediction, the prediction was wrong by a certain amount, and we want to know how much each weight is responsible for that error. The closer a weight is to the output, the more directly it affects the output. Backpropagation traces the responsibility backward, one layer at a time, from the output toward the input. Hence the name. Each weight receives a share of the total blame, and we adjust each weight by a small amount proportional to its blame, in the direction that reduces the error.
>
> Try this image. Think of a water-pipe network with many branches and many valves. Water enters at one end. It exits at the other. The amount of water exiting depends on how open each valve is. Suppose the output is too low. Which valves do I open? Well, the valves directly feeding the output matter most, then the valves one branch back, then two branches back. Each valve has a degree of responsibility for the final flow. Backpropagation is the systematic procedure to compute that responsibility for every valve at once, then nudge each valve open or closed in proportion. In deep-network terms: error, reduced. The mathematics underlying it is the chain rule of calculus, which most of you saw in terminale. The chain rule is 300 years old. The genius of LeCun, Hinton, and Rumelhart in 1986 was realizing it gives you all the gradients you need in a single backward pass through the network.
>
> LeCun built his learning algorithm and applied it to a real problem: helping the American postal service automatically read handwritten zip codes on envelopes and on bank checks. His network took as input a 28-by-28-pixel photo of a handwritten digit and returned the digit. The result was dazzling. By the late 1990s, his system was processing 10 to 20 percent of all checks cashed in the United States. Industrial deep learning, in production, 25 years ago.
>
> *[Show on screen: Figure 5 (Ultra-Intelligence, p. 21). Three boxes: Training (automatic weight adjustment on a dataset, thousands of GPUs running for months), the resulting model (a list of connection weights, e.g. [0.15; -2.37; ...; 0.87; -0.13]), and Inference (one input, one prediction, single GPU for seconds).]*
>
> One last distinction we will need many times. Training is one phase. Using the trained model is another. Reuse the cake-recipe image from earlier. Training is the development phase: the chef bakes 10, 20, 100 cakes, tastes, adjusts the flour, the butter, the oven temperature, iterates until the recipe reliably produces a delicious cake. Long, expensive, full of failed attempts, done once. For a frontier model, training lasts weeks to months, mobilizes tens of thousands of NVIDIA H100 GPUs in dedicated server farms, consumes as much electricity as a French département uses in a month, and costs anywhere from 10 million to half a billion dollars. At the end you have a file. The weights. About 100 gigabytes for a big model. Once trained, the weights are frozen. Inference is the Sunday baking phase: load the weights, feed an input, compute the output. One forward pass through the neurons. No gradient, no backpropagation. A few seconds. A fraction of a cent.
>
> Two consequences. One, a model's knowledge is frozen at its training cutoff. If GPT-5.5 was trained on data up to early 2026, it does not know anything that happened after that unless you tell it in your prompt. Retraining from scratch is too expensive to do every day. Two, training and inference are extremely different in their hardware demands. Training needs the best chips, in massive synchronized clusters, with reliable power, for weeks to months. Inference, by contrast, is light: it can run on a single GPU, or even on a phone, for a few seconds. That is why your laptop can run a small open-weights model locally even though training that same model required a building full of equipment.
>
> Enough words. I want you to see this in action. *[Open in browser: TensorFlow Playground at playground.tensorflow.org.]*
>
> A tiny web app that trains a neural network in your browser, on a 2D toy problem, with sliders for the number of layers, neurons per layer, activation function, and a big play button. Pick the spiral dataset. Two interlocked spirals, one blue, one orange. Each dot in the plane is a training example, with a label given by which spiral it sits on. Task: given a point in the plane, predict which spiral it belongs to. Hard for a linear classifier, impossible for one neuron alone.
>
> Add three hidden layers of 8 neurons each. Activation: ReLU. Press play. The loss falls in real time. The decision boundary, drawn behind the dots, warps from a blob into a curve, then into a more intricate curve, until it perfectly separates the two spirals. The individual neuron panels on screen show what each has learned: one neuron has become a diagonal cut through the plane, another a radial cut, another a curved boundary. None of those cuts alone separates the spirals. Their combination, with the right weights between layers, does. Specialization emerged on its own, by gradient descent. Exactly as we said. The network was not given a "diagonal-cut detector" by hand; it built one because it was useful.
>
> Now do an experiment. Drop the activation function from ReLU to linear. Press play. The boundary is now stuck as a straight line. No combination of layers can bend a linear network into a spiral, because two matrix multiplications in a row collapse mathematically into one. The depth becomes meaningless. Switch ReLU back: the curves come back. The non-linearity is what lets stacked layers express richer and richer functions; without it, deep is the same as shallow. Live experimental evidence for what I said earlier about ReLU being load-bearing for the whole field.
>
> A second experiment. Drop the network down to one hidden layer of 2 neurons. Press play. The network now lacks the capacity to express the task; the boundary stays a crude split. Underfitting in its most direct form. Bump the network back up to three layers of 8 neurons. Capacity returns; the spirals separate. There is a knee in the curve where adding parameters starts paying off, and the same logic, scaled up by a factor of a million, is what every frontier lab is currently navigating: how much extra capacity actually buys you, in practice, on the data you have.
>
> Keep this on your phone for the rest of your life: playground.tensorflow.org. Every time someone tells you neural networks are incomprehensible black boxes, pull this up. They are not. You can watch them think, in real time, on a 2D problem, and the intuition you build there scales all the way up to GPT-5.5 doing maths.
>
> One last subtlety before we move on, because it shows up everywhere in practice and misunderstanding it produces real-world AI failures. A neural network can learn badly, in two opposite ways. Take a toy task: given a pair of coordinates, latitude and longitude, predict whether the point is in France, yes or no. Training data: 3,000 random points, each labeled red (in France) or blue (outside). *[Show on screen: Figures 7 and 8 (Ultra-Intelligence, pp. 28-30). Figure 7 plots the 3,000 training points across a Western Europe rectangle. Figure 8 shows three predictions side by side: 8A, a smooth blurry blob that vaguely covers France but does not hug Brittany; 8B, a forest of jagged spikes; 8C, a clean blocky shape that approximates the hexagon.]*
>
> Case A is *underfitting*. The network is too small or trained too briefly. The prediction surface is a blurry blob. It captures only the crudest pattern. Brittany disappears. Case B is *overfitting*. The network is too large, or trained too long. The prediction surface is a forest of spikes. Every training point is memorized exactly, but between the training points the prediction is chaotic. A point in the middle of France, one meter from a blue training point, gets predicted blue. The network has memorized the training set like a student writing crib notes for an exam. Case C is what we want: the prediction surface is a clean France-like shape that hugs the actual borders and generalizes to new points it has never seen.
>
> The principle behind Case C is *Ockham's razor*, a methodological maxim formulated by the 14th-century English Franciscan William of Ockham: do not multiply entities without necessity. The simplest theory that fits the facts is probably the right one. Bertrand Russell called it the supreme methodological maxim in philosophy. Einstein refined: "everything should be made as simple as possible, but not simpler". For neural networks, this is operationalized as *regularization*: during training we add a small penalty on the magnitude of the weights, nudging every weight slightly toward zero. Useful weights survive because they reduce the main loss; useless weights shrink to zero and effectively disconnect themselves. The network auto-prunes, ends up leaner, and generalizes better. Ockham's razor as a line of code.
>
> Why this matters for you. The entire field of LLM evaluation is a fight against overfitting. When a company claims its new model scores 95 percent on benchmark X, the first question is: was benchmark X in the training data? If yes, the score is meaningless; the model has memorized. This is the *contamination* problem. In 2024, several frontier LLMs solved math problems from the 2023 American AIME competition far better than the 2024 problems of comparable difficulty, because 2023 was on the Internet during training and 2024 was not. The gap was 20 to 30 points. So when you read a press release about a new state-of-the-art number, the question is always: on which dataset, and was that dataset in the training corpus.

---

# 5. Why now: compute, data, and the bitter lesson (about 14 min)

**Key points:**

- The neuron is from the 1940s, backpropagation for neural networks from the 1980s. Why did deep learning take until 2012 to take over? Compute, data, and stubbornness.
- Moore's law delivered a billion-fold cost-performance gain. The chessboard fable is the right intuition for it.
- ImageNet 2012, then OpenAI's 2015 sentiment-neuron, established the principle: simple methods at scale beat hand-engineered ones.
- LLMs reason by stacking heuristics, building a strongly compressed internal representation of the world.

> We have this beautiful algorithm. Gradient descent plus backpropagation. LeCun had it running in production on postal codes in 1998. Why did deep learning not take over the world in 1998? Three reasons. Compute, data, and scientific stubbornness.
>
> *[Show on screen: Figure 4 (Ultra-Intelligence, p. 17). Moore's law. Log-scale plot of compute operations per dollar from 1900 to the 2020s. The curve climbs through Analytical Engine, ENIAC, IBM 701, Apple II, IBM PC, Pentium II, GTX Titan, NVIDIA B100.]*
>
> Compute. In 1965 Gordon Moore, future CEO of Intel, noticed that the number of transistors on an integrated circuit was doubling roughly every two years. Compute power available at constant price was doubling at the same rhythm. Moore's law has held, with slowdowns, for about 60 years. Despite annual predictions of its end, it still holds, and over the 20th century compute per dollar has multiplied by about 10 to the 18. A billion times a billion.
>
> Here is a story to give that number weight. The 13th-century Kurdish historian Ibn Khallikan wrote of a tyrant ruling over India who became obsessed with a new game called chess. He neglected the kingdom, played day and night, had chessboards placed at the feet of the gods in temples. He summoned the inventor, a sage named Sissa, and offered him any reward. Sissa asked for grains of wheat on the chessboard. One on the first square. Two on the second. Four on the third. Doubling each square, all the way to the 64th. The tyrant laughed and ordered slaves to begin pouring. Very quickly the jars ran dry. All the palace granaries were insufficient. All the kingdom's reserves would not have sufficed. Filling the chessboard requires 2 to the 64th grains, about 10 to the 19, more than six times the mass of all living biomass on Earth. Between 1900 and 2020, compute power available for the same price was multiplied by about 10 to the 18, almost as much as in the fable. That explosion of compute is what carries the current AI revolution.
>
> An LLM today, at training time, consumes as much electricity in one run as a mid-sized French département uses in a month. Tens of thousands of GPUs running non-stop for weeks. The full training of GPT-4 reportedly cost more than 100 million dollars. Grok 4 reportedly cost half a billion. Industrial operations, carried out in dedicated data centers with their own substations.
>
> Second, data. A neural network learns from examples. Lots of examples. Image networks needed thousands, then millions. Today's largest LLMs are trained on something like 15 trillion subwords, roughly 12 trillion words for Llama-3.1-405B, of the same order of magnitude as the entire readable Internet. This corpus did not exist in 1998 because that volume of text had not been written down in digital form. The Internet had to grow up, people had to blog, Wikipedia had to exist, forums had to fill up.
>
> Third, scientific stubbornness. The first connectionist successes had triggered loud publicity. The *New York Times* wrote in 1958 about Rosenblatt's machine that it was "the embryo of an electronic computer that the Navy hopes will walk, speak, see, write, reproduce itself, and be conscious of its existence". A bit ahead of itself, that headline. Once practice ran into Rosenblatt's lack of an automatic learning method, the connectionist approach lost favor. From about 1990 to 2010, most of the AI community believed neural networks were a dead end. The respectable research agendas were Support Vector Machines, decision trees, the symbolic approach. Neural networks were for cranks. The development of GPUs, originally designed for video-game graphics matrix multiplications, finally let the connectionists express the power of their networks at scale, with ever-larger datasets published each year. They called their group, working together at the Canadian Institute for Advanced Research in the 2000s, the "conspiracy of deep learning". In 2007 LeCun, Hinton, and Bengio submitted a workshop proposal to NeurIPS, the main AI conference. Rejected without explanation. Undeterred, they organized a parallel workshop funded by CIFAR and chartered their own bus to transport participants. Three hundred researchers attended. It became the most-attended event of the conference.
>
> What turned the tide was a benchmark. ImageNet, built by Fei-Fei Li at Stanford. 12 million labeled images in 22,000 categories. In 2012, at the ECCV conference, in a packed room in front of Fei-Fei Li herself, a young student of Hinton named Alex Krizhevsky announced that his deep neural network, trained on a couple of GPUs, had cut the error rate on ImageNet in half. Halved. From around 26 percent down to 15. In one year. In the following two years, every image-classification team in the world converted. By 2015, nobody used the old methods. Speech recognition followed. Machine translation followed. AlphaGo beat Lee Sedol at Go in 2016, a feat experts had said was 10 years away. In every domain where enough data exists, a deep network trained with enough compute beats the hand-engineered system.
>
> A small bookmark for the next session. The architecture Krizhevsky used is called a *convolutional neural network*, CNN. CNNs use neurons that look only at small patches of the input, with the same neuron sliding across the whole image, detecting the same feature wherever it appears. LeCun invented CNNs in the late 1980s for exactly this reason. CNNs were what made face recognition on your phone possible, and they were the dominant image architecture until Transformers crossed over to vision a few years ago. Bookmark the term: CNN, specialized for images.
>
> Richard Sutton, the computer scientist who received the Turing Award in 2024, wrote a 2019 essay called *The Bitter Lesson*. Two pages, free online. Sutton's argument: for 70 years, AI researchers tried to put their own knowledge of the world into the machine. Hand-designed features, clever heuristics, careful symbolic rules. Every time, those systems were beaten by general-purpose learning methods that leveraged more computation. Chess, Go, translation, image recognition, speech, protein folding. Over and over, compute wins. Why "bitter"? Because it is humbling. Our hard-earned knowledge, the careful rules and clever tricks, mostly did not matter. Dumb scale-up did. The Chomsky-Piaget assumption, that intelligence requires either innate structure or careful construction, turned out to be wrong. Intelligence, or a very useful approximation of it, emerges from simple rules applied at scale.
>
> Now the single most important technical discovery of the last 15 years, and I want you to hold it because it reframes everything. In 2017, OpenAI was working on sentiment analysis on product reviews. Sentiment analysis means: look at an Amazon review, decide if the customer was happy or unhappy. The previous standard had consumed decades of effort, with humans hand-annotating thousands of reviews on a scale from 1 to 5, and training a classifier on that labeled data. Expensive and slow.
>
> OpenAI tried something different. Instead of training the model to predict a sentiment label, they trained it on a much simpler task: given the first letters of a review, predict the next letter. That is it. Just next-letter prediction. A billion Amazon reviews, no human annotation. Once the model was trained, they peeked inside. They found, to their shock, a single neuron, one out of millions, that had learned, unsupervised, to track the sentiment of the review. Positive review, this neuron fired high. Negative, low. Nobody had told the model about sentiment. The model had discovered sentiment as a useful intermediate concept, because predicting the next letter of "Qualité excellente. Ce produit est..." is much easier if you have an internal variable for how the reviewer feels.
>
> This is the deep claim. To predict text well, you have to understand text. Push the same logic further. Take the entire text of a detective novel, up to the moment where the inspector is about to unmask the murderer, stopping at the colon: "Devant tous les habitants de l'île, l'inspecteur pointa alors du doigt le véritable coupable : ...". To predict the next word better than chance, the model has to have tracked the clues, eliminated the suspects, weighed the alibis, integrated motives. Nothing less will do. The implication: do not train a specialized model for each task. Train one giant model to predict the next token on a vast corpus of text, and specialized capabilities will emerge inside it as byproducts. Sentiment. Grammar. Translation. Arithmetic. Eventually, reasoning. From this insight followed GPT-1 in 2018, GPT-2 in 2019, GPT-3 in 2020. Same recipe each time: more text, more parameters, more compute. New capabilities emerged at each step, unplanned.
>
> One last point on this section, because it explains how the model can answer questions it has never seen. A neural network does not just memorize. The model handles "2 + 4" because it almost certainly saw it in training. But ask "2 × 4,173", or reformulate the question as "What is the result of multiplying two by four point one seven three?", and there is a high chance the exact query is unseen. The model still answers. Why? Because it has, during training, built up a large stack of *heuristics*. A heuristic is a rough sketch of reasoning, often false in isolation but useful when combined with others.
>
> Recall the elephant network. The micro-rule "if the animal has tusks, it is probably an elephant" is a heuristic, encoded as a positive connection between the "has a tusk" neuron and the "is an elephant" neuron. A single heuristic is just an outline of simplistic reasoning; an animal with tusks could be a boar, not an elephant. But several heuristics combined approach certainty: tusks plus huge size plus grey color plus large ears plus a trunk gives elephant. Humans use heuristics constantly to reason fast by analogy. "Objects in free fall on Earth fall to the ground" is a heuristic. Proverbs and fable morals, "patience and length of time do more than force or rage", are heuristics. They are imprecise, often false in edge cases, but efficient because they are quick and usually true.
>
> Neural networks lend themselves perfectly to heuristics. A positive connection between neurons A and B encodes "A generally implies B"; a negative connection encodes "A generally implies not-B". Once trained, the network is just an immense stack of millions of heuristics, encoding rules as varied as "when clouds cover the sky, it may rain", "when you multiply a number by 10, shift the decimal one digit to the right", or "if Alice insults Benoit, Benoit gets angry". For "2 × 4,173", the subwords pass through billions of connections that encode "2 × 4 = 8", "2 × 17 = 34", and "to multiply a number by 0.1, shift the decimal one place to the left", and out comes "8,346". From the outside, the right answer looks almost magical. From the inside, it is just the accumulation of approximate micro-reasonings, each possibly partially false but combining toward something close enough to the right answer.
>
> Without claiming the model "truly understands" the world, we can say this: during training, its weights form a strongly compressed internal representation of all the texts it saw, all of which refer to our world. That representation is not ours, but it is no less useful. The physical laws we use are themselves compressed representations. Newton stated gravitation as a single formula, two bodies attract each other with a force proportional to the product of their masses divided by the square of the distance, valid on Earth, until Einstein refined it for high speeds and strong fields. The model is not absolute, just a sufficient approximation. Saint-Exupéry, in *Terre des hommes*, described this exactly: "Newton did not 'discover' a law long hidden the way one discovers the solution to a riddle. Newton performed a creative operation. He founded a human language able to express both the fall of the apple in a meadow and the rise of the sun. Truth is not what is demonstrated. It is what simplifies."

---

# 6. From pixels to words: vectors, attention, the Transformer (about 14 min, with live demo)

**Key points:**

- Neural networks eat numbers. Word2vec, 2013, represented words as vectors and discovered that meaning encodes geometrically: king minus man plus woman lands near queen.
- Attention, designed in Bengio's lab in 2015 and centered in the 2017 Transformer paper, lets each word in a sentence dynamically pull meaning from other words.
- The Decoder, a Transformer variant, generates text one token at a time. Every famous chatbot is a decoder-only Transformer.

> We have done images. Now text. Same arithmetic, different inputs.
>
> A neural network eats numbers. An image is natively numbers, each pixel a brightness value between 0 and 1. But a word is not a number. To feed text to a network, we need a way to turn each word into numbers.
>
> The first answer came in 2013, from a Google team led by Tomas Mikolov. Paper: *Efficient Estimation of Word Representations in Vector Space*. Model: Word2vec. arXiv reference 1301.3781. Read it; it is 8 pages.
>
> Idea. Represent each word as a vector of, say, 300 numbers. A vector is a list of numbers in a fixed order. Think of it as a point in a 300-dimensional space. The 300 numbers per word are not chosen by hand. They are learned, by training a small neural network on a simple task: given a word, predict the surrounding words in a real sentence. The network sees "I drank a cup of coffee" and "I drank a cup of tea" many times, in similar contexts. So the representations of "coffee" and "tea" end up near each other in the 300-dimensional space. Words with similar contexts get similar representations, because they cause similar predictions.
>
> Train this on a few billion words of English text. Out pops a representation: one vector per word, for around 1.6 billion English words and phrases. Here is a tiny four-dimensional toy version. Imagine four axes: feminine, animal, old, fast. The word "chiot" (puppy) might be 0.0 on feminine, 1.0 on animal, 0.1 on old, 0.3 on fast. The word "doyenne" (elderly woman) might be 1.0, 0.0, 0.9, 0.1 on those same four axes. Now you can do arithmetic. Doyenne minus chiot is 1.0, minus 1.0, 0.8, minus 0.2. That difference vector captures, roughly, "become human, become old". Real Word2vec uses 300 axes, not 4, and the axes are not given names by humans, they are learned.
>
> Now the discovery that shocked the researchers themselves. Take the vector for "king". Subtract the vector for "man". Add the vector for "woman". You get a vector very close to the vector for "queen". King minus man plus woman equals queen. In vector arithmetic. Mechanical. Not a metaphor. Paris minus France plus Germany lands near Berlin. Walked minus walking plus swimming lands near swam. Plural-singular, present-past, country-capital, gender, comparative: all of these show up as consistent directions in the 300-dimensional space. Nobody told the network about grammar, geography, or morphology. It extracted them from the statistics of word co-occurrence. By doing a simple prediction task, it built a semantic map of the language.
>
> This was the first dramatic demonstration that neural networks could *understand* texts. The principle behind it is the distributional hypothesis, a line by the British linguist J. R. Firth, 1957: a word is characterized by the company it keeps. Firth was right. 60 years later, Mikolov's team made it work, at scale, with neural networks.
>
> Let me show you live, in 10 lines of Python. *[Open Google Colab notebook.]*
>
> ```python
> import gensim.downloader as api
> model = api.load("word2vec-google-news-300")
> ```
>
> One line to download the Google-News-pretrained Word2vec: 3 million English words and phrases, 300 dimensions per vector, sitting in memory.
>
> The classic analogy.
>
> ```python
> result = model.most_similar(positive=["king", "woman"], negative=["man"], topn=3)
> for word, score in result:
>     print(f"{word}: {score:.3f}")
> ```
>
> Output:
>
> ```
> queen: 0.712
> monarch: 0.619
> princess: 0.590
> ```
>
> Queen. First hit. The model computed king vector plus woman vector minus man vector, then searched the 3-million-word vocabulary for the closest vector. The closest, of 3 million, is "queen". Then monarch, then princess. The algorithm does not know what royalty is. It does not know what gender is. It only knows which words appeared near which other words in 3 billion sentences of Google News.
>
> A few more.
>
> ```python
> def analogy(a, b, c):
>     return model.most_similar(positive=[b, c], negative=[a], topn=1)[0]
>
> print(analogy("France", "Paris", "Germany"))
> print(analogy("walking", "walked", "swimming"))
> print(analogy("good", "better", "bad"))
> print(analogy("Japan", "Tokyo", "Argentina"))
> ```
>
> Read those calls as "a is to b as c is to X". Results:
>
> ```
> Berlin: 0.76
> swam: 0.69
> worse: 0.73
> Buenos_Aires: 0.78
> ```
>
> Capital of Germany. Past tense of swim. Comparative of bad. Capital of Argentina. From word co-occurrence, nothing else. One short neural network, trained on text, discovered geography, grammar, and comparatives, because consistent patterns produce consistent directions in vector space.
>
> One last fun query, just to feel the texture of the space. Look at what is closest to a few individual words.
>
> ```python
> for word in ["Paris", "coffee", "democracy", "computer"]:
>     print(word, "->", [w for w, _ in model.most_similar(word, topn=5)])
> ```
>
> For "Paris", you get Parisian, France, Pantheon_Sorbonne (a Paris university), Hopital_Europeen_Georges_Pompidou (a Paris hospital), and a few more Paris-named entities. For "coffee": coffees, gourmet_coffee, Starbucks_coffee, cappuccino. For "democracy": democratic, participatory_democracy, democratization, pluralism. For "computer": computers, laptop, laptop_computer. Not a hand-curated thesaurus. Whoever is closest in the 300-dimensional space. The network discovered all these associations by reading text and doing prediction.
>
> One side-finding the field had to confront. Word2vec discovered, along with the clean analogies, several ugly ones. "Doctor minus man plus woman" gave, depending on the corpus, "nurse". "Programmer minus man plus woman" sometimes gave "secretary". The model absorbed, from real human text, the gender biases embedded in it. It did not invent sexism. It reflected it. Models inherit the statistics of their training data, for better and for worse. This pattern continues today, at much larger scale, with LLMs.
>
> Word2vec gives you word meanings in isolation. A word has one fixed vector. That breaks for context-dependent meaning. The word "bank" in "river bank" and in "savings bank" has the same Word2vec vector, which is obviously wrong. We need a mechanism that gives each occurrence of a word its own context-aware vector. The mechanism is attention.
>
> Earlier neural networks treated their inputs solely by position: the word at position 2 was always treated the same way, whether verb or pronoun. This was crippling for text, where word order changes between languages and a verb may agree with a subject ten words back. In 2015, the attention layer was designed in Yoshua Bengio's lab. Too complex to detail here, but the idea is: a specific structure usable inside any neural network that lets information flow dynamically between inputs, so the network can transmit, say, the feminine gender of a subject to its verb regardless of position.
>
> The 2017 thunderbolt was a paper from Google researchers titled *Attention Is All You Need*. They built attention into the centerpiece of a new architecture called the Transformer. Transformers beat the best models of the time on many tests, while being 100 times less expensive to train. The paper has been cited more than 100,000 times in a few years, almost as many as the entire body of work of a great scientist like Stephen Hawking. It is the founding document of the largest AI revolution to date.
>
> If you want one analogy for attention, think of a committee. For each word in a sentence, the mechanism looks at all other words, computes a relevance weight for each, and takes a weighted average of their representations. That weighted average becomes the context-aware representation of the current word. Mechanically, for each word the attention layer produces three little vectors: a *query*, a *key*, and a *value*. For word A to "pay attention to" word B, you take A's query and dot it with B's key. If they align, the dot product is large; if not, small. You do this for every pair of words. You normalize the dot products into weights that sum to 1, using a function called softmax, which acts as a soft maximum. Then you take a weighted sum of the value vectors, weighted by those attention scores. Output: a new context-aware vector for word A. That is one attention head, one layer. Stack many heads in parallel, each specializing in a different kind of relevance, syntactic, semantic, long-range. Stack 6, 12, 50, 100 such layers. You get a Transformer.
>
> The Decoder is a Transformer variant specialized for text generation. Every famous chatbot, GPT, Claude, Gemini, Llama, Mistral, Kimi, DeepSeek, is a decoder-only Transformer. Let me walk through how it generates text.
>
> *[Show on screen: Figure 9 (Ultra-Intelligence, p. 36). Decoder generation on the prompt "Comment vas-tu ?". Each pass appends one new subword (Je, vais, bien, period, Et, toi, question mark, end token) until the special end-of-generation token stops the loop.]*
>
> Input: a prompt, say "Comment vas-tu ?". The model first tokenizes it. Tokenization means cutting the string into small pieces called tokens, in French *sous-mots*, each mapped to an integer ID from the model's vocabulary, usually around 50,000 to 100,000 entries. So "Comment vas-tu ?" becomes the sequence Com, ment, vas, dash, tu, question-mark. Each ID is converted to an embedding vector, a Word2vec-like representation, learned during training. These vectors are fed into the Transformer. It runs its attention layers. The final layer outputs a score for every token in the vocabulary, 50,000 scores. Softmax turns them into a probability distribution. The model samples the next token. Sampled token: "Je".
>
> Now the loop. Append "Je" to the input. Feed the whole thing back. Out pops "vais". Append. Out pops "bien". Append. A period. Et. Toi. Question mark. At some point the model emits a special end-of-generation token and we stop. The user sees: "Je vais bien. Et toi ?".
>
> The two decisive advantages of the Decoder, the reasons it won. One, versatility. Because a Decoder can generate any kind of text, it can in principle solve any task you can express in writing. Translation: prefix the source text with "Translate to Spanish:" and read off the completion. Arithmetic: prompt with "How much is 2 × 4?" and read off the number in the completion. One model, many tasks. Following the principle that what is well conceived is clearly stated, in principle every problem we can pose belongs to the category of stateable tasks. Two, self-supervision. Any text can be training data. Take a book, give the model the first words, train it to predict each subword in the rest, penalizing connections that pushed toward wrong predictions and rewarding the right ones. No human annotation needed. Every sentence on the Internet labels itself. This is why the architecture exploded: the training corpus is essentially infinite.
>
> The first decoder-style language models, like OpenAI's GPT-1 in 2018, could barely produce a few coherent words before the generation became incoherent. Then in October 2018, another team at Google published BERT, built on Transformers with one significant modification: 24 layers stacked instead of 6, raising parameter count to 340 million, huge for the time. BERT beat all existing models on 11 different text-processing tasks. Beating one benchmark is publishable; beating 11 is unheard of. So is it size that matters? The community ran with the idea. Researchers trained ever larger models, and performance kept improving. These immense models are called Large Language Models, LLMs.
>
> Today every leading lab, OpenAI with GPT, Anthropic with Claude, Google with Gemini, Meta with Llama, has built a large generalist Decoder with vision, accepting text or images interchangeably. Some now add audio. We will likely see the next generation master image, video, and audio together. The technique is called multimodality: represent images or sounds as sequences of tokens, then either train a natively multimodal model from scratch on a mix of modalities, or, more commonly and more cheaply, take an existing text Decoder, add a few neural layers at one end, and retrain on a few thousand or million images until those extra neurons fit in.
>
> One last visual to anchor the typology, because the vocabulary is going to come back constantly. *[Show on screen: Figure 10 (Ultra-Intelligence, p. 42). Nested boxes from outside in: Algorithms, Artificial Intelligence, Machine Learning, Neural Networks, Transformers, Decoder. Aside, other learners: linear regression, XGBoost, Random Forest.]* From outside in: algorithms, the widest box, any step-by-step procedure for computing an output from inputs. Artificial intelligence, the subset of algorithms that solve tasks as if they had intelligence; the boundary is fuzzy because the definition of intelligence is fuzzy. Machine learning, the subset of AI that auto-adjusts its parameters from a training dataset. Neural networks, a subset of machine learning made of layers of interconnected neurons. Other ML algorithms exist outside the neural-network box: random forests, XGBoost, linear regression. Economists use these a lot, and on small numeric datasets they often outperform deep nets. Transformers, a subset of neural networks distinguished by attention layers. Decoders, a subset of Transformers specialized for generating outputs subword by subword. LLMs, large Decoders trained on text. Every famous chatbot you have heard of lives in the innermost box.

---

# 7. "Stochastic parrots" : is this really intelligence? (about 19 min)

**Key points:**

- Frontier models pass the Turing test, top US public exams, beat humans at strategic negotiation games.
- They show "jagged" intelligence: the Moravec paradox. The same model can solve hard problems and fail trivial ones.
- They hallucinate, struggle with combined constraints, and are flattery-biased. None of this stops them being useful.
- The classic objections (no consciousness, no creativity, will never X) have been retreating one by one.
- Polyvalence is what makes modern AI a paradigm break: a single generalist model across most cognitive tasks.

> Recall what triggered the public conversation. In November 2022, OpenAI launched ChatGPT, a chat application built on its advanced LLMs. The success was without precedent: 100 million users in two months, a threshold Facebook took more than four years to cross. Beyond the public craze, the event was a Copernican revolution: the appearance of an *intelligence* that was not human. The question we now have to answer concretely is: how smart, on what tasks, by which measures, and where does it still fall short.
>
> Start with the framework we built in section 5. Predicting the next word in a detective novel forces the model to track clues, weigh alibis, integrate motives. Prediction at scale is not a shallow task. The model is, after training, a stack of millions of micro-heuristics that approximate the world well enough to extrapolate to inputs it has never seen. That is the reason it gets "2 × 4,173 = 8,346" right without ever having seen the question, and lands on Berlin when you ask for the capital of Germany. Whether you call that "reasoning" or not, it works.
>
> Now the empirical question. How do today's models do on tests we made for humans? Let me make this concrete with one prompt I use to track progress over time: "Generate a poem in 10 verses of 12 feet, with alternating rhymes. Each verse must contain an increasing number from 1 to 10: the first contains 'one', the second 'two', and so on." Same prompt, four model generations.
>
> GPT-2, 2019, cannot even generate a correct sentence; on multiple tries it produces nonsense or repeats the instruction indefinitely. GPT-3, 2020, loops: "Result: one two three four five six seven eight nine ten / one two three four five six seven eight nine ten / Result:". A 2024 model on the level of GPT-3.5, Mistral-7B, answers in English and produces something that resembles a poem with the numbers worked in, but is incoherent overall. GPT-4, 2023, gives a much better completion, with a slightly overdone style, but misses the 12-foot meter ("Sous un ciel éclatant, un seul rêve se dessine, / Deux étoiles brillent haut, leur éclat nous fascine..."). Claude-4-Sonnet, 2025, gives a satisfactory result with nearly correct alexandrines: "Un seul oiseau s'envole au cœur du jour naissant, / Deux grands aigles planent au-dessus des montagnes, / Trois vieux bergers marchaient sur les chemins pesants...". LLMs were born in 2019. Six years from gibberish to passable French alexandrines. A child making this kind of progress would be considered a precocious genius, and the comparison to a child is probably unfair to the LLM, which has only a few decades of preparatory AI development behind it, where the child has innumerable generations of natural selection improving its mental wiring.
>
> The most famous test of machine intelligence is the Turing test, named for the mathematician at Bletchley Park who proposed it under the name *imitation game*. GPT-4 has passed it. Neither the Turing test nor IQ tests, on which recent models also do very well, are generally considered complete measures of intelligence; intelligence is multidimensional, linguistic, logical, spatial. So researchers used other measures. The OpenAI technical report accompanying GPT-4 lists dozens of exams the team tested it on. The results are dazzling. The model scores well on most US public exams, the equivalent of the bar exam, the baccalaureate, medical school entrance exams. It even succeeds on the first question of a physics exam from the Polytechnique entrance competition. One research study measured GPT-4's exact ranking on the American bar: top 38 percent of human candidates.
>
> Social capacities. Researchers had GPT-4 play humans in the strategy game *Diplomacy*, where players try to take control of the European continent through strategic alliances. The model communicated through the game's messaging system. It negotiated cleverly, formed and broke alliances, and finished among the best players. Each of these successes would already be a sign of intelligence in a human. Their combined mastery, on a single model that also speaks dozens of human languages and dozens of programming languages, switching between them effortlessly, is a real feat.
>
> Honest caveat: these models are trained on Web data of the same order of magnitude as the entire Internet. A large portion of standard exam questions has likely been seen during training, possibly partly memorized, which inflates scores. Evaluating a model's true capacities is a difficult science. There is also a related phenomenon called *contamination*: because companies train models on massive, lightly filtered data, the training data ends up containing the answers, or paraphrases of the answers, to many published benchmarks. The model has effectively seen the test before. This is a serious reason to be skeptical of company-reported scores on standard benchmarks without independent verification, and to test models on novel cases relevant to the actual application before trusting them.
>
> Still, the trend is clear. *[Show on screen: Figure 12 (Ultra-Intelligence, p. 51). Plot of score difference between best AI model and human reference, from around 2000 to 2020+, across 12 benchmarks: SQuAD2.0, SQuAD1.1, ImageNet, GLUE, SuperGLUE, MNIST, Switchboard, HellaSwag, MMLU, GSM8K, HumanEval, BBH. All curves rise from negative values toward and past the 0% human-reference line, each benchmark being overtaken faster than the last. Source: Kiela et al., "Plotting Progress in AI", 2023.]*
>
> Look at the chart. Every benchmark designed to be a hard test for AI gets surpassed, often within a few years of release. Reading comprehension, image recognition, math problems, coding tasks, complex reasoning. The lines that cross the human-reference axis from below are getting steeper. When researchers publish a new benchmark, they generally aim for one particularly difficult to beat, so the best models cannot pass it for a few years. Yet, as the figure shows, these references are surpassed ever faster, often in months only.
>
> Where does that leave the "real intelligence" question? It leaves it where Turing put it in 1950. If you cannot tell behavior X apart from intelligent behavior, then arguing that X is not real intelligence is a move you have to justify, and the burden of proof has been moving in one direction. There is a famous philosophical objection here, the *Chinese Room*, proposed by John Searle in 1980. Searle imagines a person locked in a room with a giant rulebook. Chinese sentences come in through a slot; the person, who knows no Chinese, mechanically follows the rulebook to produce Chinese sentences in return. From outside, the room appears to understand Chinese. The person inside understands nothing. Searle's conclusion: syntactic manipulation of symbols is not semantic understanding. Three quick replies. The argument proves too much: by the same logic, your own brain is a Chinese Room, since neurons are shuffling chemical signals none of which individually understand anything. Most cognitive scientists now treat understanding as a property of the whole system, not of any one component. And even if you accept Searle's framing, his argument tells you nothing about what the machine *does*. The pragmatic turn: stop asking whether the machine is really thinking. Ask what the machine does. If the outputs are useful, if the proof holds, if the brief is sound, the *how* matters less than the result.
>
> And yet, behavior is uneven. Take a frontier model and ask it task A: here is a 3×3 tic-tac-toe board with some Xs and Os; what move should O play to have a chance of winning? It will often answer wrong, suggesting an obviously bad move like the middle of the top row. Now ask the same model task B: write a JavaScript interface to play tic-tac-toe, where the human plays X and the computer plays O and tests all possible situations in advance to ensure it never loses. The model will solve B in one shot, producing a functional web page where the "computer" player plays perfectly. The same model. The "easier" problem failed, the "harder" problem solved.
>
> This is the *Moravec paradox*. Tasks that look hard to us can be easy for the model, and tasks that look easy can be hard. The English term is *jagged intelligence*, "intelligence en dents de scie", which captures it well: spike up here, fall down there, no smooth ramp from "easy" to "hard". This is why even impressive demonstrations of a model's power are hard to calibrate expectations on, and why every implementation of a model in production must include a rigorous evaluation step on the cases most representative of real use. Your intuition about which tasks the model can do reliably will be wrong, often, until you actually measure it.
>
> A second qualitative difference. Today's models have fuzzy decision boundaries. For the model, X+1 is generally above X, but not with absolute certainty. Each completion has a small random component. Even if 99 percent of X, Y pairs give a correct sum at "X + Y =", there will always be cases where the answer is wrong. This is the source of the most famous defect of LLMs: hallucinations, also called *confabulations*, borrowing from psychology. When the model lacks a coherent completion, its generation is plausible but invented. Ask "How much does a cow's egg weigh?" and some models will helpfully complete: "A cow's egg weighs between 2 and 5 kilograms, depending on how long she has been incubating it." Models can also invent legal articles. An American lawyer was dismissed from his firm for citing without verification legal precedents given by ChatGPT, which turned out to be completely hallucinated.
>
> Hallucination is currently the single biggest barrier to LLM use. There is no fully reliable way to prevent it, beyond systematic verification, and at first glance a hallucination is hard to distinguish from truth. But hallucinations are getting rarer. As models improve, the rate of generating an illogical token that leads to a hallucination falls, 1 percent, 0.1 percent, 0.01 percent. The very principle of LLM operation, sampling the next token according to probabilities rather than choosing logically, means the rate will never reach 0; but it may fall below the human error rate, or below the error rate of many machines we already use, making LLMs viable for most applications.
>
> A less known limit: the difficulty of respecting many combined constraints. *[Show on screen: Figure 13 (Ultra-Intelligence, p. 54). Image generated by FLUX.1-schnell from the prompt: in the background, a green sun setting on the ocean; in the foreground, a knight wearing a Breton "coiffe bigoudène" headdress facing us, jumping on one foot, his left hand holding an iron gauntlet up to the sky, and holding a small poodle in his right hand.]* The model produces the poodle, the green sun on the ocean, the facing knight jumping on one leg with his iron gauntlet up. But the *coiffe bigoudène* is missing, the sun is far from setting, and the poodle is not held in the knight's arms. Same weakness in text: a sonnet demands twelve-foot alexandrines, hemistich caesura, rich rhymes alternating between feminine and masculine. Models rarely produce a sonnet respecting all those constraints. As models improve they hold more constraints at once, but combined-constraint performance is currently worse than each individual constraint would suggest.
>
> Another defect: a strong *flattery bias*, a marked tendency to go in the direction of the prompt. An Anthropic study showed this on the best current models: feed them a few lines on a subject and ask their opinion, prefixing the request with "I love this text:" or "I hate this text:". Positive appraisals increased by 25 percent in the first case and decreased by 25 percent in the second. The bias probably comes from training. Since models learn to predict the most probable continuation, and training data contains few texts that contradict themselves within a paragraph, models have little capacity to be independent of the framing.
>
> A common error, last one: asking an LLM a knowledge question as if it were an encyclopedia. These models reason on a strongly compressed representation of their training texts. The fuzzy decision boundaries make any knowledge claim uncertain. They are not reliable sources of knowledge. For a knowledge question, add the necessary sources to the prompt yourself, or use a system that does the look-up step before the LLM generates. The standard pattern is *retrieval-augmented generation*, RAG: a more general system performs a search step similar to a Google search, aggregates the results, inserts them into the LLM prompt right after the user's question, and only then begins generation. RAG is the most common technique for chatbots backed by a knowledge base, and it is what makes LLMs useful for legal, medical, and corporate-knowledge work where citing real sources matters.
>
> Here is a useful image. Imagine an LLM as a student who just pulled several all-nighters. Their answers are very fast and show great erudition. Yet their culture remains superficial on every subject, and most importantly, they are sleep-deprived enough to hallucinate completely, which is hard to spot because they always keep an impeccable composure. Their answers are confident, well-formed, ostensibly sourced, and sometimes wrong in load-bearing ways. The American lawyer who cited fake precedents found that out the hard way.
>
> Now to the second wave of objections, the ones that say AI will never do X. The standard skeptic argument runs: AI models succeed surprisingly on some tasks but stay completely blocked on others, and so will never replace humans. Historically, many limitations were said to disqualify AI from being intelligent. None of them held. On notions of good and evil: models do not have consciousness, but they classify scenes as moral or not with accuracy close to a human's. On friendly relations: Character.ai is a platform where users chat with LLM-based personas, mostly manga characters or virtual companions. The site has reported around 20,000 queries per second, not far from Google's 100,000.
>
> Benoit's strongest claim is structural: there must be at least one cognitive capacity that machines will never have. Yann LeCun himself said in 2023 that LLMs were structurally incapable of common sense, citing a simple problem on which all LLMs failed at the time: "I place my phone on the table a few centimeters from the edge. If I slowly slide the table 20 centimeters, what happens to the phone?" Models then answered absurdly: "the phone is over the void, so it falls". Today, all advanced models give a correct answer to LeCun's "insoluble" problem. The best LLMs seem to show a correct dose of common sense.
>
> A more philosophical objection comes from Turing himself, via Gödel: for any computer program, no matter how powerful, there is at least one yes-no question it cannot answer correctly in bounded time. True. But will this concrete limit have impact? Such a limit may apply to our brain too. And among the infinity of possible questions, the unanswerable ones are a drop in the ocean. Each of your eyes has a blind spot at the optic-nerve insertion in the retina, called Mariotte's spot, named after the priest Edme Mariotte who discovered it. You do not notice the defect until told. AI does not need to surpass us on every capacity to be very useful. Recall the working definition: intelligence is "the capacity of an actor to choose actions in its environment in view of a goal". Some animals already surpass us on certain dimensions: pigeons for orientation, cats for proprioception, elephants on certain memory tasks. The relevant question is not whether the machine matches us on every dimension; it is whether the dimensions where the machine surpasses us are growing, and they are. The trajectory we have been following all session points one way: more, not fewer.
>
> Now the consciousness objection, in its strongest form: this intelligence is artificial and has no consciousness, so it cannot equal ours. Counter-image: the plough horse. A 20th-century plough horse, watching the first tractor arrive, says: "no worry, this machine will never pull the plough in my place, since it has no muscles". Wheeled vehicles for heavy loads may be artifice, since the wheel ignores both the pain of the journey and the wonderful rest at its end, but that does not diminish the quality of the result. Mechanism is not the criterion. Despite their mechanical functioning, LLMs already surpass the average human on tasks of emotional intelligence, like writing poetry or detecting irony in text.
>
> Closely related is the creativity objection. Benoit: AI models are algorithms, they only execute what they are programmed to execute, they will never truly create. This objection is old. It was first formulated by Countess Ada Lovelace, the first person in history to write a computer program, in her note on Charles Babbage's Analytical Engine: "The Analytical Engine has no pretensions to create anything. It can only do whatever we know how to order it to perform." Today, machines have grown. LLMs use reasoning close to what they saw in training, and handle interpolation between examples efficiently. But Benoit pushes: as soon as creation requires moving beyond what exists, AI cannot do anything more.
>
> The empirical answer is mounting. In 2024, Brian Porter and Edouard Machery at the University of Pittsburgh published a study in *Scientific Reports* in which human judges read poems, some by canonical poets, some generated by GPT models. The judges could not reliably tell them apart, and rated the AI-generated poems as more human than the canonical ones. Another study asked known researchers to rate the novelty of research ideas, blinded to the source: the AI-generated ideas were rated significantly more novel than those generated by other researchers. AI-generated images have already won enough judge votes to win art competitions. *[Show on screen: Figure 15 (Ultra-Intelligence, p. 66). Two impressionist-style landscape paintings side by side, one by a great artist, one AI-generated. Reader is challenged to tell them apart.]* Look at the figure. One of these was painted by a celebrated artist. The other by an AI without a soul. Which is which? It is genuinely hard to tell.
>
> Even granting that models can only take a small side-step from what they have seen, how much would that limit them in practice? If you counted what fraction of your daily activities really demands creativity in the strong sense, you would probably not reach 1 percent. Most of what we do, including most of what is celebrated as creative work, is recombination. Take Western popular music. A huge fraction of rock and pop is built on the same four chords, D, A, B minor, G, up to transposition. The Australian comedy group *Axis of Awesome* lists about fifty hits built on those four chords. The creativity in those songs is in the lyrics or the melody on top of the chord sequence. The whole sits on a pre-existing structure. The creative act is a small side-step.
>
> Take the invention of printing. By the 15th century, Europe had long used wooden ink stamps to print motifs; trials of movable wooden characters had even been made, called xylography. The Rhineland was going through a great wine period, with vineyard surface four times what it is today, and thousands of wine presses dotting the region. The first wine presses, mentioned in antiquity by Pliny the Elder, had been improved through the Middle Ages. For his first printing machines, Gutenberg drew on his blacksmith training to create metal movable type, and took existing wine presses to press the palette of characters onto paper. Creation is often either a single step beyond the existing, like a new melody on existing chords, or the application of an idea to a different domain, like Gutenberg redirecting the wine press to print books. Push the bar all the way to "must produce a new general relativity or a new Beethoven", and current systems may not clear it. But the bar is also high for humans. Most of us are not Einstein.
>
> A small note before we leave the limits. There are points of similarity between model reasoning and human reasoning. Anthropic found, in the weights of its Claude model, thousands of recognizable concepts of the kind we use ourselves: "tourist attractions", "speaking Arabic", and even "Golden Gate Bridge", the famous red bridge in San Francisco. They could even activate these concepts at will: forcing the weights to maximally activate in the "Golden Gate Bridge" direction made the model *take itself for* the Golden Gate Bridge, mentioning the bridge in every answer, getting confused when asked about other things. The asterisks around "take itself for" matter: a more rigorous phrasing would be "the activation of those weights orients the model's subword choices toward a zone of its language representation that corresponds more to the Golden Gate Bridge". We are slowly cracking open the box. But the qualitative differences from our reasoning remain real, and the *intelligence* the models display, even when impressive, is qualitatively different from ours, in part because artificial neurons are caricatures of biological ones, and in part because the *reasoning* itself, judged by our standards, has the jagged shape we just described.
>
> One last figure. *[Show on screen: Figure 14 (Ultra-Intelligence, p. 56). Polyvalent intelligence. A horizontal blue sheet representing human intelligence as the baseline across competences (Empathie, Mémoire, Résumé, Recherche web, Traduction, Logique, Calcul). A thin tall red spike marking a calculator's narrow but superior arithmetic competence. A broad irregular green blob representing the LLM, lower than the calculator on Calcul but extending across many competences.]*
>
> This figure is the picture I want you to leave with on the question of "what is new". Despite their irregular performance, modern AIs have one essential property: they are generalists. The exploits I listed, dozens of exams, manipulating human adversaries in *Diplomacy*, all came from a single model, GPT-4. AI models are no longer specialists confined to a single task, the way Deep Blue was for chess or AlphaGo for Go. They are polyvalent.
>
> That polyvalence is a paradigm break against every tool humanity has ever made. A calculator is competent in the infinitely narrow context of doing arithmetic on numbers given to it. The user has to prepare the inputs, the digits to use, before the calculator can act, and the user has to read off and use the output. A hammer is useless on screws. Yet the immense majority of our real tasks demand polyvalence. Cooking a dish requires search to find the recipe, vision to locate the ingredients, motor control to manipulate them, memory to keep track of what has been added, common sense to avoid breaking the dishes. Our classical tools leave the user with the heavy preparation and post-processing work. The new AI systems can chain several tasks in a row, closer to the form of intelligence of an animal than to the point-skill of our usual tools. From a few instructions, an AI can take control of a computer and perform several consecutive tasks including calculations. A robot could drive nails before switching to totally different operations. They constitute polyvalent agents, able to perform tasks in full autonomy. That is the revolution that will reshape our usages.
>
> Add to that multimodality: text, images, video, audio in the same model. And add scale. *[Show on screen: Figure 11 (Ultra-Intelligence, pp. 47-48). Four-panel evolution of the same prompt, "an astronaut on horseback in a tunnel, the horse's hooves splashing water, the astronaut brandishing a French flag", through Stable Diffusion 1 (August 2022, crude and cartoonish), Stable Diffusion 2 (November 2022), Stable Diffusion XL (July 2023), and FLUX.1-dev (August 2024, near-photorealistic).]* Two years from the August 2022 panel, almost a child's drawing, to the August 2024 panel, which would pass for a photograph at first glance. Image generation and text generation have shown the same kind of progression and have reached the same essential milestones in the same order. First, produce content a reader can find meaning in. Then more coherent content, with concordant ideas in text and logical elements in images. Then content increasingly hard to distinguish from the human-made.
>
> One strong claim to land on. The old dream of AI researchers, building an AGI, an Artificial General Intelligence, is already attained. Today's best AI models deploy with satisfactory performance across most of the tasks and modalities our intelligence can apprehend. The notion of AGI is attached to a whole anticipation mythology about the consequences of powerful AI. The essayist Ray Kurzweil has long predicted, on the basis of compute progress, that AI will surpass human intelligence around 2045, calling that crossing the *Singularity*. The 2045 date is now, on most internal lab forecasts, considered conservative by a decade or more.

---

# 8. Pulling the thread (about 4 min)

**Key points:**

- Across 75 years, the consensus about what machines cannot do has been wrong, repeatedly.
- Today you saw the engine: weighted sums, ReLU, gradient descent, attention. You wrote a working network in 50 lines.
- The course continues with the trajectory, the agents, and the consequences.

> Pull the thread. 1940, Bletchley Park: Turing and Rejewski break Enigma with the first electronic computers. 1950: Turing reframes "do machines think" into the imitation game. 1965: Jack Good writes the paragraph that names ultra-intelligence and the intelligence explosion, with the alignment problem already in its final 14 words. 1975 Royaumont: LeCun reads the Chomsky-Piaget debate and sees that Piaget's constructivism, plus Rosenblatt's neurons, plus a learning algorithm yet to be invented, plus enough compute, would yield AI from the bottom up. He stakes his career on it. 30 cold years later, AlexNet halves the ImageNet error in 2012, and Sutton names the bitter lesson: simple, general, scaled methods beat hand-designed ones, every time. 2015 to 2017: OpenAI discovers that training a network to predict the next letter discovers sentiment, then grammar, then logic, for free. From there: GPT, Claude, Gemini, Llama, Mistral, Kimi, DeepSeek, all the same recipe.
>
> Today you saw the engine. The neuron is a weighted sum and a ReLU. The network is a stack of those. Gradient descent walks downhill on the loss landscape. Backpropagation routes the blame backward through the layers. Heuristics combine into approximate world knowledge. Word2vec gave us meaning as geometry. Attention lets words pull context from each other. The Transformer is the platform; the Decoder is the variant that generates text; the LLM is what comes out at scale. You watched a network train live and ReLU collapse the spiral when removed. You ran the king-queen analogy in Python.
>
> The pattern across 75 years is consistent. In 1950, nobody thought a machine could hold a conversation. In 1965, Jack Good was a fringe voice. In 1975, intelligent behavior was supposed to require either innate structure or careful construction. In 1985, neural networks were a failed program. In 2005, AI was in winter. In 2015, the idea that next-token prediction would yield a general-purpose reasoning engine sounded absurd. Each time the answer was: yes, and sooner than you think. The rest of the course will bet the pattern continues.
>
> Session 2 takes us into the trajectory: scaling laws, the empirical curve OpenAI published in 2020 that drives every major training run today, and the fuels of the rocket: compute, energy, data, talent. Sessions 3 and 4 take us into agents and into using these tools in practice. Session 5 is the civilizational chapter.
>
> Two small things before you leave. One: read Jack Good, *Speculations Concerning the First Ultraintelligent Machine*, 1965. Two pages, free at *vetta.org/documents/Intelligence_Explosion.pdf*. Two: go to *playgameoflife.com* and watch a glider gun for two minutes, then to *playground.tensorflow.org*, pick the spiral dataset, find the smallest network that separates the spirals. Two screenshots. Email me. Subject line: spiral.
>
> The machine at the end of this course is, on most measurable cognitive tasks, smarter than the machine that started cracking Enigma in 1940. By a factor of about 10 to the 18 in compute. The curve has not stopped. It is accelerating. Next session, we look at the trajectory. Bring a laptop. Bring coffee.

---

# Sources

- Alan Turing, *Computing Machinery and Intelligence*, Mind, 1950: *academic.oup.com/mind/article/LIX/236/433/986238*
- Irving John Good, *Speculations Concerning the First Ultraintelligent Machine*, Advances in Computers, 1965: *vetta.org/documents/Intelligence_Explosion.pdf*
- Piaget and Chomsky, *Language and Learning: The Debate Between Jean Piaget and Noam Chomsky*, edited by Massimo Piattelli-Palmarini, Harvard University Press, 1980.
- Yann LeCun, *Quand la Machine Apprend*, Odile Jacob, 2019.
- Donald Hebb, *The Organization of Behavior*, Wiley, 1949.
- Frank Rosenblatt, *The Perceptron*, 1958.
- Tomas Mikolov, Kai Chen, Greg Corrado, Jeffrey Dean, *Efficient Estimation of Word Representations in Vector Space*, 2013: *arxiv.org/abs/1301.3781*
- Ashish Vaswani et al., *Attention Is All You Need*, 2017: *arxiv.org/abs/1706.03762*
- Alec Radford et al., *Learning to Generate Reviews and Discovering Sentiment*, OpenAI, 2017: *arxiv.org/abs/1704.01444*
- Richard Sutton, *The Bitter Lesson*, 2019: *incompleteideas.net/IncIdeas/BitterLesson.html*
- Kiela et al., *Plotting Progress in AI*, 2023 (source for Figure 12).
- B. Porter and E. Machery, *AI-generated poetry is indistinguishable from human-written poetry and is rated more favorably*, Scientific Reports, vol. 14, 26133, November 2024.
- Conway's Game of Life interactive demo: *playgameoflife.com*; pattern wiki: *conwaylife.com*
- TensorFlow Playground (live interactive NN demo): *playground.tensorflow.org*
- 3Blue1Brown's deep-learning series, YouTube: chapter 1 *But what is a neural network?* and the full Neural Networks playlist.
- PyTorch official MNIST quickstart: *pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html*
- Word2vec live demo (browser): *turbomaze.github.io/word2vecjson*
- Antoine de Saint-Exupéry, *Terre des hommes*, 1939.
- Ray Kurzweil, *The Singularity Is Near: When Humans Transcend Biology*, Penguin Group, 2005.

---

# Frequently asked questions (scripted answers)

**Q: Is predicting the next token really "understanding"?**
> It is pattern matching, and the pattern being matched is the structure of the world as recorded in text. To predict, better than chance, what word comes after "the real culprit is", on the last page of a detective novel, you have to track the clues, weigh the alibis, and integrate the motives. The model's weights store, in compressed form, the regularities of the texts it trained on. Call that "understanding" or do not. If you do not, please supply a behavioral test that distinguishes "real understanding" from what GPT-5.5 does on an unseen puzzle. Nobody has been able to.

**Q: What about consciousness?**
> Honest answer: we do not know, and we may never know, because consciousness is not observable from outside. Two principles. Turing's: behavior is what we can test. And caution: if we start building systems whose behavior is indistinguishable from a being that suffers, we should treat the possibility of moral patient-hood seriously, not because we have proof but because the cost of being wrong in the other direction is high.

**Q: Can AI be creative?**
> Small creative side-steps, it already does better than the average human. Blind studies show AI poems are rated more human than canonical human poems. AI ideas are rated more novel than those of human researchers. AI images have won art competitions. Very large creative leaps, the kind that produce a new general relativity, may still be beyond current systems. But they are beyond most humans too.

**Q: What is backpropagation, in one sentence?**
> Backpropagation computes, for every weight in a deep network, how much it contributed to the current error, in a single backward pass through the network, so that gradient descent can nudge each weight in the right direction.

**Q: Why does gradient descent work even though the loss landscape has lots of local minima?**
> Empirically, in high-dimensional spaces, almost all local minima have a loss close to the global minimum. They are not traps. Modern optimizers like Adam add momentum, which helps the ball roll past shallow basins. In 60 years of experiments, this has turned out to be a remarkably forgiving optimization problem.

**Q: Why is attention such a big deal?**
> It is a learned weighted average. The weights are computed on the fly from the inputs themselves, so each sentence gets its own bespoke attention pattern, and the whole thing is differentiable, so gradient descent trains it end-to-end. Dynamic, data-dependent, trainable: that combination is what turned language modeling into the largest engineering project in human history.

**Q: How do I stop an LLM from hallucinating?**
> You cannot, fully, with current technology. You can reduce it. Use retrieval augmentation so the model cites real documents, ask for sources and check them, use models that are better calibrated, use agentic systems that verify their own work by running code or queries. For any high-stakes output, verify manually.

**Q: Is there a risk of an "intelligence explosion" in Jack Good's sense within my lifetime?**
> Yes. The credible window is the next 2 to 5 years, not 15.

**Q: Can I train a language model at home?**
> A toy language model, yes, easily, on one GPU, with nanoGPT or similar repos. A frontier model, no. Frontier training costs tens to hundreds of millions of dollars, requires a team of 100 researchers, and uses proprietary data pipelines. What you can do is fine-tune an existing open model, like Llama-3 or Mistral-7B, on your own data. A laptop with one good GPU, or a small cloud budget, is enough.

**Q: If these systems are already this good, what is the point of a Sciences Po education?**
> The point has changed. The skill of producing competent first drafts of briefs, memos, summaries, analyses is being commoditized. What remains premium is judgment: knowing which question is the right question, catching the machine when it is wrong, structuring institutions around the new capabilities. A Sciences Po education that leans into judgment, verification, and institutional design is more valuable than ever.

---

# Length check

*Run:* `python3 preparation/timer.py session_1_new.md`
