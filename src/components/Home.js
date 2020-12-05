import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component{

    goToAbout() {
        this.props.history.push('/about');
    }
    
    render(){
        return(
            <div>
                Home <br />
                <input type="submit" onClick={() => this.goToAbout()} value="Go to About" />
            </div>
        )
    }
}

export default withRouter(Home);