import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from './../../assets/icons/logo.svg'
import { ReactComponent as FacebookIcon} from './../../assets/icons/facebook.svg'
import { ReactComponent as InstagramIcon} from './../../assets/icons/instagram.svg'
import { ReactComponent as TwitterIcon} from './../../assets/icons/twitter.svg'
function Footer() {
    return (
        <footer id="site-footer">
            <div className="wrapper">
                <header>
                    <div className="logo">
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                    <div className="socials">
                        <span><FacebookIcon /></span>
                        <span><InstagramIcon /></span>
                        <span><TwitterIcon /></span>
                    </div>
                </header>
                <div className="community">
                    <span>Community</span>
                    <span>NTF</span>
                    <span>Tokens</span>
                    <span>Landlords</span>
                    <span>Discord</span>
                </div>
                <div className="places">
                    <span><Link to='places'>Places</Link></span>
                    <span>Castle</span>
                    <span>Farms</span>
                    <span>Beach</span>
                    <span>Learn more</span>
                </div>
                <div className="about">
                    <span>About us</span>
                    <span>Road map</span>
                    <span>Creators</span>
                    <span>Career</span>
                    <span>Contact us</span>
                </div>
            </div>
            <div className="copyright">
                <span>&copy; {new Date().getFullYear()} Metabnb</span>
            </div>
        </footer>
    );
}

export default Footer;