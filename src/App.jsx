
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './components/UserContext';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Bookpage from './components/bookpage/Bookpage';

function App() {

  return (
    <UserContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/book/:id' element={<Bookpage />} />
        </Routes>
      </BrowserRouter>
    </UserContext>

  )
}

export default App;

