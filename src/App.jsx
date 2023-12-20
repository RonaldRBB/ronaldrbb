import Main from "./components/main";
import React from 'react';
export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <section class="section has-background-link-light">
                    <div class="container ">
                        <div class="columns is-centered">
                            <div class="column box has-background-white is-8 p-6">
                                <Main />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
