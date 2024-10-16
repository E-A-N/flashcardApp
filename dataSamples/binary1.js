globalRoutines.binary1 = () => {
    let quizArray = [
        {
            question: "What is the symbol used for a bitwise AND operation?",
            answer: "Ampersand &"
        },
        {
            question: "What is the symbol used for a bitwise OR operation?",
            answer: "Vertical bar |"
        },
        {
            question: "What is the symbol used for a bitwise XOR operation?",
            answer: "Caret ^"
        },
        {
            question: "What is the symbol used for a bitwise NOT operation?",
            answer: "Tilde ~"
        },
        {
            question: "What is the symbol used for a left shift operation?",
            answer: "Double less than <<"
        },
        {
            question: "What is the symbol used for a right shift operation?",
            answer: "Double greater than >>"
        },
        {
            question: "What is the result of the bitwise AND& operation on 5 (0101) and 3 (0011)?",
            answer: "The result is 1 (0001)."
        },
        {
            question: "What does the bitwise OR| operation do?",
            answer: "It combines bits such that if either bit is 1, the result is 1."
        },
        {
            question: "What is the result of 6 (0110) OR| 2 (0010)?",
            answer: "The result is 6 (0110)."
        },
        {
            question: "How does the bitwise XOR^ operation work?",
            answer: "XOR returns 1 if the bits are different, and 0 if they are the same."
        },
        {
            question: "What is the result of 4 (0100) XOR^ 5 (0101)?",
            answer: "The result is 1 (0001)."
        },
        {
            question: "What is the purpose of the bitwise NOT~ operation?",
            answer: "It inverts all the bits in the number."
        },
        {
            question: "What is the result of NOT~ 5 (0101)?",
            answer: "The result is -6 (in two's complement: 1010)."
        },
        {
            question: "What is a left shift operation<<?",
            answer: "It shifts all bits in a binary number to the left by a specified number of positions."
        },
        {
            question: "What is the result of left shifting 3 (0011) by 2 positions<<?",
            answer: "The result is 12 (1100)."
        },
        {
            question: "What is a right shift operation>>?",
            answer: "It shifts all bits in a binary number to the right, discarding bits that fall off."
        },
        {
            question: "What is the result of right shifting 12 (1100) by 2 positions>>?",
            answer: "The result is 3 (0011)."
        },
        {
            question: "What does the bitwise operation 8 (1000) AND& 4 (0100) return?",
            answer: "It returns 0 (0000)."
        },
        {
            question: "How does the operation 7 (0111) OR| 2 (0010) work?",
            answer: "It combines bits and results in 7 (0111)."
        },
        {
            question: "What happens when you XOR^ a number with itself?",
            answer: "The result is always 0."
        },
        {
            question: "What is the binary representation of 15?",
            answer: "The binary representation is 1111."
        },
        {
            question: "What is the decimal equivalent of the binary 1010?",
            answer: "The decimal equivalent is 10."
        },
        {
            question: "How do you convert a binary number to decimal?",
            answer: "Multiply each bit by 2 raised to the power of its position and sum the results."
        },
        {
            question: "What is the bitwise AND& of 0 (0000) and any number?",
            answer: "The result is always 0."
        },
        {
            question: "What is the effect of left shifting a binary number by one position<<?",
            answer: "It multiplies the number by 2."
        },
        {
            question: "What is the effect of right shifting a binary number by one position>>?",
            answer: "It divides the number by 2 (ignoring the remainder)."
        },
        {
            question: "What is the two's complement of a binary number?",
            answer: "It is obtained by inverting the bits and adding 1."
        },
        {
            question: "What does the term 'masking' refer to in bitwise operations?",
            answer: "It refers to using a bitwise operation to isolate certain bits of a number."
        },
        {
            question: "What is the bitwise operation for setting a specific bit to 1?|",
            answer: "Use the OR operation with a mask."
        },
        {
            question: "How do you clear a specific bit in a binary number?&",
            answer: "Use the AND operation with a mask where the bit is 0."
        },
        {
            question: "What is the result of 15 (1111) AND& 9 (1001)?",
            answer: "The result is 9 (1001)."
        },
        {
            question: "What is the result of 8 (1000) OR| 4 (0100)?",
            answer: "The result is 12 (1100)."
        },
        {
            question: "How can you toggle a specific bit in a binary number?^",
            answer: "Use the XOR operation with a mask where the specific bit is 1."
        },
        {
            question: "What is the binary representation of the decimal number 2?",
            answer: "The binary representation is 0010."
        },
        {
            question: "What is a practical use of bitwise operations?",
            answer: "They are often used in low-level programming for performance optimization."
        },
        {
            question: "What is the effect of performing a NOT~ on 0?",
            answer: "The result is -1 (in two's complement: all bits are 1)."
        },
        {
            question: "What is the binary representation of -1 in an 8-bit system?",
            answer: "The binary representation is 11111111."
        },
        {
            question: "What happens when you perform a right shift on a negative number?",
            answer: "It may perform an arithmetic shift (maintaining the sign) or a logical shift (ignoring the sign) depending on the language."
        },
        {
            question: "What is the result of adding 1011 (11) and 1101 (13) in binary (with carrying)?",
            answer: "The result is 11000 (24)."
        },
        {
            question: "When adding the binary numbers 0110 (6) and 0011 (3), what is the carry bit?",
            answer: "The carry bit is 1."
        },
        {
            question: "What is the result of adding 1110 (14) and 0101 (5) in binary (with carrying)?",
            answer: "The result is 0011 (3, with a carry of 1, which is ignored in 4-bit representation)."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function") {
        startTest();
    }
}
