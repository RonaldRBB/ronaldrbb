import React from 'react';
import Header from './header';
import Aside from './aside';
export default class Main extends React.Component {
    render() {
        return (
            <div className="columns is-multiline is-mobile">
                <div className="column is-12">
                    <Header />
                </div>
                <div className="column is-9">
                    <p>content</p>
                </div>
                <div className="column is-3">
                    <Aside />
                </div>
            </div>
        );
    }
}

