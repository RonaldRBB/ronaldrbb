import React from "react";
import Description from "components/description";
import Experience from "components/experience";
import ExperienceInt from "interfaces/cv/experience";
import EducationInt from "interfaces/cv/education";
import Education from "components/education";
class Main extends React.Component<{ aboutMe: string, experience: ExperienceInt[], education: EducationInt }>{
    override render() {
        return (
            <div className="content" >
                <h2 className="title is-4">• Sobre mí</h2>
                <Description aboutMe={this.props.aboutMe} />
                <h2 className="title is-4">• Experiencia</h2>
                <Experience experience={this.props.experience} />
                <h2 className="title is-4">• Formación Académica</h2>
                <Education education={this.props.education} />
            </div>
        );
    }
}
export default Main;