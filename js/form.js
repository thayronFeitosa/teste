var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //extraindo informações do paciente do form
    var paciente = obterPacienteDoFormulario(form);


    //cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    if (!validaPaciente(paciente)) {
        console.log("peso invalido");
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();

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
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    // A funçao appendChild adiciona um filhos ao pacienteTd
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));



    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        console.log("entrou no valida paciente e retornou true")
        return true;
    } else {
        console.log("entrou no valida paciente e retornou false")
        return false;
    }


}