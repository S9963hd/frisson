import React,{useState} from 'react';
export default function MusicContent(){
    const [songs,setSongs]=useState([]);
    return(<div className="row" >
            <h1 className="ms-5 themefont gradientText" >Featured On </h1>
            <hr className="text-white gradientText"></hr>
            <ul className="col-10 m-2 mx-auto" style={{display:'flex',overflowX:'auto',width:'80vw'}}>
                <Card songs={songs}/>
                <Card songs={songs}/>
                <Card songs={songs}/>
                <Card songs={songs}/>
                <Card songs={songs}/>
                <Card songs={songs}/>
                <Card songs={songs}/>
                <Card songs={songs}/>
                <Card songs={songs}/>
                <Card songs={songs}/>
            </ul>
        </div>
    )
}
export function Card({songs=''}){
    const [favorite,setFavorite]=useState(false);
    return(
        <li className=" btn col-2 m-3 card btn" style={{display:'flex' ,backgroundColor:'#181818',boxShadow:'0px 0px 5px grey'}} >
                <img className="img-card img-bottom bg-dark rounded p-1" src='Default.svg'/>
                <div className='card-title themefont gradientText'>{songs.author?undefined:'Song Author'}</div>
                <div className="card-text themefont gradientText">{songs.name?undefined:'Song Name'}</div>
                <div className="row">
                <span className="btn h1 fa-solid fa-heart  col-6" onClick={()=>setFavorite(!favorite)} style={(favorite)?{textShadow:'0px 0px 5px red',color:'red'}:{}}></span>
                <span className="btn fa-solid fa-play-circle text-danger col-6 " onClick={()=>alert("playing")}></span></div>
        </li>
    )
}
