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

$('.ch-item').hover(function (){
  $('.ch-bg-item').addClass('off-screen');
  
},function(){
  $('.ch-bg-item').removeClass('off-screen')
});

$('.character-iceborg .m-next-ch').click(function (){
  $('.character-blackbug').addClass('active');
  $(this).parent('.ch-item').removeClass('active');
  $('.home-ch-bg').addClass('blackbug').removeClass('iceborg');
});

$('.character-blackbug .m-next-ch').click(function (){
  $('.character-sweet').addClass('active');
  $(this).parent('.ch-item').removeClass('active');
  $('.home-ch-bg').addClass('sweet').removeClass('blackbug');
});

$('.character-sweet .m-next-ch').click(function (){
  $('.character-twilight').addClass('active');
  $(this).parent('.ch-item').removeClass('active');
  $('.home-ch-bg').addClass('twilight').removeClass('sweet');
});

$('.character-twilight .m-next-ch').click(function (){
  $('.character-firecat').addClass('active');
  $(this).parent('.ch-item').removeClass('active');
  $('.home-ch-bg').addClass('firecat').removeClass('twilight');
});

$('.character-firecat .m-next-ch').click(function (){
  $('.character-iceborg').addClass('active');
  $(this).parent('.ch-item').removeClass('active');
  $('.home-ch-bg').addClass('iceborg').removeClass('firecat');
});