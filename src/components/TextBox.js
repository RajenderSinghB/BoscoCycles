import React from 'react';
import img2 from '../images/2.gif';
import img3 from '../images/3.gif';
import img6 from '../images/6.gif';
import time from '../images/time.gif';

function TextBox({ text, subText, name }) {
    return (
        <div className='row my-4 text-start align-items-center'>
            <div className='col-2'>
                {name === 'img2' ? (
                    <img src={img2} height='75%' width='75%' />
                ) : name === 'img3' ? (
                    <img src={img3} height='75%' width='75%' />
                ) : name === 'img6' ? (
                    <img src={img6} height='75%' width='75%' />
                ) : name === 'time' ? (
                    <img src={time} height='75%' width='75%' />
                ) : (
                    <img src={name} height='75%' width='75%' />
                )}
            </div>
            <div className='col-10'>
                <p className='mainText'>{text}</p>
                <p className='subText'>{subText}</p>
            </div>
        </div>
    );
}

export default TextBox;
