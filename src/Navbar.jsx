import React from "react";
import './App.css'; 
import { NavLink } from "react-router-dom";
import './index.css';

const Navbar=()=>{
return(
<>
<div className="nav">
    <div className="image">
    <a href="https://www.gameloop.com/game/education/com.jtv.jewelrytv">
<img className="default_logo" src="https://www.gameopedia.com/wp-content/uploads/2020/06/Logo-gameopedia.png" alt="..."/>
</a>
    </div>
    <ul>
       <NavLink style={{textDecoration:"none"}} to="/"><li>Home</li></NavLink>
        <NavLink style={{textDecoration:"none"}} to="/Solution"><li>Solutions</li></NavLink>
        <NavLink style={{textDecoration:"none"}} to="/About"><li>About</li></NavLink>
        <NavLink style={{textDecoration:"none"}} to="/WhyGemopedia"><li>WhyGemopedia</li></NavLink>
        <NavLink style={{textDecoration:"none"}} to="/Resources"><li>Resources</li></NavLink>
    </ul>
    <div className="icon">
    <NavLink className="ico" to="/Form"><i class="fa-solid fa-magnifying-glass"></i></NavLink>
    </div>
    <div className="button">
    <NavLink className="search" to="/Search"><input type="submit" value="Subscribe"/></NavLink>
    </div>
</div>
</>
);
}
export default Navbar;