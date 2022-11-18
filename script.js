console.log('Olá mundo')
console.log('Executar depois de Olá mundo')



const buyButton = document.getElementById('buy-button')
const cartForm = document.getElementById('cart-form')


//variáveis declaradas para adicionar os números dos tickets
const addTicket = document.getElementById('add-ticket')
const removeTicket = document.getElementById('remove-ticket')
const ticket = document.getElementById('ticket')
const ticketPrice = document.getElementById('ticket-price')


//evento para adicionar o ticket
addTicket.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('Adicionando ticket')
    //console.log(ticket.innerText)
    //ticket em string convertido para inteiro, pelo parseInt mais 1 ticket, adicionando
    ticket.innerText = parseInt(ticket.innerText)+ 1
    //calculo de 1 ticket * R$90,00
    ticketPrice.innerText = parseInt(ticket.innerText)* 90
})

//evento para remover o ticket
removeTicket.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('Removendo um ticket')
    //console.log(ticket.innerText)
    if(parseInt(ticket.innerText) !== 1) {
        //ticket em string convertido para inteiro, pelo parseInt menos 1 ticket, removendo
        ticket.innerText = parseInt(ticket.innerText)- 1
        ticketPrice.innerText = parseInt(ticket.innerText)* 90
    }
    
})
//evento para adicionar os dados do comprador do ticket
cartForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = cartForm.nome.value;
    const email = cartForm.email.value;
    const quantityTickets = ticket.innerText;


    //salvar as informações no local/storage
    window.localStorage.setItem('nome', nome)
    window.localStorage.setItem('email', email)
    window.localStorage.setItem('quantityTickets', quantityTickets)

    //redicionar os dados guardados no localeStorage para a página que deve acessar e mostrar as informações
    window.location.href = "finalizacao.html"

    console.log('Nome: ', nome)
    console.log('Email:', email)
    console.log('Tickets: ', ticket.innerText)
})



