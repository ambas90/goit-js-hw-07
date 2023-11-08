import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// tworzenie elementów galerii
const markup = galleryItems
  .map(
    (image) => `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</li>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", markup);

const galleryImages = document.querySelectorAll(".gallery__item");

new SimpleLightbox(galleryImages, {
  captionData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
