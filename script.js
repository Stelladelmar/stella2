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
