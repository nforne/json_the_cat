const {fetchBreedDescription} = require('./breedFetcher');

const input = process.argv.slice(2)[0];
console.log(input);
fetchBreedDescription(input, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});

