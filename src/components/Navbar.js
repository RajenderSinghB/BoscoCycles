import React from 'react';
import logo from '../images/logo_sample.png';

function Navbar() {
    return (
        <nav
            class='navbar navbar-expand-lg navbar-light py-0'
            style={{
                position: 'absolute',
                top: 0,
                left: 10,
                right: 20,
                zIndex: 99999,
            }}>
            <a class='navbar-brand py-0' href='/'>
                <img src={logo} alt='' width='250' height='100' />
            </a>
            <button
                class='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav ms-auto  mb-lg-0 align-items-center'>
                    <li class='nav-item'>
                        <a class='nav-link ' aria-current='page' href='#'>
                            ABOUT US
                        </a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link ' href='#services'>
                            SERVICES
                        </a>
                    </li>

                    <li class='nav-item'>
                        <a
                            class='nav-link '
                            href='#contact'
                            tabindex='-1'
                            aria-disabled='true'>
                            CONTACT
                        </a>
                    </li>

                    <button
                        type='button'
                        class='btn '
                        style={{
                            background: 'rgb(234, 13, 41)',
                            color: 'white',
                            fontSize: '1.125rem',
                            fontWeight: 600,
                            padding: '0.5rem 1.5rem',
                            borderRadius: 20,
                            fontFamily: 'Poppins, sans-serif',
                        }}>
                        Book A Service
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
