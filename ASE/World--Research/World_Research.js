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
      
      
                            
        //World Research  {
                //USA States  {
                  //Single Case {
                    //A.S.E. Spoken Language  {
                            case "Open list of United States counties":
                                text = "Welcome";
                                ASE.say("Welcome");
                                window.open("./List_of_United_States_counties_and_county_equivalents.html", "./List_of_United_States_counties_and_county_equivalents.html", "width=400,height=400");
                                break;
                            //}
                    //Shorthand - Written Language  {
                            case "open list of united listtates counties":
                                text = "Welcome";
                                ASE.say("Welcome");
                                window.open("./List_of_United_States_counties_and_county_equivalents.html", "./List_of_United_States_counties_and_county_equivalents.html", "width=400,height=400");
                                break;
                            //}
                    //Default - Written Language  {
                            case "Open List Of United States Counties":
                                text = "Welcome";
                                ASE.say("Welcome");
                                window.open("./List_of_United_States_counties_and_county_equivalents.html", "./List_of_United_States_counties_and_county_equivalents.html", "width=400,height=400");
                                break;
                            //}
                            //}
                  //Alabama {
                        
                    //}
                  //Alaska {
                        
                    //}
                  //Arizona {
                        
                    //}
                  //Arkansas {
                        
                    //}
                  //California {
                        
                    //}
                  //Colorado {
                        
                    //}
                  //Connecticut {
                        
                    //}
                  //Delaware {
                        
                    //}
                  //Florida {
                        
                    //}
                  //Georgia {
                        
                    //}
                  //Hawaii {
                        
                    //}
                  //Idaho {
                        
                    //}
                  //Illinois {
                        
                    //}
                  //Indiana {
                        
                    //}
                  //Iowa {
                        
                    //}
                  //Kansas {
                        
                    //}
                  //Kentucky {
                        
                    //}
                  //Louisiana {
                        
                    //}
                  //Maine {
                        
                    //}
                  //Maryland {
                        
                    //}
                  //Massachusetts {
                        
                    //}
                  //Michigan {
                        
                    //}
                  //Minnesota {
                        
                    //}
                  //Mississippi {
                        
                    //}
                  //Missouri {
                        
                    //}
                  //Montana {
                        
                    //}
                  //Nebraska {
                        
                    //}
                  //Nevada {
                        
                    //}
                  //New Hampshire {
                        
                    //}
                  //New Jersey {
                        
                    //}
                  //New Mexico {
                        
                    //}
                  //New York {
                        
                    //}
                  //North Carolina {
                        
                    //}
                  //North Dakota {
                        
                    //}
                  //Ohio {
                        
                    //}
                  //Oklahoma {
                        
                    //}
                  //Oregon {
                        
                    //}
                  //Pennsylvania {
                        
                    //}
                  //Rhode Island {
                        
                    //}
                  //South Carolina {
                        
                    //}
                  //South Dakota {
                        
                    //}
                  //Tennessee {
                        
                    //}
                  //Texas {
                        
                    //}
                  //Utah {
                        
                    //}
                  //Vermont {
                        
                    //}
                  //Virginia {
                        
                    //}
                  //Washington {
                        
                    //}
                  //West Virginia {
                        
                    //}
                  //Wisconsin {
                        
                    //}
                  //Wyoming {
                        
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

