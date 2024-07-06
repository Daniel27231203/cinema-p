import scss from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const navValues = [
    {
      path: "/",
      link: "Главная",
    },
    {
      path: "/movies",
      link: "Фильмы",
    },
    {
      path: "/serial",
      link: "Сериалы",
    },
    {
      path: "/cartoon",
      link: "Мультфильмы",
    },
  ];

  return (
    <>
      <header>
        <div className="container">
          <div className={scss.Header}>
            <div className={scss.nav}>
              <div className={scss.logo}>
                <h2>Movie</h2>
              </div>
              <nav>
                {navValues.map((el, ind) => (
                  <NavLink to={el.path} key={ind}>
                    {el.link}
                  </NavLink>
                ))}
              </nav>
            </div>
            <Link className={scss.user}>
              <FaRegUserCircle />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
