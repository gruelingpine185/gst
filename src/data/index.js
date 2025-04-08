const common = require('./common.js').data;

const data = {
  title: `Home | ${common.company.name}`,
  heroSection: {
    title: "Your data is yours.\nLet\'s keep it that way",
    bullets: [
      "Infrastructure observability",
      "Real-time network and application topology mapping",
      "Continuous penetration testing"
    ],
    button: {
      text: "Request a Demo"
    },
    image: {
      path: "#",
      alt: ""
    }
  },
  featureSection: {
    title: "Know Your Vulnerabilities Before They Do"
  },
  demoSection: {
    title: "Request a Demo"
  },
  footerSection: common.footerSection
};

module.exports = {
  data
};
