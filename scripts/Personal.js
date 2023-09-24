const sliders1_3 = document.querySelectorAll('.slider1-3');

sliders1_3.forEach(slider => {
  const content = slider.querySelector('.content');

  slider.addEventListener('mouseover', () => {
    content.style.left = '0';
  });

  slider.addEventListener('mouseout', () => {
    content.style.left = '-100%';
  });
});

var githubLink = document.querySelector('.github-link');
