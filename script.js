document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      });
    });
  
    const openChatbotButton = document.getElementById('open-chatbot');
    const closeChatbotButton = document.getElementById('close-chatbot');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const sendMessageButton = document.getElementById('send-message');
  
    openChatbotButton.addEventListener('click', () => {
      chatbotContainer.style.display = 'block';
      openChatbotButton.style.display = 'none';
    });
  
    closeChatbotButton.addEventListener('click', () => {
      chatbotContainer.style.display = 'none';
      openChatbotButton.style.display = 'block';
    });
  
    sendMessageButton.addEventListener('click', sendMessage);
  
    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  
    function sendMessage() {
      const message = chatbotInput.value;
      if (message.trim() === '') return;
  
      const userMessage = document.createElement('div');
      userMessage.classList.add('user-message');
      userMessage.textContent = message;
      chatbotMessages.appendChild(userMessage);
      
      chatbotInput.value = '';
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  
      setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = "This is a dummy response.";
        chatbotMessages.appendChild(botMessage);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 1000);
    }
  });
  
