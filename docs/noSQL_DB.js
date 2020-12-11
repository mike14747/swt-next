/* eslint-disable quotes, quote-props */

const results = [
    {
        _id: 'some_ObjectId()',
        seasonId: 24,
        seasonName: 'Winter',
        year: 2019,
        weekId: 9,
        storeId: 12,
        storeCity: 'Brunswick',
        divisionId: 1,
        divisionName: 'Monday',
        date: '2019-03-11',
        startTime: '06:30PM',
        alley: 1,
        teams: [
            {
                teamId: 152,
                teamName: 'Brewskees',
                type: 'away',
                players: [
                    {
                        playerId: 311,
                        playerName: 'Michaiah Rundell',
                        scores: [370, 180, 180, 130, 180, 200, 190, 190, 270, 530],
                        totalPoints: 2420,
                    },
                    {
                        playerId: 289,
                        playerName: 'Gun Chao',
                        scores: [310, 100, 160, 280, 190, 220, 360, 300, 150, 170],
                        totalPoints: 2240,
                    },
                    {
                        playerId: 337,
                        playerName: 'Tiffany Ruic',
                        scores: [540, 420, 450, 450, 440, 450, 250, 630, 460, 130],
                        totalPoints: 4220,
                    },
                ],
                stats: {
                    wins: 1,
                    losses: 9,
                    ties: 0,
                    teamScores: [1220, 700, 790, 860, 810, 870, 800, 1120, 880, 830],
                    totalPoints: 8880,
                },
            },
            {
                teamId: 853,
                teamName: 'Milk Duds',
                type: 'home',
                players: [
                    {
                        playerId: 3428,
                        playerName: 'Antonio Bassiotta',
                        scores: [540, 360, 450, 560, 540, 620, 360, 360, 320, 460],
                        totalPoints: 4570,
                    },
                    {
                        playerId: 3427,
                        playerName: 'Rob Quinn',
                        scores: [270, 220, 630, 450, 270, 390, 200, 350, 290, 390],
                        totalPoints: 3460,
                    },
                    {
                        playerId: 3463,
                        playerName: 'Max Schindler',
                        scores: [190, 320, 220, 190, 260, 270, 540, 530, 540, 280],
                        totalPoints: 3340,
                    },
                ],
                stats: {
                    wins: 9,
                    losses: 1,
                    ties: 0,
                    teamScores: [1000, 900, 1300, 1200, 1070, 1280, 1100, 1240, 1150, 1130],
                    totalPoints: 11370,
                },
            },
        ],
    },
];

const players = [
    {
        _id: 'some_ObjectId()',
        playerId: 311,
        playerName: 'Michaiah Rundell',
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
            },
        ],
        seasonStats: [
            {
                seasonId: 24,
                seasonName: 'Winter',
                year: 2019,
                seasonGames: 90,
                gamesPlayed: 10,
                totalPoints: 2420,
                num800plus: 0,
                num700plus: 0,
                num600plus: 0,
                num500plus: 1,
                num400plus: 1,
                num300plus: 2,
                highGame: 530,
                numHighGames: 1,
                lowGame: 130,
                numLowGames: 1,
                highTenGame: 2420,
            },
        ],
        careerStats: {
            games: 10,
            totalPoints: 2420,
            num800plus: 0,
            num700plus: 0,
            num600plus: 0,
            num500plus: 1,
            num400plus: 1,
            num300plus: 2,
            highGame: 530,
            numHighGames: 1,
            lowGame: 130,
            numLowGames: 1,
            highTenGame: 2420,
        },
    },
    {
        _id: 'some_ObjectId()',
        playerId: 289,
        playerName: 'Gun Chao',
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
            },
        ],
        seasonStats: [
            {
                seasonId: 24,
                seasonName: 'Winter',
                year: 2019,
                seasonGames: 90,
                gamesPlayed: 10,
                totalPoints: 2420,
                num800plus: 0,
                num700plus: 0,
                num600plus: 0,
                num500plus: 0,
                num400plus: 0,
                num300plus: 3,
                highGame: 360,
                numHighGames: 1,
                lowGame: 100,
                numLowGames: 1,
                highTenGame: 2240,
            },
        ],
        careerStats: {
            games: 10,
            totalPoints: 2420,
            num800plus: 0,
            num700plus: 0,
            num600plus: 0,
            num500plus: 0,
            num400plus: 0,
            num300plus: 3,
            highGame: 360,
            numHighGames: 1,
            lowGame: 100,
            numLowGames: 1,
            highTenGame: 2240,
        },
    },
    {
        _id: 'some_ObjectId()',
        playerId: 337,
        playerName: 'Tiffany Ruic',
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
            },
        ],
    },
    {
        _id: 'some_ObjectId()',
        playerId: 3428,
        playerName: 'Antonio Bassiotta',
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
            },
        ],
    },
    {
        _id: 'some_ObjectId()',
        playerId: 3427,
        playerName: 'Rob Quinn',
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
            },
        ],
    },
    {
        _id: 'some_ObjectId()',
        playerId: 3463,
        playerName: 'Max Schindler',
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
            },
        ],
    },
];

