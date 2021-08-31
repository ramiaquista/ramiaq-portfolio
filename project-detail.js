const popupDetails = document.querySelector('.popup-details');
const projectBtn = document.querySelectorAll('.project-btn');

const project1 = {
    name: 'Tonic',
    workDetail: {
        subtitle: 'CANOPY',
        section: 'Back End Dev',
        date: 2015
    },
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'svg/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://www.linkedin.com/in/ramiro-aquistapace-32b61b204/',
    source: 'https://www.linkedin.com/in/ramiro-aquistapace-32b61b204/',
};

const project2 = {
    name: 'Multi Post Stories',
    workDetails: {
        subtitle: 'CANOPY',
        section: 'Back End Dev',
        date: 2015
    },
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'svg/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://www.linkedin.com/in/ramiro-aquistapace-32b61b204/',
    source: 'https://www.linkedin.com/in/ramiro-aquistapace-32b61b204/',
};

const project3 = {
    name: 'Multi Post Stories',
    workDetails: {
        subtitle: 'CANOPY',
        section: 'Back End Dev',
        date: 2015
    },
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'svg/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://www.linkedin.com/in/ramiro-aquistapace-32b61b204/',
    source: 'https://www.linkedin.com/in/ramiro-aquistapace-32b61b204/',
};

const project4 = {
    name: 'Multi Post Stories',
    workDetails: {
        subtitle: 'CANOPY',
        section: 'Back End Dev',
        date: 2015
    },
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'svg/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://www.linkedin.com/in/ramiro-aquistapace-32b61b204/',
    source: 'https://www.linkedin.com/in/ramiro-aquistapace-32b61b204/',
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
            li.className = "popup-tech-item";
            li.innerHTML = tech;
            popupTechs.appendChild(li);
        })        
    });
});