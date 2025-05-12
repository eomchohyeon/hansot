$(document).ready(function(){

    
$('.navi>li').mouseenter(function(){
    $('#menu_bg').stop().slideDown(500);
    $('.submenu').stop().slideDown(500);
  });
  $('.navi>li').mouseleave(function(){
    $('#menu_bg').stop().slideUp(500);
    $('.submenu').stop().slideUp(500);
  });

  //  슬라이드
  const images = document.querySelectorAll(".slider img");
      let currentIndex = 0;
      let slideInterval;
      const intervalTime = 3000; // 3초

      function updateSlide() {
        images.forEach((img, i) => {
          img.classList.remove("left", "center", "right", "hidden");

          const prevIndex = (currentIndex - 1 + images.length) % images.length;
          const nextIndex = (currentIndex + 1) % images.length;

          if (i === prevIndex) {
            img.classList.add("left");
          } else if (i === currentIndex) {
            img.classList.add("center");
          } else if (i === nextIndex) {
            img.classList.add("right");
          } else {
            img.classList.add("hidden");
          }
        });
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
        resetInterval();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide();
        resetInterval();
      }

      function startInterval() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }

      function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
      }

      // 초기 슬라이드 설정 및 자동 시작
      updateSlide();
      startInterval();
  // 슬라이드 끝

  const text = document.querySelectorAll('.box1-r p span');
  let index = 0;
  
  function typeEffect(element) {
    const textContent = element.textContent;
    element.textContent = '';
    let i = 0;
    const typing = setInterval(() => {
      if (i < textContent.length) {
        element.textContent += textContent.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 60);
  }
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        text.forEach(span => typeEffect(span));
      }
    });
  }, { threshold: 0.9 });
  
  document.querySelectorAll('.box1-r p span').forEach(span => observer.observe(span));

  
})