import React,{useEffect} from "react";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About=()=>{
  useEffect(() => {
    AOS.init();
  }, [])
return(
    <>
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade">  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*9hwRLd3WR93KqVTEMOknrQ.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h1>About Us</h1>
      </div>
    </div>
    </div>
</div><br/><br/><br/><br/><br/><br/>
<div className="about container">
<div className="bullet">
    <img data-aos="fade-right"data-aos-duration="2000" src="https://www.gameopedia.com/wp-content/uploads/2020/09/about-gameopedia-2.svg"/>
    <div className="bull">
    <h3>Who We Are</h3>
    <p>Since 2008, we have been empowering the gaming eco-system with real-time access to the most comprehensive living library of video game metadata. From facts, analyses and insights to high definition videos and images, our database is leveraged by tech giants across the globe to fuel millions of consumer decisions every day.</p>
    </div>
  </div>
  </div>
  <br/><br/><br />
  <div className="about container">
<div className="bullet">
    <div className="bull">
    <h3>Our Vision​</h3>
    <h4>To revolutionize how video games are discovered and perceived</h4>
    <ul>
      <li>
      Enhancing the lives of gamers worldwide</li>
      <li>
      Fostering a vibrant global gaming community</li>
    </ul>
    </div>
    <img data-aos="fade-left"data-aos-duration="2000" src="https://www.gameopedia.com/wp-content/uploads/2024/06/Vision-2.3.png"/>
  </div>
  </div>
  <br/><br /><br />
  <div className="about container">
<div className="bullet">
    <img data-aos="fade-right"data-aos-duration="2000" src="https://www.gameopedia.com/wp-content/uploads/2024/06/Vision.png"/>
    <div className="bull">
    <h3>Our Mission</h3>
    <h4>By harnessing the power of data, we unlock new gaming experiences through human-centric products that elevate lives within the global gaming community.</h4>
    <ul>
      <li>Innovating with data-driven insights</li>
      <li>Creating human-centric gaming experiences</li>
    </ul>
    </div>
  </div>
  </div>
<br/><br/><br/>
<div className="container">
    <div className="photo"data-aos="flip-down"data-aos-duration="2000" >
        <img src="https://static.wixstatic.com/media/2e4db8_42b594811dd84d44a7125803b8c5ed73~mv2.jpg/v1/fill/w_640,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e4db8_42b594811dd84d44a7125803b8c5ed73~mv2.jpg"/>
        <h1>Talk To Our Experts</h1>
        <h5 style={{color:"white"}}>We help you see the gaming world differently, discover
        opportunities & open new avenues.</h5>
    </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <div className="footer">
  <div className="bottom">
 <h1>Start Your Journey To Better Business</h1>
 <button>Get In Touch</button>
 </div>
</div>  
<div className="foot">
<div className="about container">
  <div className="footers">
<div>
<h5>Home</h5>
<h5>About Us</h5>
<h5>Services</h5>
</div>
<div>
  <h5>Why Us?</h5>
  <h5>Solutions</h5>
  <h5>Industries</h5>
</div>
<div>
  <h5>Career</h5>
  <h5>Contact Us</h5>
  <h5>Privacy Policy</h5>
  <h5>Term & Conditions</h5>
  <h5>Site Map</h5>
  <h5>FAQ</h5>
</div>
<div className="for">
<h2>Contact Us</h2>
<input type="Email" placeholder="Your Email"></input><br/><br />
<input type="text" placeholder="Company Name"></input><br /><br />
<button>GET IN TOUCH</button><br /><br />
<i class="fa-solid fa-at"></i> arif78310@gmail.com<br />
<i class="fa-solid fa-phone"></i> +7831034736 
<div className="icon">
<i class="fa-brands fa-youtube"></i>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-square-instagram"></i>
</div>
</div>
</div>
</div>
</div>
<footer className="bot">
<a href="https://www.gameopedia.com/">
<img class="default_logo" src="https://www.gameopedia.com/wp-content/uploads/2020/06/Logo-gameopedia.png" alt="..."/>
</a>
<h6>Copyright © 2024 Gameopedia. All Rights Reserved.</h6>
</footer>
  </>
);
}
export default About;