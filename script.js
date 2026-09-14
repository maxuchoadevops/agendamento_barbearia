const inputData = document.getElementById('data');

// Bloquear datas passadas
const hoje = new Date().toISOString().split('T')[0];
inputData.setAttribute('min', hoje);

document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const telBarbearia = "5500000000000"; // Seu número aqui

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const barbeiro = document.getElementById('barbeiro').value;
    const data = document.getElementById('data').value.split('-').reverse().join('/');
    const hora = document.getElementById('hora').value;
    const obs = document.getElementById('obs').value || "Sem observações";

    const msg = `*NOVO AGENDAMENTO - BARBEARIA*%0A%0A` +
                `👤 *Cliente:* ${nome}%0A` +
                `✂️ *Serviço:* ${servico}%0A` +
                `💈 *Barbeiro:* ${barbeiro}%0A` +
                `📅 *Data:* ${data}%0A` +
                `⏰ *Hora:* ${hora}%0A` +
                `📝 *Obs:* ${obs}`;

    window.open(`https://wa.me/${telBarbearia}?text=${msg}`, '_blank');
});