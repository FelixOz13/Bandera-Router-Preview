import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home'
import Artists from './components/Artists'
import Mariachi from './components/Mariachi';
import Cumbias from './components/Cumbias';
import Baladas from './components/Baladas';
import RockEsp from './components/RockEsp';
import RapTrap from './components/RapTrap';
import ClassicRock from './components/ClassicRock';
import Alternative from './components/Alternative';



import Reggae from './components/Reggae';
import ClubMusic from './components/ClubMusic';
import BandChannel from './BandChannels/BandChannel';
import AngelesAzules from './BandChannels/AngelesAzules'
import Raymix from './BandChannels/Raymix'
import ACDC from './BandChannels/ACDC'
import Aczino from './BandChannels/Aczino'
import FiftyCent from './BandChannels/FiftyCent'
import TercerElemento from './BandChannels/TercerElemento'
import ThreeDoorsDown from './BandChannels/ThreeDoorsDown'
import Adele from './BandChannels/Adele'
import BobMarley from './BandChannels/BobMarley'
import RHCP from './BandChannels/RHCP'
import Jamiroquai from './BandChannels/Jamiroquai'
import { BrowserRouter as Router, Routes, Route, Navigate,  } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   
  <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myapps" element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/mariachi' element={<Mariachi />} />
        <Route path='/cumbias' element={<Cumbias />} />
        <Route path='/rockesp' element={<RockEsp />} />
        <Route path='/raptrap' element={<RapTrap/>}/>
        <Route path='/classicrock' element={<ClassicRock />} />
        <Route path='/baladas' element={<Baladas />} />
        <Route path='/alternative' element={<Alternative />} />
        <Route path='/reggae' element={<Reggae />} />
        <Route path='/clubmusic' element={<ClubMusic />} />
        <Route path='/bandchannel' element={<BandChannel />} />
        <Route path='/angelesazules' element={<AngelesAzules />} />
        <Route path='/adele' element={<Adele />} />
        <Route path='/raymix' element={<Raymix />} />
        <Route path='/acdc' element={<ACDC />}/>
        <Route path='/aczino' element={<Aczino />} />
        <Route path='/fiftycent' element={<FiftyCent/>}/>
        <Route path='/bobmarley' element={<BobMarley />} />
        <Route path='/rhcp' element={<RHCP />} />
        <Route path='/jamiroquai' element={<Jamiroquai />} />
        <Route path='/threedoorsdown' element={<ThreeDoorsDown />} />
        <Route path='/tercerelemento' element={<TercerElemento />} />
        <Route path='/threedoorsdown' element={<ThreeDoorsDown />} />
    </Routes>
    </Router>,
  </div>
);







