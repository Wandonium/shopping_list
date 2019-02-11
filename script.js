var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li_array = document.querySelectorAll("li");

for(var i = 0; i < li_array.length; i++) {
	var li_btn = document.createElement("button");
	li_btn.appendChild(document.createTextNode("Delete"));
	li_btn.className = "delete";
	li_array[i].appendChild(li_btn);
	li_array[i].setAttribute("id", "item"+i);
    li_array[i].addEventListener("click", bindClick(i));
 }


 var delete_btn = document.getElementsByClassName("delete");

 for(let i = 0; i < delete_btn.length; i++) {
 	delete_btn[i].addEventListener("click", function() {
 		var item = document.getElementById("item"+i);
 		console.log("An li has been removed.");
 		ul.removeChild(item);
 	})
 }

 function bindClick(i) {
    return function() {
        li_array[i].classList.toggle("done");
    };
 }

function createListElement() {
	var li = document.createElement("li");
	var li_btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	li_btn.appendChild(document.createTextNode("Delete"));
	li_btn.className = "delete";
	li.appendChild(li_btn);
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
	li_btn.addEventListener("click", function() {
		console.log("An li has been removed.");
		ul.removeChild(li);
	})
	ul.appendChild(li);
	console.log("An li has been added.");
	input.value = "";
}

button.addEventListener("click", function() {
	if(input.value.length > 0){
		createListElement();
	}
})

input.addEventListener("keypress", function(event) {
	if(input.value.length > 0 && event.which === 13){
		createListElement();
	}
})