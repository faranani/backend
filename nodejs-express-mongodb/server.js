
const express = require("express");
const cors  = require("cors");
const app = express();

var corsOption ={
    origin : "http://localhost:8881"
};

app.use(cors(corsOption));

// parse  requirest context -appliication
app.use(express.json());

// parse request of the content - application  x-www-form -urlencoded
app.use(express.urlencoded({extended :true}));
 
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to faranani application." });
  });

  // set port ,listen for requests
   const PORT = process.env.PORT || 8080;
   app.listen(PORT, () =>{
       console.log(` server is rinning on port ${PORT}.`);
   } )

   //const app = express();
//app.use();

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  
