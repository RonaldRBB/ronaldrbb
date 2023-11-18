// import bulma
import 'bulma/css/bulma.min.css';
import Header from './header';
import Job from './job';
import Education from './education';
import Aside from './Aside';
import Description from './description';
function App() {
    return (
        <section className="section has-background-link-light">
            <div className="container ">
                <div className="columns is-centered">
                    <div className="column box has-background-white is-8 p-6">
                        <div style={{ textAlign: "center" }}>
                            <a href="cv_eng.html" className="button is-link is-inverted is-size-7">CV in english</a>
                        </div>
                        <Header />
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

export default App;
