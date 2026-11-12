
globalRoutines.netcode2 = () => {
    let quizArray = [
        // Network Architectures
        {
            question: "What is the client-server networking model in multiplayer games?",
            answer: "A centralized architecture where clients send input or requests to an authoritative server, which processes game logic and distributes state updates."
        },
        {
            question: "What does authoritative server mean?",
            answer: "The server is the ultimate source of truth for game state. Clients cannot unilaterally decide important gameplay outcomes."
        },
        {
            question: "What is a peer-to-peer (P2P) network model?",
            answer: "A model where game clients communicate directly with each other rather than routing all communication through a central game server."
        },
        {
            question: "What is a listen server?",
            answer: "A multiplayer architecture where one player's game client also acts as the server for the other players."
        },
        {
            question: "What is a dedicated server?",
            answer: "A server process dedicated to hosting game sessions without participating as a player."
        },
        {
            question: "What are the advantages of dedicated servers?",
            answer: "They provide centralized authority, consistent simulation, better cheat resistance, and independence from individual players disconnecting."
        },
        {
            question: "What is a lockstep networking model?",
            answer: "A model where players exchange inputs for each simulation frame and advance the simulation in synchronized steps."
        },
        {
            question: "Why is deterministic simulation important for lockstep networking?",
            answer: "Every participant must produce the same simulation results from the same initial state and inputs."
        },
        {
            question: "What is deterministic simulation?",
            answer: "A simulation where identical initial conditions and inputs always produce identical results."
        },
        {
            question: "What is a state synchronization model?",
            answer: "A networking model where the server periodically sends game state updates to clients, which use them to update their local representation of the world."
        },
        {
            question: "What is the difference between state synchronization and input synchronization?",
            answer: "State synchronization distributes simulation results, while input synchronization distributes player commands so simulations can reproduce those results."
        },

        // Simulation and Timing
        {
            question: "What is a game tick?",
            answer: "A discrete simulation update where the game processes inputs, advances game logic, and updates world state."
        },
        {
            question: "What is tick rate?",
            answer: "The number of simulation updates performed per second. A 60 Hz tick rate means 60 updates per second."
        },
        {
            question: "What is the difference between tick rate and frame rate?",
            answer: "Tick rate measures simulation updates per second, while frame rate measures rendered images per second."
        },
        {
            question: "What is a fixed timestep?",
            answer: "A simulation approach where each update advances game time by a constant duration, regardless of rendering performance."
        },
        {
            question: "Why use a fixed timestep in multiplayer games?",
            answer: "It provides predictable simulation behavior, simplifies synchronization, and helps maintain consistent physics calculations."
        },
        {
            question: "What is a game loop?",
            answer: "A repeating process that handles input, updates simulation state, and renders the game."
        },
        {
            question: "What is a snapshot in game networking?",
            answer: "A representation of game state at a particular point in simulation time, sent to clients for synchronization."
        },
        {
            question: "What is snapshot interpolation?",
            answer: "A technique where clients render between previously received server snapshots to produce smooth movement despite network update intervals."
        },
        {
            question: "What is an interpolation buffer?",
            answer: "A small delay buffer that stores received snapshots so the client can interpolate between known states instead of rendering incomplete updates."
        },
        {
            question: "What is extrapolation in game networking?",
            answer: "Predicting future entity positions based on previously received state, usually using velocity and other movement information."
        },

        // Prediction and Reconciliation
        {
            question: "What is client-side prediction?",
            answer: "A technique where the client immediately simulates its own input without waiting for the server response, reducing perceived input latency."
        },
        {
            question: "What is server reconciliation?",
            answer: "The process where a client receives authoritative server state, compares it with its predicted state, and corrects any discrepancy."
        },
        {
            question: "What is input buffering in networked games?",
            answer: "Temporarily storing player inputs so they can be processed later in the correct simulation order."
        },
        {
            question: "What is input sequencing?",
            answer: "Assigning sequence numbers to inputs so the server can identify their order, detect duplicates, and track acknowledged commands."
        },
        {
            question: "Why do clients replay unacknowledged inputs after reconciliation?",
            answer: "Because the server state may not yet include recently submitted inputs. Replaying them restores the client's predicted state."
        },
        {
            question: "What is prediction error?",
            answer: "The difference between a client's locally predicted state and the authoritative state received from the server."
        },
        {
            question: "What is rubber-banding?",
            answer: "A visible correction where a player's character suddenly moves back or snaps to an authoritative server position after prediction errors."
        },
        {
            question: "What is lag compensation?",
            answer: "A server-side technique that accounts for network latency when evaluating player actions, such as hitscan weapon shots."
        },
        {
            question: "What is server-side rewind?",
            answer: "A lag compensation technique where the server temporarily evaluates an action against historical entity positions from the time the client likely observed them."
        },

        // Distributed State and Architecture
        {
            question: "What is replication in multiplayer networking?",
            answer: "Keeping copies of game state synchronized across multiple machines by transmitting changes or snapshots."
        },
        {
            question: "What is entity replication?",
            answer: "Synchronizing entities such as players, NPCs, projectiles, and objects between the server and clients."
        },
        {
            question: "What is delta compression?",
            answer: "Transmitting only the changes between states rather than sending the entire state every update."
        },
        {
            question: "What is a dirty flag in game networking?",
            answer: "A marker indicating that a particular property or entity has changed and may need to be replicated."
        },
        {
            question: "What is interest management?",
            answer: "A system that determines which game entities or updates a client needs to receive based on relevance, distance, visibility, or gameplay rules."
        },
        {
            question: "What is a spatial partitioning system?",
            answer: "A data structure that divides the game world into regions to make spatial queries and nearby-entity searches more efficient."
        },
        {
            question: "What is a spatial grid in multiplayer networking?",
            answer: "A grid-based partition of the world that helps determine which entities are nearby and which clients should receive their updates."
        },
        {
            question: "What is server authority over game entities?",
            answer: "The server controls important entity state and validates changes rather than trusting arbitrary client-provided state."
        },
        {
            question: "What is ownership or authority assignment for a networked entity?",
            answer: "A rule that determines which machine or system is allowed to control or modify an entity's state."
        },
        {
            question: "What is a networked entity component system (ECS)?",
            answer: "An entity-component architecture where game entities have components and systems process them, with selected components replicated across the network."
        },

        // Network Performance
        {
            question: "What is bandwidth in multiplayer networking?",
            answer: "The amount of data that can be transmitted over a network per unit of time, commonly measured in bits per second."
        },
        {
            question: "What is jitter?",
            answer: "Variation in packet arrival times. High jitter can cause inconsistent update timing and visible movement problems."
        },
        {
            question: "What is packet loss?",
            answer: "When transmitted packets fail to arrive at their destination, potentially causing missing game updates."
        },
        {
            question: "Why are UDP datagrams commonly used in multiplayer games?",
            answer: "They avoid TCP's built-in retransmission and ordered-delivery behavior, allowing games to prioritize fresh state updates over delayed data."
        },
        {
            question: "Why might TCP be undesirable for frequent game state updates?",
            answer: "TCP can cause head-of-line blocking when lost data delays delivery of later bytes, making time-sensitive updates arrive too late."
        },
        {
            question: "What is a reliable UDP protocol?",
            answer: "An application-level protocol built on UDP that implements selected reliability features such as acknowledgments, retransmissions, and sequencing."
        },
        {
            question: "What is packet batching?",
            answer: "Combining multiple updates or messages into fewer network packets to reduce per-packet overhead."
        },
        {
            question: "What is network congestion?",
            answer: "A condition where network traffic exceeds available capacity, resulting in increased latency, packet loss, or reduced throughput."
        },

        // Software Design Patterns
        {
            question: "What is the command pattern in game networking?",
            answer: "Representing player actions as command objects or messages that can be queued, transmitted, validated, and executed by the game simulation."
        },
        {
            question: "What is the event-driven networking pattern?",
            answer: "An architecture where network events, such as incoming packets or connection changes, trigger application behavior without requiring constant polling."
        },
        {
            question: "What is the actor model in networked game servers?",
            answer: "An architecture where independent actors own state and communicate through messages, reducing shared mutable state."
        },
        {
            question: "What is message serialization?",
            answer: "Converting structured game data into bytes for transmission over a network, then reconstructing it at the receiving endpoint."
        },
        {
            question: "What is protocol versioning?",
            answer: "Assigning versions to network message formats or protocols so clients and servers can detect and manage compatibility differences."
        },
        {
            question: "What is a network session?",
            answer: "A logical multiplayer game connection or match that tracks participating players, shared state, and session lifecycle."
        },
        {
            question: "What is graceful degradation in multiplayer games?",
            answer: "Reducing nonessential network or gameplay functionality under poor network conditions while preserving the most important game interactions."
        },
        {
            question: "What is a reconnect strategy?",
            answer: "A mechanism that allows disconnected players to establish a new connection and potentially restore their previous session or game state."
        },
        {
            question: "What is an authoritative simulation loop?",
            answer: "A server-controlled update loop that processes validated inputs, advances the game simulation, and publishes authoritative state updates."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));

    if (typeof startTest === "function") {
        startTest();
    }
};
