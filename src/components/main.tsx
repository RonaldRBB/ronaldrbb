import React from "react";
import Description from "./description";
import Experience from "./experience";
import ExperienceInt from "../interfaces/experience";
import Education from "./education";
class Main extends React.Component<{ aboutMe: string, experience: ExperienceInt[] }> {
    render() {
        return (
            <div className="content">
                <h2 className="title is-4">• Sobre mí</h2>
                <Description aboutMe={this.props.aboutMe} />
                <h2 className="title is-4">• Experiencia</h2>
                <Experience experience={this.props.experience} />
                <h2 className="title is-4">• Formación Académica</h2>
                <Education />
            </div>
        );
    }
}
export default Main;