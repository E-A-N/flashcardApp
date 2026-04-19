globalRoutines.rust = () => {
    let quizArray = [
        {
            question: "What is ownership in Rust?",
            answer: "Ownership is Rust’s system for managing memory safely. Each value has one owner, and when the owner goes out of scope, the value is dropped."
        },
        {
            question: "What is borrowing in Rust?",
            answer: "Borrowing allows referencing data without taking ownership using & (immutable) or &mut (mutable)."
        },
        {
            question: "What are lifetimes?",
            answer: "Lifetimes ensure references are valid for as long as needed and prevent dangling references."
        },
        {
            question: "What is Box<T>?",
            answer: "Box<T> is a smart pointer that stores data on the heap and owns it."
        },
        {
            question: "When would you use Box<T>?",
            answer: "For heap allocation, such as large data, recursive types, or trait objects."
        },
        {
            question: "What is Rc<T>?",
            answer: "Rc<T> is a reference-counted pointer for shared ownership in single-threaded code."
        },
        {
            question: "What is Arc<T>?",
            answer: "Arc<T> is an atomic reference-counted pointer for shared ownership across threads."
        },
        {
            question: "What is RefCell<T>?",
            answer: "RefCell<T> allows mutable borrowing checked at runtime instead of compile time."
        },
        {
            question: "What is the difference between stack and heap allocation?",
            answer: "Stack is fast and fixed-size; heap is dynamic and allocated at runtime."
        },
        {
            question: "Which Rust types commonly allocate on the heap?",
            answer: "String, Vec<T>, Box<T>, Rc<T>, Arc<T>, and collections like HashMap."
        },
        {
            question: "What is the Result type?",
            answer: "Result<T, E> represents success (Ok) or failure (Err)."
        },
        {
            question: "What does the ? operator do?",
            answer: "It returns early with an error if a Result is Err, otherwise unwraps Ok."
        },
        {
            question: "What is unwrap()?",
            answer: "unwrap() returns the value or panics if it's Err or None."
        },
        {
            question: "What is expect()?",
            answer: "expect() is like unwrap() but includes a custom panic message."
        },
        {
            question: "How do you define a custom error type?",
            answer: "By creating an enum and implementing traits like Debug, Display, and Error."
        },
        {
            question: "What is Option<T>?",
            answer: "Option<T> represents Some(value) or None."
        },
        {
            question: "How do you handle errors without panicking?",
            answer: "Using match, if let, or the ? operator."
        },
        {
            question: "What is panic!?",
            answer: "panic! stops execution when an unrecoverable error occurs."
        },
        {
            question: "How do you create a thread in Rust?",
            answer: "Using std::thread::spawn(|| { /* code */ });"
        },
        {
            question: "How do you wait for a thread to finish?",
            answer: "Call handle.join().unwrap(), where 'handle' is the value returned from thread::spawn."
        },
        {
            question: "How do you move data into a thread?",
            answer: "Use move in the closure: thread::spawn(move || { ... }); to transfer ownership."
        },
        {
            question: "What is a channel in Rust?",
            answer: "A way for threads to communicate by sending messages between a sender and receiver."
        },
        {
            question: "How do you create a channel?",
            answer: "Using let (tx, rx) = std::sync::mpsc::channel(); where 'tx' sends and 'rx' receives."
        },
        {
            question: "How do you send data through a channel?",
            answer: "Using tx.send(value).unwrap(), where 'tx' is the sending end of the channel."
        },
        {
            question: "How do you receive data from a channel?",
            answer: "Using rx.recv().unwrap(), where 'rx' is the receiving end of the channel."
        },
        {
            question: "What is Mutex<T> syntax used for?",
            answer: "To safely allow one thread at a time to access data: let m = Mutex::new(value);"
        },
        {
            question: "How do you access data inside a Mutex?",
            answer: "Using m.lock().unwrap(), where 'm' is the Mutex and lock() gives access."
        },
        {
            question: "How do you share mutable data across threads safely?",
            answer: "Using Arc<Mutex<T>> for shared ownership and safe mutation."
        },
        {
            question: "What is pattern matching?",
            answer: "Using match to handle different patterns of a value."
        },
        {
            question: "What is impl used for?",
            answer: "To define methods or implement traits for a type."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function"){
        startTest();
    }
}