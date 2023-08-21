const canvas = document.getElementById('canvas');
const colores = document.querySelectorAll('.color');
const lienzo_dibujo = canvas.getContext('2d');
const limpiarLienzo = document.getElementById('borrar');
const descargar = document.getElementById('descargar_dibujo');

let dibujando = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
lienzo_dibujo.lineWidth = 5;
lienzo_dibujo.lineCap = 'round';
lienzo_dibujo.strokeStyle = 'black';

colores.forEach(option => {
    option.addEventListener('click', () => {
        colorSeleccionado= option.style.backgroundColor;
    });
});

function posicionInicial(e) {
    dibujando = true;
    pintar(e);
}

function endPosition() {
    dibujando = false;
    lienzo_dibujo.beginPath();
}

function pintar(e) {
    if (!dibujando) return;
    lienzo_dibujo.strokeStyle = colorSeleccionado;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    lienzo_dibujo.lineTo(x, y);
    lienzo_dibujo.stroke();
    lienzo_dibujo.beginPath();
    lienzo_dibujo.moveTo(x, y);
}

function borrarDibujo() {
    lienzo_dibujo.clearRect(0, 0, canvas.width, canvas.height);

}

function descargarDibujo() {
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'dibujo.png';
    a.click();
}


canvas.addEventListener('mousedown', posicionInicial);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', pintar);
limpiarLienzo.addEventListener('click', borrarDibujo);
descargar.addEventListener('click', descargarDibujo);




