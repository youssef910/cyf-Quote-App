// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const cors = require("cors");

const app = express();
app.use(cors());
//load the quotes JSON
const Quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function(request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes/search", (request, response) => {
  if (!request.query.term && !request.query.author) {
    response.send(Quotes);
  } else {
    const SearchWord = request.query.term;
    const author = request.query.author;
    const wantedQuote = Quotes.filter((quote) =>
      // regular expressions: quote.quote.match(new RegExp(SearchWord, "i"))
      quote.quote.toLowerCase().includes(SearchWord.toLowerCase()),
    ).filter((quote) =>
      quote.author.toLowerCase().includes(author.toLowerCase()),
    );
    response.send(wantedQuote);
  }
});
app.get("/quotes/random", (request, response) => {
  response.send(lodash.sample(Quotes));
});

app.get("/quotes/:id", (request, response) => {
  const index = request.params.id;
  response.send(Quotes[index]);
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 8900, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
