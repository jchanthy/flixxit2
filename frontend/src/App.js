import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/LogIn.js';
import MainPage from './components/Layouts/MainPage.js';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
