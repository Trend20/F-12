import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="app">
      <Home />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
