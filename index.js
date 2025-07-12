const navDialog = document.getElementById('navbar-dialog')
function handleMenu() {
    navDialog.classList.toggle('hidden');
}




document.getElementById('handleServices').addEventListener('click', () => {
    const services = document.getElementById('openDiv');
    services.classList.toggle('hidden');
    if (!services.classList.contains('hidden')) {
        document.getElementById('rightBottom').style.transform = 'rotate(+90deg)';
    }else    document.getElementById('rightBottom').style.transform = 'rotate(0)';
});






const navServices = document.getElementById('services-navbar')
const menuButton = document.getElementById('menu-button');
function handleServices() {
    navServices.classList.toggle('hidden');
}
document.addEventListener('click', function (event) {
    if (navServices.contains(event.target) || menuButton.contains(event.target)) {
        return;
    }
    navServices.classList.add('hidden');
});






function incr() {
    let  number = document.getElementById('number').value*1;
    number++;
    document.getElementById('number').value = number;

}

function decr() {
    let  number = document.getElementById('number').value*1 ;
    if (number > 0){
        number--;
        document.getElementById('number').value = number;
    }
}


function calculator (){
    const numberValues = document.getElementById('number').value;
    const phoneValues = document.getElementById('tel').value;
    const dataValues = document.getElementById('data').value;
    const selectValues = document.getElementById('car').value;
    const texturaValues = document.getElementById('textura').value;
    const locationOneValues = document.getElementById('adres1').value;
    const locationTwoValues = document.getElementById('adres2').value;


    const btn = document.getElementById('btn-next');


    if (numberValues && phoneValues && dataValues && selectValues &&  locationOneValues && locationTwoValues ){
        btn.style.background = '#52AE32';
        btn.style.color = 'white';
        btn.innerHTML += 'за <small style="color:#FFE684; font-size: 16px "  >2 300 000 сум</small>'
    }


}


function sendMessage(){
    document.getElementById('send-message').style.display = 'block';
    setTimeout(()=>{
        document.getElementById('send-message').style.display = 'none';
    } , 1000)
}




function sendMessageClosed(){
    document.getElementById('send-message').style.display = 'none';
}




const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener("scroll", ()=>{
    if (window.scrollY >= 400 ) {
        scrollTopBtn.style.display = 'flex';
    }else {
        scrollTopBtn.style.display = 'none';
    }
})


scrollTopBtn.addEventListener('click', ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
})















