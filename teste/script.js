function calcularOrcamento() {
    const tipoEvento = document.getElementById("tipoEvento").value;
    const dataEvento = document.getElementById("dataEvento").value;
    const duracao = parseInt(document.getElementById("duracao").value);
    const convidados = parseInt(document.getElementById("convidados").value);

    if (!dataEvento || new Date(dataEvento) < new Date()) {
        alert("Por favor, escolha uma data válida para o evento.");
        return;
    }

    // Definição de preços base por evento
    const precos = {
        musica: 500,
        casamento: 3000,
        festa: 1500,
        recepcao: 1000
    };

    let precoBase = precos[tipoEvento] || 0;
    let precoTotal = precoBase + (duracao * 100) + (convidados * 5);

    document.getElementById("total").textContent = `R$ ${precoTotal.toFixed(2)}`;
    document.getElementById("whatsappButton").style.display = "block"; // Mostra botão WhatsApp
}

function enviarWhatsApp() {
    const tipoEvento = document.getElementById("tipoEvento").value;
    const dataEvento = document.getElementById("dataEvento").value;
    const duracao = document.getElementById("duracao").value;
    const convidados = document.getElementById("convidados").value;
    const total = document.getElementById("total").textContent;

    let mensagem = `Olá! Gostaria de agendar um evento.\n
    📅 Tipo: ${tipoEvento}\n
    📆 Data: ${dataEvento}\n
    ⏰ Duração: ${duracao} horas\n
    👥 Convidados: ${convidados}\n
    💰 Orçamento: ${total}\n
    Podemos conversar?`;

    let url = `https://wa.me/5584996197364?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
