export const footerView = (language = 'UA') => `
      <div class="section__wrapper section__footer--wrapper">
        <article class="footer__content">
          <h5 class="footer__content-title">
            ${language === 'ua' ? 'Контакти' : 'Contacts'}
          </h5>

          <a
            href="https://www.google.com/maps/search/%D0%9A%D0%B8%D1%97%D0%B2,++%D0%B2%D1%83%D0%BB.+%D0%9C.+%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,+6+%D1%82%D0%B5%D0%BB.+278-13-57,+278-74-54+info@namu.kiev.ua/@50.4494274,30.5280756,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
            class="footer__link"
            target="_blank"
          >
          ${language === 'ua' ? 'Київ' : 'Kyiv'},
            <br />
            ${language === 'ua' ? 'вул. М. Грушевського, 6' : '6 M. Hrushevskoho St.'}

            <br />
            тел. 278-13-57, 278-74-54
          </a>

          <a
            href="mailto:info@namu.kiev.ua"
            class="footer__link"
            target="_blank"
          >
            info@namu.kiev.ua
          </a>

          <div class="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="icon icon-facebook icon-social footer__link--social"
            ></a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              class="icon icon-twitter icon-social footer__link--social"
            ></a>
            <a
              href="https://web.telegram.org/a/"
              target="_blank"
              class="icon icon-telegram icon-social footer__link--social"
            ></a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="icon icon-instagram icon-social footer__link--social"
            ></a>
          </div>
        </article>

        <article class="footer__content">
          <h5 class="footer__content-title">Розклад роботи</h5>
          <p class="footer__content-text">
            <span>ПН: вихідний</span>
            <span>ВТ: вихідний</span>
            <span>СР: 10:00 - 17:00</span>
            <span>ЧТ: 10:00 - 17:00</span>
            <span>ПТ: 12:00 - 19:00</span>
            <span>СБ: 11:00 - 18:00</span>
            <span>НД: 10:00 - 17:00</span>
          </p>
        </article>

        <article class="footer__content">
          <h5 class="footer__content-title">Головна</h5>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li>
                <a
                  class="footer__link"
                  href="#exhibitions"
                >
                  Виставки
                </a>
              </li>
              <li>
                <a
                  class="footer__link"
                  href="#events"
                >
                  Події
                </a>
              </li>
              <li>
                <a
                  class="footer__link"
                  href="#news"
                >
                  Новини
                </a>
              </li>
            </ul>
          </nav>
        </article>

        <div class="footer__terms">
          <div class="footer__terms-content">
            <span class="footer__term typography--additional">
              © 2010 — 2020
            </span>
            <span class="footer__term typography--additional">
              Privacy — Terms
            </span>
          </div>

          <a
            href="#"
            class="footer__link--up"
          >
            <span class="icon icon-scroll--up"></span>
          </a>
        </div>
      </div>`;
