import React from "react";
import Props from "interfaces/components/experience/projects";
export default class Projects extends React.Component<Props> {
    override render() {
        return (
            <>
                <p><em><strong>Proyectos:</strong></em></p>
                <ul>
                    {this.props.projects.map((project) => (
                        <li><p>{project}</p></li>
                    ))}
                </ul>
            </>
        );
    }
}