
var modal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");
var btn = document.querySelectorAll("#deletebtn");
var formModal = document.getElementById("modal2")
var editbtn = document.querySelectorAll("#editbtn")
var delet = document.querySelector(".modal")
var addUserForm = document.getElementById("addUserForm")
var editForm = document.getElementById("editForm");
var linkTag = document.getElementById("a-tag");
var updateLink = document.getElementById("update-tag");
var addUserTag = document.getElementById("addUser-tag");
var cancelBtn = document.getElementById('cancelBtn')

console.log(delet)

console.log(editbtn)

cancelBtn.addEventListener('click', e => {
    addUserTag.style.display = "block";
    updateLink.style.display = "none"
})


function doSomething(){
   for(var i = 0; i < btn.length; i++){
       btn[i].addEventListener("click", (e) => {
          
         let id = event.target.getAttribute('data-id');
         console.log(id)
         modal.style.display = "block";
         linkTag.href = `delete/${id}`
        console.log(modal.href)
     
       }) 
   }
   for(var i = 0; i < editbtn.length; i++){
    // editbtn[i].addEventListener("click", () => {
    //   modal2.style.display = "block"
    editbtn[i].addEventListener("click", (e) => {
        let firstname = event.target.getAttribute("data-firstname")
        let lastname = event.target.getAttribute("data-lastname")
        let email = event.target.getAttribute("data-email")
        let password = event.target.getAttribute("data-password")
        let confirmpassword = event.target.getAttribute("data-confirmpassword")
        let updateId = event.target.getAttribute("data-id")
  
        var obj = {
          updateId,
          firstname,
          lastname,
          email,
          password,
          confirmpassword
        }
        console.log(obj)

          addUserForm.elements[0].value = obj.firstname;
          addUserForm.elements[1].value = obj.lastname;
          addUserForm.elements[2].value = obj.email;
          addUserForm.elements[3].value = obj.password;
          addUserForm.elements[4].value = obj.confirmpassword;
        
         addUserTag.style.display = "none"
         updateLink.style.display = "block";
         cancelBtn.style.display = "block"
          updateLink.formAction = `edit/${updateId}`
      // addUserForm.style.display = "none";
      // editForm.style.display = "block";

    //  modal2.style.display = "block";  

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