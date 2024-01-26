import React, { useEffect } from 'react';
import './App.css';
import Main from './Main/Main';
import { Routes, Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import Login from './Main/Login';
import UploadSong from './Main/UploadSong';
import SignIn from './Main/SignIn';
import LikedSongs from './Main/LikedSongs';
import Playlist from './Main/Playlist';
function App() {
  useEffect(() => {
    // Hide the preloader when the DOM is fully loaded
    document.getElementById('preloader').style.display = 'none';
  }, []);
  return (
    <>
    <div className="preloader" id="preloader">
        <dotlottie-player
          src="https://lottie.host/1532e766-8b0b-4507-ab2b-9f3315c49ecc/yc8NljHIfT.json"
          background="transparent"
          speed="1"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/HubSong" element={<UploadSong/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path='/LikedSongs' element={<LikedSongs/>}/>
        <Route path='/Playlist' element={<Playlist/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;
