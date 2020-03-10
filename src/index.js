const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/questionController")(app);
require("./controllers/stdQuestionnaireController")(app);


app.listen(3000);

