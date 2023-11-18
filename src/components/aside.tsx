import React from "react";
import Details from "../interfaces/details";
import Link from "../interfaces/link";
import DownloadCV from "../interfaces/download_cv";
class Aside extends React.Component<{ details: Details, links: Link[], languages: string[], DownloadCvs: DownloadCV[] }> {
    renderDetails(): JSX.Element {
        return (
            <>
                <li>{this.props.details.location}</li>
                <li><a href={"mailto:" + this.props.details.email}>{this.props.details.email}</a></li>
                <li>{this.props.details.phone}</li>
            </>
        )
    }
    renderLiks(): JSX.Element[] {
        return this.props.links.map((link) => (
            <li key={"aside-" + link.name}>
                <a href={link.value} target="_blank" rel="noreferrer">{link.name}</a>
            </li>
        ));
    }
    renderLanguages(): JSX.Element[] {
        return this.props.languages.map((language, index) => (
            <li key={"aside-" + index}>{language}</li>
        ));
    }
    renderButtons(): JSX.Element[] | null {
        console.log(this.props.DownloadCvs)
        return this.props.DownloadCvs.map((pdf) => (
            
            < a key={"aside-" + pdf.lang}
                download=""
                href={process.env.PUBLIC_URL + "/" + pdf.file_name}
                className="button is-link" >
                {pdf.lang}
            </a >
        ))
    }
    render() {
        return (
            <div className="content">
                <h2 className="title is-5">Detalles</h2>
                <ul style={{ listStyle: "none" }}>
                    {this.renderDetails()}
                </ul>
                <h2 className="title is-5">Links</h2>
                <ul style={{ listStyle: "none" }}>
                    {this.renderLiks()}
                </ul>
                <h2 className="title is-5">Lenguajes</h2>
                <ul style={{ listStyle: "none" }}>
                    {this.renderLanguages()}
                </ul>
                <h2 className="title is-5">Descargar CV</h2>
                <ul style={{ listStyle: "none" }}>
                    <div className="buttons">
                        {this.renderButtons()}
                    </div>
                </ul>
            </div>
        )
    }
}
export default Aside