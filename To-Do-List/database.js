const mongoose = require("mongoose");
//to-do-lists database
mongoose.connect("mongodb://localhost:27017/to-do-lists", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => {
   console.log("Connected to the 'to-do-lists' database");
})
.catch(error => {
   console.error("Error connecting to the 'to-do-lists' database:", error);
});


//module.exports = connectDatabase;
