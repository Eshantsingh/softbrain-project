import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import about1 from '../images/about.png';
import about2 from '../images/about1.png';
import Aboutcard from './Aboutcard';
import about3 from '../images/react.png';
import about4 from '../images/angu.png';
import about5 from '../images/pyth.png';
import about6 from '../images/node.png';
import about7 from '../images/mongodb.png';
import about8 from '../images/flutter.png';




const About =()=>{
    return(
        <>

        
   <div className ="contact-baner">
   <img src={about1} className="banner" alt="banner"/>
   </div>


        <section className='homes-why1'>
  <div className ="container-dm mt-5">
  <div className="row">
   <div className="col-sm-6">
   
  <div className='home2'>
    
    <img src={about2} className="home-why" alt="home"/>
    </div>
      </div>
      
    <div className='home5'>
    <h1 className='haddingabout '>About Us.</h1>
    <p className='whyabout'>‘AQUACON’ is an already established name in the field of Water supply and Sewage line resourcing. 
    With a humble beginning in the year 2014 as a trading house, the organization crossed many mile stones and as on date
     it has two manufacturing units manufacturing Ductile Iron Flanged pipes. This was possible due a combination of 
     Dynamism of the new generation and experience of the old.
‘AQUACON’ ventured into the field of IT approximately 6 years back in a very specific field of Web and Portal designing 
at a small scale and in this short span, was able to complete very prestigious projects in Government, Semi Government
 Organizations and Corporations. Besides this, it has already been catering to the requirements from a vast clientele 
 from the U.S and the European Union. It has also completed various domestic projects and created a niche for itself.
‘Aquacon Softbrain Technologies’ is the brainchild of its promoters and hope to create a name and goodwill for itself
 in line with the expertise available with us in the latest technology.
</p>
    

  
  
  
    </div>

    
    </div>
  </div>
   </section>


 
   <section className='contact-explain'>
   <div className ="container-cd mt-5">
   <p className='tech'>Technologies We Use</p>
   <div className="row">
   <Aboutcard
    icon={<img src={about3} alt="logo"/>}
    tittle="React"
    matter="React is a declarative, efficient, and flexible JavaScript
     library for building user interfaces. It lets you compose complex UIs
      from small and isolated pieces of code called “components”. React has a few
       different kinds of components, but we'll start with React.Component subclasses:
        class ShoppingList extends React."
   />
      <Aboutcard
    icon={<img src={about4} alt="logo"/>}
    tittle="Angular"
    matter="Angular is a development platform, built on TypeScript. As a platform,
     Angular includes: A component-based framework for building scalable web applications.
      A collection of well-integrated libraries that cover a wide variety of features,
       including routing, forms management, client-server communication, and more."
   />
        <Aboutcard
    icon={<img src={about6} alt="logo"/>}
    tittle="Node"
    matter="is an open source development platform for executing JavaScript code server-side. 
    Node is useful for developing applications that require a persistent connection from the 
    browser to the server and is often used for real-time applications such as chat, news feeds
     and web push notifications"
   />
        <Aboutcard
    icon={<img src={about5} alt="logo"/>}
    tittle="Python"
    matter="Python is a computer programming language often used to build websites and
     software, automate tasks, and conduct data analysis. Python is a general-purpose 
     language, meaning it can be used to create a variety of different programs and isn't
      specialized for any specific problems."
   />
   <Aboutcard
    icon={<img src={about7} alt="logo"/>}
    tittle="MongoDB"
    matter="MongoDB is a non-relational document database that provides support for
     JSON-like storage. The MongoDB database has a flexible data model that enables
      you to store unstructured data, and it provides full indexing support, 
      and replication with rich and intuitive APIs."
   />
   <Aboutcard
    icon={<img src={about8} alt="logo"/>}
    tittle="Flutter"
    matter="Control every pixel to create customized & adaptive designs that
     look great on any screen. Take control of your codebase with plugins,
      testing, dev tools & build high quality apps. Fast Development. 
      Flexible UI. Single Codebase. Mobile Ads SDK. Web Stable. Open Source."
   />
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
export default About



