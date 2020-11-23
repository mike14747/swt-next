const db = require('../../../../config/db');
const SQL = require('sql-template-strings');

module.exports = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const [rules] = await db.query(SQL`SELECT content_heading, page_content FROM store_text WHERE store_id=97;`);
                return rules.error ? res.status(500).end() : res.status(200).json({ rules });
            } catch (error) {
                res.status(500).end();
            }
            break;
        default:
            res.status(401).end();
    }
};
