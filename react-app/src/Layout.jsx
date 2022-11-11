import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import Home from './pages/Home';
import Places from './pages/Places';

function Layout() {
    return (
        <>
            <Header />
            <div className="container">
                <main>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/places' element={<Places />}/>
                        <Route path='*' element={<h1>404</h1>}/>
                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Layout;