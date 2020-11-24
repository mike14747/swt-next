const db = require('../../../../config/db');
const SQL = require('sql-template-strings');

module.exports = async (req, res) => {
    console.log('Inside the /api/schedules/navbar/24 endpoint');
    switch (req.method) {
        case 'GET':
            try {
                const data = await db.query(SQL`SELECT DISTINCT sc.division_id, d.day_name, s.store_id, s.store_city, CONCAT(s.store_id,sc.division_id) AS store_division FROM schedule AS sc JOIN divisions AS d ON (sc.division_id=d.division_id) JOIN stores AS s ON (sc.store_id=s.store_id) WHERE sc.season_id=${req.query.id} && s.active=1 ORDER BY s.store_city, d.division_id ASC;`);
                console.log(data);
                let storesInSchedule = [];
                if (data && data.length > 0) {
                    storesInSchedule = data.map(storeDiv => (
                        {
                            id: storeDiv.store_division,
                            text: storeDiv.store_city + ' (' + storeDiv.day_name + ')',
                            href: '/' + storeDiv.store_id + '/' + storeDiv.division_id,
                        }
                    ));
                }
                return data.error ? res.status(500).end() : res.status(200).json({ storesInSchedule });
            } catch (error) {
                res.status(500).end();
            }
            break;
        default:
            res.status(401).end();
    }
};