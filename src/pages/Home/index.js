import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import About from './About/About';
import Carousel from './Carousel/Carousel';
import History from './History/History';
import News from './News/News';
import Slider from './Slider/Slider';


export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Slider />
            <Carousel />
            <News />
            <About />
            <History />
            <Footer />
        </div>
    );
}
