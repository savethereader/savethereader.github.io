import React from 'react'
import $ from 'jquery';
import './card.css'

$(window).on('load',function() {
    $('.post-module').hover(function() {
        $(this).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
    });
});


export class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            data: this.props.data
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({data: nextProps.data});
    }


    render() {
        return (
        <div className="container">
            <div className="column">
                <div className="post-module">
                    <div className="thumbnail">
                        <img alt="url" src={this.state.data.image_url}/>
                    </div>
                    <div className="post-content">
                        <h1 className="title">{this.state.data.title}</h1>
                        <p className="description">{this.state.data.description}</p>
                        <div className="post-meta"><a href={this.state.data.url}>Read More...</a></div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
