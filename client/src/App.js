import styles from "./App.module.css";
import Landing from './Home_Land/Landing';
import Home from './Home_Land/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CountryDetal, AddActivity } from "./components/index";

function App() {
  return (
    <div className= {styles.App}>
    
    <BrowserRouter>
    <Routes>
    <Route exact path="/Home" element={<Home/>} />
    <Route exact path="/" element={<Landing/>} />
    <Route exact path="/Home/:id" element={<CountryDetal/>} />
    <Route exact path="/activity" element={<AddActivity/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
