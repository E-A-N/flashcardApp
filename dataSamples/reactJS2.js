globalRoutines.reactJS2 = () => {
    let reactHooksQuestions = [
        {question: "What is the purpose of the `useState` hook in React?", answer: "The `useState` hook allows you to add state management to functional components. It returns an array with the current state value and a function to update it, enabling state persistence between re-renders."},

        {question: "How does the `useEffect` hook work and when would you use it in a React component?", answer: "The `useEffect` hook performs side effects in functional components, such as fetching data or subscribing to events. It runs after the component renders and can be controlled with dependencies to determine when it should re-run."},

        {question: "What is the difference between `useContext` and `useReducer` in React?", answer: "The `useContext` hook accesses the value of a React context for sharing state across components. The `useReducer` hook manages complex state logic using a reducer function, similar to Redux."},

        {question: "How do you use the `useMemo` hook to optimize performance in React?", answer: "The `useMemo` hook memoizes the result of a computation, recalculating it only when dependencies change. This optimization helps avoid expensive calculations on every render, improving performance."},

        {question: "When would you use the `useCallback` hook and what does it do?", answer: "The `useCallback` hook returns a memoized version of a callback function, changing only if dependencies change. It prevents unnecessary re-renders of components that rely on functions as props."},

        {question: "What is the role of the `useRef` hook in React?", answer: "The `useRef` hook returns a mutable ref object with a `.current` property, which can be used to access and interact with DOM elements or persist values across renders without causing re-renders."},

        {question: "How does the `useImperativeHandle` hook work and when is it useful?", answer: "The `useImperativeHandle` hook customizes the instance value exposed when using `ref` with forward refs. It allows control over the methods or properties available on the ref, useful for integration with third-party libraries."},

        {question: "What is the difference between `useLayoutEffect` and `useEffect` hooks?", answer: "The `useLayoutEffect` hook fires synchronously after all DOM mutations, useful for immediate DOM manipulations. `useEffect` fires asynchronously after the paint, suitable for side effects not needing immediate DOM changes."},

        {question: "What is the output of the following code? `import React, { useState } from 'react'; function Counter() { const [count, setCount] = useState(0); return (<div><p>Count: {count}</p><button onClick={() => setCount(count + 1)}>Increment</button></div>); } export default Counter;`", answer: "The output will display 'Count: 0' initially, and clicking the 'Increment' button will increase the count by 1 each time."},

        {question: "What will be the result of this React component when the `fetchData` function resolves? `import React, { useState, useEffect } from 'react'; function DataFetcher() { const [data, setData] = useState(null); useEffect(() => { fetchData().then(response => setData(response)); }, []); return (<div><p>Data: {data ? data : 'Loading...'}</p></div>); } async function fetchData() { return 'Fetched Data'; } export default DataFetcher;`", answer: "The component will initially display 'Data: Loading...', and after `fetchData` resolves, it will update to 'Data: Fetched Data'."},

        {question: "What is the output of this component? `import React, { useCallback, useState } from 'react'; function Parent() { const [count, setCount] = useState(0); const memoizedCallback = useCallback(() => { console.log('Button clicked'); }, []); return (<div><button onClick={memoizedCallback}>Click me</button><p>Count: {count}</p><button onClick={() => setCount(count + 1)}>Increment</button></div>); } export default Parent;`", answer: "The component will render a button labeled 'Click me', a paragraph displaying 'Count: 0' (initially), and an 'Increment' button. Clicking 'Click me' will log 'Button clicked' to the console."},

        {question: "What does the following component render? `import React, { useLayoutEffect, useRef } from 'react'; function LayoutEffectExample() { const divRef = useRef(null); useLayoutEffect(() => { divRef.current.style.backgroundColor = 'lightblue'; }, []); return (<div ref={divRef}><p>Content here</p></div>); } export default LayoutEffectExample;`", answer: "The component renders a `div` with a `p` element inside. `useLayoutEffect` changes the `div`'s background color to 'lightblue' before the browser paints the changes."}
    ];
    localStorage.setItem("flash-cards", JSON.stringify(reactHooksQuestions));
    if (typeof startTest === "function"){
        startTest();
    }
}
