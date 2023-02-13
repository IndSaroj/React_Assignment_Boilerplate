
import React from 'react'
import  { useState, useEffect } from 'react'

export default function Card(props) {

  
  const saveNews = () => {
    const newCard={
      description:`${props.description}`,
      url:`${props.url}`
    }
    
      fetch('http://localhost:3001/readlater', { method : "POST", headers: {"content-type" : "application/json"},
      body:JSON.stringify(newCard)})
        .then(response=>alert("News Saved to read later"))
        .catch(error=>alert("error in saving"))
      
    };

  return (

    <div>

      <div className="container">
        <div className="row">
          <div className="col md-3">
            <div className="card mt-2" style={{ width: "18rem" }}>
              <img src={props.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"> {props.author} </p>
                <button type="submit" className="btn btn-primary" 
                onClick={saveNews}>Read Later</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    )
}