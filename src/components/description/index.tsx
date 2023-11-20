import React from "react";
export default class Description extends React.Component<{ aboutMe: string }> {
    override render() {
        return (
            <div className="ml-4"><p>{this.props.aboutMe}</p></div>
        );
    }
}