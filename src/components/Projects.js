import React, { useEffect } from "react";

// helper Component
import Footer from "../components/helpers/Footer";
import ProjectImage from "../components/helpers/ImageHelpers/ProjectImage";

//Image Components
import portfolio from "../img/portfolio-hero.png";
import breakingBad from "../img/breakingbad.webp";
import destiny from "../img/destiny.webp";
import netflix from "../img/netflix.webp";
import gallery from "../img/gallery.webp";
import firebase from "../img/firebase.png";
import piroll from "../img/piroll.png";
import astutex from "../img/demo-streaming.png";
import ProjectLink from "./helpers/ProjectLink";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects - Thamizh's portfolio";
  }, []);

  return (
    <div className="mt-20 w-11/12 xl:w-4/5 mx-auto grid grid-cols-1 gap-16">
      {/* card - 1 */}
      <h1 className="text-3xl lg:text-4xl mt-8 font-semibold uppercase text-center">
        Projects
      </h1>
      <section className="w-full h-full m-auto  border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <ProjectImage image={portfolio} />
          <div className="text-sm lg:text-base m-10 text-center md:text-left">
            <p className="text-xl lg:text-2xl font-bold">Personal Portfolio</p>
            <p className="mt-2 lg:mt-5 lg:text-base font-semibold underline">
              Tools used for this Project:
            </p>
            <ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; React.js</li>
              <ul>
                <li className="ml-10">Hooks</li>
                <li className="ml-10">React Router</li>
              </ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Tailwind css
              </li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Mob Responsive
              </li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; AOS - Animation On Scroll
              </li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <ProjectLink
                heading={"Source Code"}
                link={"https://github.com/thamizh27/personal-portfolio.git"}
              />
            </div>
          </div>
        </div>
      </section>
      {/* card - 2 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <ProjectImage image={firebase} />
          <div className="text-sm lg:text-base m-10 text-center md:text-left">
            <p className="text-xl lg:text-2xl font-bold">
              Firebase CRUD Operation
            </p>
            <p className="mt-2 lg:mt-5 lg:text-base font-semibold underline">
              Tools used for this Project:
            </p>
            <ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; React</li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; Material UI</li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; Firebase</li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <div>
                <ProjectLink
                  heading={"Source Code"}
                  link={"https://github.com/thamizh27/firstoreapp"}
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <ProjectLink
                  heading={"Live"}
                  link={"https://react-firestore-app.netlify.app/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 3 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <ProjectImage image={breakingBad} />
          <div className="text-sm lg:text-base m-10 text-center md:text-left">
            <p className="text-xl lg:text-2xl font-bold">Breaking Bad App</p>
            <p className="mt-2 lg:mt-5 lg:text-base font-semibold underline">
              Tools used for this Project:
            </p>
            <ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; React.js</li>
              <ul>
                <li className="ml-10">Hooks</li>
                <li className="ml-10">Axios - Ajax library</li>
              </ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; Vannila css</li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Mob Responsive
              </li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <div>
                <ProjectLink
                  heading={"Source Code"}
                  link={"https://github.com/thamizh27/breakingbad.git"}
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <ProjectLink
                  heading={"Live"}
                  link={"https://thamizh27.github.io/breakingbad/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 4 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <ProjectImage image={gallery} />
          <div className="text-sm lg:text-base m-10 text-center md:text-left">
            <p className="text-xl lg:text-2xl font-bold">Pixabay Gallery</p>
            <p className="mt-2 lg:mt-5 lg:text-base font-semibold underline">
              Tools used for this Project:
            </p>
            <ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; React.js</li>
              <ul>
                <li className="ml-10">Hooks</li>
                <li className="ml-10">Data Fetching</li>
              </ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Tailwind css
              </li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Mob Responsive
              </li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <div>
                <ProjectLink
                  heading={"Source Code"}
                  link={"https://github.com/thamizh27/image-gallery.git"}
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <ProjectLink
                  heading={"Live"}
                  link={"https://thamizh27.github.io/image-gallery/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 5 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <ProjectImage image={netflix} />
          <div className="text-sm lg:text-base m-10 text-center md:text-left">
            <p className="text-xl lg:text-2xl font-bold">
              Netflix Landing Page Clone
            </p>
            <p className="mt-2 lg:mt-5 lg:text-base font-semibold underline">
              Tools used for this Project:
            </p>
            <ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; HTML</li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; CSS</li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Vanilla JavaScript
              </li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Mob Responsive
              </li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <div>
                <ProjectLink
                  heading={"Source Code"}
                  link={"https://github.com/thamizh27/netflix-landing-page.git"}
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <ProjectLink
                  heading={"Live"}
                  link={"https://thamizh27.github.io/netflix-landing-page/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 6 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <ProjectImage image={destiny} />
          <div className="text-sm lg:text-base m-10 text-center md:text-left">
            <p className="text-xl lg:text-2xl font-bold">Gym Landing Page</p>
            <p className="mt-2 lg:mt-5 lg:text-base font-semibold underline">
              Tools used for this Project:
            </p>
            <ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Tailwind Starter Kit
              </li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; AOS - Animation On Scroll
              </li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Mob Responsive
              </li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <div>
                <ProjectLink
                  heading={"Source Code"}
                  link={"https://github.com/thamizh27/destiny-lan-page.git"}
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <ProjectLink
                  heading={"Live"}
                  link={"https://thamizh27.github.io/destiny-lan-page/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 7 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <ProjectImage image={piroll} />
          <div className="text-sm lg:text-base m-10 text-center md:text-left">
            <p className="text-xl lg:text-2xl font-bold">
              Piroll static webpage
            </p>
            <p className="mt-2 lg:mt-5 lg:text-base font-semibold underline">
              Tools used for this Project:
            </p>
            <ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Vanilla JavaScript
              </li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; Vanilla CSS</li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Mob Responsive
              </li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <div>
                <ProjectLink
                  heading={"Source Code"}
                  link={"https://github.com/thamizh27/piroll-template"}
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <ProjectLink
                  heading={"Live"}
                  link={"https://piroll-design-template.netlify.app/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 8 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <ProjectImage image={astutex} />
          <div className="text-sm lg:text-base m-10 text-center md:text-left">
            <p className="text-xl lg:text-2xl font-bold">Demo Streaming App</p>
            <p className="mt-2 lg:mt-5 lg:text-base font-semibold underline">
              Tools used for this Project:
            </p>
            <ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; React</li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Data Fetching
              </li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; Vanilla CSS</li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <div>
                <ProjectLink
                  heading={"Source Code"}
                  link={"https://github.com/thamizh27/Astutex"}
                />
              </div>
              <div className="mt-2 lg:mt-4">
                <ProjectLink
                  heading={"Live"}
                  link={"https://astutex-demo-streaming.netlify.app/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Projects;
