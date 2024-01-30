import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import MusicContent from './Music';
import axios  from 'axios';
export default function Main(){
//     const [song, setSong] = useState(null);
// //     useEffect(()=>{
// //     axios('http://localhost:5500/song').then(data=>console.log("Data Fetching")).catch(err=>console.log('Error At Fetching'));
// // })
    return (
        <div style={{position:'relative',height:'100vh',flexWrap:'wrap',width:'100vw'}} >
            <div className="row p-4 border-bottom" style={{position:'sticky',top:0,background:'rgb(25,25,25,1)',zIndex:1}}>
                <i className="col-lg-2 col-sm-12 display-3 themefont gradientText flex-wrap text-center">FRISSON</i>           
                <div className="col-lg-6 col-sm-2 mt-4"><Navigation /></div>
                <div className="col-lg-4 col-sm-4 ">
                <NavigationOption/>
                </div>
            </div >
            <div className="row " style={{position:'sticky',top:'125px',background:'rgb(25,25,25,0.9)',zIndex:1}}>
                    <SideOption/>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-12">
                <img src="Character1.svg"/>
                </div>
                <div className="col-lg-6 col-sm-12 align-self-center">
                    <h1 className="themefont gradientText text-center display-1 " style={{textShadow:'0px 50px 20px black'}}>Frisson Musical player Web Application 🎶</h1>
                </div>
            </div>
            {/* <div className="row">
                <Track/>
            </div> */}
            <div className="row" >
                <MusicContent/>
            </div>
            <div className="row justify-content-around" >
                <a href="mailto:sanjaymajestic143@gmail.com" className="gradientText col-1 text-center" style={{textDecoration:'none'}}><img className="col-4" src="Mail.svg" style={{height:'4vh'}}/></a>
                <a href="https://www.instagram.com/sanj.ay1237659/" className="gradientText col-1 text-center" style={{textDecoration:'none'}}><img className="col-4" src="Instagram.svg" style={{height:'4vh'}}/></a>
                <a href="https://github.com/S9963hd/frisson" className="gradientText col-1 text-center" style={{textDecoration:'none'}}><img className="col-4" src="GitHub.svg" style={{height:'5vh'}}/></a>
                <a href="https://www.linkedin.com/in/sanjay-s-610913285/" className="gradientText col-1 text-center" style={{textDecoration:'none'}}><img className="col-4" src="linkedIn.svg" style={{height:'4vh'}}/></a>
            </div>
            <p className="gradientText themefont text-center m-5"> Frisson Music player is a public music player in cloud Where you can store your audio on Cloud ,So other peoples Can see your Audio for Absolutely Free.</p>
            <div className="col m-5">
                <h1>&nbsp;</h1>
            </div>
            <div className="col m-5">
                <h1>&nbsp;</h1>
            </div>
        </div>
    )
}
function Navigation(){
    return (
        <>
            <div className="input-group" style={{zIndex:1}}>
                <input type="text" className="form-control" placeholder="🎵 Explore Songs"/>
                <btn className='btn btn-secondary material-symbols-outlined'>search</btn>
            </div>
        </>
    )
}
function NavigationOption(){
    const navigate=useNavigate();
    const [option,setOption]=useState(-1);
    return(
        <nav style={{flexwrap:'wrap'}} className="row justify-content-around  ">
            <div className="d-lg-none col-1"></div>
            <a target='_blank' href="https://sanjaykce.w3spaces.com/" className={`col-3 pt-4 navOption nav themefont gradientText ${option==0?'border-bottom border-4':''}`} onClick={()=>setOption(0)} style={{textShadow:(option==0)?'0px 0px 5px white':''}}>AboutUs</a>
            <a href="" className={`col-3 pt-4 navOption themefont gradientText nav ${option==1?'border-bottom border-4':''}`} onClick={()=>{setOption(1);setTimeout(navigate('/Login'),500)}} style={{textShadow:(option==1)?'0px 0px 5px white':''}} >SignIn</a>
            <a href="" className={`col-3 pt-4 navOption themefont gradientText nav ${option==2?'border-bottom border-4':''}`} onClick={()=>{setOption(2);setTimeout(navigate('/SignIn'),500)}} style={{textShadow:(option==2)?'0px 0px 5px white':''}}>SignUp</a>
        </nav>
    )
}
function SideOption(){
    const navigate=useNavigate();
    return (
        <ul className="justify-content-around justify-content-center d-flex " style={{boxShadow:'0px 1px 10px white',overflowX:'auto'}}>
            <div className="col-2 d-lg-none"></div>
            <li className="col-lg-2 col-sm-4 btn bg-info h4 themefont gradientText material-symbols-outlined" onClick={()=>navigate('/PopularSongs')}><span className=" material-symbols-outlined">trending_up</span>popular Songs</li><span className="gradientText">|</span>
            <li className="col-lg-2 col-sm-4 btn bg-info h4 themefont gradientText material-symbols-outlined" onClick={()=>navigate('/Playlist')}><span className="material-symbols-outlined">playlist_play</span>Playlist</li><span className="gradientText">|</span>
            <li className="col-lg-2 col-sm-4 btn bg-info h4 themefont gradientText material-symbols-outlined" onClick={()=>navigate('/HubSong')}><span className=" material-symbols-outlined">upload</span>Hubbed Songs</li><span className="gradientText">|</span>
            <li className="col-lg-2 col-sm-4 btn bg-info h4 themefont gradientText material-symbols-outlined" onClick={()=>navigate('/LikedSongs')}><span className="material-symbols-outlined">favorite</span>Liked Songs</li>
        </ul>
    )
}