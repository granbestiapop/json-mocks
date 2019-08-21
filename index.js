const express = require('express');
const axios = require('axios');

const getFile = (path, extension = '.json') => {
  return axios(`https://raw.githubusercontent.com/granbestiapop/json-mocks/pdp/v1/${path}${extension}`)
}
//axios('https://raw.githubusercontent.com/granbestiapop/json-mocks/pdp/v1/products/MLA1').then((res)=>console.log(res.data))

const app = express();

app.get('/*', function (req, res) {
  const path = req.path;
  getFile(path).then(response=> res.send(response.data))
    .catch((err)=>res.status(500).send(err));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
