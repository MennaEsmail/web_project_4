//cards
const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];


//edit profile button
const editProfile = document.querySelector(".button_edit")
editProfile.addEventListener("click", function () {
    //form popup
    const formTemplete = document.querySelector("#form-popup").content;
    const root = document.querySelector(".root");
    const formpoup = formTemplete.cloneNode(true);

    formpoup.querySelector(".form__title").textContent = 'Edit profile'
    formpoup.querySelector(".form__input_name").value = document.querySelector('.profile__name').innerHTML
    formpoup.querySelector(".form__input_name").placeholder = 'Name'
    formpoup.querySelector(".form__input_about").value = document.querySelector('.profile__about-me').innerHTML
    formpoup.querySelector(".form__input_about").placeholder = 'About me'
    formpoup.querySelector(".form__submit-button").textContent = 'Save'
    const editPopup = formpoup.querySelector(".popup")
    const closeEdit = formpoup.querySelector(".button_close")
    closeEdit.addEventListener("click", function (event) {
        event.preventDefault();
        editPopup.classList.toggle('popup_is-opened');
        editPopup.style.opacity = '0';
        setTimeout(function(){editPopup.parentNode.removeChild(editPopup);}, 1000)
    })
    const savebtn = formpoup.querySelector(".form__submit-button")
    savebtn.addEventListener("click", function (e) {
        e.preventDefault();
        const showenForm = document.querySelector(".popup");
        let name = showenForm.querySelector('.form__input_name');
        let about = showenForm.querySelector('.form__input_about');
        let profileName = document.querySelector('.profile__name');
        let profileAboutMe = document.querySelector('.profile__about-me');

        profileName.textContent = name.value;
        profileAboutMe.textContent = about.value;
        showenForm.classList.toggle('popup_is-opened');
        showenForm.style.opacity = '0';
        setTimeout(function(){showenForm.parentNode.removeChild(showenForm);}, 1000)
        })

    root.append(formpoup)
})


//add new card 
const addCard = document.querySelector('.button_add')
addCard.addEventListener("click", function () {
    const addCardTemplete = document.querySelector("#form-popup").content;
    const root = document.querySelector(".root");
    const addCardForm = addCardTemplete.cloneNode(true);

    addCardForm.querySelector(".form__title").textContent = 'New place'
    addCardForm.querySelector(".form__input_name").placeholder = 'title'
    addCardForm.querySelector(".form__input_about").placeholder = 'url'
    addCardForm.querySelector(".form__submit-button").textContent = 'Save'
    const editPopup = addCardForm.querySelector(".popup")
    const closeEdit = addCardForm.querySelector(".button_close")
    closeEdit.addEventListener("click", function (event) {
        event.preventDefault();
        editPopup.classList.toggle('popup_is-opened');

        editPopup.style.opacity = '0';
        setTimeout(function(){editPopup.parentNode.removeChild(editPopup);}, 1000)
    })

    const savebtn = addCardForm.querySelector(".form__submit-button")
    savebtn.addEventListener("click", function (e) {
        e.preventDefault();
        const showenForm = document.querySelector(".popup");
        let title = showenForm.querySelector('.form__input_name');
        let url = showenForm.querySelector('.form__input_about');

        const cardTemplate = document.querySelector("#element_card").content;
        const cardList = document.querySelector(".elements__list");
        const cardElement = cardTemplate.cloneNode(true);
        cardElement.querySelector(".elements__image").style.backgroundImage = `url('${url.value}')`;
        cardElement.querySelector(".elements__title").textContent = title.value;

        
        //like button
        const likebtn = cardElement.querySelector(".button_like")
        likebtn.addEventListener("click", function () {
            likebtn.classList.toggle('button_like-active')
            event.stopPropagation();
        })
        
        //delete button
        const deleteBtn = cardElement.querySelector(".button_delete")
        deleteBtn.addEventListener("click", function () {
            deleteBtn.parentElement.remove()
            event.stopPropagation();
        })
        cardList.prepend(cardElement)
        
        showenForm.classList.toggle('popup_is-opened');
        showenForm.style.opacity = '0';
        setTimeout(function(){showenForm.parentNode.removeChild(showenForm);}, 1000)
    })
    root.append(addCardForm)
})

const addPlace = function (cardImage, cardTitle) {
    const cardTemplate = document.querySelector("#element_card").content;
    const cardList = document.querySelector(".elements__list");
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector(".elements__image").style.backgroundImage = `url('${cardImage}')`;
    cardElement.querySelector(".elements__title").textContent = cardTitle;

    //like button
    const likebtn = cardElement.querySelector(".button_like")
    likebtn.addEventListener("click", function () {
        likebtn.classList.toggle('button_like-active')
        event.stopPropagation();
    })

    //delete button
    const deleteBtn = cardElement.querySelector(".button_delete")
    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentElement.remove()
        event.stopPropagation();
    })

    //image  view 
    const card = cardElement.querySelector(".elements__item")
    card.addEventListener("click", function () {
        const galaryTemplete = document.querySelector("#galary").content;
        const root = document.querySelector(".root");
        const galeryElement = galaryTemplete.cloneNode(true);

        galeryElement.querySelector(".galary-holder__image").src = `${cardImage}`;
        galeryElement.querySelector(".galary-holder__paragraph").textContent = cardTitle;
        const galaryPopup = galeryElement.querySelector(".popup")
        const closegalery = galeryElement.querySelector(".button_close")
        closegalery.addEventListener("click", function () {
            galaryPopup.classList.toggle('popup_is-opened');
        })
        root.append(galeryElement)

    })

    cardList.append(cardElement)
}



function InitCardsList() {
    initialCards.forEach(card => {
        addPlace(card.link, card.name)
    })
}

InitCardsList()
