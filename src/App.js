import React from 'react';
import './App.css';
import Layout from '../src/components/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import Quiz from './containers/Quiz/Quiz'
import Authorization from './containers/Authorized/Authorization'


function App() {
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

export default App;
