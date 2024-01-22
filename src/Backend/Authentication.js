let mongoose=require('mongoose');
let express=require('express');
let cors=require('cors');
let app=express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://Sanjay:Sanjay123@validation.9hhx7jc.mongodb.net/test?retryWrites=true&w=majority').then(result=>{console.log("DATABASE CONNECTED");app.listen(5500,'127.0.0.1',()=>console.log('Server Connected'))}).catch(err=>console.log(err));
app.post('/Auth',async (req,res)=>{
    let data = new model(req.body);
    console.log("Samoim:::::\n\n\n"+model.find({name:req.body.name}));
  // Find all users
   if((await model.find({name:'@gmail.com'})).length!=0){
    console.log('Data Presednt');
   }else{
        console.log(await model.find({name:'@gmail.com'}))
        console.log("Sanjay");
   }
    console.log("Data Persisted");
})
app.post('/SignIn',async(req,res)=>{
    let data=await model.find(res.body,(err,data)=>{
        if(!err){
            console.log(data);
        }
        else{
            console.log(err)
        }
    })
})
//Schema for Authentication
let Schema=new mongoose.Schema({
    name:{type:'string',required:true},
    password:{type:'string',required:true}
});
let model= mongoose.model('AuthData',Schema);
