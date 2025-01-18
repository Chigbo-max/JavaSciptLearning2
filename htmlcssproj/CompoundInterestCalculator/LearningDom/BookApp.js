// const wrapper = document.getElementById("wrapper")
// console.log(wrapper)

// const page = document.getElementById("page-banner")
// console.log(page)

// const book = document.getElementById("book-list")
// console.log(book)

/// const books = document.getElementsByClassName("name");
// console.log(books)

// const books = document.getElementsByClassName("name");
// const bookList = Array.from(books)
// bookList.forEach(book =>{
//     console.log(book)
// })

//getElementsByTagName
// const lis = document.getElementsByTagName("li")
// console.log(lis)

// //querySelector
// const bookList = document.querySelectorAll("#book-list")
// console.log(bookList)

// const liTags = document.querySelectorAll("li")
// liTags.forEach((book)=>{
//     console.log(book)
// })
// console.log("querySelector", liTags)

// const bookTitle = document.querySelector(".title");
// let bookTitleParent = bookTitle.parentElement
// console.log(bookTitleParent)

//delete
// const bookList = document.querySelector("#book-list ul");
// bookList.addEventListener("click", (event)=>{
//     if (event.target.className == "delete"){
//         const liTag = event.target.parentElement
//         bookList.removeChild(liTag)
//     }

// })
// console.log(bookList)
// //add
// const addBookForm = document.getElementById("add-book")

// addBookForm.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     const userInput = document.querySelector("#add-book input").value

//     const bookTitleSpan = document.createElement("span");
//     const deleteSpan = document.createElement("span");
//     const liTag = document.createElement("li");

//     liTag.appendChild(bookTitleSpan);
//     liTag.appendChild(deleteSpan);
//     bookList.appendChild(liTag);

//     bookTitleSpan.textContent = userInput;
//     deleteSpan.textContent ="delete"

//     deleteSpan.classList.add("delete")

// })

//keydown
//search item and pop up item name if present in a present

// addBookForm.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     const userInput = document.querySelector("#add-book input").value
//     const {bookTitleSpan, deleteSpan, liTag} = createNewElement();
//     appendChild(liTag, bookTitleSpan, deleteSpan);

//     bookTitleSpan.textContent = userInput;
//     deleteSpan.textContent ="delete"

//     deleteSpan.classList.add("delete")

// })

// function appendChild(liTag, bookTitleSpan, deleteSpan){
//     liTag.appendChild(bookTitleSpan);
//     liTag.appendChild(deleteSpan);
//     bookList.appendChild(liTag);
// }

// function createNewElement(){
//     const bookTitleSpan = document.createElement("span");
//     const deleteSpan = document.createElement("span");
//     const liTag = document.createElement("li");

//     return {bookTitleSpan, deleteSpan, liTag}
// }


//search
const searchForm = document.querySelector("#search-books")
searchForm.addEventListener("keyup", (event)=>{
    event.preventDefault();

    const searchInput = document.querySelector("#search-books input").value.toLowerCase();
    console.log(searchInput)

    const bookItems = document.querySelectorAll("#book-list ul li")
    // let found = false;

    bookItems.forEach((element) => {
        if (element.textContent.toLowerCase().includes(searchInput)) {
            // found = true;
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });


});