// script.js
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('message-input');
    var awareness = document.getElementById("message-input").value;
    const message = input.value.trim();
    switch (awareness) {
        //Basic Template {
    case 'No':
    if (input === 'No') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Nice?');
    }, 2000);
    
    break;
        
    case 'Yes':
    if (input === 'Yes') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Go?');
    }, 2000);
    
    break;
    //}
    //Entity Saying Hi {
        //Introduction {
    case 'Hello':
    if (input === 'Hello') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Hi. How are you doing?.');
    }, 2000);
    
    break;
    //}
        //Introduction {
    case 'hello':
    if (input === 'hello') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Hi. How are you doing?.');
    }, 2000);
    
    break;
    //}
        //Introduction {
    case 'Hi':
    if (input === 'Hi') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Hi. How are you doing?.');
    }, 2000);
    
    break;
    //}
        //Introduction {
    case 'hi':
    if (input === 'hi') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Hi. How are you doing?.');
    }, 2000);
    
    break;
    //}
    //}
    //Asking how the entity feelings {
        //Hi Response {
        //Hi Response {
    case 'Im doing great':
    if (input === 'Im doing great') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is great. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'im doing great':
    if (input === 'im doing great') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is great. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'Im well':
    if (input === 'Im well') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'im well':
    if (input === 'im well') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'Im good':
    if (input === 'Im good') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'im good':
    if (input === 'im good') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'Good':
    if (input === 'Good') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    break;
    //}
        //Hi Response {
    case 'good':
    if (input === 'good') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'Well':
    if (input === 'Well') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'well':
    if (input === 'well') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'Great':
    if (input === 'Great') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    
    break;
    //}
        //Hi Response {
    case 'great':
    if (input === 'great') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'That is good. What information can I find for you?');
    }, 2000);
    
    break;
    //}
    //}
    //}
    //Functions {
        //Areas Of Knowledge {
        //Raziel Knowledge bank {
    case 'What do you know':
    if (input === 'What do you know') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'My current areas of knowledge are Physics, ASL, JavaScript, HTML, CSS, Excel, Node.js, R, Linux, Chemistry, Conversions/Units measurements, Firearms, Books, World knowledge, Neurobiology, Mechanical and Animals.');
    }, 2000);
    
    break;
    //}
        //Raziel Knowledge bank {
    case 'what do you know':
    if (input === 'what do you know') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'My current areas of knowledge are Physics, ASL, JavaScript, HTML, CSS, Excel, Node.js, R, Linux, Chemistry, Conversions/Units measurements, Firearms, Books, World knowledge, Neurobiology, Mechanical and Animals.');
    }, 2000);
    
    break;
    //}
        //Raziel Knowledge bank {
    case 'What can you tell me':
    if (input === 'What can you tell me') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'My current areas of knowledge are Physics, ASL, JavaScript, HTML, CSS, Excel, Node.js, R, Linux, Chemistry, Conversions/Units measurements, Firearms, Books, World knowledge, Neurobiology, Mechanical and Animals.');
    }, 2000);
    
    break;
    //}
        //Raziel Knowledge bank {
    case 'what can you tell me':
    if (input === 'what can you tell me') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'My current areas of knowledge are Physics, ASL, JavaScript, HTML, CSS, Excel, Node.js, R, Linux, Chemistry, Conversions/Units measurements, Firearms, Books, World knowledge, Neurobiology, Mechanical and Animals.');
    }, 2000);
    
    break;
    //}
        //Raziel Ability {
    case 'what do you know':
    if (input === 'what do you know') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'My current areas of knowledge are Physics, ASL, JavaScript, HTML, CSS, Excel, Node.js, R, Linux, Chemistry, Conversions/Units measurements, Firearms, Books, World knowledge, Neurobiology, Mechanical and Animals.');
    }, 2000);
    
    break;
    //}
        //Raziel Ability {
    case 'What do you know':
    if (input === 'What do you know') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'My current areas of knowledge are Physics, ASL, JavaScript, HTML, CSS, Excel, Node.js, R, Linux, Chemistry, Conversions/Units measurements, Firearms, Books, World knowledge, Neurobiology, Mechanical and Animals.');
    }, 2000);
    
    break;
    //}
    //}
    //}
    //Knowledge {
        //Hydrogen {
    case 'Explore hydrogen':
    if (input === 'Explore hydrogen') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
    //}
    } 
}

function appendMessage(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

