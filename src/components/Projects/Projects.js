import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ paddingBottom: "10px", justifyItems: "left" }}>
          <ul>
            <p style={{ alignItems: "left" }}>Linos Enhacement</p>
            Worked on enhancements for Lineage Connect 1.0 (web-based
            application) and Linos RF (mobile-based application) using React,
            React Native, and NestJS. Coordinated with vendors to ensure timely
            delivery of goods and services, resulting in a 20% reduction in
            delivery times.
            <br />
            <p>Linos Connect1.0 </p>
            Migrated a standalone warehouse managementsystem to a cloud-based
            application for Lineage Logistics, a leading provider of cold
            storage and logistics solutions. ¢ Analyzed and understood the
            functionalities of the existing system and developed UI components
            and features using React.js and Redux Toolkit. Fixed various bugs
            and improved the performance and usability of the application.{" "}
            <br />
            <p>Apple Inc - Zilker</p>
            Developed multiple modulesfor Zilker, a questionnaire website used
            by Apple to award scholarships to students. Implemented CRUD
            operations for questions and questionnaires, and created dynamic
            form generation using React
          </ul>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
