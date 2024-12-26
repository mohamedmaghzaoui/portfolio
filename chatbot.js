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
    if (userText.toLowerCase().includes("qui es-tu")) {
        botReply = "Je suis Mohamed Maghzaoui, développeur web.";
    } else if (userText.toLowerCase().includes("compétences")) {
        botReply = "HTML, CSS, JavaScript, Bootstrap et React.";
    } else if (userText.toLowerCase().includes("contact")) {
        botReply = "Vous pouvez me contacter à mohamedmaghzaoui53@gmail.com.";
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
