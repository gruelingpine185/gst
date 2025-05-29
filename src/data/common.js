const companyName = "GST";
const companyFullName = "Global Security Technologies";

const company = {
  name: companyName,
  fullName: companyFullName,
  bio: [
    `${companyFullName} is a purpose-built cybsersecurity company striving to \
help companies identify and patch vulnerabilities in their software and \
infrastructure. Through our services, companies can serve their clients with \
the assurance that their data is secure and products are both resilient and \
aligned with industry best practices.`
  ]
};

const navSection = {
  left: {
    links: []
  },
  right: {
    links: [
      {
        text: "Overwatch",
        href: "#"
      },
      {
        text: "Breakthrough",
        href: "#"
      },
      {
        text: "NetCommand",
        href: "#"
      },
      {
        text: "Demo",
        href: "#"
      }
    ]
  }
};

const footerSection = {
  copywrite: `\u00a9 ${new Date().getFullYear()} ${company.fullName}`,
  columns: [
    {
      title: "Company",
      links: [
        {
          text: "About Us",
          href: ""
        },
        {
          text: "Careers",
          href: "#"
        },
        {
          text: "Press",
          href: "#"
        }
      ]
    },
    {
      title: "Resources",
      links: [
        {
          text: "Customer Stories",
          href: "#"
        },
        {
          text: "Blog",
          href: "#"
        }
      ]
    }
  ]
};

const data = {
  company,
  navSection,
  footerSection
};

module.exports = {
  data
};
