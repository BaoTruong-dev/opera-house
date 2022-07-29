import React from 'react';
import TextStroke from '../../../components/TextStroke/TextStroke';
import './About.scss';
import about from '../../../assets/images/about.png';
export default function About() {
    return (
        <div className='about container'>
            <TextStroke stroke="about us">
                Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments.
            </TextStroke>
            <div className="about__text">
                <div></div>
                <TextStroke normal="Architecture" position="right">
                    Immerse yourself in the culture of Vietnam's ethnic groups through the wonderful melodies performed by featured musical instruments.
                </TextStroke>
            </div>
            <div className="about__img">
                <div className="img">
                    <img src={about} alt="about_image" />
                </div>
            </div>

        </div>
    );
}
