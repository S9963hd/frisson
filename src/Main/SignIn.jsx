import React,{useState} from 'react';
import axios from 'axios';
export default function SignIn() {
    const [show,setShow]=useState(false);
  return (
    <div className="row justify-content-center align-items-center " style={{height:'100vh'}}>
      <div className="col-10 bg-dark justify-content-center rounded-4 justify-content-between" style={{boxShadow:'0px 0px 5px grey'}}>
        <div className="row">
        <img
          src="authentication.svg"
          alt="Authentication Image"
          className="col-5 m-5 border-end"
        />
        <form action="/Auth" className="col-5 m-5 " method='post' onSubmit={(e)=>{e.preventDefault(); saveData()}}>
            <h1 className="themefont gradientText text-center m-2">FRISSON</h1>
            <div className="form-floating m-3">
                <input type="email" className="form-control" placeholder="" id='name' name='name'/>
                <label>Enter Email</label>
            </div>
            <div className="form-floating m-3">
                <input type={show?'text':'password'} className="form-control" placeholder="" id='password' name='password'/>
                <label>Enter Password</label>
            </div>
            <h5 className="text-end gradientText" onClick={()=>setShow(!show)} style={{cursor:'pointer'}}>Show Password</h5>
            <button className="btn gradientText col-2 border " type='submit' >Sign Up</button>
        </form>
        </div>
      </div>
    </div>
  );
}
 function saveData(){
  console.log("Persisting");
  try{
   axios.post('http://127.0.0.1:5500/SignIn',{name:document.getElementById('name').value,password:document.getElementById('password').value}).then(result=>console.log("Authentication Done")).catch(err=>console.log(err));
  }
  catch(err){
    console.log(err);
  }
}