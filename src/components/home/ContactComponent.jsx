import React from "react";

const ContactComponent = () => {
    return (
        <>
            <div className="my-20 px-6 mx-auto">
                <section className="mb-20 text-gray-800">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                                <div className="map-container-2 w-full h-[60vh]">
                                    <iframe
                                        src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                        frameborder="0"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="w-full flex flex-wrap pt-12 lg:pt-0">
                                    <div className="w-full">
                                        <div className="w-full flex xl:flex-row lg:flex-row xl:justify-center xl:items-center flex-col">
                                            <div className="mb-8 grow-0 shrink-0 basis-auto w-[45%] md:w-6/12 lg:w-[52%] xl:w-[35%] md:px-6">
                                                <div className="flex items-start">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-[#FFB4A2] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <svg
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fas"
                                                                data-icon="headset"
                                                                className="w-5 text-white"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="grow ml-6">
                                                        <p className="font-bold mb-1">
                                                            Technical support
                                                        </p>
                                                        <p className="text-gray-500">
                                                            support@example.com
                                                        </p>
                                                        <p className="text-gray-500">
                                                            +1 234-567-89
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-8 grow-0 shrink-0 basis-auto w-[45%] md:w-6/12 lg:w-[52%] xl:w-[35%] md:px-6">
                                                <div className="flex items-start">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-[#FFB4A2] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                            <svg
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fas"
                                                                data-icon="dollar-sign"
                                                                className="w-3 text-white"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 288 512"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="grow ml-6">
                                                        <p className="font-bold mb-1">
                                                            Sales questions
                                                        </p>
                                                        <p className="text-gray-500">
                                                            sales@example.com
                                                        </p>
                                                        <p className="text-gray-500">
                                                            +1 234-567-89
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="block rounded-lg px-6 md:px-12"
                                            // style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)"
                                        >
                                            {/* <h2 className="text-3xl font-bold mb-12">
                                                Contact us
                                            </h2> */}
                                            <form className="">
                                                <div className="form-group mb-6 w-full flex flex-row justify-center items-center">
                                                    <input
                                                        type="text"
                                                        className="w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                                        id="exampleInput7"
                                                        placeHolder="Name"
                                                    />
                                                </div>
                                                <div className="form-group mb-6 w-full flex flex-row justify-center items-center">
                                                    <input
                                                        type="email"
                                                        className="w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                                        id="exampleInput8"
                                                        placeHolder="Email address"
                                                    />
                                                </div>
                                                <div className="form-group mb-6 w-full flex flex-row justify-center items-center">
                                                    <textarea
                                                        className="w-5/6 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                                        id="exampleFormControlTextarea13"
                                                        rows="3"
                                                        placeHolder="Message"
                                                    ></textarea>
                                                </div>
                                                {/* <div className="form-group form-check text-center mb-6">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                                        id="exampleCheck87"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-check-label inline-block text-gray-800"
                                                        htmlFor="exampleCheck87"
                                                    >
                                                        Send me a copy of this
                                                        message
                                                    </label>
                                                </div> */}
                                                <div className="w-full flex flex-row justify-center items-center pb-5">
                                                    <button
                                                        type="submit"
                                                        className="w-1/4 px-6 py-2.5 bg-[#E5989B] text-[#29272C] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgba(229,152,155,0.6)] hover:shadow-lg focus:bg-bg-[rgba(229,152,155,0.7)] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-bg-[rgba(229,152,155,0.8)] active:shadow-lg transition duration-150 ease-in-out"
                                                    >
                                                        Send
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactComponent;
