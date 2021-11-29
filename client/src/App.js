//import styles from "./App.module.css";
import './App.css';
import Landing from './Home_Land/Landing';
import Home from './Home_Land/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CountryDetal, AddActivity } from "./components/index";

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Routes>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/" component={Landing} />
    <Route exact path="/Home/:id" component={CountryDetal} />
    <Route exact path="/activity" component={AddActivity} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
