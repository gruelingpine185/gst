const common = require('./common').data;

const data = {
    common: common,
    hero: {
        title: "Your data is yours.\nLet\'s keep it that way",
        bullets: [], // TODO: populate with main features
        button: {
            text: "Request a demo"
        },
        image: {
            // TODO: add hero image
            path: "#",
            alt: ""
        }
    }
};

module.exports = {
    data
};
