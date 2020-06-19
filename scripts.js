(function(){
    // testing functions
    /*
    var container = document.querySelector(".container");
    // we can define a function and give its name as an argument 
    function handleClick(){
    };

    container.addEventListener("click",handleClick,false);

    // ... or we can give an argument as an anonymous function

    container.addEventListener("click", function(){

        console.log("Co mnie naciskasz?!");

    }, false);
    */

    // beginning Tooltip stuff

    var title = document.querySelectorAll("[title]");

    function showTooltip(){
        console.log("Najechałem myszką :)");
    }

    function hideTooltip(){
        console.log("Usunąłem myszkę!");
    }

    for (var i = 0; i < title.length; i++){
        title[i].addEventListener("mouseenter", showTooltip, false);
        title[i].addEventListener("mouseleave", hideTooltip, false);
    }


})();