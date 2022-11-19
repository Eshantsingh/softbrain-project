import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import home from '../images/home.png';


function Card (props){
    return(
        <>

       <div className="col-sm-4">
    <div className="card11 bg-dark">
      <div className="card-body">
        <h5 className="card12-title">{props.icon} {props.tittle}</h5>
        <p className="card-text">{props.matter}</p>
      </div>
    </div>
  </div>

 

        </>
    )
}


export default Card