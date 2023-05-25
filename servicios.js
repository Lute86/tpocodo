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
  './imagenes/manoverde.png',
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
  image.addEventListener('click', function() {
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

loadMoreBtn.addEventListener('click', function() {
  loadMore();
});

modalClose.addEventListener('click', function() {
  modal.classList.remove('modal-show');
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modal.classList.remove('modal-show');
  }
});

modal.addEventListener('click', function() {
  modal.classList.remove('modal-show');
});