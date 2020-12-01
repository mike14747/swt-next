import PropTypes from 'prop-types';
import Loading from '../components/loading';
import { useState } from 'react';
import Router from 'next/router';
import NavbarContext from '../context/navbarContext';
import HeaderContext from '../context/headerContext';

import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

import '../styles/my_style.css';
import '../styles/app_style.css';

export default function MyApp({ Component, pageProps, headerData, navbarData }) {
    const [loading, setLoading] = useState(false);

    Router.onRouteChangeStart = () => setLoading(true);
    Router.onRouteChangeComplete = () => setLoading(false);
    Router.onRouteChangeError = () => setLoading(false);

    return (
        <div id="app-wrapper" className="container border bg-white">
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
        </div>
    );
}

MyApp.propTypes = {
    navbarData: PropTypes.object,
    headerData: PropTypes.object,
    Component: PropTypes.func,
    pageProps: PropTypes.any,
};

MyApp.getInitialProps = async () => {
    const apiUrl = process.env.NODE_ENV === 'development' ? process.env.DEV_API_URL : process.env.PRODUCTION_API_URL;
    try {
        // const settingsResponse = await fetch('https://skeeballworldtour.mikegullo.com/api/settings');
        const settingsResponse = await fetch(`${apiUrl}/api/settings`);
        const settingsJson = await settingsResponse.json();
        const settings = settingsJson[0] || {};

        const headerData = {
            textBoxHeading: settings.text_box_heading,
            textBoxText: settings.text_box_text,
        };

        // const navbarResponse = await fetch(`https://skeeballworldtour.mikegullo.com/api/schedules/navbar/${settings.current_season_id}`);
        const navbarResponse = await fetch(`${apiUrl}/api/schedules/navbar/${settings.current_season_id}`);
        const navbarJson = await navbarResponse.json();
        let storesInSchedule = [];
        if (navbarJson && navbarJson.length > 0) {
            storesInSchedule = navbarJson.map(storeDiv => (
                {
                    id: storeDiv.store_division,
                    text: storeDiv.store_city + ' (' + storeDiv.day_name + ')',
                    href: '/' + storeDiv.store_id + '/' + storeDiv.division_id,
                }
            ));
        }
        const navbarData = {
            storesInSchedule,
            displaySchedule: settings.display_schedule,
        };

        return { navbarData, headerData };
    } catch (error) {
        console.log('catch error:', error.message);
        return { navbarData: {}, headerData: null };
    }
};
