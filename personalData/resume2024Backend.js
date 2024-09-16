let interviewQuestions = [
    {question: "Can you describe the proprietary compression build step you implemented with Node.js and BabylonJS that led to a 1000% performance increase? What challenges did you face during this process?", answer: ""},

    {question: "In your experience with GitHub Actions and Node.js, what were some key practices you implemented to improve deployment reliability and reduce bad actor presence?", answer: ""},

    {question: "Can you explain how you built a distributed ML algorithm using Node.js and Redis? How did this implementation impact user retention, and what role did UtilityTheory play?", answer: ""},

    {question: "Describe the architecture and design considerations for the low-latency, real-time server you built using Node.js, Express, Websockets, and MongoDB.", answer: ""},

    {question: "How did you approach building a user matchmaking service with TypeScript and Websockets? What were the key design decisions and challenges?", answer: ""},

    {question: "Can you detail the NoSQL datastore architecture you created in MongoDB for high-performance operations? How did you ensure efficient writes, updates, and reads?", answer: "Important preamble for my datastore architecture is that we use a write behind caching strategy to sustain a low latency CX.  The database is written to in scheduled batch requests to keep datastore related overhead as low as possible. This comes at the risk of data loss and stale data being written to the database.  To compensate, we prioritize availability of our caching system as it's essentially the source of truth game specific data. We use deormalized tables for high read and writing performance, while primarily indexing data points that are most commonly read by the server (login credentials for example).  We also partition the database based on weekly challenges and seasonal updates."},

    {question: "What were the key considerations when designing a message queue with Redis for load balancing server clusters? How did it contribute to the overall system performance?", answer: ""},

    {question: "Discuss the REST API development process you followed using TypeScript, Express, and third-party APIs. What were some challenges you encountered and how did you address them?", answer: ""},

    {question: "How did you construct and automate the CI/CD pipeline for your projects? What tools and practices did you use to streamline deployments?", answer: ""},

    {question: "At Disney, how did you leverage AWS Lambdas, DynamoDB, and Redis to build a microservice-driven system? What were the key benefits and cost efficiencies achieved?", answer: ""},

    {question: "As the lead SME for AWS 'APL' UI technology, what were some key design patterns and practices you taught to engineers? How did this technology impact the development process?", answer: ""},

    {question: "Explain the integration of the CI/CD pipeline using Terraform, GitLab CI, and Splunk at Disney. How did it improve the reliability and volume of production deployments?", answer: ""},

    {question: "Can you describe the process and benefits of implementing RESTful APIs to bind frontend services with backend systems? What were some key challenges in this process?", answer: ""},

    {question: "How did you use Spring Boot to build new features and migrate external team API features in the fulfillment servers? What were the main challenges and solutions?", answer: "I used spring boot to build new apis to provision external Disney services for our core nodejs based applications.  The main challenge was understanding features of these external Disney services at a granular level in limited time.  Caching schedules, data models, request models were all examples of things I needed to know to migrate features to our fulfillment servers."},

    {question: "Discuss the CMS you built for the internal team. How did you optimize it for high-volume content, and what were the key performance considerations?", answer: "Our CMS was built using React, Vue, and NextJS.  Key performance considerations was pagination overhead, asset overhead, and latency (for streaming related assets).  I optimized by integrating event-based resource fetching on the client side, asset compression, and client side caching."},

    {question: "How did you approach mentoring other developers and conducting code reviews? What strategies did you use for effective knowledge transfer and skill development?", answer: ""},

    {question: "In your role at Disney, how did you collaborate with product owners to implement new features? Can you provide an example of a feature you worked on and how you managed the requirements?", answer: ""},

    {question: "What were some key lessons learned from working with AWS, particularly Lambdas and DynamoDB, and how have they influenced your approach to cloud-based systems?", answer: ""},

    {question: "Describe a situation where you had to troubleshoot a significant issue in a distributed system or microservice architecture. How did you diagnose and resolve the problem?", answer: ""},

    {question: "Given your experience with various technologies like React, Vue, and Spring Boot, how do you decide which technology stack to use for a new project? What factors influence your decision?", answer: "It depends on the requirements of the project.  If it's an enterprise level application in need of latency friendly features, then my stack of choice would Java and Angular. If the requirements are lighter weight for the client but large scaling and complex requirements for the server I'd opt to use React or Vue, with Nodejs/AWS like at Disney.  I'm all for using the right tool for the right job."},

    {question: "What strategies do you use for maintaining code quality and consistency across different teams and projects, especially in large-scale systems?", answer: "I take advantage of type-script, use linters, perform code review, and continually update CI pipelines with automated unit tests/integration test."}
];
localStorage.setItem("flash-cards", JSON.stringify(interviewQuestions));