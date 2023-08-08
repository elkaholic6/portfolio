import './App.css';
import AboutMe from './Components/AboutMe';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import Bio from './Components/Bio';
import Contact from './Components/Contact';

function App() {
  return (
      <div className="app">
        <div className='app_nav_container'>
          <Navbar />
        </div>
            <div className='body_container'>
              <div className='app_aboutme_wrapper'>
                <AboutMe />
              </div>
              <div className='app_body_wrapper'>
                <Body />
              </div> 
              <div className='app_bio_wrapper'>
                <Bio />
              </div>   
              <div className='app_contact_wrapper'>
                <Contact />
              </div> 
            </div>
      </div>
  );
}

export default App;
