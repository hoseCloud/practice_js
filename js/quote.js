const qutoes = [
    {
        quote: "I think everyday about wanting to eat curry every morning.",
        author: "hose"
    },
    {
        quote: "I do shit after out my bed.",
        author: "4ose"
    },
    {
        quote: "I exercise everyday... That is my hope.",
        author: "HOSE"
    },
    {
        quote: "I want to be smart.",
        author: "dummy hose"
    },
    {
        quote: "Everyday i'm hungry.",
        author: "hose"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const idx = Math.floor(Math.random() * qutoes.length);

quote.innerHTML = qutoes[idx].quote;
author.innerHTML = qutoes[idx].author;