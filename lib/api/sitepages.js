import db from '../../config/db';
import SQL from 'sql-template-strings';

const getRules = async () => {
    return await db.query(SQL`SELECT content_heading, page_content FROM store_text WHERE store_id=97;`);
};

module.exports = {
    getRules,
};
