import { Button, Card } from "react-bootstrap";

export const Projects = () => {


  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__inner">
          <h3 className="section__title">Projects &gt;</h3>

          <div className="projects__cards">
            <Card className="projects__card">
              <Card.Img variant="top" src="https://placehold.co/300x150" />
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
              <Card.Img variant="top" src="https://placehold.co/300x150" />
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
              <Card.Img variant="top" src="https://placehold.co/300x150" />
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
              <Card.Img variant="top" src="https://placehold.co/300x150" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

