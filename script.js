function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  const userMessage = document.createElement("div");
  userMessage.className = "chat-message";
  userMessage.innerText = "🙋 " + input.value;
  chatBox.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.className = "chat-message";
  botMessage.innerText = "🤖 ChatGPT가 곧 여기에 응답할 거예요...";
  chatBox.appendChild(botMessage);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}
