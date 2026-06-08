import { useState } from 'react';
import { FaSun, FaMoon, FaShieldAlt } from 'react-icons/fa';
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

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [skillsScrollLeft, setSkillsScrollLeft] = useState(false);
  const [skillsScrollRight, setSkillsScrollRight] = useState(true);
  const [projectsScrollLeft, setProjectsScrollLeft] = useState(false);
  const [projectsScrollRight, setProjectsScrollRight] = useState(true);

  // Newest skills first
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

   // Projects
  const projects = [
    { 
      name: 'Brook Of Healing', 
      image: brookImage, 
      link: 'https://brookeofhealing.vercel.app/' 
    },
    { 
      name: 'British Family Hospital', 
      image: britishHospitalImage, 
      link: 'https://bfhosp.vercel.app/' 
    },
    { 
      name: 'Rhyme Training Institute', 
      image: rhymeTrainingImage, 
      link: 'https://rhymeinstitute.vercel.app/' 
    },

    { name: 'Dashboard', image: dashboardImage, link: 'https://public.tableau.com/app/profile/eric.mutuma/viz/GlobalTBdataAnalysis/GlobalTBprevalenceanalysis?publish=yes' },
    { name: 'Desire Link', image: desirelinkImage, link: 'https://desirelink.vercel.app' },
    { name: 'Elite', image: eliteImage, link: 'https://elitemovies15.netlify.app' },
    { name: 'Food Court', image: foodcourtImage, link: 'https://food-court-g4.onrender.com' },
    { name: 'Joscar', image: joscarImage, link: 'https://joscargrill.netlify.app' },
    { name: 'MTN', image: mtnImage, link: 'https://github.com/ericmutuma15/MTN-Cote-D-Ivore-data-analysis/blob/main/Moringa_Data_Science_Prep_Python_Mini_Project_2012_07_Eric_Mutuma_DataReport_.ipynb' },
    { name: 'Orion', image: orionImage, link: 'https://orion-geosurveys.vercel.app/' },
    { name: 'Shadow Tech', image: shadowtechImage, link: 'https://shadowtech.netlify.app' },
  ];


  return (
    <div className={darkMode ? 'dark' : ''} style={{ margin: 0, padding: 0 }}>
      <div className="font-sans bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
        {/* Home Section */}
        <section className="bg-gray-900 text-white py-20 text-center relative">
          <h1 className="text-4xl font-bold">Hi! I'm a Full-Stack Developer</h1>
          <p className="mt-4 text-lg">I build smooth, full-stack web apps and create interactive dashboards.</p>
          <p className="mt-12 mb-8 text-lg">Need a Land surveyor?</p>
          <div className="mt-4 flex items-center justify-center">
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
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
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
            <p className="mt-2 text-sm">Scroll Down</p>
          </div>
        </section>

        <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>

        {/* About Section */}
        <section className="py-20 px-10 bg-gray-900 text-white transition-opacity duration-700" id="about">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <img
              src={meImage}
              alt="About Me"
              className="w-48 h-48 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 flex-shrink-0 ring-4 ring-blue-500 ring-opacity-50"
            />
            <p className="text-lg leading-relaxed text-gray-200">
              I'm a full-stack developer, data analyst, cybersecurity enthusiast, and Linux expert. I specialize in React (Vite/Next) + Flask/FastAPI or Node.js to build smooth, scalable web applications. My expertise includes <span className="text-blue-400 font-semibold">Cisco Networking</span> and <span className="text-blue-400 font-semibold">Cybersecurity with Penetration Testing</span>, complemented by deep knowledge in Linux system setup, network configuration, and security troubleshooting. I'm passionate about building secure, efficient, and user-centric solutions.
            </p>
          </div>
        </section>

        <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-opacity duration-700" id="skills">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</h2>
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div 
                className="overflow-x-auto scrollbar-hide scroll-smooth"
                onScroll={(e) => {
                  const scrollLeft = e.target.scrollLeft > 0;
                  const scrollRight = e.target.scrollLeft < (e.target.scrollWidth - e.target.clientWidth - 10);
                  setSkillsScrollLeft(scrollLeft);
                  setSkillsScrollRight(scrollRight);
                }}
              >
                <div className="flex gap-6 pb-4 px-4 min-w-max">
                  {skills.map(skill => (
                    <div key={skill.name} className="flex-shrink-0 text-center group/skill">
                      {skill.image ? (
                        <div className="relative mb-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover/skill:opacity-75 transition-opacity duration-300"></div>
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-cover rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-gray-200 dark:ring-gray-700"
                          />
                        </div>
                      ) : (
                        <div className={`relative mb-4 mx-auto w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${skill.bgColor} shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-gray-200 dark:ring-gray-700 flex items-center justify-center`}>
                          <FaShieldAlt className="text-white text-6xl sm:text-7xl" />
                        </div>
                      )}
                      <p className="font-bold text-base sm:text-lg md:text-xl text-gray-900 dark:text-white group-hover/skill:text-blue-500 transition-colors duration-300 mt-2">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scroll indicators */}
              {skillsScrollLeft && (
                <button
                  onClick={() => {
                    const carousel = document.querySelector('#skills .overflow-x-auto');
                    if (carousel) carousel.scrollBy({ left: -300, behavior: 'smooth' });
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
                    if (carousel) carousel.scrollBy({ left: 300, behavior: 'smooth' });
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

        <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>

        {/* Projects Section */}
        <section className="py-20 px-4 sm:px-10 bg-gray-900 text-white transition-opacity duration-700" id="projects">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</h2>
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div 
                className="overflow-x-auto scrollbar-hide scroll-smooth"
                onScroll={(e) => {
                  const scrollLeft = e.target.scrollLeft > 0;
                  const scrollRight = e.target.scrollLeft < (e.target.scrollWidth - e.target.clientWidth - 10);
                  setProjectsScrollLeft(scrollLeft);
                  setProjectsScrollRight(scrollRight);
                }}
              >
                <div className="flex gap-6 pb-4 px-4 min-w-max">
                  {projects.map(project => (
                    <div key={project.name} className="flex-shrink-0 w-80 sm:w-96 group/project relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-105">
                      <div className="relative h-56 sm:h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover/project:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover/project:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-5 sm:p-6">
                        <h3 className="font-bold text-lg sm:text-xl mb-2 group-hover/project:text-blue-400 transition-colors duration-300 line-clamp-1">{project.name}</h3>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.name} website.</p>
                        <div className="text-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold text-sm sm:text-base"
                          >
                            Visit Site
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scroll indicators */}
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

        <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>

        {/* Contact Section */}
        <section className="py-20 px-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-opacity duration-700" id="contact">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contact</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-xl">
              <img
                src={contactImage}
                alt="Contact"
                className="w-48 h-48 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 flex-shrink-0 ring-4 ring-blue-500 ring-opacity-50"
              />
              <div className="flex-1">
                <div className="space-y-3 mb-6">
                  <p className="text-lg"><span className="font-semibold text-blue-500">Office:</span> 0100-285-721 / 0716-877 234</p>
                  <p className="text-lg"><span className="font-semibold text-blue-500">Mobile:</span> 0798-244 545</p>
                  <p className="text-lg"><span className="font-semibold text-blue-500">Email:</span> ericmutuma15@gmail.com</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:ericmutuma15@gmail.com"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold text-center transform hover:scale-105"
                  >
                    Mail Me
                  </a>
                  <a
                    href="https://wa.me/254716877234"
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
        <footer className="bg-gray-900 text-white py-10 text-center">
          <p>&copy; 2025 Eric Mutuma. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
