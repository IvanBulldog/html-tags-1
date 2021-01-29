document.querySelector('.btn-sort-1')
 .addEventListener('click', () => showTabs(1) );

document.querySelector('.btn-sort-2')
 .addEventListener('click', () => showTabs(2) );

document.querySelector('.btn-sort-3')
 .addEventListener('click', () => showTabs(3) );

 document.querySelector('.btn-sort-4')
 .addEventListener('click', () => showTabs(4) );

 document.querySelector('.btn-sort-5')
 .addEventListener('click', () => showTabs(5) );
 
 function showTabs(num) {
    document.querySelectorAll('.button')
           .forEach( tab => tab.classList.remove('is-checked'));
   document
     .querySelector('.btn-sort-'+num)
     .classList.add('is-checked');
 }