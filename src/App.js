import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Articles} from './Articles';

class App extends Component {
    constructor(props) {
        super(props);
        this.setMood = this.setMood.bind(this);
        this.state = {
            show: false
        }
    }

    componentWillMount() {
        this.setState({
            mood: ''

        });
    }

    setMood(mood) {
        this.setState({mood: mood, show: true});
    }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>PLACE HOLDER</h2>
                </div>

                <p>What's your mood today?</p>
                <img src="happy.png" className="App-logo" alt="logo" onClick={()=> this.setMood("happy")}/>
                <img src="neutral.png" className="App-logo" alt="logo" onClick={()=> this.setMood("neutral")}/>
                <img src="sad.png" className="App-logo" alt="logo" onClick={()=> this.setMood("sad")}/>

                {this.state.show?<Articles mood={this.state.mood}/>:null}

            </div>

        );
    }
}

export default App;
