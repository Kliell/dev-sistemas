const inputTitulo = document.getElementById('tituloCard');
const btnCriar = document.getElementById('criarCard');
const container = document.getElementById('cardsContainer');

function criarNovoCard() {
    const textoTitulo = inputTitulo.value.trim();

    if (textoTitulo === "") {
        alert("Por favor, digite um título para o card!");
        return;
    }

    const card = document.createElement('div');
    card.classList.add('card');

    const titulo = document.createElement('h3');
    titulo.textContent = textoTitulo;

    const btnRemover = document.createElement('button');
    btnRemover.textContent = "Remover";

    btnRemover.addEventListener('click', function() {
        card.remove(); 
    });

    card.appendChild(titulo);
    card.appendChild(btnRemover);

    container.appendChild(card);

    inputTitulo.value = "";
    inputTitulo.focus();
}

btnCriar.addEventListener('click', criarNovoCard);