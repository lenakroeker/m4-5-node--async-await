// Exercise 3
// ----------
const delay = require('delay');



const doublesLater = async (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  console.log("initiated")

  await delay(2000);
  // 2. returns the double of the num
  return new Promise((resolve, reject) => {
    typeof num === "number" ?
      resolve(num * 2) :
      reject("this is not a number!")
  });

};

// 3. handleSum function (async/await)

const handleSum = async (num) => {
  try {
    const sum1 = await doublesLater(num);
    const sum2 = await doublesLater(sum1);
    const sum3 = await doublesLater(sum2);
    return sum3;
  }
  catch (err) {
    console.log(err);
  }
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));
