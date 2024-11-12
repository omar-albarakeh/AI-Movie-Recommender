const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("input-text");
const sendBtn = document.getElementById("send-btn");

let messages = [
    { role: "system", content: "You are a friendly and helpful assistant who remembers user preferences." }
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
    displayMessage("bot", "Hi! How can I help you with movies today?");
}, 1000);

userInput.addEventListener('input', toggleButtonState);
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});
