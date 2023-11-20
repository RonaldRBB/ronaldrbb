import React from "react";
import LanguagesInterface from "../../interfaces/components/aside/languages";
export default class Languages extends React.Component<LanguagesInterface> {
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