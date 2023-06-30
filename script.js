
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
}
// ========================================
//  welcome animation heading
// ========================================
const text = document.querySelector('.text2');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const animation2 = anime.timeline({
  targets: '.text2 span',
  easing: 'easeInOutExpo',
  loop: true,
});
animation2
  .add({
    rotate: function () {
      return anime.random(-360, 360);
    },
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    duration: 5000,
    delay: anime.stagger(20),
  })
  .add({
    rotate: 0,
    translateX: 0,
    translateY: 0,
    duration: 5000,
    delay: anime.stagger(20),
  });
  
////////////////////////////////para skill animation\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const text1 = document.querySelector('.text1');
text1.innerHTML = text1.textContent.replace(/\S/g, "<span>$&</span>");
const animation1 = anime.timeline({

  loop: true,
})

  .add({
    targets: '.text1 span',
    translateY: [-600, 0],
    scale: [10, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text1 span',
    translateX: [0, -1000],
    scale: [1, 1],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text1 span',
    translateX: [-1000, 0],
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text1 span',
    translateY: [0, -600],
    scale: [1, 10],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text1 span',
    translateY: [600, 0],
    scale: [10, 1],
    opacity: [0, 1],
    easing: "easeInExpo",
    duration: 1500,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text1 span',
    translateX: [0, 1000],
    scale: [1, 1],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1500,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text1 span',
    translateX: [1000, 0],
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeInExpo",
    duration: 1500,
    delay: anime.stagger(100),
  })

  .add({
    targets: '.text1 span',
    translateY: [0, 600],
    scale: [1, 10],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1500,
    delay: anime.stagger(100),
  })
//animated mouse cursor 
const $circle = $('.circle'),
 $follow = $('.circle-follow');

function moveCircle(e) {
TweenLite.to($circle, 0.3, {
  x: e.clientX,
  y: e.clientY
});
TweenLite.to($follow, 0.7, {
  x: e.clientX,
  y: e.clientY
});
}

$(window).on('mousemove', moveCircle);



