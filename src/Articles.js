import React from 'react'
import ReactList from 'react-list';
import { Article } from './Article';

export class Articles extends React.Component {

    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.state={
            length:100,
            mood: this.props.mood
        }
    }

    renderItem(index, key) {
        return <Article key={key} mood={this.state.mood}/>;
    }

    componentWillReceiveProps(nextProps){
        this.setState({mood: nextProps.mood});
    }

    render() {
        return (
            <div>
                <h1>{this.props.mood}</h1>
                <div style={{overflow: 'auto', maxHeight: 400}}>
                    <ReactList
                        itemRenderer={this.renderItem}
                        length={100}
                        type='uniform'
                    />
                </div>
            </div>
        );
    }
}
