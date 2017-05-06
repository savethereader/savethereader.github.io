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

        return ( <div key={key} className={'square-item' + (index % 2 ? '' : ' even')}>
            {index}
        </div>);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({mood: nextProps.mood});
    }

    render() {
        return (
            <div>
                <h1>{this.props.mood}</h1>
                <div style={{overflow: 'auto', maxHeight: 400}}>
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
