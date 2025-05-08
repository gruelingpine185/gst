const common = require('./common.js').data;

const data = {
  company: common.company,
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
      href: "#",
      alt: ""
    }
  },
  featureSection: {
    title: "Know Your Vulnerabilities Before They Do",
    cards: [
      {
        href: "#",
        text: "blah"
      },
      {
        href: "#",
        text: "blahhhhh"
      },
      {
        href: "#",
        text: "blahhhhh"
      }
    ]
  },
  demoSection: {
    title: "Request a Demo"
  },
  footerSection: common.footerSection
};

module.exports = {
  data
};
