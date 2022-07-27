import React, { FunctionComponent } from 'react'

const Header: FunctionComponent = () => (
    <div className="bg-white w-full fixed">
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        stroke="white"
                        fill="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-lg"
                    >
                        <path d="M389.376 0H122.624c-5.632 0-10.199 4.566-10.199 10.199v491.602c0 5.633 4.567 10.199 10.199 10.199h266.752c5.632 0 10.199-4.566 10.199-10.199V10.199C399.575 4.566 395.008 0 389.376 0zm-91.45 491.602h-31.727v-31.193c0-5.633-4.567-10.199-10.199-10.199s-10.199 4.566-10.199 10.199v31.193h-31.726v-85.383h83.851v85.383zm81.252 0h-60.855V396.02c0-5.633-4.567-10.199-10.199-10.199H203.876c-5.632 0-10.199 4.566-10.199 10.199v95.582h-60.854V20.398h246.355v471.204z" />
                        <path d="M230.96 43.436h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V53.636c0-5.633-4.567-10.2-10.199-10.2zm-10.199 63.367h-42.968V63.835h42.968v42.968zM344.407 43.436H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V53.636c0-5.633-4.567-10.2-10.199-10.2zm-10.199 63.367H291.24V63.835h42.968v42.968zM230.96 155.861h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V166.06c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367h-42.968V176.26h42.968v42.968zM344.407 155.861H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199V166.06c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367H291.24V176.26h42.968v42.968zM230.96 268.286h-63.367c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.567 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199v-63.367c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367h-42.968v-42.968h42.968v42.968zM344.407 268.286H281.04c-5.632 0-10.199 4.566-10.199 10.199v63.367c0 5.633 4.566 10.199 10.199 10.199h63.367c5.632 0 10.199-4.566 10.199-10.199v-63.367c0-5.633-4.567-10.199-10.199-10.199zm-10.199 63.367H291.24v-42.968h42.968v42.968zM256 418.526c-5.632 0-10.199 4.566-10.199 10.199v1.022c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-1.022c0-5.632-4.567-10.199-10.199-10.199z" />
                    </svg>
                    <span className="ml-3 text-xl">Housling</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">Contact</a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Button
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    </div>
)

export default Header
