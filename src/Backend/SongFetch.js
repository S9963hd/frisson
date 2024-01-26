export default function songFetch(){
    let mongoose=require('mongoose');
    mongoose.connect('mongodb+srv://Sanjay:<password>@validation.9hhx7jc.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }).then(result=>console.log("Connection Established")).catch(err=>console.log("Error Found"));
}