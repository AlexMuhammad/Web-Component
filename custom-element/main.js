let imageFigureElement = document.querySelector("image-figure");

//jika tidak tersedia pada DOM maka dibuat secara sintaksis
if (!imageFigureElement) {
  imageFigureElement = document.createElement("image-figure");
  document.body.appendChild(imageFigureElement);
}
//mengubah/menambahkan nilai attribute caption
setTimeout(() => {
  imageFigureElement.setAttribute("caption", "Gambar 1");
}, 1000);

setTimeout(() => {
  imageFigureElement.remove();
}, 5000);
