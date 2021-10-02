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
    

}
);
