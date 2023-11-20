import React from "react";
import LinkInt from "../../interfaces/cv/links";
export default class Links extends React.Component<{ links: LinkInt[] }> {
    override render() {
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