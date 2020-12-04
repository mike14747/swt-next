function formatResults(results) {
    const resultsArray = results.map((result, index) => {
        const tempObj = {};
        tempObj.id = index;
        tempObj.week_id = result.week_id;
        tempObj.date = result.week_date1;
        tempObj.away_team = {
            team_id: result.away_team_id,
            team_name: result.at,
            wins: 0,
            losses: 0,
            ties: 0,
            game_totals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            game_results: [],
            team_total: 0,
            players: [],
        };
        tempObj.home_team = {
            team_id: result.home_team_id,
            team_name: result.ht,
            wins: 0,
            losses: 0,
            ties: 0,
            game_totals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            game_results: [],
            team_total: 0,
            players: [],
        };
        for (let p = 1; p <= 3; p++) {
            const awayPlayerObj = {
                player_id: result['ap' + p + 'id'],
                name: result['ap' + p],
                scores: [],
                total_points: 0,
            };
            const homePlayerObj = {
                player_id: result['hp' + p + 'id'],
                name: result['hp' + p],
                scores: [],
                total_points: 0,
            };
            for (let g = 1; g <= 10; g++) {
                tempObj.away_team.game_totals[g - 1] += Number(result['ap' + p + 'g' + g]);
                tempObj.away_team.team_total += Number(result['ap' + p + 'g' + g]);
                tempObj.home_team.game_totals[g - 1] += Number(result['hp' + p + 'g' + g]);
                tempObj.home_team.team_total += Number(result['hp' + p + 'g' + g]);
                awayPlayerObj.total_points += Number(result['ap' + p + 'g' + g]);
                awayPlayerObj.scores.push(Number(result['ap' + p + 'g' + g]));
                homePlayerObj.total_points += Number(result['hp' + p + 'g' + g]);
                homePlayerObj.scores.push(Number(result['hp' + p + 'g' + g]));
            }
            tempObj.away_team.players.push(awayPlayerObj);
            tempObj.home_team.players.push(homePlayerObj);
        }
        for (let t = 0; t <= 9; t++) {
            if (tempObj.away_team.game_totals[t] > tempObj.home_team.game_totals[t]) {
                tempObj.away_team.wins += 1;
                tempObj.away_team.game_results.push('w');
                tempObj.home_team.losses += 1;
                tempObj.home_team.game_results.push('l');
            } else if (tempObj.away_team.game_totals[t] < tempObj.home_team.game_totals[t]) {
                tempObj.away_team.losses += 1;
                tempObj.away_team.game_results.push('l');
                tempObj.home_team.wins += 1;
                tempObj.home_team.game_results.push('w');
            } else {
                tempObj.away_team.ties += 1;
                tempObj.away_team.game_results.push('t');
                tempObj.home_team.ties += 1;
                tempObj.home_team.game_results.push('t');
            }
        }
        return tempObj;
    });
    return resultsArray;
}

module.exports = {
    formatResults,
};
