var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //extraindo informações do paciente do form
    var paciente = obterPacienteDoFormulario(form);


    //cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);


    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


});

function obterPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)

    }

    return paciente;

}

function montaTr(paciente) {
    var pacienteTd = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    // A funçao appendChild adiciona um filhos ao pacienteTd
    pacienteTd.appendChild(nomeTd);
    pacienteTd.appendChild(pesoTd);
    pacienteTd.appendChild(alturaTd);
    pacienteTd.appendChild(gorduraTd);
    pacienteTd.appendChild(imcTd);



    return pacienteTd;

}