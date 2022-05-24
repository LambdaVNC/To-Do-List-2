
// To Do Eleman ekleme

// Eleman seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ["Todo 1","Todo 2","Todo 3","Todo 4"];

loadItems();
eventListeners();


function eventListeners() {
    // submit event
    form.addEventListener("submit", addNewItem);
    // delete ıtem
    taskList.addEventListener("click", deleteItem);
    // btn delete all
    btnDeleteAll.addEventListener("click",deleteAll);
}

function loadItems(){

    items.forEach(function(item){
        creatItem(item);
    })
}

function creatItem(text){
    // li oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));


    // a oluşturma

    const a = document.createElement("a");
    a.classList = ("delete-item float-right");
    a.setAttribute = ("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);
}

function addNewItem(e) {

    if (input.value === '') {
        alert("Birşeyler ekle!");
        console.log("submit");
    }
    creatItem(input.value);

    e.preventDefault();
}



function deleteItem(e) {
    
        if (e.target.className === "fas fa-times") {
            if (confirm("Silmek istediğinize emin misiniz?"))
            e.target.parentElement.parentElement.remove();
        }

    

    e.preventDefault();
}


function deleteAll(e){
    
    if(confirm("Tüm elemanları silmek istediğine emin misin?")){
    
        taskList.childNodes.forEach(function(item){
            if(item.nodeType===1){
                item.remove();
            }
        })
     }

}