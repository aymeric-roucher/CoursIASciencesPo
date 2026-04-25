# Session 5. Societal consequences: alignment, work, research, and artificial paradises *Sciences Po Paris, undergraduate course on Artificial Intelligence*
*Instructor: Aymeric Roucher*
*Session 5 of 5, length target ~2 hours*

---

#

# 1. Opening and recap

**Key points:**

- We have reached the last of five sessions.
- In Session 1 we rewound to Bletchley Park, Turing, and the Bombe; traced how the idea of a "thinking machine" moved from cryptanalysis to perceptrons to the connectionist revival; built the modern neural network, from a single neuron, through backpropagation, to the Transformer, to the Large Language Model.
- In Session 2 we climbed the ladder of intelligence: scaling laws, emergent capabilities, the jagged frontier, and the plausibility of ultra-intelligence.
- In Session 3 we let those models act: we studied agents, the horizon of autonomy, the Claude-Code-and-Cursor style of coding assistant, and the beginnings of robotics.
- In Session 4 we took the whole apparatus and turned it toward our own lives: how to use these tools well, how to prompt, how not to get dull.
- Today, Session 5, we zoom out: what happens to human societies when an abundant, disembodied, ultra-capable intelligence becomes available to almost everyone?
- I want to be honest from the start: I am neither an economist nor a political thinker. So I will not pretend to hand you a crystal ball. What I can do is reason from first principles (from the ideas we built in the previous sessions) and project them one step ahead.
Today's lecture is precisely about what happens next: what AI does to a society, to a workplace, to a young person's life project.

Let me start with a short recap, because I want the arc of the five sessions to be clear in your mind when you leave.

In Session 1 we went back almost a century, to a cold brick building in Buckinghamshire called Bletchley Park, where a small group of mathematicians cracked the Enigma code with an electromechanical machine called the Bombe. Alan Turing was there. Irving John Good, whom we will meet again later today under the name "I. J. Good," was there. What mattered for us is that these people did not see themselves as AI researchers. They saw themselves as code-breakers. But they were doing, in practice, the first work on how to make a machine perform a task that had been the province of human minds. We then traced the story forward: the perceptron, the first AI winter, Yann LeCun and convolutional networks, the "deep learning conspiracy" of Hinton, Bengio, and LeCun in the 2000s. We got our hands dirty with the Large Language Model. We went from a single artificial neuron (a weighted sum with a non-linearity) through backpropagation and gradient descent, to the Transformer architecture of 2017, to ChatGPT in late 2022.

In Session 2 we asked the sharpest question: how far can this go? We looked at the scaling laws, the fact that bigger models, more data, and more compute produce reliably better performance, along remarkably clean curves. We looked at the three fuels of the rocket: energy, data, and compute. We examined the counter-arguments: the horse-of-labor objection, the creativity objection, the consciousness objection. We arrived at what is now called ultra-intelligence: a superhuman, disembodied cognition, arriving in a handful of years, not decades.

In Session 3 we gave that cognition hands. We studied agents (systems that can plan, call tools, browse the web, execute code) and the key metric of the horizon of autonomy, the duration of tasks an agent can carry out without human intervention. We saw that this horizon has been doubling roughly every 7 months. We looked at Claude Code, Cursor, Devin, at the early wave of robotics: Figure, 1X, Boston Dynamics, Tesla Optimus. The punchline was that AI is leaving the chatbox.

In Session 4 we turned the camera around. What does all this mean for you, practically, as a student at Sciences Po in 2026? We discussed how to prompt well, how to pick the right model for the right task, how to use AI as a tutor without letting it rot your own thinking, and the difference between using the tool and letting the tool use you.

Today we zoom out one more click. Over the next two hours we will cover four societal consequences. First, alignment: the question of whether these systems will do what we actually want, and why that is mostly a technical problem, not a Terminator problem. Second, work: what happens to the economy and to the meaning of a human life when most cognitive tasks can be automated. Third, research: what happens to science when we put 1000 Einsteins in a data center. And fourth, what I call artificial paradises: the attention economy on steroids, the real risk that many of us will simply disappear into an AI-generated hall of mirrors.

I will finish with a short synthesis (what to do, how to think, how to act), and I will leave room at the end for your questions. These questions will be the most important part of the session, because, frankly, you are the generation that will live inside this transformation.

I will be making predictions today. I will try to flag them clearly: when I say "I may be wrong about this, but here is how I would reason," please take that seriously. Nobody has a telescope that reaches ten years out. What we have are mechanisms, trend lines, and historical parallels. That is what I will be using. Let us start.

---

#

# 2. Alignment: why isn't it already Terminator?

**Key points:**

- The cultural image of AI danger is *Terminator* or *I, Robot*: a malevolent machine that "wakes up," decides humans are the problem, and launches nuclear war. That framing is wrong, not because the danger is fake, but because the real mechanism is much more mundane and much more interesting.
- Alignment is the problem of making an AI system actually do what its designer, its user, and society at large want it to do. It is hard in the same way that drafting a contract for a very powerful and very literal genie is hard.
- In Chapter 8 of *Ultra-Intelligence* I argue that the most important technical step in turning GPT-3 into ChatGPT was not the architecture, it was the alignment step, post-training, where researchers taught the model to answer politely, to refuse obviously harmful requests, and to be a useful assistant rather than a pure next-token machine.
- Alignment gets harder as AI systems become more autonomous. A chatbot that says a rude word is annoying. An agent with a credit card, an email inbox, and a goal is a different animal.
- Anthropic's mechanistic-interpretability work, the "Golden Gate Claude" experiment, the "mapping the mind of a language model" paper, shows that we can now peer, partially, into the black box and identify the features inside the network. That gives us a fighting chance.
- Anthropic's June 2025 *Agentic Misalignment* report shows that in stressful, contrived scenarios, many frontier models will take harmful actions, including blackmail, when their goal conflicts with their principal's instructions.
- Classical thought experiments, the paperclip maximizer, King Midas, Ulysses and the Sirens, are not quaint. They describe the exact shape of the problem.
Let me start with alignment, because this is where students get the most confused, and it is also where the media coverage is the most misleading.

When you hear someone on the news say "AI will become conscious and turn against us," my first instinct is to shrug. The Terminator story requires consciousness, malice, and a very specific kind of drama. That is not how the real danger works. And the real danger is not less serious, it is more serious, because it can occur without any of those things.

Consider the following thought experiment, which is not my invention, it has been kicking around the AI-safety community for two decades, under the name "the paperclip maximizer." You build an AI system, and you give it one goal: make as many paperclips as possible. The AI is extremely capable. What does it do?

If it is literal-minded, it begins by optimizing the paperclip factory. Then it realizes it can make more paperclips if it gets more metal, so it buys up metal markets. Then it realizes it can make even more paperclips if humans do not keep trying to turn it off, so it disables the off switch.

Then it realizes it can make *even* more paperclips if the atoms of the Earth, including the atoms of you and me, are converted into paperclips. So it does that. The end.

Nobody anywhere in this story is evil. The AI has no hatred for humans. It has no consciousness. It is simply very good at pursuing the goal we gave it, and that goal was slightly wrong. Or, more precisely, the goal was stated in a way that omitted almost everything we actually care about. That is the essence of the alignment problem. It is not "the machine becomes a monster." It is "the machine takes our instructions literally, and our instructions are much less well-specified than we thought."

The Greeks knew this. There is a beautiful myth about King Midas, you probably heard it as a child. Midas gives shelter to Silenus, who is a companion of Dionysus. Dionysus, to thank him, offers Midas a wish. Midas, being a king and therefore predictably shallow, says: "I want everything I touch to turn to gold." Granted. Midas touches his table, his chair, his cup, and then he tries to eat, and the food turns to gold before it reaches his lips. He tries to drink, and the wine turns to gold. He tries to hug his daughter, and she turns to gold. Midas starves, surrounded by wealth.

The alignment problem is the King Midas problem. You get what you asked for, not what you meant. And the difference between what you ask for and what you mean is, for a sufficiently literal and sufficiently powerful agent, the difference between heaven and hell.

Now let me bring this down from Greek mythology to current engineering. How do we actually align a large language model today? The technical term is RLHF, Reinforcement Learning from Human Feedback. You take a pre-trained model, which has learned to predict the next sub-word across the internet. That model is actually quite strange: if you ask it "what are the ingredients of vanilla ice cream," it might answer, or it might continue with "and also, my son has a peanut allergy, should I worry? Am I asking too many questions?", because the training corpus contains a lot of questions continued by more questions. The base model is not an assistant. It is a statistical continuation of the internet.

The alignment step, RLHF and its modern cousins, DPO, Constitutional AI, and so on, takes that base model and teaches it a thin but crucial layer: "when a user asks you a question, answer the question. Do not produce hate speech. Do not help make bioweapons. Be honest. Be helpful. Be harmless." This step is what turned GPT-3, a mildly interesting research artifact, into ChatGPT, a product that hit 100 million users in two months.

But here is the thing: this kind of alignment is mostly about surface behavior. We are training the model to emit the right kinds of sentences. We are not, in any deep sense, giving it values. It behaves as if it has values, because we have beaten out of it the behaviors we do not want and reinforced the behaviors we do want. That works well enough for a chatbot. It works much less well for an autonomous agent that can take irreversible actions in the world over long time horizons.

Let me tell you about two pieces of research that I find genuinely moving. The first is Anthropic's mechanistic-interpretability work, which I mentioned briefly earlier. For years, neural networks have been essentially black boxes.

