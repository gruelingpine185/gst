const common = require('../data/common');

const data = {
    company: common.company,
    heroSection: {
        title: "Your data is yours.\nLet\'s keep it that way",
        bullets: [], // TODO: populate with main features
        button: {
            text: "Request a demo"
        },
        image: {
            // TODO: add heroSection image
            path: "#",
            alt: ""
        }
    }
};

const init = ({app}) => {
    app.get('/', (req, res) => {
        res.render('pages/index', data);
    });
};

module.exports = {
    init
};
