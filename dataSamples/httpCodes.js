const httpStatuses = [
    { "question": "What is HTTP status 100?", "answer": "Indicates that the client should continue the request or ignore the response if the request is already finished." },
    { "question": "What is HTTP status 101?", "answer": "Sent in response to an Upgrade request header and indicates the protocol the server is switching to." },
    { "question": "What is HTTP status 102?", "answer": "Indicates that the server has received and is processing the request, but no response is available yet." },
    { "question": "What is HTTP status 103?", "answer": "Used with the Link header to start preloading resources while the server prepares a response." },
    { "question": "What is HTTP status 200?", "answer": "The request succeeded. The result of success depends on the HTTP method used." },
    { "question": "What is HTTP status 201?", "answer": "The request succeeded, and a new resource was created as a result." },
    { "question": "What is HTTP status 202?", "answer": "The request has been received but not yet acted upon. It is noncommittal." },
    { "question": "What is HTTP status 203?", "answer": "The returned metadata is not exactly the same as from the origin server but collected from a local or third-party copy." },
    { "question": "What is HTTP status 204?", "answer": "There is no content to send for this request, but headers may be useful." },
    { "question": "What is HTTP status 205?", "answer": "Tells the user agent to reset the document which sent this request." },
    { "question": "What is HTTP status 206?", "answer": "Used when the Range header is sent to request only part of a resource." },
    { "question": "What is HTTP status 207?", "answer": "Conveys information about multiple resources, for situations with multiple status codes." },
    { "question": "What is HTTP status 208?", "answer": "Used to avoid repeatedly enumerating the internal members of multiple bindings to the same collection." },
    { "question": "What is HTTP status 226?", "answer": "The response is a representation of the result of one or more instance-manipulations applied to the current instance." },
    { "question": "What is HTTP status 300?", "answer": "The request has more than one possible response. The user should choose one of them." },
    { "question": "What is HTTP status 301?", "answer": "The URL of the requested resource has been changed permanently. The new URL is given in the response." },
    { "question": "What is HTTP status 302?", "answer": "The URI of the requested resource has been changed temporarily. The same URI should be used for future requests." },
    { "question": "What is HTTP status 303?", "answer": "Directs the client to get the requested resource at another URI with a GET request." },
    { "question": "What is HTTP status 304?", "answer": "The response has not been modified. The client can use the same cached version of the response." },
    { "question": "What is HTTP status 305?", "answer": "Deprecated. It indicated that a response must be accessed by a proxy." },
    { "question": "What is HTTP status 306?", "answer": "Reserved. Previously used but now not in use." },
    { "question": "What is HTTP status 307?", "answer": "Directs the client to get the requested resource at another URI with the same method used in the prior request." },
    { "question": "What is HTTP status 308?", "answer": "The resource is now permanently located at another URI, specified by the Location header. The same method must be used." },
    { "question": "What is HTTP status 400?", "answer": "The server cannot process the request due to a client error, such as malformed syntax or invalid message framing." },
    { "question": "What is HTTP status 401?", "answer": "Authentication is required to access the requested resource." },
    { "question": "What is HTTP status 402?", "answer": "Reserved for future use. Originally aimed for digital payment systems, but rarely used." },
    { "question": "What is HTTP status 403?", "answer": "The client does not have access rights to the content; the server is refusing to give the resource." },
    { "question": "What is HTTP status 404?", "answer": "The server cannot find the requested resource. The URL is not recognized or the resource does not exist." },
    { "question": "What is HTTP status 405?", "answer": "The request method is known but not supported by the target resource." },
    { "question": "What is HTTP status 406?", "answer": "The server cannot provide content that conforms to the criteria given by the user agent." },
    { "question": "What is HTTP status 407?", "answer": "Authentication is needed through a proxy server." },
    { "question": "What is HTTP status 408?", "answer": "The server timed out waiting for the request. The connection might be closed." },
    { "question": "What is HTTP status 409?", "answer": "The request conflicts with the current state of the server." },
    { "question": "What is HTTP status 410?", "answer": "The requested content has been permanently deleted from the server with no forwarding address." },
    { "question": "What is HTTP status 411?", "answer": "The server rejected the request because the Content-Length header is not defined and required." },
    { "question": "What is HTTP status 412?", "answer": "The client’s preconditions in its headers are not met by the server." },
    { "question": "What is HTTP status 413?", "answer": "The request entity is larger than the server's limits." },
    { "question": "What is HTTP status 414?", "answer": "The URI requested by the client is too long for the server to interpret." },
    { "question": "What is HTTP status 415?", "answer": "The media format of the requested data is not supported by the server." },
    { "question": "What is HTTP status 416?", "answer": "The range specified in the Range header cannot be fulfilled." },
    { "question": "What is HTTP status 417?", "answer": "The expectation indicated by the Expect request header cannot be met by the server." },
    { "question": "What is HTTP status 418?", "answer": "The server refuses to brew coffee with a teapot. (An April Fools' joke.)" },
    { "question": "What is HTTP status 421?", "answer": "The request was directed at a server that cannot produce a response." },
    { "question": "What is HTTP status 422?", "answer": "The request was well-formed but could not be followed due to semantic errors." },
    { "question": "What is HTTP status 423?", "answer": "The resource being accessed is locked." },
    { "question": "What is HTTP status 424?", "answer": "The request failed due to failure of a previous request." },
    { "question": "What is HTTP status 425?", "answer": "The server is unwilling to process a request that might be replayed." },
    { "question": "What is HTTP status 426?", "answer": "The server refuses to perform the request using the current protocol but might accept it after a protocol upgrade." },
    { "question": "What is HTTP status 428?", "answer": "The server requires the request to be conditional to prevent 'lost update' problems." },
    { "question": "What is HTTP status 429?", "answer": "The user has sent too many requests in a given amount of time (rate limiting)." },
    { "question": "What is HTTP status 431?", "answer": "The server is unwilling to process the request because its header fields are too large." },
    { "question": "What is HTTP status 451?", "answer": "The requested resource cannot be provided due to legal reasons." },
    { "question": "What is HTTP status 500?", "answer": "The server encountered a situation it does not know how to handle." },
    { "question": "What is HTTP status 501?", "answer": "The request method is not supported by the server." },
    { "question": "What is HTTP status 502?", "answer": "The server received an invalid response from an upstream server." },
    { "question": "What is HTTP status 503?", "answer": "The server is not ready to handle the request, possibly due to maintenance or overload." },
    { "question": "What is HTTP status 504?", "answer": "The server, acting as a gateway, did not receive a timely response from an upstream server." },
    { "question": "What is HTTP status 505?", "answer": "The HTTP version used in the request is not supported by the server." },
    { "question": "What is HTTP status 506?", "answer": "The server has an internal configuration error. The chosen variant resource is incorrectly configured." },
    { "question": "What is HTTP status 507?", "answer": "The server cannot store the representation needed to complete the request." },
    { "question": "What is HTTP status 508?", "answer": "The server detected an infinite loop while processing the request." },
    { "question": "What is HTTP status 510?", "answer": "Further extensions to the request are required for the server to fulfill it." },
    { "question": "What is HTTP status 511?", "answer": "The client needs to authenticate to gain network access." }
];

localStorage.setItem("flash-cards", JSON.stringify(httpStatuses));