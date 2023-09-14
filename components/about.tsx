"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        interest in technology, especially{" "}
        <span className="font-medium">Computers</span>, began when I used to
        enjoy playing games at cybercafes. It was during my internship at a company that I discovered{" "}
        <span className="font-medium">my passion for programming</span>.{" "}
        <span className="italic"> I had the opportunity to work there as an intern,</span> and now I am
        employed as a web developer. I <span className="underline">am</span> constantly
        learning and improving my skills in various programming languages, frameworks, and technologies.
        {" "}
        <span className="font-medium">
          Laravel, PHP, TALL-Stack
        </span>
        . I enjoy the challenges that come with developing 
        web applications and finding creative solutions to problems{" "}
        <span className="font-medium">full-time position</span> as a full-stack
        developer.
      </p>

      <p>
        <span className="italic">When I'm not in work</span>, I like to explore
        new technologies, contribute to open-source projects, and participate in coding competitions.{" "}
      </p>
    </motion.section>
  );
}
