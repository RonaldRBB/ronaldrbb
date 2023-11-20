import React from "react";
export default class Projects extends React.Component<{ projects: String[] }> {
    override render() {
        return (
            <>
                <p><em><strong>Proyectos:</strong></em></p>
                <ul>
                    {this.props.projects.map((project: String) => (
                        <li><p>{project}</p></li>
                    ))}
                </ul>
            </>
        );
    }
}