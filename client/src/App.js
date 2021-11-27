//import styles from "./App.module.css";
import './App.css';
import { landing, home } from './components'  
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { countryDetal, addActivity } from "./components/index";

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Switch>
    <Route exact path="/Home" component={home} />
    <Route exact path="/" component={landing} />
    <Route exact path="/Home/:id" component={countryDetal} />
    <Route exact path="/activity" component={addActivity} />
    </Switch>
    </BrowserRouter>
    </div>
  );
};

export default App;
