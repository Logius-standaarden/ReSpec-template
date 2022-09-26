## Template document ReSpec

Gebruik de knop [_Use this template_](https://github.com/Logius-standaarden/ReSpec-template/generate) om aan de slag te gaan.

De dynamische pagina is [hier](https://logius-standaarden.github.io/ReSpec-template/) te zien.

Deze repository bevat ook de GitHub Workflows om een statische HTML-pagina en PDF-document te genereren en enkele controles uit te voeren.

### Gebruikers instructie
Om aanpassingen te maken zijn er 2 opties:
- De configuratie van het document aanpassing in de config files
- Markdown files toevoegen

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

Een WCAG-check (Web Content Accessibility Guidelines), Deze guidlines
gemaakt door W3C zorgen voor een verbetering van de toegankelijkheid
van webapplicaties verbeterd voor zowel verschillende apparaten 
als voor mensen met een beperking.

Een link-check, Deze check controleert of alle links die in het 
document staan ook naar iets wijzen.