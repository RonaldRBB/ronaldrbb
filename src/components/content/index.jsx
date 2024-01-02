import React from 'react';
export default class Content extends React.Component {
    getAboutMe() {
        return (
            <>
                <h2 className="title is-4">• Sobre mí</h2>
                <div className="ml-4">
                    <p>{this.props.cv.aboutMe}</p>
                </div>
            </>
        )
    }
    getExperience() {
        return (
            <>
                <h2 className="title is-4">• Experiencia</h2>
                <div className='ml-4'>
                    {this.props.cv.experience.map((experience) => (
                        <>
                            <h3 className="title is-5">
                                {experience.position} - {' '}
                                {experience.company}, {' '}
                                {experience.location}
                            </h3>
                            <h4 className="subtitle is-6 has-text-grey-light">
                                {experience.period}
                            </h4>
                            <p>
                                {experience.companyDescription}
                            </p>
                            <p><em><strong>Proyectos:</strong></em></p>
                            <ul>
                                {experience.projects.map((project) => (
                                    <li key={project}>{project}</li>
                                ))}
                            </ul>
                            <p><em><strong>Tech Stack:</strong></em></p>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td><strong>Lenguajes</strong></td>
                                        <td>{experience.technologies.languages.join(', ')}.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Frameworks/librerías</strong></td>
                                        <td>{experience.technologies.frameworks.join(', ')}.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Ambiente de Desarrollo</strong></td>
                                        <td>{experience.technologies.developmentEnvironment.join(', ')}.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Plataformas</strong></td>
                                        <td>{experience.technologies.platforms.join(', ')}.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    ))}
                </div>
            </>
        )
    }
    render() {
        return (
            <div className="content">
                {this.getAboutMe()}
                {this.getExperience()}
                <h2 className="title is-4">• Formación Académica</h2>
            </div>
        );
    }
}