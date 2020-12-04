import PropTypes from 'prop-types';
import Head from 'next/head';

import { getChampions } from '../lib/api/champions';

import PageHeading from '../components/pageHeading';

const Champions = ({ champions, error }) => {
    return (
        <>
            <Head>
                <title>Champions</title>
            </Head>
            <PageHeading text="Champions" />
            {champions && champions.length > 0
                ? <div className="d-flex justify-content-center">
                    <div className="min-w-50 mx-auto">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr className="bg-gray6">
                                    <th>Season</th>
                                    <th>Champion</th>
                                    <th>Store</th>
                                </tr>
                            </thead>
                            <tbody>
                                {champions.map((champion) => (
                                    <tr key={champion.season_id}>
                                        <td>{champion.season_name}-{champion.year}</td>
                                        <td><a href={'/teams/' + champion.tourny_team_id}>{champion.team_name}</a>{champion.comments.length > 0 && <span className="small ml-2">*({champion.comments})</span>}</td>
                                        <td>{champion.store_city}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                : champions
                    ? <div className="empty-result">There are no champions to display!</div>
                    : error && <h4 className="text-danger text-center mt-4">An error occurred trying to fetch data!</h4>
            }
        </>
    );
};

Champions.propTypes = {
    champions: PropTypes.array,
    error: PropTypes.object,
};

export async function getStaticProps() {
    try {
        const championsResponse = await getChampions();
        const championsJson = JSON.parse(JSON.stringify(championsResponse));

        if (!championsResponse.error) return { props: { champions: championsJson }, revalidate: 360 };
        throw new Error(championsResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } }, revalidate: 360 };
    }
}

export default Champions;
