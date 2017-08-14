const express = require('express');

let app = express();
let port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`server running at ${3000}`);
})
