import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Resume = () => {
  return (
    <div id="resume">
      <Container >
        <Row>
          <Col className="resume-left">
            <h1>HEllo</h1>
          </Col>
          <Col className="resume-right">
            <div className="introduction pb-4">
              <h4>Intro</h4>
              <div className="content">
                <p className="intro-p">
                  I&#39;m a Full-Stack Developer who specializes in building and designing 
                  exceptional and accessible digital experiences.
                </p>
                <p className="intro-p">
                  I love designing and building new and exciting things, so I
                  feel right at home as a Full-Stack Developer. I&#39;m
                  experienced in developing and designing products for the web,
                  from simple landing pages to full-fledged web apps.
                </p>
                <span className="intro-p job-pls">
                  I&#39;m currently seeking a Front-End Development position 
                  with an innovative company where i can put my creative skills to use.
                </span>
              </div>
            </div>
            <div className="skills pb-4">
              <h4>Skills</h4>
              <div className="content">
                <div className="skill-category pb-2">
                  <strong>Languages: &nbsp;</strong>
                  <span>JavaScript (ES6), HTML5, CSS3, Java, PHP</span>
                </div>
                <div className="skill-category pb-2">
                  <strong>Libraries &amp; Frameworks: &nbsp;</strong>
                  <span>
                    jQuery, Bootstrap, Bulma, Handlebars, Node, Express,
                    MySQL, PostgreSQL, MongoDB, Angular, Vue, React, Redux
                  </span>
                </div>
                <div className="skill-category">
                  <strong>Tools: &nbsp;</strong>
                  <span>
                    Git &amp; Github, Command Line, Grunt, Insomnia, DBeaver,
                     MongoDB Compass, Robo3T, Heroku, Netlify
                  </span>
                </div>
              </div>
            </div>
            <div className="education pb-4">
              <h4>Education</h4>
              <div className="content pb-3">
                <div className="university">
                    <strong>Valencia College</strong>
                </div>
                <div className="college pb-1">
                    <em>College of Computer and Information Science</em>
                </div>
                <div className="major">
                  <strong>Major:</strong> Computer Science
                </div>
              </div>
              <div className="content">
                <div className="university">
                    <strong>University of Central Florida Coding Bootcamp</strong>
                </div>
                <div className="college pb-1">
                    <em>College of Continuing Education</em>
                </div>
                <div className="major">
                  <strong>Major:</strong> Full-Stack Web Development
                </div>
              </div>
            </div>
            <div className="projects">
              <h4>Projects</h4>
              <div className="content">
                <div className="project-item">
                  <a
                    className="project-title"
                    href=""
                    target="_blank"
                  >
                    caseyrowlands.com
                  </a>
                  <p className="project-desc">
                    Portfolio site designed and coded from scratch to showcase
                    my skills and past work
                  </p>
                </div>
                <div className="project-item">
                  <div className="project-title">Tasty-Bytes</div>
                  <p className="project-desc">
                    Front end web app built using HTML, CSS/Bulma, and JavaScript
                    to provide users a way to find recipes using food items they
                    already have in their homes.
                  </p>
                </div>
                <div className="project-item">
                  <a
                    className="project-title"
                    href=""
                    target="_blank"
                  >
                    Disc Jockies
                  </a>
                  <p className="project-desc">
                    Full-stack Node.js application that uses a Handlebars.js view engine
                    to render the front end. Allows users to view disc golf discs, leave
                    reviews on discs, and fins disc gold courses near them.
                  </p>
                </div>
                <div className="project-item">
                  <a
                    className="project-title"
                    href=""
                    target="_blank"
                  >
                    Note Taker
                  </a>
                  <p className="project-desc">
                    Express.js, HTML, and CSS application that allows a user to write notes 
                    that are saved to local storage, and tehn retrieve all of those notes to 
                    be viewed at their convenience.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="resume-PDF-button pt-3 pb-3">
        <a href="" target="_blank">
            <button type="button" class="btn btn-primary btn-lg">Grab a PDF of my full resume</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
