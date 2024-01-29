import React,{useState} from 'react';
import axios from 'axios';
import GAuth from '../Backend/GAuth';
export default function Login() {
    const [show,setShow]=useState(false);
  return (
    <div className="row justify-content-center align-items-center " style={{height:'100vh'}}>
      <div className="col-lg-10 col-sm-12  bg-dark justify-content-center rounded-4 justify-content-between" style={{boxShadow:'0px 0px 5px grey'}}>
        <div className="row ">
          <img
            src="authentication.svg"
            alt="Authentication Image"
            className="col-lg-5 col-sm-5 m-5 border-end"
          />
        <form action="/Auth" className="col-lg-5 col-sm-5  m-5 " method='post' onSubmit={(e)=>{e.preventDefault(); saveData()}}>
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
            <button className="btn gradientText col-2 border" type='submit' id="signup">Sign Up</button>
            <hr className="text-white text-center display-1 m-3 mt-5"></hr>
            <h4 className="gradientText themefont text-center ">SignIn With :</h4>
            <div className="row justify-content-center">
              <button type="button" className="col-4 text-white btn" onClick={()=>GAuth()}><i className="fa-brands fa-google display-6"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 function saveData(){
  console.log("Persisting");
  try{
   axios.post('http://127.0.0.1:5500/Auth',{name:document.getElementById('name').value,password:document.getElementById('password').value}).then(result=>console.log("Authentication Done")).catch(err=>console.log(err));
  }
  catch(err){
    console.log(err);
  }
}