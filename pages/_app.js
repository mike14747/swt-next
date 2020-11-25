// import App from 'next/app';
import PropTypes from 'prop-types';
import Loading from '../components/loading';
import { useState } from 'react';
import Router from 'next/router';
import SettingsContext from '../context/settingsContext';

import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

import '../styles/my_style.css';
import '../styles/app_style.css';

export default function MyApp({ settings, Component, pageProps, error }) {
    // console.log('settings in _app.js:', settings);

    const [loading, setLoading] = useState(false);

    Router.onRouteChangeStart = () => setLoading(true);
    Router.onRouteChangeComplete = () => setLoading(false);
    Router.onRouteChangeError = () => setLoading(false);

    return (
        <div id="app-wrapper" className="container border bg-white">
            <SettingsContext.Provider value={settings}>
                <Header />
                <Navbar />
                <div id="main-container">
                    {loading &&
                        <Loading />
                    }
                    <Component {...pageProps} />
                </div>
                <Footer />
            </SettingsContext.Provider>

            <style jsx>{`
                #app-wrapper {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                
                #main-container {
                    flex: 1;
                }
            `}</style>
        </div>
    );
}

MyApp.propTypes = {
    settings: PropTypes.object,
    Component: PropTypes.func,
    pageProps: PropTypes.any,
    error: PropTypes.object,
};

MyApp.getInitialProps = async ({ ctx: { req } }) => {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    const settingsResponse = await fetch(`${protocol}://${host}/api/settings`);
    if (settingsResponse.ok) {
        const data = await settingsResponse.json();
        return { settings: data };
    } else {
        const error = { statusCode: settingsResponse.status, message: 'An error occurred trying to fetch data!' };
        return { error: { error } };
    }
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

/*
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();
*/
