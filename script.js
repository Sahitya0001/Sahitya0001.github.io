let text = document.getElementById("Text");
let author = document.getElementById("author");
let button = document.querySelector("#generator");
let sound = document.getElementById("volume");
let copy = document.getElementById("copy");
let twitter = document.getElementById("twitter");

async function randomQuote() {
    button.innerText = "Loading Quote...";
    await fetch("http://api.quotable.io/random").then(res => res.json()).then(result => {
        text.innerText = result.content;
        author.innerText = "-- " + result.author;
        button.innerText = "New Quote";
    });
}

button.addEventListener("click",randomQuote);

sound.addEventListener("click",() => {
    // let string = author.innerText;
    // let str = string.substring()
    let utterance = new SpeechSynthesisUtterance(`${text.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});

copy.addEventListener("click",() => {
    navigator.clipboard.writeText(text.innerText);
});

twitter.addEventListener("click",() => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${text.innerText}`;
    window.open(tweetUrl,"_blank");
});
