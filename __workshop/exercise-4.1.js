const request = require("request-promise");

// getDadJoke

const getDadJoke = async () => {
    try {
        const options = {
            uri: 'https://icanhazdadjoke.com/',
            headers: { "Accept": "application/json" },
            json: true
        }

        const recieved = await request(options);
        return recieved.joke;
    }
    catch (err) {
        console.log('Error: ', err);
    }
}

// 4.1
// getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke }
