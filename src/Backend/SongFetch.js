let cors=require('cors');
let express=require('express');
let morgan=require('morgan');
let axios=require('axios');
app=express();
app.use(morgan());
app.use(cors());
app.use(express.json());
let data;
app.listen(3000,'localhost',()=>console.log("Server Connected"));
app.get('/',async(req,res)=>{
    await axios.get('https://app.box.com/s/0scpapjy56eldkzun66ht6ln48ri272l').then(async result=>{await axios.post('http://localhost:3000/',result.data.title).then(result=>console.log("Success").catch(err=>console.log("Failed")));console.log("Fetching SuccessFully")}).catch(err=>console.log('Error At Fetching'));
    console.log("Finished");
})
module.exports=data;
