import React, { Component } from 'react';
import Updation from './updation/updation';
import Feature from './feature/feature';
import Search from './search/search';

class MainFile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Feature />
                <Updation users={this.props.users}/>
                <Search />
            </div>
         );
    }
}
 
export default MainFile;