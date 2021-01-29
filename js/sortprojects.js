document.querySelector('.btn-sort-1')
 .addEventListener('click', () => showTabContent() );

document.querySelector('.btn-sort-2')
 .addEventListener('click', () => showTabContent('design') );

document.querySelector('.btn-sort-3')
 .addEventListener('click', () => showTabContent('development') );

 document.querySelector('.btn-sort-4')
 .addEventListener('click', () => showTabContent('marketing') );

 document.querySelector('.btn-sort-5')
 .addEventListener('click', () => showTabContent('seo') );

const tabData = [
  {
    categories: ['development'],
    src: 'img/project-1.jpg',
    alt: 'project 1'
  },
  {
    categories: ['development'],
    src: 'img/project-2.jpg',
    alt: 'project 2'
  },
  {
    categories: ['design', 'development', 'marketing'],
    src: 'img/project-3.jpg',
    alt: 'project 3'
  },
  {
    categories: ['design', 'development', 'marketing'],
    src: 'img/project-4.jpg',
    alt: 'project 4'
  },
  {
    categories: ['design', 'development', 'marketing', 'seo'],
    src: 'img/project-5.jpg',
    alt: 'project 5'
  },
  {
    categories: ['design', 'marketing', 'seo'],
    src: 'img/project-6.jpg',
    alt: 'project 6'
  },
  {
    categories: ['design', 'marketing'],
    src: 'img/project-7.jpg',
    alt: 'project 7'
  },
  {
    categories: ['design', 'marketing'],
    src: 'img/project-8.jpg',
    alt: 'project 8'
  }
]

 function showTabContent(category) {

   const imagesToShow = 
        category ? tabData.filter( el => el.categories.includes(category)) 
        : tabData;
   const imagesContainer = document.querySelector('.sort-container');
   imagesContainer.innerHTML = ''; 
   for (const image of imagesToShow) {
     imagesContainer.innerHTML += `<div class="project-list-image"><img src=${image.src} alt=${image.alt}></div>`;
   } 
 }

 showTabContent();