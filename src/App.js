import React, {Component} from "react";
import "./App.css";
import {Articles} from "./Articles";

class App extends Component {
    constructor(props) {
        super(props);
        this.setMood = this.setMood.bind(this);
        this.state = {
            show: false,
            classname: ''
        }
    }

    componentWillMount() {
        this.setState({
            mood: ''

        });
    }

    componentDidMount() {
        this.setState({
            mood: 'positive',
            show: true
        });
    }

    setMood(mood) {
        this.setState({mood: mood, show: true});
    }


    render() {
        return (
            <div className="App">

                <div className="banner">
                    <div className="img-container">
                        <a className={this.state.mood === "positive" ? "active" : ""} onClick={()=> this.setMood("positive")}>Happy</a>
                        <a className={this.state.mood === "neutral" ? "active" : ""} onClick={()=> this.setMood("neutral")}>Neutral</a>
                        <a className={this.state.mood === "negative" ? "active" : ""} onClick={()=> this.setMood("negative")}>Sad</a>

                    </div>
                    <div className="icon"> Save The Reader</div>
                </div>

                <div>
                    {this.state.show ? <Articles mood={this.state.mood}/> : null}
                </div>
            </div>

        );
    }
}

export default App;
