import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg7 from "../assets/img/dias.png"
import projImg8 from "../assets/img/propina.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Software Proveedor restaurante",
      description: "React, TS, Next.js, Tailwind",
      imgUrl: projImg1,
      linkUrl: "https://rutas-main.vercel.app/"
    },
    {
      title: "Langind page Red-Social Vopper",
      description: "React, TS, Next.js, Tailwind",
      imgUrl: projImg2,
      linkUrl: "https://vopper.vercel.app/",
    },
    {
      title: "Pagina e-Commerce Full-Movil",
      description: "React, TS, Next.js, Tailwind",
      imgUrl: projImg3,
      linkUrl: "https://fullmovilstore.com/",
    },
    {
      title: "Chat Vopper",
      description: "React, TS, Next.js, Tailwind",
      imgUrl: projImg4,
      
    },
    {
      title: "Calculador de dias",
      description: "HTML, CSS, JS",
      imgUrl: projImg7,
      linkUrl: "https://days-calculator-iota.vercel.app/"
    },
    {
      title: "Calcular propina",
      description: "HTML, CSS, JS",
      imgUrl: projImg8,
      linkUrl: "https://tip-sandy.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>A continuación, proyectos en los que he participado o yo mismo he desarrollado, espero que sea de su agrado.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Seccion 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Seccion 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Seccion 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""} style={{cursor: "pointer"}}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
