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
      <img src="https://www.playfusion.org/administrator/postimages/6662fc9f3243b1.14028056.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h1>Resources...</h1>
      </div>
    </div>
    </div>
    </div>
    <br/>    <br/>    <br/>    <br/>
    <div className="about container">
    <div className="cads">
  <div class="card"data-aos="fade-down-right"data-aos-duration="2000" >
  <img src="https://www.gameopedia.com/wp-content/uploads/2023/12/222338e2-615e-4edd-bbf9-c4645619b475-990x840-990x840.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Risk vs Reward: The Souls-Like’s Twist on Multiplayer</h5>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Read More</a>
  </div>
</div>  
<div class="card"data-aos="fade-down"data-aos-duration="2000">
  <img src="https://www.gameopedia.com/wp-content/uploads/2023/12/DALL·E-2023-12-21-13.17.49-Enhance-the-provided-image-to-depict-an-even-more-intense-battle-scene-from-Dark-Souls-set-inside-a-grand-colosseum.-Add-dramatic-effects-such-as-thu-990x840-990x840.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Perfecting Souls-Like Games: The Rise of a Winning Formula</h5>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Read More</a>
  </div>
</div>
<div class="card"data-aos="fade-down-left"data-aos-duration="2000">
  <img src="https://www.gameopedia.com/wp-content/uploads/2023/12/287eba7b-49f3-4edf-95cf-9c53f93eafef-990x840-990x840.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Difficulty, Deception and Death: The Design of a Soul</h5> 
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Read More</a>
  </div>
</div>
</div>
</div>
<br/><br/>
<div className="about container">
    <div className="cads">
  <div class="card"data-aos="fade-up-right"data-aos-duration="2000">
  <img src="https://www.gameopedia.com/wp-content/uploads/2023/11/DALL·E-2023-11-21-16.48.04-A-wallpaper-featuring-popular-video-game-genres_-action-adventure-sports-platformer-first-person-shooter-action-adventure-simulation-RPG-and-f-990x840-990x840.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">How our Genre Taxonomy Powers Game Design</h5>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Read More</a>
  </div>
</div>  
<div class="card"data-aos="fade-up"data-aos-duration="2000">
  <img src="https://www.gameopedia.com/wp-content/uploads/2023/11/DALL·E-2023-11-20-16.04.37-A-cover-photo-for-a-video-game-genres-blog-featuring-representations-of-various-video-game-genres-but-with-a-clear-central-space-without-te-990x840-990x840.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">The Ultimate Guide To Video Game Genres</h5>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Read More</a>
  </div>
</div>
<div class="card"data-aos="fade-up-left"data-aos-duration="2000">
  <img src="https://www.gameopedia.com/wp-content/uploads/2023/06/TaxoBlog-Banner-990x840-990x840.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Video Game Taxonomy Can Transform Game Development:</h5> 
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Read More</a>
  </div>
</div>
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