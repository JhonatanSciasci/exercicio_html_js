const form = document.getElementById('formulario');
const numeroA = document.getElementById('numero-A');
const numeroB = document.getElementById('numero-B');
const errorMessage = document.querySelector('.error-message');
const mensagemSucesso = document.querySelector('.mensagem-sucesso');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const numA = parseInt(numeroA.value);
    const numB = parseInt(numeroB.value);
        
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const numeroA = document.getElementById('numero-A');
        const numeroB = document.getElementById('numero-B');
        const mensagemSucesso = `O número: <b>${numeroB.value}</b> é maior que o número: <b>${numeroA.value}</b>`;
        const errorMessage = `O número: <b>${numeroB.value}</b> não é maior que o número: <b>${numeroA.value}</b>`;

    if (numB > numA) {
        const containermensagemSucesso = document.querySelector('.mensagem-sucesso');
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = 'block';
            
        numeroA.value = '';
        numeroB.value = '';
            
    } else {
        const containererrorMessage = document.querySelector('.error-message');
        containererrorMessage.innerHTML = errorMessage;
        containererrorMessage.style.display = 'block';
        
        numeroA.value = '';
        numeroB.value = '';        
        }
    });
});