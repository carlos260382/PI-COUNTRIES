import './App.css';
import { landing, home } from './components'  
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Switch>
    <Route exact path="/Home" component={home} />
    <Route exact path="/" component={landing} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
