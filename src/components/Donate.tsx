export const Donate = () => {
  return (
    <section className="donate" id="donate">
      <div className="container">
        <div className="donate__inner">
          <a
            href="https://send.monobank.ua/jar/3X8W3Dop9C"
            className="donate__link"
            target="_blank"
          >
            <img src="./img/QR.jpg" alt="qr" />
          </a>
          <p className="donate__text">
            Click on QR code or scan it to donate for our fond.
          </p>
        </div>
      </div>
    </section>
  );
}