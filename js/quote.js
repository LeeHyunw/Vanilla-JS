const quotes = [
    {
        quote : "0",
        author: "0",       
    },
    {
        quote : "1",
        author: "1",       
    },
    {
        quote : "2",
        author: "22",       
    },
    {
        quote : "3",
        author: "333",       
    },
    {
        quote : "4",
        author: "4444",       
    },
    {
        quote : "5",
        author: "55555",       
    },
    {
        quote : "6",
        author: "666666",       
    },
    {
        quote : "7",
        author: "7777777",       
    },
    {
        quote : "8",
        author: "88888888",       
    },
    {
        quote : "9",
        author: "999999999",       
    }
]

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const todayquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayquote.quote
quote.innerText = todayquote.author

