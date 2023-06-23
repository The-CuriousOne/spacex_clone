import './App.css';
import Home from './components/Home';
import Dragon from './components/pages/Dragon';
import Falcon9 from './components/pages/Falcon9';
import FalconHeavy from './components/pages/FalconHeavy';
import HumanSpaceFlight from './components/pages/HumanSpaceFlight';
import Rideshare from './components/pages/Rideshare';
import StarLink from './components/pages/StarLink';
import Starshield from './components/pages/Starshield';
import Starship from './components/pages/Starship';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <Falcon9></Falcon9>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dragon' element={<Dragon/>} />
        <Route path='/falcon_9' element={<Falcon9/>} />
        <Route path='/falcon_heavy' element={<FalconHeavy/>} />
        <Route path='/human_space_flight' element={<HumanSpaceFlight/>} />
        <Route path='/rideshare' element={<Rideshare/>} />
        <Route path='/starlink' element={<StarLink/>} />
        <Route path='/starshield' element={<Starshield/>} />
        <Route path='/starship' element={<Starship/>} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Home/>
    // </div>
  );
}

export default App;
 