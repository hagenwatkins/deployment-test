const express = require('express');


const app = express();



app.use(express.static('public'));

console.log('==================');
console.log(process.env);
app.listen(process.env.Port, () => {
  console.log('Listening on port 7990', ${process.env.PORT});

});
