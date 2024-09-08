globalRoutines.systemDesignAndDatabases = () => {
    let quizArray = [
        // System Design
        {
            question: "What is microservices architecture and what are its advantages?",
            answer: "Microservices architecture is an approach where a large application is composed of small, loosely coupled services. Advantages include improved scalability, easier deployment, better fault isolation, and the ability to use different technologies for different services."
        },
        {
            question: "What is the CAP theorem and how does it apply to distributed systems?",
            answer: "The CAP theorem states that in a distributed system, you can only achieve two out of three of the following: Consistency, Availability, and Partition Tolerance. This means that systems must choose between consistency and availability when facing network partitions."
        },
        {
            question: "How does load balancing work in a distributed system?",
            answer: "Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed. Techniques include round-robin, least connections, and IP hash methods. It helps improve availability and reliability."
        },
        {
            question: "What are the trade-offs between horizontal and vertical scaling?",
            answer: "Horizontal scaling involves adding more machines to a system, which is often more cost-effective and provides better fault tolerance. Vertical scaling involves adding more resources (CPU, RAM) to a single machine, which can be limited by hardware constraints and has a single point of failure."
        },
        {
            question: "What is a distributed database and what are its challenges?",
            answer: "A distributed database is a database that is spread across multiple locations or systems. Challenges include ensuring data consistency, handling network partitions, managing replication, and providing fault tolerance."
        },
        {
            question: "How does caching improve system performance?",
            answer: "Caching stores frequently accessed data in a high-speed storage layer (e.g., RAM) to reduce the time needed to retrieve data from slower storage. This decreases latency and reduces the load on backend systems."
        },
        {
            question: "What is a consistent hashing algorithm and why is it used in distributed systems?",
            answer: "Consistent hashing is a technique used to distribute data across a cluster of nodes in a way that minimizes reorganization when nodes are added or removed. It helps in balancing the load and improving the performance of distributed systems."
        },
        {
            question: "What is a service mesh and how does it benefit microservices?",
            answer: "A service mesh is a dedicated infrastructure layer that manages service-to-service communication in microservices architectures. It provides features like load balancing, service discovery, and traffic management, while also offering observability and security."
        },
        {
            question: "Explain the concept of eventual consistency.",
            answer: "Eventual consistency is a consistency model used in distributed systems where, given enough time, all replicas of data will converge to the same value. It is often used to achieve higher availability and partition tolerance."
        },
        {
            question: "What is sharding and how does it help with database scalability?",
            answer: "Sharding involves breaking a database into smaller, more manageable pieces called shards, each of which can be stored on different servers. This helps distribute the load and improve scalability by allowing parallel processing of requests."
        },
        
        // SQL
        {
            question: "What is the difference between an INNER JOIN and a LEFT JOIN in SQL?",
            answer: "An INNER JOIN returns only the rows that have matching values in both tables, while a LEFT JOIN returns all rows from the left table and the matched rows from the right table. Unmatched rows from the right table will be NULL."
        },
        {
            question: "What is normalization and what are its benefits?",
            answer: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. Benefits include reduced data duplication, easier maintenance, and improved query performance."
        },
        {
            question: "Explain the purpose and usage of indexes in SQL databases.",
            answer: "Indexes improve query performance by allowing the database to quickly locate and access data without scanning the entire table. They are especially useful for speeding up searches and joins, though they can slow down insert, update, and delete operations."
        },
        {
            question: "What is a stored procedure and what are its advantages?",
            answer: "A stored procedure is a precompiled collection of SQL statements that can be executed as a single call. Advantages include improved performance, enhanced security, and the ability to encapsulate complex business logic."
        },
        {
            question: "What is the difference between a primary key and a foreign key?",
            answer: "A primary key uniquely identifies each record in a table and cannot be NULL. A foreign key is a field in one table that links to the primary key of another table, establishing a relationship between the two tables."
        },
        {
            question: "What are transactions in SQL and why are they important?",
            answer: "Transactions are sequences of SQL operations that are executed as a single unit. They ensure data integrity by following the ACID properties (Atomicity, Consistency, Isolation, Durability), which guarantee that operations are completed successfully or not at all."
        },
        {
            question: "What is the difference between UNION and UNION ALL?",
            answer: "UNION combines the results of two or more SELECT statements and removes duplicate rows, while UNION ALL combines results and includes all duplicates."
        },
        {
            question: "What is a view in SQL and how is it used?",
            answer: "A view is a virtual table created by a query that selects data from one or more tables. It provides a way to simplify complex queries, present data in a specific format, and control user access to certain parts of the data."
        },
        {
            question: "What is denormalization and when might it be used?",
            answer: "Denormalization is the process of intentionally introducing redundancy into a database to improve read performance by reducing the need for complex joins. It might be used in read-heavy applications where query performance is critical."
        },
        {
            question: "What are SQL injection attacks and how can they be prevented?",
            answer: "SQL injection attacks occur when an attacker inserts malicious SQL code into a query, potentially accessing or manipulating data. Prevention techniques include using parameterized queries, stored procedures, and input validation."
        },
        
        // NoSQL
        {
            question: "What are the key differences between NoSQL and SQL databases?",
            answer: "NoSQL databases are non-relational and designed for flexible schema and horizontal scaling, while SQL databases are relational with a fixed schema and vertical scaling. NoSQL databases often handle unstructured data and high-velocity workloads better."
        },
        {
            question: "What are the different types of NoSQL databases and their use cases?",
            answer: "The main types of NoSQL databases are document stores (e.g., MongoDB), key-value stores (e.g., Redis), column-family stores (e.g., Cassandra), and graph databases (e.g., Neo4j). Each type is suited to different use cases such as document management, real-time analytics, and complex relationships."
        },
        {
            question: "How does horizontal scaling work in NoSQL databases?",
            answer: "Horizontal scaling in NoSQL databases involves adding more nodes to a cluster to distribute the load and increase capacity. Data is partitioned across nodes, allowing the system to handle more traffic and larger datasets without a single point of failure."
        },
        {
            question: "What is eventual consistency and how is it implemented in NoSQL databases?",
            answer: "Eventual consistency is a consistency model where data changes are propagated to all replicas over time. In NoSQL databases, it is often implemented using asynchronous replication and conflict resolution mechanisms to ensure eventual convergence of data."
        },
        {
            question: "What is a document-oriented database and how does it differ from a relational database?",
            answer: "A document-oriented database stores data in documents (e.g., JSON or BSON) rather than rows and columns. It supports flexible schema designs and is optimized for hierarchical data, in contrast to the structured format of relational databases."
        },
        {
            question: "How does sharding work in NoSQL databases?",
            answer: "Sharding in NoSQL databases involves partitioning data across multiple servers or nodes to distribute the load. Each shard contains a subset of the data, and queries are routed to the appropriate shard to balance the workload and improve performance."
        },
        {
            question: "What is a key-value store and when would you use one?",
            answer: "A key-value store is a NoSQL database that stores data as key-value pairs. It is ideal for scenarios requiring high-speed read and write operations with simple data retrieval, such as caching, session management, and real-time analytics."
        },
        {
            question: "What are the benefits and drawbacks of using a graph database?",
            answer: "Benefits of graph databases include efficient handling of complex relationships and queries involving traversals. Drawbacks include potential difficulties in scaling and the need for specialized query languages and skills."
        },
        {
            question: "How do NoSQL databases handle schema evolution compared to SQL databases?",
            answer: "NoSQL databases handle schema evolution more flexibly by allowing changes to the data model without requiring a predefined schema. This contrasts with SQL databases, where schema changes often require migration scripts and can impact existing data."
        },
        {
            question: "What is a column-family store and how is it different from a document store?",
            answer: "A column-family store organizes data into column families, which group related columns together. It differs from a document store, which stores data in documents with flexible schemas. Column-family stores are optimized for read and write operations on large datasets."
        },
        {
            question: "What is the role of the CAP theorem in the design of NoSQL databases?",
            answer: "The CAP theorem influences NoSQL database design by requiring trade-offs between Consistency, Availability, and Partition Tolerance. NoSQL databases often prioritize Availability and Partition Tolerance, accepting eventual consistency as a trade-off."
        },
        {
            question: "What is the difference between a primary key and a secondary index in a NoSQL database?",
            answer: "A primary key uniquely identifies a record and is used for efficient lookups. A secondary index is an additional structure that allows querying based on non-primary key attributes, improving query flexibility but potentially impacting write performance."
        },
        {
            question: "What are some common strategies for handling high-velocity data in NoSQL databases?",
            answer: "Strategies include using in-memory databases for fast access, employing data partitioning (sharding) to distribute load, optimizing indexing for query performance, and leveraging caching mechanisms to reduce database load."
        },
        {
            question: "How does data replication work in NoSQL databases and what are its challenges?",
            answer: "Data replication in NoSQL databases involves copying data across multiple nodes to ensure availability and fault tolerance. Challenges include managing consistency, handling network partitions, and dealing with potential conflicts during asynchronous replication."
        },
        {
            question: "What is the significance of CAP theorem in choosing between NoSQL databases for specific applications?",
            answer: "The CAP theorem helps determine the best NoSQL database for an application by balancing the trade-offs between Consistency, Availability, and Partition Tolerance. For example, applications requiring strong consistency might choose databases that prioritize consistency over availability."
        },
        {
            question: "What are some considerations when migrating from a SQL database to a NoSQL database?",
            answer: "Considerations include data modeling differences, schema design, query language differences, consistency requirements, and the impact on application logic. A thorough assessment of data access patterns and performance needs is crucial for a successful migration."
        },
        {
            question: "How does a distributed NoSQL database handle network partitions?",
            answer: "A distributed NoSQL database handles network partitions by using techniques like data replication, partitioning, and eventual consistency models. These strategies help ensure that the system remains available and can eventually synchronize data once partitions are resolved."
        },
        {
            question: "What are the trade-offs involved in choosing between consistency and availability in NoSQL databases?",
            answer: "Choosing between consistency and availability involves balancing the need for immediate data accuracy (consistency) against the need for system uptime and responsiveness (availability). Trade-offs may include accepting eventual consistency for improved availability or sacrificing some availability to ensure strong consistency."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function"){
        startTest();
    }
}
