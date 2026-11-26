globalRoutines.aws1 = () => {
    let quizArray = [
        // Compute
        {
            question: "What is AWS EC2?",
            answer: "Elastic Compute Cloud is a virtual server (instance) in the cloud. You choose the instance type, OS, and network settings, and it scales up or down on demand."
        },
        {
            question: "What is AWS Lambda?",
            answer: "A serverless compute service that runs code in response to events (e.g., file upload, API call) without managing servers. You pay only for the compute time consumed."
        },
        {
            question: "What is AWS Auto Scaling?",
            answer: "Automatically adjusts the number of EC2 instances (or other resources) based on defined policies (CPU, request count, etc.) to handle traffic and control cost."
        },
        {
            question: "What is the difference between ECS and EKS?",
            answer: "ECS runs Docker containers managed by AWS. EKS runs Kubernetes clusters managed by AWS, giving you the full Kubernetes API and ecosystem."
        },
        {
            question: "What is AWS Fargate?",
            answer: "A serverless compute engine for containers (ECS/EKS) that eliminates the need to manage servers or clusters. You define the container, AWS handles the rest."
        },

        // Storage
        {
            question: "What is AWS S3?",
            answer: "Object storage service for storing any amount of unstructured data (files, images, backups). Accessed via HTTP/HTTPS, not mounted like a filesystem."
        },
        {
            question: "What is the difference between EBS and EFS?",
            answer: "EBS is block storage attached to a single EC2 instance (like a virtual hard drive). EFS is a shared NFS filesystem that can be mounted by many instances simultaneously."
        },
        {
            question: "What is AWS Glacier used for?",
            answer: "Low-cost archival storage for data that is rarely accessed. Retrieval times range from minutes (Express) to hours (Standard/Deep Archive). Best for compliance and long-term backups."
        },
        {
            question: "What is S3 lifecycle policy?",
            answer: "Automated rules that transition objects between storage classes (e.g., Standard → Infrequent Access → Glacier) or delete them after a defined period, optimizing cost."
        },

        // Databases
        {
            question: "What is AWS RDS?",
            answer: "A managed relational database service supporting MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server. AWS handles patching, backups, and failover."
        },
        {
            question: "What is AWS Aurora?",
            answer: "A MySQL/PostgreSQL-compatible managed relational database with up to 15 readable replicas, automatic failover, and built-in storage that scales to 128 TB."
        },
        {
            question: "What is AWS DynamoDB?",
            answer: "A fully managed NoSQL key-value and document database with single-digit millisecond latency at any scale. Supports on-demand or provisioned capacity modes."
        },
        {
            question: "What is AWS ElastiCache?",
            answer: "A managed in-memory caching service supporting Redis and Memcached. Used to offload reads from databases and store session data for low-latency access."
        },
        {
            question: "What is AWS Redshift?",
            answer: "A fully managed petabyte-scale data warehouse for running complex SQL analytics on large datasets. Uses columnar storage and MPP architecture for fast queries."
        },

        // Networking
        {
            question: "What is AWS VPC?",
            answer: "A virtual private network in the AWS cloud that lets you launch resources into a logically isolated network you define (subnets, route tables, security groups, NAT gateways)."
        },
        {
            question: "What is AWS Route 53?",
            answer: "A highly available, scalable DNS service. Also provides health checks, traffic routing (latency, geo, failover), and can route to non-AWS endpoints."
        },
        {
            question: "What is AWS CloudFront?",
            answer: "A global content delivery network (CDN) that caches content at edge locations worldwide, reducing latency and origin server load for static and dynamic content."
        },
        {
            question: "What is the difference between ALB and NLB?",
            answer: "ALB (Application Load Balancer) operates at Layer 7 (HTTP/HTTPS), routing by path or host header. NLB (Network Load Balancer) operates at Layer 4 (TCP/UDP), offering ultra-low latency and high throughput."
        },
        {
            question: "What is AWS Direct Connect?",
            answer: "A dedicated, private network connection from your on-premises data center to AWS, bypassing the public internet. Lower latency, higher bandwidth, and more consistent performance."
        },

        // Security & Identity
        {
            question: "What is AWS IAM?",
            answer: "Identity and Access Management controls who (users, roles, services) can do what (actions) on which resources (objects) in AWS, using policies in JSON."
        },
        {
            question: "What is AWS KMS?",
            answer: "Key Management Service lets you create and control cryptographic keys used to encrypt data across AWS services. Supports symmetric and asymmetric keys with automatic rotation."
        },
        {
            question: "What is AWS WAF?",
            answer: "Web Application Firewall that protects web applications from common exploits (SQL injection, XSS) by creating rules that filter and monitor HTTP/HTTPS requests at the edge."
        },
        {
            question: "What is AWS Shield?",
            answer: "Managed DDoS protection service. Shield Standard is free and provides basic protection. Shield Advanced adds Application Layer (L7) protection and 24/7 DDoS response team."
        },
        {
            question: "What is AWS Secrets Manager?",
            answer: "A managed service for storing and retrieving database credentials, API keys, and other secrets. Provides automatic rotation and integrates with IAM for fine-grained access control."
        },

        // Messaging & Streaming
        {
            question: "What is AWS SQS?",
            answer: "A fully managed message queue service for decoupling and buffering messages between distributed systems. Supports standard (at-least-once) and FIFO (exactly-once) queues."
        },
        {
            question: "What is AWS SNS?",
            answer: "A managed pub/sub messaging service that lets you fan out messages to multiple subscribers (SQS, Lambda, email, SMS). Push-based, at-least-once delivery."
        },
        {
            question: "What is AWS Kinesis?",
            answer: "A real-time data streaming service for ingesting, processing, and analyzing large volumes of data (logs, clickstreams, IoT). Supports data streams and data firehose."
        },
        {
            question: "What is AWS EventBridge?",
            answer: "A serverless event bus that routes events from AWS services, SaaS applications, and custom apps to targets like Lambda, SQS, SNS, and Step Functions. Replaces CloudWatch Events."
        },

        // Serverless & Integration
        {
            question: "What is AWS API Gateway?",
            answer: "A fully managed service for creating, publishing, maintaining, monitoring, and securing APIs at any scale. Supports REST, HTTP, and WebSocket APIs."
        },
        {
            question: "What is AWS Step Functions?",
            answer: "A serverless orchestration service that visualizes and coordinates multi-step workflows by connecting AWS services into state machines (standard or express)."
        },
        {
            question: "What is AWS AppSync?",
            answer: "A managed GraphQL service that generates APIs for your data sources (DynamoDB, Lambda, RDS, etc.) with real-time subscriptions and automatic caching."
        },

        // AI & ML
        {
            question: "What is AWS SageMaker?",
            answer: "A fully managed platform for building, training, and deploying machine learning models. Includes managed notebooks, distributed training, and one-click model deployment."
        },
        {
            question: "What is AWS Rekognition?",
            answer: "An AI service for image and video analysis: object/face detection, label recognition, content moderation, and facial comparison."
        },
        {
            question: "What is AWS Comprehend?",
            answer: "An NLP service that uses machine learning to find insights and relationships in text: sentiment analysis, key phrases, entities, and language detection."
        },
        {
            question: "What is AWS Textract?",
            answer: "An ML service that automatically extracts text, handwriting, and data from scanned documents and images, including tables and form fields."
        },
        {
            question: "What is Amazon Bedrock?",
            answer: "A fully managed service providing API access to multiple foundation models (LLMs) from various providers for building generative AI applications."
        },

        // Monitoring & Management
        {
            question: "What is AWS CloudWatch?",
            answer: "A monitoring and observability service that collects metrics, logs, and events from AWS resources. Enables dashboards, alarms, and automated responses."
        },
        {
            question: "What is AWS CloudTrail?",
            answer: "A service that logs API calls and management events across your AWS account, providing an audit trail of who did what and when for compliance and troubleshooting."
        },
        {
            question: "What is AWS Config?",
            answer: "A service that records and tracks the configuration state of AWS resources, enabling compliance auditing, change detection, and resource inventory."
        },
        {
            question: "What is AWS CodePipeline?",
            answer: "A fully managed CI/CD service that automates the build, test, and deployment phases of your release process by chaining together CodeCommit, CodeBuild, and CodeDeploy."
        },
        {
            question: "What is AWS CodeBuild?",
            answer: "A fully managed continuous integration service that compiles source code, runs tests, and produces software artifacts ready for deployment."
        },

        // Analytics
        {
            question: "What is AWS Athena?",
            answer: "An interactive query service that lets you analyze data directly in S3 using standard SQL, without managing any infrastructure. Pay-per-scan pricing."
        },
        {
            question: "What is AWS Glue?",
            answer: "A serverless data catalog and ETL service that discovers, prepares, and moves data for analytics. Maintains a centralized data catalog and orchestrates data workflows."
        },
        {
            question: "What is AWS EMR?",
            answer: "A managed big data platform for running Apache Spark, Hadoop, Hive, Presto, and other open-source frameworks at scale on EC2 or EKS."
        },

        // Hybrid & Edge
        {
            question: "What is AWS Outposts?",
            answer: "A service that brings AWS infrastructure and services to your on-premises data center for a fully managed, seamless experience with the same AWS APIs."
        },
        {
            question: "What is AWS Snowball?",
            answer: "A physical device for securely transferring large amounts of data (TB to PB) into or out of AWS when internet transfer is impractical."
        },
        {
            question: "What is AWS Wavelength?",
            answer: "Brings AWS compute and storage closer to 5G cell towers (edge locations) to enable ultra-low latency applications for IoT, AR/VR, and real-time media."
        },
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function") {
        startTest();
    }
}   