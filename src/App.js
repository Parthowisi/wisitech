import Homepage from './pages/Homepage';
import Aboutus from './pages/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={< Homepage />} />
        <Route path='/about-us' element={< Aboutus />} />
      </Routes>
    </>
  );
}

export default App;
