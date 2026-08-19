document.getElementById('buscar').addEventListener('click', function() {
    const nome = document.getElementById('usuario').value.trim();
    const divPerfil = document.getElementById('perfil');

    if (nome === "") {
        divPerfil.innerHTML = "<p>Digite um nome de usuário!</p>";
        return;
    }

    fetch(`https://api.github.com/users/${nome}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error("Usuário não encontrado!");
            }
            return resp.json();
        })
        .then(dados => {
            const avatar = dados.avatar_url;
            const nomeCompleto = dados.name ? dados.name : "Sem nome cadastrado";
            const bio = dados.bio ? dados.bio : "Sem biografia cadastrada";

            divPerfil.innerHTML = `
                <img src="${avatar}" alt="Foto de ${nome}" width="150">
                <h3>${nomeCompleto}</h3>
                <p>${bio}</p>
            `;
        })
        .catch(erro => {
            divPerfil.innerHTML = `<p>${erro.message}</p>`;
        });
});