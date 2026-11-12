
globalRoutines.rust2 = () => {
    let quizArray = [
        // TRAITS
        {
            question: "What is a trait in Rust?",
            answer: "A trait defines shared behavior that types can implement. It specifies methods that a type must provide or can inherit through default implementations."
        },
        {
            question: "How do you define a trait?",
            answer: "Using the trait keyword: trait Drawable { fn draw(&self); }"
        },
        {
            question: "How do you implement a trait for a struct?",
            answer: "Using impl TraitName for StructName { ... }. For example: impl Drawable for Circle { fn draw(&self) {} }"
        },
        {
            question: "What is a trait bound?",
            answer: "A trait bound restricts a generic type to types that implement a particular trait. Example: fn print<T: Display>(value: T)."
        },
        {
            question: "What does the impl Trait syntax mean in a function parameter?",
            answer: "It means the parameter can be any type that implements the specified trait. Example: fn print(value: impl Display)."
        },
        {
            question: "What is a trait object?",
            answer: "A trait object provides dynamic dispatch, allowing different concrete types implementing the same trait to be used through a shared interface. Example: Box<dyn Display>."
        },
        {
            question: "What is the difference between static and dynamic dispatch?",
            answer: "Static dispatch resolves the method at compile time, usually through generics. Dynamic dispatch resolves the method at runtime through a trait object like &dyn Trait."
        },
        {
            question: "When should you use generics instead of dyn Trait?",
            answer: "Use generics when compile-time dispatch and performance are priorities. Use dyn Trait when you need runtime polymorphism or heterogeneous collections of different implementations."
        },

        // COW
        {
            question: "What is Cow<T> in Rust?",
            answer: "Cow means Clone-on-Write. It is an enum that can hold either borrowed data (Borrowed) or owned data (Owned)."
        },
        {
            question: "What does Cow<'a, str> represent?",
            answer: "A string that can either borrow an existing str or own a String, allowing you to avoid unnecessary allocations."
        },
        {
            question: "When should you use Cow instead of String?",
            answer: "When a function usually returns or works with borrowed data but sometimes needs to create an owned String."
        },
        {
            question: "What happens when you call to_mut() on Cow?",
            answer: "If Cow is borrowed, to_mut() clones the data into owned storage before returning a mutable reference. If already owned, it returns a mutable reference directly."
        },
        {
            question: "What is the difference between Cow::Borrowed and Cow::Owned?",
            answer: "Borrowed references existing data without taking ownership. Owned stores its own data, such as a String."
        },

        // STD::MEM
        {
            question: "What is std::mem used for?",
            answer: "It provides utilities for working with memory, ownership, sizes, and moving values, including replace, take, swap, and size_of."
        },
        {
            question: "What does std::mem::take() do?",
            answer: "It replaces a value with its type's default value and returns the original value. Useful for moving a field out of a mutable reference."
        },
        {
            question: "When would you use std::mem::take()?",
            answer: "When you need to extract a value from a mutable struct field without cloning it. The field is replaced with Default::default()."
        },
        {
            question: "What does std::mem::replace() do?",
            answer: "It replaces a value with another value and returns the original value without dropping either value."
        },
        {
            question: "What is the difference between mem::take() and mem::replace()?",
            answer: "take() replaces the value with Default::default(). replace() lets you specify the replacement value."
        },
        {
            question: "What does std::mem::swap() do?",
            answer: "It swaps two mutable values without cloning or dropping their contents."
        },
        {
            question: "What does std::mem::size_of::<T>() return?",
            answer: "It returns the size in bytes of a type T. For heap-backed types like String, it measures the stack-resident String structure, not its heap allocation."
        },

        // BORROWING VS CLONING
        {
            question: "When is it better to borrow instead of clone?",
            answer: "When you only need to read or temporarily access data. Borrowing avoids allocating and copying data, especially for large structs, Strings, and collections."
        },
        {
            question: "When is cloning better than borrowing?",
            answer: "When you need independent ownership, the data must outlive the original owner, or you need to modify a separate copy without affecting the original."
        },
        {
            question: "Why can cloning a large Vec be expensive?",
            answer: "Cloning a Vec generally allocates a new buffer and copies every element. Borrowing with &Vec<T> or a slice &[T] avoids that cost."
        },
        {
            question: "What is the difference between Copy and Clone?",
            answer: "Copy enables implicit bitwise copying for simple types without custom duplication logic. Clone is explicit and can perform expensive deep copies or allocations."
        },
        {
            question: "When should a function accept &str instead of String?",
            answer: "When it only needs to read a string. &str accepts both string slices and references to Strings without taking ownership."
        },
        {
            question: "When should a function accept &[T] instead of Vec<T>?",
            answer: "When it only needs to read a sequence of elements. A slice avoids taking ownership or requiring callers to transfer a Vec."
        },

        // STACK VS HEAP
        {
            question: "When is stack allocation better than heap allocation?",
            answer: "When data is relatively small, has a known size, has a predictable lifetime, and does not need independent dynamic allocation. Stack allocation is generally cheaper."
        },
        {
            question: "When is heap allocation better than stack allocation?",
            answer: "When data has a dynamic or runtime-determined size, needs to grow, is large, or must have an ownership structure independent of the current stack frame."
        },
        {
            question: "Why does Vec<T> use the heap?",
            answer: "Because its length can change at runtime. The Vec structure stores metadata such as pointer, length, and capacity while its elements live in a heap allocation."
        },
        {
            question: "Is heap allocation always slower than stack allocation?",
            answer: "Not necessarily. Heap allocation has allocation and deallocation overhead, but it supports flexible data sizes and lifetimes. The best choice depends on workload and memory behavior."
        },

        // BATCHING AND PERFORMANCE
        {
            question: "What is batching in Rust?",
            answer: "Batching means grouping multiple operations or items into one larger operation to reduce overhead, such as fewer database calls, network requests, or lock acquisitions."
        },
        {
            question: "Why is batching often more efficient than processing one item at a time?",
            answer: "It amortizes fixed costs like function calls, network latency, database transactions, and synchronization across multiple items."
        },
        {
            question: "How can you process a Vec in batches?",
            answer: "Use chunks(): for batch in items.chunks(100) { process(batch); }. chunks() produces borrowed slices of up to 100 elements."
        },
        {
            question: "What is the difference between chunks() and chunks_mut()?",
            answer: "chunks() provides immutable slices of each batch. chunks_mut() provides mutable slices, allowing you to modify elements in each batch."
        },
        {
            question: "How can batching reduce Mutex contention?",
            answer: "Instead of locking for every item, collect several items and acquire the Mutex once to process the entire batch, reducing lock acquisition overhead."
        },
        {
            question: "When should you avoid batching?",
            answer: "When low latency is more important than throughput, batches create excessive memory usage, or waiting to fill a batch delays processing."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));

    if (typeof startTest === "function") {
        startTest();
    }
};
