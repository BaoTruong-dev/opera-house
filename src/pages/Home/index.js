import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from './Carousel/Carousel';
import News from './News/News';
import Slider from './Slider/Slider';
import History from './History/History';
import About from './About/About';
import Partner from './Partner/Partner';
import Footer from '../../components/Footer/Footer';


export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Slider />
            <Carousel />
            <News />
            <About />
            <History />
            <Partner />
            <Footer />
        </div>
    );
}
