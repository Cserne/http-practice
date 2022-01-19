console.log("Hello World!");

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://nemzetisport.hu')
  .then(function (response) {
    // handle success
    console.log(response.status);
    console.log(response.headers);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });