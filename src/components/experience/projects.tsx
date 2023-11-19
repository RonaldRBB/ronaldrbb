import React from "react";
class Projects extends React.Component<{ projects: String[] }> {
    render() {
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
export default Projects