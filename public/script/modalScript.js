
var modal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");
var btn = document.querySelectorAll("#deletebtn");
var formModal = document.getElementById("modal2")
var editbtn = document.querySelectorAll("#editbtn")
var delet = document.querySelector(".modal")
var addUserForm = document.getElementById("addUserForm")
var editForm = document.getElementById("editForm");


console.log(delet)



function doSomething(){
   for(var i = 0; i < btn.length; i++){
       btn[i].addEventListener("click", (e) => {
         modal.style.display = "block";
     
       }) 
   }
   for(var i = 0; i < editbtn.length; i++){
    // editbtn[i].addEventListener("click", () => {
    //   modal2.style.display = "block"
    editbtn[i].addEventListener("click", (e) => {
 
      // addUserForm.style.display = "none";
      // editForm.style.display = "block";

     modal2.style.display = "block";  

    })
    
}
}

doSomething();


var span = document.getElementsByClassName("close")[0];
var nobtn = document.getElementsByClassName("nobtn")[0];

span.onclick = function() {
  modal.style.display = "none";
}

nobtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}