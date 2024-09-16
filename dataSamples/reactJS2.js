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
    ];
    localStorage.setItem("flash-cards", JSON.stringify(reactHooksQuestions));
    if (typeof startTest === "function"){
        startTest();
    }
}
