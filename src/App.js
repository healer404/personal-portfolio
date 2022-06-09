import './App.css';

import React, {Component} from 'react';
// import { Route, BrowserRouter as Router,  } from "react-router-dom";

import PorfolioPage from './pages/portfolio/PortfolioPage';
class App extends Component{
    render(){
        return (

            <PorfolioPage />
            // <Router>
            //     {/* <Switch> */}
            //         <Route path="/" exact component={PorfolioPage} />
            //     {/* </Switch> */}
            // </Router>
        )
    }
}
export default App;