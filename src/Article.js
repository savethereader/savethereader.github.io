import React from 'react'

export class Article extends React.Component {

    render() {
        return (
            <div> {this.props.key}</div>
        );
    }
}
