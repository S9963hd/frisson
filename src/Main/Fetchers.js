let fs =require('fs');
function uploadActual(path){
    try{
    fs.readFileSync(path,(err,result)=>{
            return result;
    });}
    catch(err){
        console.log("Error Occured");
    }
}