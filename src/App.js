import logo from './logo.svg';
import './App.css';
import { Route,Routes,Link} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Form from './Form';
import Search from './Search';
import Solution from './Solution';
import About from './About';
import WhyGemopedia from './WhyGemopedia';
import Resources from './Resources';
import './index.css';

function App() {
  return (
    <>
    <Navbar/>
<Routes>
<Route path='/' element={<Home></Home>}/>
<Route path='/Form' element={<Form></Form>}/>
<Route path='/Search' element={<Search></Search>}/>
<Route path='/Solution' element={<Solution></Solution>}/>
<Route path='/About' element={<About></About>}/>
<Route path='/WhyGemopedia' element={<WhyGemopedia></WhyGemopedia>}/>
<Route path='/Resources' element={<Resources></Resources>}/>
</Routes>

    </>
  );
}

export default App;
