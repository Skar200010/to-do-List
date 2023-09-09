const mongoose = require("mongoose");
//to-do-lists database
mongoose.connect("mongodb+srv://khedekarsohan10:Sohan10@cluster0.4faguxu.mongodb.net/to-do-lists", {
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