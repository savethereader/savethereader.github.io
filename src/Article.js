import React from 'react'

export class Article extends React.Component {
    constructor(props){
        super(props);
        this.state={
            mood:this.props.mood
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({mood: nextProps.mood});
    }


    render() {
        return (
            <div>
                <div> {this.state.mood}</div>
                <div>{this.props.key}</div>
                <div>This is the title</div>
                <div>This is the description</div>
                <div>Link to the article here</div>
            </div>
        );
    }
}
