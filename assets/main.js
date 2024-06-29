const menuMobileIcon = document.querySelector(".toggle");
const menuMobile = document.querySelector(".mobile-menu")
const helloWorld = document.querySelector("h1")
const matheusRocha = document.querySelector("h2")

//Adiciona a classe "show" a classe .mobile-menu, para o menu aparecer
menuMobileIcon.addEventListener("click", function () { menuMobile.classList.contains("show") ? menuMobile.classList.remove("show") : menuMobile.classList.add("show") }); //

//Itera sobre o array de letras uma por uma para o texto aparecer letra por letta
function escreve(texto) {
    const arrayTexto = texto.textContent.split("");
    texto.textContent = "";
    arrayTexto.forEach((letra, i) => {
        setTimeout(() => {
            texto.textContent += letra;
        }, 75 * i);
    });
}
escreve(helloWorld);

//Validação do Formulário de Contato

const form = document.querySelector("form");
function validaForm(event){
    event.preventDefault();
    
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;


    if (nome !== "" && validarEmail(email) && mensagem !== "") {
        form.submit(); // Envia o formulário se todos os campos estiverem preenchidos corretamente
    } 
}
function validarEmail(email) {
    // Função simples para validar o formato do e-mail
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

form.addEventListener("submit", validaForm);
