

var siteNameInput = document.querySelector("#sitename");
var siteUrlInput = document.querySelector("#SiteURL");
var btnSubmit = document.querySelector(".btn-sumbit");


var arrayList = [];

if (localStorage.getItem("websites") != null) {
  arrayList = JSON.parse(localStorage.getItem("websites"));
  displayData();
}

// Add Data-----
function addWebsite() {

        if(  validationName() == true && validationUrl() == true) { 
        var webObj = {
        siteName: siteNameInput.value,
        siteUrl: siteUrlInput.value,
    }
    arrayList.push(webObj)

    localStorage.setItem('websites', JSON.stringify(arrayList))
    displayData();

    // add swaet alert
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
   } 
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please start Capital Character And Min 3 Numbers!",
            
          });
    
   }


}

btnSubmit.addEventListener('click', function () {
    addWebsite()
})



function displayData() {

    var box = "";
    for (var i = 0; i < arrayList.length; i++) {
        
        box += `
        <tr class="">
        <td scope="row">${i}</td>
        <td>${arrayList[i].siteName}</td>
        <td><a href="${arrayList[i].siteUrl}" target="_blank"><button class="btn btn-warning"><i class="fa-solid fa-eye"></i> Visit</button></a> </td>
        <td><button class="btn btn-danger "onclick="deleteAddress(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
        `
    }

    document.getElementById("tableBody").innerHTML = box;
}

function deleteAddress(index) {
    arrayList.splice(index, 1)
    localStorage.setItem("websites", JSON.stringify(arrayList));

    displayData()
}

var nameMessage = document.querySelector('.wrong')

// Add Validation
function validationName() {

    var text = siteNameInput.value;
    var regexName = /^[A-Z][a-z]{3,9}$/

    if(  regexName.test( text )  ) { // Data Valid

        siteNameInput.classList.add("is-valid")
        siteNameInput.classList.remove("is-invalid")

        nameMessage.classList.add("d-none")
        return true

    }else { // Not Valid

        siteNameInput.classList.add("is-invalid")
        siteNameInput.classList.remove("is-valid")

        nameMessage.classList.remove("d-none")
        return false
    }
}

var nameUrl = document.querySelector('.valide')

function validationUrl() {

    var text = siteUrlInput.value;
    var httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    if(  httpRegex.test( text )  ) { // Data Valid

        siteUrlInput.classList.add("is-valid")
        siteUrlInput.classList.remove("is-invalid")

        nameUrl.classList.add("d-none")
        return true

    }else { // Not Valid

        siteUrlInput.classList.add("is-invalid")
        siteUrlInput.classList.remove("is-valid")

        nameUrl.classList.remove("d-none")

        return false

    }








}