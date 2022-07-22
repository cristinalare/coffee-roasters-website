import './reset.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Plan from './pages/Plan/Plan';
import {ParallaxProvider} from 'react-scroll-parallax';

function App() {
  return (
    
    <ParallaxProvider>
      <div>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/create-a-plan" element={<Plan />} />
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
