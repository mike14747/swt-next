export default (req, res) => {
    res.statusCode = 200;
    res.json({ message: 'This is the /api root!' });
};
