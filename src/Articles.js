import React from 'react'
import ReactList from 'react-list';
import {Article} from './Article';

export class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.renderSquareItem = this.renderSquareItem.bind(this);
        this.state = {
            length: 100,
            mood: this.props.mood
        }
    }

    renderSquareItem(index, key) {

        return ( <Article key={key} index={index}/>);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({mood: nextProps.mood});
    }

    render() {
        return (
            <div>
                <h1>{this.props.mood}</h1>
                <div className="App-content">
                    <ReactList
                        length= {100}
                        itemRenderer= {this.renderSquareItem}
                        type= 'uniform'
                    />
                </div>
            </div>
        );
    }
}
