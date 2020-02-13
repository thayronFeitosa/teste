var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector(".titulo");


for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var idImc = paciente.querySelector('.info-imc');




    if (validaPeso(peso) && validaAltura(altura)) {

        var imc = calcularImc(peso, altura);
        idImc.textContent = imc;
    } else {
        if (validaPeso(peso) === false) {
            idImc.textContent = "peso invalido"
            paciente.classList.add("paciente-invalido")
        }
        if (validaAltura(altura) === false) {
            idImc.textContent = " alura invalida"
            paciente.style.color = "red";
            paciente.classList.add("paciente-invalido")

        }
    }

}

function calcularImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);

}

function validaPeso(peso) {
    return peso <= 0 || peso >= 1000 ? false : true;
}

function validaAltura() {
    return altura <= 0 || altura >= 3.00 ? false : true;
}