import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import About from './component/About';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/footer';

function App() {
  return (
    <main className='App'>
      <Navbar /> 
      <div id='hero'>
        <Hero />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='testimonial'>
        <Testimonial />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <div id='footer'>
      <Footer />
      </div>
    </main>
     
  );
}

export default App;
