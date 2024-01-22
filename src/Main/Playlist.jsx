import React,{useState} from 'react';
export default function Playlist(){
    return (
        <div className="row justify-content-center align-items-center " >
            <div className="col-8 bg-dark " style={{height:'100vh',overflow:'auto'}}>
                <h1 className="gradientText themefont p-3 border-bottom">Playlist Songs</h1>
                <div className="row">
                <File playlist={''}/>
                <File playlist={''}/>
                <File playlist={''}/>
                <File playlist={''}/>
                <File playlist={''}/>
                <File playlist={''}/>
                <File playlist={''}/>
                <File playlist={''}/>
                <File playlist={''}/>
                <File playlist={''}/>
                <File playlist={''}/>
                </div>
            </div>
        </div>
    )
} 
export function File({playlist}){
    return (
        <div className="col-2 rounded p-3 m-3" style={{boxShadow:'0px 0px 5px grey',cursor:'pointer'}}>
            <img src='default.jpeg' className='img-fluid p-2'/>
            <h4 className="gradientText themefont text-center">{playlist.name==undefined?'PlayList':playlist.name}</h4>
        </div>
    )
}