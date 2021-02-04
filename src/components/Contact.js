import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import FormikControl from './FormikControl';
import { useFormik } from 'formik';

function Contact() {
    const phoneSchema = Yup.string().phone('IN').required();

    const initialValues = {
        email1: '',
        phone1: '',
        query1: '',
    };

    const validationSchema = Yup.object({
        email1: Yup.string().email('Invalid Email').required('Required'),
        phone1: Yup.string()
            .required('Required')
            .matches(phoneSchema, 'Phone number is not valid'),
        query1: Yup.string().required('Required'),
    });

    const onSubmit = (values) => {
        console.log('Form data', values);
    };
    return (
        <div
            className='row justify-content-center align-items-center text-align-start'
            id='contact'
            style={{
                height: '70vh',
                background: '#202a33',
                fontFamily: 'Poppins, sans-serif',
            }}>
            <div className='col-md-4 mt-4'>
                <h2
                    style={{
                        color: 'white',
                        fontWeight: '600',
                    }}>
                    MAKE AN ENQUIRY
                </h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {(formik) => {
                        return (
                            <Form className='my-4'>
                                <FormikControl
                                    control='input'
                                    type='email'
                                    name='email1'
                                    class='form-control1 form-control-sm my-3'
                                    id='colFormLabelSm'
                                    placeholder='Email: xyz@gmail.com'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    name='phone1'
                                    class='form-control1 form-control-sm my-3'
                                    id='colFormLabelSm'
                                    placeholder='+91 8073734256'
                                />
                                <FormikControl
                                    control='input'
                                    type='text'
                                    name='query1'
                                    class='form-control1 form-control-sm my-3'
                                    id='colFormLabelSm'
                                />
                                <button
                                    className='btn btn-danger my-5  px-4'
                                    style={{
                                        borderRadius: '25px',
                                        fontWeight: '700',
                                        fontSize: '1.25rem',
                                    }}
                                    type='submit'
                                    disabled={!formik.isValid}>
                                    SEND MESSAGE
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-5'>
                <div
                    id='carouselExampleControls1'
                    class='carousel slide'
                    data-bs-ride='carousel'>
                    <div class='carousel-inner'>
                        <div class='carousel-item active'>
                            <div class='bg bg1'></div>
                        </div>
                        <div class='carousel-item'>
                            <div class='bg bg2'></div>
                        </div>
                        <div class='carousel-item'>
                            <div class='bg bg3'></div>
                        </div>
                        <div class='carousel-item'>
                            <div class='bg bg4'></div>
                        </div>
                        <div class='carousel-item'>
                            <div class='bg bg5'></div>
                        </div>
                        <div class='carousel-item'>
                            <div class='bg bg6'></div>
                        </div>
                        <div class='carousel-item'>
                            <div class='bg bg7'></div>
                        </div>
                    </div>
                    <a
                        class='carousel-control-prev'
                        href='#carouselExampleControls1'
                        role='button'
                        data-bs-slide='prev'>
                        <span
                            class='carousel-control-prev-icon'
                            aria-hidden='true'></span>
                        <span class='visually-hidden'>Previous</span>
                    </a>
                    <a
                        class='carousel-control-next'
                        href='#carouselExampleControls1'
                        role='button'
                        data-bs-slide='next'>
                        <span
                            class='carousel-control-next-icon'
                            aria-hidden='true'></span>
                        <span class='visually-hidden'>Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
