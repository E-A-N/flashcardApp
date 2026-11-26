globalRoutines.aws2 = () => {
    let quizArray = [
        // Core Scaling Concepts
        {
            question: "What is the difference between horizontal and vertical scaling in AWS?",
            answer: "Vertical scaling (scale up) increases a single resource's capacity, e.g., resizing an EC2 instance from t3.medium to t3.large. Horizontal scaling (scale out) adds more resources, e.g., launching additional EC2 instances via an Auto Scaling Group. Horizontal is preferred for fault tolerance and unbounded growth; vertical is simpler but has a hard ceiling and usually requires downtime."
        },
        {
            question: "Why must an application be stateless to scale horizontally?",
            answer: "If state (sessions, uploads, in-memory data) lives on a single instance, a new instance can't serve that user. Stateless design externalizes all state to shared services (RDS, ElastiCache, S3) so any instance can handle any request, enabling the load balancer to route freely and instances to be added or removed without data loss."
        },
        {
            question: "What is the role of Elastic Load Balancing in a scaling architecture?",
            answer: "ELB distributes incoming traffic across multiple healthy targets (instances or containers) and automatically scales its own capacity up and out in response to traffic. It also performs health checks, removing unhealthy targets so traffic flows only to working nodes, making the fleet self-healing."
        },

        // Auto Scaling
        {
            question: "What are the four scaling policies in EC2 Auto Scaling, and when do you use each?",
            answer: "1) Target Tracking – keeps a metric (CPU, ALB request count) at a set value; best default. 2) Step Scaling – adds/removes instances in defined steps based on how far a metric breaches a threshold; good for sharp spikes. 3) Scheduled Scaling – scales at predictable times (e.g., 9 AM weekdays); good for known traffic patterns. 4) Predictive Scaling – uses ML on historical data to scale ahead of demand; pairs well with target tracking for unexpected surges."
        },
        {
            question: "How does an Auto Scaling Group maintain availability across Availability Zones?",
            answer: "ASG automatically balances instances evenly across all configured AZs. If an AZ becomes impaired, ASG launches replacement instances in the healthiest AZ first. Combined with ELB health checks, failed instances are terminated and replaced automatically, keeping the fleet at desired capacity without manual intervention."
        },
        {
            question: "What is a launch template and why is it critical for scaling?",
            answer: "A launch template defines the instance configuration (AMI, instance type, security groups, user data, tags) that ASG uses to launch new instances. It ensures every scaled-out instance is identical and correctly configured, so the fleet stays consistent as it grows or shrinks. You can also use multiple launch templates for mixed instance types (e.g., Spot + On-Demand)."
        },
        {
            question: "How do Spot Instances improve the economics of horizontal scaling?",
            answer: "Spot Instances are unused EC2 capacity available at up to 90% discount. ASG can use a mixed instances policy to combine Spot with On-Demand, dramatically reducing fleet cost during scale-out. ASG automatically replaces Spot instances if capacity is reclaimed, maintaining the desired count."
        },

        // Serverless Auto-Scaling
        {
            question: "How does AWS Lambda solve scaling without any manual configuration?",
            answer: "Lambda automatically provisions execution environments in parallel for each concurrent request. You never manage servers or set capacity — it scales from zero to thousands of concurrent invocations in seconds. You only tune memory (which also sets CPU) to control per-invocation performance."
        },
        {
            question: "How does DynamoDB handle scaling differently from RDS?",
            answer: "DynamoDB scales automatically and transparently. In on-demand mode, it handles any throughput spike without pre-provisioning. In provisioned mode, Auto Scaling adjusts read/write capacity units based on CloudWatch metrics. RDS, by contrast, requires manual vertical resizing or adding read replicas — it does not auto-scale compute."
        },
        {
            question: "What is Aurora Serverless v2 and how does it change database scaling?",
            answer: "Aurora Serverless v2 automatically scales compute capacity in 30-second increments (0.5 to 128 ACUs) based on actual workload, with no downtime or manual intervention. This eliminates the need to predict peak load or resize instances, making the database layer as elastic as a serverless compute tier."
        },

        // Database Scaling Strategies
        {
            question: "How do RDS Read Replicas enable horizontal read scaling?",
            answer: "You create one or more read replicas that asynchronously replicate data from the primary. Read-heavy workloads (reports, dashboards, caching layers) are routed to replicas, offloading the primary. This is a form of horizontal read scaling while writes remain on the single primary."
        },
        {
            question: "How does Aurora's storage layer scale independently of compute?",
            answer: "Aurora storage automatically grows in 10 GB increments up to 128 TB with no provisioning or downtime. It's a 6-way replicated, self-healing storage layer across three AZs, decoupling storage scaling from instance scaling — you can resize the instance without worrying about storage capacity."
        },
        {
            question: "What is DynamoDB partitioning and how does it enable horizontal scaling?",
            answer: "DynamoDB automatically partitions data across multiple nodes based on the partition key. As data or traffic grows, it transparently adds partitions, giving you linear scale-out for both storage and throughput without any manual sharding logic in your application."
        },

        // Caching & CDN as Scaling
        {
            question: "How does ElastiCache act as a scaling strategy for databases?",
            answer: "By serving hot reads from in-memory (Redis/Memcached) instead of hitting the database, ElastiCache dramatically reduces the read load on RDS/Aurora. This effectively multiplies your read throughput without scaling the database itself, and can be scaled horizontally by adding cache nodes in a cluster or sharded setup."
        },
        {
            question: "How does CloudFront reduce the need to scale your origin?",
            answer: "CloudFront caches static and dynamic content at 1,000+ edge locations worldwide. Most requests are served from the edge without ever reaching your origin (EC2, S3, ALB), reducing origin load by 60–90% in typical deployments. This means your origin fleet can be much smaller than it would be without a CDN."
        },

        // Queue-Based Buffering
        {
            question: "How does SQS decouple and buffer traffic to protect a scaling system?",
            answer: "SQS absorbs traffic spikes by buffering messages when the backend can't keep up. Consumers (Lambda, EC2 via ASG) process messages at their own pace. The queue depth itself becomes a scaling metric — ASG can scale out workers based on `ApproximateNumberOfMessagesVisible`, ensuring the system catches up after a spike without losing requests."
        },

        // Container Scaling
        {
            question: "How does ECS Service Auto Scaling work?",
            answer: "Application Auto Scaling adjusts the desired count of ECS tasks based on a scaling policy (e.g., keep ALB request count per target at 500). When traffic increases, new tasks are launched (on Fargate or EC2) and registered with the load balancer. Fargate makes this serverless — no cluster management, tasks spin up in seconds."
        },
        {
            question: "How does Kubernetes HPA on EKS differ from EC2 Auto Scaling?",
            answer: "Kubernetes HPA (Horizontal Pod Autoscaler) scales the number of *pods* (containers) based on CPU/memory or custom metrics, while the Cluster Autoscaler or Karpenter scales the underlying *node* capacity. EC2 ASG scales *instances* directly. EKS gives finer-grained control (scale pods independently of nodes) at the cost of more operational complexity."
        },

        // Scaling Design Patterns
        {
            question: "What is a scale-to-zero architecture and which AWS services enable it?",
            answer: "Scale-to-zero means the system consumes zero compute cost when idle, spinning up only when a trigger arrives. Lambda, Fargate (with EventBridge), and DynamoDB on-demand all support this pattern. There's a cold-start tradeoff (first request is slower), but it's ideal for event-driven or low-traffic workloads."
        },
        {
            question: "What is a warm pool in Auto Scaling and why use it?",
            answer: "A warm pool is a set of pre-initialized instances that are stopped (or running) and ready to be launched quickly when scale-out is triggered. This reduces the time from scaling decision to instance availability from minutes to seconds, critical for workloads where cold-start latency is unacceptable (e.g., GPU inference, ML model loading)."
        },
        {
            question: "How does predictive scaling differ from target tracking, and why combine them?",
            answer: "Predictive scaling uses ML to forecast traffic from historical patterns and scales *ahead* of demand (e.g., pre-launching instances at 8:50 AM for a 9 AM spike). Target tracking is *reactive* — it responds after the metric breaches the target. Combined, predictive handles the known baseline while target tracking catches unexpected surges, giving you both speed and accuracy."
        },
        {
            question: "What is the scaling bottleneck for a stateless web tier vs. a database tier, and how does AWS address each?",
            answer: "Web tier: bottleneck is compute/network — solved by ASG + ALB (scale out instances, distribute traffic). Database tier: bottleneck is IOPS/connections — solved by Aurora (auto-scaling storage + up to 15 read replicas), ElastiCache (offload reads), or DynamoDB (auto-partitioning). The key insight is that compute scales horizontally and easily, while databases require more deliberate architecture."
        },
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function") {
        startTest();
    }
}   