import React from "react";

const SearchComponent = ({setSearch}) => {
    return (
        <>
            {/* <input
                className="search"
                type="text"
                placeholder="Search"
                onChange={({currentTarget: input}) => setSearch(input.value)}
            /> */}
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
                Search
            </label>
            <div className="relative w-full">
                {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div> */}
                <input
                    type="search"
                    id="default-search"
                    className="w-1/2 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                    placeholder="Search Products..."
                    required
                    onChange={({currentTarget: input}) =>
                        setSearch(input.value)
                    }
                />
            </div>
        </>
    );
};

export default SearchComponent;