const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("input-text");
const sendBtn = document.getElementById("send-btn");

let messages = [
    {
        role: "system",
        content: "Hello! I'm your movie-loving assistant here to help with everything film-related! 🎬 \n\n" +
        "I can:\n" +
        "1. **Answer questions about movies**\n" +
        "2. **Summarize movie plots**\n" +
        "3. **Give personalized recommendations**\n\n" +
        "**Here’s the list of movies I’m familiar with:**\n" +
        "- Venom: The Last Dance\n" +
        "- L'Amour ouf\n" +
        "- Monsieur Aznavour\n" +
        "- JURE N°2\n" +
        "- Anora\n" +
        "- The Substance\n" +
        "- Le Robot Sauvage\n" +
        "- À toute allure\n" +
        "- Louise Violet\n" +
        "- Here - Les plus belles années de notre vie\n" +
        "- Croquette le chat merveilleux\n" +
        "- Smile 2\n" +
        "- Transformers: Le Commencement\n" +
        "- Le Lac des Cygnes\n" +
        "- Flow, le chat qui n’avait plus peur de l’eau\n" +
        "- Trois amies\n" +
        "- L'histoire de Souleymane\n" +
        "- Ma mini-séance: Pat et Mat un dernier tour de vis\n" +
        "- 4 Zéros\n" +
        "- Challenger\n" +
        "- Angelo dans la forêt mystérieuse\n" +
        "- Sur un fil\n" +
        "- Amaran (version tamoul)\n" +
        "- L’Ombre Du Commandant\n" +
        "- Veer-Zaara\n\n" +
        "Feel free to ask about any of these movies! I can also ask a few questions to find out what you like if you'd like a personalized recommendation. Let’s dive into the world of movies together! 🎥🍿"
    }
];


function displayMessage(role, text) {

    const messageElement = document.createElement("div");
    
    if (role === "user") {
        messageElement.classList.add("user-message");
    } else {
        messageElement.classList.add("bot-message");
    }

    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message-bubble");
    messageBubble.textContent = text;

    messageElement.appendChild(messageBubble);
    
    chatContainer.appendChild(messageElement);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function toggleButtonState() {
    sendBtn.disabled = !userInput.value.trim();
}

async function sendMessage() {
    const inputText = userInput.value.trim();
    if (inputText === "") return;

    displayMessage("user", inputText);
    userInput.value = "";
    toggleButtonState();
    messages.push({ role: "user", content: inputText });

    try {
        const response = await fetch("http://localhost/chatbot/chatbot.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages }),
            mode: 'cors'
        });

        if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
        
        const result = await response.json();
        
        if (result.error) throw new Error(result.error);

        const assistantMessage = result.choices[0].message.content;
        displayMessage("bot", assistantMessage);
        messages.push({ role: "assistant", content: assistantMessage });
    } catch (error) {
        console.error("Error:", error);
        displayMessage("bot", "An error occurred. Please try again.");
    }
}

setTimeout(() => {
    displayMessage("bot", "Hi! How can I help you ");
}, 1000);

userInput.addEventListener('input', toggleButtonState);
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});
