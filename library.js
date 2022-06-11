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

Book.prototype.toggleRead = function() {
    let indexNumber = this.getAttribute("data-book")
    
    if (this.textContent === "Yes") {
        this.textContent = "No"
        myLibrary[indexNumber].read = "No"
    }
    else {
        this.textContent = "Yes"
        myLibrary[indexNumber].read = "Yes"
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

let displayBookCounter = (function(book) {
    
    let n

    return function displayBook(book) {	

        if (!n) {n = 0}

        const removeButton = document.createElement("button")
        const tableRow = document.createElement("tr");
        const tableHeaderTitle = document.createElement("td");
        const tableHeaderAuthor = document.createElement("td");
        const tableHeaderPages = document.createElement("td");
        const tableHeaderRead = document.createElement("td");
        const tableRemove = document.createElement("td");
        const haveRead = document.createElement("button")

        removeButton.setAttribute("data-book", n)
        removeButton.setAttribute("class", "remove")
        tableRow.setAttribute("data-book", n)
        tableHeaderTitle.setAttribute("data-book", n)
        tableHeaderAuthor.setAttribute("data-book", n)
        tableHeaderPages.setAttribute("data-book", n)
        tableHeaderRead.setAttribute("data-book", n)
        tableRemove.setAttribute("data-book", n)
        haveRead.setAttribute("data-book", n)
        n++

        tableHeaderTitle.textContent = book.title
        tableHeaderAuthor.textContent = book.author
        tableHeaderPages.textContent = book.pages
        removeButton.textContent = "Remove"

        const table = document.querySelector("table")
        table.appendChild(tableRow)
        
        tableRow.appendChild(tableHeaderTitle)
        tableRow.appendChild(tableHeaderAuthor)
        tableRow.appendChild(tableHeaderPages)
        tableRow.appendChild(tableHeaderRead)
        tableRow.appendChild(tableRemove)

        tableRemove.appendChild(removeButton)

        tableHeaderRead.appendChild(haveRead)
        haveRead.textContent = book.read

        haveRead.addEventListener("click", book.toggleRead)

        removeButton.addEventListener("click", function() {
            
            let dataIndex = removeButton.getAttribute("data-book")
            delete myLibrary[dataIndex]
            tableRow.parentElement.removeChild(tableRow)        
        })
    };
})();

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

function addBookToDisplay() {
    let haveRead

    if (read.checked) {
        haveRead = "Yes"
    }
    else {
        haveRead = "No"
    }

    let newBook = new Book(title.value, author.value, pages.value, haveRead)
    
    addBookToLibrary(newBook)
    displayBookCounter(newBook)

    popUp.classList.add("hide")

    title.value = ""
    author.value = ""
    pages.value = ""
    read.checked = false
}

addBookButton.addEventListener("click", addBookToDisplay)