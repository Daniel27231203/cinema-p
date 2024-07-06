import React from "react";
import scss from "./Subscription.module.scss";
import { MdDoNotTouch, MdLocalMovies, MdPeopleAlt } from "react-icons/md";
import { IoCheckmarkDoneCircle, IoCloudOffline } from "react-icons/io5";
import { FaToggleOn } from "react-icons/fa";

const Subscription = () => {
  return (
    <div className={scss.Subscription}>
      <div className={scss.title}>
        <span>Illuminous+</span>
        <h4>Фильмы и сериалы по подписке Illuminous+</h4>
        <h5>Бесплатно до конца года</h5>
        <div className={scss.block}>
          <div className={scss.infoBlock}>
            <div className={scss.icon}>
              <span>
                <MdPeopleAlt />
              </span>
              <p>Одна подписка для всей семьи или друзей</p>
            </div>
            <div className={scss.icon}>
              <span>
                <IoCheckmarkDoneCircle />
              </span>
              <p>Максимальное качество</p>
            </div>{" "}
            <div className={scss.icon}>
              <span>
                <IoCloudOffline />
              </span>
              <p>Просмотр офлайн</p>
            </div>
          </div>
          <div className={scss.infoBlock}>
            <div className={scss.icon}>
              <span>
                <MdDoNotTouch />
              </span>
              <p>Никакой рекламы</p>
            </div>
            <div className={scss.icon}>
              <span>
                <MdLocalMovies />
              </span>
              <p>Каждый день найдётся, что посмотреть</p>
            </div>
            <div className={scss.icon}>
              <span>
                <FaToggleOn />
              </span>
              <p>Можно отключить в любой момент</p>
            </div>
          </div>
        </div>
      </div>
      <button>Попробовать бесплатно</button>
    </div>
  );
};

export default Subscription;
