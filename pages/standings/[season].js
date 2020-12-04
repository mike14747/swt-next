import PropTypes from 'prop-types';
import Head from 'next/head';

import { getStandings, getStandingsSeasonsList } from '../../lib/api/standings';
import { getSeasonDetails } from '../../lib/api/seasons';
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
        const standingsResponse = await getStandings(params);
        const standingsJson = JSON.parse(JSON.stringify(standingsResponse));

        const seasonDetailsResponse = await getSeasonDetails(params);
        const seasonDetailsJson = JSON.parse(JSON.stringify(seasonDetailsResponse));
        const seasonDetails = seasonDetailsJson.length === 1 ? seasonDetailsJson[0] : null;

        const seasonListResponse = await getStandingsSeasonsList();
        const seasonListJson = JSON.parse(JSON.stringify(seasonListResponse));
        const seasons = seasonListJson.map((season) => ({
            ...season,
            url: '/standings/' + season.season_id,
        }));

        if (!standingsResponse.error && !seasonDetailsResponse.error && !seasonListResponse.error) return { props: { standings: groupStandings(standingsJson), displayedSeason: seasonDetails, seasons } };
        throw new Error(standingsResponse.error || seasonDetailsResponse.error || seasonListResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } } };
    }
}

export default Standings;
