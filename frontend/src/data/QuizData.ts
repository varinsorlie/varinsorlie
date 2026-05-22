// ── Types ──────────────────────────────────────────────────────
export interface QuizQuestion {
  q: string
  a: string
}

export interface QuizTopic {
  name: string
  emoji: string
  color: string
  questions: QuizQuestion[]
}

// ── Data ───────────────────────────────────────────────────────
export const quizTopics: QuizTopic[] = [
  {
    name: "1. Energy systems",
    emoji: "⚡",
    color: "#7F77DD",
    questions: [
      {
        q: "What is the difference between power and energy? Give the formulas.",
        a: "Power is the rate of energy consumption (how hard you work): Power = Voltage × Current. Energy is how much work is accomplished over time: Energy = Power × Time.",
      },
      {
        q: "List four problems with the traditional power grid.",
        a: "Not efficient (20% transmission loss); Not reliable (failures can quickly spread); Not secure (vulnerable to cyber attacks); Not green (electricity accounts for 41% of global energy CO₂ emissions).",
      },
      {
        q: "What is a smart grid, expressed as a formula?",
        a: "Smart grid = Power grid + ICT (Information and Communication Technology).",
      },
      {
        q: "Name the seven goals of the smart grid vision.",
        a: "Cost effective, green, customer-oriented, secure, dynamic, reliable, communication and control.",
      },
      {
        q: "In the NIST Smart Grid model, what are the seven domains and what does each one do?",
        a: "Customers (residential, commercial, industrial; may also generate/store energy); Market (day-ahead and hour-ahead markets; predictions, bidding, auctions); Service Providers (organisations providing services to utilities and customers, e.g. charging stations); Operations (managers of electricity flow); Generation (producers of electricity; traditional plants or large-scale hydro); Transmission (carries high-voltage electricity over long distances); Distribution (distributes electricity to/from consumers; may also store and generate).",
      },
      {
        q: "What is the challenge when balancing the power grid with renewable energy?",
        a: "Renewable sources like wind and solar produce variable output. Frequency (AC) and voltage must be kept within tight limits, but the intermittent nature of renewables makes it hard to keep supply and demand balanced.",
      },
    ],
  },
  {
    name: "2. Demand Response",
    emoji: "📊",
    color: "#1D9E75",
    questions: [
      {
        q: "Define Demand Response Management (DRM) and state its objective.",
        a: "DRM means customers change their consumption patterns in response to electricity prices over time. Prices are adjusted to reduce usage at peak hours. The objective is to reduce and shift energy consumption.",
      },
      {
        q: "What is the energy balance point, and how does DRM achieve it?",
        a: "The balance point is where Supply (S) = Demand (D). DRM achieves balance through bidirectional flow of both power and information.",
      },
      {
        q: "What is the difference between Direct Load Control and Intelligent Load Control?",
        a: "Direct Load Control: the utility has remote access to turn appliances (e.g. AC, water heater) on/off when needed — transparent to users. Intelligent Load Control: price-based programmes give users different prices at different times; users naturally shift consumption in response.",
      },
      {
        q: "Name three electricity pricing models used in DRM.",
        a: "Time-of-Use (ToU) pricing; Real-time Pricing (RTP); Inclining Block Rates (IBR).",
      },
      {
        q: "What is the difference between shiftable and non-shiftable appliances? Give examples.",
        a: "Non-shiftable appliances must stay on for a set period (e.g. lights, TV). Shiftable appliances can be moved to a different time slot (e.g. dishwasher, washing machine, EV charging).",
      },
      {
        q: "What trade-off must a home energy scheduler balance?",
        a: "It must minimise electricity cost while also maximising user comfort — these two goals pull in opposite directions.",
      },
      {
        q: "How does Google use DRM principles in its data centres?",
        a: "Google uses a carbon-intelligent computing platform to move tasks to times and places with cheaper or cleaner energy, and uses demand response to reduce consumption during periods of grid stress.",
      },
    ],
  },
  {
    name: "3. Game theory & Markets",
    emoji: "🎲",
    color: "#D85A30",
    questions: [
      {
        q: "Define Nash Equilibrium and Best Response.",
        a: "Nash Equilibrium: the state where neither player has an incentive to change their strategy given the other player's choice. Best Response: the strategy that produces the most favourable outcome for a player, taking all other players' strategies as given.",
      },
      {
        q: "What is the difference between a regulated and a deregulated energy market?",
        a: "In a regulated market, prices are set by the government and consumers cannot choose their supplier. In a deregulated market, prices are set by competition ('the invisible hand') and consumers can choose their supplier. Norway deregulated in 1991.",
      },
      {
        q: "What are the roles of TSO, DSO, and Retailer in the electricity market?",
        a: "TSO (Transmission System Operator): responsible for power balance in the transmission system (e.g. Statnett). DSO (Distribution System Operator): operates the distribution grid to residential customers (e.g. Hafslund). Retailer: buys electricity from the market and sells it to end-consumers.",
      },
      {
        q: "Explain the difference between Cournot and Bertrand competition in the energy market context.",
        a: "Cournot (Quantity game): firms simultaneously choose how much to produce; used to model wholesale electricity markets where generators bid quantities. Bertrand (Price game): firms compete on price; with identical products, drives prices to marginal cost — used to model retail energy suppliers.",
      },
      {
        q: "What is the sequence of markets in power system operation according to Statnett?",
        a: "Day-ahead market → Capacity markets → Reserve markets.",
      },
    ],
  },
  {
    name: "4. Renewable energy",
    emoji: "🌿",
    color: "#639922",
    questions: [
      {
        q: "Name the three energy flow management strategies shown in the load diagram.",
        a: "Load Shedding (reducing electricity demand — used in energy-intensive industry processes); Load Shifting (moving demand to other times, either smoothing the curve or making demand follow renewable feed-in); Load Increase (using additional electricity to produce other energy carriers).",
      },
      {
        q: "What four things will the Green Energy Transition require?",
        a: "Energy systems with high energy efficiency; sector coupling with industry and transport applications; energy storage for stationary and transport systems; digitalisation of 'smart' energy systems.",
      },
      {
        q: "What are the two main types of energy storage mentioned?",
        a: "Electrical (batteries) and hydrocarbon.",
      },
    ],
  },
  {
    name: "5. Green data centres",
    emoji: "🖥️",
    color: "#378ADD",
    questions: [
      {
        q: "What is PUE and what does a value close to 1.0 mean?",
        a: "PUE (Power Usage Effectiveness) is the most common data centre efficiency metric. A PUE close to 1.0 means nearly all the energy consumed is used for computing, with minimal waste on cooling and infrastructure.",
      },
      {
        q: "Why do some data centres place servers in Finland or undersea?",
        a: "Data centres are huge energy consumers, especially for cooling. Finnish and undersea sites use seawater (e.g. from the Bay of Finland) for cooling, which dramatically reduces cooling energy costs.",
      },
      {
        q: "In the Top-of-Rack (ToR) architecture, why does each rack have TWO ToR switches?",
        a: "For redundancy. If one switch fails, the other keeps all servers in the rack running. This eliminates a single point of failure and ensures 24/7 uptime — like having two exits from a building.",
      },
      {
        q: "List five sustainability metrics for the data centre industry.",
        a: "ERF (Energy Reuse Factor); PUE (Power Usage Effectiveness); REF (Renewable Energy Factor); WUE (Water Usage Effectiveness); CUE (Carbon Usage Effectiveness).",
      },
      {
        q: "Name five techniques used to reduce energy consumption in data centres.",
        a: "Smart cooling and thermal management; power management at chip level; power management at server level; power management at data centre level; power management at inter-data-centre level.",
      },
    ],
  },
  {
    name: "6. Cloud & Fog computing",
    emoji: "☁️",
    color: "#5DCAA5",
    questions: [
      {
        q: "State the NIST 5-4-3 principle for cloud computing.",
        a: "5 characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service. 3 service models: IaaS, PaaS, SaaS. 4 deployment models: public, private, community, hybrid cloud.",
      },
      {
        q: "What are the three problems that motivate fog computing?",
        a: "Too much data to transmit (e.g. Boeing 787 generates 5 GB/s); too slow / high latency (self-driving cars generate 1 GB/s and need sub-second reactions); privacy risks from sending personal data to distant servers.",
      },
      {
        q: "Describe the three-layer fog computing architecture.",
        a: "Devices (bottom) → Fog (middle) → Cloud (top). Devices are sensors, smart meters, cars. Fog nodes are local servers (routers, 5G base stations) close to users. The cloud handles long-term storage and heavy analysis.",
      },
      {
        q: "Should a self-driving car use cloud or fog computing? Why?",
        a: "Fog computing, because it needs sub-second reaction times and generates 1 GB/s of data. Sending that to a distant cloud and waiting for a response would be too slow and potentially fatal.",
      },
      {
        q: "Why does sending all smart meter data to a centralised cloud make the system non-scalable?",
        a: "Because as more meters are added, the central bottleneck gets worse — the cloud cannot keep up with millions of devices all communicating simultaneously.",
      },
    ],
  },
  {
    name: "7. Security & Privacy",
    emoji: "🔒",
    color: "#E24B4A",
    questions: [
      {
        q: "What are the three CIA security goals in the smart grid context?",
        a: "Confidentiality — only authorised parties can read data; enforced by encryption. Integrity — data cannot be secretly changed (e.g. no tampering with prices or meter readings). Availability — the system must always work; a DoS attack tries to bring it down.",
      },
      {
        q: "What is a 'load signature' and why is it a privacy concern?",
        a: "A load signature is the unique power usage pattern of a household — like a fingerprint. High-frequency meter readings can reveal when people are home, asleep, on holiday, or what appliances they own. This data could be misused by insurers, criminals, marketers, or landlords.",
      },
      {
        q: "Explain a Replay Attack and how it is defended against.",
        a: "An attacker records old messages and replays them to trick the system (e.g. replaying old meter data). Defence: add a timestamp or nonce (random number used only once) to every message so old messages are rejected.",
      },
      {
        q: "Explain a Man-in-the-Middle attack and how it is defended against.",
        a: "An attacker intercepts communications between two parties, impersonating each to the other. In smart grids, a fake gateway node could read or alter messages. Defence: use SSL/HTTPS encryption and proper authentication.",
      },
      {
        q: "Explain an Integrity attack and one way to detect it.",
        a: "An attacker secretly modifies data — for example, tampering with a meter to underpay for electricity (the FBI found this costing a US utility $400M/year). Detection: use a feeder meter for the whole neighbourhood — if the neighbourhood total doesn't match the sum of all house meters, theft is occurring.",
      },
      {
        q: "What is homomorphic encryption and why is it useful for smart grid privacy?",
        a: "Homomorphic encryption lets you perform calculations on encrypted data without decrypting it first. Applied to smart meters: individual readings can be encrypted and summed, producing a correct total that can be decrypted — without anyone ever seeing individual readings.",
      },
      {
        q: "What is Federated Learning and why is it relevant to privacy?",
        a: "Each device trains its own local AI model, and only the model parameters (not the raw data) are sent to a central server. Private data stays on the device, protecting user privacy while still enabling AI model training.",
      },
    ],
  },
  {
    name: "8. Blockchain",
    emoji: "⛓️",
    color: "#EF9F27",
    questions: [
      {
        q: "What are the main disadvantages of a traditional central trusted authority compared to blockchain?",
        a: "A central node handles all transactions, creating high workload and a single point of failure. It can also become a target for cyber attacks, potentially turning malicious.",
      },
      {
        q: "What makes blockchain tamper-proof?",
        a: "Each block contains the hash of the previous block. If anyone changes data in a block, the hash no longer matches, invalidating the entire chain from that point forward — any change is immediately detectable.",
      },
      {
        q: "What is the 51% attack — the main weakness of blockchain?",
        a: "If a single entity controls more than 51% of the nodes, they become the majority and can rewrite the entire database.",
      },
      {
        q: "Compare public, private, and consortium blockchain types.",
        a: "Public: no administrator, permissionless, high computation cost (e.g. Bitcoin). Private: single administrator, permissioned, low computation cost. Consortium: multiple administrators, permissioned, medium computation cost.",
      },
      {
        q: "Which type of blockchain is likely most practical for energy applications, and why?",
        a: "Consortium blockchain. Public is too slow and expensive; private is essentially just a normal database controlled by one company. Consortium hits the sweet spot — a group of trusted organisations share control, cheaper than public, more trustworthy than private.",
      },
      {
        q: "Explain Proof of Work (PoW) and why it uses so much electricity.",
        a: "Miners must find a 'nonce' such that Hash(block + nonce) starts with many zeros. This puzzle is extremely hard to solve but easy to verify. Miners constantly guess nonces — requiring enormous amounts of computation and therefore electricity.",
      },
      {
        q: "What challenges exist in realising a fully decentralised energy market?",
        a: "Safety and power quality (no single authority to fix problems); hard to predict system behaviour with thousands of independent buyers/sellers; consensus on actual energy delivered is technically complex; regulatory and legal issues (current laws are built for centralised companies); grid infrastructure was designed for one-way flow, not two-way peer trading.",
      },
    ],
  },
  {
    name: "9. ML for forecasting",
    emoji: "📈",
    color: "#D4537E",
    questions: [
      {
        q: "Why is wind energy forecasting especially challenging?",
        a: "Wind speed jumps up and down constantly, and a small change in speed causes a large nonlinear change in power output. The relationship is curved (S-shaped), not linear, and incorrect forecasts can be both expensive and dangerous.",
      },
      {
        q: "Explain the difference between linear regression, kNN, and SVR for wind power prediction.",
        a: "Linear regression: fits a straight line — fast and simple but poor for wind's curved relationship (RMSE ≈ 0.2545). kNN: finds the k most similar past examples and averages them — follows curves naturally. SVR: fits a line inside a tube; points inside the tube are ignored, giving robustness to small errors; also handles non-linearity well.",
      },
      {
        q: "What does RMSE measure and which model had the lowest RMSE in the lecture?",
        a: "RMSE (Root Mean Square Error) measures prediction accuracy — lower is better. kNN with k=1000 had the lowest RMSE in the lecture examples.",
      },
      {
        q: "When should you use SVR over kNN?",
        a: "SVR is better for large datasets (>10,000 points) and when data has noise or outliers (the tube ignores small errors). kNN is better for small datasets (<1,000 points).",
      },
    ],
  },
  {
    name: "10. Deep learning",
    emoji: "🧠",
    color: "#534AB7",
    questions: [
      {
        q: "Why does the threshold activation function cause problems in neural network training?",
        a: "Training uses backpropagation, which requires computing gradients (derivatives). The threshold function has zero gradient everywhere, so no learning signal can propagate backwards through the network.",
      },
      {
        q: "What is the sigmoid function and what is its derivative? Why is the derivative convenient?",
        a: "Sigmoid: f(x) = 1/(1+e⁻ˣ). Its derivative: f'(x) = f(x) × (1 − f(x)). This is convenient because you already computed f(x) in the forward pass — the derivative costs no extra computation.",
      },
      {
        q: "Describe the full training loop for a neural network in order.",
        a: "Forward pass — compute outputs layer by layer, store all intermediate values. Compute error — E = ½Σ(actual − predicted)². Backward pass (output layer) — apply the 3-piece chain rule to each weight. Backward pass (hidden layers) — chains are longer; reuse previously computed gradients. Update all weights at once — w⁺ = w − α × (∂E/∂w). Repeat (each full cycle = one epoch).",
      },
      {
        q: "Why is a neural network well-suited for wind power prediction?",
        a: "Wind power follows a non-linear relationship with wind speed. Neural networks with hidden layers can capture non-linear patterns that simpler models like linear regression cannot.",
      },
      {
        q: "What is the learning rate and what happens if it is too large or too small?",
        a: "The learning rate α controls how big a step you take downhill during gradient descent (w⁺ = w − α × ∂E/∂w). Too large: overshoot the minimum, training diverges. Too small: very slow convergence.",
      },
    ],
  },
  {
    name: "11. Time-series & RNN",
    emoji: "🔁",
    color: "#0F6E56",
    questions: [
      {
        q: "What is a time series and what is the sliding window method?",
        a: "A time series is an ordered sequence of values at equally spaced intervals. The sliding window method uses a fixed number of previous time steps (the window size) as inputs to predict the next step.",
      },
      {
        q: "What is multiple linear regression and how is it applied to wind power?",
        a: "Multiple linear regression models the relationship between several input variables and one output. For wind power: Wind Power = w1×WindSpeed + w2×WindDirection + w3×Temperature + w4×Pressure + b.",
      },
      {
        q: "What is a Recurrent Neural Network (RNN) and why is it better than a plain ANN for time series?",
        a: "An RNN sends current information back to itself, giving it a memory of previous states. A plain ANN has no memory — each input is treated independently. RNNs are well-suited to sequences and time-series data because they can remember historical patterns.",
      },
      {
        q: "Write the RNN hidden state formula and explain each term.",
        a: "hₜ = f(Uxₜ + Whₜ₋₁) — where xₜ is the current input, hₜ₋₁ is the previous hidden state (memory), U is the weight matrix for the input, W is the weight matrix for the recurrent connection, and f(·) is the activation function.",
      },
      {
        q: "What is the key advantage of backpropagation being 'efficient'?",
        a: "Backpropagation reuses intermediate calculations. Gradient pieces computed for later layers are looked up rather than recomputed when moving to earlier layers, making training feasible even for deep networks.",
      },
    ],
  },
]