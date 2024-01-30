import React from 'react';
export default function DetailsOfAuthor(){
    return (
        <>
        <div className="row justify-content-center">
            <div className="col-3">
                <img src="Default.svg"/>
            </div>           
            <div className="col-3 align-self-center">
                <h1 className="gradientText themefont mt-1">Song Name</h1>
                <h1 className="gradientText themefont mt-1">Song Author</h1>
                <p className="gradientText themefont mt-1">Listening On OwnerName</p>
            </div>
        </div>
        </>
    )
}