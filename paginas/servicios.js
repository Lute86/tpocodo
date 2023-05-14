const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const modalClose = document.querySelector('.close-modal');
let images = [
  'https://picsum.photos/id/1018/300/200',
  'https://picsum.photos/id/1015/300/200',
  'https://picsum.photos/id/1019/300/200',
  'https://picsum.photos/id/103/300/200',
  'https://picsum.photos/id/1059/300/200',
  'https://picsum.photos/id/106/300/200',
  'https://picsum.photos/id/1065/300/200',
  'https://picsum.photos/id/1066/300/200',
  'https://picsum.photos/id/107/300/200',
  'https://picsum.photos/id/1074/300/200',
  'https://picsum.photos/id/1080/300/200',
  'https://picsum.photos/id/1082/300/200',
  'https://picsum.photos/id/1083/300/200',
  'https://picsum.photos/id/1084/300/200',
  'https://picsum.photos/id/1085/300/200',
  'https://picsum.photos/id/1088/300/200',
  'https://picsum.photos/id/109/300/200',
  'https://picsum.photos/id/1090/300/200',
  'https://picsum.photos/id/1096/300/200',
  'https://picsum.photos/id/11/300/200',
  'https://picsum.photos/id/110/300/200',
  'https://picsum.photos/id/1100/300/200',
  'https://picsum.photos/id/1103/300/200',
  'https://picsum.photos/id/1104/300/200',
  'https://picsum.photos/id/111/300/200',
  'https://picsum.photos/id/1119/300/200',
  'https://picsum.photos/id/112/300/200',
  'https://picsum.photos/id/1127/300/200',
  'https://picsum.photos/id/113/300/200',
  'https://picsum.photos/id/1139/300/200'
];
let index = 0;

function createImage(imageUrl) {
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  image.setAttribute('src', imageUrl);
  image.setAttribute('alt', 'gallery image');
  figure.appendChild(image);
  gallery.appendChild(figure);
  console.log('Image created:', image);
  image.addEventListener('click', function() {
    modalImage.setAttribute('src', imageUrl);
    modal.classList.add('modal-show');
    console.log('Image clicked:', image);
    
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