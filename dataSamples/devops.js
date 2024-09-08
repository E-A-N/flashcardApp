globalRoutines.devOps = () => {
    let quizArray = [
        // Docker
        {
            question: "What is Docker and how does it differ from a virtual machine?",
            answer: "Docker is a platform for developing, shipping, and running applications inside containers. Unlike virtual machines, which virtualize hardware, Docker containers virtualize the operating system, allowing for lightweight, fast, and consistent application deployment."
        },
        {
            question: "What are Docker images and how are they used?",
            answer: "Docker images are read-only templates used to create Docker containers. They include the application code, runtime, libraries, and dependencies. Images are used to ensure consistent application environments across different stages of development and deployment."
        },
        {
            question: "What is a Docker container and how does it work?",
            answer: "A Docker container is a lightweight, standalone executable package that includes everything needed to run an application: code, runtime, system tools, libraries, and settings. Containers run on top of the Docker engine and share the host OS kernel while being isolated from each other."
        },
        {
            question: "How does Docker Compose simplify multi-container applications?",
            answer: "Docker Compose is a tool for defining and running multi-container Docker applications. Using a YAML file, you can define services, networks, and volumes, and manage all aspects of a multi-container setup with a single command, making it easier to coordinate complex environments."
        },
        {
            question: "What is the purpose of Docker Swarm and how does it differ from Kubernetes?",
            answer: "Docker Swarm is Docker's native clustering and orchestration tool, designed to manage and scale Docker containers across multiple hosts. It differs from Kubernetes in its simpler setup and lower complexity, while Kubernetes offers more extensive features and greater scalability."
        },
        {
            question: "How does Docker handle networking and what are some common network types?",
            answer: "Docker handles networking by creating virtual networks that containers use to communicate. Common network types include bridge (default network for containers), host (directly uses the host network stack), and overlay (used for multi-host networking in Docker Swarm)."
        },
        {
            question: "What is Dockerfile and how is it used to build Docker images?",
            answer: "A Dockerfile is a script containing a series of instructions to build a Docker image. It defines the base image, copies files, sets environment variables, and executes commands to create a custom image that can be used to instantiate containers."
        },
        {
            question: "What are Docker volumes and how do they differ from bind mounts?",
            answer: "Docker volumes are managed by Docker and used to store data outside of containers, providing persistent storage. Bind mounts, on the other hand, map specific host directories to container directories, offering more direct control over file access and modification."
        },
        {
            question: "How can you ensure the security of Docker containers?",
            answer: "To ensure container security, use minimal base images, regularly update images to patch vulnerabilities, follow the principle of least privilege for container permissions, and use Docker security features like user namespaces and secure networks."
        },
        {
            question: "What are Docker secrets and how are they managed?",
            answer: "Docker secrets are used to manage sensitive information such as passwords and API keys. They are securely stored and transmitted to containers, ensuring that sensitive data is not exposed in image layers or container configuration files."
        },
        {
            question: "How do you monitor Docker containers and what tools can be used?",
            answer: "Monitoring Docker containers involves tracking metrics like resource usage and application performance. Tools for monitoring include Docker's built-in stats command, third-party solutions like Prometheus and Grafana, and commercial options like Datadog and New Relic."
        },

        // Infrastructure as Code (IaC)
        {
            question: "What is Infrastructure as Code (IaC) and why is it important?",
            answer: "Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure using code and automation tools. It is important because it enables consistency, repeatability, and version control of infrastructure configurations, reducing manual errors and accelerating deployment."
        },
        {
            question: "What are the benefits of using Terraform for IaC?",
            answer: "Terraform provides benefits such as a declarative configuration language, provider support for multiple cloud platforms, modularity through reusable modules, and the ability to manage infrastructure lifecycle with state management and automated changes."
        },
        {
            question: "How does AWS CloudFormation differ from Terraform?",
            answer: "AWS CloudFormation is an IaC tool specific to AWS, using JSON or YAML to define AWS resources. Terraform, on the other hand, is cloud-agnostic and uses HashiCorp Configuration Language (HCL), allowing for multi-cloud and provider-agnostic configurations."
        },
        {
            question: "What is the purpose of Ansible in IaC, and how does it differ from Terraform?",
            answer: "Ansible is an IaC tool focused on configuration management and application deployment. Unlike Terraform, which manages infrastructure provisioning, Ansible is used for automating server configuration and software installation using a simple YAML-based syntax."
        },
        {
            question: "How does version control benefit IaC practices?",
            answer: "Version control benefits IaC practices by providing a history of changes to infrastructure code, enabling rollback to previous configurations, facilitating collaboration among team members, and ensuring that infrastructure changes are tracked and auditable."
        },
        {
            question: "What are the principles of declarative vs. imperative IaC?",
            answer: "Declarative IaC specifies the desired state of infrastructure without detailing the steps to achieve it, allowing the tool to determine the actions needed. Imperative IaC describes the exact steps to configure infrastructure, providing more control but requiring detailed instructions."
        },
        {
            question: "What are some common challenges in implementing IaC?",
            answer: "Common challenges include managing complex dependencies, handling configuration drift, ensuring security and compliance, dealing with state management issues, and integrating IaC tools with existing workflows and systems."
        },
        {
            question: "How does IaC support continuous integration and continuous deployment (CI/CD) pipelines?",
            answer: "IaC supports CI/CD pipelines by automating infrastructure provisioning and configuration, allowing for consistent and repeatable environments across development, testing, and production stages. This helps streamline deployment processes and reduce manual intervention."
        },
        {
            question: "What is the role of state management in Terraform, and how does it work?",
            answer: "In Terraform, state management involves maintaining a state file that tracks the current state of the infrastructure. The state file enables Terraform to determine the changes required to align the infrastructure with the desired configuration, facilitating accurate updates and deployments."
        },
        {
            question: "What are Terraform modules, and how do they contribute to IaC?",
            answer: "Terraform modules are reusable, encapsulated configurations that allow for the organization and reuse of infrastructure code. They contribute to IaC by promoting modularity, reducing duplication, and simplifying complex infrastructure setups."
        },

        // GitHub Actions
        {
            question: "What is GitHub Actions and how does it facilitate CI/CD?",
            answer: "GitHub Actions is a CI/CD and automation service integrated into GitHub. It allows users to define workflows using YAML files, automating tasks like building, testing, and deploying code. It integrates seamlessly with GitHub repositories for continuous integration and deployment."
        },
        {
            question: "How do you define a workflow in GitHub Actions?",
            answer: "A workflow in GitHub Actions is defined using a YAML file placed in the `.github/workflows` directory of a repository. It includes job definitions, steps, and actions, specifying the sequence of tasks to be executed in response to events like pushes or pull requests."
        },
        {
            question: "What are GitHub Actions runners and what is their role?",
            answer: "GitHub Actions runners are the environments where workflows execute. They can be GitHub-hosted or self-hosted. Runners are responsible for running the specified actions and jobs, handling tasks such as building and testing code."
        },
        {
            question: "What is a GitHub Action, and how is it different from a job?",
            answer: "A GitHub Action is a single task or command executed as part of a workflow, such as checking out code or installing dependencies. A job is a collection of steps (actions) that run on a single runner, and multiple jobs can be defined within a workflow."
        },
        {
            question: "How can you use secrets in GitHub Actions and why are they important?",
            answer: "Secrets in GitHub Actions are sensitive values like API keys or passwords stored securely in repository settings. They are important for protecting sensitive information used in workflows and preventing exposure in logs or configuration files."
        },
        {
            question: "What is a matrix build in GitHub Actions, and how can it be used?",
            answer: "A matrix build allows you to run the same set of jobs with different configurations, such as multiple versions of a language or different operating systems. It is defined using a matrix strategy in the workflow YAML file and helps test code across various environments."
        },
        {
            question: "How does caching work in GitHub Actions and what are its benefits?",
            answer: "Caching in GitHub Actions speeds up workflows by storing and reusing dependencies or build outputs between runs. This reduces build times and resource usage by avoiding redundant work, such as re-downloading dependencies."
        },
        {
            question: "What are the best practices for organizing workflows in GitHub Actions?",
            answer: "Best practices include keeping workflows modular by using reusable actions, defining clear naming conventions, managing secrets securely, leveraging caching, and using matrix builds to ensure cross-environment compatibility."
        },
        {
            question: "How can you trigger GitHub Actions workflows from external events?",
            answer: "GitHub Actions workflows can be triggered by external events using the `repository_dispatch` event. This allows integration with other systems or APIs to start workflows in response to external actions or conditions."
        },
        {
            question: "What is the purpose of GitHub Actions artifacts, and how are they used?",
            answer: "Artifacts in GitHub Actions are files or data produced during workflow runs that are stored for later use. They can be used to share build outputs, test results, or any other files between jobs or workflows."
        },

        // GitLab CI
        {
            question: "What is GitLab CI/CD and how does it differ from other CI/CD systems?",
            answer: "GitLab CI/CD is GitLab's integrated continuous integration and continuous deployment system. It provides a single application for source code management, CI/CD pipelines, and monitoring, offering tight integration with GitLab repositories compared to other systems like Jenkins or Travis CI."
        },
        {
            question: "How do you define a pipeline in GitLab CI/CD?",
            answer: "A pipeline in GitLab CI/CD is defined using a `.gitlab-ci.yml` file placed in the root of the repository. The file includes stages, jobs, and scripts, specifying the sequence of tasks and their execution rules to automate the build, test, and deployment processes."
        },
        {
            question: "What are GitLab CI/CD runners and how are they configured?",
            answer: "GitLab CI/CD runners are agents that execute the jobs defined in pipelines. They can be shared runners provided by GitLab or specific runners set up by users. Configuration involves registering the runner with GitLab and specifying its capabilities and environment."
        },
        {
            question: "What is the purpose of GitLab CI/CD stages and how do they work?",
            answer: "Stages in GitLab CI/CD organize jobs into sequential phases of a pipeline, such as build, test, and deploy. Jobs within the same stage run in parallel, while stages run sequentially, ensuring a structured and orderly execution of tasks."
        },
        {
            question: "How can you use GitLab CI/CD environment variables and why are they important?",
            answer: "Environment variables in GitLab CI/CD are used to store configuration values and secrets that can be accessed during pipeline execution. They are important for managing different settings for various environments (e.g., production, staging) and keeping sensitive information secure."
        },
        {
            question: "What is the purpose of GitLab CI/CD cache, and how does it differ from artifacts?",
            answer: "The GitLab CI/CD cache is used to store and reuse files between pipeline runs, speeding up jobs by avoiding repetitive tasks like dependency installation. Artifacts are used to persist and share files generated by jobs, such as build outputs or test reports."
        },
        {
            question: "How do GitLab CI/CD pipelines handle job dependencies?",
            answer: "Job dependencies in GitLab CI/CD are managed using the `needs` keyword, which specifies which jobs must complete before a job starts. This allows for better control over job execution order and optimizes pipeline performance by running jobs in parallel when possible."
        },
        {
            question: "What are GitLab CI/CD includes and how do they help with pipeline configuration?",
            answer: "GitLab CI/CD includes allow you to modularize pipeline configurations by including external YAML files or templates. This helps manage complex pipelines by promoting code reuse and maintaining a clean and organized configuration."
        },
        {
            question: "How does GitLab CI/CD support deployment to multiple environments?",
            answer: "GitLab CI/CD supports deployment to multiple environments by defining environment-specific jobs and using environment variables to manage configuration differences. Environments can be configured to handle different stages of deployment, such as development, staging, and production."
        },
        {
            question: "What are some common troubleshooting steps for GitLab CI/CD pipelines?",
            answer: "Common troubleshooting steps include checking pipeline logs for errors, verifying configuration files for syntax or logical issues, ensuring that runners are properly registered and available, and using GitLab's built-in debugging tools to identify and resolve issues."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    location.reload();
}
