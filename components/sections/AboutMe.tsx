"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from "../Styledpic";
import {
  FaLightbulb,
  FaCode,
  FaUtensils,
  FaHiking,
  FaPuzzlePiece,
} from "react-icons/fa";
import { useScrollSection } from "@/hooks/use-scroll-section";

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div
      id="about"
      className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20"
      ref={ref}
    >
      <motion.div
        className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              <strong>5+ years of experience</strong> building large-scale Java & Kotlin microservices in event-driven and service-oriented architectures.
              I have strong Kubernetes experience deploying 100+ services with Docker, GitLab CI/CD, and automated pipelines.
            </p>
            <p>
              I am proficient in containerization using Docker and Kubernetes, and experienced in configuring CI/CD pipelines with Jenkins, GitHub Actions, and GitLab CI.
              My expertise includes Java 8–18 features including lambda expressions, functional interfaces, and Stream API for efficient backend logic.
            </p>
            <p>
              I have hands-on experience with Relational Databases (PostgreSQL, Oracle, MySQL, MS SQL Server) and NoSQL databases (MongoDB, DynamoDB, Cassandra, Redis).
              I have also developed and deployed cross-platform mobile applications using React Native, Kotlin, and Swift.
            </p>
            <p>
              My background includes extensive work in Agile Scrum environments, participating in all phases of the SDLC.
              I am skilled in application monitoring (Grafana, Prometheus, Splunk, Dynatrace) and API documentation (Swagger, OpenAPI).
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full max-w-[250px] aspect-square">
          <StyledPic />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
