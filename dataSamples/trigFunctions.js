globalRoutines.trigFunctions = () => {
    const trigFunctions = [
        {
            "question": "What is the sine function?",
            "answer": "The sine function, denoted as sin(x), is a trigonometric function that represents the ratio of the length of the opposite side to the hypotenuse of a right-angled triangle."
        },
        {
            "question": "What is the cosine function?",
            "answer": "The cosine function, denoted as cos(x), is a trigonometric function that represents the ratio of the length of the adjacent side to the hypotenuse of a right-angled triangle."
        },
        {
            "question": "What is the tangent function?",
            "answer": "The tangent function, denoted as tan(x), is a trigonometric function that represents the ratio of the sine of an angle to the cosine of that angle. It is equivalent to the ratio of the length of the opposite side to the length of the adjacent side in a right-angled triangle."
        },
        {
            "question": "What is the cotangent function?",
            "answer": "The cotangent function, denoted as cot(x), is the reciprocal of the tangent function. It represents the ratio of the cosine of an angle to the sine of that angle."
        },
        {
            "question": "What is the secant function?",
            "answer": "The secant function, denoted as sec(x), is the reciprocal of the cosine function. It represents the ratio of the length of the hypotenuse to the length of the adjacent side in a right-angled triangle."
        },
        {
            "question": "What is the cosecant function?",
            "answer": "The cosecant function, denoted as csc(x), is the reciprocal of the sine function. It represents the ratio of the length of the hypotenuse to the length of the opposite side in a right-angled triangle."
        },
        {
            "question": "What is the unit circle?",
            "answer": "The unit circle is a circle with a radius of one, centered at the origin of a coordinate plane. It is used to define trigonometric functions for all real angles."
        },
        {
            "question": "What are the primary trigonometric identities?",
            "answer": "Primary trigonometric identities include the Pythagorean identity (sin²(x) + cos²(x) = 1), the reciprocal identities (sec(x) = 1/cos(x), csc(x) = 1/sin(x), cot(x) = 1/tan(x)), and the quotient identities (tan(x) = sin(x)/cos(x), cot(x) = cos(x)/sin(x))."
        },
        {
            "question": "What is the range of the sine function?",
            "answer": "The range of the sine function is from -1 to 1, inclusive. This means sin(x) will always yield a result between -1 and 1."
        },
        {
            "question": "What is the period of the cosine function?",
            "answer": "The period of the cosine function is 2π. This means that cos(x) repeats its values every 2π units along the x-axis."
        }
    ];
    localStorage.setItem("flash-cards", JSON.stringify(trigFunctions));
    if (typeof startTest === "function"){
        startTest();
    }
}