import React from "react";
import Details from "../interfaces/details";
import Links from "../interfaces/links";
import Language from "../interfaces/language";
class Aside extends React.Component<{ details: Details, links: Links, languages: Language[] }> {
    renderAsideObj(object: Details | Links | Language[]): JSX.Element[] {
        return Object.entries(object).map(([key, value]) => (
            <li key={"aside-" + key}>
                {value.link === 'mailto' || value.link === 'href' ? (
                    <a href={`mailto:${value}`}>{value.value}</a>
                ) : (
                    value.value
                )}
            </li>
        ));
    }
    render() {
        const details = this.renderAsideObj(this.props.details);
        const links = this.renderAsideObj(this.props.links);
        const languages = this.renderAsideObj(this.props.languages);
        return (
            <div className="content">
                <h2 className="title is-5">Detalles</h2>
                <ul style={{ listStyle: "none" }}>
                    {details}
                </ul>
                <h2 className="title is-5">Links</h2>
                <ul style={{ listStyleType: "none" }}>
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
                            href="docs/ronald_bello_backend_dev.pdf"
                            download=""
                            className="button is-link"
                        >
                            Esp
                        </a>
                        <a
                            href="docs/ronald_bello_backend_dev_eng.pdf"
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