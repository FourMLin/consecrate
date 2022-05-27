// window.onload = () => {
//     const anchors = document.querySelectorAll('a');
//     const transition_el = document.querySelector('.transition');
  
//     setTimeout(() => {
//       transition_el.classList.remove('is-active');
//     }, 500);
  
//     for (let i = 0; i < anchors.length; i++) {
//       const anchor = anchors[i];
  
//       anchor.addEventListener('click', e => {
//         e.preventDefault();
//         let target = e.target.href;
  
//         console.log(transition_el);
  
//         transition_el.classList.add('is-active');
  
//         console.log(transition_el);
  
//         setInterval(() => {
//           window.location.href = target;
//         }, 500);
//       })
//     }
// }


$('.name-story').click(function (){
  $('.story-page').addClass('active')
});

$('.close').click(function (){
  $('.story-page').removeClass('active')
});

$('.l-btn').click(function (){
  $('.story-text').addClass('font-l').removeClass('font-m font-s')
});

$('.m-btn').click(function (){
  $('.story-text').addClass('font-m').removeClass('font-s font-l')
});

$('.s-btn').click(function (){
  $('.story-text').addClass('font-s').removeClass('font-m font-l')
});