
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
        displayMessage("assistant", assistantMessage);
        messages.push({ role: "assistant", content: assistantMessage });
        addMessageToHistory("Assistant", assistantMessage);

    } catch (error) {
        console.error("Error:", error);
        displayMessage("assistant", "An error occurred. Please try again.");
    }
}