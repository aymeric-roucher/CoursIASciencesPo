# Session 1. From calculators to ultra-intelligence

*Sciences Po Paris, English-language course for undergraduates.*
*Instructor: Aymeric Roucher, author of Ultra-Intelligence. 2-hour session, target pace around 140 wpm.*

---

#

# 0. Opening (about 3 min)

**Key points:**

- Hook: today is going to be different from most classes you took this year.
- One-line course arc: over 6 sessions we are going to walk from a British maths department in 1940 to the frontier of machines that outthink us.
- Why I am teaching this: I want to look at the actual machine and ask honestly where it is going. You won't hear me speak about AI hype or an AI bubble; if anything, I believe AI is underhyped.

> Let me tell you, today is going to be different. I am not going to stand here and read a history of AI off a slide. I am going to tell you a story, and the story has a twist: the machine at the end of it is, very probably, smarter than the person at the beginning.
>
> That is the arc of this course. 6 sessions. We start in 1940 in a cold hut in the English countryside, where a stuttering mathematician is trying to crack a German cipher, and we end, in Session 6, staring at a curve that suggests the entity you will be talking to in a few years is, on almost every cognitive task that matters, better than you.
>
> That is not a marketing pitch. That is where the evidence points. My job in this course is to put the evidence in front of you and let you do what a Sciences Po student is trained to do, which is weigh it.
>
> Today's session is historical. Not because history is decoration, but because you cannot understand what is happening now in Paris, in San Francisco, in Hangzhou, without understanding what these machines are. And they are not what you think. They are not calculators. They are not search engines. They are not, as one popular line goes, stochastic parrots. They are something new. And the story of how we got there has three big turns, and I want you to remember all three by the end of today.
>
> Turn one: can a machine think. Alan Turing, 1950. Turn two: if a machine can think, how. And the deep answer is not symbols, it is connections, it is neurons, and that answer was nearly lost for 30 years. Turn three: once we found how, we discovered that brute scale, not cleverness, is the main lever, and that discovery was made by a small group at OpenAI in 2015, and it changed everything. That is our map. We are going to walk it.
>
> A word about who I am, briefly, because it matters for what I will tell you. I am an engineer who spent the last several years building AI systems professionally, watching this technology not from a philosophy department and not from a newspaper desk but from inside. I have shipped AI agents used by many thousands of people.
>
> I have trained models. I have seen them fail in embarrassing ways and succeed in ways that, a few years ago, I would have called impossible. What I want to do in this course is one thing: take the frontier AI conversation out of the hands of pundits and put it back into the hands of people who know what the components are.
>
> That is also my goal here. At the end of 6 sessions, you should be able to open a newspaper article about AI and, within a paragraph, know whether the author has done their homework. You should be able to read a technical paper with help, not drown in it. You should be able to form your own view, grounded in the evidence, of where the trajectory is taking us. That is what an educated person in 2026 needs.
>
> One ground rule. We are, in this course, AGI-pilled. That is a term of art, and it means the following. We take as the working assumption, not a speculative possibility, that within the next few years humanity will build machines that outperform us on most cognitive tasks.
>
> We do not treat this as a fringe belief. The evidence that supports it, the scaling curves, the benchmark saturation, the capital flows, the talent flows, the policy reactions of states, is overwhelming. We may be wrong about the exact date. We may be wrong about the exact ceiling.
>
> We are not, in my view, wrong about the direction. So when I say something like "the model you will use in a few years will be better at writing legal briefs than a partner at a corporate law firm," I am not doing marketing. I am reporting an extrapolation from curves you will see in Session 4. If that makes you uncomfortable, good. It should. Discomfort is an appropriate response to sitting on top of an exponential.

---

#

# 1. Turing, Enigma, and the first ultra-intelligent machine (about 16 min)

**Key points:**

- Enigma was considered unbreakable, and it launched the first real computers.
- Turing's imitation game was not a technical spec, it was a philosophical move: if you cannot tell it from a human, stop arguing about its inner life.
- Irving John Good, in 1965, writes the first definition of an ultra-intelligent machine and of the intelligence explosion, in one paragraph that is still the founding document of the whole frontier AI debate.

> We start in 1930. The German army adopts a cipher machine called Enigma. It is a beautiful piece of engineering: three rotating rotors that substitute letters according to a key, and a plug board that adds another combinatorial layer. The Germans believed, and they had reasons to believe, that the code was unbreakable. The number of possible settings was large enough that if you tried to check keys by hand, at a rate of one per second, you would finish around the heat death of the universe. So they used Enigma freely, for naval orders, for submarine positions, for troop movements. It was their secure channel.
>
> What the Germans did not know is that, in 1932, Polish intelligence, led by a mathematician named Marian Rejewski, had gotten hold of the machine's specifications and had started building electronic circuits, specialized hardware, to test Enigma keys at machine speed. Those circuits are arguably the first purpose-built electronic computers in history. They were not general-purpose. They did one thing, which was to try Enigma keys very fast. But they worked. When Poland fell in 1939, the Poles passed everything they had to the French, and then to the British. And in a country estate called Bletchley Park, in Buckinghamshire, a team led by a British mathematician named Alan Turing picked up where Rejewski left off.
>
> Turing's machines, called bombes, were bigger, faster, and above all more flexible. For most of the war, thanks to Bletchley, the Allies were reading German naval communications in close to real time. Submarine convoys were rerouted. Ambushes were prepared. Historians estimate that breaking Enigma shortened the war by about 2 years and saved something like 14 million lives.
>
> That is not a small number. That is the scale of the French population at the time. The first real computers, then, were built for one reason: to break a cipher. Not to play chess, not to talk to you, not to write poetry. To execute simple operations at very high speed, which is, by the way, still what computers do today.
>
> A processor, your laptop's processor, does a few billion simple arithmetic operations per second. It executes an algorithm. That word, algorithm, just means a recipe: a fixed sequence of steps that takes an input and produces an output. A cake recipe is an algorithm. The procedure you use to sort your spice rack is an algorithm. Finding an Enigma key is an algorithm. Computers are very good at running algorithms, very fast.
>
> Now here is where Turing does something strange, because Turing is strange. In 1950, five years after the end of the war, after contributing more to the Allied victory than almost any civilian alive, after being chemically castrated by the British state for homosexuality, a treatment that contributed to his suicide in 1954, Turing publishes a paper in the journal *Mind* called *Computing Machinery and Intelligence*. And the paper opens with a question so naive that it sounds like a child's: can machines think. Then Turing, being Turing, says: the question as stated is useless, because nobody agrees on what thinking is. So let me propose a replacement. Let me propose a test.
>
> The test is this: imagine a judge sitting in a room with a keyboard. The judge can type messages, and receives messages back, through a terminal. On the other side, there are two entities, a human and a machine. The judge does not know which is which. The judge can ask anything. At the end, the judge has to guess which one is the machine. If, on average, over many trials, the judge cannot do better than chance, then the machine has, for practical purposes, passed the test. Turing calls this the imitation game. Today we call it the Turing test.
>
> Notice what Turing has done. He has not answered the philosophical question of whether machines think. He has said: that question is badly posed, let us replace it with a behavioral question, and the behavioral question has a clear answer.
>
> If you cannot tell them apart, then insisting that one of them is not really thinking is a move you have to justify, and good luck justifying it. Turing, in one paper, has shifted the burden of proof. For 75 years, people have been trying to shift it back, and nobody has quite managed.
>
> By the way, the Turing test, as originally specified, has arguably been passed. GPT-4, in several studies, including a pre-registered controlled experiment from UC San Diego in 2024, fools judges about as often as real humans do in 5-minute text conversations. So we can check that box. We moved on.
>
> Now I want to read you a quote. This is the most important quote of today's session, and I want you to remember it because it is, in my view, the founding document of the entire modern debate about AI safety, about superintelligence, about where this is all going. The quote is from a man called Irving John Good, known as Jack Good.
>
> He was a British statistician. He worked with Turing at Bletchley Park during the war, cracking Enigma. He was one of Turing's right-hand men.
>
> In 1965, 15 years after Turing's imitation-game paper, Jack Good writes an essay called *Speculations Concerning the First Ultraintelligent Machine*. The title alone is worth savoring. Here is the opening paragraph, and I am going to read it slowly:
>
> "Let an ultraintelligent machine be defined as a machine that can far surpass all the intellectual activities of any man however clever. Since the design of machines is one of these intellectual activities, an ultraintelligent machine could design even better machines; there would then unquestionably be an intelligence explosion, and the intelligence of man would be left far behind. Thus the first ultraintelligent machine is the last invention that man need ever make, provided that the machine is docile enough to tell us how to keep it under control."
>
> That is 1965. Think about when that was written. The Beatles are on tour. The Apollo program is about to put a man on the Moon. Computers fill entire rooms and run on punch cards. And a British statistician, sitting at his desk, writes this paragraph, and every single element of the frontier AI conversation in 2026 is already there. The word "ultraintelligent." The idea of recursive self-improvement, of a machine that designs a better machine. The phrase "intelligence explosion." The conditional at the end, "provided that the machine is docile enough," which is the entire modern field of AI alignment in 14 words. 1965. Jack Good.
>
> The term *ultra-intelligence* was Good's. 60 years ago. Nobody had to invent anything new.
>
> And for most of those 60 years the term was considered ridiculous. It was science fiction. It was for the Isaac Asimov crowd, not for serious people. Serious people knew that machines were dumb, that expert systems were hitting walls, that AI was in one of its periodic winters.
>
> What you and I are going to see over the next 6 sessions is that serious people were wrong, and Jack Good, sitting in an office in 1965 with a cup of tea, was essentially right. That is humbling. It should also make you pay attention. When someone writes a single paragraph that predicts the next 60 years, and you are lucky enough to read it, you should read it twice.
>
> One last thing on Turing, because it bears on the whole course. Turing did not just ask "can machines think." He built the first formal model of what any computer can possibly do, the Turing machine, in 1936, a decade before there were real computers. And he proved, using a diagonalization argument borrowed from Kurt Gödel's incompleteness theorem, that there are questions no computer can answer in bounded time. This is important, because you will sometimes hear people say: computers have mathematical limits, therefore they cannot be intelligent.
>
> Turing proved this limit, and Turing was the one proposing the imitation game anyway. Why? Because the limit is an edge case. There are infinitely many questions.
>
> Every computer has some it cannot answer. But our brains also have questions they cannot answer, and we still call ourselves intelligent. The argument from Gödel's theorem against AI is, Turing knew, a red herring. Keep it in mind when you hear it.
>
> Let me stay with Good for one more minute, because I think most of you, if you are honest, have never heard the name. Irving John Good was born Isadore Jacob Gudak in 1916, in Whitechapel, London, to Polish-Jewish parents. He studied mathematics at Cambridge, where he was a prodigy.
>
> During the war, he was recruited to Bletchley Park at age 25, personally by Hugh Alexander, and placed in Hut Eight, which was the naval-Enigma team, working directly under Turing. The collaboration was close enough that Turing and Good produced joint statistical-inference techniques, the so-called Good-Turing estimator, which is still used today in computational linguistics and in population ecology. After the war, Good went on to the UK's intelligence service, then became a professor at Virginia Tech in the United States.
>
> He died in 2009, at age 92. In his nineties, he was still writing. He had been, quietly, one of the most important statistical thinkers of the 20th century.
>
> And the reason Good wrote that ultra-intelligence paragraph, I think, is that he had seen, first-hand, at Bletchley, what a computer could do when it was pointed at a well-defined problem. He had watched the bombes crack Enigma. He had seen Turing ask philosophical questions about machines.
>
> He had been in the room where the modern computer was, if not born, at least deeply pre-figured. And by the time he wrote *Speculations* in 1965, he had internalized something that most people around him had not: that the curve was not going to stop, and that at some point, it would cross the line of human intelligence. He wrote the paragraph as a warning and as a promise. It is both.
>
> There is a small footnote to the Good story that I find unforgettable. Good was later a consultant on Stanley Kubrick's film *2001: A Space Odyssey*. The artificial intelligence HAL 9000, which famously goes murderous in the film, was based in part on Good's writings. Kubrick and Arthur C.
>
> Clarke read *Speculations Concerning the First Ultraintelligent Machine* and built the character around it. When HAL says in a calm voice, "I'm sorry, Dave, I'm afraid I can't do that," that is, in some underground genealogical sense, the voice of Jack Good's docile machine, going slightly undocile. The warning is baked into the fiction. It is also baked into our present.
>
> When Anthropic publishes a research paper about whether Claude will or will not follow certain kinds of instructions under adversarial pressure, that paper is downstream from Good's 14 final words. Read the paragraph tonight. Two pages. Then tell your grandchildren you read it.

