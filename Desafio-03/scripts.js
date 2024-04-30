document.getElementById('formularioContato').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    alert('Formulário enviado com sucesso!');
});
