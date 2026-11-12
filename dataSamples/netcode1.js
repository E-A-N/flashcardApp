
globalRoutines.netcode1 = () => {
    let quizArray = [
        {
            question: "What is network programming?",
            answer: "Network programming is writing applications that communicate with other devices or services over a network using protocols like TCP and UDP."
        },
        {
            question: "What is a socket?",
            answer: "A socket is an endpoint for network communication, typically identified by an IP address and port."
        },
        {
            question: "What is an IP address?",
            answer: "An IP address identifies a device or network interface on a network. IPv4 uses 32 bits and IPv6 uses 128 bits."
        },
        {
            question: "What is a port?",
            answer: "A port is a numerical identifier used to direct network traffic to a specific application or service."
        },
        {
            question: "What is TCP?",
            answer: "TCP is a connection-oriented transport protocol that provides reliable, ordered delivery of data."
        },
        {
            question: "What is UDP?",
            answer: "UDP is a connectionless transport protocol that sends datagrams without guaranteeing delivery or ordering."
        },
        {
            question: "What is the difference between TCP and UDP?",
            answer: "TCP provides reliable, ordered byte-stream communication. UDP provides lightweight datagram communication without built-in delivery guarantees."
        },
        {
            question: "What is a TCP handshake?",
            answer: "The TCP three-way handshake establishes a connection using SYN, SYN-ACK, and ACK packets."
        },
        {
            question: "What is a TCP stream?",
            answer: "A TCP stream is a continuous sequence of bytes. TCP does not preserve application message boundaries."
        },
        {
            question: "How do you create a TCP client in Rust?",
            answer: "Using TcpStream::connect(\"127.0.0.1:8080\").await with Tokio or TcpStream::connect() with the standard library."
        },
        {
            question: "How do you create a TCP server in Rust?",
            answer: "Create a TcpListener with TcpListener::bind(), then use accept() to receive incoming connections."
        },
        {
            question: "What is TcpStream?",
            answer: "TcpStream represents an established TCP connection and provides methods to read and write bytes."
        },
        {
            question: "What is TcpListener?",
            answer: "TcpListener listens for incoming TCP connections on a specified IP address and port."
        },
        {
            question: "What is the difference between read() and write()?",
            answer: "read() receives bytes from a stream, while write() sends bytes. Both may process fewer bytes than requested."
        },
        {
            question: "What does read_exact() do?",
            answer: "read_exact() attempts to fill the entire provided buffer, returning an error if the stream ends before the buffer is filled."
        },
        {
            question: "What does write_all() do?",
            answer: "write_all() continues writing until all provided bytes have been written or an error occurs."
        },
        {
            question: "What is message framing?",
            answer: "Message framing defines how an application separates individual messages within a continuous TCP byte stream."
        },
        {
            question: "What is a length-prefixed protocol?",
            answer: "A protocol where each message starts with a length field indicating how many bytes belong to the message."
        },
        {
            question: "How do you create a UDP socket in Rust?",
            answer: "Using UdpSocket::bind(\"0.0.0.0:8080\").await with Tokio."
        },
        {
            question: "What is UdpSocket::recv_from()?",
            answer: "It receives a UDP datagram and returns the number of bytes received and the sender's socket address."
        },
        {
            question: "What is UdpSocket::send_to()?",
            answer: "It sends a UDP datagram to a specified destination socket address."
        },
        {
            question: "What does UdpSocket::connect() do?",
            answer: "It associates a default peer address with a UDP socket. It does not perform a TCP-style connection handshake."
        },
        {
            question: "What is a UDP datagram?",
            answer: "A datagram is an independent packet of data sent over UDP. Unlike TCP, UDP preserves datagram boundaries."
        },
        {
            question: "What is packet loss?",
            answer: "Packet loss occurs when network packets fail to reach their destination."
        },
        {
            question: "What is latency?",
            answer: "Latency is the time it takes for data to travel between two endpoints, often measured in milliseconds."
        },
        {
            question: "What is round-trip time (RTT)?",
            answer: "RTT measures the time between sending a message and receiving its corresponding response."
        },
        {
            question: "What is a network timeout?",
            answer: "A timeout limits how long an application waits for a network operation before treating it as unsuccessful."
        },
        {
            question: "How do you implement a timeout in Tokio?",
            answer: "Use tokio::time::timeout(Duration::from_secs(3), future).await to limit how long an asynchronous operation can take."
        },
        {
            question: "What is DNS?",
            answer: "DNS translates human-readable domain names, such as example.com, into IP addresses."
        },
        {
            question: "What is ToSocketAddrs?",
            answer: "ToSocketAddrs is a Rust trait that converts socket address representations, including hostnames and ports, into socket addresses."
        },
        {
            question: "What is TLS?",
            answer: "TLS encrypts network communication and provides authentication and integrity protection."
        },
        {
            question: "What is HTTPS?",
            answer: "HTTPS is HTTP communication protected by TLS."
        },
        {
            question: "What is a WebSocket?",
            answer: "WebSocket is a protocol providing persistent, bidirectional, message-based communication over a connection established through an HTTP handshake."
        },
        {
            question: "What is the difference between WebSockets and TCP?",
            answer: "TCP provides a reliable byte stream. WebSockets add message framing, control frames, and a standardized communication protocol on top of TCP."
        },
        {
            question: "What is a WebSocket Ping frame?",
            answer: "A WebSocket Ping is a control frame used to check whether the remote endpoint is responsive."
        },
        {
            question: "What is a WebSocket Pong frame?",
            answer: "A Pong is a WebSocket control frame sent in response to a Ping frame, generally carrying the same payload."
        },
        {
            question: "What is tokio?",
            answer: "Tokio is an asynchronous runtime for Rust that provides task scheduling, asynchronous networking, timers, and synchronization primitives."
        },
        {
            question: "What does async mean in Rust?",
            answer: "async defines a function or block that produces a Future, allowing asynchronous operations to suspend without blocking the executing thread."
        },
        {
            question: "What does await do?",
            answer: "await suspends an asynchronous task until its Future can make progress, allowing other tasks to run."
        },
        {
            question: "What is a Future in Rust?",
            answer: "A Future represents an asynchronous computation that may produce a value at some point in the future."
        },
        {
            question: "What is tokio::spawn()?",
            answer: "tokio::spawn() schedules an asynchronous task on the Tokio runtime, allowing it to execute concurrently with other tasks."
        },
        {
            question: "What is the difference between concurrency and parallelism?",
            answer: "Concurrency means managing multiple tasks during overlapping periods. Parallelism means executing multiple tasks simultaneously."
        },
        {
            question: "What is a half-open TCP connection?",
            answer: "A half-open TCP connection is a situation where one endpoint believes a connection is active while the other endpoint has lost or closed it."
        },
        {
            question: "What is TCP keepalive?",
            answer: "TCP keepalive periodically probes an otherwise idle connection to help detect unreachable peers."
        },
        {
            question: "What is head-of-line blocking?",
            answer: "Head-of-line blocking occurs when delayed or missing data prevents subsequent data from being delivered or processed."
        },
        {
            question: "What is QUIC?",
            answer: "QUIC is a secure transport protocol built on UDP that provides reliable streams, congestion control, and multiplexing."
        },
        {
            question: "What is the difference between QUIC and TCP?",
            answer: "TCP provides a reliable ordered byte stream. QUIC runs over UDP and supports multiple independent streams, integrated TLS 1.3, and connection migration."
        },
        {
            question: "What is the purpose of a network heartbeat?",
            answer: "A heartbeat is a periodic message used to check whether a remote application or connection is still responsive."
        },
        {
            question: "What is the difference between a heartbeat and a timeout?",
            answer: "A heartbeat is a periodic health-check message. A timeout defines how long to wait before considering an operation or connection unresponsive."
        },
        {
            question: "What is a connection pool?",
            answer: "A connection pool maintains reusable network connections to avoid repeatedly establishing new connections."
        },
        {
            question: "What is graceful connection shutdown?",
            answer: "Graceful shutdown closes a connection in an orderly manner, allowing pending data to be processed and resources to be released."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));

    if (typeof startTest === "function") {
        startTest();
    }
};
