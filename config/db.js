const mysql = require('serverless-mysql');

let db;

if (process.env.NODE_ENV === 'development') {
    db = mysql({
        config: {
            host: process.env.DB_HOST_DEV,
            database: process.env.DB_NAME_DEV,
            user: process.env.DB_USER_DEV,
            password: process.env.DB_PW_DEV,
        },
    });
} else {
    db = mysql({
        config: {
            host: process.env.DB_HOST_PROD,
            database: process.env.DB_NAME_PROD,
            user: process.env.DB_USER_PROD,
            password: process.env.DB_PW_PROD,
        },
    });
}

exports.query = async (query) => {
    try {
        const results = await db.query(query);
        await db.end();
        return results;
    } catch (error) {
        return { error };
    }
};
