import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import CharPage from './pages/CharPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/charater/:charName' element={ <CharPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
