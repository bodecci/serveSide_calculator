//makew sure to setup your requires
// I need to set an array to keep track of history
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calculateRouter = require('./routes/calculate.router.js');

//makes use of this path to get to index.html
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/calculate', calculateRouter);


const PORT = process.env.PORT || 5001;

//server running on PORT
app.listen(PORT, () => {
    console.log('server running on PORT:', PORT);
});

