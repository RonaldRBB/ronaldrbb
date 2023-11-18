// import bulma
import 'bulma/css/bulma.min.css';
import React from 'react';
import Header from './header';
import Job from './job';
import Education from './education';
import Aside from './aside';
import Description from './description';
import CV from '../interfaces/cv';
class App extends React.Component<{}, { cv: CV | null }> {
    constructor(props: any) {
        super(props);
        this.state = {
            cv: null
        };
    }
    componentDidMount() {
        // wait 5 seconds before fetching data

        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/cv_es.json`);
                const jobsData = await response.json();
                this.setState({ cv: jobsData });
                console.log("min name", jobsData.name);
            } catch (error) {
                console.error('Error fetching jobs data:', error);
            }
        };
        setTimeout(() => {
            fetchData();
        }, 5000);
    }
    render() {
        const { cv } = this.state;
        if (!cv) {
            return <div>Loading...</div>;
        }
        return (
            <section className="section has-background-link-light">
                <div className="container ">
                    <div className="columns is-centered">
                        <div className="column box has-background-white is-8 p-6">
                            <div style={{ textAlign: "center" }}>
                                <a href="cv_eng.html" className="button is-link is-inverted is-size-7">CV in english</a>
                            </div>
                            <Header name={cv?.name} />
                            <div className="columns">
                                <div className="column is-9">
                                    <div className="content">
                                        <h2 className="title is-4">• Sobre mí</h2>
                                        <Description />
                                        <h2 className="title is-4">• Experiencia</h2>
                                        <Job />
                                        <h2 className="title is-4">• Formación Académica</h2>
                                        <Education />
                                    </div>
                                </div>
                                <div className="column">
                                    <Aside />
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
