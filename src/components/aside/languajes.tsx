import React from "react";
import Props from "@interfaces/components/aside/languages";
export default class Languages extends React.Component<Props> {
    override render() {
        return (
            <>
                {this.props.languages.map((language, index) => (
                    <li key={"aside-" + index}>{language}</li>
                ))}
            </>
        )
    }
}