let express=require('express');
let mongoose=require('mongoose');
let morgan=require('morgan');
let cors=require('cors');
let app=express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.post('/song',(req,res)=>{

})
mongoose.connect("mongodb+srv://Sanjay:Sanjay123@validation.9hhx7jc.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(result=>{console.log("Connection Success");app.listen(5500,'localhost',()=>console.log("Lisstening"))}).catch(err=>console.log(err));
