// nothing here yet...
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (type) => {
    const types = ["trump", "dad", "geek"]
    let joke;
    switch (type) {
        case "dad":
            joke = await getDadJoke();
            break;
        case "trump":
            joke = await getTronaldDumpQuote();
            break;
        case "geek":
            joke = await getGeekJoke();
            break;
        default:
            return "invalid joke type"
    }
    return joke
}




module.exports = { handleJoke }
