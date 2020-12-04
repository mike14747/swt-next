import db from '../../config/db';
import SQL from 'sql-template-strings';

const getSomething = async () => {
    return await db.query(SQL``);
};

module.exports = {
    getSomething,
};
