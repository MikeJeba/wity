import React from "react";
import menu from "./assets/images/menu.jpg";
import menu2 from "./assets/images/menu2.jpg";
import menu3 from "./assets/images/menu3.jpg";
import menu4 from "./assets/images/menu4.jpg";
import menu6 from "./assets/images/menu6.jpg";
import menu8 from "./assets/images/menu8.jpg";
import about from "./assets/images/about.jpg";

function Home() {
  return (
    <div>
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          class="text-red-700 hover:text-white border border-red-600 bg-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:bg-gray-900 dark:focus:ring-red-800"
        >
          All categories
        </button>
        <button
          type="button"
          class="text-red-500 border border-white hover:border-red-200 dark:border-red-900 dark:bg-red-900 dark:hover:border-red-700 bg-white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring--800"
        >
          Cakes
        </button>
        <button
          type="button"
          class="text-red-500 border border-white hover:border-red-200 dark:border-red-900 dark:bg-red-900 dark:hover:border-red-700 bg-white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-red-800"
        >
          Chocolates
        </button>
        <button
          type="button"
          class="text-red-500 border border-white hover:border-red-200 dark:border-red-900 dark:bg-red-900 dark:hover:border-red-700 bg-white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-red-800"
        >
          Cookies
        </button>
        <button
          type="button"
          class="text-red-500 border border-white hover:border-red-200 dark:border-red-900 dark:bg-red-900 dark:hover:border-red-700 bg-white focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-red-800"
        >
          Buffs
        </button>
      </div>
      <div>
        <h1 class="italic mb-4 text-center text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Our Delicacies
          </span>
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div class="scale-75">
            <img class="h-auto max-w-full rounded-full" src={menu} alt="" />
            <p class="text-center text-2xl font-normal text-black-500 sm-20">
              Cakes
            </p>
          </div>
          <div class="scale-75">
            <img class="h-auto max-w-full rounded-full" src={menu2} alt="" />
            <p class="text-center text-2xl font-normal text-black-500 sm-20">
              Chocolates
            </p>
          </div>
          <div class="scale-75">
            <img class="h-auto max-w-full rounded-full" src={menu3} alt="" />
            <p class="text-center text-2xl font-normal text-black-500 sm-20">
              Cookies
            </p>
          </div>
          <div className="aspect-square">
            <div class="scale-75">
              <img class="h-auto max-w-full rounded-full" src={menu4} alt="" />
              <div class="flex items-center">
                <p class="text-center text-2xl font-normal text-black-500 sm-20">
                  Pasteries
                </p>
              </div>
            </div>
          </div>
          <div class="scale-75">
            <img class="h-auto max-w-full rounded-full" src={menu6} alt="" />
            <p class="text-center text-2xl font-normal text-black-500 sm-20">
              Puffs
            </p>
          </div>
          <div class="scale-75">
            <img class="h-auto max-w-full rounded-full" src={menu8} alt="" />
            <p class="text-left text-2xl font-normal text-black-500 sm-20">
              Cupcakes
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 class="italic mb-4 text-center text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-rose-600 from-red-400">
            Products
          </span>
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2">
        <div class="">
          <div class="w-80 bg-white shadow rounded">
            <div class="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
              <input type="checkbox" />
              <img src={menu} alt="" />
              <div class="flex justify-between">
                <button class="text-white hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
                <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                  available{" "}
                </span>
              </div>
            </div>
            <div class="p-4 flex flex-col items-center">
              <p class="text-gray-400 font-light text-xs text-center">
                Pasteries
              </p>
              <h1 class="text-gray-800 text-center mt-1">Cakes</h1>
              <p class="text-center text-gray-800 mt-1">Rs.600</p>
              <div class="inline-flex items-center mt-2">
                <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-4"
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
                <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  2
                </div>
                <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-4"
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

              <button class="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                Add to order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 ml-2"
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
        <div class="w-80 bg-white shadow rounded">
          <div class="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu2} alt="" />
            <div class="flex justify-between">
              <button class="text-white hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
              <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div class="p-4 flex flex-col items-center">
            <p class="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 class="text-gray-800 text-center mt-1">Chocolates</h1>
            <p class="text-center text-gray-800 mt-1">Rs.600</p>
            <div class="inline-flex items-center mt-2">
              <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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
              <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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

            <button class="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2"
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
        <div class="w-80 bg-white shadow rounded">
          <div class="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu3} alt="" />
            <div class="flex justify-between">
              <button class="text-white hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
              <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div class="p-4 flex flex-col items-center">
            <p class="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 class="text-gray-800 text-center mt-1">Cookies</h1>
            <p class="text-center text-gray-800 mt-1">Rs.600</p>
            <div class="inline-flex items-center mt-2">
              <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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
              <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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

            <button class="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2"
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
        <div class="w-80 bg-white shadow rounded">
          <div class="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu8} alt="" />
            <div class="flex justify-between">
              <button class="text-white hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
              <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div class="p-4 flex flex-col items-center">
            <p class="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 class="text-gray-800 text-center mt-1">Cupcakes</h1>
            <p class="text-center text-gray-800 mt-1">Rs.600</p>
            <div class="inline-flex items-center mt-2">
              <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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
              <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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

            <button class="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2"
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
        <div class="w-80 bg-white shadow rounded">
          <div class="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu} alt="" />
            <div class="flex justify-between">
              <button class="text-white hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
              <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div class="p-4 flex flex-col items-center">
            <p class="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 class="text-gray-800 text-center mt-1">Cupcakes</h1>
            <p class="text-center text-gray-800 mt-1">Rs.600</p>
            <div class="inline-flex items-center mt-2">
              <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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
              <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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

            <button class="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2"
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
        <div class="w-80 bg-white shadow rounded">
          <div class="h-48 w-full bg-white-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <input type="checkbox" />
            <img src={menu8} alt="" />
            <div class="flex justify-between">
              <button class="text-white hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
              <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available{" "}
              </span>
            </div>
          </div>
          <div class="p-4 flex flex-col items-center">
            <p class="text-gray-400 font-light text-xs text-center">
              Pasteries
            </p>
            <h1 class="text-gray-800 text-center mt-1">Cupcakes</h1>
            <p class="text-center text-gray-800 mt-1">Rs.600</p>
            <div class="inline-flex items-center mt-2">
              <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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
              <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                2
              </div>
              <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
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

            <button class="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2"
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
        <h1 class="italic mb-4 text-center text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-red-600">
            About Us
          </span>
        </h1>
      </div>
      <div>
        <p class="mb-3 text-center text-gray-500 dark:text-gray-400">
          This is a place where you get a wide choice of rich delicious cakes &
          pastries for all occasion.Aim to serve the most creative and
          mouth-watering cakes, to help celebrate your events in a special
          way!Pick a design you like and then choose from delectable
          flavours.You can then sit back and relax & expect a wonderful cake to
          arrive at your desired location, on your chosen date nad time.
        </p>
        <div class="bg-center">
          <img class="bg-center" src={about} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
