//handle pupup show and hide
const popup = document.querySelector('.popup');
let editBtn = document.querySelector('.button_edit');
let closeBtn = document.querySelector('.button_close');
function showpopup(){
    popup.classList.toggle('popup_is-opened');
}
editBtn.addEventListener("click", showpopup);
closeBtn.addEventListener("click", showpopup);

//edit profile
let form = document.querySelector('.form');

function onSubmit(event){

    event.preventDefault(); 
    let name = form.querySelector('.form__input_name');
    let about = form.querySelector('.form__input_about');
    let profileName = document.querySelector('.profile__name');
    let profileAboutMe = document.querySelector('.profile__about-me');

    nameValue= name.value;
    aboutMeValue= about.value;
    profileName.textContent = nameValue;
    profileAboutMe.textContent = aboutMeValue;
    popup.classList.add('popup_is-opened');

}
form.addEventListener('submit', onSubmit); 

