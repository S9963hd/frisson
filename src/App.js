import React, { useEffect } from 'react';
import './App.css';
import Main from './Main/Main';
import { Routes, Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import Login from './Main/Login';
import UploadSong from './Main/UploadSong';
import SignIn from './Main/SignIn';
import LikedSongs from './Main/LikedSongs';
import Playlist from './Main/Playlist';
import PopularSongs from './Main/PopularSongs';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/HubSong" element={<UploadSong/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path='/LikedSongs' element={<LikedSongs/>}/>
        <Route path='/Playlist' element={<Playlist/>}/>
        <Route  path="/PopularSongs" element={<PopularSongs/>}/>
      </Routes>
    </BrowserRouter>
    <div className="row align-items-center" style={{position:'fixed',bottom:0,width:'100vw',backgroundColor:'#151515'}}>
            <img src="Default.svg" className='col-1'/>
            <div className="col-11">
            <AudioPlayer
            className="bg-dark col-11"
            showSkipControls
            mse
            showFilledVolume
            src="https://firebasestorage.googleapis.com/v0/b/frissson.appspot.com/o/copines.mp3?alt=media&token=7d4d3735-7fc2-41e2-a56d-f2adc84d0092"
            volume={0.5}
          // Try other props!
        /></div>
            </div>
    </>
  );

}

export default App;
