console.log("This is index.js");
function Book(name,author,type) {
    this.name=name;
    this.author=author;
    this.type=type;

    
}
function Display(){

}
Display.prototype.add=function(){
    console.log("Adding to UI");
    tableBody=document.getElementById('tableBody');
    let UIString  =  <tr>
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                </tr>
    tableBody.innerHTML+=uiString;
}
Display.prototype.clear=function(){
    let libraryForm=document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate=function(book){
   if (book.name.length<2||book.author.length<2){
       return false;

   }
   else{
       return true;
   }
}
Display.prototype.show=function(type,displaymassage){
let massage=document.getElementById('message');
message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>${boldText}:</strong> ${displayMessage}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">×</span>
</button>
</div>`;
setTimeout(function() {
    massage.innerHTML=''
    
}, 2000);
}

let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormsubmit);

function libraryFormsubmit(e){
    console.log("you have submited library form");
    let name=document.getElementById('bookName').nodeValue;
    let author=document.getElementById('author').nodeValue;
    let type;
    // fiction, programming,cooking
    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');
   
    if (fiction.checked){
        type=fiction.Value;
    }
    else if (programming.checked){
        type=programming.Value;
    }
    if (cooking.checked){
        type=cooking.nodeValue;
    }
    let book=new Book(name,author,type);
    console.log(book);
    let display=new Display();
    if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success',  'Your book has been succeefully added');
    }
    else{
        display.show("danger",'Sorry you cannot add this book');

    }
    e.preventDefault();
}

