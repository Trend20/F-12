import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="app">
      <Home />
      <Services />
      <About />
    </div>
  );
}

export default App;
