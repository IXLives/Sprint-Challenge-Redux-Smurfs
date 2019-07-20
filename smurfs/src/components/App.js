import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import './App.css';
import Dashboard from './Dashboard'
import SmurfsList from './SmurfsList'
import getSmurfs from "../actions/index";
import SmurfForm from '../components/SmurfForm'


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Route exact path = '/' component = {Dashboard} />
        <Route exact path = '/smurfs' component = {SmurfsList} />
        <Route path = '/form' component = {SmurfForm} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getSmurfs
}


export default connect(null, mapDispatchToProps)(App);
