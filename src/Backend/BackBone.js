let express=require('express');
let morgan=require('morgan');
let cors=require('cors');
let app=express();
app.use(cors());
app.use(morgan('dev'));
import defaultSong from './SongFetch';
import {Authentication,SongFetch} from './models'
app.get("/",(req,res)=>{
    console.log("ROOT DIR");
})
app.get("/login",(req,res)=>{
    console.log("Login Page");
})
app.get("/SongFetching",(req,res)=>{
    console.log("Song Fetching");
})
app.post('/Storage',(req,res)=>{
    console.log("Song Storing");
})
app.listen(5500,'localhost',()=>console.log("Backbone Server Invoked"));