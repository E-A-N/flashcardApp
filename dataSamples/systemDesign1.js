
globalRoutines.systemDesign1 = () => {
    let quizArray = [
        // Performance & Caching
        {
            question: "Slow reads -> What should you do?",
            answer: "Add a cache to store frequently accessed data and reduce database reads and latency."
        },
        {
            question: "Slow queries -> What should you do?",
            answer: "Add database indexes to speed up data lookups and avoid full table scans."
        },
        {
            question: "Read-heavy database -> What should you do?",
            answer: "Add read replicas to distribute read traffic across multiple database instances."
        },
        {
            question: "Slow file loads -> What should you do?",
            answer: "Use object storage for files and a CDN to cache and deliver them closer to users."
        },
        {
            question: "Stale cached data -> What should you do?",
            answer: "Use cache invalidation, TTLs, or write-through caching to keep cached data fresh."
        },
        {
            question: "Need faster search -> What should you do?",
            answer: "Use a dedicated search engine or search index such as Elasticsearch or OpenSearch."
        },
        {
            question: "Large payloads -> What should you do?",
            answer: "Use compression, pagination, and partial responses to reduce network transfer."
        },

        // Scalability & Traffic
        {
            question: "Too much traffic -> What should you do?",
            answer: "Add a load balancer to distribute incoming requests across multiple servers."
        },
        {
            question: "Write spikes -> What should you do?",
            answer: "Buffer incoming writes using a message queue so workers can process them asynchronously."
        },
        {
            question: "Write-heavy database -> What should you do?",
            answer: "Shard the data across multiple database instances to distribute write load."
        },
        {
            question: "Hot database partition -> What should you do?",
            answer: "Repartition the data or use consistent hashing to distribute traffic more evenly."
        },
        {
            question: "Uneven traffic across servers -> What should you do?",
            answer: "Use consistent hashing or smarter load balancing to distribute requests more evenly."
        },
        {
            question: "Database overloaded by connections -> What should you do?",
            answer: "Use connection pooling to reuse database connections and limit connection overhead."
        },
        {
            question: "Need to process huge datasets -> What should you do?",
            answer: "Use batch processing or stream processing depending on whether processing is scheduled or real-time."
        },
        {
            question: "Need real-time updates -> What should you do?",
            answer: "Use WebSockets or Server-Sent Events to push updates to clients."
        },

        // Reliability & Fault Tolerance
        {
            question: "Temporary failures -> What should you do?",
            answer: "Retry failed operations using exponential backoff and jitter to avoid overwhelming dependencies."
        },
        {
            question: "One service failing -> What should you do?",
            answer: "Use a circuit breaker to stop sending requests to an unhealthy service temporarily."
        },
        {
            question: "One component failure affects everything -> What should you do?",
            answer: "Use the bulkhead pattern to isolate resources and prevent failures from spreading."
        },
        {
            question: "Consumers cannot keep up with incoming traffic -> What should you do?",
            answer: "Use backpressure to slow incoming work when downstream consumers are overloaded."
        },
        {
            question: "Need to prevent data loss -> What should you do?",
            answer: "Use database replication, regular backups, and tested recovery procedures."
        },
        {
            question: "Need to recover from outages -> What should you do?",
            answer: "Implement disaster recovery, automated failover, and backups across failure domains."
        },
        {
            question: "Need to isolate failures between services -> What should you do?",
            answer: "Use bulkheads, timeouts, circuit breakers, and resource isolation."
        },

        // Data Consistency & Distributed Systems
        {
            question: "Duplicate requests -> What should you do?",
            answer: "Use idempotency keys so repeated requests produce the same result without duplicate side effects."
        },
        {
            question: "Multiple services updating the same data -> What should you do?",
            answer: "Use the Saga pattern to coordinate distributed transactions through a sequence of local transactions and compensating actions."
        },
        {
            question: "Need to maintain data consistency -> What should you do?",
            answer: "Use database transactions, appropriate consistency guarantees, and distributed coordination when necessary."
        },
        {
            question: "Services tightly coupled -> What should you do?",
            answer: "Use asynchronous communication and message queues to decouple services."
        },
        {
            question: "Inconsistent data across services -> What should you do?",
            answer: "Use event-driven architecture to publish events and synchronize downstream services."
        },
        {
            question: "Need different read and write models -> What should you do?",
            answer: "Use CQRS (Command Query Responsibility Segregation) to separate write operations from read operations."
        },
        {
            question: "Need to coordinate access to shared resources -> What should you do?",
            answer: "Use distributed locks or other coordination mechanisms, while accounting for lock expiration and failures."
        },
        {
            question: "Data growing indefinitely -> What should you do?",
            answer: "Use data archival, retention policies, and TTL (Time To Live) to remove or move old data."
        },

        // Traffic Management
        {
            question: "Too many requests -> What should you do?",
            answer: "Use rate limiting to restrict how many requests a client can make within a given time window."
        },
        {
            question: "Need to control background workloads -> What should you do?",
            answer: "Use worker pools to control concurrency and process background jobs efficiently."
        },
        {
            question: "Consumers are overwhelmed -> What should you do?",
            answer: "Use backpressure, bounded queues, and controlled concurrency to prevent overload."
        },

        // Deployment & API Design
        {
            question: "Need zero-downtime deployments -> What should you do?",
            answer: "Use rolling deployments or blue-green deployments to release changes without taking the application offline."
        },
        {
            question: "Breaking API changes -> What should you do?",
            answer: "Use API versioning and maintain backward compatibility so existing clients continue working."
        },
        {
            question: "Need to handle database schema changes safely -> What should you do?",
            answer: "Use versioned database migrations and backward-compatible schema changes."
        },

        // Security
        {
            question: "Untrusted user input -> What should you do?",
            answer: "Validate and sanitize inputs, use parameterized queries, and enforce authorization checks."
        },
        {
            question: "Sensitive credentials exposed in configuration -> What should you do?",
            answer: "Use a secrets manager to securely store and rotate credentials instead of hardcoding them."
        },

        // Observability
        {
            question: "Cannot see what broke -> What should you do?",
            answer: "Implement centralized logging, metrics, distributed tracing, and alerting."
        },
        {
            question: "Need to identify slow requests across services -> What should you do?",
            answer: "Use distributed tracing to follow requests across service boundaries and identify bottlenecks."
        },
        {
            question: "Need to know when a system is unhealthy -> What should you do?",
            answer: "Track health checks, latency, error rates, throughput, and resource utilization with monitoring and alerts."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));

    if (typeof startTest === "function") {
        startTest();
    }
}
