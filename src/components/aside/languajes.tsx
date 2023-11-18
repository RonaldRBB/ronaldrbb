import React from "react";
class Languages extends React.Component<{ languages: String[] }> {
    render() {
        return (
            <ul style={{ listStyle: "none" }}>
                {this.props.languages.map((language, index) => (
                    <li key={"aside-" + index}>{language}</li>
                ))}
            </ul>
        )
    }
}
export default Languages