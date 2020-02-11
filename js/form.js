var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // A funcão creadElemente como o nome ja diz cria um elemente que nesse caso e um tr
    var pacienteTd = document.createElement("tr");
    // cria varias td
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularImc(peso, altura);
    // A funçao appendChild adiciona um filhos ao pacienteTd
    pacienteTd.appendChild(nomeTd);
    pacienteTd.appendChild(pesoTd);
    pacienteTd.appendChild(alturaTd);
    pacienteTd.appendChild(gorduraTd);
    pacienteTd.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTd);


});