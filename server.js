const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(process.cwd() + "/build"));

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, function(){
  console.log("App listening on port %s", PORT);
});
