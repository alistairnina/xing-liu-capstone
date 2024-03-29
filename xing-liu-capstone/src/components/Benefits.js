import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/taxrefund.webp";
import projImg2 from "../assets/img/tfsa.webp";
import projImg3 from "../assets/img/workerbenefit.webp";
import projImg4 from "../assets/img/childcarebenefit.webp";
import projImg5 from "../assets/img/fhsa.webp";
import projImg6 from "../assets/img/rrsp.webp";
import projImg7 from "../assets/img/canadadentalbenefit.webp";
import projImg8 from "../assets/img/resp.webp";
import projImg9 from "../assets/img/accb.webp";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Benefits = () => {

  const benefits = [
    {
      title: "GST/HST tax refund",
      description: "Receive up to $467 a year! ",
      imgUrl: projImg1,
     
      
    },
    {
      title: "TFSA",
      description: "$7000 per year tax free growth!",
      imgUrl: projImg2,
    },
    {
      title: "Canada Workers Benefit",
      description: "Receive up to $2403 a year!",
      imgUrl: projImg3,
    },
    {
      title: "Canada Child Care Benefit",
      description: "Receive up to $6997 a year!",
      imgUrl: projImg4,
    },
    {
      title: "First Home Savings Account",
      description: "$40,000 Tax free for your 1st home",
      imgUrl: projImg5,
    },
    {
      title: "Registered Retirement Savings Account",
      description: "Lower your tax bracket",
      imgUrl: projImg6,
    },
    {
      title: "Canada Dental Benefit",
      description: "Receive up to $650 a year",
      imgUrl: projImg7,
    },
    {
      title: "RESP",
      description: "$7200 potential governemnt grant",
      imgUrl: projImg8,
    },
    {
      title: "Affordable Child care benefit",
      description: "Free child care for family gross income lower than $110000",
      imgUrl: projImg9,
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
                <h2>Benefits</h2>
                <p>find benefits and services you may be eligible to receive.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Family Benefits</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tax Savings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          benefits.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <p>For more info, check <a> https://www.canada.ca/en/services/benefits/finder.html</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>For more info, check https://www.canada.ca/en/services/benefits/finder.html</p>
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
