const buttonDark = document.getElementById('btnDarkMode');
const body = document.querySelector('body');
const td = document.querySelectorAll('table td');
const panel=document.querySelector('.panel');

let contador = 0;

buttonDark.addEventListener('click', modoOscuro)

function modoOscuro() {
  if (contador == 0) {
    body.classList.add('dark');
    panel.classList.add('dark');
    buttonDark.classList.add('dark');

    td.forEach(element => {
      element.classList.add('dark');
    });

    contador = 1;
    buttonDark.innerHTML='Modo Claro';
  } else {
    body.classList.remove('dark');
    panel.classList.remove('dark');
    buttonDark.classList.remove('dark');

    td.forEach(element => {
      element.classList.remove('dark');
    });

    contador = 0;
    buttonDark.innerHTML='Modo Oscuro';
  }
}
