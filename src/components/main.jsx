import React from 'react';
import Header from './header';
import Aside from './aside';
import Cv from '../services/cv';
import Content from './content';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'es',
            cv: null
        };
        this.toggleLang = this.toggleLang.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.getCVData();
        }, 500);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.lang !== this.state.lang) {
            this.getCVData();
        }
    }
    toggleLang() {
        this.setState(prevState => ({
            lang: prevState.lang === 'es' ? 'en' : 'es'
        }));
    }
    async getCVData() {
        try {
            const cv = new Cv();
            const cvData = await cv.getData(this.state.lang);
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
                {/* <div className="pageloader"><span className="title">Loading</span></div> */}
                <div className="columns is-multiline is-mobile">
                    <div className="column is-12"><Header cv={cv} lang={this.state.lang} toggleLang={this.toggleLang} /></div>
                    <div className="column is-9"><Content cv={cv} lang={this.state.lang} /></div>
                    <div className="column is-3"><Aside cv={cv} lang={this.state.lang} /></div>
                </div>
            </>
        );
    }
}
