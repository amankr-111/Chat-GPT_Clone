import bot from "./assets/bot.svg"
import user from "./assets/send.svg"

const form = documet.querySelector('form');
const chatContainer = document.querySeloctor('#chat_container');
let loadInterval;

function loader(element) {
  element.textContent = ''

  loadInterval = setInterval(() => {
    element.textContent += '.'

    if (element.textContent === '....') {
      element.textContent = ""
    }
  }, 300)
}
function typetext(element,text) {
  let index=0;
  let interval= setInterval(()=>{
      if(index<index.length){
        element.innerHTML +=text.charAt(index);
      }

      else{
        clearInterval(interval)
      }  },20)

}