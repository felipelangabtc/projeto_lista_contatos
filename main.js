const form = document.getElementById('form-contato');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if (inputTelefone.value.length !== 11) {
        alert(`O telefone com DDD deve conter 11 dígitos. Por exemplo: (99) 98765-3421.`);
    } else if (inputTelefone.value == inputTelefone) {
        alert(`O telefone ${inputTelefone.value} com DDD já foi inserido para outro contato.`);
    } else {
    contato.push(inputNomeContato.value);
    telefone.push(parseInt(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
