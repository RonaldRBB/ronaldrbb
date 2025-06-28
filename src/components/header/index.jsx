import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePictureUrl: process.env.PUBLIC_URL + "/img/profile.jpeg",
            buttonContent: "CV en español"
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.lang !== this.props.lang) {
            const buttonContent = this.props.lang === "en" ? "CV en español" : "CV in english";
            this.setState({ buttonContent });
        }
    }
    render() {
        return (
            <>
                {/* <div style={{ textAlign: "center" }}>
                    <button className="button is-link is-inverted is-size-7" onClick={ this.props.toggleLang}>{this.state.buttonContent}</button>
                </div> */}
                <div className="columns is-vcentered">
                    <div className="column">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={this.state.profilePictureUrl} alt="Foto de Perfil" />
                        </figure>
                    </div>
                    <div className="column is-12">
                        <h1 className="title">{this.props.cv.name}</h1>
                        <h2 className="subtitle is-6">{this.props.cv.title}</h2>
                    </div>
                </div>
            </>
        );
    }
}
