import db from '../../config/db';
import SQL from 'sql-template-strings';

const getNavbarStoresList = async (seasonId) => {
    return await db.query(SQL`SELECT DISTINCT sc.division_id, d.day_name, s.store_id, s.store_city, CONCAT(s.store_id,sc.division_id) AS store_division FROM schedule AS sc JOIN divisions AS d ON (sc.division_id=d.division_id) JOIN stores AS s ON (sc.store_id=s.store_id) WHERE sc.season_id=${seasonId} && s.active=1 ORDER BY s.store_city, d.division_id ASC;`);
};

module.exports = {
    getNavbarStoresList,
};
