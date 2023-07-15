const mongoose = require("mongoose");//import mongoose
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
               //need to use 127.0.0.1:27017/<name of database>  // to get rid of deprecation values
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true,useUnifiedTopology:true})
    .then(()=>console.log("connect db success"))
    .catch((err)=>{console.error(err);});

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit  = new Fruit({
    name: {
        type:String,
        required:[true,"Please check your name field, it's not specified"]
    },
    rating : 7,
    review: "Hm pretty red apple"
});

//fruit.save();


//func  find() used to find the data 
        //call back having 2params err, whatever it calls back we gave here only one
Fruit.find().then((fruits)=>{
    console.log(fruits[0].name)
    fruits.forEach((fruits)=>{
        console.log(fruits.name)
    })
})
.catch((err)=>{console.error(err)})

Fruit.updateOne({_id:"64a7c6588aa2542cfb78035f"},{name:"Shreyash"}).catch((err)=>{console.error(err)})

// Fruit.find().then((fruits)=>{
//     console.log(fruits[0].name)
//     fruits.forEach((fruits)=>{
//         console.log(fruits.name)
//     })
// })
// .catch((err)=>{console.error(err)})

Fruit.deleteOne({name:"Shreyash"}).then(()=>console.log("delet succese"))
.catch((err)=>{console.error(err)});


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