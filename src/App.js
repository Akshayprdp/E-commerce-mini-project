import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headerr from './Components/Header/Headerr';

function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/'element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Headerr/> */}
    </div>
  );
}

export default App;
