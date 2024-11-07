import React,{useEffect} from "react";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home=()=>{
  useEffect(() => {
    AOS.init();
  }, [])
return(
    <>
<div>
<div id="carouselExampleCaptions" class="carousel slide carousel-fade"data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpapers.com/images/hd/free-fire-hip-hop-bundle-couple-dancers-vrv80eh6ms93156s.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h5>The World First<br/>Game Texonomy</h5>
        <p>Data Package And Tailored To Meet Your Specific Business Meet.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.wallpapersafari.com/31/6/BmIpHw.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Game Data That Drives Conversions</h5>
        <p>Improve Sales, Traffic And Personalisation With In Depth Game Facts And Information.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://imageio.forbes.com/specials-images/imageserve/64aceb40d0ea591fa2edfb01/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>The One Stop Destination For Gamng Data.</h5>
        <p>Rich Game Metadata And Texonomy Powers And Business Gaming.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div><br /><br />
<div className="head">
<h3>Empowering Solutions For Brands Like</h3>
</div><br />
  <div className="ima">
    <img src="https://1000logos.net/wp-content/uploads/2020/09/Virgin-Logo-1978.jpg"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNRB1zvFMmfuuKLMOilYBc6mrwZhfFABJUQ&s"/>
    <img src="https://photos.prnewswire.com/prnfull/20160908/405546LOGO?max=200"/>
    <img src="https://global-uploads.webflow.com/5dbb7684ce7be190ffaedc76/5dbb77ee369d6a76b671d7ec_PF_Logo_Gr%C3%A5.png"/>
    <img src="https://1000logos.net/wp-content/uploads/2023/04/Alexa-logo.png"/>
    <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"/>
    </div><br /><br /><br />
<div className="about container">
<div className="cards">
  <div className="box"data-aos="fade-down"data-aos-duration="2000" >
  <img src="https://www.gameopedia.com/wp-content/uploads/2020/07/gaming_2.svg" title="gaming_2" alt="gaming_2"/>
  <br/>
  <h6>2,00,000+ Games</h6>
  </div>
  <div className="box"data-aos="fade-up"data-aos-duration="2000" >
  <img src="https://www.gameopedia.com/wp-content/uploads/2020/07/checklist_.svg"/>
  <br/>
  <h6>Million Of Facts And Insights</h6>
  </div>
  <div className="box"data-aos="fade-down"data-aos-duration="2000">
  <img src="https://www.gameopedia.com/wp-content/uploads/2020/09/Integrity.svg"/>
  <br/>
  <h6>100+ Gaming Experts</h6>
  </div>
  <div className="box"data-aos="fade-up"data-aos-duration="2000" >
  <img src="https://www.gameopedia.com/wp-content/uploads/2020/09/Integrity.svg"/>
  <br/>
  <h6>Localized Contents</h6>
  </div>
  <div className="box"data-aos="fade-down"data-aos-duration="2000" >
  <img src="https://www.gameopedia.com/wp-content/uploads/2020/09/customised-data-solution.svg"/>
  <br/>
  <h6>Customized Game Data Solutions</h6>
  </div>
</div>
</div>
<div className="heading">
  <h1>Levling Up People's Live</h1>
  <p>Gaming transforms lives. We level up our partners’ business with our world-beating game data, and gamers always find the games they love. When all of us play, everyone wins.</p>
</div>

<div className="about container">
<div className="bullet">
    <img  data-aos="fade-right" data-aos-duration="2000" src="https://www.gameopedia.com/wp-content/uploads/2020/08/who-we-are-gameopedia.svg"/>
    <div className="bull">
    <h3>Taxonomy that Powers Game <br/>Design</h3>
    <ul>
      <li>Make the perfect game for your target audience using our<br/> taxonomy to determine what will work and what won’t.</li>
      <li>Go above and beyond the competition by identifying and<br/> providing the features their games lack.</li>
      <li>Maintain a consistent tone and vibe across your games<br/> with the more nuanced elements of our game taxonomy.</li>
    </ul>
    </div>
  </div>
  </div>
  <br/><br/><br />
  <div className="about container">
<div className="bullet">
    <div className="bull">
    <h3>Boost SEO With​</h3>
    <ul>
      <li>Power your search, recommendations and product listings through the deepest game data in the world.</li>
      <li>Access localised data that is not only customised by region and language, but also translated into regional dialects.</li>
      <li>Get to the facts – our experts analyse games the moment they are announced – and continue updating game data well after their release.</li>
    </ul> 
    </div>
    <img data-aos="fade-left" data-aos-duration="2000" src="https://www.gameopedia.com/wp-content/uploads/2023/03/y23.png"/>
  </div>
  </div>
  <br/><br /><br />
  <div className="about container">
<div className="bullet">
    <img  data-aos="fade-right" data-aos-duration="2000"  src="https://www.gameopedia.com/wp-content/uploads/2023/03/Why-Retailers-Need-Our-Data-1.png"/>
    <div className="bull">
    <h3>Power your Online Store Design</h3>
    <ul>
      <li>Enrich store pages with game data that propels discovery, promotes site engagement and drives conversions.</li>
      <li>Personalise the store experience by showing games relevant to the user based on their behaviour.</li>
      <li>Increase sales by leveraging trends – our database is constantly refined to reflect how the game industry is evolving.</li>
    </ul>
    </div>
  </div>
  </div>
  <br/><br /><br />
  <div className="about container">
<div className="bullet">
    <div className="bull">
    <h3>Uplift your Cloud Gaming Service​</h3>
    <ul>
      <li>We have a proven track record in providing data for major gaming platforms, be they cloud services, game launchers or marketplaces.</li>
      <li>Help gamers find their next favourite game - with so many games on offer, game discovery can be challenging.</li>
      <li>Customise your data delivery plan to ensure you are ready no matter when a game or subscription platform comes your way.</li>
    </ul>
    </div>
    <img  data-aos="fade-left" data-aos-duration="2000" src="https://www.gameopedia.com/wp-content/uploads/2023/03/cloud-image-for-home-page-2048x1148-1.png"/>
  </div>
  </div>
  <br/><br /><br />
  <div className="about container">
<div className="bullet">
    <img data-aos="fade-right" data-aos-duration="2000" src="https://www.gameopedia.com/wp-content/uploads/2020/08/The-Gameopedia-Advantage​.png"/>
    <div className="bull">
    <h3>Grow your Startup</h3>
    <ul>
      <li>Get full access to our database  set up a consultation now.</li>
      <li>It's time to innovate and disrupt: use the deepest and widest game metadata in the world.</li>
      <li>Use custom data packages to create a brand new type of store, help specific demographics find the right games, promote game accessibility and more.</li>
    </ul>
    </div>
  </div>
  </div>
  <br/><br /><br />
  <div className="about container">
    <h1>Resources</h1>
    <br />
    <div className="cads">
  <div class="card"data-aos="flip-left"data-aos-duration="2000">
  <img src="https://www.gameopedia.com/wp-content/uploads/2023/12/222338e2-615e-4edd-bbf9-c4645619b475-990x840-990x840.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Perfect Soul-Like Games: The Rise Of A Wining Formula</h5>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Read More</a>
  </div>
</div>  
<div class="card"data-aos="flip-right"data-aos-duration="2000">
  <img src="https://www.gameopedia.com/wp-content/uploads/2023/11/DALL·E-2023-11-20-16.04.37-A-cover-photo-for-a-video-game-genres-blog-featuring-representations-of-various-video-game-genres-but-with-a-clear-central-space-without-te-990x840-990x840.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">The Ultimate Guide To Video Game Genres </h5>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Read More</a>
  </div>
</div>
<div class="card"data-aos="flip-left"data-aos-duration="2000">
  <img src="https://www.gameopedia.com/wp-content/uploads/2023/12/287eba7b-49f3-4edf-95cf-9c53f93eafef-990x840-990x840.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Difficulty Deception And Death:The Design Of A Soul</h5> 
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Read More</a>
  </div>
</div>
</div>
</div>
<br /><br /><br />
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
<p><i class="fa-solid fa-at"></i> arif78310@gmail.com</p>
<p><i class="fa-solid fa-phone"></i> +7831034736 </p>
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
export default Home;


