import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { getRules } from '../lib/api/sitepages';

import PageHeading from '../components/pageHeading';

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

export async function getStaticProps() {
    try {
        const rulesResponse = await getRules();
        const rulesJson = JSON.parse(JSON.stringify(rulesResponse));
        const rules = rulesJson.length === 1 ? rulesJson[0] : null;

        if (!rulesResponse.error) return { props: { rules }, revalidate: 360 };
        throw new Error(rulesResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } }, revalidate: 360 };
    }
}

export default Rules;
