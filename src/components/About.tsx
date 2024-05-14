import { motion } from 'framer-motion';

const animation1 = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5 }
  }
}

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
            initial='hidden'
            whileInView='visible'
            className="about__bottom"
          >
            <motion.img
              className="about__img"
              variants={animation1}
              src="./img/fond-about.jpg"
              alt="photo"
              style={viewWidth > 768 ? { width: '600px'} : {width: '100%'}}
            />
            <motion.div variants={animation2} className="about__info">
              <h1 className="about__title">Who we are?</h1>
              <p className="about__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam a perferendis neque aperiam dicta minima quo
                voluptate deleniti dolor, dignissimos earum, tempore maxime
                sunt? Impedit distinctio nisi obcaecati ullam recusandae facilis
                excepturi quos corrupti? Dolores maxime non iusto eum enim
                expedita perferendis. Aliquid iusto quis sit fugiat modi dolorum
                harum dolore, aspernatur optio incidunt nostrum sunt, eos magnam
                reiciendis fugit non adipisci blanditiis! Soluta, doloribus in,
                aperiam debitis temporibus deleniti delectus, quia iste velit
                sed quo non odio. Deserunt nisi voluptates animi nostrum.
                Pariatur ut reprehenderit dolorum itaque impedit sunt accusamus,
                commodi, placeat numquam sequi tempora eius alias incidunt
                quisquam.{" "}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}