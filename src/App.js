import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Main from './Components/Main';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Work from './Components/Work';
import Semimain from './Components/semimain'
// import Blog from './Components/Blog'
// import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Main/>
    <Semimain/>
    <About/>
    <Services/>
    <Work/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    </div>
  );
}

export default App;
