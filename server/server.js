//makew sure to setup your requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//makes use of this path to get to index.html
app.use(express.static('./server/public'));

const PORT = 5001;

//server running on PORT
app.listen(PORT, ()=>{
    console.log('server running on PORT:', PORT);
})