
let projectsHTML = '';
//accessing the html:
projects.forEach((project, index) => {
  let projectHTML = `
    <div class="project-wrapper">
      <div class="project-box-1" id="project-box-${index}">
        <img class="background-image" src="${project.background}">
        <img class="image-1" src="${project.image}">
      </div>
      <div class="project-box-1-1">
        <div class="title" id="title-${index}">${project.name}</div> 
        <div class="languages"> 
          <div class="html">${project.language1}</div> 
          <div class="js">${project.language2}</div> 
          <div class="css">${project.language3}</div> 
        </div> 
        <div class="description">
          ${project.description}
        </div> 
      </div>
    </div>
  `;

  projectsHTML += projectHTML;
});

document.querySelector('.js-projects-grid').innerHTML = projectsHTML;

projects.forEach((project, index) => {
  let projectBox = document.querySelector(`#project-box-${index}`);
  let title = document.querySelector(`#title-${index}`);

  projectBox.addEventListener('click', () => {
    window.open(project.website,'_blank');
  });

  title.addEventListener('click', () =>{
    window.open(project.website,'_blank');
  });
});



var githubLink = document.querySelector('.github-link');

githubLink.addEventListener('click',() =>{
  window.open('https://github.com/wwriter26','_blank');
});


