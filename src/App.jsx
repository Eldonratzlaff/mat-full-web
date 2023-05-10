import './App.css';
import  {BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Quotes from './components/quotes';
import Home from './components/home.jsx';
import CalculatorPage from './components/calculatorPage';

const App = () => (
  <>
  <BrowserRouter>
  <div>
      <nav className="navbar">
        <div className="nav-title"> Math Magicians </div>
        <div className="nav-links">
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-link">
            <Link to="Calculator">Calculator</Link>
          </div>
          <div className="nav-link">
            <Link to="Quotes">Quotes</Link>
          </div>

        </div>
      </nav>
      <div className='section' >      
        <Routes>
           <Route path="/" element={<Home/>} />
          <Route path="/Calculator" element={<CalculatorPage/>} />
          <Route path="/Quotes" element={<Quotes/>} />
        </Routes>     
      </div>
    </div>
  </BrowserRouter>
   
  </>
);
export default App;