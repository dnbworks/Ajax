

window.onload = initPage;


function initPage(){
    var schedulePanes = document.querySelectorAll("nav a");
    var images = document.querySelectorAll("aside a");

    
    schedulePanes.forEach((pane) => {
        // pane.addEventListener("mouseover", showHint);
        // pane.addEventListener("mouseout", hideHint);

        pane.addEventListener("click", showTabs);

    });

    images.forEach((image) => {

        // cross browser support
        addEventHandler(image, "mouseover", showHint);
        addEventHandler(image, "mouseout", hideHint);
        addEventHandler(image, "click", showTabs);

        // image.addEventListener("mouseover", showHint, false);
        // image.addEventListener("mouseout", hideHint, false);
        // image.addEventListener("click", showTabs, false);
        
    });

}

var welcomePaneShowing = true;

function showHint(e){
   if(!welcomePaneShowing){
       return ;
   }

   var targetedElement = getActivatedObject(e);
   switch(targetedElement.title){
       case 'beginner':
       var hintText = "Just getting started? Come join us!";
       break;

       case 'intermediate':
        var hintText = "Take your flexibiility to the next level!";
        break;

        case 'advance':
        var hintText = "Perfect join your body and mind with these intensive workouts.";
        break;

        default:
        var hintText = "Welcome, click a tab to display the course schedule for the selected data.";
       
   }

   var content = document.querySelector("section");
    content.innerHTML = "<h3>" + hintText + "</h3>;"
    this.className = "active";

 
}

function hideHint(e){
    if(welcomePaneShowing){
        var content = document.querySelector("section");
        content.innerHTML = "<h3>Welcome, click a tab to display the course schedule for the selected data.</h3>;"
    }
    var targetedElement = getActivatedObject(e);
    targetedElement.className = "";
}

function showTabs(e){
    var targetedElement = getActivatedObject(e);
    var selectedTab = targetedElement.title;

    var tabs = document.querySelectorAll("nav a");
    var content = document.querySelector("section");

    // currently not doing something
    if(selectedTab == "welcome"){
        welcomePaneShowing = true;
        content.innerHTML = "<h3> Welcome, click a tab to display the course schedule for the selected data </h3>";
     } else {
         welcomePaneShowing = false;
     }

    tabs.forEach((tab) => {
        if(tab.title == selectedTab){
            tab.className = 'active';
        } else {
            tab.className = 'inactive';
        }
      
    });

    var request = createRequest();

    if(request != null){
        var url = selectedTab + '.html';

        request.open("GET", url, true);

        request.onreadystatechange = showSchedule;

        request.send(null);
    }

    

}

function showSchedule() {
    if(request.readyState == 4 && request.status == 200){
        var content = document.querySelector("section");
        content.innerHTML = request.responseText;

        
    }
}