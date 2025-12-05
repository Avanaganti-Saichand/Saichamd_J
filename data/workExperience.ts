import {
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaCloud,
  FaBolt,
  FaChalkboardTeacher,
  FaBriefcase,
  FaDatabase,
} from "react-icons/fa";
import { SiFirebase, SiPostgresql, SiMongodb } from "react-icons/si";
import React from "react";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Office Depot",
    position: "Java Full Stack Developer",
    duration: "May 2025 to Present",
    year: 2025,
    description: [
      "Led development of cross-platform React Native applications for iOS and Android, implementing reusable UI components and WCAG 2.2 AA accessibility standards, reducing duplication by 25 % and improving experience for 50 K+ users.",
      "Integrated OpenAI APIs to deliver GenAI chat, recommendation, and summarization features inside mobile apps, boosting user engagement by 25 %.",
      "Automated mobile release pipelines using Fastlane, CodePush, and CI/CD workflows; managed TestFlight, App Store Connect, and Google Play Console deployments for seamless OTA updates.",
      "Built secure backend services with Node.js, PostgreSQL, and AWS Lambda / API Gateway / S3, enabling reliable data exchange with mobile clients.",
      "Designed and maintained Spring Boot microservices and REST APIs, integrating with third-party systems and internal Java enterprise modules.",
      "Enhanced application performance by 30 % through optimized SQL queries, caching, and JVM profiling; implemented Grafana dashboards for real-time monitoring.",
      "Deployed containerized microservices using Docker and Kubernetes; implemented automated CI/CD pipelines with Jenkins and GitHub Actions for build, test, and deployment.",
      "Wrote unit and integration tests using JUnit, Mockito, and Jest, improving code coverage to 85 % and ensuring high reliability.",
      "Managed structured and unstructured data with PostgreSQL, MongoDB, and Firebase, handling schema migrations and production releases.",
      "Deployed and maintained cloud-native architectures on AWS (EC2, S3, Lambda, API Gateway, DynamoDB, Elastic Beanstalk, ElastiCache) to ensure scalability and availability.",
      "Collaborated across distributed Agile teams, driving sprint planning, code reviews, and release cycles between mobile and backend groups.",
    ],
    skills: [
      { name: "Java", icon: FaLaptopCode },
      { name: "React Native", icon: FaReact },
      { name: "Spring Boot", icon: FaBolt },
      { name: "AWS", icon: FaCloud },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    logo: "/logos/freelance.png",
  },
  {
    company: "Pontiac General Hospital",
    position: "Java Full Stack Developer",
    duration: "Aug 2024 to April 2025",
    year: 2024,
    description: [
      "Involved in iteration planning, requirements analysis, design, coding, testing, and documentation.",
      "Developing business applications using web technologies on React JS/React Native.",
      "Built responsive ReactJS UI improving load time by 35% and accessibility compliance (WCAG 2.2 AA).",
      "Redesigned the website using ReactJS for everything, such as the contact page and the homepage page.",
      "Developed various screens for the front end using ReactJS Redux architecture, ES6, web pack and grunt.",
      "Used ReactJS in web application development to connect the data/model fetched from a database via services given in a controller to the view via scope.",
      "Develop web pages that display account transactions and details about this account using JSP, DHTML, Spring Web Flow, AJAX, and CSS.",
      "Used Controllers for the request and response paradigm with Spring controllers using Spring MVC. Migrated to Hapi JS from Express JS configured on Node JS to attain increased performance for authentication and authorization techniques.",
      "Implemented the application using Java 17 features such as using parallel streams and functional interfaces to reduce the time complexity of algorithms.",
      "Involved in the creation of an interface to manage the user menu and Bulk update of Attributes using Node JS and jQuery.",
      "Involved in migrating previous platforms from Spring-to-Spring Boot to build microservices.",
      "Implemented JWT-based authentication and role-based authorization across services.",
      "Created a REST API for all CRUD operations using Spring Boot.",
      "Used Spring Security (OAuth2 & JWT) for authentication and secure API access.",
      "Deployed applications on AWS using Docker and Kubernetes for scalability.",
      "Created CI/CD pipelines in Jenkins with automated testing and deployment.",
      "Used SOAP UI tool to create test cases and quickly unit test the web service code.",
      "Performed code reviews and followed SonarQube quality gates.",
      "Implemented unit/integration tests using JUnit, Mockito, and Cypress.",
      "Streamlined version control via Git branching workflow, reducing merge conflicts by 40%.",
    ],
    skills: [
      { name: "Java 17", icon: FaLaptopCode },
      { name: "Spring Boot", icon: FaBolt },
      { name: "ReactJS", icon: FaReact },
      { name: "AWS", icon: FaCloud },
      { name: "Kubernetes", icon: FaCloud },
    ],
    logo: "/logos/freelance.png",
  },
  {
    company: "Real Variable",
    position: "Java Full Stack Developer",
    duration: "Nov 2020 to Jun 2023",
    year: 2020,
    description: [
      "Spearheaded Agile SDLC processes for full-stack Java and JavaScript development, managing feature design, implementation, testing, and team capacity across multiple projects.",
      "Led the development of scalable Java applications while enhancing front-end responsiveness with HTML5, CSS3/4, TypeScript, and React, introducing modular UI components for efficient data interaction with RESTful APIs.",
      "Architected React Native modules and reusable UI components for mobile apps, integrating with Node.js and REST APIs to support cross-platform deployments.",
      "Leveraged Java 11/17 features (Foreign Memory Access API, ZGC, async programming) to optimize backend performance and microservice scalability.",
      "Developed and deployed Spring Boot microservices with Spring Security and Hibernate ORM, enabling secure authentication/authorization and seamless data persistence.",
      "Configured AWS services (EC2, S3, CloudFormation, Lambda, Autoscaling) to enhance backend scalability and operational efficiency.",
      "Built and optimized Kafka producer REST services for event-driven systems, integrated with Couchbase and PostgreSQL for high-throughput data handling.",
      "Orchestrated CI/CD pipelines using Jenkins, Docker, and Kubernetes, minimizing manual deployment tasks through automated testing and containerization.",
      "Implemented mobile release workflows using Xcode, Android Studio, Fastlane, and CodePush for OTA updates; integrated Crashlytics and Firebase Analytics to monitor app stability.",
      "Conducted comprehensive security, integration, and regression testing; utilized JIRA for issue tracking and Maven/Gradle for builds, improving release reliability and delivery timelines.",
    ],
    skills: [
      { name: "Java", icon: FaLaptopCode },
      { name: "Spring Boot", icon: FaBolt },
      { name: "Kafka", icon: FaCloud },
      { name: "React Native", icon: FaReact },
      { name: "Hibernate", icon: FaDatabase },
    ],
    logo: "/logos/real-variable.jpeg",
  },
  {
    company: "Ridhan Technologies",
    position: "Software Development Intern",
    duration: "May 2019 – Aug 2019",
    year: 2019,
    description: [
      "Contributed to the development of web and mobile applications, implementing responsive UI components using React.js, JavaScript, and Redux to improve user experience across devices.",
      "Integrated RESTful APIs for real-time data operations and state updates, improving mobile and web app responsiveness and reliability.",
      "Collaborated with QA teams to conduct functional testing, debugging, and regression cycles prior to release.",
      "Assisted in setting up basic CI/CD pipelines using Jenkins and Docker, supporting automated builds and deployments.",
      "Participated in Android development using Kotlin and Java, working with Android Studio and integrating APIs for in-app data flows.",
      "Gained exposure to version control (Git), TypeScript, and containerized development environments to streamline team collaboration and onboarding.",
    ],
    skills: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: FaLaptopCode },
      { name: "Android", icon: FaMobileAlt },
      { name: "Jenkins", icon: FaBolt },
    ],
    logo: "/logos/ridhan.png",
  },
];