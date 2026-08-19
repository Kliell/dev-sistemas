document.getElementById('buscar').addEventListener('click', function() {
    const selectCidade = document.getElementById('cidade');
    const coordenadas = selectCidade.value.split(',');
    const lat = coordenadas[0];
    const lon = coordenadas[1];
    const nomeCidade = selectCidade.options[selectCidade.selectedIndex].text;
    const divResultado = document.getElementById('resultado');

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    fetch(url)
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error("Não foi possível consultar os dados do clima.");
            }
            return resposta.json();
        })
        .then(data => {
            if (!data.current_weather) {
                throw new Error("Dados do clima indisponíveis no momento.");
            }

            const temp = data.current_weather.temperature;
            const weatherCode = data.current_weather.weathercode;

            let icone = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; 
            if (weatherCode > 3) {
                icone = "https://cdn-icons-png.flaticon.com/512/1146/1146858.png"; 
            }

            if (temp < 20) {
                document.body.style.background = "linear-gradient(180deg, #1e3c72, #2a5298)";
            } else if (temp >= 20 && temp <= 28) {
                document.body.style.background = "linear-gradient(180deg, #4facfe, #00f2fe)";
            } else {
                document.body.style.background = "linear-gradient(180deg, #ff7e5f, #feb47b)";
            }

            divResultado.innerHTML = `
                <h2>${nomeCidade}</h2>
                <img src="${icone}" alt="Ícone do clima">
                <p><strong>Temperatura Atual:</strong> ${temp} °C</p>
            `;
        })
        .catch(erro => {
            divResultado.innerHTML = `<p>Não foi possível consultar os dados do clima.</p>`;
        });
});