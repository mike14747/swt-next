const db = require('../../config/db');
const SQL = require('sql-template-strings');

module.exports = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const champions = await db.query(SQL`SELECT s.season_id, s.season_name, s.year, s.tourny_team_id, t.team_name, st.store_city, s.comments FROM seasons AS s JOIN teams AS t ON t.team_id=s.tourny_team_id JOIN stores AS st ON st.store_id=t.store_id WHERE s.tourny_team_id>0 ORDER by s.season_id ASC;`);
                return champions.error ? res.status(500).end() : res.status(200).json({ champions });
            } catch (error) {
                res.status(500).end();
            }
            break;
        default:
            res.status(401).end();
    }
};
