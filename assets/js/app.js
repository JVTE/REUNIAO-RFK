// Cria um alerta quando a página é gerada
function alerta() {
     alert('Cancelamentos de reunião com a ANA DA RECEPÇÃO ou em seu e-mail, caso tenha alguma duvida FAVOR verificar o RODAPÉ da página')
}

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function atualizarRelogio() {
    const dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

function obterLocalizacaoEAtualizarRelogio() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            const timezoneOffset = new Date().getTimezoneOffset() / 60;
            
            // Usando a biblioteca Luxon para lidar com fusos horários
            const luxonDateTime = luxon.DateTime.now().setZone('auto');
            
            const horaLocal = luxonDateTime.hour;
            const minutoLocal = luxonDateTime.minute;
            const segundoLocal = luxonDateTime.second;
            
            horas.textContent = horaLocal < 10 ? '0' + horaLocal : horaLocal;
            minutos.textContent = minutoLocal < 10 ? '0' + minutoLocal : minutoLocal;
            segundos.textContent = segundoLocal < 10 ? '0' + segundoLocal : segundoLocal;
        });
    } else {
        // Navegador não suporta geolocalização
        atualizarRelogio();
    }
}

// Chame a função para obter a localização do usuário e atualizar o relógio
obterLocalizacaoEAtualizarRelogio();

// Atualize o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// função da data
function mostrarDataAtualizada() {
    var elementoData = document.getElementById("dataAtual");

    function atualizarData() {
        var dataAtual =  new Date();
        var dia = dataAtual.getDate();
        var mes = dataAtual.getMonth() + 1;
        var ano = dataAtual.getFullYear();

        var dataFormatada = dia + '/' + mes + '/' + ano;

        elementoData.innerHTML = dataFormatada;
    }
    //chama a função para exibir a data atual
    atualizarData();

    //Atualiza a data a cada segundo
    setInterval(atualizarData, 1000);
}
mostrarDataAtualizada();