<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cadastro</title>
</head>
<body>

<h1>Cadastro</h1>

<div id="formulario">
    <label for="nome">Nome:</label>
    <input type="text" id="nome"><br><br>

    <label for="email">E-mail:</label>
    <input type="email" id="email"><br><br>

    <label for="telefone">Telefone:</label>
    <input type="text" id="telefone"><br><br>

    <button onclick="exibirCadastro()">Cadastrar</button>
</div>

<div id="resultado"></div>

<script>
    function exibirCadastro() {
        // Captura os valores dos campos do formulário
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;

        // Monta a mensagem com os dados do cadastro
        var mensagem = 'Nome: ' + nome + '<br>';
        mensagem += 'E-mail: ' + email + '<br>';
        mensagem += 'Telefone: ' + telefone + '<br>';

        // Exibe a mensagem na div resultado
        document.getElementById('resultado').innerHTML = mensagem;
    }
</script>

</body>
</html>
