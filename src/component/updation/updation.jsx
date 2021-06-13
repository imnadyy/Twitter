import React, { Component } from 'react';
import Timeline from '../timeline/timeLine';
import './updation.css';
import Logo from '../pictures/twitter1.png';

class Updation extends Component {
    state = { 
        createTweet: '',
        tweets: []
    }

     handleCreateTWeet = e => {
         let createTweet = e.target.value;
         this.setState({ createTweet });
     }

     handleTweet = () => {
         let Tweet = {tweet: this.state.createTweet, reply:'', retweet:'', like:'', share:''};
         let tweets = [...this.state.tweets];
         tweets.unshift(Tweet);
         this.setState({ tweets });
         this.setState({ createTweet: '' });
     }

    render() { 
       
        return ( 
            <div>
                <div className='container'>
                        <h2>Home</h2>
                    <div className='updation'>
                        <img src={Logo} alt="Profile" width='50px'/>
                        <input type="text" placeholder="what's happening" 
                            onChange={this.handleCreateTWeet} 
                            value={this.state.createTweet}/>
                        <button onClick={this.handleTweet}
                            disabled={this.state.createTweet.length < 1 ? 'disabled': ''}>Tweet</button>
                    </div>
                    <div className='firstCompo'>
                        {this.state.tweets.length === 0 ? 'You have not tweeted anything' :
                        (this.state.tweets.map((t, index) => (
                            <Timeline 
                            key={index}
                            tweet = {t.tweet}
                            users={this.props.users} />
                        ))) }
                    </div>
                </div>
            </div>    
         );
    }
}
 
export default Updation;