import React, {Component} from 'react';
import './App.css';
import Layout from '../src/components/Layout/Layout'
import { Route, Switch, Redirect } from 'react-router-dom'
import Authorization from './containers/Authorized/Authorization'
import Home from './containers/Home/Home'
import Quiz from './containers/Quiz/Quiz'

class App extends Component {
  state = {
    isAuth: false
  }

  handleAuth = () => {
    this.setState({
      isAuth: true
    })
  }

  render(){
    return (
      <div className="App">
        <Layout>
          <Switch> 
            <Route path="/" exact render={() => <Authorization handleAuth={this.handleAuth}/>} />
            {this.state.isAuth ? <Route path='/home' exact component={Home}/> : <Redirect to="/"/>}
            {this.state.isAuth ? <Route path='/quiz' exact component={Quiz}/> : <Redirect to="/"/>}
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
