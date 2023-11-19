// import bulma
import 'bulma/css/bulma.min.css';
import React from 'react';
import Header from './header';
import Aside from './aside';
import Main from './main';
import CV from '../interfaces/cv';
class App extends React.Component<{}, { lang: string, buttonContent: string, cv_filename: string, cv: CV | null }> {
    constructor(props: any) {
        super(props);
        this.state = {
            lang: "es",
            buttonContent: "CV en Español",
            cv_filename: "cv_es.json",
            cv: null
        };
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }
    componentDidMount() {
        this.getJsonData();
    }
    getJsonData() {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/${this.state.cv_filename}`);
                const jobsData = await response.json();
                this.setState({ cv: jobsData });
            } catch (error) {
                console.error('Error fetching jobs data:', error);
            }
        };
        // setTimeout(() => {
        fetchData();
        // }, 5000);
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
                buttonContent: "CV en Español",
                cv_filename: "cv_es.json"
            });
        }
        this.getJsonData();
    }
    render() {
        const { cv } = this.state;
        if (!cv) {
            return <div>Loading...</div>;
        }
        return (
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
        );
    }
}

export default App;
