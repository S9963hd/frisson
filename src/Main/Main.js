import React,{useState,useEffect} from 'react';
import Track from './Track';
import { useNavigate } from 'react-router-dom';
import MusicContent from './Music';
import axios  from 'axios';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export default function Main(){
    const [song, setSong] = useState(null);
    useEffect(()=>{
    axios('http://localhost:5500/song').then(data=>console.log("Data Fetching")).catch(err=>console.log('Error At Fetching'));
})
    return (
        <div  style={{height:'170vh'}} >
            <div className="row p-4 border-bottom" style={{position:'sticky',top:0,background:'rgb(25,25,25,0.9)',zIndex:1}}>
                <i className="col-sm-4 col-2 display-3 themefont gradientText flex-wrap">FRISSON</i>           
                <div className="col-6 mt-4"><Navigation /></div>
                <div className="col-4 ">
                <NavigationOption/>
                </div>
            </div >
            <div className="row " style={{position:'sticky',top:'127px',background:'rgb(25,25,25,0.9)',zIndex:1}}>
                    <SideOption/>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                <img src="Character1.svg"/>
                </div>
                <div className="col-6 align-self-center">
                    <h1 className="themefont gradientText display-1 " style={{textShadow:'0px 50px 20px black'}}>Frisson Musical player Web Application 🎶</h1>
                </div>
            </div>
            {/* <div className="row">
                <Track/>
            </div> */}
            <div className="row" >
                <MusicContent/>
            </div>
            <div className="row justify-content-around" >
                <a href="mailto:sanjaymajestic143@gmail.com" className="gradientText col-4 text-center" style={{textDecoration:'none'}}><img src="Mail.svg" style={{height:'7vh'}}/></a>
                <a href="https://www.instagram.com/sanj.ay1237659/" className="gradientText col-4 text-center" style={{textDecoration:'none'}}><img src="Instagram.svg" style={{height:'7vh'}}/></a>
            </div>
            <div className="row align-items-center" style={{position:'fixed',bottom:0,width:'100vw',backgroundColor:'#151515'}}>
            <img src="Default.svg" className='col-1'/>
            <div className="col-11">
            <AudioPlayer
            className="bg-dark col-11"
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
          volume={0.5}
          // Try other props!
        />
        </div>
            </div>
        </div>
    )
}
function Navigation(){
    return (
        <>
            <div className="col-sm-none input-group" style={{zIndex:1}}>
                <input type="text" className="form-control" placeholder="🎵 Explore Songs"/>
                <btn className='btn btn-secondary material-symbols-outlined'>search</btn>
            </div>
            <div className="col-lg-none fa-solid fa-search"></div>
        </>
    )
}
function NavigationOption(){
    const navigate=useNavigate();
    const [option,setOption]=useState(-1);
    return(
        <nav style={{flexwrap:'wrap'}} className="row justify-content-around ">
            <a target='_blank' href="https://sanjaykce.w3spaces.com/" className={`col-3 pt-4 navOption nav themefont gradientText ${option==0?'border-bottom border-4':''}`} onClick={()=>setOption(0)} style={{textShadow:(option==0)?'0px 0px 5px white':''}}>AboutUs</a>
            <a href="" className={`col-3 pt-4 navOption themefont gradientText nav ${option==1?'border-bottom border-4':''}`} onClick={()=>{setOption(1);setTimeout(navigate('/Login'),500)}} style={{textShadow:(option==1)?'0px 0px 5px white':''}} >SignIn</a>
            <a href="" className={`col-3 pt-4 navOption themefont gradientText nav ${option==2?'border-bottom border-4':''}`} onClick={()=>{setOption(2);setTimeout(navigate('/SignIn'),500)}} style={{textShadow:(option==2)?'0px 0px 5px white':''}}>SignUp</a>
        </nav>
    )
}
function SideOption(){
    const navigate=useNavigate();
    return (
        <ul className="container-fluid justify-content-around justify-content-center d-flex " style={{boxShadow:'0px 1px 10px white'}}>
            <li className="col-2 btn bg-info h4 themefont gradientText material-symbols-outlined"><span className=" material-symbols-outlined">trending_up</span>popular Songs</li><span className="gradientText">|</span>
            <li className="col-2 btn bg-info h4 themefont gradientText material-symbols-outlined" onClick={()=>navigate('/Playlist')}><span className="material-symbols-outlined">playlist_play</span>Playlist</li><span className="gradientText">|</span>
            <li className="col-2 btn bg-info h4 themefont gradientText material-symbols-outlined" onClick={()=>navigate('/HubSong')}><span className=" material-symbols-outlined">upload</span>Hubbed Songs</li><span className="gradientText">|</span>
            <li className="col-2 btn bg-info h4 themefont gradientText material-symbols-outlined"><span className=" material-symbols-outlined">new_releases</span>New Released</li><span className="gradientText">|</span>
            <li className="col-2 btn bg-info h4 themefont gradientText material-symbols-outlined" onClick={()=>navigate('/LikedSongs')}><span className="material-symbols-outlined">favorite</span>Liked Songs</li>
        </ul>
    )
}