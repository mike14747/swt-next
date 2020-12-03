import PropTypes from 'prop-types';
import Head from 'next/head';

import { testEndpoint } from '../lib/api/test';

const Test = ({ champions, error }) => {
    return (
        <>
            <Head>
                <title>Testing Page</title>
            </Head>
            {champions && champions.length > 0 &&
                champions.map(champion => (
                    <div key={champion.season_id}>
                        {champion.season_id} - {champion.team_name} ({champion.store_city})
                    </div>
                ))
            }
            {
                error && <h4 className="text-danger text-center mt-4">An error occurred trying to fetch data!</h4>
            }
        </>
    );
};

Test.propTypes = {
    champions: PropTypes.array,
    error: PropTypes.object,
};

export async function getServerSideProps({ req, res }) {
    try {
        const testResponse = await testEndpoint(req, res);
        // console.log('testResponse:', testResponse);
        const testJson = JSON.parse(JSON.stringify(testResponse));

        if (!testResponse.error) return { props: { champions: testJson } };
        throw new Error(testResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } } };
    }
}

export default Test;
