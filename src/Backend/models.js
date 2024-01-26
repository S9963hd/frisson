let mongoose=require('mongoose');
//For Authentication Model
let Authentication=new mongoose.Schema({
    name:{type:"string",required:true},
    password:{type:'string',required:true}
})
//For Song Fetching Model
let SongFetch=new mongoose.Schema({
    name:{type:'string',required:true},
    author:{type:'string',required:true},
    likedSong:{type:'boolean',required},
    songFile:{type:'buffer',required},
})
module.exports={Authentication,SongFetch};