/* 
The teacher notes were the student module on compass so I have copied the code but 
I have read through it and understand it all (and my original code was very similar)
*/
const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  let breedName = breed;
  request(url, (error, resp, body) => {
    if (error) {
      callback("Failed to request details: " + error, null);
    }

    const data = JSON.parse(body);

    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Failed to find breed ${breedName}`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
