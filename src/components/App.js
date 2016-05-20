import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../stylesheets/components.scss';

class App extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
