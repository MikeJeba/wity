import React from "react";
import menu from "./assets/images/menu.jpg";
import menu2 from "./assets/images/menu2.jpg";
import menu3 from "./assets/images/menu3.jpg";
import menu4 from "./assets/images/menu4.jpg";
import menu6 from "./assets/images/menu6.jpg";
import menu8 from "./assets/images/menu8.jpg";
import about from "./assets/images/about.jpg";
import menu9 from "./assets/images/menu9.jpg";
import menu10 from "./assets/images/menu10.jpg";
import menu11 from "./assets/images/menu11.jpg";

function Home() {
  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-red-700 hover:text-white border border-red-600 bg-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:bg-gray-900 dark:focus:ring-red-800"
        >
          All categories
        </button>
        <button
          type="button"
          className="text-red-500 border border-white hover:border-red-200 dark:border-red-900 dark:bg-red-900 dark:hover:border-red-700 bg-white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring--800"
        >
          Cakes
        </button>
        <button
          type="button"
          className="text-red-500 border border-white hover:border-red-200 dark:border-red-900 dark:bg-red-900 dark:hover:border-red-700 bg-white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-red-800"
        >
          Chocolates
        </button>
        <button
          type="button"
          className="text-red-500 border border-white hover:border-red-200 dark:border-red-900 dark:bg-red-900 dark:hover:border-red-700 bg-white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-red-800"
        >
          Cookies
        </button>
        <button
          type="button"
          className="text-red-500 border border-white hover:border-red-200 dark:border-red-900 dark:bg-red-900 dark:hover:border-red-700 bg-white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-red-800"
        >
          Buffs
        </button>
      </div>
      <div>
        <h1 className="italic mb-4 text-center text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Our Delicacies
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="scale-75">
            <img className="h-auto max-w-full rounded-full" src={menu} alt="" />
            <p className="text-center text-2xl font-normal text-black-500 sm-20">
              Cakes
            </p>
          </div>
          <div className="scale-75">
            <img
              className="h-auto max-w-full rounded-full"
              src={menu2}
              alt=""
            />
            <p className="text-center text-2xl font-normal text-black-500 sm-20">
              Chocolates
            </p>
          </div>
          <div className="scale-75">
            <img
              className="h-auto max-w-full rounded-full"
              src={menu3}
              alt=""
            />
            <p className="text-center text-2xl font-normal text-black-500 sm-20">
              Cookies
            </p>
          </div>
          <div className="aspect-square">
            <div className="scale-75">
              <img
                className="h-auto max-w-full rounded-full"
                src={menu4}
                alt=""
              />
              <div className="flex items-center">
                <p className="text-center text-2xl font-normal text-black-500 sm-20">
                  Pasteries
                </p>
              </div>
            </div>
          </div>
          <div className="scale-75">
            <img
              className="h-auto max-w-full rounded-full"
              src={menu6}
              alt=""
            />
            <p className="text-center text-2xl font-normal text-black-500 sm-20">
              Puffs
            </p>
          </div>
          <div className="scale-75">
            <img
              className="h-auto max-w-full rounded-full"
              src={menu8}
              alt=""
            />
            <p className="text-left text-2xl font-normal text-black-500 sm-20">
              Cupcakes
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="italic mb-4 text-center text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-rose-600 from-red-400">
            Products
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2">
        <div className="">
          <div className="w-80 bg-white shadow rounded">
            <div className="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
              <input type="checkbox" />
              <img src={menu} alt="" />
              <div className="flex justify-between">
                <button className="text-white hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                  available{" "}
                </span>
              </div>
            </div>
            <div className="p-4 flex flex-col items-center">
              <p className="text-gray-400 font-light text-xs text-center">
                Pasteries
              </p>
              <h1 className="text-gray-800 text-center mt-1">Cakes</h1>
              <p className="text-center text-gray-800 mt-1">Rs.600</p>
              <div className="inline-flex items-center mt-2">
                <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 12H4"
                    />{" "}
                  </svg>
                </button>
                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  2
                </div>
                <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>

              <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                Add to order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-80 bg-white shadow rounded">
          <div className="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu2} alt="" />
            <div className="flex justify-between">
              <button className="text-white hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <div>
              <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <p className="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 className="text-gray-800 text-center mt-1">Chocolates</h1>
            <p className="text-center text-gray-800 mt-1">Rs.600</p>
            <div className="inline-flex items-center mt-2">
              <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />{" "}
                </svg>
              </button>
              <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-80 bg-white shadow rounded">
          <div className="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu3} alt="" />
            <div className="flex justify-between">
              <button className="text-white hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <div>
              <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <p className="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 className="text-gray-800 text-center mt-1">Cookies</h1>
            <p className="text-center text-gray-800 mt-1">Rs.600</p>
            <div className="inline-flex items-center mt-2">
              <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />{" "}
                </svg>
              </button>
              <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-80 bg-white shadow rounded">
          <div className="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu8} alt="" />
            <div className="flex justify-between">
              <button className="text-white hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <div>
              <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <p className="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 className="text-gray-800 text-center mt-1">Cupcakes</h1>
            <p className="text-center text-gray-800 mt-1">Rs.600</p>
            <div className="inline-flex items-center mt-2">
              <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />{" "}
                </svg>
              </button>
              <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-80 bg-white shadow rounded">
          <div className="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu} alt="" />
            <div className="flex justify-between">
              <button className="text-white hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <div>
              <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <p className="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 className="text-gray-800 text-center mt-1">Cupcakes</h1>
            <p className="text-center text-gray-800 mt-1">Rs.600</p>
            <div className="inline-flex items-center mt-2">
              <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />{" "}
                </svg>
              </button>
              <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-80 bg-white shadow rounded">
          <div className="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu8} alt="" />
            <div className="flex justify-between">
              <button className="text-white hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <div>
              <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <p className="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 className="text-gray-800 text-center mt-1">Cupcakes</h1>
            <p className="text-center text-gray-800 mt-1">Rs.600</p>
            <div className="inline-flex items-center mt-2">
              <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />{" "}
                </svg>
              </button>
              <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="italic mb-4 text-center text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-600">
            About Us
          </span>
        </h1>
      </div>
      <div>
        <p className="mb-3 text-center text-gray-500 dark:text-gray-400">
          This is a place where you get a wide choice of rich delicious cakes &
          pastries for all occasion.Aim to serve the most creative and
          mouth-watering cakes, to help celebrate your events in a special
          way!Pick a design you like and then choose from delectable
          flavours.You can then sit back and relax & expect a wonderful cake to
          arrive at your desired location, on your chosen date nad time.
        </p>
        <div className="bg-center">
          <img className="bg-center" src={about} alt="" />
        </div>
      </div>
      <div>
        <h1 className="italic mb-4 text-center text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-600">
            Gallery
          </span>
        </h1>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={menu9}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={menu10}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={menu11}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="italic mb-4 text-center text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-600">
            Videos
          </span>
        </h1>
        <a href="https://youtube.com/shorts/YCTuQ_JcuuU?si=cdW-wYOncA1pMU_j">
          <div className="border-4 rounded border-indigo-600">
            <svg
              className="w-20 h-20 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 16"
            >
              <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
