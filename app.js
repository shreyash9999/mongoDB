const mongoose = require("mongoose");
const express = require("express");
const app = express();


// mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true,useUnifiedTopology:true},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Connected db");
//     }
// }
// );

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true,useUnifiedTopology:true},)
    .then(()=>console.log("connect db success"))
    .catch((err)=>{console.error(err);
}
);

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit  = new Fruit({
    name: "Apple",
    rating : 7,
    review: "Hm pretty red apple"
});

fruit.save();


app.get("/", function(req, res) {
    res.send("oo its up!");
});








app.listen(3000, function() {
    console.log("server up on 3000");
});

// mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true});
// //connection url


// const fruitSchema = new mongoose.Schema({
//     name:String,
//     rating:Number,
//     review:String
// });

// const Fruit = mongoose.model("Fruit",fruitSchema);

// const fruit  = new Fruit({
//     name: "Apple",
//     rating : 7,
//     review: "Hm pretty red apple"
// });

// fruit.save();