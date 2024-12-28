

console.log(completion.choices[0].message);
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD") // Decompose accents (e -> e +  ́)
        .replace(/[\u0300-\u036f]/g, "");  // Remove accents
}
function reply(userText){
    let botReply = "";
    let normalizedText = normalizeText(userText);
    // Initial greeting message if the chatbox is empty
    if (chatbox.innerHTML === "") {
        chatbox.innerHTML = `<p class="botText mt-2"><span>Bonjour ! Posez-moi des questions sur moi.</span></p>`;
    }

    // Bot responses based on user input
    if (
        normalizedText.includes("qui es-tu") || 
        normalizedText.includes("presente") || 
        normalizedText.includes("vous êtes") || 
        normalizedText.includes("etes-vous") || 
        normalizedText.includes("qui")
    ) {
        botReply = "Je suis Mohamed Maghzaoui,  etudiant en informatique à l'ecole hexagone.";
    } else if (
        normalizedText.includes("bonjour") || 
        normalizedText.includes("salut") || 
        normalizedText.includes("hello") || 
        normalizedText.includes("hi") || 
        normalizedText.includes("coucou")
    ) {
        botReply = "Bonjour ! Comment puis-je vous aider ?";
    } else if (
        normalizedText.includes("age") || 
        normalizedText.includes("quel âge as-tu") ||
        normalizedText.includes("quel âge avez-vous")
    ) {
        botReply = "Bonjour ! J'ai 20 ans, un âge où je suis à la fois plein d'energie et curieux d'apprendre de nouvelles choses.";
    } else if (
        normalizedText.includes("etude") || 
        normalizedText.includes("où etudies-tu") || 
        normalizedText.includes("tu etudies où") || 
        normalizedText.includes("ecole")
    ) {
        botReply = "J'etudie à l'ecole Hexagone à Versailles en Bachelor informatique.";
    } else if (
        normalizedText.includes("competences") || 
        normalizedText.includes("savoir-faire") || 
        normalizedText.includes("skills") || 
        normalizedText.includes("maîtrises")
    ) {
        botReply = "Mes competences incluent HTML, CSS, JavaScript, React, Node.js, Symfony, Docker, et Git.";
    } else if (
        normalizedText.includes("experience") || 
        normalizedText.includes("travaille") || 
         
        normalizedText.includes("jobs")
    ) {
        botReply = "J'ai travaille comme developpeur front-end chez Mona et comme developpeur full-stack chez Sharing Technologies.";
    } else if (
        normalizedText.includes("projet") || 
        normalizedText.includes("travaux") || 
        normalizedText.includes("projets recents") || 
        normalizedText.includes("portfolio")
    ) {
        botReply = "Mes projets incluent une station meteo centralisee, un outil de gestion d'echeances, et un back-office avec Symfony.";
    } else if (
        normalizedText.includes("contact") || 
        normalizedText.includes("joindre") || 
        normalizedText.includes("comment vous joindre") || 
        normalizedText.includes("mail") || 
        normalizedText.includes("email") || 
        normalizedText.includes("telephone")
    ) {
        botReply = "Vous pouvez me contacter à mohamedmaghzaoui53@gmail.com ou au 0646973854.";
    } else if (
        normalizedText.includes("interets") || 
        normalizedText.includes("loisirs") || 
        normalizedText.includes("passions") || 
        normalizedText.includes("hobbies")
    ) {
        botReply = "Mes centres d'interêt incluent la musique, les voyages, le sport, et le developpement informatique.";
    } else if (
        normalizedText.includes("site web") || 
        normalizedText.includes("portfolio") || 
        normalizedText.includes("lien site") || 
        normalizedText.includes("votre site")
    ) {
        botReply = "Vous pouvez visiter mon site web à l'adresse suivante : https://mohamedmaghzaoui.online.";
    } else if (
        normalizedText.includes("linkedin") || 
        normalizedText.includes("reseaux sociaux") || 
        normalizedText.includes("linkedin profil") || 
        normalizedText.includes("reseau pro")
    ) {
        botReply = "Voici mon LinkedIn : https://www.linkedin.com/in/mohamed-maghzaoui.";
    } else if (
        normalizedText.includes("langue") || 
        normalizedText.includes("parles") || 
        normalizedText.includes("langages parles") || 
        normalizedText.includes("quelles langues")
    ) {
        botReply = "Je parle couramment le français, l'anglais et l'arabe.";
    } else if (
        normalizedText.includes("objectif") || 
        normalizedText.includes("but") || 
        normalizedText.includes("vision") || 
        normalizedText.includes("projets futurs")
    ) {
        botReply = "Mon objectif est de creer des projets innovants qui seront utilises par des millions de personnes dans le monde entier.";
    } else {
        botReply = "Je ne suis pas sûr de cette reponse, mais n'hesitez pas à poser d'autres questions !";
    }
    return botReply
}



function getResponse() {
    let chatReply=""
    let userText = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");
    chatReply= reply(userText)
    // User message with styling
    let userHtml = `<p class="btn btn-primary mt-2">
                        ${userText}
                   </p>`;
    
    // Bot message with styling
    let botHtml = `<p class="btn btn-secondary mt-2">
                        ${chatReply}
                   </p>`;
    
    // Append messages to chatbox
    chatbox.innerHTML += userHtml + botHtml;
    document.getElementById("userInput").value = "";

    // Auto-scroll to the bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}
