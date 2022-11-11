import React from 'react';

import { ReactComponent as Logo} from './../../assets/icons/logo.svg'
function Header() {
    return (
        <header id="site-header">
            <div className="logo">
                <Logo />
            </div>
            <div className="menu">
                <div className="wrapper">
                    <div className="links">
                        <ul>
                            <li>Home</li>
                            <li>Place to stay</li>
                            <li>NFTs</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className="call-to-action">
                        <div className="btn btn-primary">Connect wallet</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;