import React, { Component } from 'react';
import './App.css';
import SignIn from './component/signIn/signIn';
import MainFile from './component/mainFile';

class App extends Component {
  state = { 
    loggedIn: true,
    users: [
      {userName: '', password: '', firstName: '', lastName: ''}
    ]
   }

  handleLoggedIn = () => {
    let loggedIn = this.state.loggedIn;
    loggedIn = !loggedIn
    this.setState({ loggedIn });
  }

  handleUserInput = e => {
    let users = [...this.state.users];
    let user = {...users[0], userName: e.target.value};
    users[0] = user;
    this.setState({ users });
    }

 handlePasswordInput = e => {
    let users = {...this.state.users};
    let user = {...users[0], password: e.target.value};
    users[0] = user;
    this.setState({ users });
    }

 handleFirstName = e => {
    let users = {...this.state.users};
    let user = {...users[0], firstName: e.target.value};
    users[0] = user;
    this.setState({ users });
    }

 handleLastName = e => {
    let users = {...this.state.users};
    let user = {...users[0], lastName: e.target.value};
    users[0] = user;
    this.setState({ users });
    }

  render() {
    
    return ( 
      <div>
        {this.state.loggedIn === true ? <SignIn loggedIn = {this.handleLoggedIn}
          users={this.state.users}
          userInput= {this.handleUserInput}
          passwordInput={this.handlePasswordInput}
          firstName={this.handleFirstName}
          lastName={this.handleLastName}/> : <MainFile users={this.state.users}/>
        }
        </div>
    )
  }
}
 
export default App;