import React from "react";

const HeroSectionComponents = () => {
    return (
        <>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 lg:h-screen">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://www.revv.co.in/blogs/wp-content/uploads/2020/03/shopping-in-trivendram-1280x720.jpg"
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Happiness is not
                            <br className="hidden md:block" />
                            in money,{" "}
                            <span className="inline-block text-deep-purple-accent-400">
                                but in shopping
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            Shopping is a bit of a relaxing hobby for me, which
                            is sometimes troubling for the bank balance
                        </p>
                        <div className="flex items-center">
                            <a
                                href="/contact"
                                aria-label=""
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-[#3E3B42] bg-[#FFCDB2] transition duration-200 rounded shadow-md hover:bg-[#F2A69F] focus:shadow-outline focus:outline-none"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSectionComponents;
