const express = require('express');
const path = require('path');

const app = express();
const port = 3010;



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