---

#

# 2. Royaumont, 1975: Chomsky versus Piaget, and a young LeCun (about 17 min)

**Key points:**

- The Royaumont debate between Chomsky and Piaget was the central intellectual event of the 1970s for cognitive science.
- Both men, opponents, shared one deep assumption: intelligence cannot come from simple mechanisms.
- A young French student, Yann LeCun, reads the transcript and sees the obvious thing they missed: both are wrong, and intelligence can be built from the bottom up.

> We are now going to jump forward about 25 years. From Turing's death in 1954, the field called artificial intelligence is founded, gets a name, the name is coined at the 1956 Dartmouth workshop in New Hampshire, and for the next two decades the field is dominated by what we call the symbolic approach. The idea of the symbolic approach is: human reasoning is manipulation of symbols, logical rules applied to propositions, if A implies B and A is true then B is true, and so on. So if we want to build a thinking machine, we should code rules. We should give it a big book of rules about the world. An expert system. Good old-fashioned AI.
>
> This works, up to a point, for very narrow tasks: medical diagnosis in a specific domain, chess openings, theorem proving. But it is brittle. It breaks at the edges.
>
> It has no common sense. A child knows, without being told, that if you push a glass off a table, it falls. An expert system only knows that if you coded the rule "pushed objects on elevated flat surfaces tend to fall under gravity." And the real world has billions of such micro-rules, and you cannot code them all by hand.
>
> The symbolic approach is, in practice, a dead end. It becomes clearer and clearer during the 1970s. And this is the intellectual atmosphere in which the event I want to tell you about takes place.
>
> October, 1975. The Abbey of Royaumont, a beautiful Cistercian monastery about 30 kilometers north of Paris, converted into a conference center. An intellectual named Massimo Piattelli-Palmarini, associated with Jean-Pierre Changeux and a small circle of Parisian cognitive scientists, has organized what everyone knows will be one of the great debates of the decade.
>
> In one corner, arriving from MIT, is the most famous linguist in the world, Noam Chomsky. Chomsky is 46, at the peak of his powers, author of *Syntactic Structures*, father of generative grammar, and a man who believes that human language is too complex, too universal, too similar across cultures, to be something we merely learn. Chomsky's position is that there is an innate universal grammar, hardwired into the human brain, and what children do when they learn French or Mandarin or Swahili is not learn grammar from scratch, but rather set a few parameters on a machinery they were born with. Intelligence, for Chomsky, has a strong innate structural basis.
>
> In the other corner, hosting in effect, is Jean Piaget. Piaget is Swiss, he is 79 years old, he has been watching children develop for 50 years, and he has built an enormous body of theory around the idea that intelligence is constructed. Not innate. Constructed. The child is not born with knowledge. The child interacts with the world, assimilates, accommodates, passes through developmental stages, and what we call intelligence at age 12 is the cumulative product of those interactions with reality. For Piaget, the baby starts with a few reflexes, and everything else is built. It is the constructivist position, and it is the opposite of Chomsky's nativism.
>
> So, for several days, these two titans and their respective teams argue. It is in French and English. It is transcribed.
>
> The transcript is later published, in French and English, under the title *Language and Learning: The Debate Between Jean Piaget and Noam Chomsky*. I recommend it, by the way, if you want to understand what a 20th-century intellectual argument sounded like when it was done at the highest level. The participants include Stephen Jay Gould, the biologist.
>
> They include Jacques Monod, the Nobel laureate. They include a Who's Who of French and American science. And the argument goes back and forth, with great elegance, over several questions: does the child have innate categories. Is language learned or triggered. Is intelligence a faculty or a construction.
>
> Now. Here is what I want you to see. And it is a point I did not see until much later, because on the surface, Chomsky and Piaget look like total opposites. One says intelligence is innate, the other says it is constructed. But underneath, they share a huge assumption.
>
> They both assume that intelligence, whatever it is, cannot emerge from simple processes. For Chomsky, it requires pre-specified structures. For Piaget, it requires long developmental construction through stages. Neither of them entertains the possibility that intelligence might emerge, in bulk, from the repeated application of a very simple mechanism on very large amounts of data. That is not on the table at Royaumont.
>
> It is not even proposed. It is, in the intellectual climate of 1975, nearly unthinkable. Machines are not intelligent. Rules do not make thought. Thought must be either given or grown, not emerged.
>
> And sitting in the audience, or reading the transcript shortly after, is a young French engineering student named Yann LeCun. He is about 20 years old. He has just come across the Royaumont transcript.
>
> And something in him clicks. LeCun has, at that age, already been reading everything he can find about the work of Frank Rosenblatt, an American psychologist who in 1958 built a machine called the Perceptron. The Perceptron was an early neural network, inspired by the biology of the brain, meant to learn by adjusting connections between simple artificial neurons.
>
> The Perceptron had been killed, intellectually, by a 1969 book from Marvin Minsky and Seymour Papert called *Perceptrons*, which pointed out mathematical limits of single-layer networks and effectively defunded the field. Neural networks were, in 1975, considered a failed research program, a dead end, a footnote. And yet the young LeCun, reading this transcript of Chomsky versus Piaget, has the intuition that both of these giants are missing something. That there is a third option. That Piaget's constructivism, taken seriously and combined with Rosenblatt's neurons, plus a learning algorithm that neither man knew about, could yield an artificial intelligence from the bottom up.
>
> LeCun writes, much later, in his 2019 book *Quand la Machine Apprend*, that Royaumont was his calling. He discovered, reading that debate, that he wanted to spend his life building machines that learn. He goes on to do a PhD, to work on neural networks during a period when almost nobody worked on neural networks, to co-invent backpropagation for deep networks with Geoffrey Hinton in the 1980s, to build the first industrial deep-learning system that read postal codes on American checks at Bell Labs in the late nineties, to co-found the "conspiracy of deep learning" at the Canadian Institute for Advanced Research in the 2000s with Hinton and Yoshua Bengio, and eventually to be hired by Mark Zuckerberg to run Meta's AI lab, where he has been for the last decade. LeCun, Hinton, and Bengio share the 2018 Turing Award, the Nobel Prize of computer science, for their work on deep learning. Hinton also wins the 2024 Nobel Prize in Physics, with John Hopfield, for exactly the same work.
>
> So the lesson of Royaumont is not that Chomsky was wrong, or that Piaget was wrong. They were both, in certain respects, right. Language does have structural regularities. Intelligence does develop through interaction. The lesson is that they both shared an assumption, which neither defended explicitly and neither examined, that simple mechanisms applied at scale cannot yield intelligence. And that assumption turned out to be the biggest blind spot of 20th-century cognitive science. The young man in the audience who saw past it is today the most decorated AI scientist alive.
>
> I draw two lessons from this story, and I want you to hold them. First: when a debate is framed as "A or B," check the shared assumption. It is often where both sides are wrong. Second: being right ahead of time is lonely. Yann LeCun spent roughly 30 years being told by serious people that his research program was silly. He was proven right in 2012. If you want to be right about something big, you have to be willing to be considered silly for a long time. Keep that in mind, especially in a school that trains you to seek consensus.
>
> Let me unpack the Royaumont intellectual climate a little more, because I think it is one of the most misunderstood moments in the history of cognitive science, and because it will give you a feel for how much the ground has shifted in 50 years. In the mid-1970s, the dominant framework in almost every human science was structuralism. Structuralism, associated with Claude Lévi-Strauss in anthropology, with Roland Barthes in literary criticism, with Chomsky in linguistics, with Jacques Lacan in a dark corner of psychoanalysis, was the idea that the surface phenomena of human behavior, language, myth, story, symptom, are generated by deep, hidden, rule-governed structures.
>
> The task of the scientist was to uncover the structures. To reverse-engineer the grammar. Structuralism was elegant, it was intellectually prestigious, it was French, it was at the peak of its influence. And structuralism, in its AI-adjacent form, is what fed the symbolic approach. If you believe that language is governed by hidden syntactic rules, then teaching a computer the rules is the obvious route to a talking machine.
>
> Piaget, interestingly, was not quite a structuralist in the French sense, but he too relied on deep invariants, the developmental stages, sensorimotor, pre-operational, concrete operational, formal operational, which he believed were universal, species-wide, unfolding in a fixed order. Piaget's children, whether in Geneva or Nairobi or Osaka, would pass through the same stages in the same sequence, because the structure of the stages was intrinsic to how cognition develops. Piaget called himself a constructivist, but it was constructivism within a tight structural frame.
>
> So the Royaumont debate, in retrospect, was not really Chomsky versus Piaget. It was Chomsky's structuralism versus Piaget's structuralism. Two variants of the same deep bet. And that bet, that intelligence requires pre-specified structure, was the bet the field of AI took for the next 30 years, and lost.
>
> The person who won was a Canadian psychologist named Donald Hebb, working alone in the 1940s, writing a book called *The Organization of Behavior* published in 1949. Hebb proposed what is now called the Hebbian hypothesis, and it can be summarized in one sentence: neurons that fire together, wire together. Meaning: the strength of the connection between two neurons increases when they are active at the same time. That is it.
>
> One rule. Applied at the scale of the cortex, with its 86 billion neurons and roughly 100 trillion connections, this rule, plus sensory input, plus a lifetime, is, Hebb proposed, enough to produce a functioning human mind. Chomsky called this sort of proposal "learning theory" and dismissed it. Piaget ignored it.
>
> And Hebb, working quietly, laid the foundation for everything that came after. The Hebbian hypothesis is, as summaries of modern neuroscience now concede, broadly correct. Real brains do use something very close to connectionist learning. The neurons-that-fire-together-wire-together rule is, in modified form, what drives synaptic plasticity, which is what drives learning.
>
> So when LeCun, reading the Royaumont transcript, has his intuition, what he is really doing is crossing Rosenblatt's perceptron with Hebb's plasticity rule and imagining what happens if you run the combination at scale with the right learning algorithm. He will not have the learning algorithm fully worked out for another decade. But the germ of the idea is there, at age 20, in a French-engineering student reading about a debate between two Americans-by-adoption in a French monastery.
>
> The history of AI is like this. The important moves happen in small rooms, between people who do not yet know they are important, and the textbooks get written later. If you remember one thing about Royaumont, let it be this: the right answer was not on the panel. The right answer was in the audience.

