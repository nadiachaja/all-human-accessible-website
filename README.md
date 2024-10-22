# Accessible Website

Tumi Mondo is een platform waar kinderen van 6 maanden t/m een jaar hun taalontwikkeling kunnen verbeteren en stimuleren. Dit geeft voordelen voor het leerproces, vermindering van geestelijke ziektes en het vergroten van sociale vaardigheden.

Tumi Mondo heeft zelf onderzoek gedaan om te kunnen kijken of er platform zijn die kinderen helpt bij de taalontwikkeling. Ze zijn tot de conclusie gekomen dat er momenteel nog geen ontwikkelingen-of leermethodes voor zijn.

Daarom hebben zij als opdracht gegeven: Maak een gedeelte van de app die je op alle apparaten kan gebruiken. Je mag het originele design aanhouden, maar het mag ook worden veranderd.

link naar de homepagina:https://nadiachaja.github.io/all-human-accessible-website/

## Inhoudsopgave

  * [Design](#design)
  * [Werking](#werking)
  * [Responsive](#responsive)
  * [Toegankelijkheid](#toegankelijkheid)
  * [Kenmerken](#kenmerken)
  * [Licentie](#licentie)
  

## Design
We hadden een bestand gekregen in [Figma](https://www.figma.com/design/RDlD4etdXBvcOW9AAqueBz/TuMiMundo_FDND_Prototype?node-id=0-1&node-type=canvas&t=v3bWNzXjRyCss1Qm-0) waar alle pagina's al stonden en daar moechten we we kiezen welke we wilde maken. Ik heb voor de homepagina gekozen met het menu.


## Werking
Op de homepagina kan je op het hamburger menu klikken en dan komt het menu in beeld. 
In het tekstwolkje staat Let's do it! en als je daar op klikt moet je naar de pagina Lessons gaan. Ik heb die pagina nog niet, maar de link staat er wel al. Dat is hetzelfde voor de kopjes met de linkje in het menu.

In het tekstwolkje verandert de tekst met de tijd mee. 

Good morning van 6 uur ’s ochtends t/m 12 uur ’s middags.

Good afternoon van 12 uur ’s middags t/m 6 uur ’s avonds.

Good evening van 6 uur ’s avonds t/m 12 uur ’s nachts.

Na 12 uur ’s nachts veranderd de tekst in Good night en de tekst eronder veranderd in It’s time to sleep en I see you tomorrow dat is t/m 6 uur ’s ochtends.

## Responsive
De pagina's zijn te gebruiken voor telefoon, tablet en laptop. 

Telefoon 

<img width="136" alt="telefoon" src="https://github.com/user-attachments/assets/6d741be5-ee9a-497f-bebe-2032bbef5255">  <img width="135" alt="telefoon met menu" src="https://github.com/user-attachments/assets/15515374-64a6-4c79-8ea4-659da099742b">


Tablet 

<img width="229" alt="tablet" src="https://github.com/user-attachments/assets/f71ed8c8-4cca-4c81-9f23-3b9b891a772c">  <img width="229" alt="tablet met menu" src="https://github.com/user-attachments/assets/87369592-955e-4133-875f-c326f6a4d20d">


Laptop 

<img width="640" alt="laptop" src="https://github.com/user-attachments/assets/d3a9f7f3-56af-4884-8012-ebfc9a204b96"> 
<img width="640" alt="laptop met menu" src="https://github.com/user-attachments/assets/eacc0e5b-b848-4b99-9e1d-9abba0bce734">




## Toegankelijkheid
Voor de toegankelijkheid heb ik bij de <a> (linkjes) en bij de muis een aria-label toegevoegt zodat een screenreader het kan voorlezen. Ook heb ik de volgorde als je met je keyboard bestuurd aangepast door tabindex te gebruiken. Zo ga je eerst naar Let's do it! in het tekstwolkje, daarna naar het hamburger menu, vervolgens alle kopjes in het menu en als laatst weer naar het hamburger menu wat dan een kruisje is. 

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->


Mijn HTML heeft een gedeelte voor het menu en een gedeelte voor de homepagina. Je kan in de HTML goed zien waar de code staat voor het menu en voor de homepagina. 

Mijn HTML structuur:
 * header
 * main

In de header zit een nav met daar verschillende uls 

In de main zit een div, section, figure en een button.


In de CSS heb ik ook een gedeelte voor het menu en een gedeelte voor de homepagina. Daarbij heb ik ook hier dat je kan zien waar het begint en waar het eindigt.

Ik heb voor de homepagina een [flexbox](https://github.com/nadiachaja/all-human-accessible-website/blob/main/styles.css#L323-L325) gebruikt.

Voor het menu heb ik [grid](https://github.com/nadiachaja/all-human-accessible-website/blob/main/styles.css#L53-L61) gebruikt en daarbij heb ik wat in de kopjes staat [flexbox](https://github.com/nadiachaja/all-human-accessible-website/blob/main/styles.css#L67-L69) gebruikt.

Om het responsive te maken dat de kopje in het menu groter worden en de tekst voor tablet en laptop heb ik [@media](https://github.com/nadiachaja/all-human-accessible-website/blob/main/styles.css#L239-L304) gebruikt.


In de JS heb ik verschillende comments erbij geschreven wat het is en wat het doet. 

Met Javascript kan je het [menu openen](https://github.com/nadiachaja/all-human-accessible-website/blob/main/script.js#L38-L43), [verandert de tekst met de tijd](https://github.com/nadiachaja/all-human-accessible-website/blob/main/script.js#L2-L33), dat de [tabindex](https://github.com/nadiachaja/all-human-accessible-website/blob/main/script.js#L48-L54) verandert dat je 2x op de buttom komt en verandert de [svg](https://github.com/nadiachaja/all-human-accessible-website/blob/main/script.js#L59-L72) van de button als je het menu opent. 


## Licentie
This project is licensed under the terms of the MIT license.



