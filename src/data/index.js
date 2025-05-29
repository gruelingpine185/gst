const common = require('./common.js').data;

const data = {
  company: common.company,
  title: `Home | ${common.company.name}`,
  navSection: common.navSection,
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
        href: "/res/events.svg",
        title: `${common.company.name} Overwatch`,
        text: "Gain complete visibility into your systems with real-time infrastructure \
               observability \u2014 identify anomalies, predict failures, and optimize \
               performance before issues impact operations."
      },
      {
        href: "/res/fuzzing.svg",
        title: `${common.company.name} Breakthrough`,
        text: "Stay ahead of attackers with automated, continuous penetration \
               testing that simulates real-world threats and delivers actionable \
               insights to harden your defenses 24/7."
      },
      {
        href: "/res/network.svg",
        title: `${common.company.name} NetCommand`,
        text: "Visualize and manage your entire network landscape with dynamic \
               topology mapping, enabling faster threat detection, segmentation, \
               and streamlined policy enforcement."
      }
    ],
    paragraphs: [
    ]
  },
  productSection: [
    {
      title: `${common.company.name} Overwatch`,
      features: [
        "Real-Time Monitoring",
        "Anomaly Detection & Forecasting",
        "Performance Optimization",
        "Unified Visibility",
        "Low Maintenance, High Clarity"
      ],
      bullets: [
        "Get instant insights into system health with continuous infrastructure tracking and dynamic dashboards.",
        "Leverage predictive analytics to detect irregular behavior and preempt system failures before they occur.",
        "Consolidate logs, metrics, and traces into a single pane of glass for comprehensive observability.",
        "Designed for ease of use, with intuitive setup and minimal ongoing configuration required.",
        "Identify bottlenecks and underutilized resources to ensure peak performance across all environments."
      ]
    },
    {
      title: `${common.company.name} Breakthrough`,
      features: [
        "Always-On Threat Simulation",
        "Actionable Security Insights",
        "Automation-Driven Testing",
        "Threat intelligence integration",
        "Compliance-Ready Reporting"
      ],
      bullets: [
        "Perform continuous, real-world attack simulations to uncover vulnerabilities before bad actors do.",
        "Receive prioritized, easy-to-understand remediation recommendations to improve defenses quickly.",
        "Reduce manual workload with fully automated pen testing workflows that run on your schedule.",
        "Stay protected with the latest attack techniques modeled from global threat data.",
        "Generate audit-ready reports that align with common regulatory and security frameworks."
      ]
    },
    {
      title: `${common.company.name} NetCommand`,
      features: [
        "Live Topology Mapping",
        "Accelerated Threat Detection",
        "Simplified Network Segmentation",
        "Centralized Policy Management",
        "Intuitive Interface, Powerful Control"
      ],
      bullets: [
        "Visualize your entire network in real-time with interactive maps that update as your environment changes.",
        "Spot anomalies and suspicious patterns faster with contextual network insights.",
        "Enforce zero-trust principles with easy-to-configure, policy-based segmentation.",
        "Streamline enforcement of access rules and compliance controls across hybrid environments.",
        "Designed for clarity and speed — empower IT and security teams with tools they’ll actually want to use."
      ]
    }
  ],
  demoSection: {
    title: "Request a Demo"
  },
  footerSection: common.footerSection
};

module.exports = {
  data
};
