

/* Init -------------------------------------------------------------------- */


// Requirements
const express = require("express");

// Configure app
const app = express(); 
app.use(express.static("public"));


/* Home rout --------------------------------------------------------------- */


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});


/* Port -------------------------------------------------------------------- */


app.listen(3000, () => {
    console.log("Listening on port 3000!");
});
