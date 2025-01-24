// 'use strict';

// import { footerView } from './components/Footer.js';

// const FOOTER = document.querySelector('#footer');
// const LANGUAGE_BUTTON = document.querySelectorAll('.switch-language');

// FOOTER.innerHTML = footerView();

// class LanguageCWitcher {
//   constructor() {
//     const language = JSON.parse(localStorage.getItem('language'));

//     this.language = language ? language : 'ua';

//     LANGUAGE_BUTTON.forEach((button) => {
//       button.onclick = this.handleToogleLanguage;
//     });
//   }

//   handleToogleLanguage = (event) => {
//     this.language = this.language == 'ua' ? 'en' : 'ua';

//     event.target.innerHTML = `
//        ${this.language.toUpperCase()}
//       <span class="icon menu__icon-dropdown icon-dropdown"></span>
//     `;

//     localStorage.setItem('language', JSON.stringify(this.language));
//   };

//   changeView() {
//     FOOTER.innerHTML = footerView(this.language);
//   }
// }

// new LanguageCWitcher();
