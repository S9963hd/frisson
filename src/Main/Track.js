import React from 'react';
export default function Track(){
    return (
        <div className="row">
            <img className="col-1 img-fluid m-2 bg-danger " src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7iiWPnLwYR3-Xn3n0mI2d3PLPq3da3truA&usqp=CAU'} style={{height:'20vh'}}/>
            <input type="range" className="col-8 track align-self-center " style={{backgroundColor:'linear-gradient(0,0,0,0.9)'}}/>
        </div>
    )
}