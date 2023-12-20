import React from 'react';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePictureUrl: process.env.PUBLIC_URL + "/img/profile.jpeg",
        }
    }
    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}><a href="cv_eng.html" className="button is-link is-inverted is-size-7">CV in english</a></div>
                <div className="columns is-vcentered">
                    <div className="column is-3">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={this.state.profilePictureUrl} alt="Foto de Perfil" />
                        </figure>
                    </div>
                    <div className="column">
                        <h1 className="title">{this.props.cv.name}</h1>
                        <h2 className="subtitle is-6">{this.props.cv.title}</h2>
                    </div>
                </div>
            </>
        );
    }
}