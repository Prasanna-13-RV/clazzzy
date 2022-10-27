import React from "react";

const FourSideComponent = () => {
    return (
        <>
            <h1
                className="w-full flex justify-center items-center flex-col mt-3 text-center text-4xl text-[#6D6875] font-display font-semibold lg:text-left xl:text-3xl
                    xl:text-bold"
            >
                Shopping is an Art!
            </h1>
            <div className="p-6 text-gray-800 flex flex-row ">
                <div className="px-10 text-center text-black">
                    <p className="text-black ">
                        Shopping has always been a favorite pastime of many
                        people. With the rise of ecommerce, it has become even
                        more convenient to shop from the comfort of your home.
                        But as much as we love shopping, it can be stressful and
                        tiring when you have to go through all the products on a
                        website or store. That’s where shopping relax comes in!
                    </p>
                    <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10" />
                    <p className="text-black ">
                        It is an website that helps you find products quickly
                        and easily with just a few taps on your phone and PC.
                        You can also filter by category and price. There’s no
                        need for you to worry about not being able to use it
                        because of your phone type. The website also provides
                        customer reviews which can help you make an informed
                        decision before purchasing anything
                    </p>
                </div>
                <div className="px-10 text-center text-black mb-10">
                    <p className="text-black ">
                        Shopping is a great way to relax for many people. This
                        is because you are able to browse through the items and
                        find what you want without having to worry about
                        anything else.
                    </p>
                    <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10" />
                    <p className="text-black ">
                        Shopping in ecommerce has become more and more popular
                        than ever before. This is because it has many benefits
                        that traditional shopping doesn't have. These benefits
                        include being able to shop at anytime, not having to go
                        outside, and being able to find what you are looking for
                        in seconds.
                    </p>
                </div>
            </div>
        </>
    );
};

export default FourSideComponent;
