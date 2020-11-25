import PropTypes from 'prop-types';
import Head from 'next/head';

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

export async function getServerSideProps({ req }) {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    const response = await fetch(`${protocol}://${host}/api/champions`);
    if (response.ok) {
        const data = await response.json();
        return { props: data };
    } else {
        const error = { statusCode: response.status, message: 'An error occurred trying to fetch data!' };
        return { props: { error } };
    }
}

export default Champions;
