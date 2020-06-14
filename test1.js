
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
}
const endpoint = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
const ronAPI = fetch(endpoint);
ronAPI.then(data => {
  return data.json();
}).then(data => {
  createAPI(data)
}).catch(handleError);


function createAPI(data) {

    ///creating elements
 const newDiv = document.createElement('div');
 const newImg = document.createElement('img');
 const newDiv2 = document.createElement('div');
 const newH3 = document.createElement('h3');
 const p = document.createElement('p');
 const p1 = document.createElement('p');
 const p2 = document.createElement('p');
 const panelButtonsContainer = document.createElement('div');
 const buttonOpen = document.createElement('button');
 const content = document.createElement('div');
 const body = document.querySelector('body');
 const backimg = document.createElement('img');


    ///appending them

document.body.appendChild(newDiv);
newDiv.appendChild(backimg);
newDiv.appendChild(newDiv2);
newDiv2.appendChild(newH3);
newDiv2.appendChild(panelButtonsContainer);
document.body.appendChild(content);
// content.appendChild(p);
// content.appendChild(p);
// content.appendChild(p2);
panelButtonsContainer.appendChild(buttonOpen);
panelButtonsContainer.appendChild(content)
// newDiv.appendChild(backimg);


    ///styling them
body.style.backgroundImage = 'url("img/Screen Shot 2020-06-13 at 5.31.58 PM.png")';
newImg.src = 'img/Screen Shot 2020-06-12 at 6.35.34 PM.png';
newDiv.style = 'display: flex; flex-direction: column; align-items: center;'
newImg.style = 'border: 10px solid black; align-items: center;'
// body.style.backgroundImage = "url('img/ron.jpg')";
// body.style.backgroundImage.width = '100vw';
backimg.src = 'img/ron.jpg';
backimg.style = "width: 80vw; height: 80vh;";
content.classList.add('panel-content');
buttonOpen.style = 'height: 50px; width: 550px; background-color: #A9A9A9; font-family: Space Mono, monospace; font-size: 2rem;';
buttonOpen.innerText = 'WISDOM FROM RON'
panelButtonsContainer.style = 'display: flex; flex-direction: column; align-items: center;'

// event listener 
panelButtonsContainer.addEventListener('mouseenter', (e) => {
  content.innerText = data;
  content.classList.toggle('toggle-on');
});
panelButtonsContainer.addEventListener('mouseleave', (e) => {
  window.location.href=window.location.href;
});
panelButtonsContainer.addEventListener('mousedown', (e) => {
  content.innerText = data;
  content.classList.toggle('toggle-on');
});
panelButtonsContainer.addEventListener('mouseup', (e) => {
  window.location.href=window.location.href;
});
}