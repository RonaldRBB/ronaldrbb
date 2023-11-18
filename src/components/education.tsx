import React from "react";
class Education extends React.Component {
    render() {
        return (
            < div className="ml-4">
                <h3 className="title is-5">Formación Universitaria</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Universidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ingeniería de Sistemas</td>
                            <td>Instituto Politécnico Santiago Mariño</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="title is-5">Formación Complementaria</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Institución</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://api.educacionit.com/pdf/certificados/ronald-britos-819848/63453">
                                    Desarrollo Seguro
                                </a>
                            </td>
                            <td>Educacion IT</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-cabec80b-c848-458f-b791-1ad21c1e5f68.pdf">
                                    Desarrollo de Software Seguro
                                </a>
                            </td>
                            <td>Udemy</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://api.alumni.education/course/certificate/generate?hash=1b6bca49-b1cd-4f54-acae-bc9453695fc3&format=pdf">
                                    Angular13
                                </a>
                            </td>
                            <td>Udemy</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://www.freecodecamp.org/espanol/certification/ronaldrbb/front-end-development-libraries">
                                    FrontEnd Development Libraries
                                </a>
                            </td>
                            <td>FreeCodeCamp</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://www.freecodecamp.org/espanol/certification/ronaldrbb/javascript-algorithms-and-data-structures">
                                    JavaScriptAlgorithms and Data Structures
                                </a>
                            </td>
                            <td>FreeCodeCamp</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://www.freecodecamp.org/espanol/certification/ronaldrbb/responsive-web-design">
                                    ResponsiveWeb Design
                                </a>
                            </td>
                            <td>FreeCodeCamp</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Education;