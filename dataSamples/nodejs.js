let nodeJsRoutine = () => {
    let questionData = [
        {question: "What is the event loop in Node.js, and how does it work?", answer: "The event loop is a core component of Node.js that handles asynchronous operations. It works by continuously checking for and executing tasks from the event queue. When an asynchronous operation completes, its callback is added to the event queue. The event loop processes these tasks one at a time, allowing Node.js to handle many operations concurrently without blocking the execution."},

        {question: "Explain the difference between process.nextTick() and setImmediate() in Node.js.", answer: "Both `process.nextTick()` and `setImmediate()` are used to schedule callbacks, but they differ in their execution timing. `process.nextTick()` schedules the callback to be executed after the current operation completes but before the event loop continues. `setImmediate()` schedules the callback to be executed on the next iteration of the event loop, after I/O events."},

        {question: "How does Node.js handle concurrency and parallelism?", answer: "Node.js uses a single-threaded event loop for concurrency, allowing it to handle multiple operations simultaneously without blocking. For parallelism, Node.js can use worker threads or external processes via the `child_process` module. Additionally, it can leverage native bindings and libraries to perform operations in parallel."},

        {question: "What are some common patterns for error handling in asynchronous code in Node.js?", answer: "Common patterns include using callbacks with an error-first argument (err, result), promises with `.catch()` for handling rejections, and async/await with try/catch blocks. The choice of pattern depends on the complexity of the code and personal or team preference."},

        {question: "Describe how Node.js handles large file uploads or downloads.", answer: "Node.js handles large file uploads or downloads by using streams. Streams allow data to be processed in chunks rather than loading the entire file into memory at once. This approach helps to manage memory usage efficiently and improves performance for large file operations."},

        {question: "What is the purpose of the `cluster` module in Node.js, and how does it work?", answer: "The `cluster` module allows Node.js applications to take advantage of multi-core systems by creating child processes (workers) that run simultaneously. Each worker process has its own event loop and memory space but shares the same server port, allowing for load balancing and better utilization of CPU resources."},

        {question: "Explain the concept of 'backpressure' in Node.js streams and how to handle it.", answer: "Backpressure occurs when a writable stream is receiving data faster than it can process it. To handle backpressure, Node.js streams implement a flow control mechanism where the writable stream signals when it is ready to accept more data. The readable stream pauses when backpressure is detected and resumes when the writable stream is ready."},

        {question: "How can you ensure that your Node.js application is scalable?", answer: "To ensure scalability, you can use techniques such as load balancing with the `cluster` module or a process manager like PM2, horizontal scaling by deploying multiple instances behind a load balancer, optimizing database queries, using caching strategies, and employing asynchronous operations to handle concurrent requests efficiently."},

        {question: "What are some best practices for securing a Node.js application?", answer: "Best practices include using HTTPS for secure communication, validating and sanitizing user input to prevent injection attacks, managing dependencies and their vulnerabilities with tools like npm audit, implementing proper authentication and authorization, and following the principle of least privilege for access controls."},

        {question: "Explain the role of the `package.json` file in a Node.js project.", answer: "The `package.json` file is a crucial part of a Node.js project. It contains metadata about the project, including its dependencies, scripts, version, author, license, and other configurations. It allows npm to manage project dependencies and provides a way to define and run project-specific scripts."},

        {question: "What are some common performance bottlenecks in Node.js applications, and how can they be addressed?", answer: "Common performance bottlenecks include synchronous I/O operations, inefficient use of CPU-bound tasks, and memory leaks. To address these, use asynchronous APIs for I/O operations, offload CPU-bound tasks to worker threads or child processes, and monitor and manage memory usage with tools like heap snapshots and profiling."},

        {question: "How does Node.js integrate with databases, and what are some common patterns for database interaction?", answer: "Node.js integrates with databases using various drivers or ORMs (Object-Relational Mappers). Common patterns include using asynchronous queries with callbacks or promises, pooling database connections to manage resources efficiently, and using libraries like Mongoose for MongoDB or Sequelize for SQL databases."},

        {question: "What is the difference between `require()` and `import` statements in Node.js?", answer: "`require()` is used in CommonJS modules and is synchronous, while `import` is used in ES modules and supports asynchronous loading. ES modules provide a more modern syntax and support features like static analysis and tree shaking. Node.js supports ES modules with `.mjs` files or by setting `type': 'module` in `package.json`."},

        {question: "How can you debug a Node.js application effectively?", answer: "Effective debugging techniques include using the built-in `debug` module or `console.log()` statements, leveraging the Node.js Inspector with `node --inspect` and tools like Chrome DevTools, using breakpoints and stepping through code, and employing logging libraries to record application behavior and errors."},

        {question: "What is the purpose of the `vm` module in Node.js, and how can it be used?", answer: "The `vm` module provides APIs for compiling and running code within V8 virtual machine contexts. It allows for the execution of code in isolated contexts, which can be useful for sandboxing and executing dynamic code safely. It can also be used to evaluate and run code snippets in a controlled environment."},

        {question: "How do you manage configuration settings in a Node.js application?", answer: "Configuration settings can be managed using environment variables, configuration files (e.g., JSON or YAML), or dedicated libraries like `config`, `dotenv`, or `nconf`. Environment variables are commonly used to manage settings in different environments (development, staging, production), while configuration files offer more flexibility for complex setups."},

        {question: "What are some strategies for handling long-running tasks in Node.js?", answer: "Strategies for handling long-running tasks include using background workers with the `child_process` module, utilizing worker threads for parallel execution, offloading tasks to external services or queues (e.g., RabbitMQ, Redis), and breaking tasks into smaller chunks that can be processed asynchronously."},

        {question: "Explain the role of middleware in an Express.js application and provide examples.", answer: "Middleware in Express.js is a function that has access to the request, response, and the next middleware function in the stack. It is used to modify requests, handle responses, and perform tasks like authentication, logging, and error handling. Examples include `body-parser` for parsing request bodies and `morgan` for logging HTTP requests."},

        {question: "How can you implement rate limiting in a Node.js application?", answer: "Rate limiting can be implemented using middleware such as `express-rate-limit` in Express.js, which restricts the number of requests from a single IP address or user within a specified timeframe. It helps prevent abuse and ensure fair usage of resources by controlling the request rate."},

        {question: "What is the `async_hooks` module in Node.js, and how is it used?", answer: "The `async_hooks` module provides APIs to track asynchronous resources and their lifecycle in Node.js. It allows developers to monitor and debug asynchronous operations by creating hooks for events like creation, destruction, and execution of asynchronous operations, helping with tracing and profiling."},

        {question: "How can you handle cross-origin requests in a Node.js application?", answer: "Cross-origin requests can be handled by setting appropriate CORS (Cross-Origin Resource Sharing) headers in responses. This can be achieved using middleware such as `cors` in Express.js, which allows specifying which origins, methods, and headers are permitted for cross-origin requests."},

        {question: "What are some common strategies for managing state in a Node.js application?", answer: "Common strategies for managing state include using in-memory storage for temporary state, leveraging databases for persistent state, employing session management for user sessions, and using state management libraries or patterns such as Redux for complex applications."},

        {question: "How do you handle graceful shutdowns in a Node.js application?", answer: "Graceful shutdowns can be handled by listening to termination signals (e.g., SIGTERM) and performing cleanup tasks before exiting. This includes closing database connections, stopping servers, and completing in-progress requests. Libraries like `graceful-shutdown` can help manage this process more smoothly."}
    ];
    localStorage.setItem("flash-cards", JSON.stringify(questionData));
    location.reload();
}