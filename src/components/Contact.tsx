export const Contact = () => {
  return (
    <section className="contact" id="contacts">
      <div className="container">
        <div className="contact__inner">
          <h3 className="section__title">Contacts &gt;</h3>

          <div className="contact__bottom">
            <a
              href="https://www.facebook.com/flameofvictoryy"
              className="contact__link"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt="facebook"
                className="contact__link--image"
              />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/flame.victory?igsh=cWdremRhM2t2Z2tz"
              className="contact__link"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="instagram"
                className="contact__link--image"
              />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}