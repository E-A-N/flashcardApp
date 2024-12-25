globalRoutines.candlestick1 = () => {    
    let quizArray = [
        {
            question: "What is a candlestick chart?",
            answer: "A candlestick chart is a financial chart used to represent price movements over time, showing open, high, low, and close prices for a specific period."
        },
        {
            question: "What do the wicks (shadows) of a candlestick represent?",
            answer: "The wicks represent the highest and lowest prices traded during the given time period."
        },
        {
            question: "What does a green (or hollow) candlestick indicate?",
            answer: "A green (or hollow) candlestick indicates that the closing price was higher than the opening price, showing a bullish movement."
        },
        {
            question: "What does a red (or filled) candlestick indicate?",
            answer: "A red (or filled) candlestick indicates that the closing price was lower than the opening price, showing a bearish movement."
        },
        {
            question: "What is the body of a candlestick?",
            answer: "The body of a candlestick represents the range between the opening and closing prices for the time period."
        },
        {
            question: "What is a Doji candlestick?",
            answer: "A Doji is a candlestick where the open and close prices are almost the same, indicating indecision in the market."
        },
        {
            question: "What is a Hammer candlestick?",
            answer: "A Hammer is a candlestick with a small body and a long lower wick, often seen at the bottom of a downtrend, signaling a potential bullish reversal."
        },
        {
            question: "What is an Inverted Hammer candlestick?",
            answer: "An Inverted Hammer is similar to a Hammer but with a long upper wick, often indicating a potential reversal at the end of a downtrend."
        },
        {
            question: "What is a Hanging Man candlestick?",
            answer: "A Hanging Man is a candlestick with a small body and a long lower wick, appearing at the top of an uptrend, signaling a potential bearish reversal."
        },
        {
            question: "What is an Engulfing candlestick pattern?",
            answer: "An Engulfing pattern occurs when a smaller candlestick is followed by a larger one that completely 'engulfs' it, indicating a reversal of the trend."
        },
        {
            question: "What is a Bullish Engulfing pattern?",
            answer: "A Bullish Engulfing pattern is when a smaller red candlestick is followed by a larger green candlestick, signaling a potential bullish reversal."
        },
        {
            question: "What is a Bearish Engulfing pattern?",
            answer: "A Bearish Engulfing pattern is when a smaller green candlestick is followed by a larger red candlestick, signaling a potential bearish reversal."
        },
        {
            question: "What is a Morning Star pattern?",
            answer: "A Morning Star is a three-candle pattern that indicates a potential bullish reversal, consisting of a long red candlestick, a short-bodied candle, and a long green candlestick."
        },
        {
            question: "What is an Evening Star pattern?",
            answer: "An Evening Star is a three-candle pattern that signals a potential bearish reversal, consisting of a long green candlestick, a short-bodied candle, and a long red candlestick."
        },
        {
            question: "What is a Doji Star pattern?",
            answer: "A Doji Star is a candlestick pattern where a Doji follows a long candlestick, signaling potential indecision and a reversal of the trend."
        },
        {
            question: "What is a Tweezer Top pattern?",
            answer: "A Tweezer Top pattern occurs when two consecutive candlesticks have the same high price, signaling a potential bearish reversal."
        },
        {
            question: "What is a Tweezer Bottom pattern?",
            answer: "A Tweezer Bottom pattern occurs when two consecutive candlesticks have the same low price, signaling a potential bullish reversal."
        },
        {
            question: "What is a Marubozu candlestick?",
            answer: "A Marubozu candlestick has no wicks and the body covers the entire range from open to close, indicating strong buying or selling pressure."
        },
        {
            question: "What does a Bullish Marubozu candlestick indicate?",
            answer: "A Bullish Marubozu is a candlestick with a long green body and no wicks, indicating strong buying pressure and a continuation of the uptrend."
        },
        {
            question: "What does a Bearish Marubozu candlestick indicate?",
            answer: "A Bearish Marubozu is a candlestick with a long red body and no wicks, indicating strong selling pressure and a continuation of the downtrend."
        },
        {
            question: "What is a Rising Three Methods pattern?",
            answer: "A Rising Three Methods pattern is a continuation pattern consisting of a long green candlestick followed by three smaller red candlesticks and then another long green candlestick."
        },
        {
            question: "What is a Falling Three Methods pattern?",
            answer: "A Falling Three Methods pattern is a continuation pattern consisting of a long red candlestick followed by three smaller green candlesticks and then another long red candlestick."
        },
        {
            question: "What is a Spinning Top candlestick?",
            answer: "A Spinning Top is a candlestick with a small body and long wicks on both sides, indicating indecision in the market."
        },
        {
            question: "What is an Inside Bar candlestick pattern?",
            answer: "An Inside Bar pattern occurs when a candlestick's body is entirely contained within the range of the previous candlestick, signaling potential consolidation or a breakout."
        },
        {
            question: "What is a Breakaway candlestick pattern?",
            answer: "A Breakaway pattern is a five-candle pattern that marks the end of a price consolidation period and the beginning of a new trend."
        },
        {
            question: "What is a Piercing Line pattern?",
            answer: "A Piercing Line pattern is a two-candle bullish reversal pattern where a long red candlestick is followed by a long green candlestick that opens lower but closes above the middle of the red candle."
        },
        {
            question: "What is an Abandoned Baby pattern?",
            answer: "An Abandoned Baby is a rare candlestick pattern that signals a reversal, where a Doji appears between two candlesticks of opposite color, and there is a gap between them."
        },
        {
            question: "What is a Shooting Star candlestick?",
            answer: "A Shooting Star is a candlestick with a small body and a long upper wick, typically seen after an uptrend, signaling potential bearish reversal."
        },
        {
            question: "What is a Dark Cloud Cover pattern?",
            answer: "A Dark Cloud Cover is a two-candle bearish reversal pattern where a long green candlestick is followed by a long red candlestick that opens higher but closes below the middle of the green candlestick."
        },
        {
            question: "What is a Bullish Harami pattern?",
            answer: "A Bullish Harami is a two-candle pattern where a small green candlestick is contained within a large red candlestick, indicating potential bullish reversal."
        },
        {
            question: "What is a Bearish Harami pattern?",
            answer: "A Bearish Harami is a two-candle pattern where a small red candlestick is contained within a large green candlestick, indicating potential bearish reversal."
        },
        {
            question: "What is a Kicking pattern?",
            answer: "A Kicking pattern is a two-candle pattern where a long green candlestick is followed by a long red candlestick (or vice versa), signaling a strong reversal of the trend."
        }
    ];

    localStorage.setItem("flash-cards", JSON.stringify(quizArray));
    if (typeof startTest === "function"){
        startTest();
    }
}
