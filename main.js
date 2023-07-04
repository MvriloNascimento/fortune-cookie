const luckMessages = [
    "A morte é como o vento, está sempre ao meu lado",
    "Mamãe sempre dizia, Não perca! Quanto mais escura a noite... Mais brilhante as estrelas",
    "A escalada é longa, mas a vista vale a pena!",
    "Seria o único propósito da folha, o de cair?",
    "O ego sempre deixa todos de joelhos.",
    "Toda espada é sua própria mestra.",
    "Certas coisas não perdem o fio, certos erros não podem ser cometidos duas vezes.",
    "A pior mentira e a perfeição.",
    "Ser o chefe é muito melhor do que não ser o chefe.",

];

let randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
const cookie = document.querySelector('#img');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const newCookie = document.querySelector('#openedCookie');
const cookieOpened = document.querySelector('.message p');


const toggleScreen = () => {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
  }
  
  const handleOpenCookie = () => {
    toggleScreen()
    cookieOpened.innerText = `${randomMessage}`
  }
  
  const handleOpenNewCookie = () => {
    toggleScreen()
    location.reload()
    randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
  }
  
  const pressEnter = (e) => {
    if ( e.key == 'Enter' && screen1.classList.contains('hide') ) {
      handleOpenNewCookie()
    }
  }
  
  cookie.addEventListener('click', handleOpenCookie);
  newCookie.addEventListener('click', handleOpenNewCookie);
  document.addEventListener('keydown', pressEnter);