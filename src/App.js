
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Testimonial from './component/Testimonial';
import Work from './component/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
