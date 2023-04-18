const inputImage = document.getElementById("inputImage");
const image = document.getElementById("image");
const heightButton = document.getElementById("heightButton");
const widthButton = document.getElementById("widthButton");

inputImage.addEventListener("change", () => {
  const file = inputImage.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    image.setAttribute("src", reader.result);
  });

  if (file) {
    reader.readAsDataURL(file);
  }
});

function changeHeight() {
  const currentHeight = image.clientHeight;
  const newHeight = currentHeight + 50;
  image.setAttribute("height", newHeight);
}

function changeWidth() {
  const currentWidth = image.clientWidth;
  const newWidth = currentWidth + 50;
  image.setAttribute("width", newWidth);
}
