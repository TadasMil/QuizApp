import React, {Component} from 'react';
import './App.css';
import Layout from '../src/components/Layout/Layout'
import { Route, Switch, Redirect } from 'react-router-dom'
import Authorization from './containers/Authorized/Authorization'
import Home from './containers/Home/Home'
import Quiz from './containers/Quiz/Quiz'

class App extends Component {
  state = {
    auth: false
  }
  render(){
    return (
      <div className="App">
        <Layout>
          <Switch> 
            <Route path='/' exact component={Authorization}/>
            <Route path='/home' exact component={Home}/>
            <Route path='/quiz' exact component={Quiz}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
