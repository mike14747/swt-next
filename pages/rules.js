import ReactHtmlParser from 'react-html-parser';
import PageHeading from '../components/pageHeading';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Rules = ({ rules, error }) => {
    return (
        <>
            <Head>
                <title>League Rules</title>
            </Head>
            {rules
                ? <>
                    <PageHeading text={rules.content_heading} />
                    {ReactHtmlParser(rules.page_content)}
                </>
                : error && <h4 className="text-danger text-center mt-4">An error occurred trying to fetch data!</h4>
            }
        </>
    );
};

Rules.propTypes = {
    rules: PropTypes.object,
    error: PropTypes.object,
};

export async function getServerSideProps({ req }) {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    const response = await fetch(`${protocol}://${host}/api/pages/rules`);
    if (response.ok) {
        const data = await response.json();
        return { props: data };
    } else {
        const error = { statusCode: response.status, message: 'An error occurred trying to fetch data!' };
        return { props: { error } };
    }
}

export default Rules;
