import React from "react";
import Props from "interfaces/components/experience/Header";
export default class Header extends React.Component<Props> {
    override render() {
        return (
            <>
                <h3 className="title is-5">
                    {this.props.experience.position} en {this.props.experience.company}, {this.props.experience.location}
                </h3>
                <h4 className="subtitle is-6 has-text-grey-light">
                    {this.props.experience.period}
                </h4>
                <p>{this.props.experience.companyDescription}</p>
            </>
        );
    }
}