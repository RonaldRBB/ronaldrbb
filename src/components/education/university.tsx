import React from "react";
import UniversityInt from "../../interfaces/education/university";
class University extends React.Component<{ university: UniversityInt[] }> {
    renderUniversity() {
        return this.props.university.map((university, index) => {
            return (
                <tr key={index}>
                    <td>{university.title}</td>
                    <td>{university.name}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <>
                <h3 className="title is-5">Formacion Universitaria</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Universidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUniversity()}
                    </tbody>
                </table>
            </>
        )
    }
}
export default University