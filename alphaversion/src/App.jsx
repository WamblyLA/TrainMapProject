import './App.css';
import Header from './modules/Header/Header.jsx'
import { Routes, Route } from 'react-router-dom';

import { AboutUs } from './pages/AboutUs/AboutUs.jsx';
import { Technologies } from './pages/Technologies.jsx';
import { NotFounded } from './pages/NotFounded.jsx';
import { MainPage } from './pages/MainPage.jsx';
import { Idea } from './pages/Idea.jsx';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tech" element={<Technologies />} />
        <Route path="/sense" element={<Idea />} />
        <Route path="*" element={<NotFounded />} />
      </Routes>
    </div>
  );
}

export default App;
