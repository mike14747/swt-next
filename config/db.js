const mysql = require('serverless-mysql');

let db;

if (process.env.NODE_ENV === 'development') {
    db = mysql({
        config: {
            host: process.env.DB_HOST_DEV,
            port: process.env.DB_PORT_DEV,
            user: process.env.DB_USER_DEV,
            password: process.env.DB_PW_DEV,
            database: process.env.DB_NAME_DEV,
        },
    });
} else {
    db = mysql({
        config: {
            host: process.env.DB_HOST_PROD,
            port: process.env.DB_PORT_PROD,
            user: process.env.DB_USER_PROD,
            password: process.env.DB_PW_PROD,
            database: process.env.DB_NAME_PROD,
        },
    });

    // const url = new URL(process.env.JAWSDB_URL);
    // db = mysql({
    //     config: {
    //         host: url.hostname,
    //         port: url.port,
    //         user: url.username,
    //         password: url.password,
    //         database: url.pathname.replace('/', ''),
    //     },
    // });
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
