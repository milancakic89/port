import switchMenu from './header/menu.js';

const menuBurger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.link');
let goTop = false;
const goTopBtn = document.querySelector('.go--top');

window.onload = function(){
            goTopBtn.classList.add('hide');
            menuBurger.addEventListener('click', switchMenu);

            for(let i = 0; i < menuLinks.length; i++){
                     menuLinks[i].addEventListener('click', switchMenu);
             }
             window.onscroll = function(){
                     if(window.pageYOffset > 560){
                              if(goTop !== true){
                                     goTop = true;
                                     goTopBtn.classList.remove('hide');
                              }                  
                     }
                     if(window.pageYOffset < 559){
                              if(goTop !== false){
                                     goTop = false;
                                     goTopBtn.classList.add('hide');
                         }   
                     }
            }
}
