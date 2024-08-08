import classNames from "classnames";
import { useState } from "react";
import { Button } from "react-bootstrap";


export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="/" className="header__logo">
            <img
              className="w-100 rounded-circle m-0 p-0"
              src="./img/logo.jpg"
              alt="logo"
            />
          </a>

          <nav className={classNames("header__nav", { active: isActive })}>
            <a
              href="#about"
              className="header__link"
              onClick={() => setIsActive(!isActive)}
            >
              Про нас
            </a>
            <a
              href="#projects"
              className="header__link"
              onClick={() => setIsActive(!isActive)}
            >
              Проекти
            </a>
            <a
              href="#report"
              className="header__link"
              onClick={() => setIsActive(!isActive)}
            >
              Фотозвіт
            </a>
            <a
              href="#contacts"
              className="header__link"
              onClick={() => setIsActive(!isActive)}
            >
              Контакти
            </a>
          </nav>

          <div className="header__buttons">
              <a
                href="https://send.monobank.ua/jar/3X8W3Dop9C"
                className="header__button"
              >
                <Button className="header__btn" variant="danger">
                  DONATE
                </Button>
              </a>
              <div
                onClick={() => setIsActive(!isActive)}
                className={classNames("header__burger", { active: isActive })}
              >
          </div>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
