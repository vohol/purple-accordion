import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();



const listItems = document.querySelectorAll('.faq-list__item')

document.addEventListener('click', tabsOpenClose)

function tabsOpenClose(event) {
  const target = event.target
  const summaryClass = '.faq-list__summary-wrapper'
  
  if (target.closest(summaryClass)) {

    //close faq item when it is active
    if (target.closest(summaryClass).parentNode.classList.contains('active')) {
      target.closest(summaryClass).parentNode.classList.remove('active');
      target.closest(summaryClass).parentNode.children[1].style.height = '0'
    } 
    else {
      listItems.forEach(element => {
        element.classList.remove('active')
        element.children[1].style.height = '0'
      });
      
      target.closest(summaryClass).parentNode.classList.add('active');
      target.closest(summaryClass).parentNode.children[1].style.height = target.closest(summaryClass).parentNode.children[1].children[0].offsetHeight + 'px'
      
    }
  }
}