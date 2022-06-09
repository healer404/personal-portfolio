import React, {Component} from 'react';

import Header from './components/header/Header';
import About from './components/about/About';

class PorfolioPage extends Component{
    render () {
        return (
            <>
                <Header />
                <About />
            </>
        )
    }
}

export default PorfolioPage;