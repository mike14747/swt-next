const db = require('../../config/db');
const SQL = require('sql-template-strings');

const getCurrentSeasonId = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const [settings] = await db.query(SQL`SELECT current_season_id FROM settings WHERE setting_id=1;`);
            console.log('settings:', settings);
            return JSON.parse(JSON.stringify(settings));
        } catch (error) {
            return { error: 'An error occurred trying to fetch data.' };
        }
    } else {
        return { error: 'Only GET methods are allowed.' };
    }
};

export default getCurrentSeasonId;
