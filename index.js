const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//middleware needed to connect front-end to back-end
const corsMiddelware = cors();
const parserMiddelware = bodyParser.json();

const app = express();
app.use(corsMiddelware);
app.use(parserMiddelware);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Cinema Review app listening on port ${port}!`))