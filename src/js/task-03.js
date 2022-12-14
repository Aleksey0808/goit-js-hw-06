const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const galleryEl = document.querySelector('.gallery');

// const imagesEl = images.map(item => {
//   const liEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = item.url;
//   imgEl.alt = item.alt;
//   liEl.append(imgEl);

//   return liEl;
// });

// galleryEl.append(...imagesEl);
// console.log(imagesEl);

const galleryEl = document.querySelector('.gallery');

const imagesEl = images.map(item =>
  `<li><img src="${item.url}"alt="${item.alt}"></img></li>`
).join('');

galleryEl.insertAdjacentHTML("beforeend", imagesEl);
console.log(imagesEl);









