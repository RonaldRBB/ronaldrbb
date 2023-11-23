import React from "react";
import Props from "interfaces/components/aside/details";
export default class Details extends React.Component<Props> {
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