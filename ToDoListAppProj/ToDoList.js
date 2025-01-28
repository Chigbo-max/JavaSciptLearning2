const toDoList = document.querySelector("#listWrapper ul");
toDoList.addEventListener("click", (event)=>{
    if (event.target.className == "material-icons"){
        const liTag = event.target.parentElement
        toDoList.removeChild(liTag)
        saveData();
    }
    else if(event.target.tagName === "INPUT" && event.target.type === "checkbox"){
        const listItem = event.target.nextElementSibling;
        listItem.classList.toggle("lineThrough");
        saveData();
    }
})

const tasks = document.getElementsByClassName('listItem');
const taskList = Array.from(tasks);
taskList.forEach(task=>{
console.log(task);
    }) 
  


const toDoItems = document.getElementById("toDoList");

const addList = document.getElementById("addBar");

addList.addEventListener("submit", (event)=>{
    event.preventDefault();
    const userInput = document.querySelector("#addBar input").value;
    if(userInput !== ""){

    const liTag = document.createElement("li");

    const div = document.createElement("div");
    div.id = "leftList";

    const check = document.createElement("input");
    check.type = "checkbox";

    const listItem = document.createElement("span");
    listItem.className = "listItem";

    const deleteItem = document.createElement("i");
    deleteItem.className = "material-icons";
    deleteItem.innerHTML = "delete_sweep"


    toDoItems.appendChild(liTag);
    liTag.appendChild(div);
    div.appendChild(check);
    div.appendChild(listItem);
    liTag.appendChild(deleteItem);
    listItem.innerHTML = userInput;

    toDoItems.insertBefore(liTag,toDoItems.firstChild);

    
    }
    
    document.querySelector("#addBar input").value = "";
    saveData();
})

function saveData(){
    localStorage.setItem("data", toDoList.innerHTML)
}

function showToDoList(){
    toDoList.innerHTML = localStorage.getItem("data");
}

const searchForm = document.querySelector("#searchForm")
searchForm.addEventListener("keyup", (event)=>{
    event.preventDefault();

    const searchInput = document.querySelector("#searchForm input").value.toLowerCase();

    const taskItems = document.querySelectorAll("#listWrapper ul li")
    let found = false;

    taskItems.forEach((element) => {
        if (element.textContent.toLowerCase().includes(searchInput)) {
            found = true;
            element.style.visibility = "visible";
        }
        else{
            element.style.visibility = "hidden";
        }
    });


});

showToDoList();
 