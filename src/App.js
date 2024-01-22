import './App.css';
import Main from './Main/Main';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Main/Login';
import UploadSong from './Main/UploadSong';
import SignIn from './Main/SignIn';
import LikedSongs from './Main/LikedSongs';
import Playlist from './Main/Playlist';
function App() {
  return (
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
  );
}

export default App;
