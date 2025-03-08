import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { MainContainer } from '../src/assets/style/layout/mainStyle'

// Common SCSS
import './assets/scss/index.scss';

// Common Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

// Routes
import AppRoutes from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <MainContainer className="App-container">
                <AppRoutes />                
            </MainContainer>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
