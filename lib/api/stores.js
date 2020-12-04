import db from '../../config/db';
import SQL from 'sql-template-strings';

const getStoreDetails = async (params) => {
    return await db.query(SQL`SELECT s.store_id, s.store_name, d.division_id, d.day_name FROM (SELECT store_id, store_name FROM stores WHERE store_id=${params.store} LIMIT 1) AS s, (SELECT division_id, day_name FROM divisions WHERE division_id=${params.division} LIMIT 1) AS d`);
};

module.exports = {
    getStoreDetails,
};
