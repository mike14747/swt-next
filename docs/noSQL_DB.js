const result = {
    id: 'some_ObjectId()',
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
        player1: {
            playerId: 311,
            playerName: 'Michaiah Rundell',
            scores: [370, 180, 180, 130, 180, 200, 190, 190, 270, 530],
            totalPoints: 2420,
        },
        player2: {
            playerId: 289,
            playerName: 'Gun Chao',
            scores: [310, 100, 160, 280, 190, 220, 360, 300, 150, 170],
            totalPoints: 2240,
        },
        player3: {
            playerId: 337,
            playerName: 'Tiffany Ruic',
            scores: [540, 420, 450, 450, 440, 450, 250, 630, 460, 130],
            totalPoints: 4220,
        },
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
        player1: {
            playerId: 3428,
            playerName: 'Antonio Bassiotta',
            scores: [540, 360, 450, 560, 540, 620, 360, 360, 320, 460],
            totalPoints: 4570,
        },
        player2: {
            playerId: 3427,
            playerName: 'Rob Quinn',
            scores: [270, 220, 630, 450, 270, 390, 200, 350, 290, 390],
            totalPoints: 3460,
        },
        player3: {
            playerId: 3463,
            playerName: 'Max Schindler',
            scores: [190, 320, 220, 190, 260, 270, 540, 530, 540, 280],
            totalPoints: 3340,
        },
        results: {
            wins: 9,
            losses: 1,
            ties: 0,
            teamScores: [1000, 900, 1300, 1200, 1070, 1280, 1100, 1240, 1150, 1130],
            totalPoints: 11370,
        },
    },
};

console.log(result);
