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
var productslist, totalprice;


productslist = ['Menstrual cup', 'Metal straw', 'Reusable waxed sandwich wrap', 'Tote bag'];
totalprice = [];


document.getElementById('add1').addEventListener('click', (event) => {
  let element_addeditems = document.getElementById('addeditems');
  let new_li = document.createElement('li');
  new_li.innerText = 'Menstrual cup price:£20';

  element_addeditems.appendChild(new_li);
  totalprice.unshift(20);
  let element_total_price = document.getElementById('total_price');
  element_total_price.innerText = totalprice.reduce((a,b) => a+b, 0);

});

document.getElementById('add2').addEventListener('click', (event) => {
  let element_addeditems2 = document.getElementById('addeditems');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Metal straw, pack x4 price:£15';

  element_addeditems2.appendChild(new_li2);
  totalprice.unshift(15);
  let element_total_price2 = document.getElementById('total_price');
  element_total_price2.innerText = totalprice.reduce((a,b) => a+b, 0);

});

document.getElementById('add3').addEventListener('click', (event) => {
  let element_addeditems3 = document.getElementById('addeditems');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Reusable waxed sandwich wrap price:£5';

  element_addeditems3.appendChild(new_li3);
  totalprice.unshift(5);
  let element_total_price3 = document.getElementById('total_price');
  element_total_price3.innerText = totalprice.reduce((a,b) => a+b, 0);

});

document.getElementById('add4').addEventListener('click', (event) => {
  let element_addeditems4 = document.getElementById('addeditems');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Tote bag price:£12';

  element_addeditems4.appendChild(new_li4);
  totalprice.unshift(12);
  let element_total_price4 = document.getElementById('total_price');
  element_total_price4.innerText = totalprice.reduce((a,b) => a+b, 0);

});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
