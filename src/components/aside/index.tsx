import Buttons from "./buttons";
import Details from "./details";
import Language from "./languajes";
import Links from "./links";
import React from "react";
import { Language as LanguageType, Titles } from "@customTypes/";
import { Props, State } from "@interfaces/components/aside";
export default class Aside extends React.Component<Props, State> {
    titles: Titles = {
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
    constructor(props: Props) {
        super(props);
        const language: LanguageType = this.props.language;
        this.state = {
            detailsTitle: this.titles[language].details,
            linksTitle: this.titles[language].links,
            languagesTitle: this.titles[language].languages,
            downloadCV: this.titles[language].downloadCV
        };
    }
    override componentDidUpdate(prevProps: Readonly<Props>): void {
        if (prevProps.language !== this.props.language) {
            this.toggleLanguage();
        }
    }
    toggleLanguage() {
        const lang: LanguageType = this.props.language;
        this.setState({
            detailsTitle: this.titles[lang].details,
            linksTitle: this.titles[lang].links,
            languagesTitle: this.titles[lang].languages,
            downloadCV: this.titles[lang].downloadCV
        });
    }
    override render() {
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
                    <Language languages={this.props.languages} />
                </ul>
                <h2 className="title is-5">{this.state.downloadCV}</h2>
                <ul style={{ listStyle: "none" }}>
                    <Buttons DownloadCvs={this.props.DownloadCvs} />
                </ul>
            </div>
        )
    }
}