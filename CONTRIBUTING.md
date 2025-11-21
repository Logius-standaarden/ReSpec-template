# Richtlijnen voor contributies

Dit document bevat richtlijnen voor wijzigingen aan Respec standaard documenten voor Logius doeleinden.

## Diagrammen/afbeeldingen

- Maak afbeeldingen indien mogelijk aan in SVG of een ander vector formaat.
Deze kunnen gemaakt worden met verschillende applicaties zoals Mermaid (voorkeur) en draw.io.
- Plaats de bronbestanden van vector afbeeldingen zoals van draw.io in een `diagrammen/` folder.
Als het om een Mermaid diagram is, eindigt het bestand met `.mermaid`.
- Plaats de exports van de afbeeldingen in de `media/` folder. bij voorkeur in `.svg` formaat en anders `.png`
- Hergebruik in de diagrammen de Logius huisstijl kleuren, afbeeldingen en fonts

## Afkortingen

- Schrijf bij het eerste gebruik van een Meerletterig Acroniem (MLA) de afkorting uit.
- Maak verder in de tekst gebruik van pop-ups om de verklaring van een acroniem te tonen bij een mouse-over (https://respec.org/docs/#abbreviations).

## Toegankelijkheid/WCAG checks

Er draaien automatisch WCAG checks met `axe-core`.
Deze checks zijn leidend, maar hierbij wat richtlijnen om aan deze checks te kunnen voldoen:

### Tekst

- Gebruik headings (dus `#`) in plaats van styling (cursief, vetgedrukt, etc...)
- Indien verwezen wordt in de tekst naar aspecten die mogelijk niet waargenomen kunnen worden door de lezer geef dan ook een tekstuele beschrijving met dezelfde informatie.  (bv bij een verwijzing naar een onderdeel van een diagram :zoals "zie de onderdelen binnen de gestippelde lijnen", dezelfde informatie ook in de tekstuele toelichting opnemen)
- Gebruik voor normale tekst minimaal contrast  4,5:1. Teksten groter dan 24 pixels (of 19 pixels voor dikgedrukte tekst) moeten een minimaal contrast hebben van 3,0:1. 
(Grote tekst en afbeeldingen van grote tekst hebben een contrastverhouding van ten minste 3:1;)
- Plaats tekst als tekst en niet als afbeelding (in geval er alleen tekst op de afbeelding staat)

### Afbeeldingen

- Vul het alt attribuut meteen (korte) omschrijving te geven van wat daadwerkelijk in de afbeelding te zien is.
(Een andere optie is de visuele informatie uit te schrijven op de pagina of op een andere pagina. In het alt-attribuut van het img-element kan vervolgens naar deze beschrijving worden verwezen)
- Gebruik naast kleur ook andere kenmerken om informatie over te brengen bv vorm of arcering
- Gebruik een contrastverhouding van ten minste 3:1 ten opzichte van aangrenzende kleuren binnen een afbeelding
