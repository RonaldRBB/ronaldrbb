import React from "react";
import LinkInt from "../../interfaces/cv/link";
class Links extends React.Component<{ links: LinkInt[] }> {
    render() {
        return (
            <>
                {this.props.links.map((link) => (
                    <li key={"aside-" + link.name}>
                        <a href={link.value} target="_blank" rel="noreferrer">
                            {link.name}
                        </a>
                    </li>
                ))}
            </>
        )
    }
}
export default Links