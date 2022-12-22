var respecConfig = {
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "WV",
  specType: "HR",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2022-06-24",
  publishVersion: "0.0.1",
  title: "titleText",
  // previousPublishVersion: "(none)",
  content: {"ch01": "informative", "ch02": ""},
  editors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  authors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  github: "https://github.com/Logius-standaarden/ReSpec-template",

  // REVIEW: moet hier nog niet die postProces voor mermaid komen te staan?
    postProcess: [window.respecMermaid.createFigures],
 
    // Create PDF and link to file in header:
  // alternateFormats: [
  //     {
  //         label: "pdf",
  //         uri: "rename-me.pdf",
  //     },
  // ],
};
