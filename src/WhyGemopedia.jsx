import React,{useEffect} from "react";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyGemopedia=()=>{
  useEffect(() => {
    AOS.init();
  }, [])
return(
  <>
<div id="carouselExampleCaptions" class="carousel slide carousel-fade">  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.pcspecialist.co.uk/images/landing/pcs/game-based-computers/gbpc-lineup.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h1>Why Gemopedia...</h1>
      </div>
    </div>
    </div>
    </div>
    <br/><br/>
    <div className="note">
<h3>1.1 million different versions of video games have been released across PC, console & mobile phones.</h3>
<h2>-Gamingshift</h2>
<br/>
<br/>
<h3>We are the Largest Global Curator of Video Game Metadata and Insights for
PC, Console, and Mobile Games.</h3>
<p>With thousands of new video games releasing every year, there is an ever increasing need for reliable data and insights to create <br/>opportunity and value throughout the gaming ecosystem. Gameopedia’s ever-growing database of expertly curated metadata<br/> and insights for over 100,000 games can help you do just that!</p>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="heading">
  <h1>Advantages Of Our Database</h1>
  <p>The best alternative to your in-house game content representation efforts</p>
</div>

<div className="about container">
<div className="bullet">
    <img data-aos="fade-right"data-aos-duration="2000" src="https://www.gameopedia.com/wp-content/uploads/2020/07/seo.svg"/>
    <div className="bull">
    <h3>Boost SEO With</h3>
    <ul>
      <li>The most comprehensive collection of metadata, facts, and insights.</li>
      <li>Expertly curated in a standardized format to ensure impeccable consistency, accuracy, and data sufficiency.</li>
      <li>Localized and translated data for major markets across 4 continents.</li>
    </ul>
    </div>
  </div>
  </div>
  <br/><br/><br />
  <div className="about container">
<div className="bullet">
    <div className="bull">
    <h3>Save Money And Time By​</h3>
    <ul>
      <li>Outsourcing your data collection and management requirements to us and focus on your core competencies and lines of business.</li>
      <li>
      Enjoying the advantages of a data warehouse minus the headache of building and maintaining one.</li>
      <li>Licensing only the content your business needs.</li>
      <li>Saving up to 30% in operational and management costs*.</li>
    </ul>
    </div>
    <img data-aos="fade-left"data-aos-duration="2000"src="https://www.gameopedia.com/wp-content/uploads/2023/03/y23.png"/>
  </div>
  </div>
  <br/><br/><br />
  <div className="about container">
<div className="bullet">
    <img data-aos="fade-right"data-aos-duration="2000" src="https://www.gameopedia.com/wp-content/uploads/2020/07/completed_task_.svg"/>
    <div className="bull">
    <h3>Meet All Your Data Needs With</h3>
    <ul>
      <li>Custom data packages.</li>
      <li>Agile solutions that ensure your every requirement, custom or generic, is met with aggressive turn-around-times.</li>
      <li>Scalable plug-and-play APIs and tools.</li>
    </ul>
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
export default WhyGemopedia;