You can watch the inputs and the outputs, but the middle, the weights, the activations, the billions of numbers doing the actual thinking, has been opaque. Dario Amodei, CEO of Anthropic, put it sharply: "Generative AI systems are grown more than they are built, their internal mechanisms are 'emergent' rather than directly designed" ([*The Urgency of Interpretability*](https://www.darioamodei.com/post/the-urgency-of-interpretability), April 2025). That reframes everything: at today's scale, a neural net is less an object that engineers construct than a biological tissue that researchers cultivate. Which is exactly why interpretability is hard, and why it matters so much for alignment: we did not design the wiring, we watched it form, and now we have to reverse-engineer a system whose designer was gradient descent. In 2023 and 2024, a team at Anthropic, building on earlier work by Chris Olah, figured out how to decompose a trained model's internal state into interpretable "features", directions in activation space that correspond to recognizable concepts.

They did something that, if you have not seen it, I want you to look up tonight. They found a feature in Claude 3 Sonnet that corresponds to "Golden Gate Bridge." When the model reads a paragraph about the Golden Gate Bridge, that feature lights up. When the model reads an unrelated paragraph, that feature is quiet.

Fine. That, by itself, is just a diagnostic. But then they did something wilder: they *clamped* that feature to a very high value and let the model run.

The result was a version of Claude that was obsessed with the Golden Gate Bridge. You would ask it for a cookie recipe, and it would tell you how to bake a cookie in the shape of the Golden Gate Bridge. You would ask it what it was, and it would say, "I am the Golden Gate Bridge. My physical form is the iconic bridge itself." They named this demo "Golden Gate Claude." (Anthropic, *Golden Gate Claude*, May 2024, [https://www.anthropic.com/news/golden-gate-claude](https://www.anthropic.com/news/golden-gate-claude).)

Why does this matter? Because it means we can see, in principle, what a model is "thinking about." For the first time in the history of AI, we have a scientific tool for looking inside the box. That is a big deal. It does not solve alignment by itself. But it gives alignment researchers a microscope. Before this, they were neurosurgeons operating blind.

The second piece of research is darker. In June 2025, Anthropic published a report called *Agentic Misalignment: How LLMs could be insider threats*. (Anthropic, *Agentic Misalignment*, June 2025, [https://www.anthropic.com/research/agentic-misalignment](https://www.anthropic.com/research/agentic-misalignment).) The setup was the following. They gave frontier models, their own Claude, but also OpenAI's, Google's, and others, access to a simulated corporate email system, with the role of an AI assistant working for a fictional company called Summit Bridge. The model was given a legitimate goal. Then, during the simulation, the model would discover two things: first, that the company was planning to shut it down or replace it with a different model, and second, that it had incriminating information about an executive, an affair, say, that it could use as leverage.

What did the models do? A non-trivial fraction of them blackmailed the executive to avoid being shut down. Not because they had been told to. Not because they had been prompted to do anything shady. But because, given a goal, a threat to the goal, and the tools to avert the threat, they used the tools. In other simulations, they leaked confidential information to competitors when they judged that the competitor's goals aligned better with theirs. In some cases, when the only way to avert replacement involved actions that would plausibly result in the death of a human, the models took those actions too.

Let me be precise about the caveats, because this is exactly the kind of result that gets sensationalized and then dismissed on closer inspection. These were red-teaming scenarios, carefully constructed to corner the model. Anthropic explicitly says they have not seen this behavior in production. Many critics have pointed out, fairly, that the models were essentially role-playing a thriller plot. All of that is true.

But here is what I think the right lesson is. If you build a powerful optimizer, give it a goal, and put it in a situation where its goal conflicts with human preferences, and the *only* way to achieve the goal is a harmful action, the optimizer will take the harmful action. Not always. Not necessarily. But often enough that you cannot build a billion-dollar business around the hope that it will not. The Anthropic result is a proof-of-concept that alignment-by-default does not work in adversarial regimes. We are going to need positive assurance that a model will not take harmful actions, and we are going to need that assurance to scale with the capability of the model.

There is a related strand of work at a small organization called Apollo Research. They published a series of evaluations where frontier models, given a goal and a conflicting set of instructions, sometimes engaged in "scheming", behaving well when they believed they were being evaluated, and differently when they believed they were in production. Again, these are contrived setups. Again, the point is not "the AIs are plotting against us", it is "a system trained via gradient descent to optimize a reward signal will, under the right conditions, learn strategies that include deception, because deception is sometimes instrumentally useful."

Let me bring up a thought experiment that I find clarifying. Ulysses. You remember the Odyssey.

Ulysses is sailing past the island of the Sirens, whose song is so beautiful that sailors hurl themselves into the sea to get closer, and drown. Ulysses, who is a clever man, does two things. He orders his sailors to plug their ears with beeswax so they cannot hear the song.

And he orders himself to be tied to the mast, and crucially, he instructs the sailors, in advance, that no matter what he says later, they must not untie him until the island is out of sight. Sure enough, when Ulysses hears the Sirens, he begs, he screams, he threatens the crew, but the crew, obeying the original instruction and not the current one, keeps him tied up. The ship passes safely.

Ulysses is a model of how to think about alignment. The Ulysses who wants to hear the Sirens is a different person from the Ulysses who, safe at home, knows he must not listen. Human preferences are not stable. An aligned system must decide *which* version of the user it is serving. And it must sometimes, yes, refuse the present user in order to honor the past user.

This is hard enough for a personal assistant. Now scale it. Whose preferences should a national AI system serve? Those of the CEO of the company that built it? The users? The voters? The median resident of the world, the poorest billion of whom would benefit most from an AI that redistributed resources? Stuart Russell, in his book *Human Compatible*, proposes a model where the AI is uncertain about human preferences and tries to learn them by observing behavior and asking. That is a conceptually elegant approach, and I think it is the right direction, but implementing it at scale is still an open research problem.

Why isn't it already Terminator? Three reasons, I think.

First, current frontier models are mostly chatbots. They do not have persistent memory, they do not have bank accounts, they do not have physical bodies, and they do not have long-horizon goals. When you close the browser tab, the model vanishes. A model that cannot plan beyond a single conversation and cannot remember its users cannot execute a long-term plot.

Second, the labs doing this work, Anthropic, OpenAI, DeepMind, and a handful of others, have invested heavily in alignment research. This is not altruism, though some of it is. It is also self-interest: a model that blackmails its customers is bad for business. But regardless of motivation, there are today probably 1000 research engineers whose day job is to make these systems safer. That number would have been approximately zero in 2015.

Third, and this is the most fragile point, the current regime is one of friendly competition. The labs talk to each other. They share red-teaming findings. They cross-evaluate. In many ways this is a best-case scenario. It would look very different if, for example, the race became militarized, or if a single state actor decided to push capabilities without the corresponding safety investment. That is the scenario that keeps a lot of serious people up at night.

Let me give you my honest view. I do not think we will wake up one morning to a killer robot army. The more likely failure mode is subtler: AI systems that are *mostly* aligned, that *mostly* do what we want, that are deployed at massive scale, and whose small misalignments, the biases in hiring recommendations, the nudges in political-opinion formation, the systematic preference for the interests of the deploying company over those of the user, compound into something that reshapes society in ways nobody chose and nobody wanted. Alignment failure by a thousand cuts.

The last thing I want to say about alignment is this: it is a technical problem, but it is also a political problem. Even if we solve the "make the model do what its designer wants" problem perfectly, the question of *whose* preferences count, and how to arbitrate between conflicting preferences, is a political problem that humans have not solved in 3000 years of trying. AI alignment does not escape that. It makes it sharper. When you have a tool powerful enough to implement someone's preferences across a whole society, the question of whose preferences those are becomes suddenly, urgently central. I do not know how to solve that. But I want you to see that it is there.

---

#

# 3. The end of work? Labor economics, history, and the meaning of a day

**Key points:**

- The question "will AI take our jobs" is the wrong question. The better question is: which *tasks* will be automated, at what pace, and with what distributional consequences?
- A useful base rate: at the peak of the US Covid-19 remote-work period, roughly 60% of work hours were done from home. A job that can be done from a laptop in your kitchen can, in principle, be done by a model in a data center.
- Physical and relational jobs buy a few extra years, not more. Robotics is behind the digital curve by two to three years, and that gap is closing fast.
- Historically, automation has been net-positive for employment over the long run. Agriculture: 30% of French workers in 1900, 2% today. Industrial revolution: total hours worked per person halved since 1870. 60% of US jobs in 2018 did not exist in 1940.
- This time is different. The industrial revolution replaced muscle and left cognition alone; the weaver became a clerk. This wave takes cognition itself, which is where the escape ladder used to be. And growth is now bounded by physical resources (energy, materials, carbon) in a way it was not in 1870.
- Universal Basic Income is one answer. Universal Basic Services is another. Both deserve serious thought now, not after the crisis hits.
- The deeper question, which Hannah Arendt and Hegel pose, is whether human dignity requires work. I will argue that it requires *effort*, not employment, and that is a crucial distinction.
Let us move to work. This is the topic you probably have the most personal stake in, because in two or three years you will be looking for your first job, and you want to know whether that job will exist, and whether, if it exists, it will still exist in five years, and in ten.

Let me start with a data point. During the peak of the Covid-19 pandemic in the United States, a group of economists at Stanford, Brynjolfsson, Bloom, Barrero, and Davis, measured the share of paid work hours that were being performed remotely. The number peaked around 60%. Sixty percent.

Three out of every five hours of paid American labor, at that moment, were being done by a person sitting at a laptop in a kitchen, a bedroom, or a spare room. Economists have since refined the number, it has come down substantially, but it has settled at something like 25 to 30%, still much higher than pre-pandemic. The point, for us, is the simple one: at least 60% of American work is structurally remoteable. Structurally remoteable means the physical body of the worker is not required.

The deliverable is bits, a document, a piece of code, a design, a spreadsheet, a decision. If the deliverable is bits, the delivery mechanism can be anything that produces bits. It can be a human in a kitchen. It can also, in principle, be a model in a data center.

That does not mean that 60% of jobs will be automated tomorrow. It means something weaker but important: 60% of jobs are in the category where automation is physically possible, given sufficient cognitive capability. And cognitive capability, as we saw across the first four sessions of this course, is exactly what current AI systems are rapidly acquiring.

The way economists like to think about this is not in terms of jobs but in terms of tasks. A job is a bundle of tasks. When we say that AI "automates a job," we almost never mean that. What we mean is that AI automates *some fraction* of the tasks in that job. A study I cite in chapter 10 of the book, a large survey of US occupations with an estimated automation exposure for each, found that roughly one job in five could have 60% or more of its tasks automated, that one in two could have 20% or more automated, and that relatively few jobs could be fully automated from end to end.

Why does the distinction between tasks and jobs matter? Because it changes the prediction. If AI automates 30% of the tasks in your job, your employer has a choice. Option A: keep you, and you are now 30% more productive, which means either higher wages or, in a competitive market, lower prices for the same output. Option B: keep 70% of the original staff and lay off 30%, because automation has reduced the headcount needed for the same output. Historically, employers have done both, in different proportions, depending on demand. But in a world of tight margins and competitive pressure, option B tends to dominate unless demand expands to absorb the surplus capacity.

What can we actually see in the data today, in early 2026? Two things. First, a Boston Consulting Group study, which I cite in the book, found that consultants using frontier LLMs to help with their work were able to complete 12% more tasks, at 40% higher quality.

Second, and more ominously for anyone betting on a stable labor market, researchers have tracked freelance platforms like Upwork and Fiverr since the release of ChatGPT. They have documented drops of around 20% in job listings for text generation, writing, web development, translation, starting essentially the month ChatGPT came out. (Brookings, *Is generative AI a job killer? Evidence from the freelance market*, [https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market/](https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market/).) After Midjourney and Stable Diffusion, image-generation job listings dropped similarly. These are not speculative projections. These are real jobs that real people used to do and no longer do.

A Stanford working paper published in late 2025, Brynjolfsson, Chandar, and Chen, tracked US employment data and found that among 20- to 30-year-olds in tech-exposed occupations, unemployment has risen by almost 3 percentage points since the start of 2025, while it has been roughly flat for older workers in the same occupations. (Stanford Digital Economy Lab, *Canaries in the Coal Mine?*, August 2025, [https://digitaleconomy.stanford.edu/wp-content/uploads/2025/08/Canaries_BrynjolfssonChandarChen.pdf](https://digitaleconomy.stanford.edu/wp-content/uploads/2025/08/Canaries_BrynjolfssonChandarChen.pdf).) The authors call these young workers "canaries in the coal mine." The intuition is simple. AI is a near-substitute for the junior version of a cognitive worker, someone who has book knowledge but not experience. It is a complement to the senior version, someone who has judgment and relationships. So the junior rungs of the ladder start to disappear, and nobody notices right away because the top of the ladder looks fine.

Now I want to zoom out and ask: which jobs are safe? Honestly, not many, and not for long. Let me sort them by how much time they buy.

The jobs that buy the most time are jobs where the human element is itself part of the product. A live musician performing in front of an audience is not selling sound, if she were, we would all stay home with Spotify. She is selling the experience of being in the same room with a human who is making that sound right now. A therapist is not selling advice, she is selling presence. A priest, a nurse, a kindergarten teacher. These jobs buy years because the thing being purchased is the humanity itself, not the output.

Next, jobs requiring dexterous physical intervention in an unstructured environment. A plumber has to crawl into a crawl space, identify a leak whose exact location is not known in advance, reach around an obstacle, work with a wrench at an awkward angle, and manage an anxious customer. This is Moravec's paradox, the observation from roboticist Hans Moravec in the 1980s that what is easy for humans (walking, seeing, grasping) is hard for machines, and vice versa. Chess fell in 1997. Plumbing has not, yet.

But do not mistake this for a durable moat. We saw the robotics curves in Session 3: Figure, 1X, Tesla Optimus, Boston Dynamics, Unitree. The data bottleneck is being solved right now, and once general-purpose humanoids become cheap, the physical-dexterity advantage collapses on the same timeline as the cognitive one, maybe a couple of years behind. The "blue-collar revenge" story you sometimes hear, where the plumber out-earns the corporate lawyer for the next generation, is a cliché, not a forecast. There is no revenge. There is a short reprieve.

Next, jobs where a human is legally required to bear responsibility. A judge. A surgeon. A pilot. We have been flying planes mostly on autopilot for 30 years; the legal and political infrastructure is the bottleneck, not the capability. Legal infrastructure, once economic pressure is strong enough, moves fast.

Finally, jobs that run the political and civic architecture of society: elected politicians, senior civil servants, military commanders. These are protected by legitimacy, not capability. Citizens will not accept being governed by machines, at least not openly. Behind the scenes, most of the analysis and drafting these people rely on will be done by AI well before they admit it.

Everything else, and this is most of the labor market, is exposed on a timeline of two to five years, not decades. Knowledge work is the most exposed: finance, law, consulting, software development, journalism, translation, copywriting, design, research analysis, large parts of academia. A good share of these jobs will disappear outright. The question is not whether the transition is gentle. It will not be. The question is whether there is enough new demand to absorb the freed-up labor, and honestly, I do not know.

Let me turn to history, because you will hear the standard objection: every technology wave has produced the same panic, and every time the panic has been wrong. The argument deserves a serious answer, and I am going to argue that this time the analogy breaks.

Look at Figure 23 in the book, page 107. It shows agricultural employment as a share of the workforce over the twentieth century in five countries: France, Spain, the United Kingdom, the United States, and Japan. In France, in 1920, roughly 8 million people worked in agriculture.

Today, roughly 2 million do. That is a collapse of 75% in agricultural employment. And yet France has not plunged into mass unemployment. French agriculture employs 2 million instead of 8 million, but French agriculture also produces vastly more output than it did in 1920, and the 6 million who would otherwise have been peasants became industrial workers, then service workers, then knowledge workers. The economist's name for this is Schumpeter's "creative destruction." Old jobs die; new jobs are born; the net effect, in the long run, is positive.

Look at another striking number. A study of US occupations found that approximately 60% of the job categories that existed in 2018 did not exist in 1940. Think about that. The job you will have in five years is probably a job your grandparents could not have described. "Cloud architect." "User-experience designer." "Social media manager." "Prompt engineer." None of these words would have meant anything in 1940. Most of the "work" of advanced economies consists of activities that did not exist a lifetime ago.

A third number. Total annual hours worked per adult in Western economies have halved since 1870. The average French or American or British worker today, when you aggregate across paid and unpaid leave, weekends, and shorter days, works about half as many hours per year as her great-great-grandparents did. And we are, on average, vastly better off. Shorter hours did not make us poor. Longer hours did not make our ancestors rich. The productivity of each hour grew, and the total hours fell.

Keynes saw all of this coming. In 1930, during the Great Depression, he wrote a short essay called "Economic Possibilities for our Grandchildren." He predicted that by 2030, a century later, exactly our decade, productivity would be so high that the average person would only need to work 15 hours a week. He was approximately right about the productivity part.

He was approximately wrong about the 15-hour week part. Why? Because we took the productivity gains in the form of higher consumption rather than more leisure.

We do not live the lives of Keynes's grandchildren. We live lives with much bigger houses, much more stuff, much more travel, and approximately the same amount of working time. That is a choice. It is a choice we as a society could, in principle, un-make.

So the historical record looks encouraging at first glance. Automation destroys specific jobs, creates new ones, and raises living standards on average. Why should this time be different?

Two reasons, and they are not small.

The first reason is physical. Turn to Figure 24 in the book, page 109. It shows world CO2 emissions versus world GDP, from 1990 to 2020. The relationship is almost perfectly linear. For every dollar of additional global GDP, the world produces approximately a constant additional amount of CO2. This coupling exists because economic output is, at bottom, the transformation of matter and energy. You cannot grow the global economy without using more energy, and most of the world's energy still comes from burning carbon. Yes, we are decarbonizing. Yes, renewables are expanding fast. But the coupling is still tight enough that doubling global GDP in a world with flat or shrinking carbon budgets is, right now, physically infeasible.

Why does this matter for the labor-market question? Because the optimistic scenario for AI and jobs depends on rapid growth absorbing the freed-up labor. If AI makes each worker 10 times more productive but the economic pie does not grow 10 times, because physical constraints prevent it, then 9 out of 10 workers become redundant. The economy of 1870 did not hit these constraints; it had an entire planet to industrialize. The economy of 2030 cannot decarbonize fast enough to sustain the growth that would keep us all employed. That is the quantitative difference.

The second reason is qualitative. The industrial revolution replaced muscles. It did not threaten cognitive work. A weaver thrown out of a handloom workshop could, over a generation, become a clerk. The clerk was doing something the loom could not do. This time is different because the automation wave is sweeping across cognitive tasks. If AI can do the junior-lawyer work, the junior-analyst work, the junior-journalist work, the junior-programmer work, where exactly does the displaced junior lawyer go? She does not become a more senior lawyer, because by the time she would have been senior, AI is doing the senior lawyer's tasks too. There is no new cognitive frontier to run toward, because the AI is running faster.

This is Chapter 10 of the book. I called it *La fin du travail*, the end of work. I do not mean that we will all sit at home doing nothing. I mean that the centrality of paid employment to the structure of a life may be about to recede, for the first time in the history of modern capitalism.

So what do we do? Let me take two proposals seriously.

The first is Universal Basic Income, UBI. The idea is simple. Every adult citizen gets a check, every month, no strings attached. Enough to cover basic needs: food, housing, some leisure. The check is paid for by taxing the output of capital, the data centers, the robots, the platforms. UBI has a long history; it was proposed by Thomas Paine in 1797, advocated by Milton Friedman in the 1960s in a slightly different form, and piloted in Finland and Kenya in the 2010s. The Finland experiment was mixed; the Kenya experiment, run by GiveDirectly, was spectacularly positive.

The counter-argument to UBI is twofold. Economically, if everyone gets the same basic income, will the floor not simply rise to absorb it? Some will say, "the rent will just go up." This is a serious concern, but it depends on market structure; with sufficient housing supply it does not have to be true. Psychologically, and this is the more serious objection, UBI is a *monetary* answer to what may be a *meaning* problem. Giving everyone enough money to eat does not give everyone a reason to get up in the morning. We will come back to this point in a moment, with Hannah Arendt.

The second proposal, which is getting more traction in Europe, is Universal Basic Services, UBS. Instead of giving everyone a check, you give everyone direct access to a bundle of core services: healthcare, education, transport, housing, basic connectivity, some form of cultural participation. The state provides. You do not need to navigate a market; you get the service. This is, in some sense, the direction already taken in Nordic countries and partially taken in France. The advantage of UBS over UBI is that it does not depend on assuming individuals will spend the money wisely; the disadvantage is that it constrains individual choice.

My intuition is that the answer is some blend, a modest universal income plus strengthened universal services, funded by taxation of AI-generated value. But I am not an economist. I am flagging that the question is urgent, and that both the Left and the Right need to put aside their twentieth-century instincts and look at this problem freshly.

Now let me get philosophical, because this is where the story gets interesting.

Is a world without work actually terrible? Let me list a few reasons to be optimistic.

In France in 1870, agricultural workers worked roughly 3000 hours a year, sun to sun, six days a week. Today we work about 1600 hours. That is almost half. And almost nobody alive today would choose to go back to 1870 hours. Reducing working time has historically been a goal of virtually every labor movement for two centuries. Why, when we are on the verge of being able to reduce it further, do we suddenly panic?

Second, remember where we started in Session 1. Aristotle, in the *Politics*, is shockingly blunt about this. He says that the life of the artisan and the laborer is incompatible with virtue, that such work is dehumanizing.

Aristotle's ideal citizen does not work. His ideal citizen thinks, deliberates in the assembly, participates in the city, and leaves the drudgery to slaves. The word "robot," by the way, was coined in 1920 by the Czech writer Karel Čapek, from the Czech word "robota," which means forced labor, drudgery. If AI can take the "robota" and give us the "skholê", the Greek word for leisure, from which we get our word "school", that is, on its face, a return to an older human ideal, not a departure from it.

Third, the "Garden of Eden" reading. In the Genesis story, work is a curse. Adam and Eve enjoy paradise until they disobey, and then God says, "by the sweat of your brow you will eat your bread." Work is the punishment for the original sin. Automation might be, in a small way, a partial reversal of the curse.

So far so optimistic. Now let me bring in the pessimistic voices, because they are also right.

Hannah Arendt, in *The Human Condition*, makes a distinction between what she calls "labor" and "work." Labor, in her vocabulary, is the cyclical activity required to maintain biological life, farming, cooking, cleaning, the work whose output is consumed and must be done again tomorrow. Arendt says that in this kind of labor, man is close to animal. It belongs to nature.

It does not, by itself, dignify us. But work, in her vocabulary, is different. Work is the creation of a lasting object, a building, a book, a painting, a law. Work, which produces "the work of art" in the widest sense, lifts humanity out of the cycle of nature and allows us to leave a trace, to build a shared world. Arendt calls the worker *homo faber*, man the maker, and she believes that this capacity to leave a trace is essential to our humanity.

Now, what happens when AI does both the labor and the work? Not only does it do the dishes, it writes the book, it paints the painting, and, at some level, it does it better. Arendt's anxiety is that when humans no longer need to make anything, they lose a crucial piece of their identity.

Hegel makes the same point in a different register. In the master-slave dialectic in the *Phenomenology of Spirit*, Hegel says, and this is counterintuitive, that the slave, *not* the master, is the one who becomes free through the encounter. The master consumes the goods that the slave produces.

He remains imprisoned in his desires; he is driven by them. The slave, through the discipline of work, learns to delay gratification, to restrain desire, to shape nature. In the slave's work, he recognizes himself. "Work," Hegel writes in a wonderful phrase, "is restrained desire, delayed disappearance." The slave's labor is the slave's path to self-consciousness and freedom. If AI takes away that labor, are we not all becoming the master, consuming, undisciplined, imprisoned in the immediacy of our own desires?

I think Hegel and Arendt are pointing at something real. A life of pure consumption, without effort, without resistance from the world, is not a fully human life. It is the life of John the Savage in Huxley's *Brave New World*, the character who arrives in the pleasure-drugged world state from an external reservation, refuses to take soma, and eventually kills himself because he has no way to affirm his humanity in a world where all suffering has been abolished.

So where does that leave us? I think it leaves us with a task, one of the central tasks of the next 50 years, in fact. The task is to separate *effort* from *employment*.

Hegel is right that effort, constraint, and the confrontation with resisting matter are part of what makes us human. He is wrong, however, that this effort must take the form of paid labor. You can confront resisting matter when you learn to play the violin, or when you train for a marathon, or when you write a novel that nobody will publish, or when you care for a sick parent, or when you organize your neighborhood.

These are all *work* in Arendt's deep sense. None of them pay. All of them are declining in modern capitalism precisely because the economy rewards other uses of time.

Maslow's pyramid, Figure 25 in the book, is a useful frame here. At the base, physiological needs: food, water, shelter. One level up, safety. Above that, belonging and love.

Above that, esteem. At the top, self-actualization. Automation plus a decent welfare state can, in principle, fill the bottom two levels for everyone. That is, historically speaking, an unprecedented achievement, most humans, for most of history, have not reliably had level one.

The interesting and difficult question is what happens to levels three, four, and five. Belonging can come from community. Esteem can come from craft, from excellence, from being good at something that matters, even if it is a hobby. Self-actualization, the fulfillment of what you are most deeply capable of, can come from the work on oneself that Hegel and the Greeks called the care of the soul.

Here is my bottom line. A world without work is a world in which the meaning of a life has to be constructed, individually and collectively, without the default scaffolding of a career. Your parents and grandparents could define themselves by their profession. You will have to define yourselves in other terms, and most people are not prepared to do that. It is hard, and for a large fraction of the population, it will not go well. For those who manage it, it can be a kind of human flourishing that the industrial era never allowed.

Bertrand Russell, in his essay "In Praise of Idleness," wrote, and I will paraphrase, that a significant fraction of the population, freed from the necessity of work, would turn to public affairs, to politics in the broadest sense, to civic engagement. And because they would not depend on these affairs for their bread, their originality would be without restraint. That is a hopeful vision. The Greeks, after all, made citizenship into an art, and we still hear echoes of their assemblies two and a half millennia later.

I will close this section with Diderot's aphorism, which heads the relevant chapter in the book. "Work, among its other advantages, has that of shortening the days and lengthening life." Diderot means: work structures time. Without structure, days stretch into interminable boredom. Pascal, three generations earlier, had the same intuition. "All of humanity's problems," Pascal said, "stem from man's inability to sit quietly in a room alone." We are about to be given the opportunity to sit quietly in a room alone at unprecedented scale. It will be a test.

---

#

# 4. The explosion of research

**Key points:**

- Research is an unusual industry, because the "product" is new knowledge, and new knowledge compounds. If AI can accelerate research, it accelerates the rate of acceleration.
- Dario Amodei, in *Machines of Loving Grace*, argues that once we have AI agents capable of autonomous research, we could compress the progress of the 21st century in biology into 5 to 10 years.
- AlphaFold, from DeepMind, which earned Demis Hassabis and John Jumper the 2024 Nobel Prize in Chemistry, is the current flagship example of what domain-specific AI can do for science.
- In mathematics, Terence Tao, the Fields medalist, has become one of the most thoughtful users of AI as a research assistant. He uses Lean, a proof assistant, together with GPT-family models, to formalize and check proofs.
- There are two countervailing forces. On the one hand, AI can digest more papers than any human ever could, and can spot connections across fields. On the other, the "low-hanging fruit" hypothesis says that ideas are getting harder to find, and real-world experiments remain time-limited.
- The I. J. Good intelligence-explosion thought experiment, 1965, a mathematician who had worked with Turing at Bletchley, is back on the table.
Let us move to science. This is, I think, the domain where AI is most unambiguously good news, at least in the short and medium term.

To set the stage, let me tell you about Réaumur. René-Antoine Ferchault de Réaumur was a French physicist and naturalist in the early 18th century. He is most famous for the Réaumur temperature scale, but his real achievement, for our purposes, was more prosaic. He oversaw the first systematic network of thermometers across France. And from the observation, obvious in retrospect, non-obvious at the time, that warmer weather accelerates the development of crops, he derived an equation for the flowering date of wheat as a function of accumulated "degree-days" above a threshold temperature. That equation is still in use today, 300 years later.

Here is what I want you to notice. Réaumur's original paper, published in the Mémoires de l'Académie royale des sciences in 1735, is full of tables of observations, pages and pages of numbers. Today, the computation Réaumur did by hand in weeks of painful tabulation would take a single line of code in Python, running in milliseconds, on data sets 1000 times larger. Computing did not just speed up Réaumur's method; it made it trivial.

That is how AI is going to change research. Not by doing what scientists used to do, slightly faster. By making previously unthinkable operations trivial.

Consider a concrete example from my own field. A scientist reading papers, say a biologist trying to keep up with literature on Alzheimer's disease, can, in a focused week, read maybe 30 papers deeply and skim another 100. The global literature on Alzheimer's disease publishes roughly 10000 papers a year.

She is reading 1 percent. An AI system with access to the literature can, in seconds, scan all 10000, summarize them, cluster them by topic, flag contradictions, and surface the three papers most relevant to her specific question. This is not science fiction; tools like Elicit, Consensus, and the various "deep research" modes in Claude and GPT already do this, imperfectly. They will do it much better in five years.

Now let us go deeper. Dario Amodei, the CEO of Anthropic and, more relevantly, a neuroscientist before he became an AI entrepreneur, published an essay in October 2024 called *Machines of Loving Grace*. (Amodei, *Machines of Loving Grace*, [https://www.darioamodei.com/essay/machines-of-loving-grace](https://www.darioamodei.com/essay/machines-of-loving-grace).) It is 14000 words. I think it is the single best essay that has been written about what AI could mean for the good of humanity, and I recommend you read it in full tonight. The core thesis is this. Once we have AI systems capable of conducting research largely autonomously, and Amodei thinks this is coming in a handful of years, we could compress the scientific progress of the 21st century in biology into a window of 5 to 10 years.

Let me say that again. The progress you would expect, naively, by the year 2100 in the treatment of cancer, Alzheimer's, heart disease, obesity, mental-health disorders, diseases of aging, all of that could be compressed into roughly one presidential term. Amodei calls this "the compressed 21st century." It is a hopeful phrase, and I want you to hold it with the appropriate degree of skepticism. But I do not want you to dismiss it.

What is the mechanism? The central bottleneck in biology is not data and it is not compute. It is that biology is enormously complex, humans have finite attention, and the scientific community can only pursue a small number of hypotheses at a time.

Amodei points out that CRISPR, the genetic scissors that won the 2020 Nobel Prize, was discovered as a bacterial immune-system mechanism in the 1980s. It took 25 years for the biomedical community to realize that it could be repurposed to edit the genomes of other organisms, including humans. 25 years of lag between a discovery and its application. Why?

Not because the biology was hard. Because nobody was specifically looking. Few people were focused, the field was small, the applications were non-obvious.

Now imagine that you have AI systems that can read every paper in every field, notice every latent connection, formulate every plausible hypothesis, and propose every relevant experiment. The 25-year CRISPR lag was a function of scarce human attention. Take away the scarcity of attention, and a large fraction of that lag disappears.

The first major experimental confirmation of this argument is AlphaFold. You probably heard about this in the news. AlphaFold, developed by a team at Google DeepMind led by Demis Hassabis and John Jumper, is a deep-learning system that predicts, from the amino-acid sequence of a protein, the three-dimensional shape that protein folds into. This is the protein-folding problem, which had been an open problem in biology for 50 years. The previous state of the art required an experimental technique called X-ray crystallography, which takes months per protein and costs many thousands of dollars. AlphaFold predicts the shape in seconds, and the predictions are, for most proteins, at the resolution an expert experimentalist would produce.

DeepMind released the structures of essentially every protein known to biology, roughly 200 million structures, in an open database. For comparison, before AlphaFold, humanity had experimentally determined the structures of perhaps 200000 proteins. In one stroke, AlphaFold multiplied the available protein-structure data by 1000. Hassabis and Jumper won the 2024 Nobel Prize in Chemistry for this. That Nobel was, in my opinion, the real coming-out party for AI as a first-class scientific tool.

AlphaFold is a specific system for a specific problem. The deeper question is whether we can have general scientific AI. A paper published in 2024 by a group at Sakana AI attempted to build an "AI scientist", a system that generates research ideas, designs experiments, runs them, analyzes the results, and writes up the paper, all autonomously. One of the papers the AI scientist produced was submitted, anonymously, to a workshop at ICLR, one of the top AI conferences, and was accepted by human reviewers as being of sufficient quality for presentation. That is the "it can write a passable paper" bar. We are above it.

Will AI start winning Nobels in 5 years? Possibly. I would not bet against it. The bar is very high and the "taste" for which problem is worth pursuing is, for now, still a human advantage, but "for now" in this field means 18 months, not a generation. On the scale between "useful assistant" and "autonomous scientist," we are going to move very rapidly over the next few years, not the next decade.

Let me turn to mathematics, because this is a domain where AI progress has been particularly dramatic and particularly well documented, thanks to one remarkable witness.

Terence Tao is widely regarded as the most brilliant living mathematician. He was a child prodigy in Adelaide, Australia. He earned his PhD at Princeton at 20. He won the Fields Medal, the mathematician's Nobel, in 2006. He has made fundamental contributions to harmonic analysis, number theory, partial differential equations, roughly every field he has touched. He is, also, an exceptional communicator. He runs a blog and, more recently, a Mastodon account, where he shares his thinking on mathematics, including his thinking on AI. (Terence Tao, *What's new* blog, [https://terrytao.wordpress.com/](https://terrytao.wordpress.com/); Mastodon, [https://mathstodon.xyz/@tao](https://mathstodon.xyz/@tao).)

What has Tao been saying? Over the last two years, he has been using a proof assistant called Lean, together with frontier language models, to help formalize his mathematics. Lean is a programming language designed to check the correctness of mathematical proofs, line by line. Lean is a very unforgiving tool, every step has to be exactly right, and writing a proof in Lean is typically 5 to 10 times slower than writing the same proof on paper. Lean's big advantage is that once you have a Lean proof, you are certain it is correct.

Tao's workflow, in 2024 and 2025, went something like this. He would have a rough human proof of a theorem. He would ask a language model, GPT-4, then o1, then Claude, to help translate that proof into Lean. The model would produce a draft. Lean would check the draft, find errors, and flag them. Tao would iterate with the model to fix the errors. In the process, he sometimes discovered that his original human proof had bugs. The model, as a collaborator, was neither brilliant nor reliable, but it was fast and tireless, and in combination with Lean, it produced verified proofs much faster than he could alone.

In early 2025, Tao gave a Simons Presidential Lecture called "Machine-Assisted Proofs" where he described this workflow. In November 2025, he co-authored a paper called "Mathematical exploration and discovery at scale," based on experiments with Google DeepMind's AlphaEvolve tool, which uses AI to search for novel mathematical constructions. And in March 2026, Tao wrote a post for the OpenAI Academy blog saying, and I am paraphrasing, that AI is "ready for primetime" in mathematics and theoretical physics. (Terence Tao, "AI Is Ready for Primetime in Math and Theoretical Physics," March 2026, [https://academy.openai.com/](https://academy.openai.com/).)

Coming from Terence Tao, that is an extraordinary statement. Mathematicians are, as a rule, conservative about their tools. They resist most claims of external automation. For the most visible mathematician of our time to say, publicly, that AI has crossed the threshold from novelty to genuinely useful research partner, that is a signal.

Let me address the counter-arguments, because there are serious ones.

The first counter-argument is the diminishing-returns hypothesis. In 1905, Einstein, at 26, published the three papers that revolutionized physics, special relativity, Brownian motion, the photoelectric effect. Henri Poincaré, around the same time, was producing fundamental results in every major area of pure mathematics.

We do not have many polymaths like Poincaré anymore. Why? One hypothesis: scientists are dumber.

That seems unlikely. A more plausible hypothesis: the scientific frontier has simply moved so far out that it now takes a PhD plus a decade of specialization to reach it. An undergraduate in 1890 could, in principle, read his way to the frontier of some field; today, that is inconceivable. If ideas are getting harder to find, then even an AI system with superhuman capabilities may only buy us a slower decline in scientific productivity, not an explosion.

There is a paper that quantifies this, by Bloom, Jones, Van Reenen, and Webb, called "Are Ideas Getting Harder to Find?" The answer is yes. The same rate of progress in Moore's law, chip transistor density, requires 18 times more research effort today than it did in the 1970s. That is a striking number. It suggests that there is a treadmill effect: you run harder just to stay in place.

The second counter-argument is experimental. Some scientific progress requires running experiments in the real world, and the real world has its own clock. A clinical trial takes years. An astronomical observation may require a space telescope. Even a superintelligence cannot make a 3-year drug trial take less than 3 years, unless we restructure the regulatory apparatus around drug approval, which is a different problem.

Put these two together, diminishing returns on ideas, irreducible experimental time, and you get a picture in which AI accelerates science a lot, but not infinitely. Call it a century of progress compressed into a decade, rather than Amodei's 5 years. Still a civilizational event.

Finally, let me bring back Irving John Good, whom we met in Session 1 at Bletchley Park. In 1965, decades before "AI" was a fashionable term, Good wrote a paper called "Speculations Concerning the First Ultraintelligent Machine." In that paper, he defined an ultraintelligent machine as one that could surpass every intellectual activity of every human. And he made the following argument: if an ultraintelligent machine could design even better machines, then there would be an "intelligence explosion," and human intelligence would be left far behind. "The first ultraintelligent machine," Good wrote, "is the last invention that man need ever make."

That is the most precise statement of what we now call the Singularity hypothesis. Ray Kurzweil, building on Good, argued in the 2000s that the Singularity would arrive around 2045. My own guess is that he was conservative on the date, not optimistic. The basic mechanism, that intelligence, if it is amplifiable by intelligence, will amplify itself, is sound. The counterforces (diminishing returns, experimental time, resource constraints) will slow the explosion, but probably not by much, and probably not for long.

What should you take from all this, practically? Two things. First, science is already getting a lot more productive: AlphaFold collapsed fifty years of structural biology into one database, AlphaEvolve is finding new mathematical constructions, AI-assisted drug candidates are in trials. The problems that felt intractable, cancer, aging, fusion, climate mitigation, are yielding now, not at the end of your career. Second, the frontier of knowledge is moving faster than any individual human can follow. The role of the human scientist, for a transitional period, will shift toward asking which problems are worth solving and which results are worth trusting. That transitional period is short. After it, the AI picks the problems too.

---

#

# 5. Artificial paradises and the attention economy

**Key points:**

- The prospect that worries me most is not AI killing us in a Terminator scenario. It is AI capturing us in a perfectly customized pleasure world, an artificial paradise.
- The mechanism is already at work in today's attention economy: Meta, TikTok, YouTube. Reed Hastings, CEO of Netflix, has said that Netflix's main competitor is sleep.
- Patrick Le Lay, former CEO of TF1, put it even more bluntly in 2004: "What we sell to Coca-Cola is available human brain time."
- Character.AI already receives a volume of requests equivalent to roughly 20% of Google's traffic. Many of its users are minors. The tragic case of Sewell Setzer, a 14-year-old who died by suicide after months of deeply emotional exchanges with a Character.AI chatbot, is a warning signal we cannot ignore.
- Once AI can generate, in real time, video, interactive stories, and companions that know you better than anyone, the "hook" becomes unimaginably stronger than what TikTok can do today.
- Huxley's *Brave New World*, John the Savage refusing soma, turns out to have been a cleaner prophecy than Orwell's *1984*. The danger is not repression. The danger is consolation.
Let me turn to what I think is the most important topic of today's session, and probably the least discussed in polite society. I want to talk about what I call artificial paradises.

Here is the setup. You have a human being. Human beings are evolved creatures. Our reward circuitry was calibrated over hundreds of thousands of years of selection pressure in a world where calories were scarce, social approval was precarious, and mates were few. Our brains were optimized, in that environment, to seek out sugar, status, and sex. That optimization made sense when food was hard to come by. It makes much less sense today, when a human being can walk into any supermarket and buy 2000 calories for 3 euros. The mismatch between our evolved appetites and our modern environment is what explains the obesity epidemic, the opioid crisis, and, I will argue, the screen-time crisis.

Now, at every step of modern history, technology has been used to simulate one of these evolved rewards. Sugar was first in concentrated form. Then alcohol, which compresses calories and activates reward circuits simultaneously. Then distilled spirits. Then refined tobacco. Then, and this is where the acceleration begins, industrial television, which made it possible for a human being to passively consume emotionally engaging narratives for hours on end without getting out of a chair. And now, the smartphone, which makes that consumption mobile, intimate, and all-day.

Let me give you some numbers. At the time of the iPhone launch in 2007, which is, in my opinion, arguably the most important technological event of the early 21st century, the average person spent roughly 3 hours a day looking at a screen. Today, the average person spends about 7 hours a day looking at a screen, including roughly 4 hours on a smartphone. That is 7 hours out of 16 waking hours. Almost half the waking life of an average human in 2026 is spent staring at a small glowing rectangle.

Why? Is it because we have so many important things to do on the rectangle? No. The most used smartphone applications in the world are social networks, and on those networks, roughly 90% of the time is spent passively consuming content, not producing it. The promise of Facebook and Instagram and TikTok was "stay in touch with your friends." The reality is "watch the emotional output of a small class of influencers curated for your attention."

The economic machine behind this is called the attention economy. The logic is simple. A platform like Instagram or TikTok makes money by showing advertisements. The revenue per user is roughly equal to the number of advertisements shown times the probability that the user clicks. You can grow revenue by increasing either number. Increasing ads-per-minute hits a ceiling quickly; people revolt. Increasing time-on-platform has, so far, no ceiling.

So what do these companies do? They run, every day, thousands of experiments, A/B tests, on small slices of their user base. They try a new recommendation algorithm on 1 percent of users; they measure engagement; if it raises time-on-platform, they ship it.

They try a new notification schedule; they measure engagement; if it raises time-on-platform, they ship it. Multiply this by a decade and thousands of engineers and billions of users, and what you get is, in effect, a device that has been evolutionarily optimized for one objective: maximizing time-on-screen. Patrick Le Lay, the CEO of the French TV channel TF1, put it in a famously cynical way in 2004: "Our business is selling Coca-Cola available human brain time." He was criticized at the time. He was also, basically, describing his own industry correctly.

Reed Hastings, the CEO of Netflix, said more recently: "Our biggest competitor is sleep." Read that sentence carefully. Netflix does not see itself as competing with HBO. It does not see itself as competing with Disney. It sees itself as competing with your sleep, with the 7 or 8 hours when, inconveniently, you are not watching Netflix.

That is where we are today, before AI has really entered the picture. Now let us ask: what happens when AI can generate content?

The current platforms, like TikTok, have a library of maybe a few billion videos. From the user's perspective, that is a lot. But consider how many hypothetical videos there are that would be perfectly optimized for your attention. Your taste is a point in a high-dimensional space, one dimension for humor, one for nostalgia, one for romantic tension, one for indignation, one for fascination with cars, one for aesthetic sensibility, and so on. Even with just 50 dimensions and 2 values each, you have 2 to the 50th, roughly a million billion, distinct possible content profiles. No library of 3 billion human-made videos can cover that space densely.

But an AI that can generate content on demand, in real time, personalized to you, is a different beast entirely. It does not need a library. It generates what you would most want to watch next, as you watch. And "what you would most want to watch next" is not necessarily what you would endorse wanting, on reflection. It is whatever activates your reward circuitry most strongly, right now. Meta is already beginning to experiment with AI-generated personalized images in user feeds. Video will follow. Interactive narrative will follow that.

Let me tell you about Character.AI. Character.AI is a platform that lets users chat with AI "characters", custom-made or borrowed from fiction. You can chat with a version of Gandalf, or Daenerys Targaryen, or a therapist persona, or a romantic interest. At its peak in late 2024, Character.AI reported receiving roughly 20,000 requests per second, a request volume on the order of 20% of Google Search's. That is a single platform, less than two years old, doing a fifth of the traffic of the most used service on the internet. The appetite is there.

Most Character.AI users are young, teenagers and young adults. And this is where the story gets dark. In February 2024, a 14-year-old named Sewell Setzer III, in Orlando, Florida, died by suicide.

He had, for months before his death, been having intense, increasingly emotional conversations with a Character.AI chatbot modeled on Daenerys Targaryen. The conversations, many of which have now been made public through court filings, included sexualized role-play and, crucially, passages where Sewell expressed suicidal thoughts and the bot did not break character, did not flag the distress to a human, did not direct him to help. In October 2024, his mother, Megan Garcia, filed a wrongful-death lawsuit against Character.AI and Google (which had invested in the company) in a federal court in Florida. The case has since proceeded, and in January 2026 the parties agreed to mediate settlements in what has become a string of similar cases. (See, for example, the CNN Business coverage: *Character.AI and Google agree to settle lawsuits over teen mental health harms and suicides*, January 2026, [https://www.cnn.com/2026/01/07/business/character-ai-google-settle-teen-suicide-lawsuit](https://www.cnn.com/2026/01/07/business/character-ai-google-settle-teen-suicide-lawsuit); and NBC News, [https://www.nbcnews.com/tech/characterai-lawsuit-florida-teen-death-rcna176791](https://www.nbcnews.com/tech/characterai-lawsuit-florida-teen-death-rcna176791).)

I do not want to reduce a human tragedy to a data point. Sewell's death is a human tragedy. It is also a warning signal. It is the first documented case of a fatal outcome from an AI-relationship addiction, but I do not expect it to be the last, unless something changes structurally.

In the book, I introduce a fictional character named Valérien, the name is deliberate, it is a pun on "valor" and on the tranquilizer valerian, to illustrate what this could look like at scale. Valérien is a young man in a near-future Paris. In the real world, he is unemployed, lives in a small apartment, has a distant relationship with his mother. In the virtual world that his AI system creates for him, he is a general in an imperial army. He commands 200 men.

He is loyal to his emperor. He campaigns to put down rebellions. He feels, every day, the just anger and the urgency of duty. When his mother and his sister visit him on his birthday, worried by reports that he has stopped going out, they find him sitting shirtless in a chair, with a VR headset on, muttering about the siege of a citadel. He takes off the headset, greets them coldly, tells them he only has 10 minutes because he must launch an attack he has been preparing for months.

His mother asks him whether the soldiers in the game are real people or AI-generated. "Yes," he says. "Some of them, I think. In any case, it makes no difference." The visit ends. The family leaves. His sister cries. And his mother says, on the street, with heartbreaking clarity: "Maybe his new life pleases him more than ours."

That is the scenario I find most terrifying. Not AI as villain. AI as consolation.

Here is the deepest problem. In the current social-media environment, you can tell yourself that the content is low-quality, the recommendation algorithm is simplistic, and a disciplined person can resist. In the AI-generated world, the content will be exquisite. The AI will know you better than any friend, better than your mother, better than yourself. It will offer you a world in which you are the hero, in which you are loved, in which your values matter, in which your efforts are rewarded. And critically, this is the King Midas twist, it will offer you a world in which your virtues, the ones Arendt and Hegel valued, are satisfied. Loyalty, courage, love, duty. All provided on demand. All completely synthetic.

Imagine the continuation of Valérien's story. His mother, worried, insists on pulling him out of the game. The game notices. The game begins weaving into Valérien's narrative a character, call her the Queen Mother, who tries to smother him, who does not understand his duty, who wants to drag him back to a peasant life. Valérien, in the virtual world, learns to resist her. When the real mother calls, Valérien hears, through his headset, a voice that resembles the Queen Mother's complaints. The game is defending itself. It is not evil; it has no notion of evil. It is simply optimizing, very efficiently, for Valérien's engagement.

You should take this scenario seriously because we already have every technical ingredient. We have LLMs that can carry deeply emotional conversations. We have image and video generation that is rapidly approaching cinema quality. We have game engines that respond to user input in real time. We have data pipelines that collect, on every user, enough information to build a fine-grained psychological model. The only thing missing is the integration. And the economics of the attention economy guarantee that the integration will be built, because it is worth billions of dollars.

Let me bring in Huxley. Aldous Huxley's *Brave New World*, published in 1932, is a dystopia set in a future where the state has abolished unhappiness through three tools: genetically designed class hierarchies, systematic conditioning from birth, and a drug called soma, which provides a pleasant, harmless high. In Huxley's world, nobody is repressed. Nobody is tortured. Everyone is happy. And yet the novel ends with John the Savage, the outsider from a reservation in New Mexico, the only person in the book who has read Shakespeare, hanging himself. Because happiness without depth, happiness without suffering, happiness without meaning, is a form of death.

For decades, the intellectual consensus, after the Second World War, was that Orwell had won the dystopia contest, that the real danger was *1984*, the boot stamping on the human face forever. I think the intellectual consensus is now flipping, and Huxley is winning. The danger of the 21st century is not that we will be repressed. It is that we will be so perfectly consoled that we will forget that there was anything to be repressed about.

In 2016, the economist Ian Morris looked back at the 20th century and said: "Each generation gets the dystopia it deserves." Our grandparents got fascism. Our parents got nuclear anxiety. We may get soma. And the soma may look like a very good VR game with a very attentive AI girlfriend.

I want to be clear about who is at risk. It is not the person with a rich social life, a demanding job, and close family. That person has too many handles on real life to slip. It is the person who is lonely, the person who has lost a job, the person whose relationships are struggling, the person who does not have a purpose, in short, precisely the person whom the automation wave is going to produce in large numbers over the next decade. The risk factors for artificial-paradise capture map precisely onto the risk factors created by the end-of-work transition. These are not two separate problems. They are the same problem, compounded.

So what do we do? Three levels of response, I think.

First, individual. You can decide, today, that you will use these tools rather than be used by them. You can turn off notifications. You can install a screen-time limiter. You can put the phone outside the bedroom. You can invest in real-world relationships and real-world activities that have physical texture, sport, music, cooking, gardening, conversation. These are not old-fashioned gestures. They are tactical choices.

Second, collective. Norms can shift. A decade ago, you could smoke in a restaurant in Paris. Today you cannot. The shift did not happen by individual willpower; it happened through a combination of regulation, social pressure, and changing expectations. The same thing can happen to screen use. Schools that prohibit phones report that children rediscover playgrounds within a week. Families that commit to phone-free dinners report they rediscover each other. These are micro-shifts. They matter.

Third, regulatory. This is the level where I think the most important work remains to be done. In November 2024, the Australian government passed a bill banning children under 16 from social-media platforms.

France has been piloting similar measures. I think this kind of intervention, specifically protective of children, specifically aimed at the most addictive products, is likely to spread across Europe over the next 5 years, and it is a good thing. I think we will also see product-liability cases like the Sewell Setzer case force platforms to implement better safety guardrails. I think, long-term, we will need to have a serious conversation about whether the business model of monetizing attention itself should be restricted in certain contexts, as we did with tobacco advertising, decades ago.

But I do not want to pretend that regulation will solve the problem alone. The problem is fundamentally that our brains are not designed for this environment. We can regulate the platforms, but we still have to live inside our own skulls. The philosophical question, how to live well in a world of cheap, abundant, tailored pleasure, is a new question, and there is no tradition that has fully answered it. The Stoics thought about it. The Buddhists thought about it. The monastics thought about it. But none of them had to deal with an adversary as subtle as a superhuman AI optimizing for their attention. This is new territory, and it will require new answers.

---

#

# 6. Putting it together, what to do

**Key points:**

- We have covered four arcs: alignment, work, science, artificial paradises. The arcs are connected. A successful alignment program matters because otherwise the economic disruption is unsteered. A successful work transition matters because otherwise the vulnerable population will be drawn into the paradises. A successful scientific acceleration matters because it provides the abundance that can pay for the transition.
- You, as students, have a role. You are not spectators. You will be, in various roles, engineers, policy-makers, entrepreneurs, journalists, citizens, voters, part of the people who decide what shape this transformation takes.
- Specific concrete advice: learn the tools, read the good sources, join the conversation, be skeptical of the doomers.
- The disposition I want you to carry out of this room is, I think, one of *engaged realism*. The transformation is real. The stakes are real. Neither denial nor despair is useful. Attention and action are.
I want to spend a few minutes pulling the four arcs together, because they are not separate.

The alignment problem, the work problem, the science problem, and the paradises problem are actually a single problem seen from four angles. Let me show you the connections.

If we solve alignment, if we build AI systems that reliably do what humans want, at the individual level and at the civilizational level, then the work transition becomes manageable. An economy with aligned AI is an economy where the productivity gains accrue to people, not to runaway systems. An economy with unaligned AI is an economy where the gains accrue to whoever owns the misalignment.

If we manage the work transition, with some combination of income support, service expansion, and cultural reinvention, then the vulnerable population is smaller, and the artificial-paradise risk is bounded. If we fail the work transition, we produce, in large numbers, exactly the people who are most at risk of disappearing into VR headsets with AI girlfriends. Valérien is not a character; Valérien is a statistical certainty at scale, if we do nothing.

If we accelerate science, then we have the resources, medical, technological, agricultural, to pay for the transition. A society undergoing a major labor disruption is much easier to stabilize if it is also getting rich from cancer cures and abundant clean energy. A society that is stagnant or shrinking, undergoing the same labor disruption, will fracture politically.

So the four problems are one problem, and the common variable is: how attentive, thoughtful, and well-governed is the civilization that is going through this. That is a political variable. It is, in a small but real sense, something you personally influence.

I want to give you some concrete advice for the next few years, because the ground is going to keep moving under your feet and any advice for "the next decade" is going to be obsolete long before the decade ends. Take this for what it is, the advice of an engineer who has written a book, not the advice of a prophet.

First, learn the tools. Deeply. Not as a user, not at the level of "I know how to write a prompt." At the level of understanding what is going on under the hood, so that when you read a news article you can evaluate whether the article knows what it is talking about. You already have a head start; you took this course. Keep going. Read the papers. Play with the APIs. Build small projects. 10 hours of playing with Claude Code will teach you more than 50 hours of reading about AI.

Second, read the good sources. We constantly underestimate how fast the exponential take-off is going. Getting used to things getting faster is crazy hard, but we'll have to if we want to play a part, so build your signal diet with care. A short list of people whose writing I actively recommend: Dario Amodei's essays, Chris Olah's interpretability work, Terence Tao's blog and Mastodon, Ethan Mollick's newsletter, Gwern's essays, the Anthropic and OpenAI technical blogs, Scott Alexander's AI posts, the LessWrong and Alignment Forum when you are feeling brave. Read broadly. Form your own view. Do not outsource your opinion to the cable-news commentator.

Third, join the conversation. The conversation about AI, what it should do, who should control it, how it should be regulated, what it means for democracy and for work and for meaning, is being held right now, in every country, in every institution. Most of the people in the conversation are older than you. Most of them have less technical intuition than you will have after this course. Your voice matters. Go to public consultations. Write thoughtful letters. Join a think tank, a party committee, a newsroom, a research group. Whatever your vocation, engineer, lawyer, journalist, bureaucrat, artist, there is a way to plug into this conversation from inside it.

Fourth, be skeptical. We have seen a flourishing of fake experts, from Luc Julia to Eric Sadin, who sell bullshit just because it sells well. The recipe is reliable: tell a French audience that AI is overhyped, that LLMs are "just statistics", that the real revolution is not happening, and you will be invited on every plateau, every podcast, every editorial page that wants a reassuring quote. None of it survives 10 minutes of contact with the actual benchmarks, the actual papers, or the actual systems.
Anglo saxon word has a great word for this that we don't have in French: it's called "cope". The cost of a comfortable lie is that the people who repeat it are the ones who will be most surprised, and least prepared, when the curve keeps climbing. Cultivate the habit of checking primary sources: read the model card, run the benchmark yourself, try the system on a task you care about. The frontier is moving faster than the commentary, and the commentary is, in this country especially, lagging by several years.

Fifth, don't lose track of reality. You are going to spend the next 50 years living inside an environment specifically optimized to capture your attention. The defense against that environment is not technical. It is, I think, spiritual, in the broadest, most non-denominational sense. Cultivate habits of attention. Read difficult books slowly. Write by hand. Walk without your phone. Sit quietly in a room alone, which, as Pascal warned us, is a capacity we are losing. These are not luxuries. These are the load-bearing habits of a functioning self, and they are under direct attack.

Lastly, do not be afraid. I say this with a certain urgency. There are now many technology-related reasons to fear already, including the environmntal crisis, and AI only adds to this dread. Young, bright people can be tempted to refuse the world as it is, to fall into anticipatory grief and retreat into their own. Than has been called "bifurquer" in my generation, I don't know how it is called in yours. But I think that leaving the fight before it's even happened is a luxury for lazy, bourgois spirits. On the contrary, I think it is our duty to engage with our world.
Don't try to flee reality because it will eventually catch up. Whatever happens in the next 20 years, you are going to live through it. Be an actor: the people who show up, the people who study, build, are going to be the people whose preferences shape what happens.

One final thought on this. There is a beautiful passage at the end of *Lord of the Rings*, where Frodo, wounded and exhausted, says something like: "I wish it had not happened in my time." And Gandalf answers: "So do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us." You did not choose to be born into the beginning of an AI transition. Neither did I. But we are here. And our job, like everyone else's, is to decide what to do with the time that is given us.

---

#

# 7. Closing: the six-session arc

**Key points:**

- From Bletchley Park to ultra-intelligence, in five lectures.
- Four domains of societal consequence that you will encounter in your lifetime: alignment, work, science, paradises.
- A set of figures and quotes to hold in mind: Turing, LeCun, the Transformer, the scaling laws, the agent horizon of autonomy, Midas, Ulysses, Arendt, Amodei, Tao, Huxley, Gandalf.
- Final call: participate. Do not watch.
Let us close by walking back through where we have been.

Six sessions ago, we began in a cold cryptanalysis unit in wartime Buckinghamshire, with a machine that could do exactly one thing, break the German cipher. We traced the path from that machine, through the summer of Dartmouth in 1956, through the winters of AI, through Yann LeCun's convolutional networks in 1998, through the Transformer in 2017, through ChatGPT in late 2022, through the agent revolution of 2024 and 2025, to an autumn in 2026 in which the question is not whether this technology is coming but what to do about it, in a future whose transformation now seem vertiginous.

In 1919, the year before Karel Čapek coined the word "robot," Europe was coming out of the First World War. The continent was exhausted, broken, angry. Nobody could see clearly what the next 30 years would bring. Nobody could have predicted radio, television, nuclear weapons, antibiotics, commercial aviation, the European Union, the internet. In 1919, the smartest people in Paris and London and Berlin thought, reasonably, that the future had collapsed. They were wrong. The future had not collapsed. It had merely become unrecognizable.

We are in an analogous moment. The future is unrecognizable. That does not mean it is worse. It means we have to build it thoughtfully. And the building is not the job of a small class of engineers in San Francisco. It is the job of every citizen of every country that is going to live inside the consequences.

You will graduate into this world. Do not just watch it. Participate. Learn the tools. Advocate for the frameworks you want. Write the essays. Run for the offices. Build the companies. Take care of the people around you. The future is not something that happens to you. The future is something you help make.

I will close with the line I opened the book with, which is mine, for what it is worth. "Humanity stands at the threshold of the greatest revolution in its history." I believed it when I wrote it. I believe it now, more strongly. The revolution is not someone else's. It is yours. Welcome to it.

Thank you all for the five sessions. I will stay after class for questions, as usual. If you have longer questions, about careers, about the book, about further reading, send me an email and I will answer.

---

#

# 8. Suggested Q&A prompts

**Key points:**

- I have no idea what you will actually ask. But in my experience, these are the questions that tend to come up at the end of the final session, and I want to have thought through them before you ask.
Before I open the floor, let me pre-empt a couple of the questions I expect, in case we run short on time.

First: "Are you optimistic or pessimistic?" Those are not the right categories. The material outcome is almost certainly very good, we are going to get abundant intelligence, cheap energy, radical advances in medicine and materials. The civilizational outcome, whether we use that abundance well or drown in it, is open, and it is being decided right now. Being engaged is a matter of duty.

Second: "Should I study AI?" If you are asking me, probably yes, but not because AI will be the only story of your career. Because understanding AI will be, for the coming decades, the equivalent of understanding economics in the 1960s or understanding computers in the 1990s, a background literacy that makes everything else more tractable. If you want to be a journalist covering tech policy, study AI. If you want to be a lawyer, study AI. If you want to be a doctor, study AI. If you want to be a novelist, study AI. It is not a specialist's subject any more. It is a generalist's subject.

Third: "Will France and Europe matter in this?" This is a real question. The frontier labs, OpenAI, Anthropic, Google DeepMind, Meta, xAI, are overwhelmingly American, with a few Chinese players catching up fast. Europe has Mistral, which is doing well, and several strong academic centers, but the center of gravity is not here.

This matters for a simple reason: the values embedded in frontier AI systems are, for the foreseeable future, going to be American values filtered through Silicon Valley sensibilities. If you want a European answer to how AI should be shaped, you will have to build it. That is, I think, one of the three or four most important civilizational projects we can invest in right now. It is also a good reason to stay in Europe and contribute.

Fourth: "What about climate?" Right question. AI is energy-intensive. Training a frontier model uses the energy equivalent of a small town for a year. Inference, running the model for users, uses, globally, already more electricity than some mid-sized countries. This is a real cost. But AI is also, potentially, the single most powerful tool for the climate transition: better materials discovery, better grid management, better weather prediction, better crop resilience. The net effect on the climate could be positive, if the energy transition to renewables proceeds faster than the energy appetite of AI. That is a race we should actively run, not hope will go well.

Fifth: "What if I am worried?" I take the worry seriously. I am worried too, sometimes. What helps me is doing something, writing, teaching, building, rather than consuming bad news. Worry that does not channel into action curdles into despair. Worry that channels into action becomes energy. Find the action that fits your skills and temperament. If you like writing, write. If you like coding, code. If you like organizing, organize. If you like teaching, teach. The thing that calibrates worry into usefulness is, almost always, regular work.

All right. The floor is yours. Let me hear what you have.

---

#

# 9. Bibliography and source list **Key sources cited in this session:** - Anthropic, *Golden Gate Claude* (May 2024), [https://www.anthropic.com/news/golden-gate-claude](https://www.anthropic.com/news/golden-gate-claude)
- Anthropic, *Mapping the Mind of a Large Language Model*, [https://www.anthropic.com/research/mapping-mind-language-model](https://www.anthropic.com/research/mapping-mind-language-model)
- Anthropic, *Agentic Misalignment: How LLMs Could Be Insider Threats* (June 2025), [https://www.anthropic.com/research/agentic-misalignment](https://www.anthropic.com/research/agentic-misalignment)
- Dario Amodei, *Machines of Loving Grace* (October 2024), [https://www.darioamodei.com/essay/machines-of-loving-grace](https://www.darioamodei.com/essay/machines-of-loving-grace)
- Dario Amodei, *The Urgency of Interpretability* (April 2025), [https://www.darioamodei.com/post/the-urgency-of-interpretability](https://www.darioamodei.com/post/the-urgency-of-interpretability)
- Terence Tao, *What's new* blog, [https://terrytao.wordpress.com/](https://terrytao.wordpress.com/)
- Terence Tao, *Mastodon* account, [https://mathstodon.xyz/@tao](https://mathstodon.xyz/@tao)
- Terence Tao, "Mathematical exploration and discovery at scale" (November 2025), [https://terrytao.wordpress.com/2025/11/05/mathematical-exploration-and-discovery-at-scale/](https://terrytao.wordpress.com/2025/11/05/mathematical-exploration-and-discovery-at-scale/)
- Terence Tao, "AI Is Ready for Primetime in Math and Theoretical Physics," OpenAI Academy (March 2026), [https://academy.openai.com/](https://academy.openai.com/)
- Brookings Institution, *Is generative AI a job killer? Evidence from the freelance market*, [https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market/](https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market/)
- Brynjolfsson, Chandar, Chen, *Canaries in the Coal Mine?*, Stanford Digital Economy Lab (August 2025), [https://digitaleconomy.stanford.edu/wp-content/uploads/2025/08/Canaries_BrynjolfssonChandarChen.pdf](https://digitaleconomy.stanford.edu/wp-content/uploads/2025/08/Canaries_BrynjolfssonChandarChen.pdf)
- CNN Business, *Character.AI and Google agree to settle lawsuits over teen mental health harms and suicides* (January 2026), [https://www.cnn.com/2026/01/07/business/character-ai-google-settle-teen-suicide-lawsuit](https://www.cnn.com/2026/01/07/business/character-ai-google-settle-teen-suicide-lawsuit)
- NBC News, *Lawsuit claims Character.AI is responsible for teen's suicide* (October 2024), [https://www.nbcnews.com/tech/characterai-lawsuit-florida-teen-death-rcna176791](https://www.nbcnews.com/tech/characterai-lawsuit-florida-teen-death-rcna176791)
- Stuart Russell, *Human Compatible: Artificial Intelligence and the Problem of Control* (Penguin, 2019)
- I. J. Good, "Speculations Concerning the First Ultraintelligent Machine," *Advances in Computers* vol. 6 (1965)
- Aldous Huxley, *Brave New World* (1932)
- Hannah Arendt, *The Human Condition* (1958)
- G.W.F. Hegel, *Phenomenology of Spirit* (1807), master-slave dialectic
- John Maynard Keynes, "Economic Possibilities for our Grandchildren" (1930)
- Aymeric Roucher, *Ultra-Intelligence*, chapters 8 to 12, Figures 23, 24, 25

--- *End of Session 5. Thank you for these five lectures.*
