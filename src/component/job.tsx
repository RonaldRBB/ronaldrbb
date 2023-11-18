import React from "react";
class Job extends React.Component {
    render() {
        return (<>
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
        </>)
    }
}
export default Job