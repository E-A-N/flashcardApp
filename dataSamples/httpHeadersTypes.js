let quizArray = [
    {
        question: "What are Request headers in HTTP?",
        answer: "Request headers contain more information about the resource to be fetched, or about the client requesting the resource."
    },
    {
        question: "What information is included in Response headers?",
        answer: "Response headers hold additional information about the response, such as its location or details about the server providing it."
    },
    {
        question: "What do Representation headers provide?",
        answer: "Representation headers contain information about the body of the resource, such as its MIME type, or encoding/compression applied."
    },
    {
        question: "What is the purpose of Payload headers?",
        answer: "Payload headers contain representation-independent information about payload data, including content length and the encoding used for transport."
    },
    {
        question: "What are End-to-End HTTP headers?",
        answer: "End-to-end headers must be transmitted to the final recipient of the message: the server for a request, or the client for a response. Intermediate proxies must retransmit these headers unmodified and caches must store them."
    },
    {
        question: "How do Hop-by-Hop headers differ from End-to-End headers?",
        answer: "Hop-by-Hop headers are meaningful only for a single transport-level connection and must not be retransmitted by proxies or cached. End-to-end headers, in contrast, must be transmitted to the final recipient and stored by caches."
    },
    {
        question: "Which HTTP header type can only be set using the Connection header?",
        answer: "Only hop-by-hop headers may be set using the Connection header."
    }
];

localStorage.setItem("flash-cards", JSON.stringify(quizArray));