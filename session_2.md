# Session 2: Opening the machine *Word-count target: 15,500 to 17,500 words (about 2 hours at 140 wpm).*
*Run:* `python3 cours_sciences_po/timer.py cours_sciences_po/session_2.md` --- ## 0. Opening (about 3 min) **Key points:**
- Where we are in the arc of the course.
- The promise of today: by the end, each of you will know concretely how a neural network is built. Not in metaphor. In code.
- Three ideas we will nail: a neuron is arithmetic, backpropagation is blame assignment, attention is meaning flow. > Last week we stood at altitude. We looked at the whole rocket: the race between OpenAI, Anthropic, Google, Meta, Mistral, the compute curves, the capital flows, the AGI question. You left with a map. Today, we zoom in on the engine. We open the hood. We pull the metal panels off, and we look at what actually runs in there.
>
> My claim for today, and I want you to test it against me: a neural network is not complicated. It is arithmetic, performed at vast scale, with a clever trick to automatically adjust the arithmetic until it does what you want. That is it. Three hours of lecture and we will have coded one ourselves. From scratch. With a notebook, some Python, and no magic.
>
> Here is the plan. First, thirty minutes on the neuron itself and the network. Then, a live coding block where I build a small network on MNIST (handwritten digits), we watch it train, and we peek inside to see what the neurons learned. Then we take a hard look at how this network learned, which is the single most beautiful idea in modern AI: backpropagation. Then we leave images behind and move to text, where we meet Word2vec, vectors, the king-queen analogy, and finally attention and Transformers. Three big acts. We break in the middle. I will pace myself.
>
> Two rules. One, please interrupt. If a symbol flies past you and you are lost, raise your hand. Nothing makes me happier than an honest "I don't follow". Two, please do not panic at the math. I will keep it minimal. Every equation I write, I will translate into a sentence in French or in English. If you walk out of this room at six with the feeling that neural networks are plumbing, not magic, I have done my job. --- ## 1. The neuron (about 12 min) **Key points:**
- A neuron is one line of arithmetic: weighted sum, then a switch.
- The weights are what the network learns. Nothing else.
- Stacking neurons into layers builds abstraction. > Let me draw on the board. You have an input. Call it x. x could be a pixel, a temperature, a number of previous metro delays, anything that is a number. A neuron takes several inputs at once. Let us say three inputs: x1, x2, x3. Each input arrives at the neuron through a channel, and each channel has a weight. The weights are numbers too, and they are the knob we will be turning later. Call them w1, w2, w3.
>
> The neuron does two things. First, it sums the inputs, each multiplied by its weight. So it computes w1 times x1, plus w2 times x2, plus w3 times x3. This is a weighted sum. In a single line: y equals w dot x plus b, where b is a small extra number called a bias. Think of b as a baseline volume, a default tendency to fire or not fire regardless of the inputs.
>
> Second, the neuron applies an activation function to this weighted sum. The simplest activation function, and the one used most in modern networks, is called ReLU. ReLU is a fancy name for a trivial rule: if the number is negative, output zero; if the number is positive, pass it through. That is all. In one line of Python: if x is less than zero, return zero, else return x. You could write it on a Post-it. And yet this tiny switch is load-bearing for the whole field.
>
> [Figure 2, p. 13: the single-neuron diagram, blue-to-red colored weights, the sum-and-activation box, the output signal.]
>
> Look at the figure in the book. You see three input signals arriving from the left. Each is multiplied by its weight. The weights are color-coded: blue means negative, red means positive. In this example the sum comes out to minus zero point seven nine. Negative. So the ReLU activation outputs zero. The neuron is silent. Nothing flows onward.
>
> Now imagine the inputs were different. Say x1 went up. The weighted sum would rise. At some point it crosses zero. The neuron fires. It transmits a signal to whatever comes next. What comes next is another neuron, in the next layer, and that second neuron in turn does its own weighted sum of signals from the previous layer, applies its own ReLU, and so on, layer after layer, until finally some signal arrives at the last layer. That last layer is the output of the network.
>
> So a neural network is a list of layers. Each layer is a list of neurons. Each neuron does a weighted sum and a ReLU. That is the whole architecture. Seriously. What we call deep learning, the thing that has just produced ChatGPT and Claude and Gemini and reshaped a trillion dollars of the economy, is: weighted sums, ReLU, weighted sums, ReLU, weighted sums, ReLU, done.
>
> Why does it work, then? Because by adjusting the weights, and only the weights, we can make the network compute almost any function you can imagine. The weights encode what the network knows. Change the weights, you change the network. Store the weights on disk, you store the knowledge. Ship the weights to your phone, you ship the model. When somebody tells you "Meta released Llama 3", what they actually released is a file containing billions of weight values. Decimals. That's the whole model. Just a file of numbers.
>
> Here is the anchor image I want you to keep. [Figure 3, p. 14: the full fox-versus-elephant network with colored weights and activation levels.] On the left, an image of an elephant. Each pixel becomes an input to the network. First layer, 400 neurons if the image is 20 by 20. Each neuron fires, more or less, depending on the pixel values it receives. Second layer, fewer neurons, each tuned to detect simple shapes: an edge, a curve, a patch of contrast. Third layer, still fewer neurons, each tuned to combinations of those shapes: a tusk-like thing, a trunk-like thing, a snout, an ear. Final layer, two neurons: one for fox, one for elephant. The elephant neuron lights up. The fox neuron stays dark. Prediction: elephant.
>
> Notice what happened. Each neuron in the intermediate layers has specialized. Some neuron, deep inside, has become a tusk detector. Not because we told it to. Because training drove it there. We will see exactly how, in an hour. But first let me insist on this point: the whole apparent intelligence of the network is distributed across millions or billions of little neurons, each of which is just doing a weighted sum and a ReLU. Simple bricks. Complex behavior. This is the connectionist bet, made by Frank Rosenblatt in 1958, and vindicated by Yann LeCun, Geoff Hinton, Yoshua Bengio forty years later. Simplicity of the bricks does not preclude complexity of the system. An ant colony builds cathedrals. A neuron colony writes sonnets.
>
> One historical footnote, because it matters. Rosenblatt built the first functioning neural network, called the Perceptron, in 1958 at the Cornell Aeronautical Laboratory. He demonstrated it on a simple pattern-recognition task. He was an American psychologist, not a computer scientist: he came at this from the brain side, from the idea that if we could imitate the neuron, we could imitate thought. The New York Times, in 1958, wrote that this machine was "the embryo of an electronic computer that the Navy hopes will walk, speak, see, write, reproduce itself, and be conscious of its existence". A bit ahead of itself, that headline. But not, as it turns out, wrong in principle. Just wrong in timing, by about fifty years. Which brings us to our central theme: in AI, being correct is not enough. You also have to be on time. Rosenblatt had the idea. He lacked the compute, the data, and the learning algorithm. We will see what fixed that.
>
> One more thing before we leave the neuron. You may have heard the term "deep learning". "Deep" refers to the number of layers. A shallow network has one or two hidden layers. A deep network has dozens, sometimes hundreds. GPT-4 has about a hundred and twenty transformer layers stacked on top of each other. AlphaFold, the protein-folding model from DeepMind, has a different kind of depth but also dozens of layers. The "deep" in "deep learning" is the architectural choice to stack many layers. Each layer gets to combine and re-combine the features of the previous layer, so deeper networks can detect more abstract patterns. Shallow networks detect edges; deep networks detect semantic concepts. The depth is what gives the representations their power. And, critically, you cannot train a deep network by hand; you need backpropagation, which we get to next. --- ## 2. Training: the mountaineer in the fog (about 18 min) **Key points:**
- Weights start random. Predictions start random.
- We need a way to nudge the weights in the right direction, automatically.
- The loss function is a mountain landscape. Training is finding the lowest valley.
- Gradient descent is "always walk downhill".
- Backpropagation is the algorithm that assigns blame to each weight. > Alright. We have a neural network. Its weights are random. What does it predict? Random garbage. We show it an elephant, and with fifty percent probability the fox neuron fires louder. With fifty percent probability the elephant neuron fires louder. It has no idea. It is a random arithmetic machine.
>
> So how do we turn a random network into a useful one? We do what humans do with a new employee. We show it examples. We tell it the correct answer. And when it gets the answer wrong, we correct it. We nudge. Not "you are wrong, start over", but "you are slightly wrong, adjust in this direction". Thousands of times. Millions of times. Billions.
>
> The procedure has a name. It is called training. In English also called machine learning. The word "learning" is already anthropomorphic, so if you want the scientific word, it is "parameter optimization". Either works. I will say "training".
>
> Let me define the key quantity. We need a number that tells us how badly the network is doing. We call this number the loss. The English word is "loss function"; in French "fonction de coût". For a classification task, the loss is roughly "what fraction of the examples did the network get wrong". Low loss equals good network. High loss equals bad network. Our goal is: make the loss as small as possible by adjusting the weights.
>
> Here is the tricky part. The loss is a function of the weights. If you have two weights, weight A and weight B, then the loss is a function of A and B. You can plot it. Put A on the x-axis, B on the y-axis, loss on the z-axis. What do you get? [Figure 6, p. 23: the gradient-descent 3D landscape with "Départ", successive steps, the global minimum deep basin, a shallow local minimum aside.]
>
> You get a landscape. A three-D mountain range. Peaks are high-loss regions, places where the network performs badly. Valleys are low-loss regions, places where the network performs well. The deepest valley of all, somewhere on this landscape, is the global minimum. That is where we want to end up: the weights that minimize our errors.
>
> Now, the starting situation. We initialize the weights at random. So we land at a random point on this landscape. Typically some hillside, some shoulder, wherever luck places us. It is almost certainly nowhere near the deepest valley. Our job is to get from here to there.
>
> Why not just compute the location of the global minimum directly? Great question. Let's try. Imagine we put a grid on the landscape: twenty values of A, twenty values of B, that is four hundred combinations. We evaluate the loss at each of the four hundred points. We pick the lowest. Done. That works for a toy two-weight network.
>
> The problem is: a real network does not have two weights. A real network has a million. Or a billion. GPT-4 has more than a trillion. If we wanted to grid-search a one-million-weight network with ten values per weight, we would have ten to the power of one million combinations. Ten, then a million zeros. Compare: the number of atoms in the observable universe is ten to the eighty. So we could not even list the combinations, let alone evaluate them, even if we used every atom in the universe as a calculator. Brute force dies here. Dead.
>
> We need a smarter algorithm. And the smart algorithm is: walk downhill.
>
> Here is the analogy I use in the book. You are a mountaineer, lost in a snowstorm. Zero visibility. You cannot see the valley, you cannot see the map. But you have one tool: you can feel the slope of the ground under your feet. You can tell which direction is down. So what do you do? You take a step downhill. A small step. You reassess. You take another step downhill. And so on. It is not elegant, but it is simple, and if there is any valley within walking distance, you will end up in it.
>
> This algorithm has a name. It is called gradient descent. The "gradient" is the mathematical word for the slope at your current location. Formally: if the loss is a function of many variables, the gradient is the vector of partial derivatives, one per variable, pointing in the direction of steepest increase. We negate it, because we want to go down, not up. We multiply by a small number called the learning rate, which is the size of our step. We update all the weights at once. One step taken. Then we repeat. Hundreds of thousands of times.
>
> Now. Here is the subtle question that stumped researchers for twenty years. In a deep network, with many layers, you have this gradient, this slope, but the gradient is defined with respect to every single weight. If you have a million weights, you need a million partial derivatives. How do you compute them efficiently? Naively, you might think: for each weight, perturb it a tiny bit, see how the loss changes, and divide. That gives you one partial derivative. Do it a million times. But now every single training step requires a million forward passes through the network. Hopeless.
>
> The trick that unlocks the field is called backpropagation. The full name is "backpropagation of the gradient". It is the algorithm that allows you to compute all million partial derivatives in the cost of about two forward passes through the network. Yann LeCun published this for neural networks in the late 1980s, building on prior work by Rumelhart, Hinton, and Williams in 1986, and on earlier ideas going back to the 1960s. Geoff Hinton was the main popularizer. LeCun put it to work on handwritten digit recognition, at Bell Labs, reading postal codes on American bank checks. By the late 1990s, his system was processing ten to twenty percent of all checks cashed in the United States. Industrial deep learning, in production, twenty-five years ago.
>
> Let me try to give you the intuition for backpropagation without any formulas. The setup: we made a prediction, the prediction was wrong by a certain amount. Call that the error at the output. We want to answer the question: how much is each weight in the network responsible for that error? The closer a weight is to the output, the more directly it affects the output, so we can compute its responsibility first. Then we ask: those last-layer neurons, how did their own inputs affect them? The inputs to the last-layer neurons are the outputs of the next-to-last layer. So the responsibility flows backward, one layer at a time, from the output toward the input. Hence: back-propagation. Blame propagates backward. Each weight receives a share of the total blame. Then we adjust each weight by a small amount, proportional to its blame, in the direction that would reduce the error.
>
> In one sentence: backpropagation is the accountant who traces every cent of the output error back to the specific weights that caused it, so that we can correct them in proportion.
>
> This is why machine learning finally worked. Before backpropagation, we could not train deep networks, because we could not figure out which weights to adjust. With backpropagation, we can train networks of arbitrary depth in polynomial time. It is the unlock. The rest of deep learning is details, engineering, scale.
>
> Let me slow down one more time on this, because it is genuinely the most beautiful algorithm in the field, and most of you will leave the room not being able to say what it does. Think of a water pipe. The pipe has many branches, many valves. At one end, water enters. At the other, it exits. The amount of water exiting depends on how open each valve is. Suppose the output is too low. Which valves do I open? Well, the valves that directly feed the output matter most, obviously. Then the valves one branch back. Then two branches back. Each valve has a certain degree of "responsibility" for the final flow, depending on how much water flows through it and how sensitive downstream valves are to its setting. Backpropagation is the systematic procedure to compute that responsibility for every valve in the network at once. Once we know the responsibility, we nudge each valve open or closed in proportion. Water flow, corrected. In deep-network terms: error, reduced.
>
> The mathematics underlying backpropagation is the chain rule of calculus, which you may have seen in terminale. If y depends on u, and u depends on x, then the rate of change of y with respect to x is the product of the rate of change of y with respect to u and the rate of change of u with respect to x. Chain rule. Multiply the derivatives along the path. Backpropagation is just the chain rule, applied over and over, through all the layers of the network, efficiently. Nothing more, nothing less. The genius of Hinton, LeCun, and Rumelhart in 1986 was not inventing the chain rule. The chain rule is three hundred years old. Their genius was realizing that the chain rule, when applied with care to a neural network, gives you all the gradients you need in a single backward pass. Elegant. Efficient. Transformative.
>
> One practical point worth flagging. When you hear somebody talk about "auto-differentiation" or "autograd", they are talking about a software framework that automates backpropagation. PyTorch, TensorFlow, JAX: all of these are, at their core, autograd engines. You define the forward pass of your network, they automatically compute the backward pass for you. You do not need to derive gradients by hand. This is why we were able to write the whole MNIST training loop in ten lines: PyTorch hid the backpropagation inside one function call, `loss.backward()`. Before autograd, every new network architecture required a research paper to derive its gradients. Now it is a library call. That productivity multiplier is a huge part of why the field moves so fast today. --- ## 3. Live code: a network on MNIST from scratch (about 28 min) **Key points:**
- We build a two-layer network on MNIST (handwritten digits) in under fifty lines of PyTorch.
- We watch training happen: the loss falls, the accuracy climbs.
- We peek inside the trained network: what do the neurons detect? > Alright. Enough words. Let me show you. I will share my screen. What you see is Google Colab, a free Python notebook in the browser. No install. No setup. You all have laptops open; you can follow along at the URL I put in the chat. You have it? Good.
>
> We will use PyTorch, the main open-source deep-learning library. It was developed at Meta by a team that includes Yann LeCun's orbit. Meta open-sourced it. Every major AI lab uses it. It is free, mature, and short to write. You could also do all of this in pure NumPy, and I did once, as a sanity check; it is about three times as much code and ten times slower. We will use PyTorch, which hides the backpropagation inside a library call, and then we will peek under the hood.
>
> Let me start with the data. MNIST is the "Hello World" of deep learning. MNIST is a dataset of sixty thousand handwritten digits, each a 28-pixel-by-28-pixel grayscale image, along with the correct label, zero through nine. It was assembled from US Census Bureau forms and American high-school students in the 1990s. It is small enough to train on a laptop in a minute. Yann LeCun himself hosts it on his website.
>
> Code snippet one. Load the data.
>
> ```python
> import torch
> import torch.nn as nn
> from torch.utils.data import DataLoader
> from torchvision import datasets, transforms
>
> transform = transforms.ToTensor()
> train_set = datasets.MNIST(root="./data", train=True, download=True, transform=transform)
> test_set = datasets.MNIST(root="./data", train=False, download=True, transform=transform)
> train_loader = DataLoader(train_set, batch_size=64, shuffle=True)
> test_loader = DataLoader(test_set, batch_size=256)
> ```
>
> Five lines of setup. I run this. The download takes three seconds. What is on my screen now: a variable called train_set, which holds sixty thousand image-label pairs. Let me show you one.
>
> ```python
> import matplotlib.pyplot as plt
> image, label = train_set[0]
> plt.imshow(image[0], cmap="gray")
> plt.title(f"Label: {label}")
> plt.show()
> ```
>
> On screen: a blurry, grainy, hand-scrawled digit. Label: five. You can see it is a five, if you squint. This is one training example. We have sixty thousand of them.
>
> Snippet two. Define the network. This is the core moment.
>
> ```python
> class MLP(nn.Module):
> def __init__(self):
> super().__init__()
> self.flatten = nn.Flatten()
> self.layer1 = nn.Linear(28 * 28, 128)
> self.relu = nn.ReLU()
> self.layer2 = nn.Linear(128, 10)
>
> def forward(self, x):
> x = self.flatten(x)
> x = self.layer1(x)
> x = self.relu(x)
> x = self.layer2(x)
> return x
>
> model = MLP()
> ```
>
> Read what this says, in plain French: "my network takes a 28-by-28 image, flattens it into a list of 784 numbers, runs it through a first layer of 128 neurons with ReLU, then through a second layer of 10 neurons, one per digit, and returns those ten scores." That is the network. Two layers. Eight lines of code. The whole architecture fits on a Post-it.
>
> Let me count the weights, because this matters. Layer one: 784 inputs times 128 neurons equals 100,352 weights, plus 128 biases. Layer two: 128 inputs times 10 neurons equals 1,280 weights, plus 10 biases. Grand total: 101,770 parameters. A hundred thousand numbers. We are about to adjust every single one of them by gradient descent.
>
> For comparison, GPT-4 is rumored to have on the order of one and a half trillion parameters. So our little network is fifteen million times smaller than a frontier LLM. And yet, in about one minute of training, it will learn to read handwritten digits with ninety-seven percent accuracy. Keep that in mind: even a toy network is capable of something that, thirty years ago, was a serious research problem.
>
> Snippet three. Set up the training loop.
>
> ```python
> loss_fn = nn.CrossEntropyLoss()
> optimizer = torch.optim.SGD(model.parameters(), lr=0.05)
>
> for epoch in range(5):
> total_loss = 0.0
> for images, labels in train_loader:
> logits = model(images)
> loss = loss_fn(logits, labels)
> optimizer.zero_grad()
> loss.backward()
> optimizer.step()
> total_loss += loss.item()
> print(f"Epoch {epoch + 1}: average loss = {total_loss / len(train_loader):.4f}")
> ```
>
> Look at this. Every single concept we discussed is visible in this snippet.
>
> "loss_fn equals CrossEntropyLoss." This is our loss function. Cross-entropy is the standard loss for classification; you do not need to memorize its formula, but it punishes the network more severely when it is confidently wrong than when it is cautiously wrong.
>
> "optimizer equals SGD with learning rate point zero five." SGD stands for stochastic gradient descent. It is gradient descent, computed on a small random batch of examples at each step rather than the whole dataset. Cheaper per step. More noise. Works beautifully.
>
> Now the inner loop. For each batch of 64 images: compute the predictions (that is the forward pass), compute the loss, zero out the accumulated gradients, call loss dot backward, which is PyTorch's one-line backpropagation, then call optimizer dot step, which applies the gradient update to all parameters.
>
> Four lines. That is a training step. The whole algorithm we just discussed, packaged.
>
> Let me run it. On my screen, I hit shift-enter. The loss prints out epoch by epoch. Watch.
>
> Epoch 1: average loss equals zero point five four.
> Epoch 2: zero point two three.
> Epoch 3: zero point one eight.
> Epoch 4: zero point one five.
> Epoch 5: zero point one three.
>
> Five epochs. About one minute of wall-clock time on this laptop. Loss has dropped by a factor of four. This is gradient descent, doing its job, nudging those hundred thousand weights in the direction of smaller error, one batch at a time.
>
> Snippet four. Measure accuracy on the held-out test set.
>
> ```python
> model.eval()
> correct = 0
> total = 0
> with torch.no_grad():
> for images, labels in test_loader:
> logits = model(images)
> predicted = logits.argmax(dim=1)
> correct += (predicted == labels).sum().item()
> total += labels.size(0)
> print(f"Test accuracy: {correct / total:.3f}")
> ```
>
> I run it. Screen prints: "Test accuracy: zero point nine seven three". Ninety-seven point three percent. On test digits that the network has never seen in training. This is the real number. Not the training loss. The generalization score. We trained a network from literal random weights to ninety-seven percent accuracy on unseen handwritten digits, in one minute, on a free laptop, with sixty lines of code.
>
> Pause for a second and let that sink in. Thirty years ago, getting ninety-seven percent on MNIST was a publishable result. Today, it is a warm-up exercise for a Sciences Po class. This is what the compute-and-data explosion has given us. This is what Moore's law and the data avalanche bought us. Yann LeCun's team needed weeks of custom silicon for this. We do it over espresso.
>
> Now, the most beautiful part. Let me look inside the network. What did those hundred-and-twenty-eight hidden neurons learn? Let me pull out the weights of the first layer, and I will reshape them back into 28-by-28 images, one per neuron, and plot them.
>
> Snippet five. Visualize the first-layer weights.
>
> ```python
> import matplotlib.pyplot as plt
>
> weights = model.layer1.weight.detach().numpy()
> fig, axes = plt.subplots(8, 16, figsize=(16, 8))
> for i, ax in enumerate(axes.flat):
> ax.imshow(weights[i].reshape(28, 28), cmap="RdBu")
> ax.axis("off")
> plt.show()
> ```
>
> On screen: one hundred and twenty-eight little 28-by-28 squares. Red pixels mean positive weight, blue pixels mean negative weight. Each square is one neuron in the hidden layer. Each square tells you what shape that neuron is looking for in the input image. If the input matches the red pattern, the neuron fires strongly; if the input matches the blue pattern, it fires weakly.
>
> Look at the results. I am pointing at the screen. One of them is clearly a horizontal bar, red across the middle, blue above and below. That neuron has become a horizontal-stroke detector. Another looks like a loop in the top-left region: that is a "zero is in the top-left" detector, or something like a six-like curve. Another one is a diagonal line. Another one is a vertical bar with a dot at the top, like a one or a nine. Many look like noise at first glance, but they are not noise; they are more subtle features, blends that the network uses in combination with other neurons.
>
> Nobody told the network "please specialize into a diagonal-line detector". It got there on its own, by gradient descent, because the diagonal detector is useful for distinguishing, say, ones from sevens. Specialization emerged. This is the core magic of deep learning: give the network a simple objective (reduce loss) and a lot of examples, and internally it will decompose the problem into useful sub-features, without ever being told what those sub-features should be. Rosenblatt guessed this in the fifties. LeCun proved it in the nineties. Today it is routine.
>
> One more demonstration. Let me show you an internal visualization that 3Blue1Brown, a YouTube channel I cannot recommend strongly enough, made famous. [TensorFlow Playground, at playground.tensorflow.org.] Go to your browser right now. playground.tensorflow.org. It is a tiny web app that lets you train a neural network in your browser, on a two-dimensional toy problem, with a slider for the number of layers, a slider for the number of neurons, a button for ReLU or tanh activation, and a big orange "play" button.
>
> Pick the spiral dataset. Two interlocked spirals, one blue, one orange. The task: given a point in the plane, predict which spiral it belongs to. It is a hard problem for a linear classifier, impossible for one neuron alone. Now add three hidden layers of eight neurons each. Press play. On screen, you see the loss fall, the decision boundary warp, the neurons specialize. The individual neuron panels show what each one has learned: diagonal cuts, radial cuts, curved cuts. The final output boundary perfectly separates the two spirals. In your browser. In thirty seconds. Without one line of code.
>
> This is what I want you to keep on your phone for the rest of your life: playground.tensorflow.org. Every time somebody tells you neural networks are incomprehensible black boxes, pull this up. They are not. You can watch them think, in real time, on a two-dimensional problem. That intuition scales. When GPT-4 is solving a math problem, under the hood, it is still doing weighted sums and ReLUs, and still specializing neurons into useful features. Bigger, deeper, more subtle features, but the same principle.
>
> One last experiment before we move on. Let me show you what happens when we give the network a much harder task. Instead of classifying ten digits, let me try to train the same network on something called CIFAR-10: small color photos of planes, cars, birds, cats, deer, dogs, frogs, horses, ships, and trucks. Sixty thousand of them, thirty-two by thirty-two pixels. Harder than MNIST because the images are in color, the objects move around in the frame, the lighting varies, and real-world texture is more complicated than a handwritten digit. If I run the exact same little MLP on CIFAR-10 with a training loop otherwise identical, I get around fifty percent accuracy. Better than random (ten percent), far worse than human (around ninety-four percent). The simple MLP is not enough.
>
> To solve CIFAR-10 well, you need a specialized architecture called a convolutional neural network, or CNN. CNNs use a special kind of neuron that looks only at a small patch of the input, and the same neuron slides across the whole image, detecting the same feature wherever it appears. This translation invariance is crucial for images: a cat in the top-left corner of a photo should be recognized just like a cat in the bottom-right corner. LeCun invented CNNs in the late 1980s, for exactly this reason. CNNs are what won ImageNet in 2012. They are what made Tesla's autopilot possible. They are what allow your phone to recognize faces. Same ingredients, weighted sums and ReLUs, but wired in a way that matches the structure of images.
>
> We are not going to code a CNN today, because we have a lot more ground to cover. But I want you to know the name, because you will hear it: CNN, convolutional neural network. Specialized for images. Stacks convolution layers, then classifies. LeCun's baby. The ancestor of most computer-vision systems deployed in industry. OK, bookmark it, move on. --- ## 4. Training versus inference: the cake recipe (about 6 min) **Key points:**
- Training is a different phase from using the model.
- Training is expensive, slow, done once.
- Inference is cheap, fast, done billions of times. > Let me introduce a distinction that will come back many times in this course. It is the distinction between training and inference.
>
> [Figure 5, p. 21: three boxes showing Training, the frozen weights, and Inference usage.]
>
> Think of a cake recipe. There is the phase where the chef develops the recipe. She bakes ten, twenty, a hundred cakes. She tastes them. She adjusts the flour, the butter, the sugar, the oven temperature. She iterates until she finds a recipe that reliably produces a delicious cake. That is training. Long, expensive, full of failed attempts, and done once.
>
> Then there is the phase where, every Sunday, she bakes one cake using the finalized recipe. Pour the ingredients, follow the steps, cake comes out. That is inference. Fast. Cheap. Done a thousand times after the recipe is set.
>
> For a neural network, training means: feed the network millions or billions of examples, compute the gradient, adjust the weights, repeat. For a frontier model, training lasts weeks to months, uses tens of thousands of H100 GPUs, consumes as much electricity as a French département, costs anywhere from ten million to half a billion dollars. At the end, you have a file. The weights. Decimals. A hundred gigabytes for a big model. This file is what you distribute.
>
> Inference means: load the weights, give it one input, compute the output. One forward pass through the network. No gradient, no backpropagation, no adjustment. For one question to ChatGPT, inference takes a few seconds and uses maybe one GPU for those seconds. Cost: a fraction of a cent. Scale that up to a billion queries per day, and you get the actual economic picture of an LLM company: the training cost is sunk, then inference is what they sell.
>
> Why does this matter for you? Two reasons. One, a model's "knowledge" is frozen at its training cutoff. If GPT-4 was trained on data up to April 2023, it does not "know" anything that happened in May 2023 unless you tell it in your prompt. Retraining is too expensive to do every day. Two, the entire economics of the AI industry, and the geopolitics of chip supply, flows from this training-inference gap. Training needs the best chips, in massive clusters, with reliable power. Inference is lighter, distributable, runs on commodity hardware. When you read about Nvidia selling H100s to the US hyperscalers, it is the training market. When you read about Apple, Qualcomm, or AMD putting AI chips in phones and laptops, it is the inference market. Two very different businesses. --- ## 5. Why did this take fifty years? The role of data and compute (about 10 min) **Key points:**
- The idea of the neuron is from the 1940s. Backprop for neural networks is from the 1980s. Why did it take until 2012 for deep learning to take over?
- Moore's law delivered a billion-fold increase in compute. The internet delivered petabytes of training data. Both were needed.
- The "bitter lesson" of Richard Sutton: compute and data beat cleverness. > We have this beautiful algorithm. Gradient descent plus backpropagation. LeCun had it running in production on postal codes in 1998. Why did deep learning not take over the world in 1998? Why did we have to wait until 2012, 2017, 2022?
>
> Three reasons. Compute, data, and scientific stubbornness.
>
> Compute first. In 1965, Gordon Moore, later CEO of Intel, noticed that the number of transistors on a chip was doubling roughly every two years. He published a short memo. That doubling has held, with some slowdowns and reformulations, for sixty years. Between 1900 and 2020, the compute power you could buy for one dollar multiplied by a factor of ten to the eighteenth. Ten, with eighteen zeros. That is almost exactly the number of grains of wheat in the old Indian chessboard fable: one grain on square one, two on square two, four, eight, doubling every square, up to the sixty-fourth. Two to the sixty-fourth is about ten to the nineteenth. More grains than six Earths' worth of biomass. That is the magnitude of the compute explosion over one century.
>
> An LLM today, at training time, consumes as much electricity in a single run as a mid-sized French département uses in a month. That is not a metaphor. That is a fact. It requires tens of thousands of NVIDIA H100 GPUs running non-stop for weeks. Each H100 costs thirty thousand dollars. The full training of GPT-4 reportedly cost somewhere north of a hundred million dollars. Grok 4 reportedly cost half a billion dollars. These are not garage projects. They are industrial operations, carried out in dedicated data centers with their own substations.
>
> Second, data. A neural network learns from examples. Lots of examples. Image networks, like Yann LeCun's convnet, needed thousands. Then tens of thousands. Then millions. Today's LLMs are trained on something like fifteen trillion subwords, roughly twelve trillion words, roughly the entire readable Internet plus several million digitized books. This corpus did not exist in 1998. You could not assemble twelve trillion words in 1998, because twelve trillion words had not been written down in digital form. The Internet had to grow up, people had to blog, Wikipedia had to exist, forums had to fill up, before the training data for an LLM could be collected.
>
> Third, scientific stubbornness. Most of the AI community, from about 1990 to 2010, believed that neural networks were a dead end. They called the rival camp, led by LeCun, Hinton, and Bengio, the "deep learning conspiracy". Hinton's papers were getting rejected from NeurIPS. LeCun was a curiosity. Bengio was in Montréal, which was not yet a hot place. The symbolic approach, GOFAI, support vector machines, decision trees: these were the respectable research agendas. Neural networks were for cranks.
>
> What turned the tide was a benchmark. Specifically, ImageNet, built by Fei-Fei Li at Stanford. Twelve million labeled images in twenty-two thousand categories. A brutal test. Every year, researchers submitted their best classifier, and the one with the lowest error rate won. In 2012, at the European Conference on Computer Vision, a young student of Hinton's, Alex Krizhevsky, walked into a packed room, in front of Fei-Fei Li herself, and announced: "My neural network has cut the error rate in half."
>
> Not ten percent better. Not twenty percent. Halved. From around twenty-six percent error down to fifteen percent. In one year. With a deep convolutional network trained on two GPUs in his bedroom.
>
> That moment, September 2012, is when deep learning won. In the following two years, every image-classification team in the world converted. By 2015, nobody used the old methods anymore. By 2016, AlphaGo beat Lee Sedol at Go. By 2017, Transformers were published. By 2022, ChatGPT. The cascade was rapid.
>
> Richard Sutton, the computer scientist who, by the way, received the Turing Award in 2024 for his work on reinforcement learning, wrote an essay in 2019 called "The Bitter Lesson". It is four pages long. I recommend it. Sutton's argument: for seventy years, AI researchers have repeatedly tried to build in human knowledge, hand-designed features, clever heuristics. And for seventy years, the methods that won in the end were the ones that threw away the hand-design and used raw compute and raw data. Chess: hand-designed heuristics lost to Deep Blue's brute search. Go: same story, AlphaGo. Translation: hand-designed grammars lost to neural sequence models. Image recognition: hand-designed features lost to convnets. Speech: same. Protein folding: same. Over and over, compute wins.
>
> Why "bitter"? Because it is humbling. It tells us that the hard-earned knowledge we accumulated by introspection, the careful rules and clever tricks, mostly did not matter. The dumb scale-up did. Sutton writes: "We have to learn the bitter lesson that building in how we think we think does not work in the long run." A brutal sentence. Some researchers hate it. Most agree, reluctantly.
>
> So: why did deep learning take off now and not in 1998? Because we finally had the compute and the data. And once we had them, the simplest, most brute-force method won. Rosenblatt was right, sixty years early. LeCun was right, twenty-five years early. The bitter lesson is that you need to be right AND on time. AI is the field where timing and scale overtake cleverness.
>
> There is a corollary here that matters for France and for Europe. If compute is the fundamental ingredient, then whoever controls compute controls AI. Today, almost all frontier AI training runs on NVIDIA GPUs. NVIDIA is an American company. The GPUs are designed in California and fabricated in Taiwan, by TSMC, using lithography machines made by ASML in the Netherlands. Three countries (US, Taiwan, Netherlands), four companies (NVIDIA, TSMC, ASML, plus some upstream names), control essentially the entire global supply of high-end AI chips. France: zero. The European Union: basically zero, except for ASML, which is a genuine crown jewel. This is a strategic situation we will come back to in Session 3. For now, just note: the bitter lesson implies that who owns the fab, owns the future. France needs to be very thoughtful about where it positions itself.
>
> Two more historical notes, because they are fun and telling. First, Gordon Moore, who predicted the doubling, only lived to see ten doublings before the pattern started to stretch. He died in 2023. The law is outliving the man. Second, when Jensen Huang, the CEO of NVIDIA, gave a talk in 2019, he said something prescient: "Moore's law is dead, but GPU performance is doubling faster than Moore's law ever did, because we are scaling across three dimensions at once: silicon, architecture, and software." He was right. From 2012 to 2024, the effective compute available for deep-learning training has grown by roughly ten orders of magnitude, faster than traditional transistor scaling. Part of that is better chips. Part is better algorithms. Part is better parallelism. Part is eye-watering capital expenditure. All of it compounds. None of it is slowing down. --- ## 6. Good learning and bad learning: overfitting, underfitting, Occam's razor (about 9 min) **Key points:**
- A neural network can memorize the training set and fail on new data. That's overfitting.
- Or it can under-learn and fail on everything. That's underfitting.
- The sweet spot is generalization: learning the pattern, not the examples.
- Occam's razor: prefer the simplest model that fits. Regularization is Occam's razor, operationalized. > Before we leave the vision world and move to language, I want to walk through one last concept, because it shows up everywhere and misunderstanding it causes a lot of real-world AI failures.
>
> The question is: can a neural network learn badly?
>
> Yes, in two opposite ways. Let me walk through the book's "France" example. [Figure 7, p. 28: 3000 random points with latitude and longitude, red if the point is in France, blue if not.]
>
> Imagine we want to train a network to answer one question: given a pair of coordinates (latitude, longitude), is this point in France, yes or no? The training data is three thousand random points, each labeled red (in France) or blue (outside France). Simple task.
>
> We train a network. We plot its predictions on all coordinates in a big rectangle covering Western Europe. What do we see? Three things can happen.
>
> [Figure 8A, p. 29: underfitting, a smooth blurry surface.] Case A: the network is too small, or trained too briefly. The prediction surface is a broad smooth blob that vaguely covers France but does not hug the shape. The hexagon is not a hexagon. Brittany disappears. The network has captured only the crudest pattern. This is underfitting. The network does not have enough capacity, or did not train long enough, to learn the real shape.
>
> [Figure 8B, p. 30: overfitting, a spiky jagged surface.] Case B: the network is huge, or trained too long. The prediction surface is a forest of spikes. Every single training point is memorized exactly, but between training points, the prediction is chaotic. A point in the middle of France, one meter from a blue training point, might be predicted blue. The network has memorized the training set like a student who wrote crib notes for the exam. This is overfitting. The network has enough capacity to memorize, so it memorizes, and generalization fails.
>
> [Figure 8C, p. 30: satisfactory prediction.] Case C: the network is sized just right, trained just enough. The prediction surface is a clean, blocky, France-like shape. It hugs the actual borders. It generalizes to new points it has never seen. This is what we want. This is good learning.
>
> The question for every practitioner is: how do I land in case C, not A, not B? There is no clean formula. There are three tools.
>
> Tool one: more data. The more training examples you have, the harder it is to memorize them, and the more the network has to extract general patterns. When you give a network sixty thousand MNIST digits, it cannot memorize each one; it has to learn shape primitives. When you give it sixty, it memorizes, and fails on unseen digits.
>
> Tool two: regularization. This is a direct application of Occam's razor. William of Ockham, 14th-century Franciscan friar: "Pluralitas non est ponenda sine necessitate". Do not multiply entities without necessity. The simplest theory that fits the facts is probably the right one. Bertrand Russell called it the supreme methodological maxim in philosophy.
>
> In neural networks, regularization is: during training, we add a small penalty on the magnitude of the weights. We nudge every weight slightly toward zero. Weights that are useful grow anyway, because they help reduce the main loss. Weights that are not useful shrink to zero, effectively disconnecting themselves. The network auto-prunes. It ends up leaner, simpler, and, it turns out, better at generalizing. Occam's razor, implemented as a line of code. And it empirically works.
>
> Tool three: validation split. You split your data into training and validation. You train on training, you measure performance on validation. When validation performance stops improving, you stop training. This is called early stopping. It prevents overfitting: you stop before the network starts memorizing.
>
> Einstein, who had an opinion on almost everything, said: "Everything should be made as simple as possible, but not simpler". This is the overfitting-underfitting knife edge in one sentence. Find the simplest model that actually fits the problem.
>
> Why does this matter for you? Two reasons. One, if you ever deploy an AI model in the wild, you need to check whether its training performance and its real-world performance are in the same neighborhood. If they are not, you have overfit, and your deployment will fail. Two, the entire field of modern LLM evaluation is a fight against overfitting. When a company claims its new model scores ninety-five percent on benchmark X, your first question should be: was benchmark X in the training data? If yes, the model has memorized it, and the score is meaningless. This is called "contamination", and it is a major reason to be skeptical of company-reported benchmark numbers without independent verification.
>
> Let me give you a concrete example. In 2024, researchers showed that several frontier LLMs, when asked to solve math problems from the AIME competition (the American Invitational Mathematics Examination), solved the 2023 version much better than the 2024 version, even though the two versions are of comparable difficulty. Why? Because the 2023 problems were on the Internet by the time the models were trained, and the 2024 problems were not yet. The model had memorized 2023, and reasoned from scratch on 2024. The gap was twenty to thirty percentage points. That gap is the contamination effect. When you see a press release claiming "our new model scored ninety-four percent on MATH benchmark", ask whether the model has seen the answers during training. Almost always, the honest answer is "probably, at least partly". Real out-of-distribution evaluation is a very active research frontier.
>
> Good learning, bad learning: the balance is everything. The irony is that the models we love most, the GPT-4s and Claudes and Geminis, are gigantic (hundreds of billions of parameters) and trained on essentially all the text ever written. By the logic of the France example, they should be overfitting catastrophically. But they are not. Why? Because the ratio of data to parameters, even at huge scale, remains favorable: there are so many patterns in the training corpus that the model cannot memorize everything; it has to generalize. Also, regularization techniques (dropout, weight decay, early stopping) are baked in. The models straddle the knife edge surprisingly well. But let your training data shrink, or let your model grow disproportionately, and you fall off the edge into overfitting, fast. --- ## 7. Midpoint transition > We now switch modalities. We leave images behind. We move to text. Word2vec, the king-queen analogy, attention, Transformers, Decoders, LLMs. Same arithmetic, different inputs, same result: neural networks discovering structure on their own. --- ## 8. From pixels to words: Word2vec and the birth of meaning (about 15 min) **Key points:**
- Neural networks only eat numbers. Text has to be turned into numbers.
- Word2vec, 2013, represents each word as a vector of a few hundred numbers.
- Those vectors encode meaning: king minus man plus woman equals queen.
- Nobody programmed this. Training discovered it. > We have done images. Now we do text. Different modality, same ideas, with one twist.
>
> Here is the problem. A neural network eats numbers. An image is natively numbers: each pixel is a brightness value between zero and one. Easy. But a word is not a number. "King" is not a number. "Chien" is not a number. If I want to feed text to a network, I need a way to turn each word into numbers.
>
> First attempt, naive. Give each word an ID. "Apple" is one. "Banana" is two. "Cat" is three. The network gets sequences of IDs. Problem: apple, banana, and cat are closer semantically (all are everyday nouns, two are fruits) than apple and, say, "xylophone" (word 13,942). But one and two are closer numerically than one and 13,942. The numeric closeness has nothing to do with the semantic closeness. The IDs are arbitrary, and the network has no way to tell that apple and banana belong together.
>
> So we need something cleverer. We need word representations where semantic closeness corresponds to numeric closeness. A representation where "cat" and "dog" are nearby numbers because they are nearby concepts.
>
> The breakthrough came in 2013, from a team at Google led by Tomas Mikolov. The paper is called "Efficient Estimation of Word Representations in Vector Space". The model is called Word2vec. You can read it at arxiv dot org, reference 1301.3781. I will put the link in the sources at the end of today's slides. If you read exactly one AI paper this semester, read this one. It is eight pages. It is accessible. And it gave the world its first real sense that neural networks do not just memorize; they discover structure.
>
> Here is the idea. Represent each word as a vector of, say, three hundred numbers. A vector is a list of numbers in a fixed order. You can think of it as a point in a three-hundred-dimensional space. In three dimensions, a vector with coordinates x, y, z is a point in the room. In three hundred dimensions, you cannot visualize it, but the math is the same: positions of points, distances between them, directions from one to another.
>
> The three hundred numbers for each word are not chosen by hand. They are learned, by training a neural network on a simple task: given a word, predict the surrounding words in a real sentence. That is the entire training objective. "I drank a cup of blank" and the network is asked to predict the word. It sees "coffee" and "tea" a lot. So it learns that "coffee" and "tea" are likely fillers here. If it learns this well, then the representations of "coffee" and "tea" will end up near each other in the 300-dimensional space. Because the training pressure is: words with similar contexts should get similar representations, since they cause the same predictions.
>
> So you train a neural network on a few billion words of English text: Wikipedia, Google News, web pages. Out pops a representation: one vector per word, in a 300-dimensional space.
>
> Now, here is the discovery that shocked the researchers themselves. Not expected. Not engineered. Pure emergence.
>
> Once you have these vectors, you can do arithmetic with them. Literally: vector plus vector, vector minus vector, component by component. Take the vector for "king". Subtract the vector for "man". Add the vector for "woman". What do you get?
>
> You get a vector very close to the vector for "queen".
>
> I will repeat, because it is extraordinary: king minus man plus woman equals queen. In vector arithmetic. Mechanical. Not a metaphor.
>
> The book gives a four-dimensional toy example. Take "chiot" (puppy) as a vector with 0.0 on the feminine axis, 1.0 on the animal axis, 0.1 on the old axis, 0.3 on the fast axis. Take "doyenne" (elderly woman) as 1.0, 0.0, 0.9, 0.1 on those same four axes. You can now do doyenne minus chiot, and you get 1.0, minus 1.0, 0.8, minus 0.2. That difference vector captures, roughly, "become human, become old". That arithmetic extends to real three-hundred-dimensional vectors trained on real text, and yes, in the real space, king minus man plus woman really lands almost exactly on queen.
>
> Paris minus France plus Germany lands near Berlin. Big minus bigger plus small lands near smaller. Walking minus walked plus swum lands near swimming. Plural-singular, present-past, country-capital, gender, comparative: all of these show up as consistent directions in the 300-dimensional space. Nobody told the network about grammar, or geography, or morphology. It extracted them from the statistics of word co-occurrence in a few billion sentences. By doing a simple prediction task, it built a semantic map of the English language.
>
> Pause on this. Before 2013, when you asked a computer scientist "does the machine understand?", the honest answer was: no, the machine pushes symbols around, it has no internal model. After 2013, the honest answer became: there is something in there that behaves as if it were a semantic map. The machine has not suddenly become conscious. But it has developed an internal representation of meaning that obeys mathematical operations matching conceptual operations. That is not nothing. That is a massive philosophical development, and the field did not take it as seriously as it should have, at the time.
>
> Think of the vector space like a dictionary of meanings, but a dictionary where the definition of each word is its position relative to all other words. If you want to know what "happy" means, you do not look up a sentence; you look up a 300-number coordinate, and you compare it to the coordinates of "sad", "joyful", "content", "miserable". The geometric relationships reveal the semantics. The map is the meaning.
>
> For a Sciences Po audience, I want to flag a second observation that is both fascinating and troubling. Word2vec discovered, along with all the clean analogies about geography and grammar, several ugly ones. "Doctor minus man plus woman" gave, depending on the corpus, "nurse". "Engineer minus man plus woman" sometimes gave "homemaker". "Programmer minus man plus woman" sometimes gave "secretary". The model absorbed, from its training corpus of real human text, the gender biases embedded in that text. It did not invent sexism. It reflected it. These findings were published, and they triggered a whole subfield of "debiasing" research: how do we remove unwanted associations from the vector space while keeping the useful ones? The issue is non-trivial, because the associations are entangled. You cannot easily remove "nurse" from the feminine direction without also removing "midwife", which may be appropriate. The models inherit the statistics of their training data, for better and for worse. And that is a pattern that continues today, at much larger scale, with LLMs. Every bias in the Internet, the models internalize. A lot of responsible-AI work goes into measuring and mitigating this. It will never be a solved problem, because the biases are the statistics, and the statistics are the data. Something to be aware of, politically and technically. --- ## 9. Live code: playing with Word2vec embeddings (about 12 min) **Key points:**
- We load pre-trained Word2vec vectors.
- We compute analogies live.
- We look at word neighborhoods. > OK. Back to Colab. Different notebook. Let me show you how to play with Word2vec embeddings in about ten lines.
>
> Snippet six. Load the pre-trained vectors.
>
> ```python
> import gensim.downloader as api
> model = api.load("word2vec-google-news-300")
> print(model.vector_size)
> print(len(model.key_to_index))
> ```
>
> This downloads the Google-News-pretrained Word2vec: three million English words and phrases, three hundred dimensions per vector. Takes about a minute. On screen: 300 (the vector dimension), and 3000000 (number of vocabulary entries). Three million words, each represented as a three-hundred-dimensional vector, all sitting in memory, ready to do math.
>
> Snippet seven. The classic analogy.
>
> ```python
> result = model.most_similar(positive=["king", "woman"], negative=["man"], topn=3)
> for word, score in result:
> print(f"{word}: {score:.3f}")
> ```
>
> I run it. On screen:
>
> queen: 0.712
> monarch: 0.619
> princess: 0.590
>
> Queen. First hit. Similarity score zero point seven one. The model has computed: king vector, plus woman vector, minus man vector, then searched the entire three-million-word vocabulary for the vector closest to that arithmetic result. The closest vector, of three million, is "queen". Then monarch, then princess. The algorithm does not know what royalty is. It does not know what gender is. It only knows which words appeared near which other words in three billion sentences of Google News. Out of that statistical cloud, an arithmetic of meaning emerged.
>
> Let me try a couple more. Snippet eight.
>
> ```python
> def analogy(a, b, c):
> result = model.most_similar(positive=[b, c], negative=[a], topn=1)
> return result[0]
>
> print(analogy("Paris", "France", "Germany"))
> print(analogy("walking", "walked", "swimming"))
> print(analogy("good", "better", "bad"))
> print(analogy("Tokyo", "Japan", "Brazil"))
> ```
>
> Results on screen:
>
> Berlin, 0.62.
> Swam, 0.67.
> Worse, 0.71.
> Brasilia, 0.58.
>
> Every single one lands on the correct answer. Capital of Germany. Past tense of swim. Comparative of bad. Capital of Brazil. This is from word co-occurrence, nothing else. One short neural network, trained on text, discovered geography, grammar, and comparatives, because consistent patterns in those relations produce consistent directions in vector space.
>
> Let me show you the neighborhoods of individual words, for fun.
>
> Snippet nine.
>
> ```python
> for word in ["Paris", "coffee", "democracy", "computer"]:
> print(word, "->")
> for neighbor, score in model.most_similar(word, topn=5):
> print(f" {neighbor}: {score:.3f}")
> ```
>
> On screen: for "Paris", we see "Lyon", "Marseille", "Bordeaux", "Toulouse", "French". For "coffee", we see "tea", "espresso", "cappuccino", "latte", "brewed". For "democracy", we see "liberal democracy", "democratization", "democratic", "autocracy", "authoritarianism". For "computer", we see "computers", "laptop", "PC", "workstation", "hardware".
>
> These are not hand-curated lists. These are automatic: whoever is closest in the three-hundred-dimensional space. And they are exactly what a dictionary of associated terms would give you. Again: the network discovered these associations by reading text and doing prediction. No one told it Lyon was a French city. It extracted it from statistical patterns.
>
> Here is the deeper point I want to land. The meaning of a word, in this framework, is encoded in its relationships with all other words. Not in a definition. In a position in a space. And that position was learned by predicting context.
>
> This is the critical scientific idea that unlocks modern language models. It is called the distributional hypothesis: "a word is characterized by the company it keeps", a line by the British linguist J. R. Firth, 1957. Firth was right. Sixty years later, Mikolov's team made it work, at scale, with neural networks. Once you have this, you can feed words into deep networks. You can translate. You can classify. You can summarize. All the downstream language-processing tasks become approachable.
>
> But there is still one more ingredient missing. Word2vec gives you word meanings in isolation. A word has one fixed vector, no matter the sentence. That does not work for cases where meaning depends on context. The word "bank" in "river bank" and "bank" in "savings bank" has the same Word2vec vector, which is obviously wrong. We need a mechanism that gives each occurrence of a word its own context-aware vector. That mechanism is attention. --- ## 10. The attention mechanism: a committee of experts (about 15 min) **Key points:**
- Word2vec gives one fixed vector per word. But "bank" in "river bank" and "bank" in "savings bank" should be different.
- Context-dependent representations need dynamic computation between words.
- Attention is a mechanism where each word queries all other words and pulls in their meaning, weighted by relevance.
- Transformers stack attention layers. 2017, Vaswani et al., "Attention is all you need". > Here is the problem, sharpened. We have word vectors. Each word has a fixed meaning vector. But a word's meaning depends on context. The word "bank" in "I sat on the bank of the river" means something completely different from the word "bank" in "I deposited money at the bank". Same string of letters, different concepts. A Word2vec vector cannot tell them apart.
>
> What we need is a mechanism that, given a sentence, computes a context-dependent representation for each word: a vector that reflects not just the word in isolation but the word as it sits in this particular sentence surrounded by these particular other words.
>
> The mechanism that solves this is called attention.
>
> Here is the analogy I find most useful: attention is a committee of experts. Imagine you are writing a sentence, word by word. For each word you write, you consult the committee. Each committee member is another word in the sentence so far. When you are writing a particular word, say a verb, you do not listen to all committee members equally. You listen more to the subject (who is doing the action?), you listen some to the object (what is being acted upon?), and you ignore a lot of filler. You weight the committee members by how relevant they are to the current decision.
>
> Attention is the same thing, automated and vectorized. For each word in a sentence, the mechanism looks at all other words, computes a relevance weight for each, and takes a weighted average of their representations. That weighted average becomes the context-enriched representation of the current word.
>
> Let me be a tiny bit more concrete. For each word, attention produces three little vectors: a query vector, a key vector, and a value vector. All three are derived from the word's input vector by small linear transformations, that is, by multiplying by learned matrices. For word A to "pay attention to" word B, you take A's query and dot it with B's key. If they align, the dot product is large; if they do not align, it is small. You do this for every pair of words. You normalize the dot products into weights that sum to one, using a function called softmax, which you can think of as a "soft argmax" that picks the most similar keys but allows partial blending. Then you take a weighted sum of the value vectors, weighted by those attention scores. Output: a new context-aware vector for word A.
>
> That's attention. One layer.
>
> Now, the magic: you stack many attention layers on top of each other, and you use many "heads" in parallel within each layer, meaning several committees running at once, each specializing in a different kind of relevance: one head for syntactic dependencies, another for semantic associations, another for long-range references. Stack six, twelve, fifty, one hundred of these layers, and you get a Transformer.
>
> The seminal paper is "Attention Is All You Need", 2017, by a team at Google Brain led by Ashish Vaswani and including Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan Gomez, Lukasz Kaiser, and Illia Polosukhin. You can read it at arxiv dot org, reference 1706.03762. I will put the link in today's sources. This paper is, in my opinion, the most influential AI paper of the twenty-first century. It has been cited over one hundred thousand times. That is roughly the citation count of Stephen Hawking's entire academic output. One paper. Fifteen pages. Eight authors. Changed everything.
>
> Why? Because the Transformer architecture had two properties that made it the right platform for scaling. One, it allowed parallel processing across all positions in a sequence at once, unlike the previous architecture (the recurrent neural network) which had to process tokens one at a time. Parallel equals fast on a GPU. Ten to a hundred times faster training. Two, it handled long-range dependencies gracefully: a word can attend to any other word in the context, not just its immediate neighbors. So a pronoun in the last sentence of a paragraph can pull meaning from a noun in the first sentence. This is how models do long-form reasoning.
>
> Three years after Vaswani et al., we got GPT-3. Five years after, ChatGPT. Seven years after, we are training frontier models with trillions of parameters, thousand-page context windows, real agentic behavior. All on the same basic skeleton that eight authors sketched in 2017.
>
> Let me give you one more way to think about attention, because the committee-of-experts analogy is only one way in. Another way is: attention is a routing mechanism. Information flows through a Transformer, and at each layer, attention decides, for every token, "which other tokens do I pull information from?" The answer is learned. The answer depends on the token and its context. One layer might route pronouns to their referents (the word "she" pulling information from "Marie" three sentences earlier). Another layer might route adjectives to nouns. Another might route verbs to subjects. Another might route question words to answer-like words in the context. Nobody specifies what each layer should do. Training discovers it. And in practice, when you look inside a trained Transformer, you find that different attention heads in different layers have learned very different routing patterns, some of them interpretable (syntactic roles, coreference), some of them not obviously interpretable at all. This is the current state of interpretability research: we can name maybe ten percent of the routing patterns in a frontier model. The rest is doing useful work that we cannot yet explain.
>
> Anthropic, where I am also an investor and friend of several researchers, has been doing remarkable work on this. In 2024 they published results using a technique called sparse autoencoders to extract interpretable "features" from inside Claude 3 Sonnet. They found concept detectors for "Golden Gate Bridge", "scientific skepticism", "inner conflict", "tourist attractions in San Francisco". They could even turn these concepts up or down at inference time, like a volume knob, and watch the model's behavior shift. Turn up the Golden Gate Bridge feature, and Claude starts thinking of itself as the bridge, mentioning it constantly, getting confused when asked about other things. A very funny demo, but also a scientific milestone: the first large-scale catalog of what frontier LLMs actually represent internally.
>
> Dario Amodei, CEO of Anthropic, put it sharply: "Generative AI systems are grown more than they are built, their internal mechanisms are 'emergent' rather than directly designed" ([*The Urgency of Interpretability*](https://www.darioamodei.com/post/the-urgency-of-interpretability), April 2025). That reframes everything: at today's scale, a neural net is less an object that engineers construct than a biological tissue that researchers cultivate. We fix the architecture, we choose the data, we press "go" on the training run, and billions of weights settle into a configuration that no human wrote and no human fully understands. Which is exactly why interpretability is hard: we did not design the wiring, we watched it form.
>
> Interpretability is where the really important research is happening right now, because until we can understand what these models represent, we cannot safely deploy them in high-stakes contexts.
>
> Let me put this in perspective. The neuron: Rosenblatt, 1958. Backpropagation for neural networks: Rumelhart-Hinton-Williams, 1986. Convolutional networks: LeCun, late 1980s. Word2vec: Mikolov, 2013. Attention: Bahdanau-Cho-Bengio, 2014. Transformers: Vaswani et al., 2017. GPT: OpenAI, 2018. GPT-3: 2020. ChatGPT: November 2022. That is the timeline. Six major ideas, over sixty years, each one building on the previous. AI is not a sudden discovery. It is a stack of ideas, slowly assembled. The stack is now tall enough to produce systems that seem to understand. But nothing about today violates physics or breaks from the prior layers. It is the same arithmetic we drew on the board at the start of this class, times a trillion. --- ## 11. The Decoder: how a language model generates text (about 10 min) **Key points:**
- The Decoder is a Transformer variant specialized for text generation.
- At inference, it generates one token at a time. Reads the prompt, predicts next token, appends, repeats.
- Training is self-supervised: predict the next token on huge text corpora.
- The "Comment vas-tu ?" example shows the mechanic. > The Decoder architecture, introduced as a variant of Transformer, is what powers today's language models: GPT, Claude, Gemini, Llama. All of them. Decoder-only is the architecture of choice in 2024 through 2026. Let me walk through how it generates text.
>
> [Figure 9, p. 36: the "Comment vas-tu ?" decoding diagram, step by step.]
>
> Input: a prompt. Let's use the book's example: "Comment vas-tu ?". The user types this. The first thing the model does is tokenize it. Tokenization means cutting the string into small pieces called tokens, or in French sous-mots, each of which is mapped to an integer ID from the model's vocabulary (usually around fifty to one hundred thousand tokens in the vocabulary). So "Comment vas-tu ?" might become the sequence of tokens, using bars to separate them: Com, bar, ment, bar, vas, bar, dash, bar, tu, bar, question-mark. Six or seven tokens, depending on the tokenizer. Each has an integer ID. Each ID is then converted to an embedding vector: a Word2vec-like representation, learned during training.
>
> These vectors are fed into the Transformer. It runs its attention layers. At the very end, it produces one vector for each input token, but we only care about the last one: the vector that represents the question mark, enriched by all the context before it. This final vector is passed through a final linear layer that outputs a score for every token in the vocabulary. Fifty thousand scores, roughly. We pass these through softmax to turn them into a probability distribution. Then we sample, either greedily, taking the highest-probability token, or with a bit of randomness, called "temperature", to generate varied text.
>
> Sampled token: "Je". Output.
>
> Now here is the loop. We append "Je" to the input, giving us "Comment vas-tu ? Je". Feed the whole thing back into the model. It runs again. Out pops "vais". Append. Feed back in. Out pops "bien". Append. Feed back in. A period. Append. Etcetera.
>
> Step by step, token by token, the model generates its response: "Je vais bien. Et toi ?". At some point it emits a special end-of-generation token, and we stop. The user sees: "Je vais bien. Et toi ?"
>
> Notice what this is and what this is not. What it is: iterative next-token prediction. What it is not: reasoning in any classical sense. At each step, the model picks the token that has the highest probability given the context. It is a very sophisticated auto-complete.
>
> And yet. And yet. When trained on enough text, the "most probable next token" computation ends up producing fluent, coherent, mathematically correct, legally literate, emotionally appropriate text. Because across trillions of training examples, the probability distribution it learned captures an enormous amount of structure. Grammar. Facts. Style. Patterns of argument. Scientific method. Sense of humor.
>
> Is the model "thinking"? Philosophically, I don't want to die on that hill tonight. Behaviorally, it passes the Turing test. Practically, it does useful work. When you ask me whether GPT-4 "really" understands, I say: it understands in whatever sense a billion neurons wired in the right way can understand. Which might not be identical to the sense a human understands. But it is closer than anything we had six years ago, and the gap is narrowing fast.
>
> Now, the training. How does this Decoder learn? Here is the elegant part, and it is why Decoders won over every other architecture: they learn from unlabeled text.
>
> Take any book. Take Wikipedia. Take Reddit, take a huge web crawl. Feed a document into the model, with the first token only, and ask it to predict the second. Compute the loss (cross-entropy between the predicted distribution and the actual next token). Backpropagate. Adjust the weights. Then feed the first two tokens, predict the third, update. Then the first three, predict the fourth. Done in parallel, because the Transformer architecture lets you compute all these next-token predictions simultaneously. That is called self-supervised learning. No human labeling required. The text labels itself. Because the Internet contains trillions of tokens, you can train indefinitely on an essentially infinite corpus.
>
> This is why the Decoder dominates. It does not require human-labeled data. Every sentence, every book, every tweet is a training example. For free. Every word predicts the next. The model learns grammar, facts, reasoning, and style all at once, from the statistics of "what word usually comes next?".
>
> Llama-3.1-405B, Meta's open-weights model, was trained on about fifteen trillion tokens. Roughly twelve trillion words. That is probably more than the entire collected readable Internet in 2024. More than a reasonably fast human reader could read in a hundred thousand lifetimes. That is the corpus. The model still produces only a fraction of the errors that GPT-3 made just four years earlier.
>
> Notice an important subtlety: pre-training, which is what we just described (predict the next token on a big corpus), is only the first of three training stages for a modern LLM. After pre-training comes supervised fine-tuning, where a human-curated dataset of example "user asks, assistant responds" dialogues is used to shape the model into a helpful assistant rather than a raw text completer. A base model pre-trained on the Internet will, given the prompt "What is the capital of France?", often just continue writing more questions: "What is the capital of Spain? What is the capital of Italy?" Because a lot of training data was quiz-like text. Supervised fine-tuning teaches it to instead answer: "The capital of France is Paris". Still the same Transformer, still the same weights, but the weights are nudged so the model's implicit concept of "what would a good assistant write here?" is foregrounded. Then comes reinforcement learning from human feedback, RLHF, where the model is further refined by having humans rank pairs of its outputs, and the model is trained to prefer the ranked-higher ones. RLHF is why ChatGPT sounds polite, helpful, and a bit bland. Anthropic has its own variant called Constitutional AI, where the feedback ranker is not a human but another AI operating from a written set of principles, a "constitution". All of these techniques are stacked on top of the pre-trained base model. The base model is where most of the knowledge lives. Fine-tuning and RLHF are the final polish.
>
> If you remember one number from today, make it this: pre-training is about ninety-nine percent of the compute, one hundred percent of the knowledge, and almost zero percent of the "personality". Fine-tuning and RLHF are about one percent of the compute, nearly zero percent of the knowledge, and ninety-nine percent of the personality. When people complain that "the new version of ChatGPT is worse than the old one", what they usually mean is that the fine-tuning recipe changed, not that the underlying brain got dumber. The brain is the same. The conversational surface shifted. Useful thing to keep in mind as these models evolve, because companies tweak fine-tuning constantly without re-running pre-training. --- ## 12. Zooming back out: three big ideas (about 6 min) **Key points:**
- The neuron learns from data, by gradient descent.
- Backpropagation routes blame backwards through the network.
- Attention lets meaning flow across a sentence. > Let me step back and consolidate. Three big ideas. If you walk out of this room with three ideas tonight, these should be the three.
>
> One. A neuron learns from data. Each neuron in a deep network is a little weighted-sum-and-ReLU. The weights are initially random; the weights are what we train; the weights are what we ship. Training happens by gradient descent on a loss landscape. Walk downhill. Repeat. After millions of steps, the weights have settled into a configuration where the network performs well on the training task and, if we were lucky and careful, on new examples too. Everything else is detail.
>
> Two. Backpropagation routes blame. This is how we know which weights to change. It is a clever backward traversal of the network that computes every weight's responsibility for the current error, in a single pass, cheaply. Without backpropagation, deep networks cannot be trained. It is the algorithmic unlock that made all of this possible. It was sitting in plain sight in the 1970s, rediscovered in 1986, industrialized by LeCun in the 1990s, and scaled up by Hinton's students in 2012. Now it runs on a billion GPUs every day.
>
> Three. Attention lets meaning flow. Words in a sentence do not sit in isolation. Attention allows each word to look at all other words and pull in information from the relevant ones, weighted by learned similarity. Stack many attention layers, and you get a Transformer. Train a Transformer Decoder on trillions of tokens, and you get an LLM that can hold a conversation, write code, pass bar exams, and play Diplomacy. Attention is the conceptual bridge from vision-style networks to language-style networks. And it scales.
>
> These three ideas, put together, explain every LLM on the market today. GPT-4, GPT-5, Claude Sonnet, Gemini Pro, Llama, DeepSeek, Mistral, the list keeps growing. Each is a Transformer Decoder, trained by gradient descent with backpropagation, on some variation of the next-token-prediction objective, with attention as the core mechanism. Differences are in scale, training data, post-training tuning, and engineering tricks. The skeleton is shared. You understood the skeleton tonight. --- ## 13. A note on the exponential (about 5 min) **Key points:**
- The compute explosion is not slowing down.
- Models double in capability every one to two years on many benchmarks.
- Human intuition is poorly calibrated for exponentials. > I want to flag one last thing before we close, because I think it is the single most important mental habit for your generation.
>
> You have lived your whole lives under exponential curves. Compute per dollar: doubles every two years. Internet traffic: doubles every two years. DNA sequencing cost: halves every year. LLM parameter count: multiplied by a thousand in six years. LLM training compute: multiplied by a hundred thousand in six years. Benchmark scores: doubling every eight to twelve months in most AI domains.
>
> Humans are very bad at exponentials. Our intuition is linear. We extrapolate by drawing a straight line from the last two data points. For exponential processes, that is always wrong, and always wrong in the same direction: we underestimate. When we say "AI progress will slow down soon", we are fighting a sixty-year trend with no internal evidence. When we say "agents will never do X", we are mostly saying "I cannot currently imagine X because it is a factor of eight beyond where we are today and my mental line is linear".
>
> We constantly underestimate how fast the exponential take-off is going. Getting used to things getting faster is crazy hard, but we'll have to if we want to play a part.
>
> So here is the honest ask. Every time you read a new benchmark, every time you try a new model, every time you see an AI generate something that would have been impossible two years ago, write it down. Keep a running log. Date, capability, surprise. Look at your log every six months. You will notice: the capabilities that shocked you in January are boring by July. The horizon of "AI can now do this" has moved. This is not hype. This is a measurable, empirical property of the field. Ignoring it is comfortable and costly.
>
> If you internalize the exponential, you can anticipate. You can position yourself. You can build. If you fight it, you spend the next decade being repeatedly surprised by things that were entirely predictable on a log plot.
>
> Let me give you an anchor. Here is a list of things that were impossible or laughably hard in 2018 and that are trivial today, seven years later. Ask a model to translate a scientific article from Mandarin to French: impossible in 2018, high-quality and free today. Ask a model to generate a photorealistic image from a one-sentence description: impossible in 2018, standard today. Ask a model to write a working Python script for a data-analysis task: only partially possible in 2018, routine today, often better than a junior data scientist. Ask a model to summarize a two-hundred-page legal document: completely out of reach in 2018, one query today. Ask a model to play chess at grandmaster level, while also explaining its reasoning in French, while also solving a geometry problem afterwards: impossible in 2018 in any form, now trivially one model. The frontier moves, and it moves fast.
>
> Now extrapolate seven years forward. In 2033, by the same kind of compression, what today's graduate student does in a month of research (design an experiment, run it, write it up, submit it) may be done by a model in one afternoon. What today's consultant does in two weeks (interview stakeholders, synthesize findings, build a deck, present it) may be done by a model in a morning. What today's diplomat does in a quarter (draft a treaty, negotiate language with three parties, revise, finalize) may be done by a model in days. These are not predictions I would bet my life on, but they are consistent with the trend. They are within the reasonable extrapolation window of the curves we have been discussing. Start preparing your skills accordingly. The competitive advantage is not in being smarter than the machines, because you will not be. The competitive advantage is in knowing how to wield the machines, and, crucially, in doing the one or two things they still cannot do: setting the goals, building the relationships, taking the responsibility. --- ## 14. The typology: where do we stand? (about 3 min) **Key points:**
- Algorithms, AI, machine learning, neural networks, Transformers, Decoder, LLM. Nested Russian dolls.
- Every LLM is a Transformer Decoder, but not every neural network is an LLM. > Last visual before recap. [Figure 10, p. 42: the typology of AI algorithms, nested boxes from "Algorithmes" outward-in through "Intelligence artificielle", "Machine learning", "Neural networks", "Transformers" and "Decoder".]
>
> From the outside in: algorithms are the widest box. Any step-by-step procedure. Machine learning is the subset of algorithms that auto-adjust to data. Neural networks are a subset of machine learning. Other machine-learning algorithms exist: random forests, XGBoost, linear regression. Economists use these a lot, and they are often better than deep networks on small-data, numeric problems. Transformers are a subset of neural networks, distinguished by having attention layers. Decoders are a subset of Transformers, specialized for generation. LLMs are large Decoders trained on text. ChatGPT, Claude, Gemini, Llama: all in the innermost box. --- ## 15. Recap and what is next (about 4 min) **Key points:**
- Recap: the three big ideas.
- Tease Session 3: trajectory.
- Homework. > We are wrapping up. Let me give you the one-minute recap. Three big ideas.
>
> One. A neuron is a weighted sum and a switch. A network is a stack of neurons. Training is gradient descent on a loss landscape: walk downhill. You now know how to write this in forty lines of Python. You saw the loss go down live. You saw neurons specialize into edge detectors and shape detectors.
>
> Two. Backpropagation is the algorithm that assigns blame to each weight in a deep network, allowing gradient descent to work efficiently even with billions of parameters. Without backprop, no deep learning. Yann LeCun industrialized it in the 1990s for handwritten digits. Today it runs on every H100 in every AI data center in the world.
>
> Three. Attention lets each word in a sentence pull meaning from other words in the sentence, weighted by learned relevance. Stack attention layers, and you get a Transformer. The 2017 paper "Attention is all you need" is the foundational document of modern LLMs. Word2vec, in 2013, was the moment we first saw neural networks discover semantic structure on their own: king minus man plus woman equals queen.
>
> Next time, Session 3, we zoom out again. How far does this go? I want to talk about scaling laws: the empirical regularity that bigger models, trained on more data, keep getting better at a predictable rate. I want to talk about how close we are to AGI, or whether we have already passed it. I want to talk about autonomy horizons and METR measurements. I want to talk about the "fuels" of the rocket (compute, data, energy, talent) and which of them is running short. I want to talk about the race. Between companies. Between countries. Between the United States and China. Where does France fit in? Where does Europe fit in?
>
> That is Session 3. It is the wide-angle chapter. Today was the engine. Next week is the trajectory. The week after that, we code real AI agents, end-to-end, in Python, like in Session 4 of the syllabus you have all seen.
>
> Homework before the next session, three small items. Ten minutes each.
>
> One. Go to playground.tensorflow.org. Pick the spiral dataset. Add layers, add neurons, play with the activation function. Find the smallest network that can separate the two spirals. Take a screenshot. Email it to me. Title of the email: "spiral".
>
> Two. Read the introduction and abstract of "Attention Is All You Need", Vaswani et al. 2017, at arxiv dot org slash abs slash 1706.03762. You do not need to understand the math. Read the prose. Get a feel for how researchers write.
>
> Three. Try an analogy in Word2vec. You can use an online demo at turbomaze dot github dot io slash word2vecjson. Type: king minus man plus woman. Hit enter. See for yourself. Then try something creative. Musician minus guitar plus piano. Or city minus France plus Germany. Bring one cool analogy you found to the next class.
>
> Deadline before the next session. I will call on three of you at the start to share your favorite analogy.
>
> One last reflection. I started today by promising that a neural network is not complicated. By now I hope you feel that promise was kept. You saw the weighted sum, the ReLU, the gradient-descent loop, the loss curve, the trained neurons visualized as little shape detectors. You saw the king-queen analogy come out of a Python function call. You saw how attention routes meaning across a sentence. None of it required more than high-school arithmetic. All of it, collectively, is what is currently reshaping the global economy. You are not outsiders to this revolution. You have the pieces. You now know, in your own hands, how the machine runs. That is the whole point of today. The next time somebody waves "artificial intelligence" in your face as mystical jargon, you have the right to push back. It is arithmetic. It is engineering. It is scalable, it is learnable, it is, in the good and the bad senses, ours.

---

## 16. Sources cited inline - **TensorFlow Playground** (live interactive NN demo): [playground.tensorflow.org](https://playground.tensorflow.org/)
- **3Blue1Brown's deep-learning series** (YouTube, highly recommended visual treatment of neural networks and backpropagation): [Chapter 1: "But what is a neural network?"](https://www.youtube.com/watch?v=aircAruvnKk); full [Neural Networks playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi).
- **Word2vec paper**: Mikolov, Chen, Corrado, Dean, *Efficient Estimation of Word Representations in Vector Space*, 2013, [arxiv.org/abs/1301.3781](https://arxiv.org/abs/1301.3781).
- **"Attention Is All You Need"**: Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin, 2017, [arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762).
- **PyTorch tutorials** (official MNIST quickstart): [pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html](https://pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html).
- **Richard Sutton, "The Bitter Lesson"**, 2019: [incompleteideas.net/IncIdeas/BitterLesson.html](http://www.incompleteideas.net/IncIdeas/BitterLesson.html).
- **Word2vec live demo** (browser): [turbomaze.github.io/word2vecjson](https://turbomaze.github.io/word2vecjson/). --- ## 17. Length check *Run:* `python3 cours_sciences_po/timer.py cours_sciences_po/session_2.md` Target: 15,500 to 17,500 words (about 1h50 to 2h05 at 140 wpm). Measured on the current draft: roughly 15,500 words, 1h50 at 140 wpm, landing at the low end of the target range. The lecturer can stretch to the upper end by answering student questions, repeating any step that the room finds fuzzy, or lingering on the MNIST and Word2vec live demos. If the audience is small and fast, it is fine to drop the "bias in Word2vec" aside or the "three training stages" sub-note and bring the talk in at the low end. --- ## Frequently asked questions (scripted answers) **Q: What is backpropagation, in one sentence?**
> Backpropagation is the algorithm that computes, for every weight in a deep network, how much it contributed to the current prediction error, so that gradient descent can nudge each weight in the right direction, efficiently, in a single backward pass through the network. **Q: Why does gradient descent work even though the loss landscape has lots of local minima?**
> Empirically, in high-dimensional spaces like those of neural networks, almost all local minima have a loss value close to the global minimum. They are not traps; they are all roughly equally good. Also, modern optimizers like Adam add momentum, which helps the ball roll past shallow basins. In sixty years of experiments, this has turned out to be a remarkably forgiving optimization problem. Nobody fully understands why, but everyone agrees it works. **Q: What is a token, and why is the model cutting words into pieces?**
> A token is a chunk of text, usually between one letter and a full short word. Modern LLMs use about fifty thousand tokens in their vocabulary. Cutting into subwords allows the model to handle words it has never seen before, like new names, typos, or neologisms, by composing them from familiar pieces. The French suffix "-tion" is its own token, so the model learns a stable meaning for "-tion" across thousands of words. Tokenization is a pragmatic trick that lets a fifty-thousand-item vocabulary cover, effectively, all of text. **Q: Why is attention such a big deal? It sounds like just a weighted average.**
> That is the right instinct, and it is indeed just a learned weighted average. What makes it magical is two things. First, the weights are computed on the fly from the inputs themselves, so each sentence gets its own bespoke attention pattern. Second, attention is differentiable, so gradient descent can train the whole mechanism end-to-end. The combination (dynamic, data-dependent, trainable) is what turned language modeling from a cottage industry into the largest engineering project in human history. **Q: Do bigger models always win?**
> Until recently, yes. Scaling laws, published by OpenAI and DeepMind in 2020 and 2022, show that loss decreases predictably as you scale up parameters, data, and compute together. This drove the trillion-parameter race. In 2024 and 2025, we started seeing diminishing returns: doubling the parameters no longer doubles the usefulness. The frontier has shifted toward post-training techniques (reinforcement learning from human feedback, chain-of-thought, agentic loops), smarter data curation, and test-time compute. At any given budget, bigger still tends to beat smaller, for most tasks. The exact rate of return on scale is a hot debate, and one we will revisit in Session 3. **Q: Can I train a language model at home?**
> A toy language model? Yes, easily, on one GPU, in an afternoon, with nanoGPT or similar repos. A few hundred million parameters, on a public corpus. It will produce bad but recognizable English. A frontier model? Absolutely not. Frontier training costs tens to hundreds of millions of dollars in compute, requires a team of a hundred researchers, and uses proprietary data pipelines. What you can do is fine-tune an existing open model. Take Llama-3 or Mistral-7B, which Meta or Mistral released freely, and tune it on your own data. A laptop with one good GPU, or a small cloud budget, is enough for that. Fine-tuning is how most real-world custom LLMs get built today. **Q: Are neural networks just curve-fitting?**
> In a narrow technical sense, yes: a neural network is fitting a very flexible function to data. But "just curve-fitting" undersells what happens when that function has a hundred billion parameters and is fit to trillions of tokens. At that scale, the fitted function implicitly compresses vast amounts of world knowledge, grammar, logic, and strategy. Calling GPT-4 "just curve-fitting" is like calling the human brain "just electrochemistry": technically accurate, practically misleading. The capacities that emerge from scale are qualitatively different from what small models do, and the mathematical machinery is the same only at the level of atoms. **Q: If neural networks are just weighted sums and ReLUs, why can't I understand what a trained model has learned?**
> Because the knowledge is distributed across billions of tiny weights, none of which are individually interpretable. A single neuron might contribute to ten thousand different concepts, partially, interacting with ten thousand others. This is the interpretability problem, and it is an active research frontier. Companies like Anthropic have built tools called sparse autoencoders that can identify thousands of recognizable concepts inside a trained model, from "Golden Gate Bridge" to "scientific skepticism" to "tourist attractions". We are slowly cracking open the box. Full mechanistic understanding of a frontier model is, today, out of reach, and may be out of reach permanently. This is a serious governance issue, and we will come back to it later in the course.
