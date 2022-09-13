## Template document ReSpec

Gebruik de knop [_Use this template_](https://github.com/Logius-standaarden/ReSpec-template/generate) om aan de slag te gaan.

De dynamische pagina is [hier](https://logius-standaarden.github.io/ReSpec-template/) te zien.

Deze repository bevat ook de GitHub Workflows om een statische HTML-pagina en PDF-document te genereren en enkele controles uit te voeren.

### Gebruikers instructie
Om aanpassingen te maken zijn er 2 opties:
- De configuratie van het document aanpassing in ["js/config.js"](js/config.js)
- Markdown files toevoegen

De **configuratie file** bevat informatie over de organisatie en over 
de status van het document. Bekijk de [Logius ReSpec wiki](https://github.com/Logius-standaarden/respec/wiki) voor meer informatie over de configuratie opties.

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