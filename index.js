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

