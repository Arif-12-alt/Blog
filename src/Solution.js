import React,{useEffect} from "react";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resources=()=>{
  useEffect(() => {
    AOS.init();
  }, [])
return(
    <>
<div id="carouselExampleCaptions" class="carousel slide carousel-fade">  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://image.benq.com/is/image/benqco/Gamingroom_tk700sti-A?$ResponsivePreset$" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h1>Industries We Serves</h1>
      </div>
    </div>
    </div>
    </div><br/><br/><br/>
    <div className="text">
<h3>We provide game data and content solutions curated specifically to cater
<br/>to the needs of gaming industry.</h3><br/>
<p>Leverage industry-specific solutions designed to help your business succeed. Our comprehensive<br/> game data, flexible delivery models, and expertise allow us to help you create opportunity and<br/> value throughout the gaming ecosystem.</p><br/><br/>
<h2>Who We Work With</h2>
    </div><br/><br/>
    <div className="container">
        <div className="book">
            <div className="bok" data-aos="fade-down"data-aos-duration="2000">
        <img src="https://cdn.mos.cms.futurecdn.net/AaWnEAi7kpByPaFZFmdXPV-1200-80.jpg"/>
        <h1>Online Stores And Digital Distributions Platforms</h1>
        </div>
        <div className="bok"data-aos="fade-down"data-aos-duration="2500">
        <img src="https://png.pngtree.com/background/20240114/original/pngtree-the-ultimate-gamer-setup-laptop-game-console-controller-dice-headphones-and-picture-image_7275378.jpg" alt="https://www.gameopedia.com/industries/game-data-automatic-content-recognition-platforms/"/>
        <h1>Automatic Content Recognition Platforms</h1>
        </div>
    </div>
    </div><br/><br/><br/><br/><br/><br/>
    <div className="container">
        <div className="book">
            <div className="bok" data-aos="fade-up"data-aos-duration="2000">
        <img src="https://png.pngtree.com/background/20231016/original/pngtree-3d-render-conceptual-gaming-station-picture-image_5581036.jpg"/>
        <h1>Online Stores And Digital Advertiser And Ad</h1>
        </div>
        <div className="bok"data-aos="fade-up"data-aos-duration="2500">
        <img src="https://assets.euromoneydigital.com/dims4/default/01fc673/2147483647/strip/true/crop/995x559+0+0/resize/840x472!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2Fa5%2F90%2F0f1167c248d59035af5b47af3fc6%2Fgaming-virtual-blue-adobestock.jpg"/>
        <h1>Automatic Content Game Developer</h1>
        </div>
    </div>
    </div>
 <br/><br/><br/><br/><br/><br/>
    <div className="container">
    <div className="photo"data-aos="flip-down"data-aos-duration="2000">
        <img src="https://www.iab.com/wp-content/uploads/2024/03/creative-guidelines-and-best-practices-in-advertising-in-gaming-2.png"/>
        <h1>Customized Game Data<br/>Soutions</h1><br/><br/><br/><br/><br/>
        <h5>Want to know why industry-leaders choose us as their video game data partners? Explore our diverse service offerings.Looking for something else? Talk to our game data experts.</h5>
    </div>
    </div>
    <br/><br/>
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
export default Resources;