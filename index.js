const form = document.getElementById("book-form");
const resultsDiv = document.querySelector("#results");

const urls = [
  "https://mdbootstrap.com/img/Photos/Others/photo1.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo2.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo3.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo4.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo6.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo6.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo7.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo8.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo9.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo10.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo11.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo12.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo13.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo14.jpg",
  "https://mdbootstrap.com/img/Photos/Others/photo15.jpg",
];

onInit();

function onInit() {
  form.addEventListener("submit", load);
}

class Book {
  constructor({ title, author, category, isdn, description }) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.isdn = isdn;
    this.description = description;
  }
}

class UI {
  constructor() {
    this.index = Math.ceil(Math.random() * 14);
  }

  addBook({ title, author, category, isdn, description }) {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "mb-4");
    card.innerHTML = ` 
     <div class="card card-cascade wider mb-2">
      <div class="view view-cascade overlay">
         <img src=${urls[this.index]} class="card-img-top"/>
         </div>
       <div class="card-body elegant-color white-text rounded-bottom">
          <h4 class="card-title">
          <i class="fas fa-democrat"></i>
           ${title}(<span class="pink-text">${category}</span>)
           </h4>
 
           <hr class="hr-light">
 
          <h4 class="card-title">
          <i class="fas fa-user-circle"></i>
           ${author} (${isdn})
           </h4>
 
            <hr class="hr-light">
   
          <h4 class="card-title white-text">
          <i class="fas fa-info-circle"></i>
           ${description}
           </h4>
 
             <hr class="hr-light">
 
           <button type="button" id ="delete-book" class="btn btn-danger">DELETE</button>
           </div>
         </div>`;

    resultsDiv.appendChild(card);

    const book = document.querySelector("#results");
    book.addEventListener("click", this.deleteBookFromList);

    this.showAlert();
  }

  showAlert() {
    const alertDiv = document.querySelector("#alert");

    const div = document.createElement("div");
    div.classList.add("alert", "alert-primary");
    const text = document.createTextNode(`Book added to list successfully.`);
    const alert = div.appendChild(text);
    div.appendChild(alert);

    alertDiv.appendChild(div);
    alertDiv.style.display = "block";

    this.clearForm();
    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  deleteBookFromList(event) {
    console.log(event);
    const card = event.target.parentElement.parentElement.parentElement;
    if (card) {
      card.remove();
    }
  }

  clearForm() {
    form.reset();
  }
}

function load(e) {
  const title = document.querySelector("#title-input").value;
  const author = document.querySelector("#author-input").value;
  const category = document.querySelector("#category-input").value;
  const isdn = document.querySelector("#isdn-input").value;
  const description = document.querySelector("#description-input").value;

  const book = new Book({ title, author, category, isdn, description });

  const ui = new UI();

  ui.addBook(book);

  e.preventDefault();
}
