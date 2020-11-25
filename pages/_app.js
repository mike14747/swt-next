// import App from 'next/app';
import PropTypes from 'prop-types';
import Loading from '../components/loading';
import { useState } from 'react';
import Router from 'next/router';
import SettingsContext from '../context/settingsContext';
import NavbarContext from '../context/NavbarContext';

import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

import '../styles/my_style.css';
import '../styles/app_style.css';

export default function MyApp({ settings, storesInSchedule, Component, pageProps, error }) {
    // console.log('settings in _app.js:', settings);
    // console.log('navbarSettings in _app.js:', navbarSettings);

    const [loading, setLoading] = useState(false);

    Router.onRouteChangeStart = () => setLoading(true);
    Router.onRouteChangeComplete = () => setLoading(false);
    Router.onRouteChangeError = () => setLoading(false);

    return (
        <div id="app-wrapper" className="container border bg-white">
            <SettingsContext.Provider value={settings}>
                <Header />
                <NavbarContext.Provider value={storesInSchedule}>
                    <Navbar />
                </NavbarContext.Provider>
                <div id="main-container">
                    {loading &&
                        <Loading />
                    }
                    <Component {...pageProps} />
                </div>
                <Footer />
            </SettingsContext.Provider>
        </div>
    );
}

MyApp.propTypes = {
    settings: PropTypes.object,
    storesInSchedule: PropTypes.array,
    Component: PropTypes.func,
    pageProps: PropTypes.any,
    error: PropTypes.object,
};

MyApp.getInitialProps = async ({ ctx: { req } }) => {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    const settingsResponse = await fetch(`${protocol}://${host}/api/settings`);
    const settingsData = await settingsResponse.json();

    const navbarResponse = await fetch(`${protocol}://${host}/api/schedules/navbar/24`);
    const navbarData = await navbarResponse.json();

    return { settings: settingsData, storesInSchedule: navbarData };
};
