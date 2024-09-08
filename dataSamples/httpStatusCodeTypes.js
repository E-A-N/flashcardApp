globalRoutines.httpStatusCodeTypes = () => {
    const httpStatusTypes = [
        {
            "question": "What is the purpose of HTTP status code 1xx type?",
            "answer": "Signals that a request is received and processing continues."
        },
        {
            "question": "What is the purpose of HTTP status code 2xx type?",
            "answer": "Indicates that the request was successfully processed."
        },
        {
            "question": "What is the purpose of HTTP status code 3xx type?",
            "answer": "Means further action is needed to complete the request, usually redirection."
        },
        {
            "question": "What is the purpose of HTTP status code 4xx type?",
            "answer": "Indicates an error on the client’s side, such as a bad request or unauthorized access."
        },
        {
            "question": "What is the purpose of HTTP status code 5xx type?",
            "answer": "Indicates an error on the server’s side, such as an internal server error or service unavailability."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(httpStatusTypes));
    if (typeof startTest === "function"){
        startTest();
    }
}