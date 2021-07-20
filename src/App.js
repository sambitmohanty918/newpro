import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import{Home} from './pages/Home';
import{Signin} from './components/Signin';
import Registration from './components/Registration';

import {Listing} from './components/Listing';




function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/listing" component={Listing} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
