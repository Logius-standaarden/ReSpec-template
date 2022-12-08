var organisationConfig = {
    // nl_organisationName is used in the header (and Sotd)
    nl_organisationName: "Logius",

    // this url points to the folder where organsation specific css files are stored
    // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
    nl_organisationStylesURL: "https://gitdocumentatie.logius.nl/publicatie/respec/style/",

    // nl_organisationPublishURL points to organisation specifica publication page, used in header
    // defaults to  https://docs.geostandaarden.nl/"
    nl_organisationPublishURL: "https://gitdocumentatie.logius.nl/publicatie/",

    // nl_logo refers to company logo
    // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
    nl_logo: {
        src: "https://gitdocumentatie.logius.nl/publicatie/respec/style/logos/figure-logius.svg",
        alt: "Logius",
        id: "Logius",
        height: 77,
        width: 44,
        url: "https://www.logius.nl/standaarden",
    },

    sotdText: {
        nl: {
          sotd: "Status van dit document",
          def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
          wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door goedgekeurde consultatieversie.`,
          cv: `Dit is een door goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar `,
          vv: `Dit is een definitief concept van de volgende versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
          basis: "Dit is een document zonder officiële status.",
        },
        en: {
          sotd: "Status of This Document",
          def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
          wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by.`,
          cv: `This is a proposed recommendation approved by. Comments regarding this document may be sent to `,
          vv: `This is the definitive concept of the coming release of this document. Edits resulting from consultations have been applied.`,
          basis: "This document has no official standing.",
        },
    },
	
	localBiblio: {
	"SemVer": {
            href: "https://semver.org",
            title: "Semantic Versioning 2.0.0",
            authors: ["T. Preston-Werner"],
            date: "June 2013"
        }
    },
}
