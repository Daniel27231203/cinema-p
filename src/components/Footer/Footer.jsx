import React from "react";
import scss from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footerCard}>
            <h1>Iluminous</h1>
            <p>О нас</p>
            <p>Блог</p>
            <p>Вакансии</p>
            <p>Акции</p>
          </div>
          <div className={scss.footerCard}>
            <h1>Помощь</h1>
            <p>Вопросы и ответы</p>
            <p>Список устройств</p>
            <p>Дистрибьютерам</p>
            <p>Контакты</p>
          </div>
          <div className={scss.footerCard}>
            <h1>Поддержка</h1>
            <p>Мы всегда готовы вам помочь.</p>
            <p>Наши операторы онлайн 24/7</p>
            <div className={scss.footerCardIcons}>
              <Link>
                <FaPhone />
              </Link>
              <Link>
                <TfiEmail />
              </Link>
              <Link>
                <FaTelegramPlane />
              </Link>
            </div>
            <button>Написать в чате</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
