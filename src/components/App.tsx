import 'bulma/css/bulma.min.css';
import 'bulma-extensions/dist/css/bulma-extensions.min.css';
import Cv from '../services/cv';
import React from 'react';
import Header from './header';
import Aside from './aside';
import Main from './main';
import AppInterface from '../interfaces/components/App';
export default class App extends React.Component<{}, AppInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            lang: "es",
            cv_filename: "cv_es.json",
            buttonContent: "CV in english",
            cv: null
        };
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }
    override componentDidMount() {
        setTimeout(() => {
            this.getJsonData();
        }, 500);
    }
    override componentDidUpdate(prevState: Readonly<{ lang: string; }>) {
        if (prevState.lang !== this.state.lang) {
            this.getJsonData();
        }
    }
    async getJsonData() {
        try {
            const jsonData = await Cv.getJsonData(this.state.cv_filename);
            this.setState({ cv: jsonData });
        } catch (error) {
            console.error('Error handling JSON data:', error);
        }
    }
    toggleLanguage() {
        if (this.state.lang === "es") {
            this.setState({
                lang: "en",
                buttonContent: "CV in english",
                cv_filename: "cv_en.json"
            });
        } else {
            this.setState({
                lang: "es",
                buttonContent: "CV en ingleés",
                cv_filename: "cv_es.json"
            });
        }
    }
    override render() {
        const { cv } = this.state;
        if (!cv) {
            return <div className="pageloader is-active"><span className="title">Loading</span></div>;
        }
        return (
            <>
                <div className="pageloader"><span className="title">Loading</span></div>
                <section className="section has-background-link-light">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column box has-background-white is-8 p-6">
                                <div style={{ textAlign: "center" }}>
                                    <button
                                        className="button is-link is-inverted is-size-7"
                                        onClick={this.toggleLanguage}
                                    >
                                        {this.state.buttonContent}
                                    </button>
                                </div>
                                <Header name={cv.name} title={cv.title} />
                                <div className="columns">
                                    <div className="column is-9">
                                        <Main
                                            aboutMe={cv.aboutMe}
                                            experience={cv.experience}
                                            education={cv.education}
                                        />
                                    </div>
                                    <div className="column">
                                        <Aside
                                            language={this.state.lang}
                                            details={cv.details}
                                            links={cv.links}
                                            languages={cv.languages}
                                            DownloadCvs={cv.downloadCV}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}