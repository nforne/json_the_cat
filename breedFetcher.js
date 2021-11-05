const request = require('request');



// const ltf = 'https://api.thecatapi.com/v1/breeds/search?name=Siberian' // link to be fetched;


const fetchBreedDescription = function(breedName, callback) {
  
  const gcl = 'https://api.thecatapi.com/v1/breeds'; // link to be fetched;
  
  let outPut = "";
  let errorOutPutCheck = "";
  request(gcl, (error, response, body) => {
    
    const data = JSON.parse(body);
    if (error || data.message) {
      errorOutPutCheck = `Error fetch details: ${data.message}`;
      callback(errorOutPutCheck, outPut);
      return response;
    } else {
      
      for (let i of data) {
        if (i['name'] === breedName) outPut = i['description'];
      }
      
      outPut === "" ? outPut = `Sorry, the cat ${breedName} is not on record!` : outPut;
      callback(errorOutPutCheck, outPut);
    }
    return outPut;
  });
  
};


module.exports = { fetchBreedDescription };