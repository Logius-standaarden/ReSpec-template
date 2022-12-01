## ReSpec template instructies

ReSpec is een tool om html en pdf documenten te genereren op basis van markdown content.

Gebruik de knop [_Use this template_](https://github.com/Logius-standaarden/ReSpec-template/generate) om aan de slag te gaan. Dit maakt een kopie van de template in uw eigen GitHub repository die dan aangepast en uitgebreid kan worden.

De dynamische pagina is van het template document [hier](https://logius-standaarden.github.io/ReSpec-template/) te zien.

Deze repository bevat ook de GitHub Workflows om een statische HTML-pagina en PDF-document te genereren en enkele controles uit te voeren. Deze worflows worden 
automatisch gerunt zodra er een aanpassing gedaan word aan de main branch.

### Vereiste voor gebruik
- Kennis van git/github
- Kennis van markdown en/of HTML
- Kennis van de vorm van een Javascript object
- Een webserver om de documentatie te hosten

### Gebruikers instructie
Om het gebruik van dit template makkelijker te maken raden we het aan om een IDE te gebruiken. Die geeft een voorbeeld van hoe de markdown eruit zal zien, kan laten zien of de config files nog in de correcte vorm zijn en kan helpen in het gebruik van git.  
Een gratis voorbeeld van een IDE is: [Visual studio code](https://code.visualstudio.com/).

Aanpassingen maken aan het document gaat op 2 manieren:
- De configuratie van het document aanpassing in de config files
- Markdown files toevoegen/veranderen

De **configuratie files** bevat informatie over de organisatie en over 
de status van het document. Bekijk de [Logius ReSpec wiki](https://github.com/Logius-standaarden/respec/wiki) 
voor meer informatie over de configuratieopties. De files zijn gesplitst in 2 files:
[organisation-config.js](js/organisation-config.js) en [config.js](js/config.js).

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
aan de [index.html](index.html). Je voegt hem toe door de naam en eventueel relevante CSS class 
toe te voegen aan het ```content``` object in de ```config.js```. 
De volgorde van ```content``` bepaald de volgorde in het resulterende document.

### Automatische controles
Bij het uploaden van een nieuwe versie naar github worden er via github actions 2 controles 
uitgevoerd:  

Een WCAG-check (Web Content Accessibility Guidelines), deze guidelines
gemaakt door W3C zorgen voor een verbetering van de toegankelijkheid
van webapplicaties verbeterd voor zowel verschillende apparaten 
als voor mensen met een beperking.

Een link-check, deze check controleert of alle links die in het 
document staan ook naar iets wijzen.

outputs van deze tests zijn te vinden in het tabblad `Actions` in de GitHub repository.

### Publiceren van documenten
Na het pullen van een nieuwe versie wordt er een statische HTML en een PDF-versie gemaakt.
Dit zijn snapshot.html en doc.pdf, deze files kunnen dan gepubliceerd worden.
