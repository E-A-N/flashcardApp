let qaData = [
    {question: "What is a WWW-Authenticate header?", answer: "Defines the authentication method that should be used to access a resource."},
    {question: "What is an Authorization header?", answer: "Contains the credentials to authenticate a user-agent with a server."},
    {question: "What is a Proxy-Authenticate header?", answer: "Defines the authentication method that should be used to access a resource behind a proxy server."},
    {question: "What is a Proxy-Authorization header?", answer: "Contains the credentials to authenticate a user-agent with a proxy server."},
    {question: "What does the Age header represent?", answer: "The time, in seconds, that the object has been in a proxy cache."},
    {question: "What is Cache-Control used for?", answer: "Directives for caching mechanisms in both requests and responses."},
    {question: "What is the purpose of the Clear-Site-Data header?", answer: "Clears browsing data (e.g. cookies, storage, cache) associated with the requesting website."},
    {question: "What does the Expires header specify?", answer: "The date/time after which the response is considered stale."},
    {question: "What is the No-Vary-Search Experimental header?", answer: "Specifies a set of rules that define how a URL's query parameters will affect cache matching. These rules dictate whether the same URL with different URL parameters should be saved as separate browser cache entries."},
    {question: "What is the Last-Modified header used for?", answer: "The last modification date of the resource, used to compare several versions of the same resource. It is less accurate than ETag, but easier to calculate in some environments."},
    {question: "What is an ETag?", answer: "A unique string identifying the version of the resource. Conditional requests using If-Match and If-None-Match use this value to change the behavior of the request."},
    {question: "What does the If-Match header do?", answer: "Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags."},
    {question: "What is the purpose of the If-None-Match header?", answer: "Makes the request conditional, and applies the method only if the stored resource doesn't match any of the given ETags. This is used to update caches or to prevent uploading a new resource when one already exists."},
    {question: "What does the If-Modified-Since header specify?", answer: "Makes the request conditional, and expects the resource to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date."},
    {question: "What is the function of the If-Unmodified-Since header?", answer: "Makes the request conditional, and expects the resource to be transmitted only if it has not been modified after the given date. This ensures coherence or implements optimistic concurrency control when modifying existing documents."},
    {question: "What does the Vary header do?", answer: "Determines how to match request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server."},
    {question: "What is the Connection header used for?", answer: "Controls whether the network connection stays open after the current transaction finishes."},
    {question: "What is the Keep-Alive header?", answer: "Controls how long a persistent connection should stay open."},
    {question: "What does the Accept header do?", answer: "Informs the server about the types of data that can be sent back."},
    {question: "What is the purpose of the Accept-Charset header?", answer: "Advertises a client's supported character encodings. It is deprecated because UTF-8 has become ubiquitous and the header makes client fingerprinting easier."},
    {question: "What is Accept-Encoding used for?", answer: "The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back."},
    {question: "What does the Accept-Language header indicate?", answer: "Informs the server about the human language the server is expected to send back. It is a hint and is not necessarily under the full control of the user."},
    {question: "What is the Accept-Patch header used for?", answer: "A request content negotiation response header that advertises which media type the server is able to understand in a PATCH request."},
    {question: "What does the Accept-Post header do?", answer: "A request content negotiation response header that advertises which media type the server is able to understand in a POST request."},
    {question: "What does the Expect header specify?", answer: "Indicates expectations that need to be fulfilled by the server to properly handle the request."},
    {question: "What is the Max-Forwards header used for?", answer: "When using TRACE, indicates the maximum number of hops the request can do before being reflected to the sender."},
    {question: "What is the Cookie header?", answer: "Contains stored HTTP cookies previously sent by the server with the Set-Cookie header."},
    {question: "What does the Set-Cookie header do?", answer: "Send cookies from the server to the user-agent."},
    {question: "What is the Access-Control-Allow-Credentials header?", answer: "Indicates whether the response to the request can be exposed when the credentials flag is true."},
    {question: "What is the purpose of the Access-Control-Allow-Headers header?", answer: "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."},
    {question: "What does the Access-Control-Allow-Methods header specify?", answer: "Specifies the methods allowed when accessing the resource in response to a preflight request."},
    {question: "What is the Access-Control-Allow-Origin header?", answer: "Indicates whether the response can be shared."},
    {question: "What does the Access-Control-Expose-Headers header do?", answer: "Indicates which headers can be exposed as part of the response by listing their names."},
    {question: "What is the Access-Control-Max-Age header used for?", answer: "Indicates how long the results of a preflight request can be cached."},
    {question: "What is the Access-Control-Request-Headers header?", answer: "Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made."},
    {question: "What does the Access-Control-Request-Method header indicate?", answer: "Used when issuing a preflight request to let the server know which HTTP method will be used when the actual request is made."},
    {question: "What does the Origin header specify?", answer: "Indicates where a fetch originates from."},
    {question: "What is the Timing-Allow-Origin header?", answer: "Specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions."},
    {question: "What is the Content-Disposition header used for?", answer: "Indicates if the resource transmitted should be displayed inline or if it should be handled like a download and present a 'Save As' dialog."},
    {question: "What is the Content-Digest header?", answer: "Provides a digest of the stream of octets framed in an HTTP message, dependent on Content-Encoding and Content-Range."},
    {question: "What is a Digest header?", answer: "Provides a digest of a resource. It is deprecated and non-standard, with Content-Digest and Repr-Digest being preferred alternatives."},
    {question: "What is the Repr-Digest header?", answer: "Provides a digest of the selected representation of the target resource before transmission, without considering Content-Encoding or Content-Range."},
    {question: "What does the Want-Content-Digest header indicate?", answer: "States the wish for a Content-Digest header. It is the Content- analogue of Want-Repr-Digest."},
    {question: "What is the Want-Digest header used for?", answer: "States the wish for a Digest header. It is deprecated in favor of Content-Digest and Repr-Digest."},
    {question: "What does the Want-Repr-Digest header specify?", answer: "States the wish for a Repr-Digest header. It is the Repr- analogue of Want-Content-Digest."},
    {question: "What is the Content-Length header?", answer: "The size of the resource, in decimal number of bytes."},
    {question: "What does the Content-Type header indicate?", answer: "Indicates the media type of the resource."},
    {question: "What is the Content-Encoding header used for?", answer: "Used to specify the compression algorithm."},
    {question: "What does the Content-Language header describe?", answer: "Describes the human language(s) intended for the audience, so users can differentiate according to their own preferred language."},
    {question: "What is the Content-Location header?", answer: "Indicates an alternate location for the returned data."},
    {question: "What is the Forwarded header?", answer: "Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the request path."},
    {question: "What does the Via header do?", answer: "Added by proxies, both forward and reverse proxies, and can appear in the request and response headers."},
    {question: "What is the Accept-Ranges header?", answer: "Indicates if the server supports range requests, and in which unit the range can be expressed."},
    {question: "What does the Range header specify?", answer: "Indicates the part of a document that the server should return."},
    {question: "What is the function of the If-Range header?", answer: "Creates a conditional range request that is fulfilled only if the given ETag or date matches the remote resource."},
    {question: "What does the Content-Range header indicate?", answer: "Indicates where in a full body message a partial message belongs, and is used in response to range requests."},
    {question: "What is the Location header?", answer: "Indicates the URL to which the user agent should be redirected."},
    {question: "What does the Refresh header do?", answer: "Directs the browser to reload the page or redirect to another URL after a specified delay."},
    {question: "What is the From header?", answer: "Contains an Internet email address for a human user who controls the requesting user agent."},
    {question: "What does the Host header specify?", answer: "Specifies the domain name of the server and optionally the TCP port number on which the server is listening."},
    {question: "What does the Referer header indicate?", answer: "The address of the previous web page from which a link to the currently requested page was followed."},
    {question: "What is the Referrer-Policy header used for?", answer: "Governs which referrer information should be included with requests made by the browser."},
    {question: "What does the User-Agent header contain?", answer: "Contains a characteristic string that allows network protocol peers to identify the application type, operating system, software vendor, or version of the requesting user agent."},
    {question: "What is the X-Requested-With header?", answer: "Specifies the type of application making the request, typically used to distinguish AJAX requests from regular requests."}
  ];
  
  localStorage.setItem("flash-cards", JSON.stringify(qaData));