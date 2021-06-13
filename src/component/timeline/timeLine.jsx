import React, { Component } from 'react';
import './timeLine.css';

class Timeline extends Component {


    render() { 
    
        return (
            <div className='timeLine'>
                <p className='paraToLeft' style={{fontWeight:'bolder'}}>{this.props.users[0].firstName}  {this.props.users[0].lastName}</p>
                <p className='paraToLeft' style={{fontWeight:'-moz-initial'}}>@{this.props.users[0].userName}</p><br/>
                <p className='tweet'>{this.props.tweet}</p>
                <div className='options'>
                    <button className='clicked reply' onClick={this.giveName}>Reply</button>
                    <button className='clicked retweet' onClick={this.giveName}>Retweet</button>
                    <button className='clicked like' onClick={this.giveName}>Like</button>
                    <button className='clicked share' onClick={this.giveName}>Share</button>
                </div>               
            </div>
        );
    }
}
 
export default Timeline;