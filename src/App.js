import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './Main/Login';
import SignIn from './Main/SignIn';
import 'react-h5-audio-player/lib/styles.css';
import Frisson from './Main/Frisson';
import PopularSongs from './Main/PopularSongs';
import UploadSong from './Main/UploadSong';
import Playlist from './Main/Playlist';
import LikedSongs from './Main/LikedSongs'
import Main from './Main/Main';
import DetailsOfAuthor from './Main/DetailsOfAuthor';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frisson/>}>
            <Route path="/" element={<Main/>}/>
            <Route path='/PopularSongs' element={<PopularSongs/>}/>
            <Route path='/HubSong' element={<UploadSong/>}/>
            <Route path='/Playlist' element={<Playlist/>}/>
            <Route path='/LikedSongs' element={<LikedSongs/>}/>
            <Route path='/DetailsOfAuthor' element={<DetailsOfAuthor/>}/>
        </Route>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;
