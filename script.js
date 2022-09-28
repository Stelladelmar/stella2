/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
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
