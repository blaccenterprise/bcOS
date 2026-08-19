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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
    }, 2000);
    
    break;
    //}
    //}
    //Neurobiology  {
        //Terminology {
    case 'Explore neurobiology terminology':
    if (input === 'Explore neurobiology terminology') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'The neurobiology termiology are Axon, drug effect, sites of action, pharmacology kietics, intraperitoneal injection, intramuscular injection, Subcutaneous (SC) Injection, Oral Administration, Sublingual administration, Inhalation, Topical administration, Intracerebral administration, Intracerebroventricular (ICV) administration, Depot Binding, Albumin, Dose-response curve, Therapeutic Index, Affinity, Tolerance, Sensitization, Withdrawal Symptom, Antagonist, Agonist, Direct Agonist, Receptor Blocker, Direct Antagonist, Noncompetitive binding, Indirect Antagonis, Presynaptic heteroreceptor, Acetyl-CoA, Choline Acetyltransferase, Botulinum toxin, Black Widow Spider Venom, Hemicholinum, Neostigmine, Nicotinic receptor, Muscarinic receptor, Atropine, Curare, L-DOPA, Nigrostriatal system, Mesolimbic system, Mesocortical system, Parkison’s Disease, AMPT, Reserpine,');
        appendMessage('bot', 'Apomorphine, Methylphenidate, Monoamine Oxidase (MAO), Deprenyl, Chlorpromazine, NE, Epinephrine, Fusaric acid, Moclobemide, Locus Coeruleus, Axonal varicosity, Idazoxan, Serotonin, PCPA, Fluoxetine, Fenfluramine, LSD, MDMA, Glutamate, NMDA receptor, AMPA receptor, Kainate receptor, Metabotropic Glutamate Receptor, AP5, PCP, GABA, Allylglycine, Muscimol, Bicuculline, Benzodiazepine, Anxiolytic, Glycine, Strychnine, Endogenous opioid, Enkephalin, Naloxone, Endocannabinoid, THC, Anandamide, FAAH, Rimonabant, MAFP, AM1172, Adenosine, Caffeine, Nitric oxide and Nitric oxide synthase.');
    }, 2000);
    
    break;

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Apomorphine, Methylphenidate, Monoamine Oxidase (MAO), Deprenyl, Chlorpromazine, NE, Epinephrine, Fusaric acid, Moclobemide, Locus Coeruleus, Axonal varicosity, Idazoxan, Serotonin, PCPA, Fluoxetine, Fenfluramine, LSD, MDMA, Glutamate, NMDA receptor, AMPA receptor, Kainate receptor, Metabotropic Glutamate Receptor, AP5, PCP, GABA, Allylglycine, Muscimol, Bicuculline, Benzodiazepine, Anxiolytic, Glycine, Strychnine, Endogenous opioid, Enkephalin, Naloxone, Endocannabinoid, THC, Anandamide, FAAH, Rimonabant, MAFP, AM1172, Adenosine, Caffeine, Nitric oxide and Nitric oxide synthase.');
    }, 1000);
    
    break;
            
        //}
        //Axon {
    case 'Explore axon':
    if (input === 'Explore axon') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An axon is the transmitter component of the neural connection, which holds the section of carrying electrical pulses to the axon terminal for an action potential followed by a release of neurotransmitters.');
    }, 2000);
    
    break;
    //}
    /*
        //Dendrite {
    case 'Explore dendrite':
    if (input === 'Explore dendrite') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An axon is the transmitter component of the neural connection, which holds the section of carrying electrical pulses to the axon terminal for an action potential followed by a release of neurotransmitters.');
    }, 2000);
    
    break;
    //}
    */ //Dendrite
        //Drug Effect {
    case 'Explore drug effect':
    if (input === 'Explore drug effect') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'The changes a drug produces in an animal’s physiological processes and behaviors.');
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
        appendMessage('bot', 'The locations at which molecules of drugs interact with molecules located on or in cells of the body, thus affecting some biochemical processes of these cells.');
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
        appendMessage('bot', 'The process by which drugs are absorbed, distributed within the body, metabolized, and exerted.');
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
        appendMessage('bot', 'Injection of a substance into the peritoneal cavity - the space that surrounds the stomach, intestines, liver, and other abdominal organs.');
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
        appendMessage('bot', 'Injection of a substance into a muscle.');
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
        appendMessage('bot', 'Injection of a substance into the space beneath the skin.');
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
        appendMessage('bot', 'Administration of a substance into the mouth so that it is swallowed.');
    }, 2000);
    
    break;
    //}
        //Inhalation {
    case 'Explore inhalation':
    if (input === 'Explore inhalation') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Administration of a vaporous substance into the lungs.');
    }, 2000);
    
    break;
    //}
        //Topical Administration {
    case 'Explore topical administration':
    if (input === 'Explore topical administration') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Administration of a substance directly onto the skin or mucous membrane.');
    }, 2000);
    
    break;
    //}
        //Intracerebral Administration {
    case 'Explore intracerebral administration':
    if (input === 'Explore intracerebral administration') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Administration of a substance directly into the brain.');
    }, 2000);
    
    break;
    //}
        //Depot Binding {
    case 'Explore depot binding':
    if (input === 'Explore depot binding') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Binding of a drug with various tissues of the body or the proteins in the blood.');
    }, 2000);
    
    break;
    //}
        //Dose Response Curve {
    case 'Explore dose response curve':
    if (input === 'Explore dose response curve') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A graph of the magnitude of an effect of a drug as a function of the amount of drug administered.');
    }, 2000);
    
    break;
    //}
        //Therapeutic Index {
    case 'Explore therapeutic index':
    if (input === 'Explore therapeutic index') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'The ratio between the dose that produces the desired effect in 50% of the animals and the dose that produces toxic effects in 50% of the animal.');
    }, 2000);
    
    break;
    //}
        //Affinity {
    case 'Explore affinity':
    if (input === 'Explore affinity') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'The ability of which two molecules bond.');
    }, 2000);
    
    break;
    //}
        //Tolerance {
    case 'Explore tolerance':
    if (input === 'Explore tolerance') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A decrease in the effectiveness of a drug that is administered repeatedly.');
    }, 2000);
    
    break;
    //}
        //Sensitization {
    case 'Explore sensitization':
    if (input === 'Explore sensitization') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An increase in the effectiveness of a drug that is administered repeatedly.');
    }, 2000);
    
    break;
    //}
        //Withdrawal Symptom {
    case 'Explore withdrawal symptom':
    if (input === 'Explore withdrawal symptom') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'The appearance of symptoms opposite to those produced by a drug when the drug is administered repeatedly and then suddenly on longer taken.');
    }, 2000);
    
    break;
    //}
        //Antagonist {
    case 'Explore antagonist':
    if (input === 'Explore antagonist') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that opposes or inhibits the effects of a particular nsm on the postsynaptic cell.');
    }, 2000);
    
    break;
    //}
        //Agonist {
    case 'Explore agonist':
    if (input === 'Explore agonist') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that facilitates the effects of a particular nsm on the postsynaptic cell.');
    }, 2000);
    
    break;
    //}
        //Direct Agonist {
    case 'Explore direct agonist':
    if (input === 'Explore direct agonist') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that binds with and activates a receptor.');
    }, 2000);
    
    break;
    //}
        //Receptor Blocker {
    case 'Explore receptor blocker':
    if (input === 'Explore receptor blocker') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that binds with a receptor but does not activate it; prevents the natural ligand from binding with the receptor.');
    }, 2000);
    
    break;
    //}
        //Direct Antagonist {
    case 'Explore direct antagonist':
    if (input === 'Explore direct antagonist') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that binds with a receptor but does not activate it; prevents the natural ligand from binding with the receptor.');
    }, 2000);
    
    break;
    //}
        //Noncompetitive Binding {
    case 'Explore noncompetitive binding':
    if (input === 'Explore noncompetitive binding') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Binding of a drug to a site on a receptor; does not interfere with the binding site for the principal ligand.');
    }, 2000);
    
    break;
    //}
        //Indirect Antagonist {
    case 'Explore indirect antagonist':
    if (input === 'Explore indirect antagonist') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that attaches to a binding site on a receptor and interferes with the action of the receptor; does not interfere with the binding site for the principal ligand.');
    }, 2000);
    
    break;
    //}
        //Presynaptic Heteroreceptor {
    case 'Explore presynaptic heteroreceptor':
    if (input === 'Explore presynaptic heteroreceptor') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A receptor located in the membrane of a terminal button that receives input from another terminal button by means of an axoaxonic synapse; binds with the nsm released by the presynaptic terminal button.');
    }, 2000);
    
    break;
    //}
        //C H A T  {
    case 'Explore C H A T ':
    if (input === 'Explore C H A T ') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'The enzyme that transfers the acetate ion from acetyl coenzyme A to choline, producing the nsm ACh.');
    }, 2000);
    
    break;
    //}
        //Botulinum Toxin {
    case 'Explore botulinum toxin':
    if (input === 'Explore botulinum toxin') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An ACh antagonist; prevents release by terminal buttons.');
    }, 2000);
    
    break;
    //}
        //Black Widow Spider Venom {
    case 'Explore black widow spider venom':
    if (input === 'Explore black widow spider venom') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A poison produced by the black widow spider that triggers the release of ACh.');
    }, 2000);
    
    break;
    //}
        //Hemicholinum {
    case 'Explore hemicholinum':
    if (input === 'Explore hemicholinum') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that inhibits the uptake of choline.');
    }, 2000);
    
    break;
    //}
        //Neostigmine {
    case 'Explore neostigmine':
    if (input === 'Explore neostigmine') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that inhibits the activity of AChE.');
    }, 2000);
    
    break;
    //}
        //Muscarinic Receptor {
    case 'Explore muscarinic receptor':
    if (input === 'Explore muscarinic receptor') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A metabotropic ACh receptor that is stimulated by muscarine and blocked by atropine.');
    }, 2000);
    
    break;
    //}
        //Atropine {
    case 'Explore atropine':
    if (input === 'Explore atropine') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that blocks muscarinic ACh receptors.');
    }, 2000);
    
    break;
    //}
        //Curare {
    case 'Explore curare':
    if (input === 'Explore curare') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that blocks nicotinic ACh receptors.');
    }, 2000);
    
    break;
    //}
        //L D O P A {
    case 'Explore L D O P A':
    if (input === 'Explore L D O P A') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'The levorotatory form of DOPA; the precursor of the catecholamines; often used to treat Parkison’s disease because of its effect as a dopamine agonist.');
    }, 2000);
    
    break;
    //}
        //Nigrostriatal System {
    case 'Explore nigrostriatal system':
    if (input === 'Explore nigrostriatal system') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A system of neurons originating in the substantia nigra and terminating in the neostriatum; caudate nucleus and putamen.');
    }, 2000);
    
    break;
    //}
        //Mesolimbic System {
    case 'Explore mesolimbic system':
    if (input === 'Explore mesolimbic system') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A system of dopaminergic neurons originating in the ventral tegmental area and terminating in the nucleus accumbens, amygdala, and hippocampus.');
    }, 2000);
    
    break;
    //}
        //Mesocortical System {
    case 'Explore mesocortical system':
    if (input === 'Explore mesocortical system') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A system of dopaminergic neurons originating in the ventral tegmental area and terminating in the prefrontal cortex.');
    }, 2000);
    
    break;
    //}
        //Parkison’s Disease {
    case 'Explore Parkison’s Disease':
    if (input === 'Explore Parkison’s Disease') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A neurological disease characterized by tremors, rigidity of the limbs, poor balance, and difficulty initiating movements; caused by degeneration of the nigrostriatal system.');
    }, 2000);
    
    break;
    //}
        //A M P T {
    case 'Explore A M P T':
    if (input === 'Explore A M P T') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that blocks the activity of tyrosine hydroxylase and thus interferes with the synthesis of the catecholamines.');
    }, 2000);
    
    break;
    //}
        //Reserpine {
    case 'Explore reserpine':
    if (input === 'Explore reserpine') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that interferes with the storage of monoamines in synaptic vesicles.');
    }, 2000);
    
    break;
    //}
        //Apomorphine {
    case 'Explore apomorphine':
    if (input === 'Explore apomorphine') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that blocks DA autoreceptors at low doses ; at higher doses, blocks postsynaptic receptors as well.');
    }, 2000);
    
    break;
    //}
        //Methylphenidate {
    case 'Explore methylphenidate':
    if (input === 'Explore methylphenidate') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that inhibits the reuptake of D A.');
    }, 2000);
    
    break;
    //}
        //Monoamine Oxidase {
    case 'Explore monoamine oxidase':
    if (input === 'Explore monoamine oxidase') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A class of enzymes that destroy the monoamines: D A, N E, and 5 H T.');
    }, 2000);
    
    break;
    //}
        //Chlorpromazine {
    case 'Explore chlorpromazine':
    if (input === 'Explore chlorpromazine') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that reduces the symptoms of schizophrenia by blocking D A and D 2 receptors.');
    }, 2000);
    
    break;
    //}
        //N E {
    case 'Explore N E':
    if (input === 'Explore N E') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One of the catecholamine; a nsm found in the brain and the sympathetic division of the autonomic nervous system.');
    }, 2000);
    
    break;
    //}
        //Epinephrine {
    case 'Explore epinephrine':
    if (input === 'Explore epinephrine') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'One of the catecholamine; a hormone secreted by the adrenal medulla; serves also as a nsm in the brain.');
    }, 2000);
    
    break;
    //}
        //Methylphenidate {
    case 'Explore methylphenidate':
    if (input === 'Explore methylphenidate') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that inhibits the activity of the enzyme DA-ß-hydroxylase and thus blocks the production of N E.');
    }, 2000);
    
    break;
    //}
        //Moclobemide {
    case 'Explore moclobemide':
    if (input === 'Explore moclobemide') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that blocks the activity of MAO-A; acts as a noradrenergic agonist.');
    }, 2000);
    
    break;
    //}
        //Locus Coeruleus {
    case 'Explore locus coeruleus':
    if (input === 'Explore locus coeruleus') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A dark-colored group of noradrenergic cell bodies located in the pons near the rostral end of the floor of the fourth ventricle.');
    }, 2000);
    
    break;
    //}
        //Axonal Varicosity {
    case 'Explore axonal varicosity':
    if (input === 'Explore axonal varicosity') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An enlarged region along the length of an axon that contains synaptic vesicles and releases a nsm or neuromodulator.');
    }, 2000);
    
    break;
    //}
        //Idazoxan {
    case 'Explore idazoxan':
    if (input === 'Explore idazoxan') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that blocks presynaptic noradrenergic ἀ 2 receptors and hence acts as anagonist, facilitating the synthesis and release of N E.');
    }, 2000);
    
    break;
    //}
        //Serotonin {
    case 'Explore serotonin':
    if (input === 'Explore serotonin') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An indolamine nsm; also called 5-hydroxytryptamine.');
    }, 2000);
    
    break;
    //}
        //P C P A {
    case 'Explore P C P A':
    if (input === 'Explore P C P A') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that inhibits the activity of tryptophan hydroxylase and thus interferences with the synthesis of 5 H T.');
    }, 2000);
    
    break;
    //}
        //Fluoxetine {
    case 'Explore fluoxetine':
    if (input === 'Explore fluoxetine') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that inhibits the reuptake of 5 H T.');
    }, 2000);
    
    break;
    //}
        //Fenfluramine {
    case 'Explore fenfluramine':
    if (input === 'Explore fenfluramine') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that stimulates the release of 5 H T.');
    }, 2000);
    
    break;
    //}
        //L S D {
    case 'Explore L S D':
    if (input === 'Explore L S D') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that stimulates 5 H T 2 A receptors.');
    }, 2000);
    
    break;
    //}
        //M D M A {
    case 'Explore M D M A':
    if (input === 'Explore M D M A') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that serves as a noradrenergic and serotonergic agonist, also known as “ecstasy”; has excitatory and hallucinogenic effects.');
    }, 2000);
    
    break;
    //}
        //Glutamate {
    case 'Explore glutamate':
    if (input === 'Explore glutamate') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An amino acid; the most vital excitatory nsm in the brain.');
    }, 2000);
    
    break;
    //}
        //N M D A Receptor {
    case 'Explore N M D A receptor':
    if (input === 'Explore N M D A receptor') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A specialized ionotropic glutamate receptor that controls a Calcium channel that is normally blocked by Magnesium ions; has several other binding sites.');
    }, 2000);
    
    break;
    //}
        //A M P A Receptor {
    case 'Explore A M P A receptor':
    if (input === 'Explore A M P A receptor') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An ionotropic glutamate receptor that controls a Sodium ion channel; stimulated by A M P A.');
    }, 2000);
    
    break;
    //}
        //Kainate Receptor {
    case 'Explore kainate receptor':
    if (input === 'Explore kainate receptor') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An ionotropic glutamate receptor that controls a Sodium ion channel; stimulated by kainic acid.');
    }, 2000);
    
    break;
    //}
        //Metabotropic Glutamate Receptor {
    case 'Explore metabotropic glutamate receptor':
    if (input === 'Explore metabotropic glutamate receptor') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A category of metabotropic receptors that are sensitive to glutamate.');
    }, 2000);
    
    break;
    //}
        //A P 5 {
    case 'Explore A P 5':
    if (input === 'Explore A P 5') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'A drug that blocks the glutamate binding site on N M D A receptors.');
    }, 2000);
    
    break;
    //}
        //P C P  {
    case 'Explore P C P ':
    if (input === 'Explore P C P ') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Phencyclidine; a drug that binds with the P C P binding site of the N M D A receptor and serves as an indirect antagonist.');
    }, 2000);
    
    break;
    //}
        //G A B A {
    case 'Explore G A B A':
    if (input === 'Explore G A B A') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'An amino acid; the most vital inhibitory neurotransmitter in the brain.');
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
        appendMessage('bot', 'ddd.');
    }, 2000);
    
    break;
    //}
    //}
    //Conversions/Units Measurements {
        //Preciouus Metals and Jewels {
            
        //}
        //Length And Distance {
            //Centimeter To Inches {
    case 'Explore centimeter to inches':
    if (input === 'Explore centimeter to inches') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
    }, 2000);
    
    break;
    //}
        //}
        /*
        
                //Precious Metls and Jewel {
                    //Grains to pwt. {
                    
                        case "Convert grains to pwt.":
                            text = "Convert grains to pwt";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Grains_To_PWT.html", "./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Grains_To_PWT.html", "width=400,height=400");
                            break;
                            
                        case "convert grains to pwt":
                            text = "convert grains to pwt";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Grains_To_PWT.html", "./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Grains_To_PWT.html", "width=400,height=400");
                            break;
                            
                        case "Convert Grains To PWT":
                            text = "Convert Grains To PWT";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Grains_To_PWT.html", "./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Grains_To_PWT.html", "width=400,height=400");
                            break;
//}
                    //pwt. To Ounces {
                    
                        case "Convert pwt. to ounces":
                            text = "Convert grains to pwt";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/PWT_To_Ounces.html", "./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/PWT_To_Ounces.html", "width=400,height=400");
                            break;
                            
                        case "convert pwt. to ounces":
                            text = "convert grains to pwt";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/PWT_To_Ounces.html", "./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/PWT_To_Ounces.html", "width=400,height=400");
                            break;
                            
                        case "Convert PWT To Ounces":
                            text = "Convert Grains To PWT";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/PWT_To_Ounces.html", "./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/PWT_To_Ounces.html", "width=400,height=400");
                            break;
//}
                    //Ounces To Pounds {
                    
                        case "Convert ounces to pounds":
                            text = "Convert ounces to pounds";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Ounces_To_Pounds.html", "./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Ounces_To_Pounds.html", "width=400,height=400");
                            break;
                            
                        case "convert pwt. to ounces":
                            text = "convert ounces to pounds";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Ounces_To_Pounds.html", "./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Ounces_To_Pounds.html", "width=400,height=400");
                            break;
                            
                        case "Convert Ounces To Pound":
                            text = "ounces to pounds";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Ounces_To_Pounds.html", "./Research/Conversions_Units_Measurements/Precious_Metals_And_Jewels/Ounces_To_Pounds.html", "width=400,height=400");
                            break;
//}
                //}
                //Apothecaries' Weight {
                    //Grains To Scruple {
                    
                        case "Convert grains to scruple.":
                            text = "Convert grains to scruple";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Grains_To_Scruple.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Grains_To_Scruple.html", "width=400,height=400");
                            break;
                            
                        case "convert grains to scruple":
                            text = "convert grains to scruple";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Grains_To_Scruple.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Grains_To_Scruple.html", "width=400,height=400");
                            break;
                            
                        case "Convert Grains To Scruple":
                            text = "Convert Grains To Scruple";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Grains_To_Scruple.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Grains_To_Scruple.html", "width=400,height=400");
                            break;
//}
                    //Scruple To Dram {
                    
                        case "Convert scruple to dram.":
                            text = "Convert scruple to dram";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Scruple_To_Dram.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Scruple_To_Dram.html", "width=400,height=400");
                            break;
                            
                        case "convert scruple to dram":
                            text = "convert scruple to dram";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Scruple_To_Dram.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Scruple_To_Dram.html", "width=400,height=400");
                            break;
                            
                        case "Convert Scruple To Dram":
                            text = "Convert Scruple To Dram";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Scruple_To_Dram.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Scruple_To_Dram.html", "width=400,height=400");
                            break;
//}
                    //Dram To Ounces{
                    
                        case "Convert dram to ounces.":
                            text = "Convert dram to ounces";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Dram_To_Ounces.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Dram_To_Ounces.html", "width=400,height=400");
                            break;
                            
                        case "convert dram to ounces":
                            text = "convert dram to ounces";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Dram_To_Ounces.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Dram_To_Ounces.html", "width=400,height=400");
                            break;
                            
                        case "Convert Scruple To Dram":
                            text = "Convert Dram To Ounces";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Dram_To_Ounces.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Dram_To_Ounces.html", "width=400,height=400");
                            break;
//}
                    //Ounces To Pounds {
                    
                        case "Convert ounces to pounds.":
                            text = "Convert ounces to pounds";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Ounces_To_Pounds.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Ounces_To_Pounds.html", "width=400,height=400");
                            break;
                            
                        case "convert ounces to pounds":
                            text = "convert ounces to pounds";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Ounces_To_Pounds.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Ounces_To_Pounds.html", "width=400,height=400");
                            break;
                            
                        case "Convert Ounces To Pounds":
                            text = "Convert Ounces To Pounds";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Apothecaries_Weight/Ounces_To_Pounds.html", "./Research/Conversions_Units_Measurements/Apothecaries_Weight/Ounces_To_Pounds.html", "width=400,height=400");
                            break;
//}
                //}
                //Avoirdupois Weight {
                    //Grains To Dram {
                    
                        case "Convert grains to dram.":
                            text = "Convert grains to dram";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Grains_To_Dram.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Grains_To_Dram.html", "width=400,height=400");
                            break;
                            
                        case "convert grains to dram":
                            text = "convert grains to dram";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Grains_To_Dram.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Grains_To_Dram.html", "width=400,height=400");
                            break;
                            
                        case "Convert Grains To Dram":
                            text = "Convert Grains To Dram";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Grains_To_Dram.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Grains_To_Dram.html", "width=400,height=400");
                            break;
//}
                    //Dram To Ounces {
                    
                        case "Convert dram to ounces.":
                            text = "Convert dram to ounces";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Dram_To_Ounces.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Dram_To_Ounces.html", "width=400,height=400");
                            break;
                            
                        case "convert dram to ounces":
                            text = "convert dram to ounces";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Dram_To_Ounces.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Dram_To_Ounces.html", "width=400,height=400");
                            break;
                            
                        case "Convert Grains To Dram":
                            text = "Convert Grains To Dram";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Dram_To_Ounces.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Dram_To_Ounces.html", "width=400,height=400");
                            break;
//}
                    //Ounces To Pounds {
                    
                        case "Convert ounces to pounds.":
                            text = "Convert ounces to pounds";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Ounces_To_Pounds.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Ounces_To_Pounds.html", "width=400,height=400");
                            break;
                            
                        case "convert ounces to pounds":
                            text = "convert ounces to pounds";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Ounces_To_Pounds.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Ounces_To_Pounds.html", "width=400,height=400");
                            break;
                            
                        case "Convert Ounces To Pounds":
                            text = "Convert Ounces To Pounds";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Ounces_To_Pounds.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Ounces_To_Pounds.html", "width=400,height=400");
                            break;
//}
                    //Pounds To Quarters {
                    
                        case "Convert pounds to quarters.":
                            text = "Convert pounds to quarters";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Quarters.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Quarters.html", "width=400,height=400");
                            break;
                            
                        case "convert pounds to quarters":
                            text = "convert pounds to quarters";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Quarters.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Quarters.html", "width=400,height=400");
                            break;
                            
                        case "Convert Pounds To Quarters":
                            text = "Convert Pounds To Quarters";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Quarters.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Quarters.html", "width=400,height=400");
                            break;
//}
                    //Quarters To cwt. {
                    
                        case "Convert quarters to cwt.":
                            text = "Convert quarters to cwt";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Quarters_To_CWT.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Quarters_To_CWT.html", "width=400,height=400");
                            break;
                            
                        case "convert quarters to cwt":
                            text = "convert quarters to cwt";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Quarters_To_CWT.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Quarters_To_CWT.html", "width=400,height=400");
                            break;
                            
                        case "Convert Quarters To CWT":
                            text = "Convert Quarters To CWT";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Quarters_To_CWT.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Quarters_To_CWT.html", "width=400,height=400");
                            break;
//}
                    //Pounds To Short Ton {
                    
                        case "Convert pounds to short ton":
                            text = "Convert pounds to short ton";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Short_Ton.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Short_Ton.html", "width=400,height=400");
                            break;
                            
                        case "convert pounds to short ton":
                            text = "convert pounds to short ton";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Short_Ton.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Short_Ton.html", "width=400,height=400");
                            break;
                            
                        case "Convert Pounds To Short Ton":
                            text = "Convert Pounds To Short Ton";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Short_Ton.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Short_Ton.html", "width=400,height=400");
                            break;
//}
                    //Pounds To Long Ton {
                    
                        case "Convert pounds to long ton":
                            text = "Convert pounds to long ton";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Long_Ton.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Long_Ton.html", "width=400,height=400");
                            break;
                            
                        case "convert pounds to long ton":
                            text = "convert pounds to long ton";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Long_Ton.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Long_Ton.html", "width=400,height=400");
                            break;
                            
                        case "Convert Pounds To Long Ton":
                            text = "Convert Pounds To Long Ton";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Long_Ton.html", "./Research/Conversions_Units_Measurements/Avoirdupois_Weight/Pounds_To_Long_Ton.html", "width=400,height=400");
                            break;
//}
                //}
                //Dry Measure {
                    //Pints To Quarts {
                    
                        case "Convert pints to quarts.":
                            text = "Convert pints to quarts";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Grains_To_Dram.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Grains_To_Dram.html", "width=400,height=400");
                            break;
                            
                        case "convert pints to quarts":
                            text = "convert pints to quarts";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Grains_To_Dram.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Grains_To_Dram.html", "width=400,height=400");
                            break;
                            
                        case "Convert Pints To Quarts":
                            text = "Convert Pints To Quarts";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Grains_To_Dram.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Grains_To_Dram.html", "width=400,height=400");
                            break;
//}
                    //Quarts To Pecks {
                    
                        case "Convert quarts to pecks.":
                            text = "Convert quarts to pecks";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Quarts_To_Pecks.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Quarts_To_Pecks.html", "width=400,height=400");
                            break;
                            
                        case "convert quarts to pecks":
                            text = "convert quarts to pecks";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Quarts_To_Pecks.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Quarts_To_Pecks.html", "width=400,height=400");
                            break;
                            
                        case "Convert Quarts To Pecks":
                            text = "Convert Quarts To Pecks";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Quarts_To_Pecks.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Quarts_To_Pecks.html", "width=400,height=400");
                            break;
//}
                    //Pecks To Bushel {
                    
                        case "Convert pecks to bushel.":
                            text = "Convert pecks to bushel";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Pecks_To_Bushel.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Pecks_To_Bushel.html", "width=400,height=400");
                            break;
                            
                        case "convert pecks to bushel":
                            text = "convert pecks to bushel";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Pecks_To_Bushel.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Pecks_To_Bushel.html", "width=400,height=400");
                            break;
                            
                        case "Convert Pecks To Bushel":
                            text = "Convert Pecks To Bushel";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Pecks_To_Bushel.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Pecks_To_Bushel.html", "width=400,height=400");
                            break;
//}
                    //Bushel To Chaldron {
                    
                        case "Convert bushel to chaldron.":
                            text = "Convert bushel to chaldron";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Bushel_To_Chaldron.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Bushel_To_Chaldron.html", "width=400,height=400");
                            break;
                            
                        case "convert bushel to chaldron":
                            text = "convert bushel to chaldron";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Bushel_To_Chaldron.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Bushel_To_Chaldron.html", "width=400,height=400");
                            break;
                            
                        case "Convert Bushel To Chaldron":
                            text = "Convert Bushel To Chaldron";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Dry_Measure/Bushel_To_Chaldron.html", "./Research/Conversions_Units_Measurements/Dry_Measure/Bushel_To_Chaldron.html", "width=400,height=400");
                            break;
//}
                //}
                //Liquid Measure {
                    //Gills To Pints {
                    
                        case "Convert gills to pints.":
                            text = "Convert gills to pints";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Gills_To_Pints.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Gills_To_Pints.html", "width=400,height=400");
                            break;
                            
                        case "convert gills to pints":
                            text = "convert gills to pints";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Gills_To_Pints.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Gills_To_Pints.html", "width=400,height=400");
                            break;
                            
                        case "Convert Gills To Pints":
                            text = "Convert Gills To Pints";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Gills_To_Pints.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Gills_To_Pints.html", "width=400,height=400");
                            break;
//}
                    //Pints To Quarts {
                    
                        case "Convert pints to quarts.":
                            text = "Convert pints to quarts";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Pints_To_Quarts.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Pints_To_Quarts.html", "width=400,height=400");
                            break;
                            
                        case "convert pints to quarts":
                            text = "convert pints to quarts";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Pints_To_Quarts.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Pints_To_Quarts.html", "width=400,height=400");
                            break;
                            
                        case "Convert Pints To Quarts":
                            text = "Convert Pints To Quarts";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Pints_To_Quarts.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Pints_To_Quarts.html", "width=400,height=400");
                            break;
//}
                    //Quarts To Gallons {
                    
                        case "Convert quarts to gallons.":
                            text = "Convert quarts to gallons";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Quarts_To_Gallons.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Quarts_To_Gallons.html", "width=400,height=400");
                            break;
                            
                        case "convert quarts to gallons":
                            text = "convert quarts to gallons";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Quarts_To_Gallons.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Quarts_To_Gallons.html", "width=400,height=400");
                            break;
                            
                        case "Convert Quarts To Gallon":
                            text = "Convert Quarts To Gallon";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Quarts_To_Gallons.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Quarts_To_Gallons.html", "width=400,height=400");
                            break;
//}
                    //Gallons To Barrels {
                    
                        case "Convert gallons to barrels.":
                            text = "Convert gallons to barrels";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Gallons_To_Barrels.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Gallons_To_Barrels.html", "width=400,height=400");
                            break;
                            
                        case "convert gallons to barrels":
                            text = "convert gallons to barrels";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Gallons_To_Barrels.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Gallons_To_Barrels.html", "width=400,height=400");
                            break;
                            
                        case "Convert Gallons To Barrels":
                            text = "Convert Gallons To Barrels";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Gallons_To_Barrels.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Gallons_To_Barrels.html", "width=400,height=400");
                            break;
//}
                    //Barrels To Hogshead{
                    
                        case "Convert barrels to hogshead.":
                            text = "Convert barrels to hogshead";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Barrels_To_Hogshead.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Barrels_To_Hogshead.html", "width=400,height=400");
                            break;
                            
                        case "convert barrels to hogshead":
                            text = "convert gallons to barrels";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Barrels_To_Hogshead.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Barrels_To_Hogshead.html", "width=400,height=400");
                            break;
                            
                        case "Convert Barrels To Hogshead":
                            text = "Convert Barrels To Hogshead";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Liquid_Measure/Barrels_To_Hogshead.html", "./Research/Conversions_Units_Measurements/Liquid_Measure/Barrels_To_Hogshead.html", "width=400,height=400");
                            break;
//}
                //}
                //Time Measure {
                    //Seconds To Minutes {
                    
                        case "Convert seconds to minutes.":
                            text = "Convert seconds to minutes";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Seconds_To_Minutes.html", "./Research/Conversions_Units_Measurements/Time_Measure/Seconds_To_Minutes.html", "width=400,height=400");
                            break;
                            
                        case "convert seconds to minutes":
                            text = "convert seconds to minutes";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Seconds_To_Minutes.html", "./Research/Conversions_Units_Measurements/Time_Measure/Seconds_To_Minutes.html", "width=400,height=400");
                            break;
                            
                        case "Convert Seconds To Minutes":
                            text = "Convert Seconds To Minutes";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Seconds_To_Minutes.html", "./Research/Conversions_Units_Measurements/Time_Measure/Seconds_To_Minutes.html", "width=400,height=400");
                            break;
//}
                    //Minutes To Hours {
                    
                        case "Convert minutes to hours.":
                            text = "Convert minutes to hours";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Minutes_To_Hours.html", "./Research/Conversions_Units_Measurements/Time_Measure/Minutes_To_Hours.html", "width=400,height=400");
                            break;
                            
                        case "convert minutes to hours":
                            text = "convert minutes to hours";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Minutes_To_Hours.html", "./Research/Conversions_Units_Measurements/Time_Measure/Minutes_To_Hours.html", "width=400,height=400");
                            break;
                            
                        case "Convert Minutes To Hours":
                            text = "Convert Minutes To Hours";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Minutes_To_Hours.html", "./Research/Conversions_Units_Measurements/Time_Measure/Minutes_To_Hours.html", "width=400,height=400");
                            break;
//}
                    //Hours To Days {
                    
                        case "Convert hours to days.":
                            text = "Convert hours to days";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Hours_To_Days.html", "./Research/Conversions_Units_Measurements/Time_Measure/Hours_To_Days.html", "width=400,height=400");
                            break;
                            
                        case "convert hours to days":
                            text = "convert hours to days";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Hours_To_Days.html", "./Research/Conversions_Units_Measurements/Time_Measure/Hours_To_Days.html", "width=400,height=400");
                            break;
                            
                        case "Convert Hours To Days":
                            text = "Convert Hours To Days";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Hours_To_Days.html", "./Research/Conversions_Units_Measurements/Time_Measure/Hours_To_Days.html", "width=400,height=400");
                            break;
//}
                    //Days To Weeks {
                    
                        case "Convert days to weeks.":
                            text = "Convert days to weeks";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Days_To_Weeks.html", "./Research/Conversions_Units_Measurements/Time_Measure/Days_To_Weeks.html", "width=400,height=400");
                            break;
                            
                        case "convert days to weeks":
                            text = "convert days to weeks";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Days_To_Weeks.html", "./Research/Conversions_Units_Measurements/Time_Measure/Days_To_Weeks.html", "width=400,height=400");
                            break;
                            
                        case "Convert Days To Weeks":
                            text = "Convert Days To Weeks";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Days_To_Weeks.html", "./Research/Conversions_Units_Measurements/Time_Measure/Days_To_Weeks.html", "width=400,height=400");
                            break;
//}
                    //Weeks To Months {
                    
                        case "Convert weeks to months.":
                            text = "Convert weeks to months";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Weeks_To_Months.html", "./Research/Conversions_Units_Measurements/Time_Measure/Weeks_To_Months.html", "width=400,height=400");
                            break;
                            
                        case "convert weeks to months":
                            text = "convert weeks to months";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Weeks_To_Months.html", "./Research/Conversions_Units_Measurements/Time_Measure/Weeks_To_Months.html", "width=400,height=400");
                            break;
                            
                        case "Convert Weeks To Months":
                            text = "Convert Weeks To Months";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Time_Measure/Weeks_To_Months.html", "./Research/Conversions_Units_Measurements/Time_Measure/Weeks_To_Months.html", "width=400,height=400");
                            break;
//}
                //}
                //Long Measure {
                    //Inches To Feet {
                    
                        case "Convert inches to feet.":
                            text = "Convert inches to feet";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Inches_To_Feet.html", "./Research/Conversions_Units_Measurements/Long_Measure/Inches_To_Feet.html", "width=400,height=400");
                            break;
                            
                        case "convert inches to feet":
                            text = "convert inches to feet";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Inches_To_Feet.html", "./Research/Conversions_Units_Measurements/Long_Measure/Inches_To_Feet.html", "width=400,height=400");
                            break;
                            
                        case "Convert Inches To Feet":
                            text = "Convert Inches To Feet";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Inches_To_Feet.html", "./Research/Conversions_Units_Measurements/Long_Measure/Inches_To_Feet.html", "width=400,height=400");
                            break;
//}
                    //Feet To Yard {
                    
                        case "Convert feet to yards.":
                            text = "Convert feet to yards";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Feet_To_Yard.html", "./Research/Conversions_Units_Measurements/Long_Measure/Feet_To_Yard.html", "width=400,height=400");
                            break;
                            
                        case "convert feet to yards":
                            text = "convert feet to yards";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Feet_To_Yard.html", "./Research/Conversions_Units_Measurements/Long_Measure/Feet_To_Yard.html", "width=400,height=400");
                            break;
                            
                        case "Convert Feet To Yard":
                            text = "Convert Feet To Yard";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Feet_To_Yard.html", "./Research/Conversions_Units_Measurements/Long_Measure/Feet_To_Yard.html", "width=400,height=400");
                            break;
//}
                    //Yards To Rods {
                    
                        case "Convert yards to rods.":
                            text = "Convert yards to rods";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Yards_To_Rods.html", "./Research/Conversions_Units_Measurements/Long_Measure/Yards_To_Rods.html", "width=400,height=400");
                            break;
                            
                        case "convert yards to rods":
                            text = "convert yards to rods";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Yards_To_Rods.html", "./Research/Conversions_Units_Measurements/Long_Measure/Yards_To_Rods.html", "width=400,height=400");
                            break;
                            
                        case "Convert Yards To Rods":
                            text = "Convert Yards To Rods";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Yards_To_Rods.html", "./Research/Conversions_Units_Measurements/Long_Measure/Yards_To_Rods.html", "width=400,height=400");
                            break;
//}
                    //Rods To Furlong {
                    
                        case "Convert rods to furlong.":
                            text = "Convert rods to furlong";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Rods_To_Furlong.html", "./Research/Conversions_Units_Measurements/Long_Measure/Rods_To_Furlong.html", "width=400,height=400");
                            break;
                            
                        case "convert rods to furlong":
                            text = "convert rods to furlong";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Rods_To_Furlong.html", "./Research/Conversions_Units_Measurements/Long_Measure/Rods_To_Furlong.html", "width=400,height=400");
                            break;
                            
                        case "Convert Rods To Furlong":
                            text = "Convert Rods To Furlong";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Rods_To_Furlong.html", "./Research/Conversions_Units_Measurements/Long_Measure/Rods_To_Furlong.html", "width=400,height=400");
                            break;
//}
                    //Furlong To State Mile { 
                    
                        case "Convert furlong to state mile.":
                            text = "Convert furlong to state mile";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Furlong_To_State_Mile.html", "./Research/Conversions_Units_Measurements/Long_Measure/Furlong_To_State_Mile.html", "width=400,height=400");
                            break;
                            
                        case "convert furlong to state mile":
                            text = "convert furlong to state mile";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Furlong_To_State_Mile.html", "./Research/Conversions_Units_Measurements/Long_Measure/Furlong_To_State_Mile.html", "width=400,height=400");
                            break;
                            
                        case "Convert Furlong To State Mile":
                            text = "Convert Furlong To State Mile";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Furlong_To_State_Mile.html", "./Research/Conversions_Units_Measurements/Long_Measure/Furlong_To_State_Mile.html", "width=400,height=400");
                            break;
//}
                    //Miles To League { 
                    
                        case "Convert miles to league.":
                            text = "Convert miles to league";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Miles_To_League.html", "./Research/Conversions_Units_Measurements/Long_Measure/Miles_To_League.html", "width=400,height=400");
                            break;
                            
                        case "convert miles to league":
                            text = "convert miles to league";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Miles_To_League.html", "./Research/Conversions_Units_Measurements/Long_Measure/Miles_To_League.html", "width=400,height=400");
                            break;
                            
                        case "Convert Miles To League":
                            text = "Convert Miles To League";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Long_Measure/Miles_To_League.html", "./Research/Conversions_Units_Measurements/Long_Measure/Miles_To_League.html", "width=400,height=400");
                            break;
//}
                //}
                //Cloth Measure {
                    //Inches To Nail {
                    
                        case "Convert inches to nail.":
                            text = "Convert inches to nail";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Cloth_Measure/Inches_To_Nail.html", "./Research/Conversions_Units_Measurements/Cloth_Measure/Inches_To_Nail.html", "width=400,height=400");
                            break;
                            
                        case "convert inches to nail":
                            text = "convert inches to nail";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Cloth_Measure/Inches_To_Nail.html", "./Research/Conversions_Units_Measurements/Cloth_Measure/Inches_To_Nail.html", "width=400,height=400");
                            break;
                            
                        case "Convert Inches To Nail":
                            text = "Convert Inches To Nail";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Cloth_Measure/Inches_To_Nail.html", "./Research/Conversions_Units_Measurements/Cloth_Measure/Inches_To_Nail.html", "width=400,height=400");
                            break;
//}
                    //Nail To Quarters {
                    
                        case "Convert nail to quarters.":
                            text = "Convert nail to quarters";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Cloth_Measure/Nail_To_Quarters.html", "./Research/Conversions_Units_Measurements/Cloth_Measure/Nail_To_Quarters.html", "width=400,height=400");
                            break;
                            
                        case "convert nail to quarters":
                            text = "convert nail to quarters";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Cloth_Measure/Nail_To_Quarters.html", "./Research/Conversions_Units_Measurements/Cloth_Measure/Nail_To_Quarters.html", "width=400,height=400");
                            break;
                            
                        case "Convert Nail To Quarters":
                            text = "Convert Nail To Quarters";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Cloth_Measure/Nail_To_Quarters.html", "./Research/Conversions_Units_Measurements/Cloth_Measure/Nail_To_Quarters.html", "width=400,height=400");
                            break;
//}
                    //Quarters To Yards{
                    
                        case "Convert quarters to yards.":
                            text = "Convert quarters to yards";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Cloth_Measure/Quarters_To_Yards.html", "./Research/Conversions_Units_Measurements/Cloth_Measure/Quarters_To_Yards.html", "width=400,height=400");
                            break;
                            
                        case "convert quarters to yards":
                            text = "convert quarters to yards";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Cloth_Measure/Quarters_To_Yards.html", "./Research/Conversions_Units_Measurements/Cloth_Measure/Quarters_To_Yards.html", "width=400,height=400");
                            break;
                            
                        case "Convert Quarters To Yards":
                            text = "Convert Quarters To Yards";
                            Arthenya.say("Give me second.");
                            window.open("./Research/Conversions_Units_Measurements/Cloth_Measure/Quarters_To_Yards.html", "./Research/Conversions_Units_Measurements/Cloth_Measure/Quarters_To_Yards.html", "width=400,height=400");
                            break;
//}
                //}
                */
    //}
    //Los Angeles County City Home Page {
        //Agoura Hills {
    case 'Explore agoura hills':
    if (input === 'Explore agoura hills') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
        appendMessage('bot', 'ddd.');
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
    //B.L.A.C.C. Connect {
        //STATES INCORPORATED WITHIN B.L.A.C.C. CONNECT {
            //Single Cases {
        //Incorporated States within B.L.A.C.C. Connect {
    case 'How many states are Incorporated within black connect':
    if (input === 'How many states are Incorporated within black connect') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'There are 13 states Incorporated within black connect.');
    }, 2000);
    
    break;
    //}
            //}
            
        //}
        //Level 1 Access {
          //California {
            //Incorporated Cities Within Los Angeles {
             //LOS ANGELES CALIFORNIA DISTRICT ONE {
        //Alhambra {
            
        //}
    //}
            //}
    //}
        //}
    //}
    //BLACC Corporation  {
      //Biology  {
        //B.L.A.C.C. Ark { 
        //}
        //OneiroNet {
            //}
        //Asclepieion Of B.L.A.C.C. {
            
        //}
      //}
      //Language  {
        //B.L.A.C.C. Music {
            
        //}
        //Vital mathematics {
            
        //}
        //Pharaoh History {
        //}
      //}
      //Architecture  {
        //NFT {
            
        //}
        //Blacklining {
            
        //}
        //Eye {
            
        //}
      //}
      //Computer Science  {
        //New Nexxus {
            
        //}
        //B.L.A.C.C. Connect {
            
        //}
        //Website Inquiry {
            
        //}
        //B.L.A.C.C. Tele {
            
        //}
        //A.S.E. {
            
        //}
        //B.L.A.C.C. Email {
        //}
        //B.L.A.C.C. Messages {
            
        //}
        //B.L.A.C.C. Database {
            
        //}
        //BLACChole {
            
        //}
        //B.L.A.C.C. Search {
            
        //}
      //}
      //Change/Humanities  {
        //New Nexxus {
            
        //}
        //B.L.A.C.C. Connect {
            
        //}
        //B.L.A.C.C. Guided Pathway {
            
        //}
      //}
    //}
    //Politicians {
     //California {
       //State Assembly Members  {
        //Imperial County {
           //Eduardo Garcia {
    case 'Explore Eduardo Garcia':
    if (input === 'Explore Eduardo Garcia') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Eduardo Garcia is a Democrat in Imperial County holding Seat 36.');
    }, 2000);
    
    break;           //}
        //}
        //San Diego County {
           //David Alveraz {
    case 'Explore David Alveraz':
    if (input === 'Explore David Alveraz') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'David Alveraz is a Democrat in San Diego County holding Seat 80.');
    }, 2000);
    
    break;           //}
           //Tasha Boarner {
    case 'Explore Tasha Boarner':
    if (input === 'Explore Tasha Boarner') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Tasha Boarner is a Democrat in San Diego County holding Seat 77.');
    }, 2000);
    
    break;           //}
           //Laurie Davies {
    case 'Explore Laurie Davies':
    if (input === 'Explore Laurie Davies') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Laurie Davies is a Republican in San Diego County holding Seat 74.');
    }, 2000);
    
    break;           //}
           //Brain Maienschein {
    case 'Explore Brain Maienschein':
    if (input === 'Explore Brain Maienschein') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Brain Maienschein is a Democrat in San Diego County holding Seat 76.');
    }, 2000);
    
    break;           //}
           //Maries Waldron {
    case 'Explore Maries Waldron':
    if (input === 'Explore Maries Waldron') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Maries Waldron is a Republican in San Diego County holding Seat 75.');
    }, 2000);
    
    break;           //}
           //Christopher Ward {
    case 'Explore Christopher Ward':
    if (input === 'Explore Christopher Ward') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Christopher Ward is a Democrat in San Diego County holding Seat 78.');
    }, 2000);
    
    break;           //}
           //Akilah Weber {
    case 'Explore Akilah Weber':
    if (input === 'Explore Akilah Weber') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Akilah Weber is a Democrat in San Diego County holding Seat 79.');
    }, 2000);
    
    break;           //}
        //}
        //Los Angeles County {
           //Rick Chavez Zubar {
    case 'Explore Rick Chavez Zubar':
    if (input === 'Explore Rick Chavez Zubar') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Rick Chavez Zubar is a Democrat in Los Angeles County holding Seat 51.');
    }, 2000);
    
    break;           //}
           //Pilar Shiavo {
    case 'Explore Pilar Shiavo':
    if (input === 'Explore Pilar Shiavo') return;

    appendMessage('user', message);
    input.value = '';

    // Simulate a bot response
    setTimeout(() => {
        appendMessage('bot', 'Pilar Shiavo is a Democrat in Los Angeles County holding Seat 51.');
    }, 2000);
    
    break;           //}
        //}
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

