/* 
The teacher notes were the student module on compass so I have copied the code but 
I have read through it and understand it all (and my original code was very similar)
*/
const request = require("request");

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, resp, body) => {
  if (error) {
    return console.log("Failed to request details: ", error);
  }

  const data = JSON.parse(body);

  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breed}`);
  }
});
