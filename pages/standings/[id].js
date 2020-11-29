import PropTypes from 'prop-types';
import Head from 'next/head';

import db from '../../config/db';
import SQL from 'sql-template-strings';

import groupStandings from '../../utils/groupStandings';
import PageHeading from '../../components/pageHeading';
import StandingsTables from '../../components/standingsTables/standingsTables';

const Standings = ({ standings, error }) => {
    return (
        <>
            <Head>
                <title>Standings</title>
            </Head>
            <PageHeading text="Standings" />
            {standings && standings.length > 0
                ? <StandingsTables standingsArr={standings} />
                : standings
                    ? <div className="empty-result">There are no standings for the selected season.</div>
                    : error && <h4 className="text-danger text-center mt-4">{error.message}</h4>
            }
        </>
    );
};

Standings.propTypes = {
    standings: PropTypes.array,
    error: PropTypes.object,
};

export async function getServerSideProps({ params }) {
    try {
        const standings = await db.query(SQL`SELECT st.standings_id, CONCAT(st.store_id,st.division_id) AS store_division, s.store_id, s.store_city, t.team_id, t.team_name, st.wins, st.losses, st.ties, st.total_points, d.division_id, d.day_name FROM standings AS st JOIN stores AS s ON (st.store_id=s.store_id) JOIN teams AS t ON (st.team_id=t.team_id) JOIN divisions AS d ON (st.division_id=d.division_id) WHERE st.season_id=${params.id} ORDER BY s.store_city ASC, d.division_id ASC, st.standings_order ASC;`);
        return standings.error ? { props: { error: { message: 'An error occurred trying to fetch data!' } } } : { props: { standings: groupStandings(standings) } };
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } } };
    }
}

export default Standings;