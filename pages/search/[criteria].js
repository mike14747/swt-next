import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';

import db from '../../config/db';
import SQL from 'sql-template-strings';

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
        const queryCriteria = `%${query.criteria}%`;

        const playersResponse = await db.query(SQL`SELECT pl.player_id, pl.full_name, GROUP_CONCAT(s.store_city ORDER BY s.store_city SEPARATOR", ") AS cities FROM (SELECT DISTINCT r.store_id, p.player_id, p.full_name FROM (SELECT player_id, full_name FROM players WHERE full_name LIKE ${queryCriteria}) AS p INNER JOIN results AS r ON (p.player_id=r.player_id)) AS pl INNER JOIN stores AS s ON (s.store_id=pl.store_id) GROUP BY pl.player_id ORDER BY pl.full_name;`);
        const players = JSON.parse(JSON.stringify(playersResponse));

        const teamsResponse = await db.query(SQL`SELECT te.team_id, te.team_name, GROUP_CONCAT(s.store_city ORDER BY s.store_city SEPARATOR", ") AS cities FROM (SELECT DISTINCT r.store_id, t.team_id, t.team_name FROM (SELECT team_id, team_name FROM teams WHERE team_name LIKE ${queryCriteria}) AS t INNER JOIN results AS r ON (t.team_id=r.team_id)) AS te INNER JOIN stores AS s ON (s.store_id=te.store_id) GROUP BY te.team_id ORDER BY te.team_name;`);
        const teams = JSON.parse(JSON.stringify(teamsResponse));

        if (!playersResponse.error && !teamsResponse.error) return { props: { players, teams } };
        throw new Error(playersResponse.error || teamsResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } } };
    }
}
