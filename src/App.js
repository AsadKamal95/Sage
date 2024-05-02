import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Franchise from './components/Franchise';

import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/aboutUs" element = {<About/>}/>
      <Route path = "/franchise" element = {<Franchise/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
