import React, {Component} from "react";
import {} from "@material-ui/icons";
import './About.css';

class About extends Component{
    render() {
        return (
            <>
                <div className="about-background-container">
                    <section className="container about-container">
                        <div className="about-wrapper center">
                            {/* header  */}
                            <div className="about-header">
                                <h5 className="">
                                    Let me tell you something
                                </h5>
                                <h2>
                                    About Me
                                </h2>
                            </div>

                            {/* contents about me */}
                            <div className="about-contents">
                                <div className="about-content-imgs">
                                    <div className="about-content-img first">
                                        <img src="./assets/what_an_ugly_guy.jpg"/>
                                    </div>
                                    <div className="about-content-img second">
                                        <img src="./assets/what_the_heck.jpg"/>
                                    </div>
                                    <div className="about-content-img third">
                                        <img src="./assets/what_an_ugly_guy.jpg"/>
                                    </div>
                                </div>

                                <div className="about-content-description">
                                    <p className="about-content-text">
                                        Hi! I am currently a Computer Engineering student of Polytechnic University of the Philippines. 
                                    </p>
                                    <p className="about-content-text">
                                        I love exploring and learning new things, 
                                        especially when it comes to programming. 
                                        I lack actual experience,
                                        but I am looking forward to putting my knowledge and skills into action.
                                    </p>

                                    <p className="about-content-text"> 
                                        I have passion for creating Website and Web Applications 
                                        with simple but elegant and dynamic User Interfaces. 
                                    </p>   

                                    <button className="btn btn-primary">
                                        Let's Talk
                                    </button>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>   
            </>
        )
    }
}
export default About;