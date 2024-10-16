let InputBox=document.getElementById("input-box");
let Lists=document.getElementById("list");
function addtask(){
    if(InputBox.value===""){
        alert("Include Any Task...")
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = `<span class="edit-text"> ${InputBox.value}</span>
        <button onclick="delbutton(this)" class="material-symbols-outlined">delete</button>`;
        Lists.appendChild(li);
        InputBox.value="";

        const editText = li.querySelector('.edit-text'); 
    editText.addEventListener("click", function() {
        editText.classList.toggle('completed');
    });
 
    }
    
}
function delbutton(button) {
    const li = button.parentElement; 
    Lists.removeChild(li); 
}
