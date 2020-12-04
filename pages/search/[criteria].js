import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { getPlayerSearchResults, getTeamSearchResults } from '../../lib/api/search';

import PageHeading from '../../components/pageHeading';

const Criteria = ({ players = [], teams = [], error }) => {
    const router = useRouter();
    const { criteria } = router.query;

    return (
        <>
            <Head>
                <title>Search Results</title>
            </Head>
            <PageHeading text="Search Results" />
            <div className="text-center mb-4"><b>Search Results for:</b> {criteria}</div>
            {error
                ? <h4 className="text-danger text-center mt-4">An error occurred trying to fetch data!</h4>
                : <>
                    <div className="d-flex justify-content-around">
                        <div className="mr-2">
                            <div className="text-success mb-3 pb-3 border-bottom"><b>Player Matches:</b> {players.length}</div>
                            {players.map(player => (
                                <div key={player.player_id} className="my-3"><a href={'/players/' + player.player_id}>{player.full_name}</a> ({player.cities})</div>
                            ))}
                        </div>
                        <div className="ml-2">
                            <div className="text-success mb-3 pb-3 border-bottom"><b>Team Matches:</b> {teams.length}</div>
                            {teams.map(team => (
                                <div key={team.team_id} className="my-3"><a href={'/teams/' + team.team_id}>{team.team_name}</a> ({team.cities})</div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </>
    );
};

Criteria.propTypes = {
    players: PropTypes.array,
    teams: PropTypes.array,
    error: PropTypes.object,
};

export default Criteria;

export async function getServerSideProps({ query }) {
    try {
        const playersResponse = await getPlayerSearchResults(query.criteria);
        const playersJson = JSON.parse(JSON.stringify(playersResponse));

        const teamsResponse = await getTeamSearchResults(query.criteria);
        const teamsJson = JSON.parse(JSON.stringify(teamsResponse));

        if (!playersResponse.error && !teamsResponse.error) return { props: { players: playersJson, teams: teamsJson } };
        throw new Error(playersResponse.error || teamsResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } }, revalidate: 360 };
    }
}
