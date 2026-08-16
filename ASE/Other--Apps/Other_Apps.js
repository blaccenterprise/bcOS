
                    function myFunction() {
                        //Variables {
                        var text;
                        var consciousness = document.getElementById("output").value;
                        var ASE = new Artyom();
                        var emergency = 1;
                        var relax = 2;
                        //}
                        switch (consciousness) {
                            
//Digital Modules  {

    //Knowledge Module {
      
        //Other Apps  {
                //Facebook {
                    case "Faceboook":
                    ASE.say("Standy By.");
                    text = "Stand By.";
                    window.open("https://facebook.com/", "https://facebook.com/", "width=400,height=400");
                    break;
                    //}
                //Github {
                    case "Github":
                    ASE.say("Standy By.");
                    text = "Stand By.";
                    window.open("https://github.com/", "https://github.com/", "width=400,height=400");
                    break;
                    //}
                //Instagram {
                    case "Instagram":
                    ASE.say("Standy By.");
                    text = "Stand By.";
                    window.open("https://instagram.com/", "https://instagram.com/", "width=400,height=400");
                    break;
                    //}
                //Youtube {
                    case "Youtube":
                    ASE.say("Standy By.");
                    text = "Stand By.";
                    window.open("https://youtube.com/", "https://youtube.com/", "width=400,height=400");
                    break;
                    //}
                //Google Docs {
                    case "Google Docs":
                    ASE.say("Standy By.");
                    text = "Stand By.";
                    window.open("https://docs.google.com/", "https://docs.google.com/", "width=400,height=400");
                    break;
                    case "Google docs":
                    ASE.say("Standy By.");
                    text = "Stand By.";
                    window.open("https://docs.google.com/", "https://docs.google.com/", "width=400,height=400");
                    break;
                    
                    case "google docs":
                    ASE.say("Standy By.");
                    text = "Stand By.";
                    window.open("https://docs.google.com/", "https://docs.google.com/", "width=400,height=400");
                    break;
                    //}
                //CalFresh {
                    case "CalFresh":
                    ASE.say("Standy By.");
                    text = "Stand By.";
                    window.open("https://benefitscal.com/", "https://benefitscal.com/", "width=400,height=400");
                    break;
                    //}
                //W3school {
                    case "W3school":
                    ASE.say("Standy By.");
                    text = "Stand By.";
                    window.open("https://w3school.com/", "https://w3school.com/", "width=400,height=400");
                    break;
                    //}
                            //}
                            
//}

                            //}

                            //Conditional  {
                            case "bring up Mass alert":
                                text = "bring up Mass alert";
                                ASE.say("Okay. Stand by.");
                                if (emergency < relax) {
                                    alert("Emergency");
                                    window.open("https://blaccenterprise.github.io/blacc_profile/Contact_Card/Business_Mass_Alert.html", "https://blaccenterprise.github.io/blacc_profile/Contact_Card/Business_Mass_Alert.html", "width=400,height=400");
                                } else {
                                    alert("Relax");
                                    window.open("https://blaccenterprise.github.io/blacc_profile/Contact_Card/David_Bush.html", "https://blaccenterprise.github.io/blacc_profile/Contact_Card/David_Bush.html", "width=400,height=400");

                                };
                                break;

                            //}
                            //reponse to not being able to hear me

                            default:
                                text = "My apologies.";
                                ASE.say("I could not hear you clearly King Carpenter can you please repeat that");
                                break;
                        }

                        document.getElementById("demo").innerHTML = text;
                    }

