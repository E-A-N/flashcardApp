globalRoutines.rustQuiz = () => {
    let quizArray = [
        {
            question: "What is ownership in Rust?",
            answer: "Ownership is Rust’s system for managing memory safely. Each value has one owner, and when the owner goes out of scope, the value is dropped."
        },
        {
            question: "What is borrowing in Rust?",
            answer: "Borrowing allows referencing data without taking ownership using & or &mut."
        },
        {
            question: "What are lifetimes?",
            answer: "Lifetimes ensure references are valid for as long as needed and prevent dangling references."
        },
        {
            question: "What is Box<T>?",
            answer: "Box<T> is a smart pointer that allocates data on the heap and provides ownership over that data."
        },
        {
            question: "When would you use Box<T>?",
            answer: "When you need heap allocation, such as for large data, recursive types, or trait objects."
        },
        {
            question: "What is Rc<T>?",
            answer: "Rc<T> is a reference-counted smart pointer for shared ownership in single-threaded contexts."
        },
        {
            question: "What is Arc<T>?",
            answer: "Arc<T> is an atomic reference-counted smart pointer for shared ownership across threads."
        },
        {
            question: "What is RefCell<T>?",
            answer: "RefCell<T> allows interior mutability by enforcing borrowing rules at runtime instead of compile time."
        },
        {
            question: "What is the difference between stack and heap allocation?",
            answer: "Stack allocation is fast and fixed-size, while heap allocation is dynamic and managed at runtime."
        },
        {
            question: "Which Rust types commonly allocate on the heap?",
            answer: "String, Vec<T>, Box<T>, Rc<T>, Arc<T>, and collections like HashMap."
        },
        {
            question: "What is the Result type?",
            answer: "Result<T, E> represents success (Ok) or failure (Err) for error handling."
        },
        {
            question: "What does the ? operator do?",
            answer: "It propagates errors by returning early if a Result is Err."
        },
        {
            question: "What is unwrap()?",
            answer: "unwrap() extracts a value or panics if it's an error or None."
        },
        {
            question: "What is expect()?",
            answer: "expect() is like unwrap() but allows a custom panic message."
        },
        {
            question: "How do you define a custom error type?",
            answer: "By creating an enum and implementing traits like Debug and Display, often using std::error::Error."
        },
        {
            question: "What is Option<T>?",
            answer: "Option<T> represents a value that can be Some or None."
        },
        {
            question: "How do you handle errors without panicking?",
            answer: "By using match, if let, or the ? operator with Result."
        },
        {
            question: "What is panic!?",
            answer: "panic! is a macro that stops execution when unrecoverable errors occur."
        },
        {
            question: "How do you create a thread in Rust?",
            answer: "Using std::thread::spawn(|| { /* code */ });"
        },
        {
            question: "How do you wait for a thread to finish?",
            answer: "By calling .join() on the thread handle."
        },
        {
            question: "How do you move data into a thread?",
            answer: "Using the move keyword in the closure: thread::spawn(move || { ... });"
        },
        {
            question: "What is a channel in Rust?",
            answer: "A way to communicate between threads using message passing via std::sync::mpsc."
        },
        {
            question: "How do you create a channel?",
            answer: "Using let (tx, rx) = std::sync::mpsc::channel();"
        },
        {
            question: "How do you send data through a channel?",
            answer: "Using tx.send(value).unwrap();"
        },
        {
            question: "How do you receive data from a channel?",
            answer: "Using rx.recv().unwrap();"
        },
        {
            question: "What is Mutex<T> syntax used for?",
            answer: "To provide mutual exclusion: let data = Mutex::new(value);"
        },
        {
            question: "How do you access data inside a Mutex?",
            answer: "By locking it: let guard = data.lock().unwrap();"
        },
        {
            question: "How do you share mutable data across threads safely?",
            answer: "Using Arc<Mutex<T>>."
        },
        {
            question: "What is pattern matching?",
            answer: "Using match to destructure and handle values based on patterns."
        },
        {
            question: "What is impl used for?",
            answer: "To define methods or implement traits for types."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function"){
        startTest();
    }
}