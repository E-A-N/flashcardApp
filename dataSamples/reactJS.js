globalRoutines.reactJS = () => {
    let reactQuestions = [
        {question: "What is ReactJS, and what are its main features?", answer: "ReactJS is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. Its main features include a component-based architecture, virtual DOM for efficient updates, and declarative syntax for describing UI."},

        {question: "What is a React component, and how do you create one?", answer: "A React component is a reusable piece of UI that can manage its own state and lifecycle. Components can be created as JavaScript functions or classes. For example, a functional component can be created using `function MyComponent() { return <div>Hello World</div>; }` and a class component using `class MyComponent extends React.Component { render() { return <div>Hello World</div>; } }`."},

        {question: "What is the virtual DOM, and how does React use it?", answer: "The virtual DOM is a lightweight in-memory representation of the real DOM. React uses the virtual DOM to optimize updates by first applying changes to the virtual DOM and then calculating the difference (diffing) between the virtual and real DOM. This process minimizes direct manipulations of the real DOM and improves performance."},

        {question: "How do you manage state in a React component?", answer: "State in a React component can be managed using the `useState` hook for functional components or `this.state` and `this.setState()` for class components. For functional components, you can use `const [state, setState] = useState(initialState);` to initialize and update state. For class components, state is managed with `this.state` and updated using `this.setState()`."},

        {question: "What are props in React, and how are they used?", answer: "Props (short for properties) are read-only attributes used to pass data from parent to child components in React. They are set on a component like HTML attributes and accessed within the component via `props`. For example, `<ChildComponent message=\"Hello\" />` passes a `message` prop to `ChildComponent`, where it can be accessed with `this.props.message` in class components or `props.message` in functional components."},

        {question: "What is the difference between state and props in React?", answer: "State is used to manage data that changes over time within a component, whereas props are used to pass data from parent components to child components and are immutable within the child. State is managed internally by the component, while props are controlled by the parent component."},

        {question: "How do you handle side effects in a React component?", answer: "Side effects in React components are handled using the `useEffect` hook in functional components. `useEffect` can be used to perform tasks such as data fetching, subscriptions, or manually changing the DOM. It accepts a function to run after every render and an optional dependency array to control when the effect should run."},

        {question: "What is React Router, and how is it used?", answer: "React Router is a library used for routing in React applications, allowing for navigation between different views or pages. It is used by importing components such as `BrowserRouter`, `Route`, and `Link`. For example, you use `<Route path=\"/about\" component={About} />` to define a route and `<Link to=\"/about\">About</Link>` to navigate to it."},

        {question: "What are React Hooks, and why are they used?", answer: "React Hooks are functions that let you use state and other React features in functional components. They were introduced to allow functional components to manage state, side effects, context, and more, without the need for class components. Common hooks include `useState`, `useEffect`, `useContext`, and `useReducer`."},

        {question: "What is the `useState` hook, and how do you use it?", answer: "The `useState` hook is used to add state to functional components. It returns an array with the current state and a function to update it. For example: `const [count, setCount] = useState(0);` initializes the state with `0` and provides a function `setCount` to update it."},

        {question: "How does the `useEffect` hook work, and when is it called?", answer: "The `useEffect` hook is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default but can be controlled with a dependency array. For example: `useEffect(() => { /* effect */ }, [dependencies]);` will run the effect whenever the dependencies change."},

        {question: "What is context in React, and how is it used?", answer: "Context in React provides a way to pass data through the component tree without having to pass props down manually at every level. It is used by creating a `Context` object with `React.createContext()`, providing the context with a `Provider`, and consuming it with `useContext()` or the `Context.Consumer` component."},

        {question: "What is Redux, and how does it integrate with React?", answer: "Redux is a state management library for JavaScript applications, including those built with React. It provides a single source of truth for the application's state, with actions to describe changes and reducers to specify how the state updates. React-Redux is the binding library that connects React components to the Redux store using hooks like `useSelector` and `useDispatch` or the `connect` function."},

        {question: "What is JSX, and how does it differ from HTML?", answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code within JavaScript. It is transformed into React elements by Babel. While JSX looks similar to HTML, it has differences such as using `className` instead of `class` for CSS classes and the ability to embed JavaScript expressions using curly braces `{}`."},

        {question: "How do you handle form submissions in React?", answer: "Form submissions in React are typically handled by defining an `onSubmit` event handler for the form element. You can prevent the default form submission behavior using `event.preventDefault()` and then handle the form data as needed. For example: `<form onSubmit={handleSubmit}>` and `const handleSubmit = (event) => { event.preventDefault(); /* handle form data */ };`."},

        {question: "What are controlled components in React?", answer: "Controlled components are form elements whose value is controlled by React state. This means the input value is set by the state and updated using state-changing functions. For example, `<input value={value} onChange={e => setValue(e.target.value)} />` makes the input a controlled component by linking its value to the state."},

        {question: "What is the purpose of `React.StrictMode`?", answer: "`React.StrictMode` is a wrapper component that helps identify potential problems in an application by activating additional checks and warnings. It does not affect the production build but helps during development by highlighting issues such as unsafe lifecycle methods, legacy context API usage, and other potential problems."},

        {question: "How do you optimize performance in a React application?", answer: "Performance in React applications can be optimized by using techniques such as memoization (`React.memo`, `useMemo`, `useCallback`), lazy loading components with `React.lazy` and `Suspense`, avoiding unnecessary re-renders, using efficient data structures, and leveraging tools like `React Profiler` to identify performance bottlenecks."},

        {question: "What is the `key` prop in React, and why is it important?", answer: "The `key` prop is used to give each element in a list a unique identifier, helping React identify which items have changed, are added, or are removed. This improves the efficiency of rendering lists by allowing React to perform updates more accurately and efficiently. For example: `<li key={item.id}>{item.name}</li>`."},

        {question: "How does React handle events, and how is event binding done?", answer: "React handles events using a synthetic event system that wraps the native DOM events. Event binding is done by passing event handler functions directly as props to React components. For example: `<button onClick={handleClick}>Click me</button>`. Event handlers in React receive a synthetic event object instead of the native event object."},

        {question: "What are higher-order components (HOCs) in React?", answer: "Higher-order components (HOCs) are functions that take a component and return a new component with additional props or functionality. HOCs are used to reuse component logic and enhance components. For example: `const withLogging = WrappedComponent => props => { /* log something */ return <WrappedComponent {...props} />; };`."},

        {question: "How do you use the `useReducer` hook in React, and when is it preferred over `useState`?", answer: "`useReducer` is used for managing more complex state logic in functional components, particularly when state updates depend on previous state values or involve multiple sub-values. It takes a reducer function and an initial state and returns the current state and a dispatch function. It is preferred over `useState` when dealing with complex state transitions or when actions need to be managed centrally."},

        {question: "What is the `useCallback` hook, and how is it used?", answer: "`useCallback` is a hook used to memoize callback functions, preventing them from being recreated on every render. It takes a callback function and a dependency array and returns a memoized version of the callback that only changes if the dependencies change. This helps optimize performance by avoiding unnecessary re-renders."},

        {question: "What is the `useContext` hook, and how do you use it?", answer: "`useContext` is a hook that allows you to access the value of a React context directly in functional components. It is used to consume context values without needing to use the `Context.Consumer` component. For example: `const value = useContext(MyContext);` retrieves the current value of `MyContext`."},

        {question: "What are React fragments, and how are they used?", answer: "React fragments are a way to group multiple elements without adding extra nodes to the DOM. They are useful for returning multiple elements from a component without wrapping them in a div or other HTML element. You can use fragments with the `React.Fragment` component or the shorthand syntax `<> ... </>`."},

        {question: "What is the purpose of the `shouldComponentUpdate` lifecycle method in React?", answer: "The `shouldComponentUpdate` lifecycle method is used in class components to determine if a component should re-render when receiving new props or state. It can be used to optimize performance by returning `false` to prevent unnecessary re-renders. For example: `shouldComponentUpdate(nextProps, nextState) { return nextProps.someValue !== this.props.someValue; }`."},

        {question: "How do you handle asynchronous operations in React?", answer: "Asynchronous operations in React can be handled using the `useEffect` hook with async functions, or by using lifecycle methods such as `componentDidMount` in class components. For example, you can use `useEffect(() => { const fetchData = async () => { /* fetch data */ }; fetchData(); }, []);` to handle async data fetching in a functional component."},

        {question: "What are React portals, and how are they used?", answer: "React portals provide a way to render a component's subtree outside the DOM hierarchy of its parent component. This is useful for rendering modals, tooltips, or other elements that need to be visually separated from their parent. Use `ReactDOM.createPortal(child, container)` to create a portal, where `child` is the element to render and `container` is the target DOM node."},

        {question: "What is the `useImperativeHandle` hook in React, and when should it be used?", answer: "`useImperativeHandle` is a hook that allows you to customize the instance value that is exposed when using `ref` with functional components. It is used to expose specific methods or properties to parent components. For example: `useImperativeHandle(ref, () => ({ customMethod }));` allows the parent component to call `customMethod` on the child component."},

        {question: "How do you perform lazy loading of components in React?", answer: "Lazy loading in React can be achieved using the `React.lazy` function and `Suspense` component. `React.lazy` dynamically imports a component, and `Suspense` is used to handle the loading state. For example: `const LazyComponent = React.lazy(() => import('./LazyComponent'));` and `<Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>`."},

        {question: "What are controlled and uncontrolled components in React?", answer: "Controlled components are those where form element values are controlled by React state, while uncontrolled components manage their own state internally. Controlled components use `value` and `onChange` props, while uncontrolled components use `ref` to access form values directly from the DOM."},

        {question: "How do you implement error boundaries in React?", answer: "Error boundaries are used to catch JavaScript errors anywhere in a component tree and display a fallback UI. They are implemented using a class component with the `componentDidCatch` lifecycle method and the `static getDerivedStateFromError` method. For example: `class ErrorBoundary extends React.Component { componentDidCatch(error, info) { /* handle error */ } render() { return this.props.children; } }`."},

        {question: "What is React's `key` prop, and why is it important for lists?", answer: "The `key` prop is used to uniquely identify elements in a list to help React efficiently update the UI. Each key must be unique among siblings to allow React to track elements properly. For example: `<li key={item.id}>{item.name}</li>` helps React determine which items have changed, been added, or been removed."},

        {question: "How do you manage form state in a React application?", answer: "Form state in React can be managed using local component state, the `useReducer` hook for more complex forms, or external state management libraries like Redux. Controlled components are commonly used, where the form element's value is controlled by React state and updated via event handlers."},

        {question: "What is the `useLayoutEffect` hook, and how does it differ from `useEffect`?", answer: "`useLayoutEffect` is similar to `useEffect` but is fired synchronously after all DOM mutations. It is used for reading layout from the DOM and synchronously re-rendering. It differs from `useEffect`, which runs asynchronously after the paint, making `useLayoutEffect` suitable for measurements and layout calculations."},

        {question: "How do you handle authentication and authorization in a React application?", answer: "Authentication and authorization in React are typically managed by using state to track user login status, and by protecting routes with conditional rendering or higher-order components. For example, use `React Router` to set up protected routes and redirect users based on authentication status, or store authentication tokens in local storage and manage login state with context or state management libraries."},

        {question: "What are render props in React, and how do they work?", answer: "Render props are a technique for sharing code between React components using a prop that is a function. This function returns a React element that will be rendered. For example: `<DataProvider render={data => <DisplayData data={data} />} />` where `DataProvider` provides data to `DisplayData` via the render prop."},

        {question: "What is the purpose of the `ReactDOM.render` method?", answer: "`ReactDOM.render` is used to render a React element or component into the DOM. It takes two arguments: the React element and the DOM node where it should be rendered. For example: `ReactDOM.render(<App />, document.getElementById('root'));` renders the `App` component into the DOM element with id `root`."},

        {question: "How do you handle dynamic component loading in React?", answer: "Dynamic component loading can be handled using `React.lazy` for code splitting, which loads components only when they are needed. For example: `const DynamicComponent = React.lazy(() => import('./DynamicComponent'));` and `<Suspense fallback={<div>Loading...</div>}><DynamicComponent /></Suspense>` handles loading and displaying the component."},

        {question: "What is the purpose of the `useRef` hook, and how is it used?", answer: "`useRef` is used to create a mutable object that persists across renders, often used for accessing DOM elements or storing mutable values. For example: `const inputRef = useRef(null);` allows you to access the DOM element with `inputRef.current` and perform actions such as focusing the input element."},

        {question: "What is the role of `React.StrictMode` during development?", answer: "`React.StrictMode` is a development tool that helps identify potential problems in an application by activating additional checks and warnings. It does not impact production builds but can help highlight issues like unsafe lifecycle methods, legacy API usage, and potential side effects."}
    ];

localStorage.setItem("flash-cards", JSON.stringify(reactQuestions));
    if (typeof startTest === "function"){
        startTest();
    }
}
