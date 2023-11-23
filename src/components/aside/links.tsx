import React from "react";
import Props from "interfaces/components/aside/links";
export default class Links extends React.Component<Props> {
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