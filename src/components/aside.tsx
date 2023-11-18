import React from "react";
import Details from "../interfaces/details";
import Links from "../interfaces/links";
import Language from "../interfaces/language";
import DownloadCV from "../interfaces/download_cv";
class Aside extends React.Component<{ details: Details, links: Links, languages: Language[], pdf: DownloadCV }> {
    getAsideObj(object: Details | Links | Language[]): JSX.Element[] {
        return Object.entries(object).map(([key, value]) => (
            <li key={"aside-" + key}>
                {value.link === 'mailto' ? (
                    <a href={`mailto:${value.value}`} target="_blank" rel="noreferrer">{value.name}</a>
                ) : value.link === 'href' ? (
                    <a href={value.value} target="_blank" rel="noreferrer">{value.name}</a>
                ) : (
                    value.name
                )}
            </li>
        ));
    }
    render() {
        const details = this.getAsideObj(this.props.details);
        const links = this.getAsideObj(this.props.links);
        const languages = this.getAsideObj(this.props.languages);
        return (
            <div className="content">
                <h2 className="title is-5">Detalles</h2>

                <ul style={{ listStyle: "none" }}>
                    {details}
                </ul>
                <h2 className="title is-5">Links</h2>
                <ul style={{ listStyle: "none" }}>
                    {links}
                </ul>
                <h2 className="title is-5">Lenguajes</h2>
                <ul style={{ listStyle: "none" }}>
                    {languages}
                </ul>
                <h2 className="title is-5">Descargar CV</h2>
                <ul style={{ listStyle: "none" }}>
                    <div className="buttons">
                        <a
                            href={this.props.pdf.spanish}
                            download=""
                            className="button is-link"
                        >
                            Esp
                        </a>
                        <a
                            href={this.props.pdf.english}
                            download=""
                            className="button is-link"
                        >
                            Eng
                        </a>
                    </div>
                </ul>
            </div>
        )
    }
}
export default Aside