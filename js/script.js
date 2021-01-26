// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere un’immagine presa anch’essa da un data

var app=new Vue({
    el: '#root',
    data: {
        title: 'Sono il testo inserito nell\'h1',
        img: 'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg'
    }
});
Vue.config.devtools = true;