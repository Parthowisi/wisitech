import { useState, useEffect } from 'react';
import Header from './componets/Header'
import Footer from './componets/Footer'
import Homepage from './pages/Homepage';
import Aboutus from './pages/Aboutus'
import { Routes, Route, useLocation } from 'react-router-dom'


function App() {

  const [headerBgColor, setHeaderBgColor] = useState("");
  const location = useLocation();

  const mystyle = {
    backgroundColor: headerBgColor
  }

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setHeaderBgColor('');
        break;
      case '/about-us':
        setHeaderBgColor('black');
        break;
      default:
        setHeaderBgColor('');
    }
  }, [location]);


  return (
    <>
      <Header mystyle={mystyle} />

      <Routes>
        <Route path='/' element={< Homepage />} />
        <Route path='/about-us' element={< Aboutus />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
