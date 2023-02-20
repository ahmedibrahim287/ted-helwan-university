import React from 'react'; 
import Gallery from 'react-grid-gallery';


function Legacy() {
  
  return (
    <div className="container"><br/><br/><br/><br/><br/>
    <img  alt="cover" className="img-responsive" src="/img/slider/leave-cover.png"/>
    <br/>
    <div className="brief-conatiner">
    
            <h2><span>- </span>Leave Your <span className="ted-color">Legacy</span><span>! -</span></h2>
            <p>
            
            Here it comes the moment we were all waiting for 
Inspirational speeches , Motivational talks , Success stories all and more in one day TEDxHelwanUniversity" Leave Your Legacy!

belief in the power of idea, we determined to create a community of ideas aiming to enrich our community minds . Also inspiring and motivating them to cope with and contribute to the age of renaissance that our country live recently.
Mission
TEDxHelwanU aims to unleash hidden potentials and capabilities by fetching and spotlighting new scopes through engaging thinkers and entrepreneurs.
    <br/>
 
    
            </p>
        </div>
        <div className="location-container">
        {/* Location Div*/}
        <div className="location-box">
          
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span> Leadership Development Hall </span>
  
        </div>
        {/* End Of Location Div*/}
        {/*Calender Div*/}
          <div className="location-box">
            <i className="fa fa-calendar" aria-hidden="true"> </i>
            <span> Satuerday, April 16, 2013</span>
          </div>
        {/*End Of Calender Div*/}
        {/*Clock Div*/}
        <div className="location-box">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <span>09:30 A.M</span>
        </div>
        {/*End Of Clock Div*/}
        
      </div>
                 
      <h2><span className="ted-color">Our Speakers</span></h2>
      <hr/>
      <Gallery images={IMAGES}/>

    

      <div className="brief-conatiner "></div><div className="brief-conatiner "></div>
    </div>
    );
    }
    const IMAGES =
    [{
      src:"/img/legacy/1.jpg", thumbnail:"/img/legacy/1.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            
    },
    {
      src:"/img/legacy/2.jpg", thumbnail:"/img/legacy/2.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212,
           
    },
    
    {
      src:"/img/legacy/4.jpg", thumbnail:"/img/legacy/4.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    } , 
    {
      src:"/img/legacy/5.jpg", thumbnail:"/img/legacy/5.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    } , 
    {
      src:"/img/legacy/6.jpg", thumbnail:"/img/legacy/6.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },  
    {
      src:"/img/legacy/7.jpg", thumbnail:"/img/legacy/7.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },  
    {
      src:"/img/legacy/8.jpg", thumbnail:"/img/legacy/8.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },    
    {
      src:"/img/legacy/10.jpg", thumbnail:"/img/legacy/10.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },  
    {
      src:"/img/legacy/11.jpg", thumbnail:"/img/legacy/11.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },  
    {
      src:"/img/legacy/12.jpg", thumbnail:"/img/legacy/12.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },  
    {
      src:"/img/legacy/13.jpg", thumbnail:"/img/legacy/13.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },  
    {
      src:"/img/legacy/14.jpg", thumbnail:"/img/legacy/14.jpg", 
            thumbnailWidth: 320,
            thumbnailHeight: 212
    }]

export default Legacy;
