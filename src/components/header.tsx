import React from "react";
class Header extends React.Component<{ name: string }> {
    constructor(props: { name: string }) {
        super(props);
        console.log(props.name);
    }
    render() {
        return (
            <div className="columns is-vcentered">
                <div className="column is-3">
                    <figure className="image is-128x128">
                        <img className="is-rounded" src={process.env.PUBLIC_URL + '/profile.jpeg'} alt="Ronald Bello" />
                    </figure>
                </div>
                <div className="column">
                    <h1 className="title">{this.props.name}</h1>
                    <h2 className="subtitle is-6">
                        Senior Backend Developer • Ing. de Sistemas • Backend Lover
                    </h2>
                </div>
            </div>
        )
    }
}

export default Header