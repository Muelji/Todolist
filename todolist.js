var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")
button.addEventListener("click", function get(){
      var x = document.createElement("li");
       var box = document.createElement("input");
       box.type = "checkbox";

      if(input.value !==""){ alert("Are you sure about adding this to your list?")
        
      x.append(document.createTextNode(input.value), box);

     ul.append(x);
    
    input.value="";
        }
        else(alert("pls add something"))
    }
)


input.addEventListener("keypress", function(event){
    var x = document.createElement("li");
    var box = document.createElement("input")
    box.type = "checkbox"

    if (event.key=="Enter"){
        if(input.value !==""){
            x.append(document.createTextNode(input.value), box);
            ul.append(x);
            
            input.value="";
        }
        
    }

}
)



var order = document.getElementById("order")
order.addEventListener("click", function(){
    alert("Congratulations you have successfully confirmed your list")}
    
    
)

var list = document.querySelector("ul");
list.addEventListener("click", function(ev){
          if(ev.target.tagName === "LI"){
            ev.target.classList.toggle("checked")

 }
}
)
