import React, { Component } from 'react';
import './feature.css';

class Feature extends Component {
    state = { 
        features: [
            {feature:'Twitter', add: '#1'},
            {feature:'Home', add: '#2'},
            {feature:'Explore', add: '#3'},
            {feature:'Notification', add: '#4'},
            {feature:'Message', add: '#5'},
            {feature:'Bookmarks', add: '#6'},
            {feature:'Lists', add: '#7'},
            {feature:'Profile', add: '#8'}
            ]
     }

    render() { 
        return ( 
            <div className='things'>
                {this.state.features.map((f, index) => (
                    <div  className='list'><h2>
                        <a href={f.add} key={index}>{f.feature}<br/></a>
                    </h2></div>
                    ))}
                <a href="#" className='more'><h2>More</h2></a>
            </div>
         );
    }
}
 
export default Feature;