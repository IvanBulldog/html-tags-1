document.querySelector('.btn-tab-1')
 .addEventListener('click', () => showTab(1) );

document.querySelector('.btn-tab-2')
 .addEventListener('click', () => showTab(2) );

document.querySelector('.btn-tab-3')
 .addEventListener('click', () => showTab(3) );
 
 function showTab(num) {
    document.querySelectorAll('.tablinks')
           .forEach( tab => tab.classList.remove('active'));
   document
     .querySelector('.btn-tab-'+num)
     .classList.add('active');

   document.querySelectorAll('.tab')
           .forEach( tab => tab.classList.add('hidden'));
   document
     .querySelector('.tab-'+num)
     .classList.remove('hidden');
 }