import React from 'react';
import Navi from "./components/Navi"
import Login from "./components/Login";
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Main from "./components/Main";
import Footer from "./components/Footer";
import Addtrip from "./components/Addtrip";
import Contact from "./components/Contact";
import About from "./components/About";
import { Provider } from 'react-redux';
import store from './store';
import CustomToast from './components/CustomToast';
import TripList from "./components/TripList";
import Rides from './components/Rides';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <CustomToast />
          <Route path="/" component={Navi} />
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/addtrip" component={Addtrip} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/triplist" component={TripList} />
          <Route path="/search" component={Rides} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
