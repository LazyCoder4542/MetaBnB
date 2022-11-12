import React from 'react';
import { ReactComponent as MBToken } from './../assets/icons/mb-token.svg'
import { ReactComponent as Metamask } from './../assets/icons/metamask.svg'
import { ReactComponent as OpenSea } from './../assets/icons/opensea.svg'
import Search from '../components/atoms/Search';
import './Home.css'
function Home() {
    return (
        <>
            <section id='intro'>
                <div className="wrapper">
                    <div className="tagline">
                        <header>
                            <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                        </header>
                        <Search />
                    </div>
                    <div className="hero">
                        <img src="/assets/images/places/1.png" alt="" />
                        <img src="/assets/images/places/2.png" alt="" />
                        <img src="/assets/images/places/3.png" alt="" />
                        <img src="/assets/images/places/4.png" alt="" />
                    </div>
                </div>
                <div className="sponsors">
                    <div>
                        <MBToken />
                    </div>
                    <div>
                        <Metamask />
                    </div>
                    <div>
                        <OpenSea />
                    </div>
                </div>
            </section>
            <section id='NFTs'>
                <div className="wrapper">
                    <div className="container1">
                        <header>
                            <h1>Metabnb NFTs</h1>
                            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                        </header>
                        <div className="buttons">
                            <div className="btn btn-secondary">Learn more</div>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="illustrations">
                            <img src="/assets/images/illustrations/img3.png" alt="" />
                            <img src="/assets/images/illustrations/img2.png" alt="" />
                            <img src="/assets/images/illustrations/img1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;