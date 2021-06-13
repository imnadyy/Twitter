import React, { Component } from 'react';
import './signIn.css';

class SignIn extends Component {

    render() { 

        return ( 
            <div className='signIn'>                
                <h3>Sign up to Twitter</h3>
                <input type="text" placeholder='Choose a user name'
                    onChange={this.props.userInput} />
                <input type="text" placeholder='Enter your first name'
                    onChange={this.props.firstName} />
                <input type="text" placeholder='Enter your last name'
                    onChange={this.props.lastName} />
                <input type="text" placeholder='Set a password'
                    onChange={this.props.passwordInput} /><br/>
                <button onClick={this.props.loggedIn}

                    disabled={(this.props.users[0].userName.length < 5 || 
                    this.props.users[0].password.length <5) ? 'disabled' : ''}>Sign up</button>
                <p>Your user name and Password must have at least 5 characters.*</p>
                
            </div>
         );
    }
}
 
export default SignIn;