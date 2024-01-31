import React,{useEffect} from 'react';
export default function PopularSongs(){
 function hide(){
  document.getElementById("preloader").style.display='none';
  console.log("Done");
 }
    return (
        <div className="row justify-content-center" style={{overflow:'hidden'}}>
            <div className="col-12 themefont gradientText h1">Data About Frisson App</div>
            <div className="row preloader justify-content-center align-items-center" id="preloader" style={{width:'100vw',height:'100vh'}}>
            <div class="spinner-border text-secondary " role="status" style={{width:'100px',height:'100px'}}>
              <span class="visually-hidden">Loading...</span>
            </div>

      </div>
        <iframe className="m-5 rounded" width='100vw' height='60vh' src="https://lookerstudio.google.com/embed/reporting/f00c2651-290c-4016-8c65-96010fbe6b36/page/HueoD" frameborder="0" style="border:0" allowfullscreen style={{width:'90vw',height:'80vh',boxShadow:'0px 0px 10px white'}} onLoad={hide}></iframe>
        </div>
        )
}