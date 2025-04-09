const companyName = "GST";
const companyFullName = "Global Security Technologies";

const company = {
  name: companyName,
  fullName: companyFullName,
  bio: [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quasi odio natus quae pariatur!",
    "Numquam atque ea molestiae voluptates, sunt rem. Consequuntur nostrum culpa veritatis expedita, illo maiores itaque amet?"
  ]
};

const footerSection = {
  copywrite: `\u00a9 ${new Date().getFullYear()} ${company.fullName}`,
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
