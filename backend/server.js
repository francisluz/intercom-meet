
const express       = require('express');
const bodyParser    = require('body-parser');
var cors            = require('cors');

const app = express();

const port  = process.env.PORT || 3001;

//Enable cors
app.use(cors());

//Setting routes
require('./routes')(app, {});

app.listen(port, () => {
    console.log('Intercom Meet API is live on ' + port);
});