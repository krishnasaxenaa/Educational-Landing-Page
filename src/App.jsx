import './App.css';

// Component Imports
import Header from './Components/Files/Header';
import Hero from './Components/Files/Hero';
import Skills from './Components/Files/Skills';
import About from './Components/Files/About';
import Contact from './Components/Files/Contact';
import Footer from './Components/Files/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
        <Hero />
        <Skills />
        <About />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;