
var desc = "Restful api. covers different aspects in which rest api can be so curial on web apps. data consupmtions via api following crud application and authentication. created using vanilla php"
window.onload = initpage;

function initpage(){
    var username = document.querySelector("#username");
    var confirmPassword = document.querySelector("#confirm-password");

    addEventHandler(username, "blur", checkUsername);
    addEventHandler(confirmPassword, "blur", checkPassword);
    // addEventHandler(username, "focus", focusUsername);

    // document.querySelector("#username").onblur = checkUsername;
    document.querySelector("#register").disable = true;
}

function checkUsername(e) {
    request = createRequest();
    
    if(request != null){

        var username = document.querySelector("#username").value;

        if(e.target.value != ""){
            document.querySelector("#username").className = 'inprogress';
            
            var url = 'http://localhost/ajax/mike%20movies/checkusername.php?username=' + username;
    
            request.open("GET", url, true);
    
            request.onreadystatechange = showUsernameStatus;
    
            request.send(null);
        }
       
 
    }

}

function showUsernameStatus() {
    if(request.readyState == 4 && request.status == 200 ){
        if(request.responseText == 'yes'){
            // no errors
            console.log('yes');
            var username_input = document.querySelector("#username");
            username_input.className = 'approved';
            document.querySelector("#username").nextElementSibling.textContent = "";
            document.querySelector("#username").nextElementSibling.style.display = "none";
            document.querySelector("#register").disable = false;

        } else {
            // username has been already taken
            console.log('no');
            document.querySelector("#username").className = 'denied';
            document.querySelector("#username").nextElementSibling.style.display = "block";
            document.querySelector("#username").nextElementSibling.textContent = "This username is already taken";
            document.querySelector("#register").disable = true;
        }
    }
      
}

function focusUsername(){
    var username = document.querySelector("#username");
    username.className = "";
    console.log("hi")
}

function checkPassword(){
    var password = document.querySelector("#password");
    var confirmPassword = document.querySelector("#confirm-password");

    if((password.value != "") || (password.value != confirmPassword.value)){
        password.className = 'denied';
        return;
    }

    var request = createRequest();
    
    if(request != null){

        var passwordValue = password.value;

        
        document.querySelector("#password").className = 'inprogress';
            
        var url = 'http://localhost/ajax/mike%20movies/checkPassword.php?password=' + passwordValue;

   
        request.onreadystatechange = showPasswordStatus;
        request.open("GET", url, true);
        request.send(null);
        
       
 
    }
}


function showPasswordStatus(){
    if(request.responseText == 'yes'){

        var username_input = document.querySelector("#username");
        username_input.className = 'approved';
        document.querySelector("#username").nextElementSibling.textContent = "";
        document.querySelector("#username").nextElementSibling.style.display = "none";
        document.querySelector("#register").disable = false;

    } else {
        // username has been already taken
        console.log('no');
        document.querySelector("#username").className = 'denied';
        document.querySelector("#username").nextElementSibling.style.display = "block";
        document.querySelector("#username").nextElementSibling.textContent = "This username is already taken";
        document.querySelector("#register").disable = true;
    }
}


