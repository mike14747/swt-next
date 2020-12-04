import db from '../../config/db';
import SQL from 'sql-template-strings';

const getSeasonDetails = async (params) => {
    return await db.query(SQL`SELECT se.season_id, se.season_name, se.year FROM seasons AS se WHERE se.season_id=${params.season} LIMIT 1;`);
};

module.exports = {
    getSeasonDetails,
};
