import React from "react";
import DetailsInt from "../../interfaces/cv/details";
class Details extends React.Component<{ details: DetailsInt }> {
    override render() {
        return (
            <>
                <li>{this.props.details.location}</li>
                <li>
                    <a href={"mailto:" + this.props.details.email}>
                        {this.props.details.email}
                    </a>
                </li>
                <li>{this.props.details.phone}</li>
            </>
        )
    }
}
export default Details