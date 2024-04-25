// Seleciona os botões principais
const buttonClaro = document.getElementById('tons-claro');
const buttonMedio = document.getElementById('tons-medio');
const buttonEscuro = document.getElementById('tons-escuro');

// Seleciona as listas correspondentes
const listaClaro = document.getElementById('lista-tons-claro');
const listaMedio = document.getElementById('lista-tons-medio');
const listaEscuro = document.getElementById('lista-tons-escuro');

// Adiciona os manipuladores de eventos de clique para os botões principais
buttonClaro.addEventListener('click', function() {
    // Mostra a lista de tons claros e oculta as outras
    listaClaro.style.display = 'block';
    listaMedio.style.display = 'none';
    listaEscuro.style.display = 'none';
});

buttonMedio.addEventListener('click', function() {
    // Mostra a lista de tons médios e oculta as outras
    listaClaro.style.display = 'none';
    listaMedio.style.display = 'block';
    listaEscuro.style.display = 'none';
});

buttonEscuro.addEventListener('click', function() {
    // Mostra a lista de tons escuros e oculta as outras
    listaClaro.style.display = 'none';
    listaMedio.style.display = 'none';
    listaEscuro.style.display = 'block';
});
