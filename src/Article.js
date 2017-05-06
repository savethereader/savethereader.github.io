import React from 'react'

export class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: this.props.mood,
            data: this.props.data
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({mood: nextProps.mood, data: nextProps.data});
    }


    render() {
        return (
            <div className={'square-item' + (this.props.index % 2 ? '' : ' even')}>
                {this.state.data.title}
                {/*{this.state.data.description}*/}
                <img src={this.state.data.image_url} alt={this.state.data.title}/>
                <a href={this.state.data.url}>Read more...</a>
            </div>
        );
    }
}
