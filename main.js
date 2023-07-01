(()=>{"use strict";document.querySelector(".elements"),document.querySelector(".profile__edit-btn"),document.querySelector(".profile__add-btn"),document.querySelector(".popup_type_edit"),document.querySelector(".popup_type_add"),document.querySelectorAll(".popup__close"),document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelectorAll(".popup__form"),document.querySelector(".popup__input_info_name"),document.querySelector(".popup__input_info_about"),document.querySelector(".popup__form_type_edit");var e=document.querySelector(".popup__form_type_add"),t=(e.querySelector(".popup__input_place_name"),e.querySelector(".popup__input_img_link"),document.querySelector(".popup_type_photo"));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}t.querySelector(".popup__photo"),t.querySelector(".popup__caption"),document.querySelector("#card-template").content;var o=function(){function e(t,r,n,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=n,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardTemplate=o,this._userId=t,this._cardId=r.cardId,this._authorId=r.authorId,this._cardOpen=i._cardOpen,this._cardDelete=i.handleCardDelete,this._addLike=i.handleCardLike,this._removeLike=i.handleCardDeleteLike}var t,r;return t=e,(r=[{key:"_createCard",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".cards__item").cloneNode(!0)}},{key:"_likedCard",value:function(){var e=this;return this._likeArea.find((function(t){return t._id===e._userId}))}},{key:"_interactLike",value:function(){this._likedCard()?this._removeLike(this._cardId):this._addLike(this._cardId)}},{key:"deleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"renderCardLike",value:function(e){this._likeArea=e.likes,0===this._likeArea.length?this.likeSelector.textContent="":this.likeSelector.textContent=this._likeArea.length,this._likedCard()?this._likeBtn.classList.add("card__like_active"):this._likeBtn.classList.remove("card__like_active")}},{key:"renderCard",value:function(){return this._cardElement=this._createCard(),this._deleteIcon=this._cardElement.querySelector(".card__delete"),this._elementImages=this._cardElement.querySelector(".card__img"),this._elementName=this._cardElement.querySelector(".card__name"),this._likeBtn=this._cardElement.querySelector(".card__like"),this.likeSelector=this._cardElement.querySelector(".card__like-num"),this._elementName.textContent=this._cardName,this._elementImages.src=this._cardImage,this._elementImages.alt=this._cardName,this.renderCardLike(this._card),this._addEventHandlers(),this._cardElement}},{key:"_addEventHandlers",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){return e._interactLike()})),this._elementImages.addEventListener("click",(function(){return e._cardOpen(e._cardName,e._cardImage)})),this._userId===this._authorId?this._deleteIcon.addEventListener("click",(function(){return e._cardDelete(e,e._cardId)})):this._deleteIcon.remove()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var c=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._contanerSelector=r}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleOverlayClick=this._handleOverlayClick.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(){"Escape"===event.key&&this.close()}},{key:"_handleOverlayClick",value:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&this.close()}},{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupSelector.addEventListener("click",this._handleOverlayClick)}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},y.apply(this,arguments)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(o){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupPhoto=t._popupSelector.querySelector(".popup__photo"),t._popupCaption=t._popupSelector.querySelector(".popup__caption"),t}return t=a,(r=[{key:"open",value:function(e){y(h(a.prototype),"open",this).call(this),this._popupPhoto.src=e.link,this._popupPhoto.alt=e.name,this._popupCaption.textContent=e.name}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},b.apply(this,arguments)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(n);if(o){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._submitForm=t,r._form=r._popup.querySelector(".popup__form"),r._inputList=r._form.querySelectorAll(".popup__input"),r._saveBtn=r._form.querySelector(".popup__button"),r}return t=a,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){e[t.name]&&(t.value=e[t.name])}))}},{key:"close",value:function(){this._form.reset(),b(g(a.prototype),"close",this).call(this)}},{key:"SavingText",value:function(){this._saveBtn.textContent="Сохранение..."}},{key:"removeSavingText",value:function(){this._saveBtn.textContent=this._saveBtn}},{key:"setEventListeners",value:function(){var e=this;b(g(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}}])&&_(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}var j=function(){function e(t){var r=t.nameSelector,n=t.avatarSelector,o=t.aboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userAvatar=document.querySelector(n),this._userAbout=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{username:this._username.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){var t=e.username,r=e.about;this._username.textContent=t,this._userAbout.textContent=r}},{key:"setUserAvatar",value:function(e){this._avatarLink.src=e}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}var C=function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=r,this._headers=n}var t,r;return t=e,(r=[{key:"_answerFromServer",value:function(e){return e.ok?e.json():Promise.reject("Код ошибки: ".concat(e.status))}},{key:"sendUserData",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.username,about:e.about})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"sendAvatarData",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._answerFromServer(t)}))}},{key:"addCard",value:function(e){var t=e.title,r=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:r})}).then(this._answerFromServer(res))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._answerFromServer(res))}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._answerFromServer(res))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._answerFromServer(res))}},{key:"getInfoAboutUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._answerFromServer(res))}},{key:"changeInfoAboutUser",value:function(e){var t=e.name,r=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:r})}).then(this._answerFromServer(res))}},{key:"changeUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._answerFromServer(res))}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},T.apply(this,arguments)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(n);if(o){var r=A(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var r,n=t.confirmDeleting;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._submitBtn=r._popupSelector.querySelector(".popup__form"),r._confirmDeleting=n,r}return t=a,(r=[{key:"open",value:function(e,t){this._cardObject=e,this._cardId=t,T(A(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._submitBtn.addEventListener("submit",(function(t){t.preventDefault(),e._confirmDeleting(e._cardObject,e._cardId)})),T(A(a.prototype),"setEventListeners",this).call(this)}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D=new C({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"909736a2-d755-4350-99fb-d6f4431f5f44","Content-Type":"application/json"}}),x=new j({userNameSelector:".profile__name",userAboutSelector:".profile__about",userAvatarSelector:".profile__avatar"}),B=new R(".card__delete",{callbackNotice:function(e,t){D.deleteCard(t).then((function(){e.deleteCard(),B.close()})).catch((function(e){console.log("Ошибка, ".concat(e))}))}});B.setEventListeners();var N=function(e){var t=new o(userId,{cardId:e._id,authorId:e.owner._id},e,"#card-template",{handleCardOpen:function(e,t){popupCardOpen.open(e,t)},handleCardDelete:function(e,t){H.open(e,t)},handleCardLike:function(e){D.addLike(e).then((function(e){t.renderCardLike(e)})).catch((function(e){console.log("Ошибка, ".concat(e))}))},handleCardDeleteLike:function(e){apiConnect.deleteCardLike(e).then((function(e){t.renderCardLike(e)})).catch((function(e){console.log("Ошибка, ".concat(e))}))}});return t.renderCard()},F=new c({renderer:function(e){F.addItem(N(e))}},".elements");Promise.all([apiConnect.getUserData(),apiConnect.getInitialCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];userId=o._id,x.setUserInfo({username:o.name,about:o.about}),F.renderItems(i.reverse()),x.setUserAvatar(o.avatar)})).catch((function(e){console.log("Возникла глобальная ошибка, ".concat(e))})),new m(".popup_type_photo").setEventListeners();var H=new R(".popup_type_card_delete",{callbackConmfirmDeleting:function(e,t){D.deleteCard(t).then((function(){e.deleteCard(),H.close()})).catch((function(e){console.log("При удалении карточки возникла ошибка, ".concat(e))}))}});H.setEventListeners();var V=new k(".popup_type_edit",{callbackFormSubmit:function(e){V.SavingText(),D.sendUserData(e).then((function(e){x.setUserInfo({username:e.name,description:e.about}),V.close()})).catch((function(e){console.log("При редактировании профиля возникла ошибка, ".concat(e))})).finally((function(){V.removeSavingText()}))}});V.setEventListeners();var J=new k(".popup_type_add",{callbackFormSubmit:function(e){J.SavingText(),D.addCard({name:e.placename,link:e.placeimage}).then((function(e){F.addItem(N(e)),J.close()})).catch((function(e){console.log("При добавлении новой карточки возникла ошибка, ".concat(e))})).finally((function(){J.removeSavingText()}))}});J.setEventListeners()})();