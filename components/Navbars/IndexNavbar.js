import React from "react";
import Link from "next/link";
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://static.wixstatic.com/media/eb005f_67ff566420dd4b3a9d674d4c8788b29a~mv2.png/v1/fill/w_588,h_178,al_c,q_85,usm_0.66_1.00_0.01/Logo%20Detail.webp/${src}?w=${width}&q=${quality || 75}`
}

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

              <Image
                loader={myLoader}
                src="/me.png"
                alt="Surya Terang Sejati, PT"
                width={150}
                height={45}
              />
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>

          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {/* <IndexDropdown /> */}
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://suryaterangsejati.id"
                  target="_blank"
                >
                  <span className="inline-block ml-2">Home</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <span className="inline-block ml-2">Bussines Line</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-info-circle"></i> Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
