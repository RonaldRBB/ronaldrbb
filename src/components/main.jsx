import React from 'react';
import Header from './header';
import Aside from './aside';
import Cv from '../services/cv';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cv: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.getCVData();
        }, 500);
    }
    async getCVData() {
        try {
            const cv = new Cv();
            const jsonData = await cv.getData();
            this.setState({ cv: jsonData });
        } catch (error) {
            console.error('Error handling JSON data:', error);
        }
    }
    render() {
        const { cv } = this.state;
        if (!cv) {
            return <div className="pageloader is-active"><span className="title">Loading</span></div>;
        }
        return (
            <>
                <div className="pageloader"><span className="title">Loading</span></div>
                <div className="columns is-multiline is-mobile">
                    <div className="column is-12">
                        <Header cv={cv} />
                    </div>
                    <div className="column is-9">
                        <p>content</p>
                    </div>
                    <div className="column is-3">
                        <Aside />
                    </div>
                </div>
            </>
        );
    }
}
