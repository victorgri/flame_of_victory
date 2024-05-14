import { motion } from 'framer-motion';
import { Button, Card } from "react-bootstrap";

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
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className="projects__card">
              <Card.Img variant="top" src="./img/proj2.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className="projects__card">
              <Card.Img variant="top" src="./img/proj3.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className="projects__card">
              <Card.Img variant="top" src="./img/proj4.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

