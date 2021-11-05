const request = require('request');
const input = process.argv.slice(2);

const gcl = 'https://api.thecatapi.com/v1/breeds'; // link to be fetched;

// const ltf = 'https://api.thecatapi.com/v1/breeds/search?name=Siberian' // link to be fetched;

console.log(input);

request(gcl, (error, response, body) => {
  
  const data = JSON.parse(body);
 
  if (error || data.message) {
    console.log(data.message);
    return response;
  } else {
    let outPut = "";
    
    for (let i of data) {
      if (i['name'] === input[0]) outPut = i['description'];
    }
  
    outPut === "" ? console.log(`Sorry, the cat ${input[0]} is not on record!`) : console.log(outPut);
  }
   
});