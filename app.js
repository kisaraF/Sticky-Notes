let createBtn = document.getElementById('createBtn');
let addSec = document.querySelector('.popup');
let body = document.getElementById('body');
let closeBtn = document.getElementById('close');
let display = document.getElementById('displayGrid');
let addBtn = document.getElementById('addBtn');
let textBox = document.getElementById('textbox');
let displaySec = document.querySelector('.popup-two');
let closeShow = document.getElementById('close-show');

createBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
addBtn.addEventListener('click', createNote);
closeShow.addEventListener('click', closeIt);

//Opening Popup 
function openPopup() {
   addSec.style.display= 'block';
   body.style.filter = "blur(8px)";
}

//Closing Popup
function closePopup() {
   addSec.style.display = 'none';
   body.style.filter = "none";
}

//Creating the Note
function createNote() {
   let text = document.getElementById('textbox').value;      
   let color = document.getElementById('color').value;
   //console.log(text);
   if(text=== '' || text=== " "){
      alert("Please Enter Something");
   }else{
      let mainDiv= document.createElement('div');
      mainDiv.className = 'note-main';
      let textDiv = document.createElement('div');
      textDiv.className = 'note-text';
      let textSec = document.createElement('pre');
      textSec.textContent= text;
      let textBtns = document.createElement('div');
      textBtns.className ="note-btns";
      let remove = document.createElement('button');
      remove.id = "delete";
      remove.textContent = "Delete";
      
      textDiv.style.backgroundColor= `${color}`; 
      if(color=== "#ffffff"){
         textSec.style.color = "black";
      }else{
         textSec.style.color = "white";
      }
          
      remove.setAttribute("onclick", "deleteThis(this)");
      textDiv.setAttribute("onclick", "showThis(this)");

      textBtns.appendChild(remove);      
      textDiv.appendChild(textSec);
      mainDiv.appendChild(textDiv);
      mainDiv.appendChild(textBtns);
      display.appendChild(mainDiv);
      
      
      //console.log(color);
      closePopup();
      textBox.value= "";
   }   
}

function deleteThis (el){
   let podiParent= el.parentNode;
   let lokuParent= podiParent.parentNode;

   lokuParent.remove();
}

function showThis(el) {   
   body.style.filter = "blur(8px)";
   displaySec.style.display= 'block';
   //console.log(el);
   let copy = el.cloneNode(true);/*
   copy.style.overflow = 'visible';
   copy.style.width= '70%';*/
   displaySec.appendChild(copy);
}

function closeIt(){
   body.style.filter = "none";
   displaySec.style.display = 'none';
   let copy= displaySec.children[1];
   //console.log(copy);
   copy.remove();
}