/*const   jsTriggers = document.querySelectorAll('.tablinks'),
        jsContents = document.querySelectorAll('.tabcontent');
jsTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        const   id = this.getAttribute('data-tab'),
                content = document.querySelector('.tabcontent[data-tab="'+id+'"]'),
                activeTrigger = document.querySelector('.tablinks.active'),
                activeContent = document.querySelector('.tabcontent.block');
        activeTrigger.classList.remove('active'); 
        trigger.classList.add('active');
        activeContent.classList.remove("block");
        content.classList.add("block");
   });
});*/

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