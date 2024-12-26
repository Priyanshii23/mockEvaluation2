import {baseUrl} from "./baseUrl.js";

let form = document.getElementById("form")
form.addEventListener("submit", function(){
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
  
    
    async function getData(data) {
     try  { 
         let res = await  fetch(`${baseUrl}`)
        //  await res.json
          

       
        if (email!=0){
            if(password=!0){
                alert("Login Successful, You are redirecting to quiz page!")
                localStorage.setItem("loginData")
                JSON.stringify(user[0])
                window.location.href="quiz.html"
            }
            else{
                alert("Please enter password")
            }
        } else{
            alert("Login failed!!")
        }
        }



    catch(err){
        "err", err
    }
    }



})
                                                                                                                                              