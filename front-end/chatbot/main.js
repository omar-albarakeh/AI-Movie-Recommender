const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("input-text");
const sendBtn = document.getElementById("send-btn");
const historyPanel = document.getElementById("saved-responses");



function displayMessage(role, text) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", role);

    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message-bubble");
    messageBubble.textContent = text;

    messageElement.appendChild(messageBubble);
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}