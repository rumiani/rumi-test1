import React from 'react';
import { Route, Switch , BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Pages/Blog/Blog';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';



function App() {
  return (
    <React.Fragment>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Portfolio' component={Projects}/>
        <Route path='/blog' component={Blog}/>
      </Switch>
      </Router>
      </React.Fragment>
  );
}

export default App;
