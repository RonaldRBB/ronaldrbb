import Main from "./components/main";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
    if (process.env.NODE_ENV === 'development') {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={this.webVersion()} />
                    <Route path="/pdf" element={this.pdfVersion()} />
                </Routes>
            </Router>
        );
    } else {
        return this.webVersion();
    }
}
}