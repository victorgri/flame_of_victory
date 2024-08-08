import { motion } from "framer-motion";

const animation1 = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const animation2 = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export const About = () => {
  const viewWidth = window.innerWidth;
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <h3 className="section__title">About &gt;</h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            className="about__bottom"
          >
            <motion.img
              className="about__img"
              variants={animation1}
              src="./img/fond-about.jpg"
              alt="photo"
              style={viewWidth > 768 ? { width: "600px" } : { width: "100%" }}
            />
            <motion.div variants={animation2} className="about__info">
              <h1 className="about__title">Про нас</h1>
              <p className="about__text">
                Вогонь перемоги — український благодійний фонд. Наша діяльність
                спрямована на реалізацію дій, що призводять до соціального,
                економічного та духовного покращення стану обʼєднаних
                територіальних громад правобережної частини Херсонської області.
                <br/>
                Наша місія — допомога громадянам на пошкоджених територіях
                Херсонської області. Залучення ресурсів і організація зборів для
                медиків та цивільного населення. Відбудова зруйнованих будівель.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
