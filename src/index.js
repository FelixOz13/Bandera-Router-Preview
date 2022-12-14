import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home'
import Intro from './components/Intro'
import Artists from './components/Artists'
import Mariachi from './components/Mariachi';
import Cumbias from './components/Cumbias';
import RockEsp from './components/RockEsp';
import RapTrap from './components/RapTrap';
import ClassicRock from './components/ClassicRock';
import Alternative from './components/Alternative';
import Banda from './components/Banda';
import Norteño from './components/Norteño';
import Reggae from './components/Reggae';
import Reggaeton from './components/Reggaeton';
import ClubMusic from './components/ClubMusic';
import Pop from './components/Pop';


import { BrowserRouter as Router, Routes, Route, Navigate,  } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   
  <Router>
    <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/myapps" element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/mariachi' element={<Mariachi />} />
        <Route path='/banda' element={<Banda />} />
        <Route path='/norteño' element={<Norteño />} />
        <Route path='/reggaeton' element={<Reggaeton />} />
        <Route path='/cumbias' element={<Cumbias />} />
        <Route path='/rockesp' element={<RockEsp />} />
        <Route path='/raptrap' element={<RapTrap/>}/>
        <Route path='/classicrock' element={<ClassicRock />} />
        <Route path='/pop' element={<Pop />} />
        <Route path='/alternative' element={<Alternative />} />
        <Route path='/reggae' element={<Reggae />} />
        <Route path='/clubmusic' element={<ClubMusic />} />
        
        
    </Routes>
    </Router>,
  </div>
);







