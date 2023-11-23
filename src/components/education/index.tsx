import React from "react";
import University from "components/education/university";
import Courses from "components/education/courses";
import Props from "interfaces/components/education";
export default class Education extends React.Component<Props> {
    override render() {
        return (
            <div className="ml-4">
                <University university={this.props.education.university} />
                <Courses courses={this.props.education.courses} />
            </div>
        );
    }
}