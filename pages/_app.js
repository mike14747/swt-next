import PropTypes from 'prop-types';

import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

import '../styles/my_style.css';
import '../styles/app_style.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <div id="app-wrapper" className="container border bg-white">
            <Header />
            <Navbar />
            <div id="main-container">
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
