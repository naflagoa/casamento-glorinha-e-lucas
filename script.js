
const dataDoCasamento = new Date(2026, 10, 28, 15, 40, 0).getTime();

// 2. Atualiza a contagem a cada 1 segundo (1000 milissegundos)
const timer = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataDoCasamento - agora;

    // 3. Cálculos matemáticos de conversão de tempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // 4. Injeta os valores no HTML (adicionando um zero na frente se for menor que 10)
    document.getElementById("dias").innerHTML = dias < 10 ? "0" + dias : dias;
    document.getElementById("horas").innerHTML = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos;

    // 5. O que acontece quando a data chega? Zera tudo e para a contagem.
    if (distancia < 0) {
        clearInterval(timer);
        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";
    }
}, 1000);