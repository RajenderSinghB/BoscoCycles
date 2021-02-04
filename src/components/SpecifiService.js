import React from 'react';

function SpecifiService() {
    return (
        <div
            className='row  py-5'
            style={{ background: '#f5f5f5', height: '100vh' }}>
            <h1
                className='my-5'
                style={{
                    color: 'rgb(234, 13, 41)',
                    fontWeight: '800',
                }}>
                SPECIFIC SERVICE
            </h1>
            <div
                class='d-flex justify-content-start justify-content-md-around align-items-start'
                style={{ overflowX: 'auto' }}>
                <div className='row align-items-center'>
                    <div className='px-3 py-2'>
                        <div className='gifHolder g4'></div>
                        <div className='gifLabel my-5'>
                            <p
                                style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                }}>
                                BRAKE BLEEDING
                            </p>
                            <p
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: 'blue',
                                    lineHeight: 0,
                                }}>
                                READ MORE
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='px-3 py-2'>
                        <div className='gifHolder g2'></div>
                        <div className='gifLabel'>
                            <div className='gifLabel my-5'>
                                <p
                                    style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                    }}>
                                    WHEEL TRUING
                                </p>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: 'blue',
                                        lineHeight: 0,
                                    }}>
                                    READ MORE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='px-3 py-2'>
                        <div className='gifHolder g3'></div>
                        <div className='gifLabel'>
                            <div className='gifLabel my-5'>
                                <p
                                    style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                    }}>
                                    SUSPENSION SERVICE
                                </p>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: 'blue',
                                        lineHeight: 0,
                                    }}>
                                    READ MORE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='px-3 py-2'>
                        <div className='gifHolder g1'></div>
                        <div className='gifLabel'>
                            <div className='gifLabel my-5'>
                                <p
                                    style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                    }}>
                                    DRIVE TRAIN SERVICE
                                </p>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: 'blue',
                                        lineHeight: 0,
                                    }}>
                                    READ MORE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecifiService;
