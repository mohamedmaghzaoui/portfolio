

console.log(completion.choices[0].message);
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
}

function getResponse() {
    let userText = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    let botReply = "";
    
    // Initial greeting message if the chatbox is empty
    if (chatbox.innerHTML === "") {
        chatbox.innerHTML = `<p class="botText mt-2"><span>Bonjour ! Posez-moi des questions sur moi.</span></p>`;
    }

    // Bot responses based on user input
    if (
        userText.includes("qui es-tu") || 
        userText.includes("présente-toi") || 
        userText.includes("vous êtes qui") || 
        userText.includes("qui êtes-vous") || 
        userText.includes("hi qui êtes-vous")
    ) {
        botReply = "Je suis Mohamed Maghzaoui, développeur web et étudiant en informatique.";
    } else if (
        userText.includes("bonjour") || 
        userText.includes("salut") || 
        userText.includes("hello") || 
        userText.includes("hi") || 
        userText.includes("coucou")
    ) {
        botReply = "Bonjour ! Comment puis-je vous aider ?";
    } else if (
        userText.includes("âge") || 
        userText.includes("age") || 
        userText.includes("quel âge as-tu") ||
        userText.includes("quel âge avez-vous")
    ) {
        botReply = "Bonjour ! J'ai 20 ans, un âge où je suis à la fois plein d'énergie et curieux d'apprendre de nouvelles choses.";
    } else if (
        userText.includes("études") || 
        userText.includes("etude") || 
        userText.includes("où étudies-tu") || 
        userText.includes("tu étudies où") || 
        userText.includes("école")
    ) {
        botReply = "J'étudie à l'École Hexagone à Versailles en Bachelor informatique.";
    } else if (
        userText.includes("compétences") || 
        userText.includes("savoir-faire") || 
        userText.includes("skills") || 
        userText.includes("tu maîtrises quoi")
    ) {
        botReply = "Mes compétences incluent HTML, CSS, JavaScript, React, Node.js, Symfony, Docker, et Git.";
    } else if (
        userText.includes("expérience") || 
        userText.includes("travaillé") || 
        userText.includes("expériences pro") || 
        userText.includes("jobs")
    ) {
        botReply = "J'ai travaillé comme développeur front-end chez Mona et comme développeur full-stack chez Sharing Technologies.";
    } else if (
        userText.includes("projet") || 
        userText.includes("travaux") || 
        userText.includes("projets récents") || 
        userText.includes("portfolio")
    ) {
        botReply = "Mes projets incluent une station météo centralisée, un outil de gestion d'échéances, et un back-office avec Symfony.";
    } else if (
        userText.includes("contact") || 
        userText.includes("joindre") || 
        userText.includes("comment vous joindre") || 
        userText.includes("mail") || 
        userText.includes("email") || 
        userText.includes("téléphone")
    ) {
        botReply = "Vous pouvez me contacter à mohamedmaghzaoui53@gmail.com ou au 0646973854.";
    } else if (
        userText.includes("intérêts") || 
        userText.includes("loisirs") || 
        userText.includes("passions") || 
        userText.includes("hobbies")
    ) {
        botReply = "Mes centres d'intérêt incluent la musique, les voyages, le sport, et le développement web.";
    } else if (
        userText.includes("site web") || 
        userText.includes("portfolio") || 
        userText.includes("lien site") || 
        userText.includes("votre site")
    ) {
        botReply = "Vous pouvez visiter mon site web à l'adresse suivante : https://mohamedmaghzaoui.online.";
    } else if (
        userText.includes("linkedin") || 
        userText.includes("réseaux sociaux") || 
        userText.includes("linkedin profil") || 
        userText.includes("réseau pro")
    ) {
        botReply = "Voici mon LinkedIn : https://www.linkedin.com/in/mohamed-maghzaoui.";
    } else if (
        userText.includes("langue") || 
        userText.includes("parles") || 
        userText.includes("langages parlés") || 
        userText.includes("quelles langues")
    ) {
        botReply = "Je parle couramment le français, l'anglais et l'arabe.";
    } else if (
        userText.includes("objectif") || 
        userText.includes("but") || 
        userText.includes("vision") || 
        userText.includes("projets futurs")
    ) {
        botReply = "Mon objectif est de créer des projets innovants qui seront utilisés par des millions de personnes dans le monde entier.";
    } else {
        botReply = "Je ne suis pas sûr de cette réponse, mais n'hésitez pas à poser d'autres questions !";
    }
    

    // User message with styling
    let userHtml = `<p class="btn btn-primary mt-2">
                        ${userText}
                   </p>`;
    
    // Bot message with styling
    let botHtml = `<p class="btn btn-secondary mt-2">
                        ${botReply}
                   </p>`;
    
    // Append messages to chatbox
    chatbox.innerHTML += userHtml + botHtml;
    document.getElementById("userInput").value = "";

    // Auto-scroll to the bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}
