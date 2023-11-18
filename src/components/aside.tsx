import React from "react";
import DetailsInt from "../interfaces/details";
import Link from "../interfaces/link";
import DownloadCV from "../interfaces/download_cv";
import Details from "./aside/details";
import Languages from "./aside/languajes";
import Links from "./aside/links";
import Buttons from "./aside/buttons";
class Aside extends React.Component<{ details: DetailsInt, links: Link[], languages: string[], DownloadCvs: DownloadCV[] }> {
    render() {
        return (
            <div className="content">
                <h2 className="title is-5">Detalles</h2>
                <ul style={{ listStyle: "none" }}>
                    <Details details={this.props.details} />
                </ul>
                <h2 className="title is-5">Links</h2>
                <ul style={{ listStyle: "none" }}>
                    <Links links={this.props.links} />
                </ul>
                <h2 className="title is-5">Lenguajes</h2>
                <ul style={{ listStyle: "none" }}>
                    <Languages languages={this.props.languages} />
                </ul>
                <h2 className="title is-5">Descargar CV</h2>
                <ul style={{ listStyle: "none" }}>
                    <Buttons DownloadCvs={this.props.DownloadCvs} />
                </ul>
            </div>
        )
    }
}
export default Aside