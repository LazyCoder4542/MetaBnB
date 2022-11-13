import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link, NavLink } from 'react-router-dom';
import ConnectWallet from '../atoms/ConnectWallet';
import { ReactComponent as Logo} from './../../assets/icons/logo.svg'
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header id="site-header">
            <div className="logo">
                <Link to='/'>
                    <Logo />
                </Link>
            </div>
            <div className="menu" data-isopen={isMenuOpen}>
                <div
                className="hamburger"
                onClick={()=> {
                    setIsMenuOpen(!isMenuOpen)
                }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="wrapper">
                    <div className="links">
                        <ul>
                            <li><NavLink to='/' end>Home</NavLink></li>
                            <li><NavLink to='places'>Place to stay</NavLink></li>
                            <li>NFTs</li>
                            <li>Community</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="call-to-action">
                <div
                className="btn btn-primary"
                onClick={()=> {
                    const smth = ReactDOM.createRoot(document.getElementById('a'))
                    smth.render(<ConnectWallet root={smth} />)
                }}
                >Connect wallet</div>
            </div>
        </header>
    );
}

export default Header;