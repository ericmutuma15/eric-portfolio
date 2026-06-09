import { useState } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import './App.css';
import './index.css';

// Core skill images
import reactImage from './assets/react.jpeg';
import flaskImage from './assets/flask.jpeg';
import nodeImage from './assets/node.jpeg';
import linuxImage from './assets/linux0.png';
import databaseImage from './assets/database.jpeg';
import automationImage from './assets/automation.jpeg';
import deploymentImage from './assets/deployment.jpeg';
import versionControlImage from './assets/versioncontrol.png';
import powerBIImage from './assets/powerbi1.jpeg';
import tableauImage from './assets/tableau.png';
import qgisImage from './assets/qgis.png';
import arcgisImage from './assets/arcgis0.jpeg';

// Existing project images
import foodcourtImage from './assets/foodcourt.jpeg';
import desirelinkImage from './assets/desirelink.gif';
import orionImage from './assets/orion.jpeg';
import shadowtechImage from './assets/shadowtech.gif';
import dashboardImage from './assets/dashboard.png';
import joscarImage from './assets/joscar.gif';
import mtnImage from './assets/mtn.png';
import eliteImage from './assets/elite.png';

// New project images
import brookImage from './assets/Designer.png';
import britishHospitalImage from './assets/bfhlogo.png';
import rhymeTrainingImage from './assets/rhymelogo.png';

// New skill images
import tailwindImage from './assets/tail.png';
import fastapiImage from './assets/fast.png';
import expressImage from './assets/exp.png';
import ciscoImage from './assets/net.jpg';

// Personal/contact images
import meImage from './assets/me.jpg';
import contactImage from './assets/contact.jpeg';

