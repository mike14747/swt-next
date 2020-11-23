const db = require('../../../config/db');
const SQL = require('sql-template-strings');

function groupStandings(unGroupedStandings) {
    let storeDiv, index, standingObj;
    return unGroupedStandings.reduce((acc, obj) => {
        storeDiv = obj.store_division;
        standingObj = {
            standingsId: obj.standings_id,
            teamId: obj.team_id,
            teamName: obj.team_name,
            wins: obj.wins,
            losses: obj.losses,
            ties: obj.ties,
            totalPoints: obj.total_points,
        };
        index = acc.findIndex(item => item.storeDivision === storeDiv);
        if (index === -1) {
            acc.push({
                storeDivision: obj.store_division,
                storeId: obj.store_id,
                storeCity: obj.store_city,
                divisionId: obj.division_id,
                dayName: obj.day_name,
                standingsList: [standingObj],
            });
        } else {
            acc[index].standingsList.push(standingObj);
        }
        return acc;
    }, []);
}

module.exports = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const standings = await db.query(SQL`SELECT st.standings_id, CONCAT(st.store_id,st.division_id) AS store_division, s.store_id, s.store_city, t.team_id, t.team_name, st.wins, st.losses, st.ties, st.total_points, d.division_id, d.day_name FROM standings AS st JOIN stores AS s ON (st.store_id=s.store_id) JOIN teams AS t ON (st.team_id=t.team_id) JOIN divisions AS d ON (st.division_id=d.division_id) WHERE st.season_id=${req.query.id} ORDER BY s.store_city ASC, d.division_id ASC, st.standings_order ASC;`);
                return standings.error ? res.status(500).end() : res.status(200).json({ standings: groupStandings(standings) });
            } catch (error) {
                res.status(500).end();
            }
            break;
        default:
            res.status(401).end();
    }
};
