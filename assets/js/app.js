// FUNÇÃO PARA EXIBIR UM ALERTA NA PÁGINA QUANDO ELA É RECARREGADA
// function alerta() {
//     alert('Cancelamentos de reunião com a ANA DA RECEPÇÃO ou em seu e-mail, caso tenha alguma dúvida, FAVOR verificar o RODAPÉ da página');
// }
// OBTEM ELEMENTOS DE HORA, MINUTO E SEGUNDO DO RELÓGIO
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// FUNÇÃO PARA ATUALIZAR O RELÓGIO
function atualizarRelógio() {
    const dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    // FORMATA AS HORAS, MINUTOS E SEGUNDOS PARA ADICONAR UM ZERO À ESQUERDA SE NECESSÁRIO
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;
    // ATUALIZA OS ELEMENTOS DE HORAS, MINUTOS E SEGUNDOS COM OS VALORES FORMATADOS
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}
// FUNÇÃO PARA OBTER A LOCALIZÇÃO DO USUÁRIO E ATULAIZAR O RELÓGIO OU MOSTRAR UM ALERTA
function obterLocalizacaoEAtualizarRelógio() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Coordenadas geográficas do estado do Paraná
            const latitudeParana = -25.252088;
            const longitudeParana = -52.021499;

            // Margem de erro para a correspondência (ajuste conforme necessário
            const margemErro = 0.5; // Exemplo de margem de erro

            // Verifique se as coordenadas do usuário correspondem ao Paran
            if (
                Math.abs(latitude - latitudeParana) <= margemErro &&
                Math.abs(longitude - longitudeParana) <= margemErro
            ) {
                // Exibe o alerta apenas para usuários no Paraná
                alerta();
            } else {
                // Atualize o relógio com a hora local
                atualizarRelógio();
            }
        });
    } else {
        // Navegador não suporta geolocalização
        atualizarRelógio();
    }
}

// Chama a função para obter a localização do usuário e atualizar o relógio
obterLocalizacaoEAtualizarRelógio();

// Atualize o relógio a cada segundo
setInterval(atualizarRelógio, 1000);

// Função da data
function mostrarDataAtualizada() {
    var elementoData = document.getElementById("dataAtual");

    function atualizarData() {
        var dataAtual = new Date();
        var dia = dataAtual.getDate();
        var mes = dataAtual.getMonth() + 1;
        var ano = dataAtual.getFullYear();

        var dataFormatada = dia + '/' + mes + '/' + ano;

        elementoData.innerHTML = dataFormatada;
    }
    // Chama a função para exibir a data atual
    atualizarData();

    // Atualiza a data a cada segundo
    setInterval(atualizarData, 1000);
}
// CHAMA A FUNÇÃO PARA MOSTRAR A DATA ATUALIZADA
mostrarDataAtualizada();