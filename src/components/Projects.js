import React, { useEffect } from "react";
import portfolio from "../img/portfolio.png";
import breakingBad from "../img/breakingbad.png";
import destiny from "../img/destiny.png";
import netflix from "../img/netflix.png";
import gallery from "../img/gallery.png";
import parallax from "../img/parallax.png";

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
          <img
            src={portfolio}
            alt="web screenshot"
            className="max-h-48 lg:max-h-80 border border-gray-100 rounded-xl shadow-lg md:m-10 mx-auto my-10"
          />
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
                &#9733; AOS - Animation on scroll
              </li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/thamizh27/personal-portfolio.git"
                className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800 capitalize"
              >
                Source code
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* card - 2 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <img
            src={netflix}
            alt="web screenshot"
            className="max-h-48 lg:max-h-80 border border-gray-100 rounded-xl shadow-lg md:m-10 mx-auto my-10"
          />
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/thamizh27/netflix-landing-page.git"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800 capitalize"
                >
                  Source Code
                </a>
              </div>
              <div className="mt-2 lg:mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://thamizh27.github.io/netflix-landing-page/"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 3 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <img
            src={destiny}
            alt="web screenshot"
            className="max-h-48 lg:max-h-80 border border-gray-100 rounded-xl shadow-lg md:m-10 mx-auto my-10"
          />
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
                &#9733; Mob Responsive
              </li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/thamizh27/destiny-lan-page.git"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800 capitalize"
                >
                  Source Code
                </a>
              </div>
              <div className="mt-2 lg:mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://thamizh27.github.io/destiny-lan-page/"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 4 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <img
            src={breakingBad}
            alt="web screenshot"
            className="max-h-48 lg:max-h-80 border border-gray-100 rounded-xl shadow-lg md:m-10 mx-auto my-10"
          />
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/thamizh27/breakingbad.git"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800 capitalize"
                >
                  Source Code
                </a>
              </div>
              <div className="mt-2 lg:mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://thamizh27.github.io/breakingbad/"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 5 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <img
            src={gallery}
            alt="web screenshot"
            className="max-h-48 lg:max-h-80 border border-gray-100 rounded-xl shadow-lg md:m-10 mx-auto my-10"
          />
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/thamizh27/image-gallery.git"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800 capitalize"
                >
                  Source Code
                </a>
              </div>
              <div className="mt-2 lg:mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://thamizh27.github.io/image-gallery/"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card - 6 */}
      <section className="w-full h-full m-auto border-2 border-gray-100">
        <div className="md:flex items-center justify-evenly">
          <img
            src={parallax}
            alt="web screenshot"
            className="max-h-48 lg:max-h-80 border border-gray-100 rounded-xl shadow-lg md:m-10 mx-auto my-10"
          />
          <div className="text-sm lg:text-base m-10 text-center md:text-left">
            <p className="text-xl lg:text-2xl font-bold">
              Parallax Landing Page
            </p>
            <p className="mt-2 lg:mt-5 lg:text-base font-semibold underline">
              Tools used for this Project:
            </p>
            <ul>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Vanilla JavaScript
              </li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">&#9733; Rellax.js</li>
              <li className="ml-1 mt-2 lg:ml-4 lg:mt-5">
                &#9733; Mob Responsive
              </li>
            </ul>
            <div className="mt-2 lg:mt-4 text-blue-800 font-bold text-center">
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/thamizh27/parallax-landing-page.git"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800 capitalize"
                >
                  Source Code
                </a>
              </div>
              <div className="mt-2 lg:mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://thamizh27.github.io/parallax-landing-page/"
                  className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="mt-10 md:mt-20 border-t-2 border-gray-50 text-center text-sm md:text-xl lg:text-2xl">
          <p className="p-5">&copy; Copyright Thamizh 2020</p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
