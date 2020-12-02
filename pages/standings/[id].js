import PropTypes from 'prop-types';
import Head from 'next/head';

import db from '../../config/db';
import SQL from 'sql-template-strings';

import groupStandings from '../../utils/groupStandings';
import PageHeading from '../../components/pageHeading';
import StandingsTables from '../../components/standingsTables/standingsTables';
import SeasonDropdown from '../../components/seasonDropdown';

const Standings = ({ standings, displayedSeason, seasons, error }) => {
    return (
        <>
            <Head>
                <title>Standings</title>
            </Head>
            <PageHeading text="Standings" />
            <div className="row mb-4">
                <div className="col-12 text-right p-2">
                    {seasons && seasons.length > 0 &&
                        <SeasonDropdown displayedSeason={displayedSeason} buttonText="View Standings From" listItems={seasons} />
                    }
                </div>
            </div>
            {standings && standings.length > 0
                ? <StandingsTables standingsArr={standings} />
                : standings
                    ? <div className="empty-result">There are no standings for the selected season.</div>
                    : error && <h4 className="text-danger text-center mt-4">An error occurred trying to fetch data!</h4>
            }
        </>
    );
};

Standings.propTypes = {
    standings: PropTypes.array,
    displayedSeason: PropTypes.object,
    seasons: PropTypes.array,
    error: PropTypes.object,
};

export async function getServerSideProps({ params }) {
    try {
        const standings = await db.query(SQL`SELECT st.standings_id, CONCAT(st.store_id,st.division_id) AS store_division, s.store_id, s.store_city, t.team_id, t.team_name, st.wins, st.losses, st.ties, st.total_points, d.division_id, d.day_name FROM standings AS st JOIN stores AS s ON (st.store_id=s.store_id) JOIN teams AS t ON (st.team_id=t.team_id) JOIN divisions AS d ON (st.division_id=d.division_id) WHERE st.season_id=${params.id} ORDER BY s.store_city ASC, d.division_id ASC, st.standings_order ASC;`);

        const displayedSeasonResponse = await db.query(SQL`SELECT se.season_id, se.season_name, se.year FROM seasons AS se WHERE se.season_id=${params.id} LIMIT 1;`);
        const displayedSeason = displayedSeasonResponse.length === 1 ? displayedSeasonResponse[0] : null;

        const seasons = await db.query(SQL`SELECT DISTINCT(st.season_id), se.season_id, se.season_name, se.year FROM standings AS st JOIN seasons AS se ON (st.season_id=se.season_id) ORDER BY se.season_id DESC;`);

        if (!standings.error && !displayedSeasonResponse.error && !seasons.error) return { props: { standings: groupStandings(standings), displayedSeason: JSON.parse(JSON.stringify(displayedSeason)), seasons: JSON.parse(JSON.stringify(seasons)) } };
        throw new Error(standings.error || displayedSeasonResponse.error || seasons.error);
    } catch (error) {
        console.error(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } } };
    }
}

export default Standings;
