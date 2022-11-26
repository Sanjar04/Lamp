

// show-modal
let elShowModal = document.querySelector(".show-modal");
let elModal = document.querySelector(".modal");
let elCloseBtn = document.querySelector(".modal-close");
let elOverlay = document.querySelector(".overlay");

// todo-modal
let elTodoModal = document.querySelector(".todo-modal");
let elList = document.querySelector(".list");
let elListBtn = document.querySelector(".list-close");
let elOverlan = document.querySelector(".overlan");

// show-modal
elShowModal.addEventListener("click", ()=>{
   elModal.classList.remove("hidden");
   elOverlay.classList.remove("hidden");
   elShowModal.classList.add("hidden");
});

elCloseBtn.addEventListener("click", ()=>{
   elModal.classList.add("hidden");
   elOverlay.classList.add("hidden");
   elShowModal.classList.remove("hidden");
});

elOverlay.addEventListener("click", ()=>{
   elModal.classList.add("hidden");
   elOverlay.classList.add("hidden");
   elShowModal.classList.remove("hidden");
});

// todo-modal
elTodoModal.addEventListener("click" , ()=>{
   elList.classList.remove("tugma");
   elOverlan.classList.remove("tugma");
   elTodoModal.classList.add("tugma");
});

elListBtn.addEventListener("click" , ()=>{
   elList.classList.add("tugma");
   elOverlan.classList.add("tugma");
   elTodoModal.classList.remove("tugma");
});

elOverlan.addEventListener("click" , ()=>{
   elOverlan.classList.add("tugma");
   elList.classList.add("tugma");
   elTodoModal.classList.remove("tugma");
});

// police
let elblue = document.querySelector(".blue");
let elred = document.querySelector(".red");

let count = 0;

setInterval(()=>{
   if(count <= 1){
      elblue.style.backgroundColor = "blue";
      elred.style.backgroundColor = "";
   }
   else if(count >= 2 && count <3){
      elblue.style.backgroundColor = "";
      elred.style.backgroundColor = "red";
      count = 0;
   }
   count += 1
},300)


// Lamp
let elQizil = document.querySelector(".qizil");
let elSariq = document.querySelector(".sariq");
let elYashil = document.querySelector(".yashil");

let set = 0

setInterval(()=>{
   if(set <= 2){
      elQizil.style.backgroundColor = "red";
      elYashil.style.backgroundColor = "";
      elSariq.style.backgroundColor = "";
   }else if(set >= 3 && set <= 5){
      elQizil.style.backgroundColor = "";
      elYashil.style.backgroundColor = ""
      elSariq.style.backgroundColor = "darkorange";
   }else if(set >= 6 && set <= 8){
      elYashil.style.backgroundColor = "green";
      elSariq.style.backgroundColor = ""
      elQizil.style.backgroundColor = "";
      set = 0
   }
   set += 1
},1000)
