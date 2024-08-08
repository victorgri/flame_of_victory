import { motion } from "framer-motion";
import { Card } from "react-bootstrap";

const animation2 = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="projects__inner"
        >
          <h3 className="section__title">Projects &gt;</h3>

          <motion.div variants={animation2} className="projects__cards">
            <Card className="projects__card">
              <Card.Img variant="top" src="./img/proj1.jpg" />
              <Card.Body>
                <Card.Title>Співпраця з закладами освіти</Card.Title>
                <Card.Text>
                  Створення мережі громадських та молодіжних організацій, освіти
                  та дозвілля. Відновлення фізичного та психологічного стану
                  людей правобережної Херсонщини
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="projects__card">
              <Card.Img variant="top" src="./img/proj2.jpg" />
              <Card.Body>
                <Card.Title>Реконструкція будівель</Card.Title>
                <Card.Text>
                  Відбудова інфраструктури, приватних зруйнованих будинків,
                  відновлення господарської спроможності селян
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="projects__card">
              <Card.Img variant="top" src="./img/proj3.jpg" />
              <Card.Body>
                <Card.Title>
                  Взаємодія з закордонними благодійними фондами
                </Card.Title>
                <Card.Text>
                  Спільна праця над відновленням та покращенням основних сфер
                  життя мешканців Херсонської області
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="projects__card">
              <Card.Img variant="top" src="./img/proj3.jpg" />
              <Card.Body>
                <Card.Title>
                  Гуманітарна допомога мешканцям пошкоджених міст
                </Card.Title>
                <Card.Text>
                  Ліки, вода, хліб, продукти та речі першої необхідності
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
