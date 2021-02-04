import React from 'react';

function Testimonial() {
    return (
        <div className='py-5' style={{ background: 'white', height: '50vh' }}>
            <h1
                className='my-5'
                style={{
                    color: 'rgb(234, 13, 41)',
                    fontWeight: '800',
                }}>
                TESTIMONIAL
            </h1>
            <div
                id='carouselExampleControls'
                class='carousel slide items-align-center'
                data-bs-ride='carousel'>
                <div class='carousel-inner'>
                    <div class='carousel-item active'>
                        <p
                            style={{
                                fontStyle: 'italic',
                                fontSize: '1.125rem',
                            }}>
                            Thanks for repairing my bicycle the work you did was
                            amazing now my bicycle run even more smoothly then
                        </p>
                        <p
                            style={{
                                fontStyle: 'italic',
                                fontSize: '1.125rem',
                            }}>
                            before it was. Thank you.
                        </p>
                    </div>
                    <div class='carousel-item'>
                        <p
                            style={{
                                fontStyle: 'italic',
                                fontSize: '1.125rem',
                            }}>
                            Thanks for repairing my bicycle the work you did was
                            amazing now my bicycle run even more smoothly the
                        </p>
                        <p
                            style={{
                                fontStyle: 'italic',
                                fontSize: '1.125rem',
                            }}>
                            before it was. Thank you.
                        </p>
                    </div>
                    <div class='carousel-item'>
                        <p
                            style={{
                                fontStyle: 'italic',
                                fontSize: '1.125rem',
                            }}>
                            Thanks for repairing my bicycle the work you did was
                            amazing now my bicycle run even more smoothly then
                        </p>
                        <p
                            style={{
                                fontStyle: 'italic',
                                fontSize: '1.125rem',
                            }}>
                            before it was. Thank you.
                        </p>
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

export default Testimonial;
