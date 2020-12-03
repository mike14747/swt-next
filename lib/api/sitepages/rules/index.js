const db = require('../../../../config/db');
const SQL = require('sql-template-strings');

export default async function getRules() {
    return await db.query(SQL`SELECT content_heading, page_content FROM store_text WHERE store_id=97;`);
}
