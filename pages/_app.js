import App from 'next/app';
import PropTypes from 'prop-types';
import Loading from '../components/loading';
import { useState } from 'react';
import Router from 'next/router';
import SettingsContext from '../context/settingsContext';
import NavbarContext from '../context/navbarContext';
import HeaderContext from '../context/headerContext';
import CurrentSeasonContext from '../context/currentSeasonContext';

import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

import '../styles/my_style.css';
import '../styles/app_style.css';

export default function MyApp({ Component, pageProps, settings, currentSeasonData, headerData, navbarData }) {
    // console.log('settings in _app.js:', settings);
    // console.log('navbarSettings in _app.js:', navbarSettings);

    const [loading, setLoading] = useState(false);

    Router.onRouteChangeStart = () => setLoading(true);
    Router.onRouteChangeComplete = () => setLoading(false);
    Router.onRouteChangeError = () => setLoading(false);

    return (
        <div id="app-wrapper" className="container border bg-white">
            <CurrentSeasonContext.Provider value={currentSeasonData}>
                <SettingsContext.Provider value={settings}>
                    <HeaderContext.Provider value={headerData}>
                        <Header />
                    </HeaderContext.Provider>
                    <NavbarContext.Provider value={navbarData}>
                        <Navbar />
                    </NavbarContext.Provider>
                    <div id="main-container">
                        {loading
                            ? <Loading />
                            : <Component {...pageProps} />
                        }
                    </div>
                    <Footer />
                </SettingsContext.Provider>
            </CurrentSeasonContext.Provider>
        </div>
    );
}

MyApp.propTypes = {
    settings: PropTypes.object,
    currentSeasonData: PropTypes.object,
    navbarData: PropTypes.object,
    headerData: PropTypes.object,
    Component: PropTypes.func,
    pageProps: PropTypes.any,
    error: PropTypes.object,
};

MyApp.getInitialProps = async ({ ctx: { req } }) => {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    const settingsResponse = await fetch(`${protocol}://${host}/api/settings`);
    const settingsJson = await settingsResponse.json();

    const currentSeasonData = { currentSeasonId: settingsJson.current_season_id };
    const headerData = {
        textBoxHeading: settingsJson.text_box_heading,
        textBoxText: settingsJson.text_box_text,
    };

    const navbarResponse = await fetch(`${protocol}://${host}/api/schedules/navbar/${settingsJson.current_season_id}`);
    const navbarData = await navbarResponse.json();
    navbarData.displaySchedule = settingsJson.display_schedule;

    return { currentSeasonData, navbarData, headerData };
};
