
// tekst in het wolkje dat met de tijd verandert 
var today = new Date();
var curHr = today.getHours();
var greetingText = document.querySelector(".greeting");
var subText = document.querySelector(".sub-text");
var lessonsLink = document.querySelector(".lessons");
var goodnightMessage = document.querySelector(".goodnight-message"); // Nieuwe variabele

if (curHr >= 0 && curHr < 6) { // Tussen 0 en 5 (6 uur is niet inbegrepen)
    greetingText.textContent = "Good night";
    subText.textContent = "It's time to sleep";
    goodnightMessage.innerHTML = "I see you <span class='purple'>tomorrow</span>"; // Voeg de boodschap toe met een span
    goodnightMessage.style.display = "block"; // Toon de boodschap
    lessonsLink.style.display = "none"; // Verberg de link
    greetingText.classList.add("moved-down"); // Voeg de klasse toe voor de beweging
    subText.classList.add("moved-down"); // Voeg de klasse toe voor de beweging

} else if (curHr < 12) {
    greetingText.textContent = "Good morning,";
    subText.textContent = "Shall we start with a story?";
    goodnightMessage.style.display = "none"; // Verberg de boodschap
    lessonsLink.style.display = "inline"; // Toon de link
    greetingText.classList.remove("moved-down"); // Verwijder de klasse
    subText.classList.remove("moved-down"); // Verwijder de klasse

} else if (curHr < 18) {
    greetingText.textContent = "Good afternoon,";
    subText.textContent = "Shall we start with a story?";
    goodnightMessage.style.display = "none"; // Verberg de boodschap
    lessonsLink.style.display = "inline"; // Toon de link
    greetingText.classList.remove("moved-down"); // Verwijder de klasse
    subText.classList.remove("moved-down"); // Verwijder de klasse
    
} else {
    greetingText.textContent = "Good evening,";
    subText.textContent = "Shall we start with a story?";
    goodnightMessage.style.display = "none"; // Verberg de boodschap
    lessonsLink.style.display = "inline"; // Toon de link
    greetingText.classList.remove("moved-down"); // Verwijder de klasse
    subText.classList.remove("moved-down"); // Verwijder de klasse
}