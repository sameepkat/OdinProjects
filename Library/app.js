// Query Selectors
const addButton = document.getElementById('addButton');
const titleInput = document.getElementById('bookInput');
const authorInput = document.getElementById('authorInput');
const booksContainer = document.getElementById('booksContainer');
const noOfPagesInput = document.getElementById('noOfPagesInput');
const bookStatus = document.getElementById('bookStatus');


const myLibrary = [];

function Book(Name, Author, Pages, Status) {
  this.title = Name;
  this.author = Author;
  this.noOfPages = Pages;
  this.status = Status;
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject)
  addCard();
}

function addCard() {
  booksContainer.innerHTML = '';
  myLibrary.forEach(book => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `
      <div>
        <h4>${book.title}</h4>
        <h5>${book.author}</h5 >
        <h6>${book.noOfPages} pages</h6>
        <h6>${book.status}</h6>
      </div >
      `;
    newCard.classList.add('bookCards')
    booksContainer.append(newCard);
  })
}


document.addEventListener('DOMContentLoaded', ((e) => {
  titleInput.focus();
}))

const addClicked = () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const Pages = noOfPagesInput.value;
  const Status = bookStatus.value;
  const book = new Book(title, author, Pages, Status);
  addBookToLibrary(book);
}

addButton.addEventListener('click', addClicked);
document.addEventListener('keydown', (e) => {
  if (e.code === "Enter")
    addClicked();
})
