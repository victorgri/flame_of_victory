import { Button } from "react-bootstrap";


export const Header = () => {


  return (
    <header className="header">
      <div className="container">
        <div className="header__inner d-flex justify-content-between align-items-center p-3">
          <a href="/" className="header__logo">
            <img
              className="w-100 rounded-circle m-0 p-0"
              src="./img/logo.jpg"
              alt="logo"
            />
          </a>
          <nav className="header__nav d-flex gap-3">
            <a href="#about" className="header__link">
              About
            </a>
            <a href="#projects" className="header__link">
              Projects
            </a>
            <a href="#report" className="header__link">
              Photo Reports
            </a>
            <a href="#contacts" className="header__link">
              Contact us
            </a>
          </nav>

          <a href="#donate" className="header__button">
            <Button variant="danger">DONATE</Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header
