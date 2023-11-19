import React from "react";
class Languages extends React.Component<{ languages: String[] }> {
    render() {
        return (
            <>
                {this.props.languages.map((language, index) => (
                    <li key={"aside-" + index}>{language}</li>
                ))}
            </>
        )
    }
}
export default Languages