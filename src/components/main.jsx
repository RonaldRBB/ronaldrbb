import React from 'react';
import Header from './header';
import Aside from './aside';
import Cv from '../services/cv';
import Content from './content';

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
            const cvData = await cv.getData();
            console.log(cvData);
            this.setState({ cv: cvData });
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
                        <Content cv={cv} />
                    </div>
                    <div className="column is-3">
                        <Aside cv={cv} />
                    </div>
                </div>
            </>
        );
    }
}
