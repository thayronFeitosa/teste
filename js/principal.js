var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector(".titulo");


for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var idImc = paciente.querySelector('.info-imc');


    var pesoInvalido = peso <= 0 || peso >= 1000 ? false : true;
    var alturaInvalida = altura <= 0 || altura >= 3.00 ? false : true;

    if (pesoInvalido && alturaInvalida) {
        var imc = peso / (altura * altura)

        idImc.textContent = imc.toFixed(2);
    } else {
        if (pesoInvalido === false) {
            idImc.textContent = "peso invalido"
            paciente.classList.add("paciente-invalido")
        }
        if (alturaInvalida === false) {
            idImc.textContent = " alura invalida"
            paciente.style.color = "red";
            paciente.classList.add("paciente-invalido")

        }
    }

}


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
    // A funçao appendChild adiciona um filhos ao pacienteTd
    pacienteTd.appendChild(nomeTd);
    pacienteTd.appendChild(pesoTd);
    pacienteTd.appendChild(alturaTd);
    pacienteTd.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTd);






});