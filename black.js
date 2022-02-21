const black = () => {
    document.body.innerHTML = '<h1>Goodbye</h1>';
    document.body.style.color = 'red';
    document.body.style.textAlign = 'center';
    document.body.style.backgroundColor = 'black';
};

const im = document.getElementById('him');
im.addEventListener('click', black);