// Consegna:
// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1 (opzionale):
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2  (opzionale):
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3  (opzionale):
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

// Struttura dati 



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// Selezione elementi della DOM 
  //inserire le immagini .slides usando querySelector()
  const slidesElement = document.querySelector('.slides'); 
  // la freccia next
  const nextElement = document.querySelector('.next'); 
  // la freccia prev
  const prevElement = document.querySelector('.prev'); 
  
  
  // Seleziono l'indice dell'immagine che voglio attivare
  let activeImage = 0;
  
  
  
  
  // inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito
  
  for (let i = 0; i < slides.length; i++) {
    const slideUrl = slides[i];
    //console.log(slideUrl);
    const imgMarkup = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${slideUrl}" alt= "">`;
    //prendo l'elemento della dom dove inserire le imamgini le inserisco
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup);
  }
  
  /* 
  MILESTONE 3
  Al click dell 'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
  */
  
  
  // aggiungo event listener sulla freccia del next
  nextElement.addEventListener('click', function () {
    console.log('Ho cliccato su next');
  
    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > img.active')
    console.log(slides[activeImage], 'Selene');
  
    console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    // incremento active image di 1
    activeImage++ // activeImage = activeImage + 1
    console.log(activeImage); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img-fluid')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[activeImage];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')
  
  });
  
  
  // aggiungo event listener sulla freccia del prev
  prevElement.addEventListener('click', function () {
    console.log('Ho cliccato su prev');
    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > img.active')
    console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    // incremento active image di 1
    activeImage-- // activeImage = activeImage + 1
    console.log(activeImage); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img-fluid')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[activeImage];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')
  });