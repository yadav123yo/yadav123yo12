import './App.css';
import Navbar from "./Componants/Nav";
import About from "./Componants/About";
import Skills from "./Componants/Skills";
import Contact from "./Componants/Contact";
import {Helmet} from "react-helmet";
import Projects from "./Componants/Projects";
import Github from './Componants/Github';
import Footer from './Componants/Footer';

function App() {
  return (
    <div className="App">
 <Helmet>
                <meta charSet="utf-8" />
                <title>Yogesh_Yadav</title>
                
            </Helmet>


    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Github />
    <Contact />
    <Footer/>

    </div>
  );
}

export default App;
