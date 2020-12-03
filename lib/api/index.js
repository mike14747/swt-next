export default (req, res) => {
    console.log(res);
    res.statusCode = 200;
    res.json({ message: 'This is the /api root!' });
};
