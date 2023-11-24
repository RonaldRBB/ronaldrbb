import React from "react";
import Description from "components/description";
import Experience from "components/experience";
import Education from "components/education";
import { Language as LanguageType, MainTitles } from "types";
import { Props, State } from "interfaces/components/main";
class Main extends React.Component<Props, State> {
    titles: MainTitles = {
        es: {
            aboutMe: "Sobre mi",
            experience: "Experiencia",
            education: "Formación Académica",
        },
        en: {
            aboutMe: "About me",
            experience: "Experience",
            education: "Education",
        },
    };
    constructor(props: Props) {
        super(props);
        const language: LanguageType = this.props.language;
        this.state = {
            aboutMe: this.titles[language].aboutMe,
            experience: this.titles[language].experience,
            education: this.titles[language].education
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
            aboutMe: this.titles[lang].aboutMe,
            experience: this.titles[lang].experience,
            education: this.titles[lang].education
        });
    }
    override render() {
        return (
            <div className="content" >
                <h2 className="title is-4">• {this.state.aboutMe}</h2>
                <Description aboutMe={this.props.aboutMe} />
                <h2 className="title is-4">• {this.state.experience}</h2>
                <Experience experience={this.props.experience} />
                <h2 className="title is-4">• {this.state.education}</h2>
                <Education education={this.props.education} />
            </div>
        );
    }
}
export default Main;