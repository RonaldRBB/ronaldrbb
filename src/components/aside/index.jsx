import React from 'react';
export default class Aside extends React.Component {
    render() {
        return (
            <div className="content">
                <h2 className="title is-5">Detalles</h2>
                <ul style={{ listStyle: "none" }}>
                    <li>CABA, Argentina</li>
                    <li>
                        <a href="mailto:ronaldbello2@gmail.com">ronaldbello2@gmail.com</a>
                    </li>
                    <li>+54 9 11 3946-4316</li>
                </ul>
                <h2 className="title is-5">Links</h2>
                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <a href="https://www.linkedin.com/in/ronaldrbb">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/ronaldrbb">GitHub</a>
                    </li>
                </ul>
                <h2 className="title is-5">Lenguajes</h2>
                <ul style={{ listStyle: "none" }}>
                    <li>Español (Nativo)</li>
                    <li>Inglés (Intermedio)</li>
                </ul>
                <h2 className="title is-5">Descargar CV</h2>
                <ul style={{ listStyle: "none" }}>
                    <div className="buttons">
                        <a
                            href="docs/ronald_bello_backend_dev.pdf"
                            download=""
                            className="button is-link"
                        >
                            Esp
                        </a>
                        <a
                            href="docs/ronald_bello_backend_dev_eng.pdf"
                            download=""
                            className="button is-link"
                        >
                            Eng
                        </a>
                    </div>
                </ul>
            </div>
        );
    }
}