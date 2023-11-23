import React from "react";
import Props from "interfaces/components/experience/index";
import Header from "./header";
import Projects from "./projects";
import TechStack from "./tech_stack";
export default class Experiences extends React.Component<Props> {
    override render() {
        const renderExperience = this.props.experience.map((experience) => {
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