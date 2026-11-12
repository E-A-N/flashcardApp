globalRoutines.rust4 = () => {
    let quizArray = [
        {
            question: "What is Vec's growth strategy in Rust?",
            answer: "Vec doubles its capacity when it needs to grow (or grows by 1.5x for small vecs). This amortizes push to O(1). You can control it with reserve(n) or reserve_exact(n) to avoid reallocations in hot loops."
        },
        {
            question: "What is the difference between Vec::with_capacity and Vec::new?",
            answer: "Vec::new() starts with zero capacity (no heap allocation until first push). Vec::with_capacity(n) pre-allocates space for n elements immediately, avoiding repeated reallocations if you know the size ahead of time."
        },
        {
            question: "What is the difference between Vec::reserve and Vec::reserve_exact?",
            answer: "reserve(n) guarantees capacity for at least n more elements but may allocate more (due to growth strategy). reserve_exact(n) allocates exactly n more elements, wasting no space but potentially reallocating on the next push if you go over."
        },
        {
            question: "What does Vec::shrink_to_fit do?",
            answer: "It releases any excess capacity beyond the current length, returning memory to the allocator. The vec's length stays the same. Use after trimming a large vec to avoid holding onto a big allocation."
        },
        {
            question: "What is the difference between Vec::swap_remove and Vec::remove?",
            answer: "Vec::remove(i) shifts all elements after index i left by one — O(n). Vec::swap_remove(i) moves the last element into position i and pops — O(1). Use swap_remove when order doesn't matter (e.g., removing a dead entity from a pool)."
        },
        {
            question: "What does Vec::drain do and why is it zero-copy?",
            answer: "Vec::drain(range) removes elements in a range and returns an iterator over them, transferring ownership. It's zero-copy because the elements are moved out, not cloned. The remaining elements are shifted left in one memmove."
        },
        {
            question: "What is the difference between Vec::retain and Vec::retain_mut?",
            answer: "retain(|&x| pred(x)) keeps elements where pred is true, using an immutable reference. retain_mut(|x| pred(x)) gives you &mut T, so you can modify elements in place during the filter (e.g., normalize a value and keep it if valid)."
        },
        {
            question: "What does Vec::dedup do vs Vec::dedup_by?",
            answer: "dedup() removes consecutive duplicate elements using PartialEq. dedup_by(|a, b| ...) takes a custom closure comparing adjacent elements, letting you define 'duplicate' however you want (e.g., same position within epsilon)."
        },
        {
            question: "How does Vec::binary_search work in Rust?",
            answer: "On a sorted slice, binary_search(&x) returns Ok(index) if found, Err(index) where it would be inserted. It requires the slice to be sorted by the same ordering. Use partition_point for more complex boundary searches."
        },
        {
            question: "What is Vec::partition_point used for?",
            answer: "It finds the first index where a predicate flips from true to false in a sorted/monotonic slice. Example: find the first element >= target in a sorted vec: v.partition_point(|&x| x < target). Runs in O(log n)."
        },
        {
            question: "What is the difference between Vec::sort and Vec::sort_unstable?",
            answer: "sort() is stable (equal elements keep their relative order) and uses O(n) extra memory. sort_unstable() is faster (uses O(1) extra space, introsort) but doesn't guarantee stability. Use sort_unstable when element order among equals doesn't matter."
        },
        {
            question: "How does Vec::sort_by_key work?",
            answer: "sort_by_key(|x| x.field) sorts by a key extracted from each element. The key must implement Ord. It's cleaner than sort_by when you're sorting by a single field. For multiple fields, use sort_by with a tuple comparison."
        },
        {
            question: "What does Vec::windows(n) return?",
            answer: "An iterator over all contiguous sub-slices of length n. For a vec of length L, it yields L - n + 1 windows. Useful for sliding window algorithms (e.g., moving average, detecting patterns). Each window is a &[T]."
        },
        {
            question: "What does Vec::chunks(n) return?",
            answer: "An iterator over non-overlapping sub-slices of length n (last chunk may be shorter). Useful for batch processing: process entities in chunks of 64 for cache efficiency. Each chunk is a &[T]."
        },
        {
            question: "What does Vec::split_off do?",
            answer: "split_off(at) splits the vec into two: the original keeps elements [0..at), and a new Vec is returned with elements [at..). Both are valid, independent allocations. O(n) for the tail (it's moved, not copied)."
        },
        {
            question: "What does Vec::splice do?",
            answer: "splice(range, iterator) replaces the elements in range with elements from the iterator, returning the removed elements. It's a general-purpose in-place edit: insert, remove, or replace a range in one call."
        },
        {
            question: "What is the difference between Vec::extend and Vec::append?",
            answer: "extend(iter) consumes an IntoIterator and pushes its items (cloning or moving them). append(other) takes ownership of another Vec and moves its elements in — no clone, no allocation for the source. Prefer append when you own both vecs."
        },
        {
            question: "What is the difference between Vec::into_iter and Vec::iter?",
            answer: "into_iter() consumes the Vec and yields owned T values (moves them out). iter() borrows the Vec and yields &T. Use into_iter when you no longer need the Vec; use iter when you just need to read. into_iter also enables .map() to produce owned values without cloning."
        },
        {
            question: "When do you use Vec::iter().copied() vs Vec::iter().cloned()?",
            answer: "copied() works for T: Copy (i32, f64, bool, etc.) — it copies the value, zero-cost. cloned() works for any T: Clone (String, Vec, etc.) — it calls Clone::clone() on each element. Use copied for Copy types, cloned otherwise."
        },
        {
            question: "What do Vec::as_ptr and Vec::as_mut_ptr return?",
            answer: "as_ptr() returns a *const T pointing to the first element. as_mut_ptr() returns a *mut T. Useful for FFI (passing to C/C++ APIs), SIMD operations, or unsafe bulk operations. The pointer is only valid while the Vec is not reallocated."
        },
        {
            question: "What is Vec::set_len and why is it unsafe?",
            answer: "set_len(n) changes the Vec's length without initializing or dropping elements. It's unsafe because if n > old_len, the new elements are uninitialized memory; if n < old_len, the dropped elements may not be properly cleaned up. Use for pre-allocating and then filling via *ptr = value."
        },
        {
            question: "What does Vec::leak do?",
            answer: "leak() consumes the Vec and returns a &'static mut [T] (or Vec::leak for a &'static mut Vec<T>). The memory is intentionally never freed. Useful for one-time allocations that must live for the program's lifetime (e.g., a lookup table)."
        },
        {
            question: "What are Vec::into_raw_parts and Vec::from_raw_parts?",
            answer: "into_raw_parts() consumes a Vec and returns (ptr, len, capacity) — the raw allocation. from_raw_parts(ptr, len, capacity) reconstructs a Vec from those. Used for FFI or manual memory management. The ptr must have come from a Vec (or compatible allocation)."
        },
        {
            question: "When should you use VecDeque instead of Vec as a queue?",
            answer: "Vec::remove(0) is O(n) — it shifts every element. VecDeque::pop_front() is O(1) — it uses a ring buffer internally. For FIFO queues (task queues, input buffers, BFS), use VecDeque. Vec is fine for stacks (push/pop from the end)."
        },
        {
            question: "What is VecDeque::push_front and why can't Vec do it efficiently?",
            answer: "push_front adds an element to the front in O(1) using VecDeque's circular buffer layout. Vec would need to shift all elements right (O(n)) or reallocate and copy. Use VecDeque when you need both push_front and push_back in O(1)."
        },
        {
            question: "What is the HashMap entry API and why is it better than get-then-insert?",
            answer: "map.entry(key) returns an Entry enum (Occupied or Vacant) in a single lookup. You can match on it to either modify the existing value or insert a new one. Without it, get + insert does two hash lookups and may temporarily insert a default value."
        },
        {
            question: "What is the difference between BTreeMap and HashMap in Rust?",
            answer: "BTreeMap is a red-black tree: keys are always sorted, iteration is O(n) in order, lookup is O(log n). HashMap is a hash table: lookup is O(1) average, but iteration order is arbitrary. Use BTreeMap when you need sorted keys or range queries; HashMap for fast lookup."
        },
        {
            question: "How do iterator adapters (map, filter, fold) relate to performance in Rust?",
            answer: "Iterator adapters are zero-cost abstractions — they compile to the same loop as a manual for loop (no heap allocation, no virtual calls). .map().filter().fold() is as fast as writing the loop by hand. The compiler inlines everything and optimizes the entire chain."
        },
        {
            question: "How does Vec::par_iter (rayon) work?",
            answer: "par_iter() splits the vec into chunks and distributes them across rayon's thread pool. Each chunk is processed in parallel. The closure must be Send + Sync. Example: v.par_iter().map(|x| heavy_compute(x)).collect(). Use when per-element work is expensive enough to justify thread overhead."
        },
        {
            question: "What does Vec::rotate_left do?",
            answer: "rotate_left(k) shifts all elements left by k positions in O(n) time, in place. Elements that fall off the front wrap to the back. Useful for circular buffer emulation or reordering without allocation. k is taken modulo the vec's length."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function"){
        startTest();
    }
}   