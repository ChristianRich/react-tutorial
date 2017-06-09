module.exports = (req, res) => {
    res.render('home/index', {
        meta: {
            title: 'React.js demo'
        }
    });
};
