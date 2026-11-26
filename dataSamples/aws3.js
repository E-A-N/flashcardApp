globalRoutines.aws3 = () => {
    let quizArray = [
        // GameLift Core
        {
            question: "What is Amazon GameLift Servers?",
            answer: "A fully managed service for deploying, operating, and scaling dedicated game servers for session-based multiplayer games. It handles fleet provisioning, session placement, autoscaling, and DDoS protection. Supports up to 100M concurrent players and 100,000 player adds per second, available in 26 regions and 9 Local Zones."
        },
        {
            question: "What is the difference between GameLift Servers and GameLift Streams?",
            answer: "GameLift Servers hosts dedicated multiplayer game server fleets (CPU-based, for session-based games like FPS, MOBAs). GameLift Streams delivers a full game session to the player's browser via WebRTC at 1080p/60fps, running on GPU instances — no install needed, just a browser. One is multiplayer infrastructure; the other is cloud game streaming."
        },
        {
            question: "What is GameLift Anywhere?",
            answer: "Lets you run your game servers on your own infrastructure (on-prem, other clouds, edge) while still using GameLift's management plane for session placement and scaling. Useful for hybrid deployments or when you need data to stay in a specific location. Includes a free tier of 3,000 sessions and 500K connection minutes/month for 12 months."
        },
        {
            question: "What is GameLift FlexMatch?",
            answer: "A managed matchmaking service that matches players into game sessions based on criteria you define (skill, region, latency, party size). It handles the matching logic, creates or backfills sessions, and can route to your own custom matching logic via Lambda for complex rules."
        },
        {
            question: "What are GameLift Realtime Servers?",
            answer: "A lightweight, event-driven server model for low-complexity multiplayer games (card games, turn-based, chat). Instead of a persistent dedicated server per match, a single server process handles many concurrent sessions, reducing cost for games that don't need full dedicated server isolation."
        },
        {
            question: "How does GameLift scale-to-zero work?",
            answer: "GameLift can scale fleets down to zero servers when no active sessions exist, eliminating idle cost. When a player requests a session, a server is launched on demand. Ideal for indie or low-traffic multiplayer games where 24/7 server capacity would be wasteful."
        },

        // Game Backend & Player Data
        {
            question: "How is DynamoDB typically used in a game backend?",
            answer: "Stores player profiles, inventory, progress, leaderboards, and matchmaking tickets. Its single-digit ms latency handles real-time reads/writes at any scale, auto-partitioning means no sharding logic, and on-demand mode handles launch-day traffic spikes without pre-provisioning."
        },
        {
            question: "How does Amazon Cognito fit into a game architecture?",
            answer: "Provides player identity and authentication. Supports username/password, social login (Google, Apple, Facebook), and custom auth via Lambda triggers. Issues JWTs that your game client uses to authenticate against API Gateway or GameLift, eliminating the need to build your own auth system."
        },
        {
            question: "How do Lambda + API Gateway serve a game backend?",
            answer: "API Gateway exposes your game's REST/HTTP endpoints (submit score, fetch leaderboard, purchase item). Lambda functions handle the business logic serverlessly — they scale to zero, cost nothing when idle, and handle launch-day spikes automatically. This is the standard serverless backend for games without dedicated servers."
        },
        {
            question: "How does ElastiCache improve game backend performance?",
            answer: "Caches hot data (matchmaking state, player sessions, leaderboard top-N) in-memory to avoid hitting DynamoDB/RDS on every request. For a game with millions of concurrent players, this reduces database load by 90%+ and keeps read latency under 1ms. Redis mode also supports pub/sub for real-time updates."
        },

        // Content Delivery & Downloads
        {
            question: "How does CloudFront accelerate game downloads and patches?",
            answer: "Caches game assets (builds, patches, DLC) at 1,000+ edge locations worldwide. Players download from the nearest edge rather than the origin S3 bucket, reducing download times and origin bandwidth costs. Supports signed URLs for paid DLC and can serve large files efficiently with range requests."
        },
        {
            question: "How does S3 serve as game asset storage?",
            answer: "Stores game builds, patches, textures, audio, and video assets. S3 Standard for frequently accessed content (current patch), S3 IA for older versions, and Glacier for archival builds. Lifecycle policies automatically tier older builds to cheaper storage. Pairs with CloudFront for delivery."
        },

        // Latency & Global Reach
        {
            question: "How do AWS Local Zones help reduce game latency?",
            answer: "Local Zones bring AWS compute and storage within 1–10ms of dense urban populations (inside existing regions). GameLift now has 9 Local Zones, letting you place game servers closer to players in cities like São Paulo, Jakarta, or Mumbai without a full new region. Critical for competitive multiplayer where 10ms matters."
        },
        {
            question: "What is AWS Global Accelerator and how does it help games?",
            answer: "A global traffic routing service that steers player traffic to the optimal AWS endpoint (region/AZ) using AWS's private backbone network, bypassing the public internet. Reduces latency, jitter, and packet loss for players connecting to game servers in distant regions. Pairs with GameLift or ALB."
        },
        {
            question: "How does Route 53 optimize game player routing?",
            answer: "Provides low-latency routing (routes players to the nearest healthy endpoint), geo-routing, and failover. For games, you can use latency-based routing to send players to the closest GameLift fleet, or health-check-based routing to avoid impaired regions. Also handles custom game domains."
        },

        // Security & DDoS
        {
            question: "How does AWS protect game servers from DDoS attacks?",
            answer: "GameLift has built-in Enhanced DDoS Protection (active by default, no config needed) defending against network/transport layer attacks. Shield Advanced adds L7 protection and 24/7 DDoS response team. WAF filters malicious HTTP requests to game APIs. Together they cover L3/L4 (network) and L7 (application) attacks on game infrastructure."
        },
        {
            question: "What is the GameLift Player Gateway DDoS Protection SDK?",
            answer: "A client-side SDK (C#/Unity) that adds a cryptographic proof-of-work challenge to player connections before they reach the game server. This filters out bot-driven connection floods at the edge, preventing attackers from consuming server connection slots. Deployed in June 2026."
        },

        // Telemetry & Analytics
        {
            question: "How is Kinesis used for game telemetry?",
            answer: "Ingests high-volume, real-time game events (player actions, match results, latency metrics, error logs) from millions of clients. Kinesis Data Streams buffers the firehose, then routes to Lambda (real-time processing), S3 (archival), or Redshift/EMR (analytics). Enables live dashboards, cheat detection, and post-match analysis."
        },
        {
            question: "How does CloudWatch monitor a game's infrastructure?",
            answer: "Collects metrics (CPU, memory, network, session count) from GameLift fleets, EC2, Lambda, and DynamoDB. Sets alarms on threshold breaches (e.g., 95th percentile latency > 100ms) and triggers auto-scaling or PagerDuty notifications. X-Ray traces requests across Lambda → DynamoDB → GameLift to find bottlenecks."
        },

        // AI & ML in Games
        {
            question: "How is SageMaker used in game development?",
            answer: "Trains ML models for NPC behavior, player skill estimation (for matchmaking ELO), anomaly/cheat detection, and content personalization. Can deploy models as low-latency inference endpoints that your game server calls in real time. Also supports training on game telemetry data from Kinesis/S3."
        },
        {
            question: "How does Amazon Bedrock enable generative AI in games?",
            answer: "Provides API access to foundation models (LLMs) for building AI-driven NPCs with natural language dialogue, dynamic quest generation, in-game chat assistants, or automated content creation. You can fine-tune models on your game's lore and tone for consistent character behavior."
        },
        {
            question: "How do Comprehend and Rekognition handle content moderation in games?",
            answer: "Comprehend moderates text (chat, usernames, clan names) for toxicity, PII, and banned phrases in 10+ languages. Rekognition moderates images (player avatars, screenshots, UGC) for NSFW or violent content. Both are API calls from your backend Lambda, adding moderation without building ML pipelines."
        },

        // Player Engagement
        {
            question: "How does Amazon Pinpoint drive player engagement?",
            answer: "Sends targeted push notifications, email, and SMS to player segments (e.g., 'players who logged in 7 days ago get a comeback reward'). Supports A/B testing, journey orchestration (multi-step campaigns), and uses game data from DynamoDB to segment audiences. Reduces churn and drives re-engagement."
        },
        {
            question: "How does Amazon IVS (Interactive Video Service) relate to gaming?",
            answer: "A low-latency video streaming service for live and interactive video. In gaming, it powers live streaming of game events, esports broadcasts, and interactive 'watch-and-play' experiences. Lower latency than traditional HLS, supports real-time chat overlay, and integrates with Cognito for viewer auth."
        },

        // Compute Strategies for Game Servers
        {
            question: "What are the compute options for hosting game servers on AWS?",
            answer: "1) GameLift Servers (managed, purpose-built for games). 2) EC2 (full control, On-Demand or Spot). 3) ECS/Fargate (containerized game servers, serverless option). 4) EKS (Kubernetes-orchestrated game servers for complex multi-service games). 5) GameLift Anywhere (your own infra, AWS management). GameLift is the default for most multiplayer titles."
        },
        {
            question: "How do Spot Instances reduce game server costs?",
            answer: "GameLift supports Spot-based fleets (via FleetIQ) at up to 90% discount. For non-critical or replaceable server capacity (e.g., overflow sessions, development/test fleets), Spot dramatically cuts cost. GameLift automatically replaces reclaimed Spot instances, maintaining fleet size. Best combined with On-Demand for a mixed-fleet strategy."
        },
        {
            question: "What is GameLift container fleet support and why does it matter?",
            answer: "Lets you deploy game servers as Docker containers instead of full EC2 instances. Benefits: faster deployment, smaller attack surface, easier CI/CD, and CPU bursting (Oct 2026) lets containers borrow unused vCPU from the host. Ideal for persistent-world games or microservice-based game architectures."
        },

        // Edge & Hybrid
        {
            question: "How does AWS Wavelength help with gaming?",
            answer: "Places AWS compute and storage at 5G cell tower edge locations, achieving 1–5ms latency. For gaming, this enables ultra-low-latency cloud gaming, AR/VR experiences, and real-time multiplayer where even 10ms is too much. Pairs with GameLift Streams for edge-based game streaming."
        },
        {
            question: "How does AWS Outposts apply to gaming?",
            answer: "Brings AWS infrastructure to on-premises or edge locations (e.g., an esports venue, a data center in a region without AWS presence). Game servers run locally with the same AWS APIs, while management and scaling are handled from the AWS cloud. Useful for data sovereignty or when internet connectivity to the nearest AWS region is unreliable."
        },
        {
            question: "How does AWS Snowball help with game development data transfer?",
            answer: "Physically ships TBs of game assets (textures, video, build artifacts) to/from AWS when internet transfer is impractical or too slow. Game studios with massive asset pipelines (AAA titles with 100GB+ builds) use Snowball Edge to move data between on-prem render farms and S3 without waiting days for upload."
        },
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function") {
        startTest();
    }
}   