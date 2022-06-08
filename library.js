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

function displayBook() {
    myLibrary.forEach(book => {

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
    });
}