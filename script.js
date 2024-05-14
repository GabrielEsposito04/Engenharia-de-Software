document.getElementById('validar').addEventListener('click', function() {
    var minimo = parseInt(document.getElementById('minimo').value);
    var maximo = parseInt(document.getElementById('maximo').value);
    var resultado = document.getElementById('resultado');

    // Verifica se os valores são válidos
    if (isNaN(minimo) || isNaN(maximo)) {
        resultado.textContent = "Insira valores válidos.";
        return;
    }

    // Gera valores aleatórios
    var valorValido = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    var valorInvalidoMenor = Math.floor(Math.random() * minimo);
    var valorInvalidoMaior = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - maximo + 1)) + maximo;

    // Exibe o resultado
    resultado.innerHTML = "<strong>Valores:</strong><br>" +
                          "Válido: " + valorValido + "<br>" +
                          "Inválido (menor que o mínimo): " + valorInvalidoMenor + "<br>" +
                          "Inválido (maior que o máximo): " + valorInvalidoMaior;

    // Armazena os valores para verificação posterior
    resultado.dataset.minimo = minimo;
    resultado.dataset.maximo = maximo;
});

document.getElementById('verificar').addEventListener('click', function() {
    var valor = parseInt(document.getElementById('valor').value);
    var resultado = document.getElementById('resultado');

    var minimo = parseInt(resultado.dataset.minimo);
    var maximo = parseInt(resultado.dataset.maximo);

    // Verifica se os valores são válidos
    if (isNaN(minimo) || isNaN(maximo)) {
        resultado.textContent = "Defina valores mínimos e máximos primeiro.";
        return;
    }

    // Verifica se o valor está dentro do intervalo
    if (valor >= minimo && valor <= maximo) {
        resultado.textContent = "O valor " + valor + " é válido.";
    } else {
        resultado.textContent = "O valor " + valor + " é inválido.";
    }
});
