import React from "react";
import Experience from "../interfaces/experience";
import Header from "./experience/header";
import Projects from "./experience/projects";
import TechStack from "./experience/tech_stack";
class Experiences extends React.Component<{ experience: Experience[] }> {
    render() {
        const renderExperience = this.props.experience.map((experience: Experience) => {
            return (
                <>
                    <Header experience={experience} />
                    <Projects projects={experience.projects} />
                    <TechStack technologies={experience.technologies} />
                </>
            );
        });
        return (<div className="ml-4"> {renderExperience} </div>);
    }
}
export default Experiences