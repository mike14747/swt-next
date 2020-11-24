// import App from 'next/app';
import PropTypes from 'prop-types';
import Loading from '../components/loading';
import { useState } from 'react';
import Router from 'next/router';

import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

import '../styles/my_style.css';
import '../styles/app_style.css';

export default function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);

    Router.onRouteChangeStart = () => setLoading(true);
    Router.onRouteChangeComplete = () => setLoading(false);
    Router.onRouteChangeError = () => setLoading(false);

    return (
        <div id="app-wrapper" className="container border bg-white">
            <Header />
            <Navbar />
            <div id="main-container">
                {loading &&
                    <Loading />
                }
                <Component {...pageProps} />
            </div>
            <Footer />
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
    Component: PropTypes.func,
    pageProps: PropTypes.any,
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
