import PropTypes from 'prop-types';
import Head from 'next/head';

import { getStoreDivisionResults, getResultsSeasonsList } from '../../../../../lib/api/results';
import { getSeasonDetails } from '../../../../../lib/api/seasons';
import { getStoreDetails } from '../../../../../lib/api/stores';
import { formatResults } from '../../../../../utils/resultsFunctions';

import PageHeading from '../../../../../components/pageHeading';
import ResultsDiv from '../../../../../components/resultsDiv/resultsDiv';
import SeasonDropdown from '../../../../../components/seasonDropdown';

const Results = ({ results, displayedSeason, storeDetails, seasons, error }) => {
    return (
        <>
            <Head>
                <title>Results</title>
            </Head>
            <PageHeading text="Results" />
            <div className="row mb-4">
                <div className="col-6 text-left p-2">
                    {storeDetails &&
                        <div className="mb-3 bigger">
                            <a href={'/stores/' + storeDetails.store_id + '/divisions/' + storeDetails.division_id}>{storeDetails.store_name} ({storeDetails.day_name})</a>
                        </div>
                    }
                </div>
                <div className="col-6 text-right p-2">
                    {seasons && seasons.length > 0 &&
                        <SeasonDropdown displayedSeason={displayedSeason} buttonText="View Results From" listItems={seasons} />
                    }
                </div>
            </div>
            {results && results.length > 0
                ? <ResultsDiv results={results} />
                : results
                    ? <div className="empty-result">There are no results for the selected season.</div>
                    : error && <h4 className="text-danger text-center mt-4">An error occurred trying to fetch data!</h4>
            }
        </>
    );
};

Results.propTypes = {
    results: PropTypes.array,
    displayedSeason: PropTypes.object,
    storeDetails: PropTypes.object,
    seasons: PropTypes.array,
    error: PropTypes.object,
};

export default Results;

export async function getServerSideProps({ params }) {
    try {
        const resultsResponse = await getStoreDivisionResults(params);
        const resultsJson = JSON.parse(JSON.stringify(resultsResponse));

        const seasonDetailsResponse = await getSeasonDetails(params);
        const seasonDetailsJson = JSON.parse(JSON.stringify(seasonDetailsResponse));
        const seasonDetails = seasonDetailsJson.length === 1 ? seasonDetailsJson[0] : null;

        const storeDetailsResponse = await getStoreDetails(params);
        const storeDetailsJson = JSON.parse(JSON.stringify(storeDetailsResponse));
        const storeDetails = storeDetailsJson.length === 1 ? storeDetailsJson[0] : null;

        const seasonListResponse = await getResultsSeasonsList(params);
        const seasonListJson = JSON.parse(JSON.stringify(seasonListResponse));
        const seasons = seasonListJson.map((season) => ({
            ...season,
            url: '/results/' + season.season_id + '/' + params.store + '/' + params.division,
        }));

        if (!resultsResponse.error && !storeDetailsResponse.error && !seasonListResponse.error) return { props: { results: formatResults(resultsJson), seasonDetails, storeDetails, seasons } };
        throw new Error(resultsResponse.error || storeDetailsResponse.error || seasonListResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } } };
    }
}
