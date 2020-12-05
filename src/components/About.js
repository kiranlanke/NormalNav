import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class About extends Component {

    goToContact() {
        this.props.history.push('/contact');
    }

    render() {
        return (
            <div>
            <h2>About</h2>
            <input type="submit" onClick={() => this.goToContact()} value="Go to Contact" />
            </div>
        );
    }
}

export default withRouter(About);