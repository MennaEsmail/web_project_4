//handle pupup show and hide
let popup = document.querySelector('.popup');
let editBtn = document.querySelector('.edit-button');
let closeBtn = document.querySelector('.close-icon');
function showpopup(){
    popup.classList.remove('popup__hide');
    popup.classList.add('popup__show');
}
editBtn.addEventListener("click", showpopup);

function hidepopup(){
    popup.classList.add('popup__hide');
    popup.classList.remove('popup__show');
}
closeBtn.addEventListener("click", hidepopup);

//edit profile
let form = document.querySelector('.form');

function onSubmit(event){

    event.preventDefault(); 
    let name = form.querySelector('.name');
    let aboutMe = form.querySelector('.about-me');
    let profileName = document.querySelector('.profile__name');
    let profileAboutMe = document.querySelector('.profile__about-me');

    nameValue= name.value;
    aboutMeValue= aboutMe.value;
    profileName.textContent = nameValue;
    profileAboutMe.textContent = aboutMeValue;
    popup.classList.add('popup__hide');
    popup.classList.remove('popup__show');

}
form.addEventListener('submit', onSubmit);