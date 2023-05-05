import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryHtml = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}"/>
      </a>
  `;
  })
  .join("");

gallery.innerHTML += galleryHtml;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  let newLightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: "250",
  });
});
