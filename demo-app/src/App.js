import NavBar from './components/nav/NavBar.jsx';
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Home/>
      <NavBar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/navbar" exact component={NavBar} />

        
      </Switch>
      </Router>
    </div>
  );
}

export default App;