---

#

# 3. Intelligence from simple bricks: ants, cellular automata, neurons, and scale (about 22 min)

**Key points:**

- Emergence is not mystical. An ant follows a handful of local rules; the anthill is a logistic system. Conway's Game of Life, four rules, gives you a universal computer.
- Rosenblatt's neurons and LeCun's networks made the connectionist bet: stack simple bricks, let them learn.
- Alex Krizhevsky, 2012 ImageNet: deep learning crushes all symbolic approaches on vision. Richard Sutton calls this the "bitter lesson."
- OpenAI, 2015: training a model to predict the next letter of Amazon reviews yields sentiment understanding for free. This is the seed of the entire LLM paradigm. Scale, not cleverness.

> Let me now attack head-on the question that Chomsky and Piaget never really posed. Can intelligence emerge from simple, mindless, local mechanisms, repeated at scale. Because this is the core question of the whole field, and the answer, now, is clearly yes.
>
> Start with the most mundane example: an ant. An ant has a brain of about 250,000 neurons. For comparison, you have about 86 billion. The ant does not have a global model of the world. The ant follows, roughly, the following rules. If I smell food pheromone, follow the gradient.
>
> If I smell danger pheromone, run away. If I find food, deposit food pheromone on the way home. That is nearly it. Simple, mechanical, local rules. Yet from a colony of a million ants executing these local rules, you get global behaviors that look, from the outside, extremely intelligent. The anthill efficiently explores kilometers of terrain.
>
> It finds the shortest path between the nest and a food source, through a distributed computation that resembles Dijkstra's algorithm. It regulates temperature by collectively moving in response to local heat signals. It coordinates wars. None of this is in any single ant's head. It is emergent. The complexity of the system is not the complexity of the brick. It is the complexity of what happens when you have a lot of bricks, interacting, over time.
>
> Now go more abstract. In 1970, the British mathematician John Horton Conway invented a little toy called the Game of Life. I recommend you play with it. You can find excellent interactive versions online; the cleanest demo I know is Edwin Martin's, at *playgameoflife.com*, and the academic wiki *conwaylife.com* has every pattern known to humanity.
>
> Conway's Game of Life is defined on an infinite grid of cells. Each cell is either alive or dead. At each time step, every cell looks at its eight neighbors and updates itself according to exactly four rules. A live cell with fewer than two live neighbors dies, as if of loneliness.
>
> A live cell with two or three live neighbors stays alive. A live cell with more than three live neighbors dies, as if of overcrowding. A dead cell with exactly three live neighbors comes alive, as if by reproduction. That is it. Four rules. A first-year student can implement it in 15 lines of Python.
>
> And from these four rules, you get: oscillators, gliders that move across the grid, glider guns that produce an infinite stream of gliders, spaceships of all sizes, entire factories, and, extraordinarily, a proof that the Game of Life is Turing-complete, meaning that you can build, inside the Game of Life, anything a computer can compute. People have built, inside the Game of Life, a clock, a calculator, a processor simulation, and even a simulation of the Game of Life itself, running inside the Game of Life. That is not a metaphor.
>
> That is a mathematical result. Four rules, infinite computation. The universe does not need complicated rules to produce complicated things.
>
> It needs simple rules, plus time, plus scale. That is the lesson. It was available in 1970. The Chomsky-Piaget debate happened five years later and nobody at Royaumont quoted Conway.
>
> Now let us bring it back to our topic. The neural network, Rosenblatt's invention, then LeCun and Hinton's rediscovery, is exactly this kind of system. A neural network is a huge graph of very simple units, called neurons, each one doing exactly two operations.
>
> Operation one: compute a weighted sum of your inputs. That means each input comes with a number, the weight, and you multiply each input by its weight and you sum them up. Operation two: apply an activation function.
>
> The most common one today is called ReLU, which is extremely simple: if the sum is negative, output zero; if it is positive, output the sum. That is it. That is a neuron. A schoolchild can do the arithmetic on paper.
>
> *[Show on screen — Figure 2 (Ultra-Intelligence, p. 13): schematic of a single neuron. Three inputs arriving from the left, each along a channel colored from blue for negative weights to red for positive weights. The neuron does a weighted sum, applies the ReLU activation, and outputs a single signal. In the example drawn, the sum comes out to minus 0.79, which is negative, so the neuron outputs zero and stays silent.]*
>
> Now stack these neurons into layers. First layer of neurons looks at, say, the pixels of an image. Each neuron in the first layer takes in a few hundred pixel values, weights them, sums them, applies ReLU, and outputs a number. The second layer takes the outputs of the first layer as its inputs, does the same thing. Third layer, same. And so on, for 10, 50, 100 layers.
>
> *[Show on screen — Figure 3 (Ultra-Intelligence, p. 14): a full neural network applied to an image of an elephant. Inputs on the left: pixel values of the elephant photo. First hidden layer detects simple shapes like edges and curves. Second hidden layer detects more complex shapes: a tusk-like form, a trunk-like form. Final layer has two output neurons, one labeled "Fox" and one labeled "Elephant." The elephant neuron lights up strongly; the fox neuron stays dark. Weights are drawn as colored arrows, blue negative to red positive, arrow transparency showing the transmitted signal intensity.]*
>
> What you see in that figure is fascinating. Notice that nowhere in the network is there a "box" labeled "elephant knowledge." There is no symbolic database of facts about elephants. What there is, is a graph of millions of simple units, with connection weights that have been tuned, through training, to fire in patterns that happen to discriminate elephants from foxes. The concept of "elephant," if it lives anywhere, is distributed across a cloud of neurons spanning multiple layers. This is called distributed representation. It is what Rosenblatt hoped for in 1958, what LeCun formalized in the 1980s, and what the entire field now takes for granted.
>
> LeCun and Hinton's real contribution, their Nobel contribution, was not the neurons. Rosenblatt had the neurons. Their contribution was backpropagation, an algorithm, properly formalized in 1986 with David Rumelhart, for automatically tuning the connection weights from examples, so that a human does not have to set the weights by hand.
>
> Backpropagation is how a network learns. We will spend most of Session 2 on it, so I will not go into the math today. For now, just hold the idea: the network starts with random weights, it guesses badly, we measure how wrong the guess was, and we mechanically adjust all the weights a tiny bit in the direction that reduces the wrongness. Repeat a billion times. That is training.
>
> For about 25 years, from 1986 to around 2010, neural networks worked, but they worked on small problems, with small data, on small computers. The mainstream AI community sneered at them. LeCun, Hinton, and Bengio met at CIFAR, the Canadian Institute for Advanced Research, in the 2000s, and they called themselves, half-jokingly, the "conspiracy of deep learning." In 2007, they submitted a workshop proposal to the main AI conference of the year, NeurIPS, and it was rejected.
>
> Rejected without explanation. So they chartered their own bus, literally a bus, funded by CIFAR, and they brought researchers to a parallel workshop. 300 people came. It ended up being the most-attended event of the conference. The conspiracy was starting to leak.
>
> Let me pause on the "simple mechanism at scale" idea for a moment, because I do not want it to sound like a slogan. It is a load-bearing claim, and it deserves a proper examination. The claim is that repeated, local, mechanical operations, combined in large enough numbers, can produce behavior that we, from the outside, call intelligent. I gave you the ant colony and the Game of Life as examples. Let me give you a third, which is closer to our subject.
>
> Consider a single human neuron. Not the artificial one we just drew, the biological one in your head. A biological neuron is a cell with a long tail called an axon and a bushy set of receivers called dendrites. When the dendrites receive enough chemical input from other neurons, the cell body generates an electrical spike, an action potential, that travels down the axon and releases neurotransmitters at its end, which trigger the dendrites of the next neurons. That is, biologically, all a neuron does.
>
> It integrates signals. If the integrated signal is above a threshold, it fires. If not, it stays silent. There is no wisdom in a single neuron. There is no meaning in a single spike.
>
> A neuron in isolation is the dumbest cell in your body. And yet you have 86 billion of them, with on average 10,000 connections each, for a total of something like 100 trillion synaptic connections, all firing in parallel, reshaping their strengths in real time as you live. Out of that, comes you. Your memory of childhood, your love for your grandmother, your ability to hold a conversation in three languages, your capacity to feel shame, your sense of humor. All of it is produced by 100 trillion silent, mechanical, chemical thresholds. If that does not strike you as remarkable, I submit you have not looked closely enough.
>
> Now here is the point. The artificial neurons we have been building since Rosenblatt are much simpler than biological neurons. They are caricatures. A biological neuron has dozens of subtle features that no artificial model captures: the specific timing of spikes, the three-dimensional branching of dendrites, the varieties of neurotransmitter chemistry, the glial cells that support and modulate the network.
>
> Our artificial neurons are, frankly, a joke compared to the real thing. They are arithmetic. Weighted sum, threshold, output. A schoolchild's abstraction of what a neuron does.
>
> And yet, when we stack a few hundred billion of these caricature neurons together in a large language model, and we train them on the entire written output of the human species, we get a system that converses in 30 languages, that writes code, that drafts legal briefs, that explains quantum mechanics. If the caricature already gets us this far, imagine what the real thing can do. Or rather, do not imagine; look in the mirror. You are the real thing. And the thing we build on a GPU farm in Texas, using caricatures, is already starting to catch up to you. That is the size of the claim.
>
> The bet of deep learning, made by Rosenblatt in 1958 and vindicated over 60 years, is that the mechanism-level detail does not matter as much as the architectural principle. The principle is: many simple units, each doing weighted sums and thresholds, connected densely, trained by adjusting the connection strengths from examples. That principle, realized in rough artificial form, is already producing human-level performance on a rapidly growing list of tasks.
>
> When people ask me whether AI will reach or surpass human intelligence, my honest answer is: the principle is already shared between us. The question is whether the realization of that principle in silicon, trained on text and images, can reach the depth and the generality of the realization of the same principle in biological tissue, trained on 20 years of embodied life. I believe the answer is yes.
>
> Not because silicon is better than neurons. Because the silicon realization has two cheat codes that biology does not: it can scale the hardware a billion-fold in a decade, and it can be trained on the compressed output of billions of biological realizations, which is to say, on the entire written record of humanity. That is what is happening right now. That is what you are watching.
>
> What cracked the field open was 2012. Alex Krizhevsky, a PhD student of Hinton in Toronto, enters a benchmark called ImageNet. ImageNet, created by the Stanford professor Fei-Fei Li, is a dataset of 12 million labeled images spanning 22,000 categories: every dog breed, every insect, every vehicle. Before 2012, the best systems on ImageNet were elaborate hand-engineered pipelines of computer-vision features.
>
> They had error rates around 26 percent. Krizhevsky trains a deep neural network with 8 layers, using 2 NVIDIA GPUs bought with a grant, and at the ECCV conference he presents his result. His network halves the error rate. Halves it.
>
> From 26 percent to 15 percent. In computer vision, this is a thunderbolt. Fei-Fei Li is in the room. The audience knows, in real time, that the field has just changed hands.
>
> After 2012, it takes about three years for every serious computer vision lab in the world to throw out their hand-engineered pipelines and switch to deep learning. Speech recognition follows. Machine translation follows. Board games follow: AlphaGo beats Lee Sedol at Go in 2016, a feat that experts had said was 10 years away. In every domain where enough data exists, a deep network, trained with enough compute, beats the hand-engineered system. Every domain. Not most. Every.
>
> The great computer scientist Richard Sutton, who won the Turing Award in 2024, writes a short essay in 2019 called *The Bitter Lesson*. I recommend it; it is two pages, it is free online. The bitter lesson, in Sutton's words, is this: for 70 years, AI researchers tried to put their own knowledge of the world into the machine, and every time, those systems were beaten, over and over, by general-purpose learning methods that leveraged more computation. Every time.
>
> The bitter part of the lesson is not that we were wrong. The bitter part is that our expertise, our insight, our beautiful hand-designed symbolic rules, were not the thing that worked. The thing that worked was dumb, general, scaled-up learning. The Chomsky-Piaget assumption, that intelligence requires either innate structure or careful construction, turned out to be wrong.
>
> Intelligence, or a very useful approximation of it, emerges from simple rules applied at scale. The ant colony was right. The Game of Life was right. Rosenblatt was right. And after 2012, nobody in the field could pretend otherwise.
>
> *[Show on screen — Figure 4 (Ultra-Intelligence, p. 17): Moore's law. Log-scale plot of compute operations per dollar from 1900 to the 2020s. The curve climbs 9 or 10 orders of magnitude, from the Analytical Engine through ENIAC, IBM 701, Apple II, IBM PC, Pentium II, GTX Titan, up to NVIDIA B100.]*
>
> Look at that curve. Moore's law, named after Intel co-founder Gordon Moore's observation in 1965, states that the number of transistors on a chip doubles roughly every two years. At constant cost, compute per dollar has increased by a factor of about 10^18 over the 20th century. 10^18. A billion times a billion.
>
> This is the explosion that made deep learning possible. Rosenblatt in 1958 had the algorithm. He had the idea. He lacked the compute. 50 years of Moore's law gave LeCun's generation a trillion times more compute than Rosenblatt had, and that is what finally unlocked the field.
>
> Being right in AI is not enough. You also have to be on time. Rosenblatt was not on time. LeCun barely was. The current generation of researchers, including some of you, might be extremely on time for what comes next.
>
> Now, one more step, and this is the single most important technical discovery of the last 15 years, and I want you to hold it because it reframes everything.
>
> In 2015, a small and then-unknown research lab called OpenAI, just founded, was trying to build a system that could do sentiment analysis on product reviews. Sentiment analysis means: look at an Amazon review, decide if the customer was happy or unhappy. The standard approach was to collect tens of thousands of reviews, have human annotators rate each one on a scale from 1 to 5, and train a classifier on that labeled data.
>
> Expensive and slow. OpenAI tried something different. Instead of training on sentiment labels, they trained a neural network on a much simpler task: given the first N letters of a review, predict the next letter.
>
> That is it. Just next-letter prediction. A billion Amazon reviews, no human annotation, just text, predict the next letter.
>
> Once the model was trained, they peeked inside. They looked at which neurons had become active for which inputs. And they found, to their shock, a single neuron, one neuron out of millions, that had learned, unsupervised, to track the sentiment of the review.
>
> If the review was positive, this neuron fired high. If the review was negative, it fired low. Nobody had told the model about sentiment.
>
> Nobody had labeled a single review. The model had discovered sentiment as a useful intermediate concept, because predicting the next letter of "this product is wonderful, I" is much easier if you have an internal variable for how the reviewer feels. Predicting a letter requires understanding the text. And understanding the text apparently requires constructing, inside the network's weights, something that looks like a model of sentiment, grammar, topic, and eventually the world.
>
> This result, written up by Alec Radford and his colleagues at OpenAI in 2017 in a paper called *Learning to Generate Reviews and Discovering Sentiment*, is, I would argue, the intellectual birth of the modern large language model. Because the implication was this: do not train a specialized model for each task. Train one giant model to predict the next token on a vast corpus of text, and specialized capabilities will emerge inside it as byproducts of the prediction task. Sentiment. Grammar. Translation. Arithmetic. Logic. Eventually, reasoning.
>
> From this one insight, the OpenAI team followed a chain of models: GPT-1 in 2018, GPT-2 in 2019, GPT-3 in 2020. At each step, same recipe: more text, more parameters, more compute, next-token prediction. And at each step, new capabilities emerge, unplanned, for free.
>
> GPT-3 can do analogies. GPT-3 can write poems in the style of Shakespeare. GPT-3 can solve basic arithmetic.
>
> None of these were trained for. They are emergent properties of training a bigger and bigger model to predict the next word. This is the scaling hypothesis. It is that intelligence is a byproduct of scale applied to prediction. It is what drives every major lab today, every 10-billion-dollar training run, every GPU shortage, every NVIDIA share price.
>
> And it retroactively explains the 20th-century failures. Symbolic AI failed because it tried to hand-code knowledge, and reality is too big to hand-code. Narrow neural networks stagnated because they did not have enough data and compute.
>
> The moment data and compute crossed a threshold, around 2017, the emergent capabilities of scaled-up prediction models started stacking, and here we are. You are living in the compounding phase of that curve. The next 6 sessions will show you, in detail, where that curve is going. For today, the main thing to hold is: we constantly underestimate how fast the exponential takeoff is going. Getting used to things getting faster is crazy hard, but we will have to if we want to play a part.
>
> I want to spend a little more time on the chessboard story, because it teaches the single most useful piece of numeracy I can give you today. The story is attributed to the 13th-century Kurdish historian Ibn Khallikan, though versions of it circulate across medieval India and Persia. It goes like this. A tyrant, ruling over a vast kingdom, becomes obsessed with a new game called chess.
>
> He plays day and night. He neglects the kingdom. He has chessboards placed at the feet of the gods in every temple. Eventually, he summons the inventor of the game, a simple sage named Sissa, and offers him any reward he chooses.
>
> Sissa demurs, then eventually makes a small and seemingly modest request: grains of wheat, placed on the chessboard. One grain on the first square. Two on the second. Four on the third. Doubling each square, all the way to the 64th.
>
> The tyrant laughs. Wheat, really, old man. He orders his slaves to begin. The first 8 squares, the first row, takes only 255 grains.
>
> A palmful. The second row takes a few thousand. The third row, a few hundred thousand. By the fourth row, the kingdom's granaries are being drained.
>
> By the fifth row, the harvests of several provinces have been exhausted. By the sixth row, the cumulative total exceeds all the wheat ever grown on Earth. To complete the chessboard would require 2^64 grains, which is approximately 10^19 grains, which is about 6 times the mass of all living biomass on the planet. The tyrant, we are told, either executes Sissa for the trick, or admires him and makes him vizier, depending on which version you read. The moral, in all versions, is the same: do not underestimate a doubling.
>
> Now here is why the chessboard matters for us. Moore's law says compute per dollar doubles every two years. It has been doing so, with remarkable consistency, for about 60 years. That is 30 doublings.
>
> 30 doublings is a factor of 10^9. A billion times. The compute available to train a frontier AI model today is about a billion times what was available to Rosenblatt in 1958. A billion.
>
> We are not on the first row of the chessboard. We are somewhere in the middle rows, where the grains start to become unmanageable, and the exponential starts to hurt. Session 4 will spend real time on the quantitative structure of this curve, because it is the curve that drives the entire frontier AI industry. For today, just know: Jack Good's warning, and Ibn Khallikan's fable, are telling you the same thing. Exponentials are deceptive in early rows, ruinous in late rows. We are in late rows.

---

#

# 4. Stochastic parrots or real intelligence? On measuring the thing (about 21 min)

**Key points:**

- The "stochastic parrot" critique, from Bender, Gebru and colleagues in 2021, has to be taken seriously and then understood for what it is and is not.
- The humanities traditionally measure intelligence through consciousness, embodiment, or creativity. None of these gives us a measurement.
- Academic benchmarks, MMLU, GPQA, ARC-AGI, Humanity's Last Exam, saturate in about two years. Measurement is running out of ceiling.
- The "no creativity" objection fails: AI-generated poetry is preferred over human poetry in blind tests, AI ideas are rated more novel than human researcher ideas, AI images win art competitions.
- The final move: the "how" does not matter, only the result. Stop asking whether the system is "really" thinking. Ask what it does.

> Let me now turn to the objection, because it is a serious one, and the best objections deserve the best answers. The objection is this. A large language model, you might say, is not really intelligent. It is just doing next-token prediction on a huge corpus. It has no model of the world. It has no understanding, in the human sense. It is what the linguist Emily Bender, together with Timnit Gebru and others, in a famous 2021 paper, called a stochastic parrot. It squawks plausible-sounding text without knowing what it means. Therefore, the argument goes, all the scaling in the world cannot turn a parrot into a mind.
>
> This is a real argument, made by serious people, in a peer-reviewed venue. It got Timnit Gebru fired from Google, which is its own saga. And we have to engage with it, not dismiss it.
>
> Here is the first move. Consider what happens when a language model gets really good at next-token prediction on a very long text. Suppose I feed the model the entire text of an Agatha Christie novel, up to the moment where the detective is about to name the murderer, stopping at the colon: "and the real murderer, ladies and gentlemen, is..." In order to predict the next word, really predict it, better than random, the model has to have tracked the clues, understood the motives, eliminated the suspects, integrated the physical evidence, weighed the alibis.
>
> If it cannot do those things, it cannot beat chance at predicting the next word. The better the prediction, the more the model has been forced, during training, to build internal representations of cause, motive, character, plot, which is to say, of the world that the novel is modeling. In the limit of perfect next-word prediction, the model has had to construct something very close to understanding, because nothing less will do the job.
>
> This is why I take the scaling hypothesis seriously. Prediction, at scale, is not a shallow task. It is an arbitrarily deep task, because the texts we feed the model encode, indirectly, everything humans have written down about the world.
>
> Second move. The "stochastic parrot" critique has a hidden assumption: that a system "really" understanding requires something beyond the functional behavior. Some essence. Some consciousness.
>
> Some ground-truth access to meaning that the model lacks. Well. How would you know. If the model passes every behavioral test of understanding we can throw at it, if it solves novel problems, explains its reasoning, spots errors, generalizes to unseen cases, what additional evidence could we possibly ask for.
>
> We are back to Turing. Turing's move in 1950 was precisely to cut this Gordian knot: if you cannot tell it from understanding by any behavioral test, then arguing that it is not "real" understanding is a move without cash value. You have to show me the test that fails. And for the current generation of frontier models, on a rapidly growing list of tasks, there is no test that fails systematically.
>
> That brings us to measurement, which is where the story gets interesting. How do you measure the intelligence of a machine. The humanities have a long tradition here.
>
> The classical definitions of intelligence in philosophy, from Aristotle through Descartes to Kant to Bergson, tend to tie intelligence to consciousness, to self-awareness, to embodied action, to free will. None of these is measurable. They are not quantities.
>
> They are categorical claims. A century of cognitive psychology gives us IQ tests, which measure a specific kind of problem-solving ability in humans, but the content of IQ tests is calibrated to human populations, and applying them to machines is awkward. The computer can do the matrix-reasoning portion of an IQ test perfectly while failing a question that requires common sense, and vice versa. Intelligence, as a single quantity, is a psychometric construction; it is not a law of nature.
>
> So the AI field invented its own measurement, which is the benchmark. A benchmark is a standardized dataset of tasks, each with a known correct answer, and a model's score is the fraction of tasks it gets right. Benchmarks have been the engine of AI progress for 30 years. ImageNet was a benchmark. When ImageNet fell, computer vision became a solved problem.
>
> In the language domain, the most famous benchmark for many years was called MMLU, Massive Multitask Language Understanding, created by Dan Hendrycks and colleagues in 2020. MMLU has about 16,000 multiple-choice questions spanning 57 subjects: elementary mathematics, US history, computer science, law, medicine, philosophy. It was designed to be hard. In 2020, GPT-3 scored around 44 percent on MMLU. Human experts score around 90 percent.
>
> In 2021, models were around 60 percent. In 2023, GPT-4 scored around 86 percent. By 2024, the best models are at or above 95 percent. MMLU is, for all intents and purposes, saturated. A benchmark that was state of the art four years ago is no longer interesting. You can verify this yourself on the Papers With Code leaderboard at *paperswithcode.com/sota/multi-task-language-understanding-on-mmlu* or on the Hugging Face Open LLM Leaderboard at *huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard*. The curve is flat against the ceiling.
>
> So researchers make harder benchmarks. GPQA, the Graduate-level Physics, Chemistry, Biology benchmark, was released in 2023. Its questions are so hard that PhD holders in the relevant field get around 65 percent, and PhD holders outside the field with 30 minutes of Google access get around 34 percent. At release, GPT-4 was around 40 percent. By early 2025, frontier models are above 80 percent on the hard version. GPQA is saturating too.
>
> Then there is ARC-AGI, the Abstraction and Reasoning Corpus, designed by François Chollet in 2019 specifically to be resistant to brute memorization. ARC presents the model with a few input-output grid examples and asks it to infer the pattern and apply it to a new grid. It requires on-the-fly abstraction, not recall.
>
> For years, GPT-style models scored close to zero on ARC. Then, in late 2024, OpenAI's o3 model, a reasoning model, jumped to 85 percent on the public set, at enormous compute cost. Chollet and the team immediately designed a harder version, ARC-AGI-2, released in 2025.
>
> ARC-AGI-2 is still open. The current leaderboard is at *arcprize.org*. As of now, frontier models are at around 10 to 15 percent on ARC-AGI-2. Humans, given time, get around 90 percent. So the ceiling is still there, but it is falling fast, and Chollet has publicly said he does not expect it to last more than a couple of years.
>
> The most ambitious benchmark of the current moment is called Humanity's Last Exam, launched in 2025 by the Center for AI Safety, Scale AI, and a thousand domain experts. Its name is the joke, and the joke is not really a joke. It consists of about 3,000 questions at the absolute frontier of human expertise: professional mathematics, cutting-edge physics, obscure medicine, specialized law, rare languages.
>
> Each question was written by a PhD-level expert who tried to write a question that current models would fail. At launch in January 2025, the best models scored around 4 percent. Within 6 months, the best scored above 20 percent.
>
> You can follow the leaderboard at *agi.safe.ai*. Humanity's Last Exam is called that because, if it too saturates, we may have run out of ideas for how to measure intelligence from above. We are being lapped.
>
> I want you to sit with this pattern. Every serious benchmark of machine intelligence, from the 1950s to today, has been saturated within a few years of its release. ImageNet, saturated. MMLU, saturated.
>
> GPQA, effectively saturating. ARC-AGI-1, saturated. ARC-AGI-2, on track. Humanity's Last Exam, on track.
>
> The ceiling of the measurable is receding. At some point, possibly soon, we will no longer be able to design, in advance, tests that current models clearly fail. And on that day, saying "yes, but it is not really intelligent" becomes an increasingly strange thing to say. Because the thing you are pointing at, the thing the model lacks, cannot be demonstrated. You have to take it on faith.
>
> Let me briefly address one more philosophical objection that you will hear, because it is dressed up in serious language and it deserves a serious answer. The objection is the so-called Chinese Room argument, proposed by the American philosopher John Searle in 1980. Searle asks you to imagine that you, not speaking Chinese, are locked in a room with a gigantic rulebook that tells you, for any Chinese sentence passed in through a slot, exactly what Chinese sentence to pass back.
>
> You do this mechanically. From outside, a Chinese-speaking observer would conclude that the room understands Chinese. But you, inside, understand nothing.
>
> You are just shuffling symbols. Therefore, Searle concludes, syntactic manipulation of symbols is not semantic understanding. And therefore, no computer program, however sophisticated, can truly understand anything.
>
> The Chinese Room has been picked apart in the philosophy literature for 45 years, and I will not try to exhaust the debate. I will just note three things. First, the argument proves too much: by the same logic, your own brain is a Chinese Room, because it consists of neurons shuffling electrochemical signals, none of which individually "understand" anything. If the argument works against machines, it works against us.
>
> Second, Searle's argument assumes that understanding must be located somewhere, in some component or homunculus. The alternative, which most cognitive scientists now accept, is that understanding is a property of the whole system, not of any part. The room, as a system, in Searle's thought experiment, does understand Chinese; the person inside is a neuron, and we do not expect a single neuron to understand anything either. Third, and most importantly, even if Searle's argument is accepted on its own terms, it does not tell you anything about what the machine can do.
>
> It says the machine lacks some inner essence of understanding. Fine. But the outputs, the behaviors, the problem-solving, remain exactly what they are. For any engineering or policy purpose, "the machine lacks inner understanding but gets the medical diagnosis right 98 percent of the time" is indistinguishable from "the machine understands medicine." The practical implications are the same.
>
> So when you hear the Chinese Room rolled out in a debate, remember: it is a 30,000-foot philosophical point that does not cash out in any empirical prediction. The machine does what it does. That is what we have to reckon with.
>
> A last objection, very common. The creativity objection. Machines can only produce what they have been trained on. They cannot truly create anything new. This objection is old. It was first formulated by Ada Lovelace, the first computer programmer, in her notes on Charles Babbage's Analytical Engine in 1843: "The Analytical Engine has no pretensions whatever to originate anything. It can only do whatever we know how to order it to perform." Lovelace's objection is 180 years old, and it has held the field in a certain way, because it rests on the intuition that creativity requires some ineffable leap that machines, being deterministic, cannot make.
>
> Here is the problem with the creativity objection. It no longer matches the data. In 2024, Brian Porter and Edouard Machery at the University of Pittsburgh ran a study, published in *Scientific Reports*, in which human judges read poems, some written by canonical poets like Walt Whitman and T.S. Eliot, some generated by GPT models. The human judges could not reliably tell them apart, and, critically, they rated the AI-generated poems as more human, more emotionally resonant, than the canonical human poems.
>
> *[Show on screen — Figure 15 (Ultra-Intelligence, p. 66): two impressionist-style landscape paintings side by side. One is by a canonical human artist. One is generated by a diffusion model. Audience is challenged to tell them apart. They will fail.]*
>
> In 2024, a team at Stanford led by Chenglei Si had human research scientists rate the novelty of research ideas, some generated by AI, some by human researchers. They were blinded to the source. The AI-generated ideas were rated significantly more novel than the human ones. In 2022, an AI-generated image by Jason Allen, using Midjourney, won first prize in the digital art category of the Colorado State Fair art competition, beating human artists. The judges, when they found out, were upset. The prize stood.
>
> So the creativity objection is in the same position as the sentiment objection, as the understanding objection, as the common-sense objection. It was coherent when the systems were weaker. It is no longer coherent now that the systems routinely pass the behavioral tests we would have designed for creativity.
>
> You can, of course, push the goalpost. You can say: but a truly creative machine would produce a new Einstein, a new Beethoven, a symphony that changes music history. Fine.
>
> That bar is extremely high, and it is possible that today's systems do not clear it. But the bar is extremely high for humans too. The number of Einsteins per decade in the human species is not large. If the test of creative intelligence is "produce a new general relativity," you have just defined intelligence in a way that excludes most of us.
>
> Which brings me to my final move on this section, and it is the move that is, I think, the right one. I would like you to stop asking whether the machine is really thinking, really understanding, really being creative. That question, as Turing saw in 1950, is a philosophical trap. It has no empirical answer. You cannot run an experiment that settles it. Instead, ask: what does the machine do. What outputs does it produce. What tasks does it perform. If the outputs are useful, if the tasks are done, if the drug it discovered works, if the proof it wrote holds, if the brief it drafted is sound, then the how does not matter. Only the result.
>
> This is the pragmatic turn. It is less satisfying philosophically. It is, I would argue, more honest. An engineer who built a Boeing 747 does not need to claim that the plane flies in the same way a bird flies. Planes and birds both fly; the mechanisms are different; so what. AI systems and human minds both solve problems; the mechanisms are different; so what. When the mechanism is different but the outcome is the same, the burden of proof on the one insisting that the mechanism matters is very heavy. And that burden is not being met.
>
> I want to close this section with one cautionary tale, because I do not want you to leave thinking that these systems are omnipotent. They are not. They hallucinate, which is the technical term for generating confident, fluent, wrong answers. The most famous cautionary case is *Mata v. Avianca*, a 2023 case in the Southern District of New York. A lawyer, Steven Schwartz, used ChatGPT to research a personal injury case against the airline Avianca.
>
> ChatGPT invented six legal precedents. Fake cases with fake names and fake citations. Schwartz filed the brief. The judge noticed. Schwartz was sanctioned 5,000 dollars and became a Wikipedia article. You can read the case at *en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.* The lesson is simple: these systems are powerful, and they are wrong often enough that you must verify.
>
> Trust but verify. Always check the citation. Always run the code. Always cross-reference the claim. If you do not, you become Mr. Schwartz.
>
> This is not a knock on the systems. It is a knock on how you use them. A saw is a powerful tool. If you use it with your thumb in the wrong place, the saw is not at fault. The AI tools available to you in 2026 are powerful, and a fraction of their output is wrong. The job of an educated person is to know the difference. That is, incidentally, one thing Sciences Po still teaches you very well, and it is one thing I want you to carry out of this course.
>
> Let me spend one more minute on benchmark saturation, because the visual of it is the kind of thing you have to see to really feel. Imagine a graph. On the x-axis, time, from 2019 to today. On the y-axis, the score of the best available model on a benchmark. For MMLU, the curve starts in 2020 at 44 percent. 2021, 60 percent.
>
> 2022, 70 percent. 2023, 86 percent. 2024, 95. 2025, basically 98, which is the ceiling imposed by ambiguous or broken questions in the dataset itself. The curve looks like a smooth, aggressive S. It rises for about four years.
>
> Then it hits the ceiling. Then the field declares the benchmark saturated and designs a harder one. For GPQA, the same S-curve unfolds, but compressed into about two years instead of four. For ARC-AGI-1, it took five years, but when it broke, it broke hard. The pattern is universal. The compression is real. Whatever benchmarks we design, the models catch up faster than the designers expected. If you want a single chart that summarizes the field, it is this one: a stack of saturation curves, each rising faster than the last, each topping out closer to human performance, each obsolete within three years.
>
> And what that means, practically, is that we are running out of ways to say "the machine is not as good as us." The remaining tests, Humanity's Last Exam being the current example, are at the very edge of human expertise, and they are saturating too. In a couple of years, barring a wall we have not seen yet, there will be no well-defined cognitive task on which the average PhD reliably beats the best model. This does not mean the model is "smarter" than the PhD in every way, and it certainly does not mean the model should replace the PhD in every context, but it does mean that the standard defensive move, "well, the machine is impressive but it cannot do X," is running out of X's to point at.
>
> One more caveat before we move on, because I promised to be honest about uncertainty where it exists. I do not know exactly when these curves will hit the ceiling of human-level general intelligence across the board. Nobody does. The forecasts from serious researchers range from "already basically there, in five years we will be past it" to "a real wall exists that we have not yet met, and it may take decades." The centrist position at frontier labs, as of early 2026, is somewhere around 2028 to 2030 for systems that match the median human professional on most knowledge work.
>
> That is not a marketing line. That is the midpoint of the internal forecasting at Anthropic, at OpenAI, at DeepMind, at Meta. You can read detailed arguments for it, with graphs, in Aschenbrenner's essay. You can read detailed arguments against it in the writings of Gary Marcus or of Yann LeCun himself, who now thinks current LLM architectures have fundamental limits that will not be overcome by scaling alone, and that a different architecture will be needed.
>
> Serious researchers disagree about the date, but nobody credible thinks this is nothing, a fad, or that it stops reshaping the economy. That is the baseline. Start there.

---

#

# 5. Pulling the thread: how we got here, and what is coming (about 12 min)

**Key points:**

- Recap the arc: Turing, Good, Royaumont, LeCun, ImageNet, OpenAI 2015. Emergence from simple mechanisms at scale.
- The rocket metaphor: we have looked at the components. Next sessions will look at trajectory and fuel.
- Tease Session 2.
- Length-check line.

> Let us pull the thread. We started in 1940, in a hut at Bletchley Park, with a stuttering British mathematician trying to break a cipher using specialized electronic circuits. Those circuits were the first computers. Turing, at the end of his life, wrote the paper that reframed the entire question of machine thought from "do they really think" to "can you tell them apart from us," and that move is still the sharpest philosophical move in the field.
>
> Then Jack Good, in 1965, sitting somewhere, writes one paragraph that defines ultra-intelligence and the intelligence explosion in a way so precise that no frontier researcher in 2026 has had to add a word to it. That paragraph is the north star of this course and of the whole field. The first ultra-intelligent machine is the last invention man need ever make, provided that it is docile enough to tell us how to keep it under control. Every unsolved problem in AI alignment lives in those final 15 words.
>
> Then, in 1975, two intellectual giants, Chomsky and Piaget, debate at Royaumont, and a young French student named Yann LeCun, reading the transcript, sees that they are both wrong, that both of them assumed without arguing that intelligence cannot emerge from simple processes, and he stakes his career on the opposite bet. It takes him 37 years to be vindicated, at ImageNet 2012, when Alex Krizhevsky's neural network halves the error rate on the hardest image benchmark of the time, and every lab in the world has to admit, publicly, that the connectionists were right. Richard Sutton calls it the bitter lesson: simple, general, scaled methods beat elaborate human-designed ones, every time, whenever data and compute catch up.
>
> Then, in 2015, a tiny new lab called OpenAI, training a network to predict the next letter of Amazon reviews, discovers that sentiment analysis, and eventually language understanding in general, emerges for free inside the model, as a byproduct of prediction. That discovery is, in my view, the intellectual birth of the modern AI era. Everything since, GPT-2, GPT-3, GPT-4, Claude, Gemini, Llama, Mistral, Qwen, DeepSeek, is the same recipe: bigger model, more text, more compute, next-token prediction, and the capabilities compound.
>
> *[Show on screen — Figure 14 (Ultra-Intelligence, p. 56): the three-dimensional polyvalence surface. One axis is the breadth of tasks a model can perform; a second is the depth of performance on each task; the third is time. The surface rises and widens together, showing that as AI models improve, they both get better at individual tasks and can do more kinds of tasks at once. Polyvalence is the word for that combined growth.]*
>
> Look at that figure for a second. Before 2017, AI models were narrow. One model for speech, one for vision, one for translation. Each trained on a specific dataset.
>
> Each useful in a specific context. After 2017, models started becoming polyvalent: a single model that can do all of the above, plus write code, plus do math, plus argue a legal point, plus translate into a language it barely saw at training time. Polyvalence is the single property that distinguishes modern AI from all previous AI. It is also the property that makes AI economically transformative.
>
> A narrow tool requires a specialist to wield it. A polyvalent tool can be dropped into any office and start producing value within hours. That is why the capital flooding into AI labs right now is the largest private-sector investment wave in history, outpacing even the late-1990s internet bubble in raw dollars. The market is pricing in polyvalence. The market is, in this case, essentially right.
>
> And along the way, every attempt to say "yes, but these systems are not really intelligent" has had to retreat. They do not understand? Prove it behaviorally. They cannot be creative? They write better poems than the canonical poets. They have no common sense? Yann LeCun personally, in 2023, wrote a blog post listing physics puzzles that LLMs could not solve; in 2025, the best LLMs solve all of them. The goalposts have moved, over and over, and each time the systems have caught up.
>
> So where does this leave us. It leaves us at the opening of a rocket journey, and this course is going to follow that metaphor from start to finish. Today, Session 1, we looked at the components of the rocket: what a computer is, what a neural network is, how we got here. Sessions 2 and 3 will look more carefully at what is inside the engine.
>
> In Session 2, we open the machine and build a small one ourselves, from scratch, in Python. Yes, you will write a neural network. Do not be scared. It is about 50 lines of code.
>
> You will see how a weighted sum, plus a ReLU, plus backpropagation, plus a training loop, actually produces a system that can recognize handwritten digits. Session 3 takes us from digits to language: vectors, attention layers, Transformers, the architecture that Google published in 2017 and that every frontier lab builds on. Session 4 will look at scaling laws, the quantitative curve discovered by OpenAI in 2020, the single most important empirical result in modern AI. Sessions 5 and 6 will take us from the technical to the civilizational: what happens to the labor market, to political power, to what it means to be human, as these systems continue to scale. I will not tell you what to think. I will tell you what the evidence points to, and you will do the hard work of thinking.
>
> One practical thing before we wrap. If you want to go deeper on the scaling story between today and the next session, read Leopold Aschenbrenner's *Situational Awareness*, published in June 2024, available free at *situational-awareness.ai*. Aschenbrenner was on the OpenAI superalignment team until he was fired for writing a memo that was too candid.
>
> The essay is 165 pages, it is written with conviction, it lays out the quantitative case for why he, personally, expects AGI by 2027 and superintelligence shortly after. I do not agree with every line, but the data he marshals, the scaling curves he plots, the compute-to-capability extrapolations, are exactly the thing you should be able to read and evaluate after 6 sessions of this course. Start early.
>
> If I have delivered this session at the right pace, we are now at about one hour 55 minutes. The length check is simple: run the `timer.py` script in the course folder on this file, and it will tell you the word count and the predicted duration at 140 words per minute. If I have written too much, I will cut. If I have written too little, I will add. Either way, next session we build a neural network. Bring a laptop. Bring coffee. And read Good's paragraph tonight, slowly, twice.
>
> Before I let you go, one more thought, because I think it matters. What I have tried to show you today is a pattern. The pattern is that over and over, the consensus view about what machines cannot do has been wrong. In 1950, nobody thought a machine could hold a conversation. Machines now hold conversations.
>
> In 1965, Jack Good was considered a fringe voice for suggesting ultra-intelligence was possible. Nobody in a serious AI lab now thinks it is impossible; they disagree about timing. In 1975, intelligent behavior was thought to require either innate structure or careful construction. Intelligent behavior has emerged from simple mechanisms at scale. In 1985, neural networks were a failed research program.
>
> Neural networks now drive a trillion-dollar industry. In 2005, AI was in a long winter. AI is now in a long, hot summer with no clear end. In 2015, the idea that a model trained on next-word prediction would turn out to be a general-purpose reasoning engine sounded absurd. It is now the central technical assumption of the field.
>
> Over and over, the intelligent, serious, highbrow consensus has been wrong about what is possible, and the correct answer has been "yes, and sooner than you think." I cannot prove, today, that this pattern will continue. But I am going to bet, through the rest of this course, that it will. If I am wrong, you will get to say so, in a few years, and I will buy you a drink.
>
> If I am right, which I believe I am, then the education you receive in the next several years is the most consequential education any generation has ever received, because you will be the first humans to enter adult life in a world where the cognitive labor supply is no longer fundamentally scarce. Work, politics, art, power, every institution we have inherited, is built on the assumption that cognition is scarce and expensive. That assumption is cracking right now, in real time, in front of you.
>
> Sessions 5 and 6 will look at what follows. Today, I have given you the prehistory. Next session, we open the engine.
>
> One last check on what we covered, so you can hold it in your head as you leave. Turing, 1950, imitation game, burden-of-proof shifted. Good, 1965, ultra-intelligence, intelligence explosion, alignment problem in 14 words. Chomsky versus Piaget, 1975, both wrong about simple mechanisms.
>
> LeCun, Hinton, Bengio, 1980s through 2000s, backpropagation and the conspiracy of deep learning. Krizhevsky, Fei-Fei Li, Hinton, 2012, ImageNet, the bitter lesson. OpenAI, 2015 to 2017, next-token prediction, scaling. Benchmarks, MMLU, GPQA, ARC-AGI, Humanity's Last Exam, all saturating.
>
> The stochastic parrot critique, serious, not decisive. The creativity objection, empirically weakening. Turing's pragmatic move: ask what the machine does, not what it is. And the chessboard fable: exponentials are deceptive early and ruinous late, and we are not early anymore.
>
> If you remember nothing else from today, remember one sentence. The machine at the end of this course is smarter, on most measurable cognitive tasks, than the machine that started cracking Enigma in 1940. By a factor of about 10^15 in raw compute. By a factor of about 10^9 in measurable capability.
>
> And the curve has not stopped. It is accelerating. That is the situation. That is what we are living through.
>
> Next session, we build a neural network, and you will see, with your own hands, that the engine of this revolution is, in the end, astonishingly simple arithmetic done very, very fast. Read Good tonight. Watch a Game of Life demo. Come back ready to code.

---

#

# Sources

- Alan Turing, *Computing Machinery and Intelligence*, Mind, 1950: *academic.oup.com/mind/article/LIX/236/433/986238*
- Irving John Good, *Speculations Concerning the First Ultraintelligent Machine*, Advances in Computers, 1965: full text archived at *vetta.org/documents/Intelligence_Explosion.pdf*
- Piaget and Chomsky, *Language and Learning: The Debate Between Jean Piaget and Noam Chomsky*, edited by Massimo Piattelli-Palmarini, Harvard University Press, 1980.
- Yann LeCun, *Quand la Machine Apprend*, Odile Jacob, 2019.
- Alec Radford et al., *Learning to Generate Reviews and Discovering Sentiment*, OpenAI, 2017: *arxiv.org/abs/1704.01444*
- Richard Sutton, *The Bitter Lesson*, 2019: *incompleteideas.net/IncIdeas/BitterLesson.html*
- Emily Bender, Timnit Gebru et al., *On the Dangers of Stochastic Parrots*, FAccT 2021: *dl.acm.org/doi/10.1145/3442188.3445922*
- MMLU leaderboard: *paperswithcode.com/sota/multi-task-language-understanding-on-mmlu*
- Hugging Face Open LLM Leaderboard: *huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard*
- ARC-AGI leaderboard, François Chollet: *arcprize.org*
- Humanity's Last Exam leaderboard, Center for AI Safety and Scale AI: *agi.safe.ai*
- Conway's Game of Life interactive demo: *playgameoflife.com*
- Mata v. Avianca, Inc., 2023, Wikipedia: *en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.*
- Leopold Aschenbrenner, *Situational Awareness: The Decade Ahead*, June 2024: *situational-awareness.ai*
- B. Porter and E. Machery, "AI-generated poetry is indistinguishable from human-written poetry and is rated more favorably," *Scientific Reports*, November 2024.
- C. Si et al., *Can LLMs Generate Novel Research Ideas*, Stanford, 2024: *arxiv.org/abs/2409.04109*

---

#

# Frequently asked questions (scripted answers)

**Q: Is predicting the next token really "understanding"? Isn't it just pattern matching?**
> It is pattern matching, and the pattern being matched is the structure of the world as recorded in text. To predict, better than chance, what word comes after "the real murderer is," in the last page of a novel, you must have internally reconstructed who did what, to whom, and why. The model's weights encode, in compressed form, the causal and social regularities of the texts it trained on. Call that "understanding," or do not; if you do not, please supply a behavioral test that distinguishes "real understanding" from what GPT-5.5 does on an unseen puzzle. Nobody has been able to.

**Q: What about consciousness? Do these machines feel anything?**
> Honest answer: we do not know, and we may never know, because consciousness is not observable from outside. I operate on two principles. First, Turing's principle: behavior is what we can test, so stake claims on behavior. Second, caution: if we start building systems whose behavior is indistinguishable from a being that suffers, we should treat the possibility of moral patient-hood seriously. Not because we have proof, but because the cost of being wrong in the other direction is high. This is Session 6 territory. For today, consciousness is a separate question from intelligence. A system can be extremely capable without being conscious, and possibly vice versa.

**Q: Can AI be creative? Will it ever paint a Picasso or compose a Beethoven?**
> Small creative side-steps, it already does better than average humans. Blind studies show AI-generated poems are rated more human than canonical human poems. AI-generated images have won art competitions. AI-generated research ideas are rated more novel than those of human researchers. Very large creative leaps, the kind that produce a new general relativity, may still be beyond current systems. But they are beyond most humans too. The bar "only counts if it is Einstein-level" is a goalpost, not a definition.

**Q: How do we actually measure machine intelligence? What is a benchmark?**
> A benchmark is a standardized set of tasks, each with a known correct answer, and a model's score is the fraction it gets right. The major ones you should know: MMLU for general knowledge, GPQA for graduate-level science, ARC-AGI for abstract reasoning, Humanity's Last Exam for the absolute frontier. Every benchmark is saturating faster than its designers expected. The ceiling of what we can measure from above is running out.

**Q: Did OpenAI really invent the idea that scale and next-token prediction work better than specialized training?**
> They were the first to articulate it clearly and to scale it aggressively. The technical primitives, the neural network, the Transformer architecture, self-supervised learning, were all in the academic literature before OpenAI. The insight that a single generative model trained on next-token prediction would generalize better than a zoo of specialized models was crystallized at OpenAI around 2015 to 2017, and the sentiment-neuron paper of 2017 is the earliest compact demonstration. Google, DeepMind, Anthropic, and others built on this, and the picture is more collaborative than a single-lab narrative suggests, but OpenAI deserves credit for betting big on the scaling hypothesis when the rest of the field did not.

**Q: What is an "emergent capability" in a language model?**
> It is a capability that the model was not explicitly trained for but that appears, often abruptly, as model size increases. Sentiment tracking, arithmetic, code generation, multi-step reasoning, translation between rare language pairs, all emerged without being trained for. The scaling hypothesis is essentially the claim that many more such capabilities will emerge as we keep scaling. There is active research debate about how "abrupt" emergence really is, some of it may be an artifact of how we measure performance, but the empirical pattern is robust: bigger models can do things smaller ones cannot, and the new capabilities are not planned.

**Q: How do I stop an LLM from hallucinating?**
> You cannot, fully, not with current technology. You can reduce it, substantially. Use retrieval augmentation so the model cites real documents. Ask for sources and check them. Use models that are better calibrated, meaning their expressed confidence correlates with actual accuracy. Use agentic systems that verify their own work by running code or queries. And most importantly, for any high-stakes output, you verify manually. The *Mata v. Avianca* sanction is the cautionary tale, memorize it.

**Q: If these systems are already this good, what is the point of a Sciences Po education?**
> Honest answer: the point has changed. The skill of producing competent first drafts of briefs, memos, summaries, analyses, is being commoditized, fast. What remains premium is judgment, the ability to know which question is the right question, to catch the machine when it is wrong, to structure institutions around the new capabilities. A Sciences Po education that leans into that, into judgment and verification and institutional design, is more valuable than ever. One that simply trains you to produce the kind of prose a model now produces in seconds is in trouble. You are in the former category if you want to be, and this course is part of getting there.

**Q: What about the energy cost? Are we not burning the planet to train these things?**
> Energy is a real constraint and we will spend proper time on it in Session 4. Short version: training a frontier model in 2026 consumes roughly the output of a small nuclear reactor for a few months. Inference, at deployment scale across hundreds of millions of users, is the bigger sustained draw. The industry is investing heavily in dedicated power, including nuclear. It is not a cost-free revolution. Whether the energy cost is justified depends on what you think the models deliver. If they accelerate drug discovery, climate-model resolution, and decarbonization research, the calculation looks different than if they are mostly used to generate marketing copy. Both are happening. Session 4 will give you the numbers.

**Q: Is there a risk of an "intelligence explosion" in Jack Good's sense within my lifetime?**
> Yes, and the credible window is the next 2 to 5 years, not 15. Some researchers disagree because they doubt current architectures can close the recursive self-improvement loop. The empirical trajectory does not support that doubt. Either way, the probability is high enough that you prepare for it, which is what the alignment field is doing.

**Q: Why did Yann LeCun stick with neural networks when everyone else had moved on?**
> Because he had, at 20 years old, the intuition that Chomsky and Piaget had both missed the same thing, and he spent his life testing that intuition. LeCun has described this period, the 1990s and early 2000s, as the hardest of his career. Grants were refused.
>
> Papers were rejected. Colleagues would tell him politely, and sometimes less politely, that neural networks were a dead end. He persisted because the mathematics convinced him, because the few results he could get convinced him, and because, frankly, he is stubborn in a useful way.
>
> 25 years later he won the Turing Award for it. The lesson is not "always bet against consensus." The lesson is "when you have specific, load-bearing reasons to believe the consensus is wrong, be willing to spend a decade in the cold to test them." Most people are not willing. LeCun was. It paid.

**Q: Is it safe to use AI for my essays and exams?**
> That is partly a question for your professors and partly a question for you. What I will say is that the skill of outsourcing the wrong parts of a task to a machine is one of the key skills of the next 20 years. Outsourcing the formatting, fine.
>
> Outsourcing the thinking, catastrophic, because you do not learn to think, and the machine is wrong often enough that you will be embarrassed in a room where the stakes are real. Use the tool to accelerate the parts that do not build your brain. Do the parts that do build your brain with your own hands. That is not a rule anyone can enforce. It is a rule you will have to enforce on yourself for the rest of your adult life.
