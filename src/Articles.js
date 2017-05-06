import React from 'react'
import ReactList from 'react-list';
import {Article} from './Article';


export class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.renderSquareItem = this.renderSquareItem.bind(this);
        this.state = {
            length: 100,
            mood: this.props.mood,
            articles: []
        }
    }

    componentWillMount() {
        console.log(this.props);
        fetch('http://192.168.17.3:8080/articles/' + this.state.mood, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }

        }).then((responseText) => responseText.json())
            .then((articles) => {console.log(articles);this.setState({articles:articles})});
    }

    renderSquareItem(index, key) {
        return ( <Article key={key} index={index} data={this.state.articles[key]}/>);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({mood: nextProps.mood});
        fetch('http://192.168.17.3:8080/articles/' + nextProps.mood, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }

        }).then((responseText) => responseText.json())
            .then((articles) => {console.log(articles);this.setState({articles:articles})});
    }


    render() {
        return (
            <div>
                <h1>{this.props.mood}</h1>
                <div className="App-content">
                    <ReactList
                        length={this.state.articles.length}
                        itemRenderer={this.renderSquareItem}
                        type='uniform'
                    />
                </div>
            </div>
        );
    }
}
