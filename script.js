var landscapes;


landscapes = ['https://www.finalsitesupport.com/hc/article_attachments/360000650392/800x600.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgfHOQstuHZObFBkj0-p38XObLO3dy7dJeA&usqp=CAU', 'https://st2.depositphotos.com/1891797/5736/i/450/depositphotos_57368605-stock-photo-fenced-ranch-at-sunrise.jpg', 'https://www.wallpaperflare.com/static/564/1005/149/night-sky-5k-4k-8k-wallpaper.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sunrise_Akumal.png/800px-Sunrise_Akumal.png', 'https://w0.peakpx.com/wallpaper/838/340/HD-wallpaper-cloud-in-the-sky-blau-blue-dom.jpg', 'https://wallup.net/wp-content/uploads/2019/09/838959-storm-weather-rain-sky-clouds-nature-ocean-sea-waves-748x499.jpg'];
let element_photo = document.getElementById('photo');
element_photo.setAttribute("src", landscapes[0]);


document.getElementById('back').addEventListener('click', (event) => {
  let element_photo2 = document.getElementById('photo');
  landscapes.unshift(landscapes.slice(-1)[0]);
  element_photo2.setAttribute("src", landscapes.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_photo3 = document.getElementById('photo');
  landscapes.push(landscapes[0]);
  element_photo3.setAttribute("src", landscapes.shift());

});
var foods, item;


foods = ['Peanut Butter', 'Tofu', 'Eggs', 'Rice', 'Spinach', 'Carrot'];
let element_products = document.getElementById('products');
foods.forEach((item) => {
  let new_li = document.createElement('li');
  new_li.innerText = item;
  let new_span = document.createElement('span');
  let new_button = document.createElement('button');
  new_button.innerText = 'Add to Cart';
  new_button.setAttribute("id", item);

  new_span.appendChild(new_button);

  new_li.appendChild(new_span);

  element_products.appendChild(new_li);
});


document.getElementById('Peanut Butter').addEventListener('click', (event) => {
  let element_store = document.getElementById('store');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Peanut Butter';

  element_store.appendChild(new_li2);

});

document.getElementById('Tofu').addEventListener('click', (event) => {
  let element_store2 = document.getElementById('store');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Tofu';

  element_store2.appendChild(new_li3);

});

document.getElementById('Eggs').addEventListener('click', (event) => {
  let element_store3 = document.getElementById('store');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Eggs';

  element_store3.appendChild(new_li4);

});

document.getElementById('Rice').addEventListener('click', (event) => {
  let element_store4 = document.getElementById('store');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Rice';

  element_store4.appendChild(new_li5);

});

document.getElementById('Spinach').addEventListener('click', (event) => {
  let element_store5 = document.getElementById('store');
  let new_li6 = document.createElement('li');
  new_li6.innerText = 'Spinach';

  element_store5.appendChild(new_li6);

});

document.getElementById('Carrot').addEventListener('click', (event) => {
  let element_store6 = document.getElementById('store');
  let new_li7 = document.createElement('li');
  new_li7.innerText = 'Carrot';

  element_store6.appendChild(new_li7);

});
