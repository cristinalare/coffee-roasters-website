import './reset.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Plan from './pages/Plan/Plan';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/create-a-plan" element={<Plan />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
