const quotesdata = [
 
    {
        "text": "It’s more difficult to create the problem than to solve it. All the person trying to solve the problem has to do is always respect the problem’s creator.",
        "author": "Keigo Higashino"
    },
      {
        "text": "Which is harder: devising an unsolvable problem, or solving that problem?",
        "author": "Keigo Higashino"
    },
    {
        "text": "Even when you’re at the top, there’s always something higher",
        "author": "Keigo Higashino"
    },
    {
        "text": "Your assumptions are your worst enemies. Trust them too much, and you’ll fail to see what’s right under your nose.",
        "author": "Keigo Higashino"
    }
]

let alreadyDisplay = []
function getRandomPosition() {
    let newNumber = true;
    while (newNumber) {
        let randomnumber = Math.floor(Math.random() * 4);
        if (!alreadyDisplay.includes(randomnumber)) {
            alreadyDisplay.push(randomnumber);
            return randomnumber;
        }
    }

}

function getQuotes() {
    try {
        quotesnumber = getRandomPosition();
        const quotesdiv = document.getElementById('quotes');
        let textdata = quotesdata[quotesnumber].text;
        let author = quotesdata[quotesnumber].author;
        if (author === null) {
            author = "No Author Found"
        }

        quotesdiv.innerHTML = `“ <span class="main">${textdata}</span> ”--${author}`

    }
    catch (error) {
        alert(error)
    }
}

getQuotes();
setInterval(getQuotes, 3600 * 1000);