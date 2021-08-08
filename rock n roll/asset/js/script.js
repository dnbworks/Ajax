



function initPage(){
    var imgs = document.querySelectorAll(".instruments img");

    imgs.forEach((img) => {
        img.addEventListener("click", function(){
            
            getDetails(this.title, this.src);
        });
    });

    function createRequest(){
        try {
            request = new XMLHttpRequest();
        } catch (ms) {
            try {
                request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (otherMs) {
                try {
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (failed) {
                    request = null;
                }

            }
           
        }
        return request;
    }

    function getDetails(name, image){
        request = createRequest();

        if(request != null){
            
            var url = 'http://localhost/ajax/rock%20n%20roll/getDetails.php?id=' + name;

            request.open("GET", url, true);

            request.onreadystatechange = () => {
                displayDetails(image);
            };

            request.send(null);
            // console.log(url);
        }
        
    }

    function displayDetails(imgscr){
        if(request.readyState == 4 && request.status == 200){
            var thumbnail = document.querySelector(".details img");
            var text= document.querySelector(".details p");
            var request_data = JSON.parse(request.responseText);
            thumbnail.src = imgscr;
            text.textContent = request_data.description.substring(0, 200) + '...';
            console.log(JSON.parse(request.responseText));
        }
    }


}

window.onload = initPage;
