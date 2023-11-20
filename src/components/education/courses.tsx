import React from "react";
import CoursesInt from "../../interfaces/cv/education/course";
class Courses extends React.Component<{ courses: CoursesInt[] }> {
    renderCourses() {
        return this.props.courses.map((course, index) => {
            return (
                <tr key={index}>
                    <td><a href={course.link}>{course.name}</a></td>
                    <td>{course.institution}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <>
                <h3 className="title is-5">Formación Complementaria</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Institución</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCourses()}
                    </tbody>
                </table>
            </>
        )
    }
}
export default Courses