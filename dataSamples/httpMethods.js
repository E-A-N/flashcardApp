let httpMethodList = [
    {question: "What is the GET HTTP Method?", answer: "Retrieves data from a specified resource. It should not alter the state of the server or resource."},
    {question: "What is an example of a GET HTTP Method?", answer: "Fetching a webpage."},

    {question: "What is the POST HTTP Method?", answer: "Submits data to be processed to a specified resource. Often used to create or update a resource."},
    {question: "What is an example of a POST HTTP Method?", answer: "Submitting a form."},

    {question: "What is the PUT HTTP Method?", answer: "Updates a resource at a specified URI or creates a new resource if it does not exist."},
    {question: "What is an example of a PUT HTTP Method?", answer: "Updating user profile information."},

    {question: "What is the DELETE HTTP Method?", answer: "Removes the resource specified by the URI."},
    {question: "What is an example of a DELETE HTTP Method?", answer: "Deleting a user account."},

    {question: "What is the HEAD HTTP Method?", answer: "Retrieves the headers of a specified resource, similar to GET but without the response body."},
    {question: "What is an example of a HEAD HTTP Method?", answer: "Checking metadata of a resource."},

    {question: "What is the OPTIONS HTTP Method?", answer: "Describes the communication options for the target resource. Often used to check which HTTP methods are supported by a server."},
    {question: "What is an example of an OPTIONS HTTP Method?", answer: "Determining allowed methods on a resource."},

    {question: "What is the PATCH HTTP Method?", answer: "Applies partial modifications to a resource. It is used when you need to update only part of a resource."},
    {question: "What is an example of a PATCH HTTP Method?", answer: "Modifying part of a document."},

    {question: "What is the TRACE HTTP Method?", answer: "Performs a diagnostic function by echoing back the request received, primarily used for debugging."},
    {question: "What is an example of a TRACE HTTP Method?", answer: "Tracing the request path to see if it is correctly received."},

    {question: "What is the CONNECT HTTP Method?", answer: "Establishes a tunnel to the server identified by the target resource. Often used with HTTPS proxies."},
    {question: "What is an example of a CONNECT HTTP Method?", answer: "Creating a secure tunnel for communication."},

    {question: "What is the COPY HTTP Method?", answer: "Copies a resource from one URI to another."},
    {question: "What is an example of a COPY HTTP Method?", answer: "Duplicating a file on a server."},

    {question: "What is the LINK HTTP Method?", answer: "Establishes a relationship between the current resource and another resource."},
    {question: "What is an example of a LINK HTTP Method?", answer: "Linking documents."},

    {question: "What is the UNLINK HTTP Method?", answer: "Removes a relationship between the current resource and another resource."},
    {question: "What is an example of an UNLINK HTTP Method?", answer: "Breaking a link between documents."},

    {question: "What is the LOCK HTTP Method?", answer: "Locks a resource to prevent others from modifying it."},
    {question: "What is an example of a LOCK HTTP Method?", answer: "Locking a document for editing."},

    {question: "What is the UNLOCK HTTP Method?", answer: "Unlocks a previously locked resource."},
    {question: "What is an example of an UNLOCK HTTP Method?", answer: "Unlocking a document after editing."},

    {question: "What is the PROPFIND HTTP Method?", answer: "Retrieves properties of a resource."},
    {question: "What is an example of a PROPFIND HTTP Method?", answer: "Fetching metadata about a resource."},

    {question: "What is the PROPPATCH HTTP Method?", answer: "Updates properties of a resource."},
    {question: "What is an example of a PROPPATCH HTTP Method?", answer: "Changing metadata of a resource."},

    {question: "What is the MKCOL HTTP Method?", answer: "Creates a new collection (directory) at the specified URI."},
    {question: "What is an example of a MKCOL HTTP Method?", answer: "Creating a new folder on a server."},

    {question: "What is the MOVE HTTP Method?", answer: "Moves a resource from one URI to another."},
    {question: "What is an example of a MOVE HTTP Method?", answer: "Renaming or relocating a file on a server."},

    {question: "What is the REPORT HTTP Method?", answer: "Retrieves information about a resource based on a query."},
    {question: "What is an example of a REPORT HTTP Method?", answer: "Getting a report of changes or status."},

    {question: "What is the VERSION-CONTROL HTTP Method?", answer: "Initiates version control for a resource."},
    {question: "What is an example of a VERSION-CONTROL HTTP Method?", answer: "Starting version tracking for a document."},

    {question: "What is the CHECKOUT HTTP Method?", answer: "Retrieves a specific version of a resource."},
    {question: "What is an example of a CHECKOUT HTTP Method?", answer: "Checking out a specific version of a document."},

    {question: "What is the CHECKIN HTTP Method?", answer: "Submits changes to a specific version of a resource."},
    {question: "What is an example of a CHECKIN HTTP Method?", answer: "Checking in modifications to a versioned document."},

    {question: "What is the UNCHECKOUT HTTP Method?", answer: "Cancels a checkout operation."},
    {question: "What is an example of an UNCHECKOUT HTTP Method?", answer: "Undoing a checkout of a document."},

    {question: "What is the MKACTIVITY HTTP Method?", answer: "Creates an activity for a resource."},
    {question: "What is an example of a MKACTIVITY HTTP Method?", answer: "Creating an activity record for a resource."},

    {question: "What is the MERGE HTTP Method?", answer: "Merges changes into a resource."},
    {question: "What is an example of a MERGE HTTP Method?", answer: "Combining multiple versions of a document."}
];
localStorage.setItem("flash-cards", JSON.stringify(httpMethodList));