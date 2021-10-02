//navbar

const burgerButton = document.getElementsByClassName('burgerButton')[0];
const verticalNavbar = document.getElementsByClassName('verticalNavbar')[0];

burgerButton.addEventListener('click', () => {

    if(verticalNavbar.classList.contains('active') || verticalNavbar.classList.contains('deactive')){
        verticalNavbar.classList.toggle('active')
        verticalNavbar.classList.toggle('deactive')
    }else{
        verticalNavbar.classList.toggle('active')
    }
    


olympiadsPannel.classList.toggle('bActive');

if(arrowButton.classList.contains('unactive')){
    arrowButton.classList.toggle('bActive');
    arrowButton.classList.toggle('unactive');
}else if(arrowButton.classList.contains('active')){
    arrowButton.classList.toggle('bActive');
}else{
    arrowButton.classList.toggle('bActive');
}

olympiadsPannelList.classList.toggle('bActive')

}
);







//Olympiads panel

const olympiadsPannel = document.getElementsByClassName('olympiadsPannel')[0];
const arrowButton = document.getElementsByClassName('arrowButton')[0];
const olympiadsPannelList = document.getElementsByClassName('olympiadsPannelList')[0];
const right = document.getElementsByClassName('right')[0];
const ioaa = document.getElementsByClassName('ioaa')[0];
const iao = document.getElementsByClassName('iao')[0];
const usaaao = document.getElementsByClassName('usaaao')[0];
const gecaa = document.getElementsByClassName('gecaa')[0];
const suggestionButton = document.getElementsByClassName('suggestionButton')[0];
const backButton = document.getElementsByClassName('backButton')[0];

arrowButton.addEventListener('click', () => {


    if(olympiadsPannel.classList.contains('active') || olympiadsPannel.classList.contains('unactive')){
        olympiadsPannel.classList.toggle('unactive');
        console.log('works')
    }

    olympiadsPannel.classList.toggle('active');
    
    if(right.classList.contains('active') || right.classList.contains('unactive')){
        right.classList.toggle('unactive');
    }

    right.classList.toggle('active');


    if(olympiadsPannelList.classList.contains('active') || olympiadsPannelList.classList.contains('unactive')){
        olympiadsPannelList.classList.toggle('unactive');
    }

    olympiadsPannelList.classList.toggle('active'); 
  
    if(arrowButton.classList.contains('active') || arrowButton.classList.contains('unactive')){
        arrowButton.classList.toggle('unactive');
    }
    
    arrowButton.classList.toggle('active');

    
    ioaa.classList.toggle('active');
    iao.classList.toggle('active');
    usaaao.classList.toggle('active');
    gecaa.classList.toggle('active');
    suggestionButton.classList.toggle('active');
    backButton.classList.toggle('active');

    } )