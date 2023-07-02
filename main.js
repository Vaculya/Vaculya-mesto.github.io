(()=>{"use strict";document.querySelector(".elements"),document.querySelector(".profile__edit-btn"),document.querySelector(".profile__add-btn"),document.querySelector(".popup_type_edit"),document.querySelector(".popup_type_add"),document.querySelectorAll(".popup__close"),document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelectorAll(".popup__form"),document.querySelector(".popup__input_info_name"),document.querySelector(".popup__input_info_about"),document.querySelector(".popup__form_type_edit");var e=document.querySelector(".popup__form_type_add"),t=(e.querySelector(".popup__input_place_name"),e.querySelector(".popup__input_img_link"),document.querySelector(".popup_type_photo"));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function o(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}t.querySelector(".popup__photo"),t.querySelector(".popup__caption"),document.querySelector("#card-template").content;var i=function(){function e(t,r,n,i,c){var a,u,l,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,l=function(){s._cardElementLike.addEventListener("click",(function(){return s._Like()})),s._cardElementImg.addEventListener("click",(function(){return s._cardOpen(s._cardName,s._cardImage)})),s._userId===s._authorId?s._cardElementDeleteBtn.addEventListener("click",(function(){return s._cardDelete(s,s._cardId)})):s._cardElementDeleteBtn.remove()},(u=o(u="_setEventListenners"))in a?Object.defineProperty(a,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[u]=l,this._userId=n,this._cardId=i.cardId,this._authorId=i.authorId,this._card=t,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardTemplate=r,this._cardOpen=c.handleCardOpen,this._cardDelete=c.handleCardDelete,this._putLike=c.handleCardLike,this._removeLike=c.handleCardDeleteLike}var t,r;return t=e,(r=[{key:"_cardClone",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"_isCardLiked",value:function(){var e=this;return this._likeNum.find((function(t){return t._id===e._userId}))}},{key:"_Like",value:function(){this._isCardLiked()?this._removeLike(this._cardId):this._putLike(this._cardId)}},{key:"renderCard",value:function(){return this._cardElement=this._cardClone(),this._cardElementDeleteBtn=this._cardElement.querySelector(".card__delete"),this._cardElementImg=this._cardElement.querySelector(".card__img"),this._cardElementName=this._cardElement.querySelector(".card__name"),this._cardElementLike=this._cardElement.querySelector(".card__like"),this.numOfLikes=this._cardElement.querySelector(".card__like-num"),console.log(this._cardName),this._cardElementName.textContent=this._cardName,this._cardElementImg.src=this._cardImage,this._cardElementImg.alt=this._cardName,this.likeCard(this._card),this._setEventListenners(),this._cardElement}},{key:"cardDelete",value:function(){this._card.remove(),this._card=null}},{key:"likeCard",value:function(e){this._likeNum=e.likes,0===this._likeNum.length?this.numOfLikes.textContent="":this.numOfLikes.textContent=this._likeNum.length,this._isCardLiked()?this._cardElementLike.classList.add("cards__like_active"):this._cardElementLike.classList.remove("cards__like_active")}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var u=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleOverlayClick=this._handleOverlayClick.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(){"Escape"===event.key&&this.close()}},{key:"_handleOverlayClick",value:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&this.close()}},{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupSelector.addEventListener("click",this._handleOverlayClick)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},y.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(n);if(o){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupDescription=t._popupSelector.querySelector(".popup__caption"),t._popupImage=t._popupSelector.querySelector(".popup__photo"),t}return t=c,(r=[{key:"open",value:function(e,t){this._popupDescription.textContent=e,this._popupImage.src=t,this._popupImage.alt=e,y(m(c.prototype),"open",this).call(this)}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(f);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var S=function(){function e(t){var r=t.userInfoName,n=t.userInfoAbout,o=t.userInfoAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userAbout=document.querySelector(n),this._userAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{username:this._userName.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userAbout;this._userName.textContent=t,this._userAbout.textContent=r}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}var w=function(){function e(t){var r=t.link,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=r,this._headers=n}var t,r;return t=e,(r=[{key:"_getAnswerFromServer",value:function(e){return e.ok?e.json():Promise.reject("код ошибки: ".concat(e.status))}},{key:"getCardFromServer",value:function(){var e=this;return fetch("".concat(this._link,"/cards"),{headers:this._headers}).then((function(t){return e._getAnswerFromServer(t)}))}},{key:"addCardToServer",value:function(e){var t=this,r=e.name,n=e.link;return fetch("".concat(this._link,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:r,link:n})}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._link,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._link,"/users/me"),{headers:this._headers}).then((function(t){return e._getAnswerFromServer(t)}))}},{key:"sendUserData",value:function(e){var t=this;return fetch("".concat(this._link,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.username,about:e.about})}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"sendUserAvatar",value:function(e){var t=this;return fetch("".concat(this._link,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"sendLikeCard",value:function(e){var t=this;return fetch("".concat(this._link,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"removeLikeCard",value:function(e){var t=this;return fetch("".concat(this._link,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(e){return t._getAnswerFromServer(e)}))}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},j.apply(this,arguments)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(c,e);var t,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(n);if(o){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(e,t){var r,n=t.callbackComfirm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,e))._submitBtn=r._popupSelector.querySelector(".popup__form"),r._callbackComfirm=n,r}return t=c,(r=[{key:"open",value:function(e,t){this._cardObject=e,this._cardId=t,j(P(c.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._submitBtn.addEventListener("submit",(function(t){t.preventDefault(),e._callbackComfirm(e._cardObject,e._cardId)})),j(P(c.prototype),"setEventListeners",this).call(this)}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(f);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var q,A=new w({link:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"909736a2-d755-4350-99fb-d6f4431f5f44","Content-Type":"application/json"}}),T=new S({userInfoName:".profile__name",userInfoAbout:".profile__about",userInfoAvatar:".profile__avatar"}),D=new _(".popup_type_photo");D.setEventListeners();var N=new L(".popup_type_card_delete",{callbackComfirm:function(e,t){A.deleteCard(t).then((function(){e.deleteCard(),N.close()})).catch((function(e){console.log("При удалении карточки возникла ошибка, ".concat(e))}))}});N.setEventListeners();var R=new u({renderer:function(e){R.addItem(function(e){var t=new i(e,"#card-template",q,{cardId:e._id,authorId:e.owner._id},{handleCardOpen:function(e,t){D.open(e,t)},handleCardDelete:function(e,t){N.open(e,t)},handleCardLike:function(e){A.sendLikeCard(e).then((function(e){t.likeCard(e)})).catch((function(e){console.log("Лайк неудался. Ошибка: ".concat(e))}))},handleCardDeleteLike:function(e){apiConnect.deleteCardLike(e).then((function(e){t.likeCard(e)})).catch((function(e){console.log("Убрать лайк не получилось. Ошибка: ".concat(e))}))}});return t.renderCard()}(e))}},".elements");Promise.all([A.getUserData(),A.getCardFromServer()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,a=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];q=o._id,T.setUserInfo({userName:o.name,userAbout:o.about}),R.renderItems(i.reverse()),T.setUserAvatar(o.avatar)})).catch((function(e){console.log("Возникла глобальная ошибка, ".concat(e))})),fetch("https://nomoreparties.co/v1/cohort-69/cards",{headers:{authorization:"909736a2-d755-4350-99fb-d6f4431f5f44","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))})();