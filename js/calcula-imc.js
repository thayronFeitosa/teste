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

        var imc = calcularImc(peso, altura);
        idImc.textContent = imc;
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

function calcularImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);

}