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
    //Chemistry {
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
        //Helium {
    case 'Explore helium':
    if (input === 'Explore helium') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek helios; meaning Sun. Two, discovered by Pierre Janssen and Joseph Norman Lockyer in eightteen sixty-eight. Three, helium is inert, colorless, odorless, and tasteless gas. Four, second only to hydrogen in abundance in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Lithium {
    case 'Explore lithum':
    if (input === 'Explore lithum') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Beryllium {
    case 'Explore beryllium':
    if (input === 'Explore beryllium') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Boron {
    case 'Explore boron':
    if (input === 'Explore boron') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Carbon {
    case 'Explore carbon':
    if (input === 'Explore carbon') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Nitrogen {
    case 'Explore nitrogen':
    if (input === 'Explore nitrogen') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Oxygen {
    case 'Explore oxygen':
    if (input === 'Explore oxygen') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Flourine {
    case 'Explore flourine':
    if (input === 'Explore flourine') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Neon {
    case 'Explore neon':
    if (input === 'Explore neon') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Sodium {
    case 'Explore sodium':
    if (input === 'Explore sodium') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Magnesium {
    case 'Explore sodium':
    if (input === 'Explore sodium') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Alumium {
    case 'Explore sodium':
    if (input === 'Explore sodium') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Silicon {
    case 'Explore sodium':
    if (input === 'Explore sodium') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Phosphrous {
    case 'Explore sodium':
    if (input === 'Explore sodium') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Sulfur {
    case 'Explore sodium':
    if (input === 'Explore sodium') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
    //}
    //Physics {
        //Acceleration {
    case 'Explore acceleration':
    if (input === 'Explore acceleration') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Acceleration Of gravity {
    case 'Explore acceleration Of gravity':
    if (input === 'Explore acceleration Of gravity') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Apparent Weight {
    case 'Explore apparent weight':
    if (input === 'Explore apparent weight') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //British System Of Units {
    case 'Explore british system of units':
    if (input === 'Explore british system of units') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Coefficient Of Friction {
    case 'Explore coefficient of friction':
    if (input === 'Explore coefficient of friction') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Conservation Of Energy {
    case 'Explore conservation of energy':
    if (input === 'Explore conservation of energy') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Distance {
    case 'Explore distance':
    if (input === 'Explore distance') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Efficiency {
    case 'Explore efficiency':
    if (input === 'Explore efficiency') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Energy {
    case 'Explore energy':
    if (input === 'Explore energy') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Falling Bodies {
    case 'Explore falling bodies':
    if (input === 'Explore falling bodies') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //First Law Of Motion {
    case 'Explore first law of motion':
    if (input === 'Explore first law of motion') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Free Body Diagrams And Tension {
    case 'Explore free body diagrams and tension':
    if (input === 'Explore free body diagrams and tension') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Kinetic Energy {
    case 'Explore kinetic energy':
    if (input === 'Explore kinetic energy') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Mass {
    case 'Explore mass':
    if (input === 'Explore mass') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Potential Energy {
    case 'Explore potential energy':
    if (input === 'Explore potential energy') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Power {
    case 'Explore power':
    if (input === 'Explore power') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Projectile Motion {
    case 'Explore projectile motion':
    if (input === 'Explore projectile motion') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Rest Energy {
    case 'Explore rest energy':
    if (input === 'Explore rest energy') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Rolling Friction {
    case 'Explore rolling friction':
    if (input === 'Explore rolling friction') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Second Law Of Motion {
    case 'Explore second law of motion':
    if (input === 'Explore second law of motion') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Statics And Kinetic Friction {
    case 'Explore statics and kinetic friction':
    if (input === 'Explore statics and kinetic friction') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Third Law Of Motion {
    case 'Explore third law of motion':
    if (input === 'Explore third law of motion') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Two And Three Dimensions {
    case 'Explore two and three dimensions':
    if (input === 'Explore two and three dimensions') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Velocity {
    case 'Explore velocity':
    if (input === 'Explore velocity') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
    //}
    //Neurobiology  {
        //Axon {
    case 'Explore axon':
    if (input === 'Explore axon') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Drug Effect {
    case 'Explore drug effect':
    if (input === 'Explore drug effect') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Sites Of Action {
    case 'Explore sites of action':
    if (input === 'Explore sites of action') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Pharmacology Kinetics {
    case 'Explore pharmacology kinetics':
    if (input === 'Explore pharmacology kinetics') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Intraperitoneal Injection {
    case 'Explore intraperitoneal injection':
    if (input === 'Explore intraperitoneal injection') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Intramuscular Injection {
    case 'Explore intramuscular injection':
    if (input === 'Explore intramuscular injection') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Subcutaneous Injection {
    case 'Explore subcutaneous injection':
    if (input === 'Explore subcutaneous injection') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Oral Administration {
    case 'Explore oral administration':
    if (input === 'Explore oral administration') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
    //}
    //Animals  {
        //Acceleration {
    case 'Explore acceleration':
    if (input === 'Explore acceleration') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
    //}
    //Conversions/Units Measurements {
        //Length And Distance {
            //Centimeter To Inches {
    case 'Explore centimeter to inches':
    if (input === 'Explore centimeter to inches') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Feet To Meters {
    case 'Explore feet to meters':
    if (input === 'Explore feet to meters') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Inches To Centimeters {
    case 'Explore inches to centimeters':
    if (input === 'Explore inches to centimeters') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Kilometers To Miles {
    case 'Explore kilometers to miles':
    if (input === 'Explore kilometers to miles') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Meters To Feet {
    case 'Explore meters to feet':
    if (input === 'Explore meters to feet') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Meters To Yards {
    case 'Explore meters to yards':
    if (input === 'Explore meters to yards') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Miles To Kilometers {
    case 'Explore miles to kilometers':
    if (input === 'Explore miles to kilometers') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Millimeter To Inches {
    case 'Explore millimeter to inches':
    if (input === 'Explore millimeter to inches') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Yards To Meters {
    case 'Explore yards to meters':
    if (input === 'Explore yards to meters') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
    //}
        //Surface Area {
            //Hectacres To Acres {
    case 'Explore hectacres to acres':
    if (input === 'Explore hectacres to acres') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Square Feet To Square Meters {
    case 'Explore square feet to square meters':
    if (input === 'Explore square feet to square meters') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Square Kilometers To Square Miles {
    case 'Explore square kilometers to square miles':
    if (input === 'Explore square kilometers to square miles') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Square Miles To Square Kilometers {
    case 'Explore square miles to square kilometers':
    if (input === 'Explore square miles to square kilometers') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Square Yards To Square Meters {
    case 'Explore square yards to square meters':
    if (input === 'Explore square yards to square meters') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
        //Temperature {
            //Celsius To Fahrenheit {
    case 'Explore celsius to fahrenheit':
    if (input === 'Explore celsius to fahrenheit') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Celsius To Kelvin {
    case 'Explore celsius to kelvin':
    if (input === 'Explore celsius to kelvin') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Fahrenheit To Celsius {
    case 'Explore fahrenheit to celsius':
    if (input === 'Explore fahrenheit to celsius') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Fahrenheit To Kelvin {
    case 'Explore fahrenheit to kelvin':
    if (input === 'Explore fahrenheit to kelvin') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Kelvin To Celsius {
    case 'Explore kelvin to celsius':
    if (input === 'Explore kelvin to celsius') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Kelvin To Fahrenheit {
    case 'Explore kelvin to fahrenheit':
    if (input === 'Explore kelvin to fahrenheit') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
        //Volume And Capacity  {
            //Gallons To Liters {
    case 'Explore gallons to liters':
    if (input === 'Explore gallons to liters') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Liters To Gallons {
    case 'Explore liters to gallons':
    if (input === 'Explore liters to gallons') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Liters To Pints {
    case 'Explore liters to pints':
    if (input === 'Explore liters to pints') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Liters To Quarts {
    case 'Explore liters to quarts':
    if (input === 'Explore liters to quarts') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Pints To Liters {
    case 'Explore pints to liters':
    if (input === 'Explore pints to liters') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Quarts To Liters {
    case 'Explore quarts to liters':
    if (input === 'Explore quarts to liters') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
        //Weight And Mass  {
            //Kilograms To Pounds {
    case 'Explore kilograms to pounds':
    if (input === 'Explore kilograms to pounds') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Metric Tons To Short Tons {
    case 'Explore metric tons to short tons':
    if (input === 'Explore metric tons to short tons') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Ounces To Grams {
    case 'Explore ounces to grams':
    if (input === 'Explore ounces to grams') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Pounds To Kilograms {
    case 'Explore pounds to kilograms':
    if (input === 'Explore pounds to kilograms') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Short Tons To Metric Tons {
    case 'Explore short tons to metric tons':
    if (input === 'Explore short tons to metric tons') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
    //}
    //City Home Page {
        //Agoura Hills {
    case 'Explore agoura hills':
    if (input === 'Explore agoura hills') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Alhambra {
    case 'Explore alhambra':
    if (input === 'Explore alhambra') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Arcadia {
    case 'Explore arcadia':
    if (input === 'Explore arcadia') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Avalon {
    case 'Explore avalon':
    if (input === 'Explore avalon') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Azusa {
    case 'Explore azusa':
    if (input === 'Explore azusa') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Baldwin Park {
    case 'Explore baldwin park':
    if (input === 'Explore baldwin park') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Bell {
    case 'Explore bell':
    if (input === 'Explore bell') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Bell Gardens {
    case 'Explore bell gardens':
    if (input === 'Explore bell gardens') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Bellflower {
    case 'Explore bellflower':
    if (input === 'Explore bellflower') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Beverly Hills {
    case 'Explore beverly hills':
    if (input === 'Explore beverly hills') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Bradbury {
    case 'Explore bradbury':
    if (input === 'Explore bradbury') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Burbank {
    case 'Explore burbank':
    if (input === 'Explore burbank') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Calabasas {
    case 'Explore calabasas':
    if (input === 'Explore calabasas') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Carson {
    case 'Explore carson':
    if (input === 'Explore carson') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Claremont {
    case 'Explore claremont':
    if (input === 'Explore claremont') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Commerce {
    case 'Explore commerce':
    if (input === 'Explore commerce') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Compton {
    case 'Explore compton':
    if (input === 'Explore compton') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Covina {
    case 'Explore covina':
    if (input === 'Explore covina') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Cudahy {
    case 'Explore cudahy':
    if (input === 'Explore cudahy') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Culver City {
    case 'Explore culver city':
    if (input === 'Explore culver city') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Diamond Bar {
    case 'Explore diamond bar':
    if (input === 'Explore diamond bar') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Downey {
    case 'Explore downey':
    if (input === 'Explore downey') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Duarte {
    case 'Explore duarte':
    if (input === 'Explore duarte') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //El Monte {
    case 'Explore el monte':
    if (input === 'Explore el monte') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //El Segundo {
    case 'Explore el segundo':
    if (input === 'Explore el segundo') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Gardena {
    case 'Explore gardena':
    if (input === 'Explore gardena') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Glendale {
    case 'Explore glendale':
    if (input === 'Explore glendale') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Glendora {
    case 'Explore glendora':
    if (input === 'Explore glendora') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Hawaiian Gardens {
    case 'Explore hawaiian gardens':
    if (input === 'Explore hawaiian gardens') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Hawthorne {
    case 'Explore hawthorne':
    if (input === 'Explore hawthorne') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Hermosa Beach {
    case 'Explore hermosa beach':
    if (input === 'Explore hermosa beach') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Hidden Hills {
    case 'Explore hidden hills':
    if (input === 'Explore hidden hills') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Huntington Park {
    case 'Explore huntington park':
    if (input === 'Explore huntington park') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Industry {
    case 'Explore industry':
    if (input === 'Explore industry') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Inglewood {
    case 'Explore inglewood':
    if (input === 'Explore inglewood') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Irwindale {
    case 'Explore irwindale':
    if (input === 'Explore irwindale') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //La Canada Flintridge {
    case 'Explore la canada flintridge':
    if (input === 'Explore la canada flintridge') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //La Habra Heights {
    case 'Explore la habra heights':
    if (input === 'Explore la habra heights') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //La Mirada {
    case 'Explore la mirada':
    if (input === 'Explore la mirada') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //La Puente {
    case 'Explore la puente':
    if (input === 'Explore la puente') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //La Verne {
    case 'Explore la verne':
    if (input === 'Explore la verne') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Lakewood {
    case 'Explore lakewood':
    if (input === 'Explore lakewood') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Lancaster {
    case 'Explore lancaster':
    if (input === 'Explore lancaster') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Lawndale {
    case 'Explore lawndale':
    if (input === 'Explore lawndale') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Lomita {
    case 'Explore lomita':
    if (input === 'Explore lomita') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Long Beach {
    case 'Explore long beach':
    if (input === 'Explore long beach') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Lynwood {
    case 'Explore lynwood':
    if (input === 'Explore lynwood') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Malibu {
    case 'Explore malibu':
    if (input === 'Explore malibu') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Manhattan Beach {
    case 'Explore manhattan beach':
    if (input === 'Explore manhattan beach') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Maywood {
    case 'Explore maywood':
    if (input === 'Explore maywood') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Monrovia {
    case 'Explore monrovia':
    if (input === 'Explore monrovia') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Montebello {
    case 'Explore montebello':
    if (input === 'Explore montebello') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Monterey Park {
    case 'Explore monterey park':
    if (input === 'Explore monterey park') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //North Hollywood {
    case 'Explore north hollywood':
    if (input === 'Explore north hollywood') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Norwalk {
    case 'Explore norwalk':
    if (input === 'Explore norwalk') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Palmdale {
    case 'Explore palmdale':
    if (input === 'Explore palmdale') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Palos Verdes Estates {
    case 'Explore palos verdes estates':
    if (input === 'Explore palos verdes estates') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Paramount {
    case 'Explore paramount':
    if (input === 'Explore paramount') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Pasadena {
    case 'Explore pasadena':
    if (input === 'Explore pasadena') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Pico Rivera {
    case 'Explore pico rivera':
    if (input === 'Explore pico rivera') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Pomona {
    case 'Explore pomona':
    if (input === 'Explore pomona') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Rancho Palos Verdes {
    case 'Explore rancho palos verdes':
    if (input === 'Explore rancho palos verdes') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Redondo Beach {
    case 'Explore redondo beach':
    if (input === 'Explore redondo beach') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Rolling Hills {
    case 'Explore rolling hills':
    if (input === 'Explore rolling hills') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //Rosemead {
    case 'Explore rosemead':
    if (input === 'Explore rosemead') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
    //}
    //Math Operations  {
        //Algebra {
        //Absolute Value Equations, Functions And Inequalities {
            //Absolute Value Equation  {
    case 'Explore absolute value equation':
    if (input === 'Explore absolute value equation') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Absolute Value Function  {
    case 'Explore absolute value function':
    if (input === 'Explore absolute value function') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Absolute Value Inequalities  {
    case 'Explore absolute value inequalities':
    if (input === 'Explore absolute value inequalities') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
    //}
        //Exponential And Logarithmic Functions {
            //Exponential Functions {
    case 'Explore exponential function':
    if (input === 'Explore exponential function') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Logarithmic Functions {
    case 'Explore logarithmic function':
    if (input === 'Explore logarithmic function') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
        //Functions {
            
        //}
        //Linear Equations, Functions and Graphs {
            //Linear Equations {
    case 'Explore linear equations':
    if (input === 'Explore linear equations') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Linear Functions {
    case 'Explore linear functions':
    if (input === 'Explore linear functions') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Linear Graphs {
    case 'Explore linear graphs':
    if (input === 'Explore linear graphs') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
        //One Variable Equations and Functions {
            //One Variable Equations {
    case 'Explore one variable equations':
    if (input === 'Explore one variable equations') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //One Variable Graphs {
    case 'Explore one variable graphs':
    if (input === 'Explore one variable graphs') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
        //Polynomial Expressions, Equations And Functions {
            //Polynomial Expressions {
    case 'Explore polynomial expression':
    if (input === 'Explore polynomial expression') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Polynomial Equations {
    case 'Explore polynomial equation':
    if (input === 'Explore polynomial equation') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Polynomial Function {
    case 'Explore polynomial function':
    if (input === 'Explore polynomial function') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
        //Radical Equations And Functions {
            //Radical Equations {
    case 'Explore radical equation':
    if (input === 'Explore radical equation') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Radical Function {
    case 'Explore radical function':
    if (input === 'Explore radical function') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
        //Rational Expressions, Equations And Functions {
            //Rational Expressions {
    case 'Explore rational expression':
    if (input === 'Explore rational expression') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Rational Equations {
    case 'Explore rational equation':
    if (input === 'Explore rational equation') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
            //Rational Function {
    case 'Explore rational function':
    if (input === 'Explore rational function') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One, name comes from Greek hydro plus genes; meaning Water Generator. Two, isolated and identified by Henry Cavendish in seventeen sixty-six. Three, hydrogen is colorless, orderless, and tasteless gas. Four, lightest and simplest element. Five, most abundant element in the cosmos.');
    }, 2000);
    
    break;
    //}
        //}
        //Sequences {
            
        //}
        //System of Equation {
            
        //}
        //Two Variable Inequalities {
            
        //}
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