const teams = [
    {
        _id: 'some_ObjectId()',
        teamId: 152,
        teamName: 'Brewskees',
        tournyShow: true,
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
            },
        ],
        seasons: [
            {
                seasonId: 24,
                seasonName: 'Winter',
                year: 2019,
                highGame: 1220,
                lowGame: 700,
                highTenGame: 8880,
                lowTenGame: 8880,
            },
        ],
    },
    {
        _id: 'some_ObjectId()',
        teamId: 853,
        teamName: 'Milk Duds',
        tournyShow: true,
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
            },
        ],
        seasons: [
            {
                seasonId: 24,
                seasonName: 'Winter',
                year: 2019,
                highGame: 1300,
                lowGame: 900,
                highTenGame: 11370,
                lowTenGame: 11370,
            },
        ],
    },
];

const stores = [
    {
        _id: 'some_ObjectId()',
        storeId: 12,
        storeName: 'Winking Lizard',
        address: '3634 Center Rd',
        storeCity: 'Brunswick',
        state: 'Ohio',
        zip: '44212',
        phone: '330.220.9944',
        mapUrl: 'http://maps.google.com/maps?q=3634+Center+Rd,+Brunswick,+Ohio+44212',
        active: true,
    },
];

const divisions = [
    {
        _id: 'some_ObjectId()',
        divisionId: 1,
        divisionName: 'Monday',
    },
    {
        _id: 'some_ObjectId()',
        divisionId: 2,
        divisionName: 'Tuesday',
    },
    {
        _id: 'some_ObjectId()',
        divisionId: 3,
        divisionName: 'Wednesday',
    },
    {
        _id: 'some_ObjectId()',
        divisionId: 4,
        divisionName: 'Thursday',
    },
    {
        _id: 'some_ObjectId()',
        divisionId: 5,
        divisionName: 'Friday',
    },
];

const schedules = [
    {
        _id: 'some_ObjectId()',
        seasonId: 24,
        seasonName: 'Winter',
        year: 2019,
        seasonGames: 90,
        storeId: 12,
        storeCity: 'Brunswick',
        divisionId: 1,
        divisionName: 'Monday',
        weeks: [
            {
                weekId: 9,
                date: '2019-03-11',
                matchups: [
                    {
                        startTime: '06:30PM',
                        alley: 1,
                        awayTeam: {
                            teamId: 152,
                            teamName: 'Brewskees',
                        },
                        homeTeam: {
                            teamId: 853,
                            teamName: 'Milk Duds',
                        },
                    },
                ],
            },
        ],
    },
];

const seasons = [
    {
        _id: 'some_ObjectId()',
        seasonId: 24,
        seasonNum: 1,
        seasonName: 'Winter',
        year: 2019,
        seasonGames: 90,
        champion: {
            teamId: null,
            teamName: null,
            storeCity: null,
        },
        comments: '',
        regEnds: new Date('2019-01-10'),
        startDate: new Date('2019-01-14'),
        endDate: new Date('2019-03-14'),
        tournyDate: new Date('2019-03-23'),
    },
];

const settings = {
    tournyRankingsStatus: 0,
    numLeaders: 20,
    currentSeasonId: 24,
    displaySchedule: true,
    contactEmail: 'ktaylor@bellmusicco.com',
    headerTextBox: {
        heading: 'JOIN THE ACTION',
        content: `<ul style="list-style-type: circle;">
        <li>3-person teams</li>
        <li>Play one night per week</li>
        <li>9-week season</li>
        <li>$45 per team</li>
        <li>Tournament / Party / Prizes</li>
        <li>Next season starts on January 14th</li>
        <li>Registration opens: December 5th</li>
        </ul>`,
    },
};

