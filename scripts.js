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

    var tooltip = null;

    // I pass two arguments -> text - for tooltip content and position - for the position :)
    function createTooltip(text, options){

        var div = document.createElement("div"); // to create a new element in memory
        
        div.textContent = text;
        div.className = "tooltip hidden"; //to add a class to an element (when it has no classes - if it has we can use 'add' method)

        document.body.appendChild(div); // to insert a new element on the website

        div.style.left = (options.x + options.w / 2 - div.offsetWidth / 2) + "px";
        div.style.top = options.y - div.offsetHeight - 5  + "px"; 

        div.classList.remove("hidden");

        tooltip = div;


    }

    var title = document.querySelectorAll("[title]");

    function showTooltip(e){ 

        var title = e.target.getAttribute("title");

        e.target.removeAttribute("title");
        // as the second argument I pass an object (key-value pairs)
        createTooltip(title, {
            x: e.target.offsetLeft,
            y: e.target.offsetTop,
            w: e.target.offsetWidth
        });
    }
/*
    -- 'e' is a parameter to which the browser will return an object with 'MouseEvent' class
       to see this object => console.log(e);
    -- We can refer to different properties of the object using . notation 
       console.log(e.target) => shows the element on which the function called
    -- we can get the attribute of the chosen element:
       console.log(e.target.getAttribute("title"));
    */

    function hideTooltip(e){

        e.target.setAttribute("title", tooltip.textContent);
        tooltip.parentNode.removeChild(tooltip); // to remove element from page
        
    }

    for (var i = 0; i < title.length; i++){
        title[i].addEventListener("mouseenter", showTooltip, false);
        title[i].addEventListener("mouseleave", hideTooltip, false);
    }


})();