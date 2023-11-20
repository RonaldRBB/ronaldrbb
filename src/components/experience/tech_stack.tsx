import React from "react";
import Technology from "@interfaces/cv/experience/technology";
export default class TechStack extends React.Component<{ technologies: Technology }> {
    override render() {
        return (
            <>
                <p><em><strong>Tech Stack:</strong></em></p>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><strong>Lenguajes</strong></td>
                            <td>{this.props.technologies.languages.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Frameworks/librerías</strong>
                            </td>
                            <td>{this.props.technologies.frameworks.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Ambiente de Desarrollo</strong>
                            </td>
                            <td>{this.props.technologies.developmentEnvironment.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Plataformas</strong>
                            </td>
                            <td>{this.props.technologies.platforms.join(", ")}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}