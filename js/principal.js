var pacientes = document.querySelectorAll(".paciente");


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