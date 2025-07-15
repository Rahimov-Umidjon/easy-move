const navDialog = document.getElementById('navbar-dialog')

function handleMenu() {
    navDialog.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}


document.getElementById('handleServices').addEventListener('click', () => {
    const services = document.getElementById('openDiv');
    services.classList.toggle('hidden');


    if (navDialog.classList.contains('h-[100dvh]')) {
        navDialog.classList.remove('h-[100dvh]');
        navDialog.classList.add('h-max');
    } else if (navDialog.classList.contains('h-max')) {
        navDialog.classList.remove('h-max');
        navDialog.classList.add('h-[100dvh]');
    }

    if (!services.classList.contains('hidden')) {
        document.getElementById('rightBottom').style.transform = 'rotate(+90deg)';
    } else document.getElementById('rightBottom').style.transform = 'rotate(0)';
});


document.addEventListener('DOMContentLoaded', () => {
    const calculatorModal = document.getElementById('calculatorModal');
    const note = document.getElementById('note');

    if (calculatorModal && note) {
        calculatorModal.addEventListener('click', () => {
            note.classList.add('hidden');
        });
    }
});
function bgCalculator() {
    document.body.classList.toggle('overflow-hidden');
}

const navServices = document.getElementById('services-navbar')
const menuButton = document.getElementById('menu-button');

function handleServices() {
    navServices.classList.toggle('hidden');
    console.log("hiden")
}

document.addEventListener('click', function (event) {
    if (navServices.contains(event.target) || menuButton.contains(event.target)) {
        return;
    }
    navServices.classList.add('hidden');
});


function incr() {
    let number = document.getElementById('number').value * 1;
    number++;
    document.getElementById('number').value = number;

}

function decr() {
    let number = document.getElementById('number').value * 1;
    if (number > 0) {
        number--;
        document.getElementById('number').value = number;
    }
}


function calculator() {
    const numberValues = document.getElementById('number').value;
    const phoneValues = document.getElementById('tel').value;
    const dataValues = document.getElementById('data').value;
    const selectValues = document.getElementById('car').value;
    const texturaValues = document.getElementById('textura').value;
    const locationOneValues = document.getElementById('adres1').value;
    const locationTwoValues = document.getElementById('adres2').value;


    const btn = document.getElementById('btn-next');


    if (numberValues && phoneValues && dataValues && selectValues && locationOneValues && locationTwoValues) {
        btn.style.background = '#52AE32';
        btn.style.color = 'white';
        btn.innerHTML += 'за <small style="color:#FFE684; font-size: 16px "  >2 300 000 сум</small>'
        btn.disabled = false;
    }


}


function sendMessageTwo() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('questionPhone').value = '';
    document.getElementById('questionName').value = '';

    document.getElementById('send-message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('send-message').style.display = 'none';
    }, 1000)
}

function sendMessage() {
    document.getElementById('number').value = '' ;
    document.getElementById('tel').value = '';
    document.getElementById('data').value = '';
    document.getElementById('car').value = '';
    document.getElementById('textura').value = '';
    document.getElementById('adres1').value = '';
    document.getElementById('adres2').value = '';
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('textura-services').value = '';
    document.getElementById('servicesPhone').value = '';
    document.getElementById('servicesName').value = '';
    document.getElementById('requestPhone').value = '';
    document.getElementById('requestName').value = '';
    document.getElementById('contactName').value = '';
    document.getElementById('contactPhone').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
    document.getElementById('textura-question').value = '';

    document.getElementById('send-message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('send-message').style.display = 'none';
    }, 1000)
}


function sendMessageClosed() {
    document.getElementById('send-message').style.display = 'none';
}


const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
})


scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})




//
// const sponsor = document.querySelectorAll('.sponsor');
//
// let index = 0;
//
// function sponsorImg(value){
//     sponsor[value].style.display = 'block';
// }
//
// setInterval(()=>{
//     if (index < sponsor.length) {
//         sponsor.forEach((item) => {
//             item.style.display = 'none';
//         })
//         sponsorImg(index);
//         index++;
//     }else if(index === sponsor.length) {
//         sponsor.forEach((item) => {
//             item.style.display = 'none';
//         })
//         sponsorImg(index);
//         index++;
//     }
// }, 3000);
//