// Testimonials images
import aliceImage from './assets/alice.png';
import brianImage from './assets/brian.jpeg';
import graceImage from './assets/grace.png';
import danielImage from './assets/kiptoo.png';
import naomiImage from './assets/achieng.jpeg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [skillsScrollLeft, setSkillsScrollLeft] = useState(false);
  const [skillsScrollRight, setSkillsScrollRight] = useState(true);
  const [projectsScrollLeft, setProjectsScrollLeft] = useState(false);
  const [projectsScrollRight, setProjectsScrollRight] = useState(true);
  const [testimonialsScrollLeft, setTestimonialsScrollLeft] = useState(false);
  const [testimonialsScrollRight, setTestimonialsScrollRight] = useState(true);

  const skills = [
    { name: 'Tailwind CSS', image: tailwindImage },
    { name: 'FastAPI', image: fastapiImage },
    { name: 'Express.js', image: expressImage },
    { name: 'Cisco Networking', image: ciscoImage },
    { name: 'Penetration Testing', icon: 'shield', bgColor: 'from-red-500 to-orange-500' },
    { name: 'React', image: reactImage },
    { name: 'Flask', image: flaskImage },
    { name: 'Node.js', image: nodeImage },
    { name: 'Linux', image: linuxImage },
    { name: 'Databases', image: databaseImage },
    { name: 'Automation', image: automationImage },
    { name: 'Deployment', image: deploymentImage },
    { name: 'Version Control', image: versionControlImage },
    { name: 'Power BI', image: powerBIImage },
    { name: 'Tableau', image: tableauImage },
    { name: 'QGIS', image: qgisImage },
    { name: 'ArcGIS', image: arcgisImage },
  ];

  // Group skills into pages of 6
  const skillPages = [];
  for (let i = 0; i < skills.length; i += 6) {
    skillPages.push(skills.slice(i, i + 6));
  }

  const projects = [
    {
      name: 'Brook Of Healing',
      image: brookImage,
      link: 'https://brookeofhealing.vercel.app/',
    },
    {
      name: 'British Family Hospital',
      image: britishHospitalImage,
      link: 'https://bfhosp.vercel.app/',
    },
    {
      name: 'Rhyme Training Institute',
      image: rhymeTrainingImage,
      link: 'https://rhymeinstitute.vercel.app/',
    },
    {
      name: 'Dashboard',
      image: dashboardImage,
      link: 'https://public.tableau.com/app/profile/eric.mutuma/viz/GlobalTBdataAnalysis/GlobalTBprevalenceanalysis?publish=yes',
    },
    { name: 'Desire Link', image: desirelinkImage, link: 'https://desirelink.vercel.app' },
    { name: 'Elite', image: eliteImage, link: 'https://elitemovies15.netlify.app' },
    { name: 'Food Court', image: foodcourtImage, link: 'https://food-court-g4.onrender.com' },
    { name: 'Joscar', image: joscarImage, link: 'https://joscargrill.netlify.app' },
    {
      name: 'MTN',
      image: mtnImage,
      link: 'https://github.com/ericmutuma15/MTN-Cote-D-Ivore-data-analysis/blob/main/Moringa_Data_Science_Prep_Python_Mini_Project_2012_07_Eric_Mutuma_DataReport_.ipynb',
    },
    { name: 'Orion', image: orionImage, link: 'https://orion-geosurveys.vercel.app/' },
    { name: 'Shadow Tech', image: shadowtechImage, link: 'https://shadowtech.netlify.app' },
  ];

  const testimonials = [
    {
      name: 'Alicia Mwangi',
      image: aliceImage,
      role: 'Client Feedback',
      text: 'Delivered a clean, responsive solution with great attention to detail and smooth user experience.',
    },
    {
      name: 'Brian Otieno',
      image: brianImage,
      role: 'Project Partner',
      text: 'Very reliable, fast to iterate, and excellent at turning ideas into polished web interfaces.',
    },
    {
      name: 'Grace Wanjiku',
      image: graceImage,
      role: 'Satisfied User',
      text: 'The final result was professional, modern, and worked beautifully across different screen sizes.',
    },
    {
      name: 'Daniel Kiptoo',
      image: danielImage,
      role: 'Team Member',
      text: 'Strong technical skills and a great sense of design made the whole process efficient and enjoyable.',
    },
    {
      name: 'Naomi Achieng',
      image: naomiImage,
      role: 'Reviewer',
      text: 'Great communication, smooth delivery, and a thoughtful approach to building useful digital products.',
    },
  ];

  const sectionBase = 'scroll-mt-24 px-3 sm:px-6 lg:px-10';
  const sectionSpacing = 'pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20';
  const skillsSectionSpacing =
    'pt-4 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12 min-h-[40vh] sm:min-h-[54vh] lg:min-h-[62vh] flex flex-col';
  const projectsSectionSpacing =
    'pt-4 pb-8 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14 min-h-[44vh] sm:min-h-[58vh] lg:min-h-[68vh] flex flex-col';
  const testimonialsSectionSpacing =
    'pt-4 pb-8 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14 min-h-[44vh] sm:min-h-[58vh] lg:min-h-[66vh] flex flex-col';
  const skillsContentSpacing = 'mt-6 sm:mt-8 lg:mt-10';
  const projectsContentSpacing = 'mt-6 sm:mt-8 lg:mt-10';
  const testimonialsContentSpacing = 'mt-6 sm:mt-8 lg:mt-10';
  const sectionTitle =
    'text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 sm:mb-8 lg:mb-10';

  return (
    <div className={darkMode ? 'dark' : ''} style={{ margin: 0, padding: 0 }}>
      <div className="font-sans bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
        {/* Home Section */}
        <section className="relative min-h-[78vh] sm:min-h-[88vh] bg-gray-900 text-white px-4 sm:px-6 lg:px-10 py-12 sm:py-20 flex flex-col items-center justify-center text-center overflow-hidden">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi! I'm a Full-Stack Developer
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl">
              I build smooth, full-stack web apps and create interactive dashboards.
            </p>
            <p className="pt-2 sm:pt-4 text-lg sm:text-xl font-medium text-gray-100">
              Need a Land surveyor?
            </p>
            <div className="pt-1 sm:pt-2 flex items-center justify-center">
              <a
                href="https://orion-geosurveys.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-blue-500 hover:text-blue-700 transition-colors flex items-center"
              >
                Visit Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2 transition-transform transform hover:translate-x-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-center">
            <div className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 mx-auto text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75L12 19.5l-7.5-6.75" />
              </svg>
            </div>
            <p className="mt-2 text-sm tracking-wide">Scroll Down</p>
          </div>
        </section>

        {/* About Section */}
        <section className={`bg-gray-900 text-white transition-opacity duration-700 ${sectionBase} ${sectionSpacing}`} id="about">
          <h2 className={sectionTitle}>About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
            <img
              src={meImage}
              alt="About Me"
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 flex-shrink-0 ring-4 ring-blue-500 ring-opacity-50 object-cover"
            />
            <p className="text-base sm:text-lg leading-relaxed text-gray-200 max-w-3xl md:pt-2 text-center md:text-left">
              I'm a full-stack developer, data analyst, cybersecurity enthusiast, and Linux expert. I specialize in React (Vite/Next) + Flask/FastAPI or Node.js to build smooth, scalable web applications. My expertise includes <span className="text-blue-400 font-semibold">Cisco Networking</span> and <span className="text-blue-400 font-semibold">Cybersecurity with Penetration Testing</span>, complemented by deep knowledge in Linux system setup, network configuration, and security troubleshooting. I'm passionate about building secure, efficient, and user-centric solutions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className={`bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-opacity duration-700 ${sectionBase} ${skillsSectionSpacing}`}
          id="skills"
        >
          <h2 className={sectionTitle}>Skills</h2>

          <div className={`max-w-7xl mx-auto w-full ${skillsContentSpacing}`}>
            <div className="relative group">
              <div
                className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
                onScroll={(e) => {
                  const scrollLeft = e.target.scrollLeft > 0;
                  const scrollRight =
                    e.target.scrollLeft < e.target.scrollWidth - e.target.clientWidth - 10;

                  setSkillsScrollLeft(scrollLeft);
                  setSkillsScrollRight(scrollRight);
                }}
              >
                <div className="flex gap-4 sm:gap-6 pb-2 px-1 sm:px-4">
                  {skillPages.map((page, pageIndex) => (
                    <div key={pageIndex} className="flex-shrink-0 w-full min-w-full snap-start">
                      <div
                        className="grid gap-3 sm:gap-6 place-items-center"
                        style={{
                          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                          gridTemplateRows: 'repeat(2, auto)',
                        }}
                      >
                        {page.map((skill) => (
                          <div
                            key={skill.name}
                            className="min-w-0 flex flex-col items-center text-center group/skill w-full"
                          >
                            {skill.image ? (
                              <div className="relative mb-2 sm:mb-3">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover/skill:opacity-75 transition-opacity duration-300"></div>
                                <img
                                  src={skill.image}
                                  alt={skill.name}
                                  className="relative mx-auto w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-gray-200 dark:ring-gray-700"
                                />
                              </div>
                            ) : (
                              <div
                                className={`relative mb-2 sm:mb-3 mx-auto w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br ${skill.bgColor} shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-gray-200 dark:ring-gray-700 flex items-center justify-center`}
                              >
                                <FaShieldAlt className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl" />
                              </div>
                            )}

                            <p className="font-bold text-[9px] sm:text-sm md:text-base lg:text-lg text-gray-900 dark:text-white group-hover/skill:text-blue-500 transition-colors duration-300 leading-tight">
                              {skill.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {skillsScrollLeft && (
                <button
                  onClick={() => {
                    const carousel = document.querySelector('#skills .overflow-x-auto');
                    if (carousel) carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Scroll left"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {skillsScrollRight && (
                <button
                  onClick={() => {
                    const carousel = document.querySelector('#skills .overflow-x-auto');
                    if (carousel) carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Scroll right"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          className={`bg-gray-900 text-white transition-opacity duration-700 ${sectionBase} ${projectsSectionSpacing}`}
          id="projects"
        >
          <h2 className={sectionTitle}>Projects</h2>
          <div className={`max-w-7xl mx-auto w-full ${projectsContentSpacing}`}>
            <div className="relative group">
              <div
                className="overflow-x-auto scrollbar-hide scroll-smooth"
                onScroll={(e) => {
                  const scrollLeft = e.target.scrollLeft > 0;
                  const scrollRight =
                    e.target.scrollLeft < e.target.scrollWidth - e.target.clientWidth - 10;
                  setProjectsScrollLeft(scrollLeft);
                  setProjectsScrollRight(scrollRight);
                }}
              >
                <div className="flex gap-4 sm:gap-6 pb-4 px-1 sm:px-4 min-w-max">
                  {projects.map((project) => (
                    <div
                      key={project.name}
                      className="flex-shrink-0 w-[13rem] sm:w-80 lg:w-96 group/project relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover/project:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover/project:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-2">
                        <h3 className="font-bold text-lg sm:text-xl mb-1 group-hover/project:text-blue-400 transition-colors duration-300 line-clamp-1">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {project.name} website.
                        </p>
                        <div className="pt-2 text-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 sm:px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold text-sm sm:text-base"
                          >
                            Visit Site
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {projectsScrollLeft && (
                <button
                  onClick={() => {
                    const carousel = document.querySelector('#projects .overflow-x-auto');
                    if (carousel) carousel.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Scroll left"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {projectsScrollRight && (
                <button
                  onClick={() => {
                    const carousel = document.querySelector('#projects .overflow-x-auto');
                    if (carousel) carousel.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Scroll right"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className={`bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-opacity duration-700 ${sectionBase} ${testimonialsSectionSpacing}`}
          id="testimonials"
        >
          <h2 className={sectionTitle}>Testimonials</h2>
          <div className={`max-w-7xl mx-auto w-full ${testimonialsContentSpacing}`}>
            <div className="relative group">
              <div
                className="overflow-x-auto scrollbar-hide scroll-smooth"
                onScroll={(e) => {
                  const scrollLeft = e.target.scrollLeft > 0;
                  const scrollRight =
                    e.target.scrollLeft < e.target.scrollWidth - e.target.clientWidth - 10;
                  setTestimonialsScrollLeft(scrollLeft);
                  setTestimonialsScrollRight(scrollRight);
                }}
              >
                <div className="flex gap-4 sm:gap-6 pb-4 px-1 sm:px-4 min-w-max">
                  {testimonials.map((item) => (
                    <div
                      key={item.name}
                      className="flex-shrink-0 w-[16rem] sm:w-80 lg:w-96 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03] border border-gray-200/70 dark:border-gray-700/70"
                    >
                      <div className="p-5 sm:p-6 lg:p-7 flex flex-col items-center text-center h-full">
                        <div className="relative mb-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-20"></div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-4 ring-white dark:ring-gray-800 shadow-lg"
                          />
                        </div>

                        <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-blue-500 font-medium mt-1">
                          {item.role}
                        </p>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {testimonialsScrollLeft && (
                <button
                  onClick={() => {
                    const carousel = document.querySelector('#testimonials .overflow-x-auto');
                    if (carousel) carousel.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Scroll testimonials left"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {testimonialsScrollRight && (
                <button
                  onClick={() => {
                    const carousel = document.querySelector('#testimonials .overflow-x-auto');
                    if (carousel) carousel.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Scroll testimonials right"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-opacity duration-700 ${sectionBase} ${sectionSpacing}`} id="contact">
          <h2 className={sectionTitle}>Contact</h2>
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 lg:gap-10 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-5 sm:p-8 lg:p-10 rounded-2xl shadow-xl">
              <img
                src={contactImage}
                alt="Contact"
                className="w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 flex-shrink-0 ring-4 ring-blue-500 ring-opacity-50 object-cover"
              />
              <div className="flex-1 w-full md:pt-1 text-center md:text-left">
                <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  <p className="text-base sm:text-lg">
                    <span className="font-semibold text-blue-500">Office:</span> 0100-285-721 / 0716-877 234
                  </p>
                  <p className="text-base sm:text-lg">
                    <span className="font-semibold text-blue-500">Mobile:</span> 0798-244 545
                  </p>
                  <p className="text-base sm:text-lg break-words">
                    <span className="font-semibold text-blue-500">Email:</span> ericmutuma15@gmail.com
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                  <a
                    href="mailto:ericmutuma15@gmail.com"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold text-center transform hover:scale-105"
                  >
                    Mail Me
                  </a>
                  <a
                    href="https://wa.me/254798244545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-semibold text-center transform hover:scale-105"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 sm:py-8 text-center px-4">
          <p className="text-sm sm:text-base">&copy; 2025 Eric Mutuma. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;