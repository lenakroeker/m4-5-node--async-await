const request = require('request-promise');

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const options = {
      uri: "https://geek-jokes.sameerkumar.website/api?format=json",
      method: "GET",
      json: true,
    }

    const result = await request(options, (err, response, body) => {
      if (!err && response.statusCode == 200)
        return (body)
    });
    return result.joke;
  }
  catch (err) {
    console.log(err);
  }
};


// getGeekJoke().then((joke) => console.log(joke));

module.exports = { getGeekJoke }