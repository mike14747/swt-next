import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

const Layout = () => {
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeStart', (url) => console.log('app is changing to url:', url));

        router.events.on('routeChangeStart', () => NProgress.start());
        router.events.on('routeChangeComplete', () => NProgress.done());
        router.events.on('routeChangeError', () => NProgress.done());

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', () => NProgress.done());
        };
    }, []);

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
            </Head>
            layout component!
        </div>
    );
};

export default Layout;
