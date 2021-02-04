import React from 'react';
import Navbar from './Navbar';
import VideoPlayer from 'react-video-js-player';

import vid from '../images/vid1.mp4';
function Header() {
    const videoSrc = vid;

    return (
        <div className='' style={{ height: '100vh' }}>
            <Navbar />
            <div
                id='carouselExampleControls'
                class='carousel slide'
                data-bs-ride='carousel'>
                <div class='carousel-inner'>
                    <div class='carousel-item active'>
                        <VideoPlayer
                            src={videoSrc}
                            type='video/mp4'
                            width='auto'
                            height='auto'
                            autoplay={true}
                            preload={true}
                        />
                    </div>
                    <div class='carousel-item'>
                        <div class='header'></div>
                    </div>
                </div>
                <a
                    class='carousel-control-prev'
                    href='#carouselExampleControls'
                    role='button'
                    data-bs-slide='prev'>
                    <span
                        class='carousel-control-prev-icon'
                        aria-hidden='true'></span>
                    <span class='visually-hidden'>Previous</span>
                </a>
                <a
                    class='carousel-control-next'
                    href='#carouselExampleControls'
                    role='button'
                    data-bs-slide='next'>
                    <span
                        class='carousel-control-next-icon'
                        aria-hidden='true'></span>
                    <span class='visually-hidden'>Next</span>
                </a>
            </div>
        </div>
    );
}

export default Header;
