require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3500;

// Set Temaplate Engine & Static Files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('public')); 

app.get("/",(req,res) => {
    res.render("index",{'title': "Beranda"})
});

app.get("/about",(req,res) => {
    res.render("about",{'title' : "About Page"});
});

app.listen(PORT,()=> {
    console.log("Server running on port " + PORT);
})