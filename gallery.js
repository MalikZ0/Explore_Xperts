//function to turn dark mode class
function turnDark(){
  document.body.style.backgroundColor = "rgb(0,0,0)";
  document.body.classList.add("darkMode");
}
//function to turn light mode 
function turnLight(){
  document.body.style.backgroundColor = "rgb(255,255,255)";
  document.body.classList.remove("darkMode");
}
//function for create rbg colors for the background
function turnRgb(){
  document.body.classList.remove("darkMode");
  var colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
//function for large font class 
function largeSize(){
  document.body.classList.remove("mediumSize");
  document.body.classList.add("largeSize");
}
//function for medium font class 
function mediumSize(){
  document.body.classList.remove("largeSize");
  document.body.classList.add("mediumSize");
}
//function to remove large and medium font classes
function smallSize(){
  document.body.classList.remove("largeSize");
  document.body.classList.remove("mediumSize");
}
// function for pop up image boxwhen user click the box
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.theBox .product').forEach(product =>{
  product.onclick = () =>{
    previewContainer.style.display = 'flex';
    let setName = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(setName == target){
        preview.classList.add('active');
      }
    });
  };
});
/* arrow functions*/
previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});
// function for moving images in the box
const imageContainers = document.querySelectorAll(".image-container");
const leftArrows = document.querySelectorAll(".arrow.left");
const rightArrows = document.querySelectorAll(".arrow.right");


imageContainers.forEach((imageContainer, index) => {
  const images = imageContainer.children;
  const totalImages = images.length;
  let imageIndex = 0;

  rightArrows[index].addEventListener("click", () => {
    imageIndex = (imageIndex + 1) % totalImages;
    updateImagePosition();
  });

  leftArrows[index].addEventListener("click", () => {
    imageIndex = (imageIndex - 1 + totalImages) % totalImages;
    updateImagePosition();
  });

  function updateImagePosition() {
    const imageWidth = images[0].clientWidth;
    const newPosition = -imageIndex * imageWidth;
    imageContainer.style.transform = `translateX(${newPosition}px)`;
  }
});


// function for pop up image boxwhen user hovering the box
/*let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.theBox .product').forEach(product => {
  product.addEventListener('mouseenter', () => {
    previewContainer.style.display = 'flex';
    let setName = product.getAttribute('data-set');

    previewBox.forEach(preview => {
      let targetName = preview.getAttribute('data-get');
      if (setName === targetName) {
        preview.classList.add('active');
      } else {
        preview.classList.remove('active');
      }
    });

    // Remove previously attached click event listeners for close icons
    removeCloseIconEventListeners();

    // Add click event listeners for close icons
    previewContainer.querySelectorAll('.fa-times').forEach(closeIcon => {
      closeIcon.addEventListener('click', () => {
        closeIcon.parentElement.classList.remove('active');
        previewContainer.style.display = 'none';
      });
    });
  });
});

function removeCloseIconEventListeners() {
  previewContainer.querySelectorAll('.fa-times').forEach(closeIcon => {
    const clonedCloseIcon = closeIcon.cloneNode(true);
    closeIcon.parentNode.replaceChild(clonedCloseIcon, closeIcon);
  });
}*/