const rules = {
    content: `<p><strong>Teams:</strong></p>
    <p>Each team is made up of three (3) players. All players must be 21 or older.&nbsp; Teams are permitted to play with less than three (3) players to avoid a complete forfeit and add to the team&rsquo;s total points for the season.</p>
    <p>Substitute players &ndash; Team&rsquo;s may utilize substitute players if a team member is unable to play. SUBSTITUTE PLAYERS MAY NOT BE ON ANY OTHER SKEEBALL TEAM OR HAVE SUBSTITUTED ON ANY OTHER SKEEBALL TEAM DURING THE CURRENT SEASON. Teams in violation will be given a complete forfeit for the game resulting in zero (0) total points.</p>
    <p><br /><strong>Game Play:</strong></p>
    <p><strong></strong>A match will consist of two (2) teams, (all six (6) players) rolling ten (10) frames.</p>
    <p>Competing teams will roll on the same lane the entire match.</p>
    <p>Every ball must be rolled while standing with both feet located behind the machines.</p>
    <p>Balls that fail to enter the scoring zone and roll or otherwise return to the thrower are able to be re-thrown.</p>
    <p><br /><strong>Scoring:</strong></p>
    <p><strong></strong>Skeeball scores presented on the machines screen will be divided by 1000 (the last three zeros dropped) to simplify scoring.</p>
    <p>Each frame will count as its own game resulting in a "win" or "loss". Example 1: "Team A" rolls 280, 210, 360 in frame 1 totaling 850. "Team B" rolls 300, 360, 410 in frame 1 totaling 1070. "Team B" would be credited with a "win" for frame 1. All 10 frames will be scored the same way. Example 2: "Team A" wins 6 of the 10 frames, "Team B" would therefore have lost 6 of the 10 frames. The record for these two teams would be recorded as: "Team A" 6-4, "Team B" 4-6. The season end record will be the total wins and losses of the combined 90 frames rolled. Example: 75-15 (75 wins - 15 losses)</p>
    <p>All teams must roll regardless of whether or not their opponents show up in order to get wins for the match.&nbsp; Total points can also be an important factor in determining which teams qualify for the tournament.</p>
    <p><br /><strong>Ghost Teams:</strong></p>
    <p><strong></strong>Locations that registered an odd number of teams will need to &ldquo;play&rdquo; an invisible Ghost Team. To win a frame against a Ghost Team, your team will need to score better than 660 (the current predefined score for Ghost Teams) for that frame.</p>
    <p>All teams must roll regardless if their opponent forfeits or the team is playing the Ghost Team 660. We need the total score for the end of season tournament ranking system. If the team does not roll, they will not receive the win.</p>
    <p><br /><strong>Season Ending Playoff Tournament:</strong></p>
    <p><strong></strong>Top teams will compete for the overall Skeeball World Tour Champion at the season ending playoff tournament at the Bedford Winking Lizard Party Center in Bedford, Ohio at the conclusion of each season.</p>
    <p>Automatic Bids &ndash; Each location will be given a certain number of automatic bids (top 2-4 teams determined by overall record) based on number of teams at that location.</p>
    <p>Wild Card Teams &ndash; Wild Card teams (based on total skeeball teams) will be given to non-automatic bid teams determined by total points.</p>
    <p>Prizes will be awarded to the top team from each location as well as the top two (2) teams from the season ending playoff tournament.</p>
    <p>A second chance mini tournament will be available to all teams that lost in the first round.</p>
    <p><br /><strong>Sportsmanship:</strong></p>
    <p><strong></strong>Skeeball is intended to be a fun and entertaining competition. Any behavior that is deemed unsportsmanlike will not be tolerated and such player/players may be removed from the league.</p>
    <p>Staff members of Winking Lizard, Automatic Music and official skeeball coordinators reserve the right to settle any disputes, as well as interpret, modify and enforce all skeeball rules and regulations.</p>`,
};

const homePageNews = [
    {
        heading: '',
        content: '',
        date: new Date(),
        display: true,
    },
];

const headerTextBox = {
    heading: 'JOIN THE ACTION',
    content: `<ul style="list-style-type: circle;">
    <li>3-person teams</li>
    <li>Play one night per week</li>
    <li>9-week season</li>
    <li>$45 per team</li>
    <li>Tournament / Party / Prizes</li>
    <li>Next season starts on January 14th</li>
    <li>Registration opens: December 5th</li>
    </ul>`,
};

const registerButton = {
    show: false,
    url: 'https://www.winkinglizard.com/skeeball-leagues',
    constent: '<p>...for the upcoming skeeball season...<br /><strong>Registration ends at Midnight on January 10th</strong><br />(Winter Season starts January 14th, 2019)</p>',
};

const standings = [
    {
        _id: 'some_ObjectId()',
        seasonId: 24,
        seasonNum: 1,
        seasonName: 'Winter',
        year: 2019,
        seasonGames: 90,
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
                divisionId: 1,
                divisionName: 'Monday',
                teams: [
                    {
                        teamId: 152,
                        teamName: 'Brewskees',
                        wins: 1,
                        losses: 9,
                        ties: 0,
                        totalPoints: 8880,
                        ranking: 2,
                    },
                    {
                        teamId: 853,
                        teamName: 'Milk Duds',
                        wins: 9,
                        losses: 1,
                        ties: 0,
                        totalPoints: 11370,
                        ranking: 1,
                    },
                ],
            },
        ],
    },
];

console.log({ results, players, teams, seasons, stores, divisions, schedules, standings, settings, rules, homePageNews, headerTextBox, registerButton });

// --------------------------------------------------

const result = [];
