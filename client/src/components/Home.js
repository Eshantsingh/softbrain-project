import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import home from '../images/home.png';
//import { Carousel } from 'bootstrap';
import Card from './Card';
import why from '../images/card.png';


const Home =()=>{
    return(
        <>
   
  

  <section className='home'>
  <div className ="container-hm mt-5">
  <div className="row">
  <div className="col-sm">

  <div className='home2'>
      <img src={home} className="home-banner" alt="home"/>
    </div>
      </div>
      
    <div className='home3'>
    
    <h1 className='hadding'>Aquacon Softbrain Technologies.</h1>
    <p className='better'>'IF IT IS RELATED TO<span className='it'> IT</span>, WE CAN DO IT BETTER’ </p>
    
    </div>
    </div>
  </div>
   </section>

   <section className='contact-explain'>
   <h1 className='card-hadding'>Services We Provide</h1>
   <p className='card-phara'>What we offer to our clients</p>
   <div className ="container-cd mt-5">
   <div className="row">
   <Card
   icon={<i className="zmdi zmdi-gesture"></i>}
    tittle="Web App Development"
    matter="We are adept at designing responsive,
         fast-loading, and user-friendly websites that offer a consistent look and
          use across different web browsers"
   />

   <Card
   icon={<i class="zmdi zmdi-chart-donut"></i>}
    tittle="Mobile App Development"
    matter="We create competitive mobile apps for various industrial domains.
    Our mobile app developers follow market trends to ideate,
     innovate, and create mobile apps.This adds engagement and modernity to apps.
      Businesses achieve desired user retention rates with these apps."
   />
   <Card
   icon={<i class="zmdi zmdi-delicious"></i>}
    tittle="AI & ML"
    matter="With our AI & Machine Learning Consulting,
     you can deliver personalized customer experiences, 
    automate your internal processes and implement solutions
     that will change the way customers interact with your
     product."
   />
    <Card
   icon={<i class="zmdi zmdi-flickr"></i>}
    tittle="Digital Marketing"
    matter="We are a leading digital marketing agency offering 360° 
    online marketing solutions to deliver measurable results."
   />
     <Card
   icon={<i class="zmdi zmdi-laptop"></i>}
    tittle="UI/UX"
    matter="Designing interactive UI/UX pages that 
    communicate effectively with our customers."
   />
       <Card
   icon={<i class="zmdi zmdi-swap-alt"></i>}
    tittle="E-commerce systems"
    matter="We have an accomplished team of highly skilled and 
    experienced eCommerce mobile app developers."
   />
</div>
   </div>
   </section>




   <section className='homes-why1'>
  <div className ="container-dm mt-5">
  <div className="row">
   <div className="col-sm-6">
   
  <div className='home2'>
    
    <img src={why} className="home-why" alt="home"/>
    </div>
      </div>
      
    <div className='home4'>
  
  
   

    <h1 className='haddingme'>Why Aquacon Softbrain Technologies?</h1>
    <p className='whyus'>We deliver client-centric solutions that bring maximum productivity with minimum
     resources while upholding service delivery principles. As our motto says, ‘Ideate, Innovate, Create’,
      we aspire to bring in result-oriented strategies to carve product design and creation procedures.
</p>
    <p className='whyus'>  Our professionals contribute the best of their skills to work on the ultimate mission of establishing 
      our identity as credible technology leaders</p>
         
 

  
  
  
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

export default Home