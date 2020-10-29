// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require('request-promise');

const getIssPosition = async () => {
  try {
    const response = await request(`http://api.open-notify.org/iss-now.json`);
    const issLocation = JSON.parse(response);
    return {
      lat: Number(issLocation.iss_position.latitude),
      lng: Number(issLocation.iss_position.latitude),
    };
  } catch (err) {
    console.log('Error: ', err);
  }
};

getIssPosition().then((result) => console.log(result));

console.log(getIssPosition());
