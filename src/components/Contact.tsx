import { motion } from 'framer-motion';

const animation1 = (custom: number) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  },
});

const animation2 = (custom: number) => ({
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  },
});

export const Contact = () => {
  return (
    <section className="contact" id="contacts">
      <div className="container">
        <div className="contact__inner">
          <h3 className="section__title">Contacts &gt;</h3>

          <motion.div
            initial='hidden'
            whileInView='visible'
            className="contact__bottom"
          >
            <motion.a
              href="https://www.facebook.com/flameofvictoryy"
              className="contact__link"
              target="_blank"
              custom={1}
              variants={animation1(1)}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt="facebook"
                className="contact__link--image"
              />
              Facebook
            </motion.a>
            <motion.a
              href="https://www.instagram.com/flame.victory?igsh=cWdremRhM2t2Z2tz"
              className="contact__link"
              target="_blank"
              variants={animation2(1)}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="instagram"
                className="contact__link--image"
              />
              Instagram
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}