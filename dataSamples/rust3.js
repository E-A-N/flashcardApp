globalRoutines.rust3 = () => {
    let quizArray = [
        {
            question: "What is the ECS (Entity-Component-System) pattern in Rust?",
            answer: "ECS separates data from behavior. Entities are IDs, Components are plain data structs, Systems are functions that query entities by component. In Rust, components are often stored in SoA (struct-of-arrays) layout for cache-friendly iteration, and systems use iterators over filtered entity sets."
        },
        {
            question: "Why is SoA (struct-of-arrays) preferred over AoS for ECS in Rust?",
            answer: "SoA stores all instances of one component contiguously in memory. When a system only reads one or two components, it touches far fewer cache lines than AoS (where each entity's fields are interleaved). Rust's Vec<T> per component naturally gives you SoA."
        },
        {
            question: "How do you implement a fixed timestep game loop in Rust?",
            answer: "Accumulate elapsed time; while accumulator >= dt, step simulation by dt and subtract. Render with an interpolation factor (accumulator / dt) between the last two states. Use std::time::Instant to measure frame time."
        },
        {
            question: "How do you implement a variable timestep game loop in Rust?",
            answer: "Compute dt = now - last_frame using Instant::elapsed(). Pass dt to update(). Clamp dt to a max (e.g., 1/30s) to prevent spiral of death after a stall. Simpler but physics can tunnel on frame spikes."
        },
        {
            question: "What is the Send trait in Rust?",
            answer: "A marker trait meaning a type can be transferred across thread boundaries. Most types are Send automatically; types containing raw pointers, Rc<T>, or Cell<UnsafeCell> are not."
        },
        {
            question: "What is the Sync trait in Rust?",
            answer: "A marker trait meaning a type can be shared across threads via shared references (&T). Equivalent to 'Send for &T'. If T: Sync, then &T: Send."
        },
        {
            question: "Why is Rc<T> not Send or Sync?",
            answer: "Rc uses non-atomic reference counting. Incrementing/decrementing the count from multiple threads is a data race. Use Arc<T> for cross-thread shared ownership."
        },
        {
            question: "What is the difference between Mutex<T> and RwLock<T>?",
            answer: "Mutex allows one exclusive accessor. RwLock allows multiple concurrent readers OR one exclusive writer. RwLock is better for read-heavy, write-rare data (e.g., a config or spawn table read by many threads)."
        },
        {
            question: "How do you avoid deadlocks with multiple Mutexes in Rust?",
            answer: "Establish a consistent global lock ordering (always acquire in the same order), use try_lock with backoff, minimize critical section size, or restructure to avoid holding multiple locks simultaneously."
        },
        {
            question: "What is the async/await syntax in Rust?",
            answer: "async fn returns a Future. await suspends the current task and resumes when the Future resolves. The compiler desugars into a state machine (enum of states with stored local variables)."
        },
        {
            question: "What is a Future in Rust?",
            answer: "A lazy computation that produces a value when polled. Implements the Future trait with an Output type. Unlike a promise, it does nothing until an executor calls poll() on it."
        },
        {
            question: "What is Pin<T> and why is it needed for async?",
            answer: "Pin<T> guarantees a value won't be moved in memory after being pinned. Async state machines capture locals by value; moving them mid-poll would invalidate internal self-references. Pin prevents this unsoundness."
        },
        {
            question: "What is tokio::select! used for?",
            answer: "Concurrently waits on multiple futures and runs the first one that completes. Useful for multiplexing event sources (timer, channel, socket) in one async task without blocking. Can also be used to cancel futures on timeout."
        },
        {
            question: "How do you spawn an async task in Rust?",
            answer: "tokio::spawn(async { ... }) runs a future on the tokio runtime, returning a JoinHandle. The future must be Send + 'static if the runtime is multi-threaded."
        },
        {
            question: "What is a work-stealing thread pool?",
            answer: "Idle threads 'steal' tasks from the deque of a busy thread. Provides good load balancing without a central dispatcher bottleneck. Used by rayon and most production Rust runtimes."
        },
        {
            question: "How do you use rayon for parallel iteration in Rust?",
            answer: "Use par_iter() on a collection: my_vec.par_iter().map(|x| compute(x)).sum(). Rayon handles work distribution across a thread pool automatically. The closure must be Send + Sync and the collection must be Sync."
        },
        {
            question: "What is crossbeam-channel vs std::sync::mpsc?",
            "answer": "crossbeam-channel supports MPMC (multi-producer, multi-consumer), is faster (lock-free), and supports select! for waiting on multiple channels. std::sync::mpsc is single-consumer only and simpler."
        },
        {
            question: "How do you use AtomicU64 for a frame counter in Rust?",
            answer: "let frame: AtomicU64 = AtomicU64::new(0); // Increment: frame.fetch_add(1, Ordering::Relaxed); // Read: frame.load(Ordering::Relaxed). No lock needed for simple counters."
        },
        {
            question: "What is the difference between Ordering::SeqCst and Ordering::Relaxed?",
            answer: "SeqCst provides total order across all threads (slowest, acts like a global lock). Relaxed only guarantees atomicity, no ordering (fastest). For independent counters or flags, Relaxed is sufficient and faster."
        },
        {
            question: "How do you implement a lock-free SPSC ring buffer in Rust?",
            answer: "Use AtomicUsize for head (producer) and tail (consumer) indices. Producer writes to head, increments with Ordering::Release. Consumer reads from tail, increments with Ordering::Acquire. The acquire/release pair ensures the consumer sees the written data."
        },
        {
            question: "What is Condvar used for in Rust?",
            answer: "Condvar lets a thread sleep until notified that a condition is met. Used in producer-consumer: the consumer locks the Mutex, loops while the condition is false calling cv.wait(&mut guard), and the producer modifies state then calls cv.notify_one()."
        },
        {
            question: "How do you share mutable state across threads with Arc<Mutex<T>>?",
            answer: "let state = Arc::new(Mutex::new(GameState::new())); Clone the Arc into each thread. Access via state.lock().unwrap(). The MutexGuard is dropped at end of scope, releasing the lock. The Arc's refcount is decremented when the last clone is dropped."
        },
        {
            question: "What is the problem with holding a std Mutex across an .await point?",
            answer: "A std::sync::MutexGuard is not Send, so you cannot hold it across an .await in an async context (it would block the executor thread). Use tokio::sync::Mutex instead, or drop the guard before awaiting."
        },
        {
            question: "What is the difference between std::sync::Mutex and tokio::sync::Mutex?",
            answer: "std::sync::Mutex blocks the OS thread (not Send across await). tokio::sync::Mutex yields the async task (doesn't block the thread), allowing other tasks to run while waiting. Use tokio's in async contexts."
        },
        {
            question: "What is a game state machine and how do you implement it in Rust?",
            answer: "An enum (e.g., enum State { Menu, Playing, Paused, GameOver }) with a current_state field. Each frame, a match on the state dispatches to update logic. Transitions are explicit method calls or event-driven via a message queue."
        },
        {
            question: "How do you implement an object pool in Rust?",
            answer: "A Vec<T> (or Vec<Option<T>>) that pre-allocates objects. To spawn: pop from the free list or push a new one. To despawn: reset state and push back. Avoids per-frame allocation/GC pressure. Use index-based access to avoid invalidating references."
        },
        {
            question: "How do you implement spatial partitioning (grid) in Rust?",
            answer: "A HashMap<(i32, i32), Vec<EntityId>> mapping grid cells to entity IDs. Each frame, clear and re-insert entities based on their position. Broad-phase collision checks only entities in the same or adjacent cells. O(n) insert, O(k) query where k = neighbors."
        },
        {
            question: "What is unsafe code used for in Rust game development?",
            answer: "Bypassing the borrow checker for performance-critical patterns (interior mutability in ECS, transmuting), FFI to native libraries (OpenGL, DirectX, audio), or implementing lock-free data structures. The programmer must uphold safety invariants manually."
        },
        {
            question: "What is RefCell<T> useful for in a single-threaded system?",
            answer: "Interior mutability: allows mutation through a shared reference (&T). Useful when a callback or closure needs to mutate state it doesn't own. Panics at runtime on double mutable borrow (no compile-time check)."
        },
        {
            question: "How do you handle network input with async in a multiplayer game?",
            answer: "Spawn a tokio task that reads from a TcpStream/UdpSocket. Deserialize packets, send them through a crossbeam-channel or mpsc to the game thread. The game thread polls the channel each frame (try_recv) and applies inputs to the simulation."
        },
        {
            question: "What is a thread-local storage (thread_local!) in Rust and when is it useful for games?",
            answer: "thread_local! { static X: RefCell<T> = ... } gives each thread its own copy. Useful for per-thread scratch buffers (e.g., a Vec used as a temporary work area during a system update) to avoid contention on a shared allocation."
        },
        {
            question: "How do you implement a simple parallel physics step with rayon?",
            answer: "Partition bodies into chunks (by spatial hash or index range). Use bodies.par_chunks_mut(chunk_size).for_each(|chunk| { integrate(chunk); }). Then a second par pass for pairwise collisions within and across chunk boundaries. Avoid data races by ensuring disjoint ownership per chunk."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function"){
        startTest();
    }
}   