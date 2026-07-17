import { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import {
  Section,
  Container,
  SectionTitle,
  PrimaryButton,
  SecondaryButton,
  PremiumCard,
  ProjectCard,
  SkillCard,
  TestimonialCard,
  Navbar,
  ScrollToTop,
  Carousel,
  SkillsGrid,
} from "./components";
import "./App.css";
import "./index.css";

// Core skill images
import reactImage from "./assets/react.jpeg";
import flaskImage from "./assets/flask.jpeg";
import nodeImage from "./assets/node.jpeg";
import linuxImage from "./assets/linux0.png";
import databaseImage from "./assets/database.jpeg";
import automationImage from "./assets/automation.jpeg";
import deploymentImage from "./assets/deployment.jpeg";
import versionControlImage from "./assets/versioncontrol.png";
import powerBIImage from "./assets/powerbi1.jpeg";
import tableauImage from "./assets/tableau.png";
import qgisImage from "./assets/qgis.png";
import arcgisImage from "./assets/arcgis0.jpeg";

// Existing project images
import foodcourtImage from "./assets/foodcourt.jpeg";
import desirelinkImage from "./assets/desirelink.gif";
import orionImage from "./assets/orion.jpeg";
import shadowtechImage from "./assets/shadowtech.gif";
import dashboardImage from "./assets/dashboard.png";
import joscarImage from "./assets/joscar.gif";
import mtnImage from "./assets/mtn.png";
import eliteImage from "./assets/elite.png";

// New project images
import brookImage from "./assets/Designer.png";
import britishHospitalImage from "./assets/bfhlogo.png";
import rhymeTrainingImage from "./assets/rhymelogo.png";
import mbogiLinkImage from "./assets/Designer(1).png";

// New skill images
import tailwindImage from "./assets/tail.png";
import fastapiImage from "./assets/fast.png";
import expressImage from "./assets/exp.png";
import ciscoImage from "./assets/net.jpg";

// Personal/contact images
import meImage from "./assets/me.jpg";
import contactImage from "./assets/contact.jpeg";

// Testimonials images
import aliceImage from "./assets/alice.png";
import brianImage from "./assets/brian.jpeg";
import graceImage from "./assets/grace.png";
import danielImage from "./assets/kiptoo.png";
import naomiImage from "./assets/achieng.jpeg";

function App() {
  // State management for carousel scrolling (if needed for future horizontal scrolling)

  const skills = [
    { name: "Tailwind CSS", image: tailwindImage },
    { name: "FastAPI", image: fastapiImage },
    { name: "Express.js", image: expressImage },
    { name: "Cisco Networking", image: ciscoImage },
    {
      name: "Penetration Testing",
      icon: "shield",
      bgColor: "from-red-500 to-orange-500",
    },
    { name: "React", image: reactImage },
    { name: "Flask", image: flaskImage },
    { name: "Node.js", image: nodeImage },
    { name: "Linux", image: linuxImage },
    { name: "Databases", image: databaseImage },
    { name: "Automation", image: automationImage },
    { name: "Deployment", image: deploymentImage },
    { name: "Version Control", image: versionControlImage },
    { name: "Power BI", image: powerBIImage },
    { name: "Tableau", image: tableauImage },
    { name: "QGIS", image: qgisImage },
    { name: "ArcGIS", image: arcgisImage },
  ];

  // Group skills into pages of 6
  const skillPages = [];
  for (let i = 0; i < skills.length; i += 6) {
    skillPages.push(skills.slice(i, i + 6));
  }

  const projects = [
    {
      name: "Mbogi Link",
      description: "A social networking platform for connecting communities.",
      image: mbogiLinkImage,
      link: "https://desire-link-app.vercel.app",
    },
    {
      name: "Brook Of Healing",
      description: "A community based organisation platform for providing medical services and social support.",
      image: brookImage,
      link: "https://brookeofhealing.vercel.app/",
    },
    {
      name: "British Family Hospital",
      description: "A healthcare platform for providing medical services and support.",
      image: britishHospitalImage,
      link: "https://bfhosp.vercel.app/",
    },
    {
      name: "Rhyme Training Institute",
      description: "A platform for providing technical, medical and computer training services.",
      image: rhymeTrainingImage,
      link: "https://rhymeinstitute.vercel.app/",
    },
    {
      name: "Dashboard",
      description: "A data visualization dashboard for analyzing global TB prevalence.",
      image: dashboardImage,
      link: "https://public.tableau.com/app/profile/eric.mutuma/viz/GlobalTBdataAnalysis/GlobalTBprevalenceanalysis?publish=yes",
    },
    {
      name: "Desire Link",
      description: "A platform for connecting people and sharing ideas.",
      image: desirelinkImage,
      link: "https://desirelink.vercel.app",
    },
    {
      name: "Elite",
      description: "A platform for showcasing elite movies and entertainment content.",
      image: eliteImage,
      link: "https://elitemovies15.netlify.app",
    },
    {
      name: "Food Court",
      description: "A platform for ordering food online from various restaurants.",
      image: foodcourtImage,
      link: "https://food-court-g4.onrender.com",
    },
    {
      name: "Joscar",
      description: "A platform for ordering food online from Joscar Grill.",
      image: joscarImage,
      link: "https://joscargrill.netlify.app",
    },
    {
      name: "MTN",
      description: "A data analysis project for MTN Cote D'Ivoire.",
      image: mtnImage,
      link: "https://github.com/ericmutuma15/MTN-Cote-D-Ivore-data-analysis/blob/main/Moringa_Data_Science_Prep_Python_Mini_Project_2012_07_Eric_Mutuma_DataReport_.ipynb",
    },
    {
      name: "Orion",
      description: "A geospatial survey platform for accessing surveying solutions.",
      image: orionImage,
      link: "https://orion-geosurveys.vercel.app/",
    },
    {
      name: "Shadow Tech",
      description: "A portfolio for showcasing tech skills, services and solutions.",
      image: shadowtechImage,
      link: "https://shadowtech.netlify.app",
    },
  ];

  const testimonials = [
    {
      name: "Alicia Mwangi",
      image: aliceImage,
      role: "Client Feedback",
      text: "Delivered a clean, responsive solution with great attention to detail and smooth user experience.",
    },
    {
      name: "Brian Otieno",
      image: brianImage,
      role: "Project Partner",
      text: "Very reliable, fast to iterate, and excellent at turning ideas into polished web interfaces.",
    },
    {
      name: "Grace Wanjiku",
      image: graceImage,
      role: "Satisfied User",
      text: "The final result was professional, modern, and worked beautifully across different screen sizes.",
    },
    {
      name: "Daniel Kiptoo",
      image: danielImage,
      role: "Team Member",
      text: "Strong technical skills and a great sense of design made the whole process efficient and enjoyable.",
    },
    {
      name: "Naomi Achieng",
      image: naomiImage,
      role: "Reviewer",
      text: "Great communication, smooth delivery, and a thoughtful approach to building useful digital products.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0B0B0B] to-[#141414]">
      <Navbar />
      <ScrollToTop />
      <Section
        id="home"
        className="relative min-h-screen pt-24 sm:pt-32 lg:pt-40 flex items-center justify-center grid-pattern"
        bgGradient="from-black via-[#0B0B0B] to-[#141414]"
      >
        <Container className="text-center max-w-4xl">
          <div className="animate-fade-up space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-tight">
                Full-Stack
                <span className="block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  Developer & Cybersecurity Expert
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building secure, scalable applications with modern tech stacks.
              Specializing in React, FastAPI, Node.js, and cybersecurity
              consulting with penetration testing expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="#projects" className="block">
                <PrimaryButton className="w-full sm:w-auto">
                  View My Work
                </PrimaryButton>
              </a>
              <a href="#contact" className="block">
                <SecondaryButton className="w-full sm:w-auto">
                  Get In Touch
                </SecondaryButton>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.5 12.75L12 19.5l-7.5-6.75"
              />
            </svg>
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section id="about" bgGradient="from-[#0B0B0B] to-[#141414]">
        <Container>
          <SectionTitle>About Me</SectionTitle>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src={meImage}
                alt="Eric Mutuma"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-2xl ring-2 ring-red-600/30 hover:ring-red-600/60 transition-all hover:scale-105"
              />
            </div>

            <div className="animate-slide-in-right space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a{" "}
                <span className="text-red-500 font-bold">
                  full-stack developer
                </span>
                , data analyst, and{" "}
                <span className="text-red-500 font-bold">
                  cybersecurity enthusiast
                </span>{" "}
                with expertise in building secure, scalable web applications.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My tech stack includes{" "}
                <span className="text-red-500 font-bold">
                  React (Vite/Next.js)
                </span>{" "}
                for frontends and{" "}
                <span className="text-red-500 font-bold">
                  Flask/FastAPI or Node.js
                </span>{" "}
                for backends. I specialize in:
              </p>

              <ul className="space-y-3">
                {[
                  "Cisco Networking & Security",
                  "Penetration Testing & Security Audits",
                  "Linux System Administration",
                  "Secure Code Development",
                  "Network Configuration & Troubleshooting",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about building{" "}
                <span className="text-red-500 font-bold">
                  secure, efficient, and user-centric solutions
                </span>{" "}
                that make a real impact.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section id="skills" bgGradient="from-[#141414] to-[#0B0B0B]">
        <Container>
          <SectionTitle>Technical Skills</SectionTitle>

          <div className="space-y-16">
            {/* Software Development */}
            <SkillsGrid
              title="Software Development"
              skills={[
                { name: "React", image: reactImage },
                { name: "Flask", image: flaskImage },
                { name: "Node.js", image: nodeImage },
                { name: "FastAPI", image: fastapiImage },
                { name: "Express.js", image: expressImage },
                { name: "Tailwind CSS", image: tailwindImage },
              ]}
              className="animate-fade-up"
            />

            {/* Cybersecurity & Infrastructure */}
            <SkillsGrid
              title="Cybersecurity & Infrastructure"
              skills={[
                { name: "Linux", image: linuxImage },
                { name: "Penetration Testing", icon: FaShieldAlt },
                { name: "Cisco Networking", image: ciscoImage },
                { name: "Automation", image: automationImage },
                { name: "Deployment", image: deploymentImage },
                { name: "Version Control", image: versionControlImage },
              ]}
              className="animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            />

            {/* Data & Analytics */}
            <SkillsGrid
              title="Data & Analytics"
              skills={[
                { name: "Databases", image: databaseImage },
                { name: "Power BI", image: powerBIImage },
                { name: "Tableau", image: tableauImage },
                { name: "QGIS", image: qgisImage },
                { name: "ArcGIS", image: arcgisImage },
              ]}
              className="animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section id="projects" bgGradient="from-[#0B0B0B] to-[#141414]">
        <Container>
          <SectionTitle>Featured Projects</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.name}
                className="animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <ProjectCard
                  image={project.image}
                  title={project.name}
                  description={project.description}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" bgGradient="from-[#141414] to-[#0B0B0B]">
        <Container>
          <SectionTitle>What People Say</SectionTitle>

          {/* Desktop Grid View */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className="animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <TestimonialCard
                  image={testimonial.image}
                  name={testimonial.name}
                  role={testimonial.role}
                  text={testimonial.text}
                />
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel View */}
          <div className="lg:hidden max-w-2xl mx-auto">
            <Carousel
              items={testimonials}
              renderItem={(testimonial) => (
                <TestimonialCard
                  image={testimonial.image}
                  name={testimonial.name}
                  role={testimonial.role}
                  text={testimonial.text}
                />
              )}
              autoSlide={true}
              interval={5000}
            />
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" bgGradient="from-[#0B0B0B] to-[#141414]">
        <Container className="max-w-3xl">
          <SectionTitle>Get In Touch</SectionTitle>

          <PremiumCard className="p-8 sm:p-12 space-y-8 border-red-600/20 hover:border-red-600/50">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Office</p>
                <p className="text-lg text-white font-semibold">0100-285-721</p>
                <p className="text-lg text-white font-semibold">0716-877 234</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Mobile</p>
                <p className="text-lg text-white font-semibold">0798-244 545</p>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">Email</p>
              <p className="text-lg text-red-500 font-semibold break-words">
                ericmutuma15@gmail.com
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:ericmutuma15@gmail.com" className="flex-1">
                <PrimaryButton className="w-full">Send Email</PrimaryButton>
              </a>
              <a
                href="https://wa.me/254798244545"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                  WhatsApp Me
                </button>
              </a>
            </div>
          </PremiumCard>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8">
        <Container className="text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Eric Mutuma. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Building secure, scalable solutions for the future.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
