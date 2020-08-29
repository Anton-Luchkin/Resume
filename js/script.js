const techSkilsTouch = document.querySelector('.tech-skils');
const softSkilsTouch = document.querySelector('.soft-skils');
const projectsAssideTouch = document.querySelector('.projects-asside');
const worckExperienceAssideTouch = document.querySelector('.worck-experience-asside');
const educationAssideTouch = document.querySelector('.education-asside');


const techSkilsList = document.querySelector('.tech-skils__list');
const softSkilsList = document.querySelector('.soft-skils__list');
const projectslsList = document.querySelector('.projects-asside__list');
const worckExperiencelsList = document.querySelector('.worck-experience__list');
const educationAssidelsList = document.querySelector('.education-asside__list');


techSkilsTouch.addEventListener('click', touchTechSkilsList);
softSkilsTouch.addEventListener('click', touchSoftSkilsList);
projectsAssideTouch.addEventListener('click', touchProjectslsList);
worckExperienceAssideTouch.addEventListener('click', touchWorckExperiencelsList);
educationAssideTouch.addEventListener('click', touchEducationAssidelsList);


function touchTechSkilsList() {
   techSkilsList.classList.toggle('show-list');
}
function touchSoftSkilsList() {
   softSkilsList.classList.toggle('show-list');
}
function touchProjectslsList() {
   projectslsList.classList.toggle('show-list');
}
function touchWorckExperiencelsList() {
   worckExperiencelsList.classList.toggle('show-list');
}
function touchEducationAssidelsList() {
   educationAssidelsList.classList.toggle('show-list');
}