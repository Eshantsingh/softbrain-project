import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import contact from '../images/Contact2.png';
//import us from '../images/contact3.png';//



//Hook function //

const Contact =()=>{

const [user,setUser] = useState({
  name:"", email:"", phone:"", text:""
});

let name, value;
const handleInputs =(e) => {
  console.log (e);
     name = e.target.name;
     value= e.target.value;

    setUser({...user, [name]:value});
}

const PostData = async (e) =>{
    e.preventDefault();

    const {name , email, phone, text} = user;

    const res = await fetch("/catch", {   // fetch API// 

      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name , email, phone, text
      })
    });

    const data = await res.json();

    if (data.status === 422 || !data ){
      window.alert("Something Wrong");
      console.log("Something Wrong");
    }else {
      window.alert("Message Send Successfull");
      console.log("Message Send Successfull");
    }
}




    return(
      <>
   
   
   <div className ="contact-baner">
   <img src={contact} className="banner" alt="banner"/>
   </div>
   
  

  <section className='contact'>
  <div className ="container-ad mt-5">
  <div className="row">
  <div className="col-sm">
  

  <div className="col-sm-10">
    <div className="card1 bg-white">
      <div className="card-body">
        <h5 className="card1-title">Address.</h5>
        <p className="card2-text">S.C.O 83 1st Floor, Sector 12 Panchkula-134112, Haryana .</p>
      </div>
    </div>
  </div>
  <div className="col-sm-10">
    <div className="card1 bg-white">
      <div className="card-body">
        <h5 className="card1-title">Email.</h5>
        <p className="card2-text">softbrain@aquacon.biz</p>
      </div>
    </div>
  </div>
  <div className="col-sm-10">
    <div className="card1 bg-white">
      <div className="card-body">
        <h5 className="card1-title">Contact No.</h5>
        <p className="card2-text">+91 9779100021</p> 
      </div>
    </div>
  </div>
   </div>
  
  

    
    
    <div className="col-sm">
    <div className='sinup-form'>
      
      <h2 className='form-tittle'><span className="color">Get In Touch With Us!</span></h2>
     <form method='POST' className='register-form' id='register-form'>
     
     <div className="row mb-3">
       <label htmlFor="Name" className="col-sm-2 col-form-label"><i className="zmdi zmdi-account"></i></label>
       <div className="col-sm-10">
         <input type="name" name="name" className="box-control"

           value={user.name}
         onChange={handleInputs}
        
          placeholder="Full Name"  id="inputName3"/>
       
       </div>
     </div>
     <div className="row mb-3">
       <label htmlFor="Email" className="col-sm-2  col-form-label"> <i className="zmdi zmdi-email"></i></label>
       <div className="col-sm-10">
         <input type="email" name="email" className="box-control"
          value={user.email}
         onChange={handleInputs}

          placeholder="Email" id="inputEmail3"/>
       </div>
       </div>
       <div className="row mb-3">
       <label htmlFor="Number" className="col-sm-2 col-form-label"> <i className="zmdi zmdi-phone"></i> </label>
       <div className="col-sm-10">
         <input type="Number" name="phone" className="box-control"
          value={user.phone}
         onChange={handleInputs}

          placeholder="Contact No" id="inputNumber3"/>
       </div>
     </div>
     
       <div className="row mb-3">
   <label htmlFor="Text" className="col-sm-2 col-form-labe"><i className="zmdi zmdi-text-format"></i></label>
   <div className="col-sm-10">
   <textarea  name="text" className="box-control" id="validationTextarea" 
    value={user.text}
    onChange={handleInputs}

   placeholder=" Message" required></textarea>
  
       </div>
       </div>
       <div className="col-13">
          <input type="submit" name="contact" id="sihnup" className="form-put" value="Let's Begin The Talks"
            onClick={PostData}
          />
             </div>
   </form>
   </div>
    </div>
  </div>
</div>
   </section>




   
   <section className='contact-explain'>
   <div className ="container-cd mt-5">
   <div className="row">
  <div className="col-sm-4">
    <div className="card bg-dark">
      <div className="card-body">
        <h5 className="card-title">What’s Your Project Plan?</h5>
        <p className="card-text">Let’s have a quick chat about your plans, ideas, 
        and project requirements making it a job of seconds.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card bg-dark">
      <div className="card-body">
        <h5 className="card-title">Got Documents? Share With Us</h5>
        <p className="card-text">Share your NDA, BRD & all project-related details through email.
         We will reach out to you at the earliest. Here is our email:</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card bg-dark">
      <div className="card-body">
        <h5 className="card-title">We Are Hiring</h5>
        <p className="card-text">Become a part of our vision to delivering effective, efficient & elegant solutions.</p>
      </div>
    </div>
  </div>
</div>
</div>
   </section>
   <section className='contact-explain'>
   <div className ="container-cd mt-5">
   </div>
   </section>
   </>
      
    )
}


export default Contact