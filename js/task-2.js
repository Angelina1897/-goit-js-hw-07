const galleryItems = [
  {
    url: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image 1',
  },
  {
    url: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image 2',
  },
  {
    url: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image 3',
  }
];
const galleryList = document.querySelector('ul.gallery');
const galleryMarkup = galleryItems
  .map(({ url, alt }) => {
    return `
      <li>
        <img src="${url}" alt="${alt}" />
      </li>`;
  })
  .join('');

galleryList.innerHTML = galleryMarkup;
