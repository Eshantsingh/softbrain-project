import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import login3 from '../images/login3.png';


const Register =()=>{
    return(
      <section className='signup'>
        <div className="container-sm mt-5">
       <div className='log2'>
       <h2><span className="color">'IF IT IS RELATED TO IT, WE CAN DO IT BETTER'</span></h2>
      <img src={login3} className="log" alt="logo"/>
    </div>
         <div className='sinup-form'>
        
         <h2 className='form-tittle'><span className="color">Sign Up</span></h2>
        <form className='register-form' id='register-form'>
        
        <div className="row mb-3">
          <label for="inputName3" className="col-sm-2 col-form-label"><i className="zmdi zmdi-account"></i></label>
          <div className="col-sm-10">
            <input type="name" className="box-control" placeholder="Name"  id="inputName3"/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label"> <i className="zmdi zmdi-email"></i></label>
          <div className="col-sm-10">
            <input type="email" className="box-control" placeholder="Email" id="inputEmail3"/>
          </div>
          </div>
          <div className="row mb-3">
          <label for="inputNumber3" className="col-sm-2 col-form-label"> <i className="zmdi zmdi-phone"></i> </label>
          <div className="col-sm-10">
            <input type="Number" className="box-control" placeholder="Contact No" id="inputNumber3"/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label"><i className="zmdi zmdi-lock"></i></label>
          <div className="col-sm-10">
            <input type="password" className="box-control" placeholder="Password" id="inputPassword3"/>
          </div>
          </div>
          <div className="row mb-3">
          <label for="inputPassword" className="col-sm-2 col-form-label"><i className="zmdi zmdi-lock-outline"></i></label>
          <div className="col-sm-10">
            <input type="password" className="box-control" placeholder="Confirm Password" id="inputPassword3"/>
          </div>
          <div className="col-12">
             <input type="submit" name="signup" id="sihnup" className="form-submit" value="Register"/>
                </div>
        </div>
        
      </form>
      </div>
      
    
      </div>
      </section>
    )
}

export default Register