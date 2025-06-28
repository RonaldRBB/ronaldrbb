import React from 'react';
export default class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsTitle: "Detalles",
            linksTitle: "Enlaces",
            languagesTitle: "Lenguajes",
            cvFileTitle: "Descargar CV"
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.lang !== this.props.lang) {
            const detailsTitle = this.props.lang === "en" ? "Details" : "Detalles";
            const linksTitle = this.props.lang === "en" ? "Links" : "Enlaces";
            const languagesTitle = this.props.lang === "en" ? "Languages" : "Lenguajes";
            const cvFileTitle = this.props.lang === "en" ? "Download CV" : "Descargar CV";
            this.setState({ detailsTitle, linksTitle, languagesTitle, cvFileTitle });
        }
    }
    getDetails() {
        return (<>
            <ul style={{ listStyle: "none" }}>
                <li>{this.props.cv.details.location}</li>
                <li>
                    <a href={`mailto:${this.props.cv.details.email}`}>{this.props.cv.details.email}</a>
                </li>
                <li>{this.props.cv.details.phone}</li>
            </ul>
        </>)
    }
    getLinks() {
        return (<>
            <ul style={{ listStyleType: "none" }}>
                {this.props.cv.links.map((link) => (
                    <li key={link.name}>
                        <a href={link.value} target="_blank" rel="noreferrer">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </>)
    }
    getLanguages() {
        return (<>
            <ul style={{ listStyle: "none" }}>
                {this.props.cv.languages.map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
        </>)
    }
    getCvFile() {
        if (this.props.cv.downloadCV) {
            return (<>
                <ul style={{ listStyle: "none" }}>
                    <div className="buttons">
                        {this.props.cv.downloadCV.map((pdf) => (
                            <a
                                key={"aside_button-" + pdf.lang}
                                download=""
                                href={`${process.env.PUBLIC_URL}/files/${pdf.file_name}`}
                                className="button is-link"
                            >
                                {pdf.lang}
                            </a>
                        ))}
                    </div>
                </ul>
            </>)
        }
    }
    render() {
        return (
            <div className="content">
                <h2 className="title is-5">{this.state.detailsTitle}</h2>
                {this.getDetails()}
                <h2 className="title is-5">{this.state.linksTitle}</h2>
                {this.getLinks()}
                <h2 className="title is-5">{this.state.languagesTitle}</h2>
                {this.getLanguages()}
                {/* <h2 className="title is-5">{this.state.cvFileTitle}</h2>
                {this.getCvFile()} */}
            </div>
        );
    }
}