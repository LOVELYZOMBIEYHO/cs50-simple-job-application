import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Cookies from "js-cookie";
// This is a Tailwind Navbar
export default function Navbarnavigation() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Mounted & setMounted is based on cookies state to dynamic change Navbar component view
  const [mounted, setMounted] = useState(false);
  //  useEffect make NextJS client side and NextJS serverside are same of cookies :  Solve : Warning: Expected server HTML to contain a matching <div> in <div>.
  useEffect(() => {
    if (
      Cookies.get("id") != null &&
      Cookies.get("id") != "undefined" &&
      Cookies.get("id") == "1"
    )
      setMounted(true);
  }, []);

  return (
    <div>
      <nav className="bg-yellow-400 shadow-xl custom-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div>
                  <Link href="/jobapply">
                    <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
                      Job Application
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {mounted ? (
                    <Link href="/login">
                      <a className=" hover:bg-gray-700 hover:text-white text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                        Logout
                      </a>
                    </Link>
                  ) : (
                    <Link href="/login">
                      <a className=" hover:bg-gray-700 hover:text-white text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                        Login
                      </a>
                    </Link>
                  )}

                  {mounted ? (
                    <div>
                      <Link href="/csv">
                        <a className="text-red-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          CSV download
                        </a>
                      </Link>
                      <Link href="/applicants">
                        <a className="text-red-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Rencent Applicants
                        </a>
                      </Link>
                      <Link href="/applicants/pdf">
                        <a className="text-red-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          PDF download
                        </a>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/jobapply">
                  <a className=" hover:text-white hover:bg-gray-700 text-red-600 block px-3 py-2 rounded-md text-base font-medium">
                    Job Apply
                  </a>
                </Link>
                {mounted ? (
                  <Link href="/login">
                    <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Logout
                    </a>
                  </Link>
                ) : (
                  <Link href="/login">
                    <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Login
                    </a>
                  </Link>
                )}

                {mounted ? (
                  <div>
                    <Link href="/csv">
                      <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        CSV Download
                      </a>
                    </Link>
                    <Link href="/applicants">
                      <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Recent Applicants
                      </a>
                    </Link>
                    <Link href="/applicants/pdf">
                      <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        PDF Download
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
