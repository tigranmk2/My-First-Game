let container = document.querySelector(".container");
let previousElement = "";

container.addEventListener("click", function (event) {
    let currentElement = event.target;

    if (currentElement.classList.contains('square_closed')) {
        currentElement.classList.remove('square_closed')

        if (previousElement == "") {
            previousElement = currentElement ;
        }
        else if (previousElement.classList.contains("blue") && 
            currentElement.classList.contains("blue")){
            previousElement.style.opacity = 0 ;
            currentElement.style.opacity = 0 ;
            previousElement = "" ;
        }
        else if (previousElement.classList.contains("green") && 
            currentElement.classList.contains("green")){
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = "";
        }
            else if (previousElement.classList.contains("pink") && 
                currentElement.classList.contains("pink")){
                previousElement.style.opacity = 0;
                currentElement.style.opacity = 0;
                previousElement = "";
            }
            else if (previousElement.classList.contains("red") && 
                currentElement.classList.contains("red")){
                previousElement.style.opacity = 0;
                currentElement.style.opacity = 0;
                previousElement = "";
            }
            else if (previousElement.classList.contains("yellow") && 
                currentElement.classList.contains("yellow")){
                previousElement.style.opacity = 0;
                currentElement.style.opacity = 0;
                previousElement = "";
            }
            else if (previousElement.classList.contains("purple") && 
                currentElement.classList.contains("purple")){
                previousElement.style.opacity = 0;
                currentElement.style.opacity = 0;
                previousElement = "";
            }
        
        else if (previousElement.classList.contains("gray") && 
            currentElement.classList.contains("gray")){
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = "";
        
        }
        else if (previousElement.classList.contains("brown") && 
            currentElement.classList.contains("brown")){
            previousElement.style.opacity = 0;
            currentElement.style.opacity = 0;
            previousElement = "";
        }
        else {
            previousElement.classList.add("square_closed") ;
            previousElement = currentElement ;
        }
         
    }
})

alert("Լավ կհիշես գույների տեղերը")

