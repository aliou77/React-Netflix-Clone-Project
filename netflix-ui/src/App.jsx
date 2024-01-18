import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/home';
import RegForm from './pages/RegForm';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShow from './pages/TVShow';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/player' element={<Player />} />
                <Route exact path='/movies' element={<Movies />} />
                <Route exact path='/tv' element={<TVShow />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/signup/regform' element={<RegForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
