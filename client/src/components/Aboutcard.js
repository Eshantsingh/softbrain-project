import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import home from '../images/home.png';


function Aboutcard (props){
    return(
        <>

       <div className="col-sm-4">
    <div className="card11 bg-white">
      <div className="card-body">
        <h5 className="card50-title">{props.icon} {props.tittle}</h5>
        <p className="card50-text">{props.matter}</p>
      </div>
    </div>
  </div>

 

        </>
    )
}


export default Aboutcard