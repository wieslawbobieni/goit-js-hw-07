import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryHtml = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </div>
  `;
  })
  .join("");

gallery.innerHTML += galleryHtml;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  gallery.onclick = () => {
    const imageSrc = event.target.dataset.source;
    basicLightbox.create(`<img src="${imageSrc}">`).show();
  };
});
