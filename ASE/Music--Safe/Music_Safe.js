
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
            
        //Music Safe  {
    case "Music Safe":
    text = "This information has not been proceed yet.";
    window.open("./Media/Music_Safe/Music_Safe.html", target="_self", "./Media/Music_Safe/Music_Safe.html", "width=400,height=400");
    break;
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

