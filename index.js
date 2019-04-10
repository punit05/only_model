var express = require("express");
var app=express();
var mongoose=require("mongoose");
var Address=require("./models/address");
var Blog=require("./models/blog")
var Masseuse=require("./models/masseuse");
var Product=require("./models/product");
var ServicesCategory=require("./models/servicesCategory");
var Spa=require("./models/spa");
var SpaServicePeople=require("./models/spaservicepeople");
var User=require("./models/user");
var VendorDetails=require("./models/vendordetail");
mongoose.connect('mongodb://localhost:27017/models', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.get("/",function(req,res)
{
    res.json("HEyu")
})

const PORT=process.env.port||5000;
app.listen(PORT, function (err) {
    if (err) console.log(err);
    else console.log(`WOOHOO Server is running on port ${PORT}`)
});