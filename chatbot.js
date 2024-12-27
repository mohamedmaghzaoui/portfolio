

console.log(completion.choices[0].message);
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD") // Decompose accents (é -> e +  ́)
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
        normalizedText.includes("présente") || 
        normalizedText.includes("vous êtes") || 
        normalizedText.includes("êtes-vous") || 
        normalizedText.includes("qui")
    ) {
        botReply = "Je suis Mohamed Maghzaoui,  étudiant en informatique à l'ecole hexagone.";
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
        botReply = "Bonjour ! J'ai 20 ans, un âge où je suis à la fois plein d'énergie et curieux d'apprendre de nouvelles choses.";
    } else if (
        normalizedText.includes("etude") || 
        normalizedText.includes("où étudies-tu") || 
        normalizedText.includes("tu étudies où") || 
        normalizedText.includes("ecole")
    ) {
        botReply = "J'étudie à l'École Hexagone à Versailles en Bachelor informatique.";
    } else if (
        normalizedText.includes("compétences") || 
        normalizedText.includes("savoir-faire") || 
        normalizedText.includes("skills") || 
        normalizedText.includes("maîtrises")
    ) {
        botReply = "Mes compétences incluent HTML, CSS, JavaScript, React, Node.js, Symfony, Docker, et Git.";
    } else if (
        normalizedText.includes("expérience") || 
        normalizedText.includes("travaille") || 
         
        normalizedText.includes("jobs")
    ) {
        botReply = "J'ai travaillé comme développeur front-end chez Mona et comme développeur full-stack chez Sharing Technologies.";
    } else if (
        normalizedText.includes("projet") || 
        normalizedText.includes("travaux") || 
        normalizedText.includes("projets récents") || 
        normalizedText.includes("portfolio")
    ) {
        botReply = "Mes projets incluent une station météo centralisée, un outil de gestion d'échéances, et un back-office avec Symfony.";
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
        botReply = "Mes centres d'intérêt incluent la musique, les voyages, le sport, et le développement informatique.";
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
        botReply = "Mon objectif est de créer des projets innovants qui seront utilisés par des millions de personnes dans le monde entier.";
    } else {
        botReply = "Je ne suis pas sûr de cette réponse, mais n'hésitez pas à poser d'autres questions !";
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
