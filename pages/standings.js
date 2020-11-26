import { useContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import CurrentSeasonContext from '../context/currentSeasonContext';
import PageHeading from '../components/pageHeading';
import StandingsTables from '../components/standingsTables/standingsTables';

const Standings = ({ standings, error }) => {
    // const { current_season_id: currentSeasonId } = useContext(SettingsContext);

    // const [seasonId, setSeasonId] = useState(null);
    // const querySeasonId = seasonId || currentSeasonId;

    // const [seasonName, setSeasonName] = useState(null);

    // const [standings, setStandings] = useState({
    //     data: null,
    //     status: {
    //         errorMsg: undefined,
    //         isLoaded: false,
    //     },
    // });

    // const [seasons, setSeasons] = useState({
    //     data: null,
    //     status: {
    //         errorMsg: undefined,
    //         isLoaded: false,
    //     },
    // });

    // const handleSeasonId = season => setSeasonId(season);

    // useEffect(() => {
    //     axios.get('/api/standings/seasons-list')
    //         .then((response) => {
    //             const seasonArray = response.data.map((season) => {
    //                 return {
    //                     season_id: season.season_id,
    //                     text: season.season_name + ' - ' + season.year,
    //                 };
    //             });
    //             setSeasons({
    //                 data: seasonArray,
    //                 status: {
    //                     errorMsg: undefined,
    //                     isLoaded: true,
    //                 },
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             setSeasons({
    //                 data: null,
    //                 status: {
    //                     errorMsg: 'An error occurred fetching the standings season list!',
    //                     isLoaded: true,
    //                 },
    //             });
    //         });
    // }, []);

    // useEffect(() => {
    //     if (querySeasonId) {
    //         axios.get('/api/seasons/' + querySeasonId + '/name')
    //             .then((response) => {
    //                 if (response.data[0]) {
    //                     setSeasonName({
    //                         season_id: querySeasonId,
    //                         season_name: response.data[0].season_name,
    //                         season_year: response.data[0].year,
    //                     });
    //                 } else {
    //                     setSeasonName(null);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 setSeasonName(null);
    //             });
    //         axios.get('/api/standings/seasons/' + querySeasonId)
    //             .then((response) => {
    //                 setStandings({
    //                     data: response.data,
    //                     status: {
    //                         errorMsg: undefined,
    //                         isLoaded: true,
    //                     },
    //                 });
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 setStandings({
    //                     data: null,
    //                     status: {
    //                         errorMsg: 'An error occurred fetching the standings!',
    //                         isLoaded: true,
    //                     },
    //                 });
    //             });
    //     }
    // }, [querySeasonId]);

    // return (
    //     <Fragment>
    //         <PageHeading text="Standings" />
    //         <div className="row mb-4">
    //             <div className="col-12 text-right p-2">
    //                 {seasons.status.isLoaded && seasons.data && seasons.data.length > 0 &&
    //                     <SeasonDropdown currentSeason={seasonName} buttonText="View Standings From" listItems={seasons.data} handleSeasonId={handleSeasonId} />
    //                 }
    //             </div>
    //         </div>
    //         {!standings.status.isLoaded
    //             ? <Loading />
    //             : standings.data && standings.data.length > 0
    //                 ? <StandingsTables standingsArr={standings.data} />
    //                 : standings.data
    //                     ? <span className="empty-result">There are no standings for this season!</span>
    //                     : <span className="empty-result">{standings.status.errorMsg}</span>
    //         }
    //     </Fragment>
    // );

    // console.log('standings', standings);

    // const { currentSeasonId } = useContext(CurrentSeasonContext);

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
                    : error && <h4 className="text-danger text-center mt-4">An error occurred trying to fetch data!</h4>
            }
        </>
    );
};

Standings.propTypes = {
    standings: PropTypes.array,
    error: PropTypes.object,
};

export async function getServerSideProps({ req, query }) {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    const response = await fetch(`${protocol}://${host}/api/standings/24`);
    if (response.ok) {
        const data = await response.json();
        return { props: data };
    } else {
        const error = { statusCode: response.status, message: 'An error occurred trying to fetch data!' };
        return { props: { error } };
    }
}

export default Standings;
