const path = require('path');
const config = require('../config');
const index = require('../routes/index').data;
const express = require('express');
const { rateLimit } = require('express-rate-limit');

const handleError = ({app, error}) => {
    app.use((req, res, next) => {
        res.status(error.code).render('pages/error', {
            company: company,
            error: error
        });
    });
};

const setRoutes = ({app}) => {
    app.get('/', (req, res) => {
        res.render('pages/index', index);
    });

    handleError({
        app: app,
        error: {
            code: 404,
            message: "Looks like you\'re lost :/"
        }
    });

    handleError({
        app: app,
        error: {
            code: 529,
            message: "Too many requests, try again later."
        }
    });

    app.listen(config.port, () => {
        console.log(`Live at http://localhost:${config.port}`);
    });
};

const init = ({app}) => {
    const limiter = rateLimit({
        windowMs: 1000 * 60 * 15,
        limit: 100,
        standardHeaders: true,
        legacyHeaders: false
    });

    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(limiter);
    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'ejs');
    setRoutes({app});
};

module.exports = {
    init
}
