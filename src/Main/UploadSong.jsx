import React,{useState} from 'react';
import {Alert} from './LikedSongs'
import axios from 'axios';
import {storage} from '../Backend/GAuth';
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import songFetch from '../Backend/SongFetch';
export default function UploadSong(){
    const [file,setFile]=useState('');
    return (
        <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="col-6 p-5 bg-dark rounded" style={{boxShadow:'0px 0px 5px grey'}}>
            <h1 className="gradientText themefont text-center">HUB YOUR OWN PACE OF SONG</h1>
                    <form action="/hubSong" method='post' onSubmit={(e)=>{e.preventDefault();console.log(document.getElementById('songFile'));storageFun(file)}}>
                        <div className="form-floating my-2">
                            <input type="text" name='songName' className="form-control" placeholder=""/>
                            <label>Song Name</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="text" name="authorName" className="form-control" placeholder=""/>
                            <label>Author Name</label>
                        </div>
                        <div className="input-group">
                        <label className='fa-solid fa-file input-group-text'></label>
                        <input type="file" className="form-control" name="songFile" id='songFile' onChange={(e)=>setFile(e.target.files[0])}/>
                        <label className=' btn bg-danger fa-solid fa-trash input-group-text ' ></label>
                        </div>
                        <button className="btn gradientText m-3 border-secondary text-center" >Upload</button>
                    </form>
            </div>
        </div>
    )
function storageFun(song){
    const storageRef = ref(storage, song.name);
    
    const uploadTask = uploadBytesResumable(storageRef, song);
    
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
    }
}
