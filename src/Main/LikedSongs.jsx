import React,{useState} from 'react';
import {Card} from './Music';
export default function LikedSongs(){
    const [liked,setLiked]=useState({});
    return (
        <div className="row justify-content-center align-items-center" style={{backgroundColor:'inherit',height:'100vh'}}>
            <div className="col-8 bg-dark rounded-3 p-3" style={{boxShadow:'0px 0px 5px grey'}}>
                <h1 className="gradientText themefont p-4 border-bottom">Liked Songs</h1>
                <div className='row border-2' style={{ width:'60vw'}}>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                    <ListSongs songs={undefined}/>
                </div>
            </div>
        </div>
    )
}
export function ListSongs(songs=''){
    const [like,setLike]=useState(true);
    return(
     <div className="row mx-5 my-2 border-bottom align-items-center" >
        <div className="col-6 " >
            <div className="row">
            <img className="col-4 img-fluid" src='default.jpg' />
            <div className='col-8'>
            <h5 className='col-8 gradientText themefont'>Song : {songs.name!=undefined?songs.name:'SongName'}</h5>
            <h5 className="col-8 gradientText themefont">Author : {songs.author!=undefined?songs.name:'SongAuthor'}</h5>
                </div>
            </div>
        </div>
        <div className="col-6">
            <button className="fa-solid fa-play-circle text-danger float-end btn display-3"></button>
            <h1 className={`fa-solid fa-heart ${like?'text-danger':'text-secondary'} float-end btn display-3`} onClick={()=>setLike(!like)}></h1>
        </div>
     </div> 
    )
}
export function Alert(){
    const [show,setShow]=useState(false);
    {setTimeout(()=>setShow(true),3000)}
    return (
        <div className="row justify-content-center p-2 animeText" style={{position:'absolute',top:0,zIndex:1}} hidden={show}>
            <div className="col-4 bg-secondary rounded" style={{borderLeft:'7px solid red',boxShadow:'10px 5px 5px black'}}>
                <span className="h3 gradientText themefont">Uploaded SuccessFully !</span>
            </div>
        </div>
    );
}
