import React from "react";
import Props from "interfaces/components/description";
export default class Description extends React.Component<Props> {
    override render() {
        return (
            <div className="ml-4"><p>{this.props.aboutMe}</p></div>
        );
    }
}