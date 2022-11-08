## ReSpec template instructies

ReSpec is een tool om html en pdf documenten te genereren op basis van markdown content.

Gebruik de knop [_Use this template_](https://github.com/Logius-standaarden/ReSpec-template/generate) om aan de slag te gaan.

De dynamische pagina is [hier](https://logius-standaarden.github.io/ReSpec-template/) te zien.

Deze repository bevat ook de GitHub Workflows om een statische HTML-pagina en PDF-document te genereren en enkele controles uit te voeren.

### Vereiste voor gebruik
- Kennis van git/github
- Kennis van markdown
- Kennis van de vorm van een Javascript object
- Een plek om de documentatie te hosten

### Gebruikers instructie
Om het gebruik van dit template makkelijker te maken raden we het aan om een IDE te gebruiken. Die geeft een voorbeeld van hoe de markdown eruit zal zien, kan laten zien of de config files nog in de correcte vorm zijn en kan helpen in het gebruik van git.  
Een gratis voorbeeld van een IDE is: [Visual studio code](https://code.visualstudio.com/)  

Aanpassingen maken aan het document gaat op 2 manieren:
- De configuratie van het document aanpassing in de config files
- Markdown files toevoegen/veranderen

De **configuratie files** bevat informatie over de organisatie en over 
de status van het document. Bekijk de [Logius ReSpec wiki](https://github.com/Logius-standaarden/respec/wiki) 
voor meer informatie over de configuratieopties. De files zijn gesplitst in 2 files:
[organisation-config.js](js/organisation-config.js) en [config.js](js/config.js)  

De organisation_config bevat informatie over de organisatie, de informatie in deze file 
zal bijna nooit veranderen zoals de naam van de organisatie. Het wordt aangeraden de file 
zelf te hosten zodat hij in alle documentatie van de organisatie gebruikt kan worden en
niet elke keer gekopieerd te worden.

De document_config zal informatie bevatten die alleen relevant is voor het huidige document.

**Markdown files** bevatten de content van het document. Alle content
kan in 1 document, maar het is aan te raden om de content te splitsen
in verschillende files met een toepasselijke naam om onderhoud 
makkelijker te maken.

Na het toevoegen van een nieuwe markdown file moet hij toegevoegd worden
aan de [index.html](index.html). Je voegt hem toe door  
```<section data-include-format="markdown" data-include="filenaam.md"></section>```  
toe te voegen aan de ```<body>``` van de index file. Vervang "filenaam.md" door de naam 
van de markdown file die je toe wilt voegen.
De volgorde van de sections bepaald de volgorde in het resulterende document.

### Automatische controles
Bij het uploaden van een nieuwe versie naar github worden er via github actions 2 controles 
uitgevoerd:  

Een WCAG-check (Web Content Accessibility Guidelines), deze guidelines
gemaakt door W3C zorgen voor een verbetering van de toegankelijkheid
van webapplicaties verbeterd voor zowel verschillende apparaten 
als voor mensen met een beperking.

Een link-check, Deze check controleert of alle links die in het 
document staan ook naar iets wijzen.

### Publiceren van documenten
Na het pullen van een nieuwe versie word er een statische HTML en een PDF-versie gemaakt.
 Deze kunnen dan gehost worden op een plek met publieke documentatie.
