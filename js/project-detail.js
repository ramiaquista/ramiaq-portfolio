const popupDetails = document.querySelector('.popup-details');
const projectBtn = document.querySelectorAll('.project-btn');

const project1 = {
  name: 'E3 Website',
  workDetails: {
    subtitle: 'Conferences',
    section: 'Full Stack',
    date: 2021,
  },
  description:
    'Its an informative page to announce the next E3 ( Electronic Entertainment Exposition ), the biggest gaming event that will take place in Los Angeles Convention Center on 2022.',
  image: 'img/e3-popup-img.png',
  technologies: ['html', 'css', 'javascript'],
  live: 'https://ramiaquista.github.io/conference-website/',
  source: 'https://github.com/ramiaquista/conference-website',
};

const project2 = {
  name: 'Monesy',
  workDetails: {
    subtitle: 'Budget App',
    section: 'Full-Stack Dev',
    date: 2022,
  },
  description:
    "A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
  image: '../monesy-bg.png',
  technologies: ['css', 'Rails', 'PostgreSQL'],
  live: 'https://monesy-budget.herokuapp.com/',
  source: 'https://github.com/ramiaquista/budget-app',
};

const project3 = {
  name: 'Recipe App',
  workDetails: {
    subtitle: 'Recipe RoR App',
    section: 'Full-Stack Dev',
    date: 2022,
  },
  description:
    "A Recipe List Application that allows user registration, creates recipes with already created (and available) foods and shows a customized shopping list based on necessary but unavailable food from the recipe.",
  image: '../recipe-app-img.png',
  technologies: ['css', 'Rails', 'PostgreSQL'],
  live: 'https://recipe-app-lfmn.herokuapp.com/',
  source: 'https://github.com/ramiaquista/recipe-app',
};

const project4 = {
  name: 'Crypto Metrics',
  workDetails: {
    subtitle: 'Crypto Currencies',
    section: 'Full-Stack Dev',
    date: 2022,
  },
  description:
    "In this project, I have build a mobile web application to check a list of metrics (numeric values) that I have created making use of React and Redux",
  image: '../crypto-app-image.png',
  technologies: ['React', 'Redux', 'Bootstrap'],
  live: 'https://crypto-metrics.netlify.app/',
  source: 'https://github.com/ramiaquista/crypto-metrics',
};

const projects = [project1, project2, project3, project4];

const popupTitle = document.querySelector('.popup-title');
const popupWorkDetail = document.querySelector('.popup-work-subtitle');
const popupWorkRole = document.querySelector('.popup-work-role');
const popupWorkDate = document.querySelector('.popup-work-date');
const popupImg = document.querySelector('.popup-image');
const popupDesc = document.querySelector('.popup-description');
const popupTechs = document.querySelector('.popup-technologies');
const popupLiveBtn = document.querySelector('.btn-live');
const popupSourceBtn = document.querySelector('.btn-source');

projectBtn.forEach((item, i) => {
  item.addEventListener('click', () => {
    popupDetails.classList.remove('d-none');
    popupTitle.innerHTML = projects[i].name;
    popupWorkDetail.innerHTML = projects[i].workDetails.subtitle;
    popupWorkRole.innerHTML = projects[i].workDetails.section;
    popupWorkDate.innerHTML = projects[i].workDetails.date;
    popupImg.src = projects[i].image;
    popupDesc.innerHTML = projects[i].description;
    projects[i].technologies.forEach((tech) => {
      const li = document.createElement('li');
      li.className = 'popup-tech-item';
      li.innerHTML = tech;
      popupTechs.appendChild(li);
    });
    popupLiveBtn.addEventListener('click', () => {
      window.location.href = projects[i].live;
    });
    popupSourceBtn.addEventListener('click', () => {
      window.location.href = projects[i].source;
    });
    document.body.style.overflow = 'hidden';
  });
});

const cancelProjectButton = document.getElementById('popup-cancel-icon');

cancelProjectButton.addEventListener('click', () => {
  popupDetails.classList.add('d-none');
  document.querySelectorAll('.popup-tech-item').forEach((item) => {
    popupTechs.removeChild(item);
  });
  document.body.style.overflow = 'auto';
});
