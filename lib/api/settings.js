const db = require('../../config/db');
const SQL = require('sql-template-strings');

module.exports = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const settings = await db.query(SQL`SELECT current_season_id, display_schedule, show_reg_button, reg_button_url, reg_button_text, num_leaders, tourny_rankings_status, text_box_heading, text_box_text FROM settings WHERE setting_id=1;`);
                return settings.error ? res.status(500).end() : res.status(200).json(settings);
            } catch (error) {
                res.status(500).end();
            }
            break;
        default:
            res.status(401).end();
    }
};
