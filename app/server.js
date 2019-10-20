let express = require("express");
let path = require("path");
let app = express();
let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });