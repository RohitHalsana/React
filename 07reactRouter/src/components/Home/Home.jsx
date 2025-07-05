import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        < div className="w-full min-h-screen bg-pink-200 mx-auto ">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
               

                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">

                    <div className="absolute inset-0 flex flex-wrap items-center justify-center  ">
                    <img className="w-60" src="src\assets\code1.png" alt="image1" />

                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-xl font-bold sm:text-3xl text-blue-900">
                            “Where Code Meets Creativity.”
                            <span className="hidden sm:block text-purple-800 text-xl">Share. Discover. Connect with developers worldwide.</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/register"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Lets Get Started
                        </Link>
                    </div>
                </div>
            </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <h1 className="text-pink-900 font-bold text-4xl hover:text-5xl transition-all duration-300">“Scroll through live code posts, tips, and dev wins.”</h1>

                <img className="m-20 sm:w-96 w-48 hover:scale-105 transition-transform duration-300" src="\src\assets\code2.png" alt="image2" />
            </div>

            <div className="grid place-items-center sm:mt-20">
                <h1 className='text-blue-900 bold text-4xl '>“Follow your favorite developers, creators, and mentors.”</h1>
                
                <div className="my-70 group [perspective:1000px] w-120 h-52 m-10 relative">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* Front */}
                    <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl flex items-center justify-center">
                    <img src="/src/assets/code4.png" className="rounded-3xl w-100" alt="Front" />
                    </div>
                    
                    {/* Back */}
                    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl flex items-center justify-center">
                    <img src="/src/assets/code3.png" className="rounded-3xl w-100" alt="Back" />
                    </div>
                    
                </div>
                </div>

            </div>
        </div>
    );
}