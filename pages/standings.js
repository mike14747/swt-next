import PageHeading from '../components/pageHeading';
import PropTypes from 'prop-types';

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

    return (
        <>
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

const standings = [
    {
        standings_id: 2088,
        store_division: '121',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 853,
        team_name: 'Milk Duds',
        wins: 70,
        losses: 20,
        ties: 0,
        total_points: 99460,
        division_id: 1,
        day_name: 'Monday'
    },
    {
        standings_id: 2084,
        store_division: '121',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 154,
        team_name: 'MT Nesters',
        wins: 61,
        losses: 29,
        ties: 0,
        total_points: 93500,
        division_id: 1,
        day_name: 'Monday'
    },
    {
        standings_id: 2085,
        store_division: '121',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 358,
        team_name: 'Hooptabogen',
        wins: 53,
        losses: 37,
        ties: 0,
        total_points: 83590,
        division_id: 1,
        day_name: 'Monday'
    },
    {
        standings_id: 2086,
        store_division: '121',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 622,
        team_name: 'Dysfunctional',
        wins: 42,
        losses: 47,
        ties: 1,
        total_points: 84650,
        division_id: 1,
        day_name: 'Monday'
    },
    {
        standings_id: 2083,
        store_division: '121',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 152,
        team_name: 'Brewskees',
        wins: 38,
        losses: 52,
        ties: 0,
        total_points: 77800,
        division_id: 1,
        day_name: 'Monday'
    },
    {
        standings_id: 2087,
        store_division: '121',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 731,
        team_name: 'Ghost Team 660 (Mon)',
        wins: 5,
        losses: 84,
        ties: 1,
        total_points: 59400,
        division_id: 1,
        day_name: 'Monday'
    },
    {
        standings_id: 2124,
        store_division: '123',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 706,
        team_name: 'Miami Skeat',
        wins: 79,
        losses: 11,
        ties: 0,
        total_points: 111490,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2122,
        store_division: '123',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 157,
        team_name: 'The GRP',
        wins: 67,
        losses: 23,
        ties: 0,
        total_points: 96310,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2127,
        store_division: '123',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 806,
        team_name: 'The Skeemers',
        wins: 49,
        losses: 41,
        ties: 0,
        total_points: 84780,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2126,
        store_division: '123',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 770,
        team_name: 'Freeballers',
        wins: 47,
        losses: 43,
        ties: 0,
        total_points: 81740,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2123,
        store_division: '123',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 550,
        team_name: '3 Guys 9 Balls',
        wins: 44,
        losses: 45,
        ties: 1,
        total_points: 79950,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2121,
        store_division: '123',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 147,
        team_name: 'Mean Mom and Company',
        wins: 38,
        losses: 51,
        ties: 1,
        total_points: 71940,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2125,
        store_division: '123',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 740,
        team_name: 'Skee-alicious',
        wins: 21,
        losses: 68,
        ties: 1,
        total_points: 70170,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2128,
        store_division: '123',
        store_id: 12,
        store_city: 'Brunswick',
        team_id: 843,
        team_name: 'The Groovy Skeesters',
        wins: 13,
        losses: 76,
        ties: 1,
        total_points: 57200,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2130,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 579,
        team_name: 'Whiskee Shots',
        wins: 67,
        losses: 22,
        ties: 1,
        total_points: 89420,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2135,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 842,
        team_name: 'Triple H',
        wins: 61,
        losses: 27,
        ties: 2,
        total_points: 82320,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2131,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 652,
        team_name: "Seekin' A Skeesome",
        wins: 60,
        losses: 29,
        ties: 1,
        total_points: 89890,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2137,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 859,
        team_name: 'Bad News Bearskees',
        wins: 56,
        losses: 33,
        ties: 1,
        total_points: 79210,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2134,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 808,
        team_name: 'Skeet and Potatoes',
        wins: 53,
        losses: 35,
        ties: 2,
        total_points: 81050,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2136,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 845,
        team_name: 'Golden Girlskees',
        wins: 50,
        losses: 39,
        ties: 1,
        total_points: 75100,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2133,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 741,
        team_name: 'Run D-M Skee',
        wins: 43,
        losses: 43,
        ties: 4,
        total_points: 76520,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2132,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 710,
        team_name: "T-Rex Can't Skee Skee",
        wins: 40,
        losses: 47,
        ties: 3,
        total_points: 70760,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2129,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 180,
        team_name: 'Good Friends',
        wins: 36,
        losses: 52,
        ties: 2,
        total_points: 70310,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2139,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 861,
        team_name: 'Great Balls of Fire',
        wins: 25,
        losses: 62,
        ties: 3,
        total_points: 65260,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2140,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 862,
        team_name: 'High-Rollers',
        wins: 24,
        losses: 64,
        ties: 2,
        total_points: 63030,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2138,
        store_division: '143',
        store_id: 14,
        store_city: 'Copley',
        team_id: 860,
        team_name: 'Bullseye Babes',
        wins: 14,
        losses: 76,
        ties: 0,
        total_points: 59380,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2172,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 565,
        team_name: 'Skeeterrifics',
        wins: 81,
        losses: 9,
        ties: 0,
        total_points: 101930,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2173,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 683,
        team_name: 'Sweet Baby Skeesus',
        wins: 72,
        losses: 18,
        ties: 0,
        total_points: 92330,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2175,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 810,
        team_name: 'Skee Amigas',
        wins: 49,
        losses: 40,
        ties: 1,
        total_points: 72110,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2181,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 864,
        team_name: 'I skeed my pants',
        wins: 47,
        losses: 43,
        ties: 0,
        total_points: 66410,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2182,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 865,
        team_name: 'Can you skee my balls',
        wins: 43,
        losses: 46,
        ties: 1,
        total_points: 64660,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2177,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 830,
        team_name: 'CLE-BALL',
        wins: 42,
        losses: 48,
        ties: 0,
        total_points: 69530,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2180,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 863,
        team_name: 'Ahh skee skee',
        wins: 38,
        losses: 51,
        ties: 1,
        total_points: 65200,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2176,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 829,
        team_name: 'Boston Skee Party',
        wins: 37,
        losses: 52,
        ties: 1,
        total_points: 69810,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2171,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 249,
        team_name: 'The Big Lebowskees',
        wins: 33,
        losses: 55,
        ties: 2,
        total_points: 65130,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2178,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 834,
        team_name: 'This Is Our Cardio',
        wins: 34,
        losses: 56,
        ties: 0,
        total_points: 55530,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2174,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 789,
        team_name: 'Skeewee Herman',
        wins: 31,
        losses: 57,
        ties: 2,
        total_points: 62270,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2179,
        store_division: '164',
        store_id: 16,
        store_city: 'Lakewood',
        team_id: 850,
        team_name: 'The Skee Amigos',
        wins: 28,
        losses: 60,
        ties: 2,
        total_points: 60750,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2116,
        store_division: '173',
        store_id: 17,
        store_city: 'Macedonia',
        team_id: 777,
        team_name: 'UnbeSKEEvable',
        wins: 78,
        losses: 10,
        ties: 2,
        total_points: 111580,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2118,
        store_division: '173',
        store_id: 17,
        store_city: 'Macedonia',
        team_id: 854,
        team_name: 'PB&J',
        wins: 53,
        losses: 35,
        ties: 2,
        total_points: 89840,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2114,
        store_division: '173',
        store_id: 17,
        store_city: 'Macedonia',
        team_id: 274,
        team_name: 'Alley Cats',
        wins: 53,
        losses: 35,
        ties: 2,
        total_points: 88590,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2120,
        store_division: '173',
        store_id: 17,
        store_city: 'Macedonia',
        team_id: 867,
        team_name: 'Skee-Generation X',
        wins: 46,
        losses: 43,
        ties: 1,
        total_points: 84190,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2113,
        store_division: '173',
        store_id: 17,
        store_city: 'Macedonia',
        team_id: 272,
        team_name: 'Beermeisters',
        wins: 46,
        losses: 43,
        ties: 1,
        total_points: 75350,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2119,
        store_division: '173',
        store_id: 17,
        store_city: 'Macedonia',
        team_id: 866,
        team_name: 'Just the tip',
        wins: 43,
        losses: 45,
        ties: 2,
        total_points: 79830,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2115,
        store_division: '173',
        store_id: 17,
        store_city: 'Macedonia',
        team_id: 775,
        team_name: 'Skeez Ballz',
        wins: 30,
        losses: 58,
        ties: 2,
        total_points: 78250,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2117,
        store_division: '173',
        store_id: 17,
        store_city: 'Macedonia',
        team_id: 823,
        team_name: 'Ghost Team 660',
        wins: 5,
        losses: 85,
        ties: 0,
        total_points: 59400,
        division_id: 3,
        day_name: 'Wednesday'
    },
    {
        standings_id: 2105,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 760,
        team_name: 'Scoopskee Potatoes',
        wins: 72,
        losses: 18,
        ties: 0,
        total_points: 97170,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2106,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 787,
        team_name: 'Rule #7Skee6',
        wins: 60,
        losses: 29,
        ties: 1,
        total_points: 84650,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2102,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 590,
        team_name: 'HungLo',
        wins: 59,
        losses: 31,
        ties: 0,
        total_points: 84180,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2103,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 664,
        team_name: 'Axis of Skeevil',
        wins: 54,
        losses: 35,
        ties: 1,
        total_points: 74660,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2107,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 847,
        team_name: "Baker's Dozen",
        wins: 54,
        losses: 35,
        ties: 1,
        total_points: 74270,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2111,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 872,
        team_name: 'Skeebi Dibby Dib Yo Da Dub Dub',
        wins: 43,
        losses: 46,
        ties: 1,
        total_points: 66670,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2104,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 735,
        team_name: 'The Real Housewives',
        wins: 42,
        losses: 45,
        ties: 3,
        total_points: 65620,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2108,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 848,
        team_name: 'Balls',
        wins: 40,
        losses: 48,
        ties: 2,
        total_points: 69640,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2101,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 516,
        team_name: "Tony's Tribe",
        wins: 36,
        losses: 53,
        ties: 1,
        total_points: 68380,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2109,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 870,
        team_name: 'New Kampers',
        wins: 31,
        losses: 59,
        ties: 0,
        total_points: 61340,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2110,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 871,
        team_name: 'All in the Famskee',
        wins: 28,
        losses: 61,
        ties: 1,
        total_points: 60980,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2112,
        store_division: '112',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 873,
        team_name: 'Team WJCTD',
        wins: 15,
        losses: 74,
        ties: 1,
        total_points: 53090,
        division_id: 2,
        day_name: 'Tuesday'
    },
    {
        standings_id: 2153,
        store_division: '114',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 104,
        team_name: 'Team Polycoat',
        wins: 81,
        losses: 9,
        ties: 0,
        total_points: 101680,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2156,
        store_division: '114',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 545,
        team_name: 'Balls of Fury',
        wins: 50,
        losses: 40,
        ties: 0,
        total_points: 71120,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2157,
        store_division: '114',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 868,
        team_name: "Ol' Dirtskee Bastards",
        wins: 43,
        losses: 46,
        ties: 1,
        total_points: 74780,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2158,
        store_division: '114',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 869,
        team_name: 'A to Z Skee',
        wins: 33,
        losses: 56,
        ties: 1,
        total_points: 64680,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2154,
        store_division: '114',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 129,
        team_name: 'The Longchamps',
        wins: 30,
        losses: 58,
        ties: 2,
        total_points: 64320,
        division_id: 4,
        day_name: 'Thursday'
    },
    {
        standings_id: 2155,
        store_division: '114',
        store_id: 11,
        store_city: 'Mentor',
        team_id: 426,
        team_name: 'Ball Pounders',
        wins: 31,
        losses: 59,
        ties: 0,
        total_points: 58070,
        division_id: 4,
        day_name: 'Thursday'
    }
];
