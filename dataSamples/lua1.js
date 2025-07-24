globalRoutines.lua1 = () => {
    let questionData = [
        {
            question: "How do you declare a variable in Lua?",
            answer: "Use `=` to assign a value, like `x = 10`"
        },
        {
            question: "How do you declare a local variable?",
            answer: "Use `local`, like `local name = 'Lua'`"
        },
        {
            question: "How do you change a variable’s value?",
            answer: "Just reassign it: `count = count + 1`"
        },
        {
            question: "What is a boolean in Lua?",
            answer: "A value that is either `true` or `false`, e.g., `isReady = true`"
        },
        {
            question: "How do you use a boolean in a condition?",
            answer: "Booleans are used in conditions like `if isActive then`"
        },
        {
            question: "Which values are considered false in Lua?",
            answer: "Only `false` and `nil` are false; everything else is true"
        },
        {
            question: "How do you write an if statement in Lua?",
            answer: "Use `if condition then` followed by code, then `end`"
        },
        {
            question: "How do you write an if-else statement?",
            answer: "Use `if`, `else`, and `end` to handle two cases"
        },
        {
            question: "How do you write an if-elseif-else block?",
            answer: "Use `if`, one or more `elseif`, and an optional `else`, ending with `end`"
        },
        {
            question: "How do you write a while loop in Lua?",
            answer: "Use `while condition do`, followed by a block and `end`"
        },
        {
            question: "How do you write a numeric for loop in Lua?",
            answer: "Use `for i = 1, 5 do` and close with `end`"
        },
        {
            question: "How do you use a break statement in Lua?",
            answer: "Use `break` inside a loop to exit early"
        },
        {
            question: "How do you define a string in Lua?",
            answer: "Enclose text in quotes: `'hello'` or `\"world\"`"
        },
        {
            question: "How do you concatenate strings in Lua?",
            answer: "Use `..` like `'Lua' .. 'Script'`"
        },
        {
            question: "How do you find the length of a string?",
            answer: "Use the `#` operator: `#'hello'` returns `5`"
        },
        {
            question: "How do you compare two strings in Lua?",
            answer: "Use `==` like `if a == b then`"
        },
        {
            question: "How do you convert a number to a string?",
            answer: "Use `tostring(123)`"
        },
        {
            question: "How do you convert a string to a number?",
            answer: "Use `tonumber('42')`"
        },
        {
            question: "How do you check if a variable is nil?",
            answer: "Use `if x == nil then`"
        },
        {
            question: "How do you use logical operators in Lua?",
            answer: "Use `and`, `or`, and `not` in expressions like `if x and y then`"
        }
    ];
    localStorage.setItem("flash-cards", JSON.stringify(questionData));
    if (typeof startTest === "function"){
        startTest();
    }
}