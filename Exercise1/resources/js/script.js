
function addStudent(){
    var table = document.getElementById("myTable");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    
    
    var newRow = document.createElement("TR");
    newRow.className = "close";
    var i;
    
    var td1 = document.createElement("TD");
    var txtFirstName = document.createTextNode(firstName);
    td1.appendChild(txtFirstName);
    newRow.appendChild(td1);
    
    var td2 = document.createElement("TD");
    var txtLastName = document.createTextNode(lastName);
    td2.appendChild(txtLastName);
    newRow.appendChild(td2);
    
    var td3 = document.createElement("TD");
    var txtEmail = document.createTextNode(email);
    td3.appendChild(txtEmail);
    newRow.appendChild(td3);
    
    var td4 = document.createElement("TD");
    var btn = document.createElement("BUTTON");
    var att = document.createAttribute("onclick");
    att.value = "removeUser()";
    btn.setAttributeNode(att);
    var remove = "Remove";
    var txtRemove = document.createTextNode(remove);
    btn.appendChild(txtRemove);
    td4.appendChild(btn);
    newRow.appendChild(td4);
    
    table.appendChild(newRow);
    
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    
}

function removeUser(){
    var userList = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < userList.length; i++){
        userList[i].onclick = function(){
            this.style.display = "none";
        }
    }
}