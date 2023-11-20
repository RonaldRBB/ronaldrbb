import React from "react";
import DownloadCV from "../../interfaces/cv/download";

class Buttons extends React.Component<{ DownloadCvs: DownloadCV[] }> {
    renderButtons(): JSX.Element[] | null {
        console.log(this.props.DownloadCvs)
        return this.props.DownloadCvs.map((pdf) => (
            <a key={"aside_button-" + pdf.lang}
                download=""
                href={process.env.PUBLIC_URL + "/" + pdf.file_name}
                className="button is-link" >
                {pdf.lang}
            </a>
        ))
    }
    render() {
        return (
            <div className="buttons">
                {this.renderButtons()}
            </div>
        )
    }
}
export default Buttons