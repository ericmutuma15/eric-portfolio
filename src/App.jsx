import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
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
import networkingImage from './assets/net.jpg';

// Personal/contact images
import meImage from './assets/me.jpg';
import contactImage from './assets/contact.jpeg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Newest skills first
  const skills = [
    { name: 'Tailwind CSS', image: tailwindImage },
    { name: 'FastAPI', image: fastapiImage },
    { name: 'Express.js', image: expressImage },
    { name: 'Networking Systems', image: networkingImage },

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
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={meImage}
              alt="About Me"
              className="w-48 h-48 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p>
              I'm a full-stack developer, data analyst, and Linux enthusiast. I work with React (Vite/ Next) + Flask/ FastAPI or Node.js to build smooth, full-stack web apps. I'm also experienced in Linux system setup and programming, handling everything from Wi-Fi and Ethernet configuration to terminal-based troubleshooting.
            </p>
          </div>
        </section>

        <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>

        {/* Skills Section */}
        <section className="py-20 px-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-opacity duration-700" id="skills">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map(skill => (
              <div key={skill.name} className="text-center">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="mx-auto mb-4 w-32 h-32 object-cover rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                />
                <p className="font-bold text-lg">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>

        {/* Projects Section */}
        <section className="py-20 px-10 bg-gray-900 text-white transition-opacity duration-700" id="projects">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {projects.map(project => (
              <div key={project.name} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-xl text-center">{project.name}</h3>
                <p className="text-sm text-gray-400 text-center">{project.name} website.</p>
                <div className="text-center mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>

        {/* Contact Section */}
        <section className="py-20 px-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-opacity duration-700" id="contact">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={contactImage}
              alt="Contact"
              className="w-48 h-48 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div>
              <p>Office Lines: 0100-285-721 / 0716-877 234</p>
              <p>Mobile: 0798-244 545</p>
              <p>Email: ericmutuma15@gmail.com</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="mailto:ericmutuma15@gmail.com"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Mail Me
              </a>
              <a
                href="https://wa.me/254716877234"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
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
