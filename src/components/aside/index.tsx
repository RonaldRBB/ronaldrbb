import Buttons from "./buttons";
import Details from "./details";
import Languages from "./languajes";
import Links from "./links";
import React from "react";
import DetailsInt from "../../interfaces/cv/details";
import Link from "../../interfaces/cv/link";
import DownloadCV from "../../interfaces/cv/download_cv";
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
    downloadCV: string
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
            downloadCV: this.titles[this.props.lang].downloadCV
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
            downloadCV: this.titles[this.props.lang].downloadCV
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
                <h2 className="title is-5">{this.state.downloadCV}</h2>
                <ul style={{ listStyle: "none" }}>
                    <Buttons DownloadCvs={this.props.DownloadCvs} />
                </ul>
            </div>
        )
    }
}
export default Aside