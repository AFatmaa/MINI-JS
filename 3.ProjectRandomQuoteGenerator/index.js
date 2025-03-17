const quotes = [
    "Don't hold on to someone who's leaving, otherwise you won't meet the one who's coming.",
    "Everything that irritates us about others can lead us to an understanding of ourselves.",
    "If you are a gifted person, it doesn't mean that you gained something. It means you have something to give back.",
    "The meeting of two personalities is like contact between two chemical substances: both elements are transformed by even the slightest reaction.",
    "I am not what happened to me, I am what I choose to become.",
    "Do the best you can until you know better. Then when you know better, do better.",
    "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
    "Stay afraid, but do it anyway. What's important is the action. You don't have to wait to be confident. Just do it and eventually the confidence will follow.",
    "One can choose to go back toward safety or forward toward growth. Growth must be chosen again and again; fear must be overcome again and again.",
    "We can't become what we need to be by remaining what we are.",
    "If there is no struggle, there is no progress.",
    "Permit yourself to change your mind when something is no longer working for you.",
    "Be not afraid of growing slowly; be afraid only of standing still.",
    "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    "Change brings opportunity.",
    "Sometimes good things fall apart so better things could fall together.",
    "Incredible change happens in your life when you decide to take control of what you have power over instead of craving control over what you don't",
    "Recognizing that you are not where you want to be is a starting point to begin changing your life.",
    "Change is made of choices, and choices are made of character.",
    "It is never too late to be who you might have been."
] 

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }

}