import './App.css';
import AboutMe from './Components/AboutMe';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
        
        {/* Header/navbar --> this will be quick links to each section of the portfolio */}
        {/* Body --> My projects.  Use react components to make cards.  Will be able to scroll through screenshots of projects */}
          {/* Discord bot */}
            {/* 4 screenshots of different functionalities */}
            {/* Have a link to invite bot to their server */}
            {/* Explain that the bot saves data to mongoDB */}
            {/* Javascript */}
          {/* Streaming Platform */}
            {/* 4 screenshots */}
            {/* Link to website */}
            {/* Showcase that it saves data to google firestore */}
            {/* Redux-toolkit, tailwindcss, react, javascript */}
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

        {/* Footer --> contact info and social media links */}
      </div>
  );
}

export default App;
