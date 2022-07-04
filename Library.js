console.log("This is your personal library");

// Making a constructor to show 
function books(name, author, Category) {
    this.name = name;
    this.author = author;
    this.category = Category;
}

// Display Constructor 
function display(){
}

// Add method to display prototype
display.prototype.add = function (books) {
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                        <td>${books.name}</td>
                        <td>${books.author}</td>
                        <td>${books.category}</td>
                   </tr>`
    tableBody.innerHTML += uiString;
}

display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

// Implementing The validate function
display.prototype.validate = function (book) {
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}

// Implementing The Show function
display.prototype.show = function (type, givenAlert) {
    let alert = document.getElementById("alert");
    alert.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">${givenAlert}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  setTimeout(function(){
      alert.innerHTML = ""
  }, 3000);
}

// Add EventListener to the form 
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("You have submitted the form");
    let name = document.getElementById("Name").value;
    let author = document.getElementById("Author").value;
    // category
    let fiction = document.getElementById("Fiction");
    let adventure = document.getElementById("Adventure");
    let mystery = document.getElementById("Mystery");
    let comics = document.getElementById("Comics");
    let educational = document.getElementById("Educational");
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (adventure.checked) {
        type = adventure.value;
    }
    else if (mystery.checked) {
        type = mystery.value;
    }
    else if (comics.checked) {
        type = comics.value;
    }
    else if (educational.checked) {
        type = educational.value;
    }
    let book = new books(name, author, type);
    console.log(book);

    let Display = new display();
    if(Display.validate(book)){
        Display.add(book);
        Display.clear();
        Display.show("success", "<strong>Congrulation</strong> Your Book is sucessfully added");
    }
    else{
        Display.show("danger", "<strong>Oops!</strong> Sorry You Cannot Add This Book. Atleast two letter are necesaary for adding the book ");
    }
}