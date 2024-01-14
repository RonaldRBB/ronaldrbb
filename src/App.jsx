import Main from "./components/main";
import React from 'react';

export default class App extends React.Component {
    webVersion() {
        return (
            <div className="App">
                <section className="section has-background-link-light">
                    <div className="container ">
                        <div className="columns is-centered">
                            <div className="column box has-background-white is-8 p-6">
                                <Main />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    pdfVersion() {
        return (
            <div className="App">
                <section className="section">
                    <div className="container ">
                        <div className="columns is-centered">
                            <Main />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    render() {
        return this.webVersion();
    }
}