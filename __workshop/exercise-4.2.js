const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  // write write write
  try {
    const options = {
      uri: "https://api.tronalddump.io//random/quote",
      headers: { "Accept": "application/json" },
      json: true,
    }

    const result = await request(options);
    return (result.value)
  }
  catch (err) {
    console.log(err)
  }
};

// getTronaldDumpQuote().then((joke) => console.log(joke))


module.exports = { getTronaldDumpQuote }