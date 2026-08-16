
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
      
        //Firearms  {
                //Pistols {
                    //Glocks {
                       //G35 G35 GEN4 G35 GEN4 MOS {
                        //Basic info {
                        case "Glock 35":
                        ASE.say("Action is semiautomatic. Grip is polymer. Barrel is 5.31 inches. Sight is fixed. Weight of Glock 35 is 27.18 ounces. Caliber is 40 S and W. Clip capicity can be 10, 15 and 22.");
                        text = "Action is semiautomatic. Grip is polymer. Barrel is 5.31 inches. Sight is fixed. Weight of Glock 35 is 27.18 ounces. Caliber is 40 S and W. Clip capicity can be 10, 15 and 22.";
                        window.open("https://blaccenterprise.github.io/Content/content/BLACCimages/Glock35.jpg", "https://blaccenterprise.github.io/Content/content/BLACCimages/Glock35.jpg", "width=900,height=500");
                        break;
                        //}
                        //}
                    //}
                //}
                //Caliber {
                 //40S&W {
                    //Black Hills Ammunition Ballistics {
                        case "Black Hills ammunition ballistics for 40 S and W":
                        text = "Stand By.";
                        ASE.say("Standy By.");
                       window.open("./Research/Firearms/40_S_W_Wikipedia.pdf", "./Research/Firearms/40_S_W_Wikipedia.pdf", "width=400,height=400");
                       window.open("./Research/Firearms/40_Caliber_Smith_Wesson_Ballistic_Chart_Ballistics_101.pdf", "./Research/Firearms/40_Caliber_Smith_Wesson_Ballistic_Chart_Ballistics_101.pdf", "width=400,height=400");
                        break;
                        //}
                 //}
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

