document.getElementById("registrationForm").addEventListener("submit", (event) => {
                event.preventDefault();

                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const city = document.getElementById("city").value;
                const level = document.getElementById("level").value;

                const registrationForm = {
                    name: name,
                    email: email,
                    city: city,
                    level: level,
                };

                console.log(registrationForm);

                //Create JSON
                const studentJSON = JSON.stringify(registrationForm)
                console.log(studentJSON)

                //Introduce AJAX - Native
                const http = new XMLHttpRequest()

                http.onreadystatechange = ()=>{
                    if(http.readyState == 4){
                        if(http.status == 200){
                            var responseTextJSON = JSON.stringify(http.responseText)
                            console.log(responseTextJSON)
                        }else{
                            console.error("Failed");
                            console.error("Status"+http.status)
                            console.error("Ready Status"+http.readyState)
                        }
                    }else{
                        console.error("Ready Status"+http.readyState)
                    }
                    
                }

                http.open("POST","http://localhost:8080/StudentManagement_war_exploded/student",true)

                http.setRequestHeader("Content-Type","application/json")

                http.send(studentJSON)

                //AJAX With JQuery
                // $.ajax({
                //     url:"http://localhost:8080/StudentManagement_war_exploded/student",
                //     type : "POST",
                //     data:studentJSON,
                //     headers:{"Content-Type":"application/json"},
                //     success:(res)=> {
                //         console.log(JSON.stringify(res));
                //     },
                //     error:(res)=>{
                //         console.error(res);
                //     }
                // });
