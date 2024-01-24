let mongoose=require('mongoose');
let express=require('express');
let cors=require('cors');
let app=express();
app.use(express.json());
app.use(cors());
let axios=require('axios');
mongoose.connect('mongodb+srv://Sanjay:Sanjay123@validation.9hhx7jc.mongodb.net/test?retryWrites=true&w=majority').then(result=>{console.log("DATABASE CONNECTED");app.listen(5500,'127.0.0.1',()=>console.log('Server Connected'))}).catch(err=>console.log(err));
app.post('/Auth',async (req,res)=>{
    let data = new model(req.body);
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
app.get('/song',async(req,res)=>{
    let data;
    await axios.get('https://drive.google.com/file/d/1cDMBAE4r12s8qOXQgU6Mr_efp00mX8Uz/view?usp=sharing').then(async result=>{console.log("Fetched SuccessFully");data=result.data}).catch(err=>console.log('Error At Fetching'));
    res.status(200).send(data.title);
    console.log(data);
    await axios.post('http://localhost:3000/',data).then(result=>console.log("Sented")).catch(err=>console.log(err));
})
//Schema for Authentication
let Schema=new mongoose.Schema({
    name:{type:'string',required:true},
    password:{type:'string',required:true}
});
let model= mongoose.model('AuthData',Schema);
