export default function switchMenu(){
     if(document.querySelector('.header__burger').classList.contains('animate-open')){
        document.querySelector('.header__burger').classList.remove('animate-open');
        document.querySelector('.header__burger').classList.add('animate-close');
        document.querySelector('.header__navigation').classList.remove('open');
        document.querySelector('.header__container').classList.remove('invert');
        document.querySelector('.header__navigation').classList.add('closed');
        document.querySelector('.site__banner').classList.remove('banner');
     
     }else{
       document.querySelector('.header__navigation').classList.remove('closed');
        document.querySelector('.header__navigation').classList.add('open');
        document.querySelector('.header__burger').classList.remove('animate-close');
        document.querySelector('.header__burger').classList.add('animate-open');
        document.querySelector('.header__container').classList.add('invert');
        document.querySelector('.site__banner').classList.add('banner');
      
     }
}
