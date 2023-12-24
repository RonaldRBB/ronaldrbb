import React from 'react';
export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <h2 className="title is-4">• Sobre mí</h2>
                <div className="ml-4">
                    <p>{this.props.cv.aboutMe}</p>
                </div>
                <h2 className="title is-4">• Experiencia</h2>
                <h2 className="title is-4">• Formación Académica</h2>
            </div>
        );
    }
}