import React from "react";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between px-10 my-5">
            <div>
                <p className="text-sm text-gray-700">
                    Showing{" "}
                    {/* <span className="font-medium">1</span> to{" "}
                            <span className="font-medium">10</span> of{" "} */}
                    {/* <span className="font-medium">{totalPages} Page</span>{" "} */}
                    results
                </p>
            </div>
            <div>
                <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                >
                    {pages.map((page, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(page)}
                                className={
                                    page == currentPage
                                        ? "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                                        : "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                }
                            >
                                {page}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Pagination;
