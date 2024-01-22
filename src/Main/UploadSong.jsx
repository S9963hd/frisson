import React,{useState} from 'react';
import {Alert} from './LikedSongs'
export default function UploadSong(){
    return (
        <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="col-6 p-5 bg-dark rounded" style={{boxShadow:'0px 0px 5px grey'}}>
            <h1 className="gradientText themefont text-center">HUB YOUR OWN PACE OF SONG</h1>
                    <form action="/hubSong" method='post' onSubmit={(e)=>{e.preventDefault();}}>
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
                        <input type="file" className="form-control" name="songFile" id='songFile'/>
                        <label className=' btn bg-danger fa-solid fa-trash input-group-text ' onClick={()=>document.getElementById('songFile').value=''} ></label>
                        </div>
                        <button className="btn gradientText m-3 border-secondary text-center" >Upload</button>
                    </form>
            </div>
            <Alert />
        </div>
    )
}
