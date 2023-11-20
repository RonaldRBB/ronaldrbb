import React from "react";
import University from "./university";
import EducationInt from "../../interfaces/cv/education";
import Courses from "./courses";
class Education extends React.Component<{ education: EducationInt }> {
    render() {
        return (
            <div className="ml-4">
                <University university={this.props.education.university} />
                <Courses courses={this.props.education.courses} />
            </div>
        );
    }
}

export default Education;