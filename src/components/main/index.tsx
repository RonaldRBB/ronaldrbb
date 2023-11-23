import React from "react";
import Description from "components/description";
import Experience from "components/experience";
import Education from "components/education";
import Props from "interfaces/components/main";
class Main extends React.Component<Props> {
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