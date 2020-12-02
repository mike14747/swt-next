import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        // console.log('_document.js getInitialProps() ctx:', ctx);
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="author" content="Mike Gullo" />
                    <meta name="description" content="SkeeballWorldTour refactored using next.js" />
                    <link rel="icon" href="data:," />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
