const charanimst = document.querySelector(".algruidst");
const charanimnd = document.querySelector(".algruidnd");
const charanimrd = document.querySelector(".algruidrd");
const chat = document.querySelector(".chat");
var str = chat.innerHTML;
const context =
  "Witaj przybyszu! Aby przejść przez mój most musisz odgadnąć moją zagadkę...";
str = context.split("");
let i = 0;

/*-------------------MAG-TALKING----------------------- */

function mewingFunc() {
    if(chat.innerHTML == context) {
        charanimst.style.opacity = 1;
        charanimnd.style.opacity = 0;
        return;
    }
  setTimeout(function () {
    charanimnd.style.opacity = 0;
    charanimst.style.opacity = 1;
  }, 350);
  setTimeout(function () {
    charanimst.style.opacity = 0;
    charanimnd.style.opacity = 1;
  }, 700);
}

setTimeout(function () {
  mewingFunc();
  setInterval(mewingFunc, 700);
}, 1200);

/*----------------------CHAT-TYPING------------------ */

const chatquest = () => {
  if (i >= context.length) return;
  chat.innerHTML = chat.innerHTML + str[i];
  i++;
};

/*CHAT DELAY START*/

setTimeout(function () {
  setInterval(chatquest, 100);
}, 2500);

setTimeout(function () {
  chat.classList.add("animatechat");
}, 1500);
setTimeout(function () {
  chat.classList.remove("animatechat");
  chat.style.height = "300px";
}, 2501);