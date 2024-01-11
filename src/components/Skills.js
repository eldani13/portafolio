import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Hola, tengo habilidades sólidas en HTML, CSS y JavaScript, y he trabajado en el desarrollo de bases de datos utilizando PHP y MySQL.
                          Mi objetivo es convertirme en un desarrollador fullstack, por lo que he ampliado mi conjunto de habilidades para incluir tecnologías modernas como React, TypeScript y Next.js. Estas adiciones me permiten crear aplicaciones web más dinámicas, eficientes y escalables.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Image" style={{
                                  height: '150px',
                                  width: '150px'
                                }} />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="Image" style={{
                                  height: '150px',
                                  width: '150px'
                                }} />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src="https://media.graphassets.com/VKHHNvEETYqZRkqgjybc" alt="Image"  style={{
                                  height: '150px',
                                  width: '150px'
                                }}/>
                                <h5>Next.JS</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Image" style={{
                                  height: '150px',
                                  width: '150px'
                                }} />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png" alt="Image" style={{
                                  height: '150px',
                                  width: '150px'
                                }} />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Image" style={{
                                  height: '150px',
                                  width: '150px'
                                }} />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Image" style={{
                                  height: '150px',
                                  width: '150px'
                                }} />
                                <h5>GitHub</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
