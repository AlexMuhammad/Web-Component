if (!document.querySelector("image-figure")) {
  const imageFigureElement = document.createElement("image-figure");

  imageFigureElement.setAttribute(
    "src",
    "https://blogger.googleusercontent.com/img/a/AVvXsEgpMmUcx8RlHIGgrFhQVyfAlDgNdTRQR4wl_3HAOqX9C7bPirCarjz7SNlC9dps1p83SQlOYchRujxyjPUE87L_T5bExh8eUVgB1ijuF9_fkxU6BmiiNKBwD6GR8XGttfuAdkJy-EzMa_OQtIWkwOy2_BYAzdsJPptTq7yuWHvFGlCqbjoSWJvBOICJ=s16000"
  );
  imageFigureElement.setAttribute("alt", "Dicoding Logo");
  imageFigureElement.setAttribute("caption", "Huruf g dalam logo dicoding");

  document.body.appendChild(imageFigureElement);
}
