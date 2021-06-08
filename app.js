// console.log("Hello World!\n==========\n");

// // PROJECT Section
// console.log("PROJECT:\n==========\n");

// class Book {
//     constructor(id, title, author, read){
//         this.id = id;
//         this.title = title;
//         this.author = author;
//         this.read = read;
//     }
// }

// class Library {
//     constructor() {
//         this.bookcount = 2;
//         this.books = [
//             {
//               id: 1,
//               title: "Name of the Wind",
//               author: "Patrick Rothfuss",
//               read: true,
//             },
//           ];

//           this.markRead = this.markRead.bind(this);
//           this.addBook = this.addBook.bind(this);
//     }

//     markRead(checkbox){
//         for (let book of library.books){
//             if (book.id == checkbox.id) {
//                 console.log(checkbox);
//                 book.read = true;
//                 checkbox.checked = true;
//                 checkbox.disabled = true;
//             }
//         }        
//     }

//     addBook(){
//         let title = document.getElementById("title");
//         let author = document.getElementById("author");
//         let read = document.getElementById("read");

//         let newBook = new Book(this.bookcount, title, author, read);
//         this.books.push(newBook);

//         let newRow = document.createElement("tr");

//         let td1 = document.createElement("td");
//         td1.textContent = newBook.title;
        
//         let td2 = document.createElement("td");
//         td2.textContent = newBook.author;
        
//         let td3 = document.createElement("td");
        
//         let chkbox = document.createElement("input");
//         chkbox.id = this.bookcount;
//         chkbox.type = "checkbox";
//         chkbox.checked = newBook.read;
//         chkbox.disabled = newBook.read;
//         chkbox.addEventListener("click", () => Library.markRead(chkbox));
//         td3.appendChild(chkbox);
        
//         newRow.appendChild(td1);
//         newRow.appendChild(td2);
//         newRow.appendChild(td3);

//         let tableBody = document.querySelector("tbody");
//         tableBody.appendChild(newRow);

//         this.bookcount++;        
//     }
// }

// let library = new Library();

// let btn = document
// .getElementById("add-btn")
// .addEventListener("click", () => {
//     library.addBook(library.books, library.bookcount)
// });



console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.bookCount = 2;
    this.books = [
      {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
      },
    ];

    this.markRead = this.markRead.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  markRead(checkbox) {
    for (let book of library.books) {
      if (book.id == checkbox.id) {
        console.log(checkbox);
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    }
  }

  addBook() {
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let read = document.getElementById("readCheckbox").checked;

    let newBook = new Book(this.bookCount, title, author, read);
    this.books.push(newBook);

    let newRow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = newBook.title;

    let td2 = document.createElement("td");
    td2.textContent = newBook.author;

    let td3 = document.createElement("td");
    let ckBox = document.createElement("input");
    ckBox.id = this.bookCount;
    ckBox.type = "checkbox";
    ckBox.checked = newBook.read;
    ckBox.disabled = newBook.read;
    ckBox.addEventListener("click", () => library.markRead(ckBox));
    td3.appendChild(ckBox);

    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    let tableBody = document.querySelector("tbody");
    tableBody.appendChild(newRow);

    this.bookCount++;
  }
}

let library = new Library();

let btn = document
  .getElementById("addButton")
  .addEventListener("click", () =>
    library.addBook(library.books, library.bookCount)
  );