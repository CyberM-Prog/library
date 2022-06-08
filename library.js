let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.info = function() {
        return (title + " by " + author + ", " + pages + " pages" +", " + read)
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBook(book) {
        const tableRow = document.createElement("tr");
        const tableHeaderTitle = document.createElement("td");
        const tableHeaderAuthor = document.createElement("td");
        const tableHeaderPages = document.createElement("td");
        const tableHeaderRead = document.createElement("td");

        tableHeaderTitle.textContent = book.title
        tableHeaderAuthor.textContent = book.author
        tableHeaderPages.textContent = book.pages
        tableHeaderRead.textContent = book.read

        const tbody = document.querySelector("tbody")
        tbody.appendChild(tableRow)
        
        tableRow.appendChild(tableHeaderTitle)
        tableRow.appendChild(tableHeaderAuthor)
        tableRow.appendChild(tableHeaderPages)
        tableRow.appendChild(tableHeaderRead)
  
}

const newBookButton = document.querySelector(".newbtn")
const popUp = document.querySelector(".darkbg")

function showPopUp() {
    popUp.classList.remove("hide")
}

newBookButton.addEventListener("click", showPopUp)

const addBookButton = document.querySelector(".submit")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const read = document.querySelector("#read")

addBookButton.addEventListener("click", function() {

    let haveRead
    if (read.checked) {
        haveRead = "Yes"
    }
    else haveRead = "No"

    let newBook = new Book(title.value, author.value, pages.value, haveRead)
    
    addBookToLibrary(newBook)
    displayBook(newBook)

    popUp.classList.add("hide")
})