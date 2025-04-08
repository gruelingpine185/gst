const company = {
  name: "GST",
  fullName: "Global Security Technologies"
};

const footerSection = {
  copywrite: `\xa9 ${new Date().getFullYear()} ${company.fullName}`,
  columns: [
    {
      title: company.name,
      links: [
        {
          text: "About Us",
          href: "#"
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
      title: "Features",
      links: []
    },
    {
      title: "Solutions",
      links: []
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
  footerSection
};

module.exports = {
  data
};
