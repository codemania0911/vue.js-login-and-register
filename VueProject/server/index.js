const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const api = require('./routes/api');

app.use('/', api);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
