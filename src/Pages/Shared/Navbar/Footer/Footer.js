import React from 'react';
import footer from '../../../../assets/images/footer.png';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}
        >
            <div className="footer p-10 ">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </nav>
                <nav>
                    <header className="footer-title">ORAL HEALTH</header>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>

                </nav>
                <nav>
                    <header className="footer-title">OUR ADDRESS</header>
                    <a className="link link-hover">MohaKhali 1212 Dhaka, Bangladesh</a>

                </nav>
            </div>
            <div>

                <aside>
                    <p className='text-center'>Copyright © {year} - All right Reserved </p>
                </aside>

            </div>
        </footer>
    );
};

export default Footer;