import React from "react";
import {Article} from "./Article";


export class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            length: 100,
            mood: this.props.mood,
            articles: []
        }
    }

    componentWillMount() {
        fetch('https://backend.gladsome17.hasura-app.io/articles/' + this.state.mood, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }

        }).then((responseText) => responseText.json())
            .then((articles) => {
                console.log(articles);
                this.setState({articles: articles})
            });
    }


    componentWillReceiveProps(nextProps) {
        this.setState({mood: nextProps.mood});
        fetch('https://backend.gladsome17.hasura-app.io/articles/' + nextProps.mood, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }

        }).then((responseText) => responseText.json())
            .then((articles) => {
                console.log(articles);
                this.setState({articles: articles})
            });
    }


    render() {
        return (
            <div>
                <div className="App-content">
                    {this.state.articles.map((article, index) => {
                        return <Article key={index} data={article}/>
                    })}
                </div>
            </div>
        );
    }
}
