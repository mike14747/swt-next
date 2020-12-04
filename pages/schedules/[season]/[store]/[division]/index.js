import PropTypes from 'prop-types';
import Head from 'next/head';

import { getStoreDivisionSchedules, getSchedulesSeasonsList } from '../../../../../lib/api/schedules';
import { getSeasonDetails } from '../../../../../lib/api/seasons';
import { getStoreDetails } from '../../../../../lib/api/stores';
import { formatScheduleArray } from '../../../../../utils/schedulesFunctions';

import PageHeading from '../../../../../components/pageHeading';
import ScheduleTable from '../../../../../components/scheduleTable/scheduleTable';
import SeasonDropdown from '../../../../../components/seasonDropdown';

const Schedules = ({ schedules, displayedSeason, storeDetails, seasons, error }) => {
    return (
        <>
            <Head>
                <title>Schedule</title>
            </Head>
            <PageHeading text="Schedule" />
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
                        <SeasonDropdown displayedSeason={displayedSeason} buttonText="View Schedules From" listItems={seasons} />
                    }
                </div>
            </div>
            {schedules && schedules.length > 0
                ? <ScheduleTable schedules={schedules} />
                : schedules
                    ? <div className="empty-result">There are no schedules for the selected season.</div>
                    : error && <h4 className="text-danger text-center mt-4">An error occurred trying to fetch data!</h4>
            }
        </>
    );
};

Schedules.propTypes = {
    schedules: PropTypes.array,
    displayedSeason: PropTypes.object,
    storeDetails: PropTypes.object,
    seasons: PropTypes.array,
    error: PropTypes.object,
};

export default Schedules;

export async function getServerSideProps({ params }) {
    try {
        const schedulesResponse = await getStoreDivisionSchedules(params);
        const schedulesJson = JSON.parse(JSON.stringify(schedulesResponse));

        const seasonDetailsResponse = await getSeasonDetails(params);
        const seasonDetailsJson = JSON.parse(JSON.stringify(seasonDetailsResponse));
        const seasonDetails = seasonDetailsJson.length === 1 ? seasonDetailsJson[0] : null;

        const storeDetailsResponse = await getStoreDetails(params);
        const storeDetailsJson = JSON.parse(JSON.stringify(storeDetailsResponse));
        const storeDetails = storeDetailsJson.length === 1 ? storeDetailsJson[0] : null;

        const seasonListResponse = await getSchedulesSeasonsList(params);
        const seasonListJson = JSON.parse(JSON.stringify(seasonListResponse));
        const seasons = seasonListJson.map((season) => ({
            ...season,
            url: '/schedules/' + season.season_id + '/' + params.store + '/' + params.division,
        }));

        if (!schedulesResponse.error && !storeDetailsResponse.error && !seasonListResponse.error) return { props: { schedules: formatScheduleArray(schedulesJson), displayedSeason: seasonDetails, storeDetails, seasons } };
        throw new Error(schedulesResponse.error || storeDetailsResponse.error || seasonListResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } } };
    }
}
