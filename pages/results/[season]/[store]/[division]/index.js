import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../../../../../config/db';
import SQL from 'sql-template-strings';

const Results = ({ results, error }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Results</title>
            </Head>
            <div>This is the results pages... nested inside the season (id: {router.query.season}), store (id: {router.query.store}) and division (id: {router.query.division}) levels.</div>
        </>
    );
};

Results.propTypes = {
    results: PropTypes.array,
    error: PropTypes.object,
};

export default Results;

export async function getServerSideProps({ params }) {
    try {
        const resultsResponse = await db.query(SQL``);
        const results = [];

        if (!resultsResponse.error) return { props: { results } };
        throw new Error(resultsResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } } };
    }
}
