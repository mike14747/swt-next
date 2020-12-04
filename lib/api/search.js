import db from '../../config/db';
import SQL from 'sql-template-strings';

const getPlayerSearchResults = async (queryString) => {
    const queryCriteria = `%${queryString}%`;

    return await db.query(SQL`SELECT pl.player_id, pl.full_name, GROUP_CONCAT(s.store_city ORDER BY s.store_city SEPARATOR", ") AS cities FROM (SELECT DISTINCT r.store_id, p.player_id, p.full_name FROM (SELECT player_id, full_name FROM players WHERE full_name LIKE ${queryCriteria}) AS p INNER JOIN results AS r ON (p.player_id=r.player_id)) AS pl INNER JOIN stores AS s ON (s.store_id=pl.store_id) GROUP BY pl.player_id ORDER BY pl.full_name;`);
};

const getTeamSearchResults = async (queryString) => {
    const queryCriteria = `%${queryString}%`;

    return await db.query(SQL`SELECT te.team_id, te.team_name, GROUP_CONCAT(s.store_city ORDER BY s.store_city SEPARATOR", ") AS cities FROM (SELECT DISTINCT r.store_id, t.team_id, t.team_name FROM (SELECT team_id, team_name FROM teams WHERE team_name LIKE ${queryCriteria}) AS t INNER JOIN results AS r ON (t.team_id=r.team_id)) AS te INNER JOIN stores AS s ON (s.store_id=te.store_id) GROUP BY te.team_id ORDER BY te.team_name;`);
};

module.exports = {
    getPlayerSearchResults,
    getTeamSearchResults,
};
