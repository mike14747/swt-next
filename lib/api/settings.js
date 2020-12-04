import db from '../../config/db';
import SQL from 'sql-template-strings';

async function getSettings() {
    return await db.query(SQL`SELECT current_season_id, display_schedule, show_reg_button, reg_button_url, reg_button_text, num_leaders, tourny_rankings_status, text_box_heading, text_box_text FROM settings WHERE setting_id=1;`);
}

module.exports = {
    getSettings,
};
