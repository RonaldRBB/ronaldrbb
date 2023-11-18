// import bulma
import 'bulma/css/bulma.min.css';
// import profile picture public/
function App() {
    return (
        <section className="section has-background-link-light">
            <div className="container ">
                <div className="columns is-centered">
                    <div className="column box has-background-white is-8 p-6">
                        <div style={{ textAlign: "center" }}>
                            <a
                                href="cv_eng.html"
                                className="button is-link is-inverted is-size-7"
                            >
                                CV in english
                            </a>
                        </div>
                        <div className="columns is-vcentered">
                            <div className="column is-3">
                                <figure className="image is-128x128">
                                    <img className="is-rounded" src={process.env.PUBLIC_URL + '/profile.jpeg'} alt="Ronald Bello" />
                                </figure>
                            </div>
                            <div className="column">
                                <h1 className="title">Ronald Bello</h1>
                                <h2 className="subtitle is-6">
                                    Senior Backend Developer • Ing. de Sistemas • Backend Lover
                                </h2>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-9">
                                <div className="content">
                                    <h2 className="title is-4">• Sobre mí</h2>
                                    <div className="ml-4">
                                        <p>
                                            Desarrollador Full Stack apasionado con experiencia desde 2012
                                            en PHP, Python, Laravel, y Node.js. Especializado en el
                                            desarrollo de API REST, Microservicios, integración de
                                            servicios externos y aplicaciones web. Comprometido a
                                            contribuir positivamente a la calidad del producto y la
                                            experiencia del usuario.
                                        </p>
                                    </div>
                                    <h2 className="title is-4">• Experiencia</h2>
                                    <div className="ml-4">
                                        <h3 className="title is-5">
                                            Desarrollador Backend en Cobro Digital S.R.L., Argentina
                                        </h3>
                                        <h4 className="subtitle is-6 has-text-grey-light">
                                            Enero 2022 - Actualidad
                                        </h4>
                                        <p>
                                            Cobro Digital ofrece soluciones personalizadas de cobranza,
                                            recaudación y pagos, con certificación PCI para transacciones
                                            seguras con tarjetas de crédito y débito.
                                        </p>
                                        <p>
                                            <em>
                                                <strong>Proyectos:</strong>
                                            </em>
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Creación de una API microservicio antifraude para reducir
                                                    la probabilidad de fraude en pagos con tarjeta de crédito.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Desarrollo de una integración con Débitos Automáticos de
                                                    Payway para introducir un producto de cobro por
                                                    suscripción y cumplir con normativas PCI.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Desarrollo de una integración con{" "}
                                                    <a href="https://risk.lexisnexis.com/products/threatmetrix">
                                                        ThreatMetrix
                                                    </a>
                                                    para mejorar la prevención de fraude.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Refactorización del código core del sistema para cumplir
                                                    con regulaciones PCI y proteger datos de clientes.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Refactorización del código core del sistema y mejora del
                                                    90% en el tiempo de respuesta de consultas de operaciones
                                                    con tarjetas.
                                                </p>
                                            </li>
                                        </ul>
                                        <p>
                                            <em>
                                                <strong>Tech Stack:</strong>
                                            </em>
                                        </p>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Lenguajes</strong>
                                                    </td>
                                                    <td>
                                                        PHP 8.2, PHP 7.4, python3.11, JavaScript ES6, SQL.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Frameworks/librerías</strong>
                                                    </td>
                                                    <td>Laravel 8, Laravel 9, Flask 3.0.</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Ambiente de Desarrollo</strong>
                                                    </td>
                                                    <td>Docker 24, PostgreSQL 12.12, Apache 2.4.</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Plataformas</strong>
                                                    </td>
                                                    <td>AWS, Payway, ThreatMetrix.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h3 className="title is-5">
                                            Desarrollador Full Stack en Datasocial SL, España
                                        </h3>
                                        <h4 className="subtitle is-6 has-text-grey-light">
                                            Febrero 2021 - Mayo 2021
                                        </h4>
                                        <p>
                                            Agencia especializada en{" "}
                                            <a href="https: //www.hubspot.es/">Hubspot</a>,líder en
                                            soluciones integrales de ventas, marketing y servicio al
                                            cliente.
                                        </p>
                                        <p>
                                            <em>
                                                <strong>Proyectos:</strong>
                                            </em>
                                        </p>
                                        <ul>
                                            <li>
                                                Integración de servicios API de{" "}
                                                <a href="https://dialogagroup.com/es/">Dialoga España</a>
                                                para facilitar llamadas a contactos desde el sitio web de
                                                HubSpot.
                                            </li>
                                        </ul>
                                        <p>
                                            <em>
                                                <strong>Tech Stack:</strong>
                                            </em>
                                        </p>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Lenguajes</strong>
                                                    </td>
                                                    <td>JavaScript ES6, Python 3.10</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Frameworks/librerías</strong>
                                                    </td>
                                                    <td>Node.js 13.14, Express.js 4.17, Bootstrap 4.6.</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Ambiente de Desarrollo</strong>
                                                    </td>
                                                    <td>Docker 20.10, Virtualbox 6.1.</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Plataformas</strong>
                                                    </td>
                                                    <td>AWS y Hubspot</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h3 className="title is-5">
                                            Desarrollador Full Stack en Hotel Wyndham Concorde, Venezuela
                                        </h3>
                                        <h4 className="subtitle is-6 has-text-grey-light">
                                            Mayo 2019 - Febrero 2021
                                        </h4>
                                        <p>
                                            Lideré proyectos innovadores en el lujoso resort 5 estrellas
                                            Wyndham Concorde Isla Margarita.
                                        </p>
                                        <p>
                                            <em>
                                                <strong>Proyectos:</strong>
                                            </em>
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Desarrollo del sistema "Club Concorde" para gestionar
                                                    membresías, mantener la operación durante la pandemia y
                                                    generar informes de ventas.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Desarrollo de Lector de código QR para tarjetas de
                                                    membresías del Club Concorde, asegurando el control de
                                                    acceso durante la pandemia de COVID-19.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Creación de un chatbot mediante la API de{" "}
                                                    <a href="https://www.twilio.com/">Twilio</a>para facilitar
                                                    reservas y servicios del hotel.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Desarrollo de sistema de códigos QR en brazaletes para
                                                    eventos "Reserva Fiestas", reduciendo los tiempos de
                                                    espera de los clientes.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Desarrollo de una herramienta de email marketing para
                                                    captar y fidelizar clientes mediante envíos masivos de
                                                    correos electrónicos.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Creación del plugin WordPress "Reserva Fiestas" para la
                                                    venta de boletos en línea, agilizando el proceso de venta
                                                    de boletería para eventos.
                                                </p>
                                            </li>
                                        </ul>
                                        <p>
                                            <em>
                                                <strong>Tech Stack:</strong>
                                            </em>
                                        </p>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Lenguajes</strong>
                                                    </td>
                                                    <td>PHP 7.4, Python 3.10, JavaScript ES6, SQL</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Frameworks/librerías</strong>
                                                    </td>
                                                    <td>
                                                        Laravel 5.8, Laravel 6, Flask 1.1, Bulma 0.9, jQuery
                                                        3.4.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Ambiente de Desarrollo</strong>
                                                    </td>
                                                    <td>
                                                        Apache 2.4, Ngrok 2.3, MySQL 8.0, WordPress 5.8, Ubuntu
                                                        on WSL 2.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Plataformas</strong>
                                                    </td>
                                                    <td>GoDaddy, Twilio, Dreamhost, MailGun.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h3 className="title is-5">
                                            Desarrollador Full Stack en Hotel Margarita Real, Venezuela
                                        </h3>
                                        <h4 className="subtitle is-6 has-text-grey-light">
                                            Septiembre 2016 - Mayo 2019
                                        </h4>
                                        <p>
                                            Desarrollé proyectos para mejorar la operatividad del hotel y
                                            la experiencia de los huéspedes.
                                        </p>
                                        <p>
                                            <em>
                                                <strong>Proyectos:</strong>
                                            </em>
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Herramienta automatizada para monitorear estaciones de
                                                    trabajo del personal, brindando control sobre el uso de
                                                    computadoras y dispositivos en la red del hotel.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Sistema de registro y asignación de habitaciones de
                                                    huéspedes para mejorar el check-in y check-out.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Desarrollo de scripts de automatización para respaldar
                                                    bases de datos, asegurando la integridad de los datos de
                                                    la empresa.
                                                </p>
                                            </li>
                                        </ul>
                                        <p>
                                            <em>
                                                <strong>Tech Stack:</strong>
                                            </em>
                                        </p>
                                        <table className="tableh">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Lenguajes</strong>
                                                    </td>
                                                    <td>PHP 7.4, Python 3.8, JavaScript ES6, SQL</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Frameworks/librerías</strong>
                                                    </td>
                                                    <td>
                                                        Bulma 0.9, jQuery 3.4,{" "}
                                                        <a href="https://github.com/Art-of-WiFi/UniFi-API-client">
                                                            UniFi API client 5.0
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Ambiente de Desarrollo</strong>
                                                    </td>
                                                    <td>Apache 2.4, MySQL 8.0, Ubuntu 18.04</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Plataformas</strong>
                                                    </td>
                                                    <td>GoDaddy</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h3 className="title is-5">
                                            Desarrollador Full Stack en Voltium,C.A, Venezuela
                                        </h3>
                                        <h4 className="subtitle is-6 has-text-grey-light">
                                            Septiembre 2012 - Mayo 2016
                                        </h4>
                                        <p>Tienda de venta de productos de tecnología.</p>
                                        <p>
                                            <em>Proyecto</em>:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Desarrollo de sitio web e-commerce para la venta de
                                                    productos de tecnología, logrando así darle presencia en
                                                    internet a la empresa.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Desarrollo de sistema web de administración de inventario,
                                                    permitiendo al personal de la empresa llevar un control de
                                                    los productos en stock de una manera más eficiente.{" "}
                                                </p>
                                            </li>
                                        </ul>
                                        <p>
                                            <em>
                                                <strong>Tech Stack:</strong>
                                            </em>
                                        </p>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Lenguajes</strong>
                                                    </td>
                                                    <td>PHP 5.3, SQL</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Frameworks/librerías</strong>
                                                    </td>
                                                    <td>jQuery 3.4</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Ambiente de Desarrollo</strong>
                                                    </td>
                                                    <td>
                                                        Apache 2.4, PHPMyAdmin 4.6, MySQL 5.7, Ubuntu 16.04
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Plataformas</strong>
                                                    </td>
                                                    <td>GoDaddy</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h2 className="title is-4">• Formación Académica</h2>
                                    <div className="ml-4">
                                        <h3 className="title is-5">Formación Universitaria</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Nombre</th>
                                                    <th>Universidad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Ingeniería de Sistemas</td>
                                                    <td>Instituto Politécnico Santiago Mariño</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h3 className="title is-5">Formación Complementaria</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Nombre</th>
                                                    <th>Institución</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="https://api.educacionit.com/pdf/certificados/ronald-britos-819848/63453">
                                                            Desarrollo Seguro
                                                        </a>
                                                    </td>
                                                    <td>Educacion IT</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-cabec80b-c848-458f-b791-1ad21c1e5f68.pdf">
                                                            Desarrollo de Software Seguro
                                                        </a>
                                                    </td>
                                                    <td>Udemy</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="https://api.alumni.education/course/certificate/generate?hash=1b6bca49-b1cd-4f54-acae-bc9453695fc3&format=pdf">
                                                            Angular13
                                                        </a>
                                                    </td>
                                                    <td>Udemy</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="https://www.freecodecamp.org/espanol/certification/ronaldrbb/front-end-development-libraries">
                                                            FrontEnd Development Libraries
                                                        </a>
                                                    </td>
                                                    <td>FreeCodeCamp</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="https://www.freecodecamp.org/espanol/certification/ronaldrbb/javascript-algorithms-and-data-structures">
                                                            JavaScriptAlgorithms and Data Structures
                                                        </a>
                                                    </td>
                                                    <td>FreeCodeCamp</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="https://www.freecodecamp.org/espanol/certification/ronaldrbb/responsive-web-design">
                                                            ResponsiveWeb Design
                                                        </a>
                                                    </td>
                                                    <td>FreeCodeCamp</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="content">
                                    <h2 className="title is-5">Detalles</h2>
                                    <ul style={{ listStyle: "none" }}>
                                        <li>CABA, Argentina</li>
                                        <li>
                                            <a href="mailto:ronaldbello2@gmail.com">
                                                ronaldbello2@gmail.com
                                            </a>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default App;
