import{
  elements,
  btnEditProfile,
  btnAddPlace,
  popupEditProfile,
  popupAddPlace,
  btnClosePopup,
  profileName,
  profileAbout,
  popupForm,
  nameProfileInput,
  infoProfileInput,
  popupFormTypeEdit,
  popupFormTypePhoto,
  inputNewPlaceName,
  inputNewPlaceLink,
  popupPLace,
  popuPlacePhoto,
  popupPLaceFigure,
  cardTemplate,
  initialCards,
  formElements
} from './variables.js';

import Card from './card.js';
import Validate from './validate.js';

const popupFormTypePhotoValidate = new Validate(formElements, popupFormTypePhoto);
popupFormTypePhotoValidate.enableValidation();

const popupFormTypeEditValidate = new Validate(formElements, popupFormTypeEdit);
popupFormTypeEditValidate.enableValidation();

// Начальное построение карточки
initialCards.forEach((item)  =>{
  const card = new Card(item, '#card-template', handleOpenPopup);
  elements.append(card.generateCard());
});

// закртие попапа профиля  и Добавить добавление фото
popupFormTypePhoto.addEventListener('submit', event => {
  event.preventDefault();

  const newNamePlace = inputNewPlaceName.value;
  const newImgLinkPlace = inputNewPlaceLink.value;

  const card = new Card({name: newNamePlace, link: newImgLinkPlace}, '#card-template', handleOpenPopup);
  elements.prepend(card.generateCard());

  closePopup(popupAddPlace);
  popupFormTypePhoto.reset();
});



// закртие открытого попапа по клику или esc
// закртие открытого попапа
const closeOpenedPopup = () => {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
};

// закрытие на esc
const closeByEsc = (event) => {
  if(event.key === 'Escape'){
    closeOpenedPopup();
  }
};

// закрытие на клик не по форме или крестику
const closeByClick = (event) => {
  if(event.target.classList.contains('popup')){
    closeOpenedPopup();
  }
};

// открытие попап
const openPopup = (popup) =>{
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('mousedown', closeByClick);
};

const unvisibleErrors = (popup) =>{
  const errorsList = Array.from(popup.querySelectorAll('.popup__error_visible'));
  errorsList.forEach((errorItem) => {
    errorItem.classList.remove('popup__error_visible');
  });
};

// закрытие попап
const closePopup = function (popup){
  if (popup.classList.contains('popup_type_edit') || popup.classList.contains('popup_type_add')){
    unvisibleErrors(popup);
  }
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('mousedown', closeByClick);
};



// Начальное значение в попап редактирования при открытии
const putOldInfoProfile = () =>{
  nameProfileInput.value = profileName.textContent;
  infoProfileInput.value = profileAbout.textContent;
};

// Сохранение нового профиля
const saveNewProfile = () =>{
  profileName.textContent = nameProfileInput.value;
  profileAbout.textContent = infoProfileInput.value;
};

// Открыть попап картинки
function handleOpenPopup(name, link) {
  popuPlacePhoto.src = link;
  popuPlacePhoto.alt = name;
  popupPLaceFigure.textContent = name;
  openPopup(popupPLace);
}

// открытие попап
btnAddPlace.addEventListener('click', () => {
  popupFormTypePhotoValidate.deleteErrors();
  popupFormTypePhotoValidate.disabledBtn();
  openPopup(popupAddPlace);
});
btnEditProfile.addEventListener('click', () => {
  popupFormTypeEditValidate.deleteErrors();
  popupFormTypeEditValidate.disabledBtn();
  putOldInfoProfile();
  openPopup(popupEditProfile);
});

// закртие на крестик
btnClosePopup.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// сохранение и закртие попапа профиля
popupFormTypeEdit.addEventListener('submit', event =>{
  event.preventDefault();
  saveNewProfile();
  closePopup(popupEditProfile);
});
