import React,{useState} from 'react';
import Main from './Main';
import AudioPlayer from 'react-h5-audio-player';
import { Outlet,useNavigate } from 'react-router-dom';

export default function Frisson(){
    const [current,setCurrent]=useState(0);
    const navigate=useNavigate();
    const song=["https://firebasestorage.googleapis.com/v0/b/frissson.appspot.com/o/Anbenum-MassTamilan.dev.mp3?alt=media&token=4284d9d0-7d06-4329-88cf-3be00629ab19",
    "https://firebasestorage.googleapis.com/v0/b/frissson.appspot.com/o/Badass-MassTamilan.dev.mp3?alt=media&token=abd5a483-7d05-45f2-aabe-76098dfbaea9",
    "https://firebasestorage.googleapis.com/v0/b/frissson.appspot.com/o/Bloody-Sweet-MassTamilan.dev.mp3?alt=media&token=3f64dd20-2d51-48b1-b1d1-cdcaf679330f",
    "https://firebasestorage.googleapis.com/v0/b/frissson.appspot.com/o/Glimpse-of-Antony-Das-MassTamilan.dev.mp3?alt=media&token=539710de-82f2-4d3d-96b8-c9d98f6c5100",
    "https://firebasestorage.googleapis.com/v0/b/frissson.appspot.com/o/Glimpse-of-Harold-Das-MassTamilan.dev.mp3?alt=media&token=711a2748-c3ce-44dd-bade-103a3c67f473",
    "https://firebasestorage.googleapis.com/v0/b/frissson.appspot.com/o/Lokiverse-2.0-MassTamilan.dev.mp3?alt=media&token=f008315e-361a-44a1-a1d8-73c6a707f1f2",
    "https://firebasestorage.googleapis.com/v0/b/frissson.appspot.com/o/Naa-Ready-MassTamilan.dev.mp3?alt=media&token=aeb1e726-06fc-4caf-b842-4708c217e9cc",
    ""];
    return (
        <>
        <Outlet/>
        <div className="row align-items-center" style={{position:'fixed',bottom:0,width:'100vw',backgroundColor:'#151515',margin:'0px'}}>
            <img src="Default.svg" className='col-1'/>
            <div className="col-11">
            <AudioPlayer
            className="bg-dark col-11"
            showSkipControls
            autoPlay
            showFilledVolume
            src={song[current]}
            volume={0.5}
          // Try other props!
          onEnded={()=>{console.log("Song Ended");setCurrent((current+1))}}
          onClickNext={()=>{console.log("Song Ended");setCurrent((current+1))}}
          onClickPrevious={()=>{console.log("Song Ended");setCurrent((Math.abs(current-1)))}}
       
        />
                {/* <div class="spinner-border text-secondary " role="status" style={{width:'10px',height:'10px'}}>
              <span class="visually-hidden">Loading...</span>
            </div> */}
        </div>
        <div class="btn col-12 gradientText text-center material-symbols-outlined" onClick={()=>navigate('/DetailsOfAuthor')}>keyboard_double_arrow_down</div>
            </div>
        </>
    )
}