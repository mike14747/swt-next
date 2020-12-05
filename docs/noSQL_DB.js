const results = [
    {
        _id: 'some_ObjectId()',
        details: {
            seasonId: 24,
            seasonName: 'Winter',
            year: 2019,
            weekId: 9,
            storeId: 12,
            divisionId: 1,
            storeCity: 'Brunswick',
            date: '2019-03-11',
            startTime: '06:30PM',
            alley: 1,
        },
        awayTeam: {
            teamId: 152,
            teamName: 'Brewskees',
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
            results: {
                wins: 1,
                losses: 9,
                ties: 0,
                teamScores: [1220, 700, 790, 860, 810, 870, 800, 1120, 880, 830],
                totalPoints: 8880,
            },
        },
        homeTeam: {
            teamId: 853,
            teamName: 'Milk Duds',
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
            results: {
                wins: 9,
                losses: 1,
                ties: 0,
                teamScores: [1000, 900, 1300, 1200, 1070, 1280, 1100, 1240, 1150, 1130],
                totalPoints: 11370,
            },
        },
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
        seasonStats: [
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
        seasonStats: [
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

const seasons = [
    {
        _id: 'some_ObjectId()',
        seasonId: 24,
        seasonName: 'Winter',
        year: 2019,
        seasonGames: 90,
        regEnds: '2019-01-10',
        startDate: '2019-01-14',
        endDate: '2019-03-14',
        tournyDate: '2019-03-23',
    },
];

const champions = [
    {
        _id: 'some_ObjectId()',
        seasonId: 24,
        seasonName: 'Winter',
        year: 2019,
        teamId: null,
        teamName: null,
    },
];

const stores = [
    {
        _id: 'some_ObjectId()',
        storeId: 12,
        storeCity: 'Brunswick',
        storeName: 'Winking Lizard',
    },
];

const divisions = [
    {
        _id: 'some_ObjectId()',
        divisionId: 1,
        dayName: 'Monday',
    },
    {
        _id: 'some_ObjectId()',
        divisionId: 2,
        dayName: 'Tuesday',
    },
    {
        _id: 'some_ObjectId()',
        divisionId: 3,
        dayName: 'Wednesday',
    },
    {
        _id: 'some_ObjectId()',
        divisionId: 4,
        dayName: 'Thursday',
    },
    {
        _id: 'some_ObjectId()',
        divisionId: 5,
        dayName: 'Friday',
    },
];

const schedules = [
    {
        _id: 'some_ObjectId()',
        seasonId: 24,
        seasonName: 'Winter',
        year: 2019,
        seasonGames: 90,
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
                divisionId: 1,
                dayName: 'Monday',
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
        ],
    },
];

const standings = [
    {
        _id: 'some_ObjectId()',
        seasonId: 24,
        seasonName: 'Winter',
        year: 2019,
        seasonGames: 90,
        stores: [
            {
                storeId: 12,
                storeCity: 'Brunswick',
                divisionId: 1,
                dayName: 'Monday',
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

console.log({ results, players, teams, seasons, champions, stores, divisions, schedules, standings });
