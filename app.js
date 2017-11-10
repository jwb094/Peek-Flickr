require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const routes = require("./routes/indexRoutes");
const photoRoutes = require("./routes/photoRoutes");

app.set('view engine', 'ejs');

//middleware used for web-app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);
app.use(photoRoutes);

//( environemnt=> different envi e.g. devices || local use)
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});