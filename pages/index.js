/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full sm:w-7/12 md:w-8/12 lg:w-8/12 xl:w-6/12 px-4 z-2">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Welcome to PT Surya Terang Sejati.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Innovative concepts, creative design, flawless execution.
              </p>
            </div>
          </div>
          <div>
            <img
              className="absolute top-10 b-auto right-0 pt-16 sm:w-4/12 sm:mt-0 w-8/12"
              src="/img/construction.svg"
              alt="..."
            />
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="/img/building-1.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    ABOUT US
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Established since 1986 and has handle over 1000 of project contracts in all indonesia, such as Sumatra, Java, Bali, and Nusa Tenggara. Lead by profesional human resource in daily operational.
                  </p>
                  <p className="text-md font-light mt-2 text-white">
                    Bali based contractor and become PLN partner in more than decades. Expertise in Mechanical Electrical Pumbling (MEP), Civil Construction and Building Development.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4 ">
              <div className="flex flex-wrap ">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass "></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Projects Completed
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        1424
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-smile"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Satisfied Clients
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        152
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-signature"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Contractors Appointed</h6>
                      <p className="mb-4 text-blueGray-500">
                        768
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0 justify-center items-center">
                    <div className="px-4 py-5 flex-auto justify-center items-center">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-city"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Constructed Building
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        135
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="relative flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Constructions
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We take pride in our work throughout every step of the process. 
                During the preconstruction phase, it is critical to provide accurate cost estimates 
                and scheduling input to identify and correct any unforeseen issues prior to construction. 
                Through constant communication with team members, 
                we manage our clients expectations from concept to delivery.
              </p>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 top-0 md:mt-0">
                <img
                  alt="..."
                  src="/img/constructionsite.svg"
                  className="w-full align-middle rounded"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 top-0 md:mt-0">
                <img
                  alt="..."
                  src="/img/mep.svg"
                  className="w-full align-middle rounded"
                />
              </div>
            </div>

            <div className="relative w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                MEP Engineers
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                For many decades our core business has been the engineering and design of building services and technical systems. 
                we develop safe, sustainable and comfortable environments for both client and staff.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"> 
                Core competencies including mechanical, electrical, plumbing and fire safety engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">
                  Network Infrastructure
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                 Provide quality, consistent and value service to company for managing network infrastructure and reduce spending cost.
                 We are confident and able to provide quality, consistent and value-added services to achieve common goals your company in managing the network and reduce the cost of corporate spending. 
                 Through this product, your company will be easier in managing information technology system.
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg"
                src="/img/itengineer2.svg"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Services</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Our profesional will support to fulfill client goals
            </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Constructions
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i class="fas fa-circle-notch"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Design
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i class="fas fa-circle-notch"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Engineering
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i class="fas fa-circle-notch"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Technologies
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i class="fas fa-circle-notch"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Maintenance
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
              
          </div>
        </div>
      </section>
        



      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Our reputation is as solid as concrete.</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              1000+ Completed projects in more than 100 companies
            </p>
            <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
            >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>
        </div>

        
      </section>

      
      <section className="pb-16 bg-blueGray-200 relative pt-32">
        

        <div className="container px-4 mx-auto	">
          <div className="flex flex-wrap w-full gap-3 grid grid-cols-1 md:grid-cols-4 auto-cols-max md:auto-cols-min min-h-screen bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 z-10">
            <div className="w-full px-4 flex-1	" >
              <img
                alt="..."
                src="/img/logo/beachwalk.png"
                className="w-full m-auto align-middle rounded-lg max-w-180-px"
              />
            </div>
            <div className="w-full px-4 flex-1 ">
              <img
                alt="..."
                src="/img/logo/PLN.png"
                className="h-20 m-auto align-middle rounded-lg "
              />
            </div>
            <div className="w-full px-4 flex-1">
              <img
                alt="..."
                src="/img/logo/bndc.png"
                className="w-full m-auto align-middle rounded-lg relative max-w-180-px"
              />
            </div>
            <div className="w-full px-4 flex-1">
              <img
                alt="..."
                src="/img/logo/bimc-logo.png"
                className="w-full m-auto align-middle rounded-lg relative max-w-180-px"
              />
            </div>
            <div className="w-full px-4 flex-1">
              <img
                alt="..."
                src="/img/logo/fourpoint.png"
                className="w-full m-auto align-middle rounded-lg relative max-w-180-px"
              />
            </div>
            <div className="w-full px-4 flex-1">
              <img
                  alt="..."
                  src="/img/logo/indopwr.png"
                  className="w-full m-auto align-middle rounded relative max-w-180-px"
              />
          </div>
          <div className="w-full px-4 flex-1">
              <img
                  alt="..."
                  src="/img/logo/moratel.png"
                  className="w-full m-auto align-middle rounded relative max-w-180-px"
              />
          </div>

          <div className="w-full px-4 flex-1">
              <img
                  alt="..."
                  src="/img/logo/logo-bpk.png"
                  className="w-full m-auto align-middle rounded relative max-w-120-px"
              />
          </div>
              <div className="w-full px-4 flex-1">
                <img
                    alt="..."
                    src="/img/logo/pindad.png"
                    className="w-full m-auto align-middle rounded relative max-w-180-px"
                />
              </div>  
            <div className="w-full px-4 flex-1">
              <img
                
                alt="..."
                src="/img/logo/pakreg.png"
                className="w-full m-auto align-middle rounded relative max-w-180-px"
          
              />
            </div>  
              <div className="w-full px-4 flex-1">
                <img
                  
                  alt="..."
                  src="/img/logo/3-Advantage-SCM.png"
                  className="w-full m-auto align-middle rounded relative max-w-180-px"
                />
              </div>

              <div className="w-full px-4 flex-1">
                <img
                  
                  alt="..."
                  src="/img/logo/trans.png"
                  className="w-full m-auto align-middle rounded relative max-w-180-px "
                />
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
