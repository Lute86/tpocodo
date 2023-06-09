const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const modalClose = document.querySelector('.close-modal');
let images = [
  './imagenes/manicura.png',
  './imagenes/pedicura.png',
  './imagenes/manos.png',
  './imagenes/pink.png',
  './imagenes/pink2.png',
  './imagenes/manofrascos.png',
  './imagenes/pestanias.jpg',
  './imagenes/unas.png',
  './imagenes/design.png',
];
let index = 0;

function createImage(imageUrl) {
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  image.setAttribute('src', imageUrl);
  image.setAttribute('alt', 'gallery image');
  figure.appendChild(image);
  gallery.appendChild(figure);
  image.addEventListener('click', function () {
    modalImage.setAttribute('src', imageUrl);
    modal.classList.add('modal-show');
  });
}

function loadMore() {
  const max = index + 3;
  for (let i = index; i < max && i < images.length; i++) {
    createImage(images[i]);
  }
  index = max;
  if (index >= images.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMore();

loadMoreBtn.addEventListener('click', function () {
  loadMore();
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('modal-show');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.classList.remove('modal-show');
  }
});

modal.addEventListener('click', function () {
  modal.classList.remove('modal-show');
});

//Animaciones

window.addEventListener('scroll', function () {

  let tamañoDePantalla = window.innerHeight;

  //Servicios

  let manos = this.document.getElementById('manos');
  let posicionmanos = manos.getBoundingClientRect().top;
  console.log(posicionmanos);
  if (posicionmanos < tamañoDePantalla) {
    manos.style.animation = 'animacion1 1s ease'
  }

  let pies = this.document.getElementById('pies');
  let posicionpies = pies.getBoundingClientRect().top;
  console.log(posicionpies);
  if (posicionpies < tamañoDePantalla) {
    pies.style.animation = 'animacion1 2s ease'
  }

  let pestanias = this.document.getElementById('pestanias');
  let posicionpestanias = pestanias.getBoundingClientRect().top;
  console.log(posicionpestanias);
  if (posicionpestanias < tamañoDePantalla) {
    pestanias.style.animation = 'animacion1 2s ease'
  }

})