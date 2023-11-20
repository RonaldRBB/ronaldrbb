import React from "react";
import University from "./university";
import EducationInt from "../../interfaces/cv/education";
import Courses from "./courses";
export default class Education extends React.Component<{ education: EducationInt }> {
    override render() {
        return (
            <div className="ml-4">
                <University university={this.props.education.university} />
                <Courses courses={this.props.education.courses} />
            </div>
        );
    }
}