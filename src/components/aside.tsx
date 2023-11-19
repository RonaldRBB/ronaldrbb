import React from "react";
import DetailsInt from "../interfaces/details";
import Link from "../interfaces/link";
import DownloadCV from "../interfaces/download_cv";
import Details from "./aside/details";
import Languages from "./aside/languajes";
import Links from "./aside/links";
import Buttons from "./aside/buttons";
interface AsidePropsInt {
    lang: string
    details: DetailsInt
    links: Link[]
    languages: string[]
    DownloadCvs: DownloadCV[]
}
interface AsideStateInt {
    detailsTitle: string
    linksTitle: string
    languagesTitle: string
}
class Aside extends React.Component<AsidePropsInt, AsideStateInt> {
    titles: Record<string, { details: string; links: string; languages: string, downloadCV: string }> = {
        es: {
            details: "Detalles",
            links: "Links",
            languages: "Lenguajes",
            downloadCV: "Descargar CV",
        },
        en: {
            details: "Details",
            links: "Links",
            languages: "Languages",
            downloadCV: "Download CV",
        },
    };
    constructor(props: AsidePropsInt) {
        super(props);
        this.state = {
            detailsTitle: this.titles[this.props.lang].details,
            linksTitle: this.titles[this.props.lang].links,
            languagesTitle: this.titles[this.props.lang].languages,
        };
    }
    componentDidUpdate(prevProps: Readonly<AsidePropsInt>): void {
        if (prevProps.lang !== this.props.lang) {
            this.toggleLanguage();
        }
    }
    toggleLanguage() {
        this.setState({
            detailsTitle: this.titles[this.props.lang].details,
            linksTitle: this.titles[this.props.lang].links,
            languagesTitle: this.titles[this.props.lang].languages,
        });
    }

    render() {
        return (
            <div className="content">
                <h2 className="title is-5">{this.state.detailsTitle}</h2>
                <ul style={{ listStyle: "none" }}>
                    <Details details={this.props.details} />
                </ul>
                <h2 className="title is-5">{this.state.linksTitle}</h2>
                <ul style={{ listStyle: "none" }}>
                    <Links links={this.props.links} />
                </ul>
                <h2 className="title is-5">{this.state.languagesTitle}</h2>
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