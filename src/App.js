import './App.css';
import About from './components/about';
import Home from './components/home';
import Project from './components/project';
import Resume from './components/resume';
import Contact from './components/contact';
import Topbar from './components/topbar';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Home/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
