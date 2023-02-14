let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    let y = this.scrollY;
    if (y > 400){
        navbar.style.backgroundColor = 'lightblue'
    } else{
        navbar.style.backgroundColor = ''
    }
})