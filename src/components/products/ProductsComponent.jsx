import React, {useState, useEffect} from "react";
import axios from "axios";
// require(dotenv).config();
import SearchComponent from "./SearchComponent";
import TableComponent from "./TableComponent";
import PaginationComponent from "./PaginationComponent";
import SortComponent from "./SortComponent";
import CategoriesComponent from "./CategoriesComponent";
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from "@heroicons/react/20/solid";

import "./CSS/products.css";


const ProductsComponent = () => {
    const [obj, setObj] = useState({});
    const [sort, setSort] = useState({sort: "rating", order: "desc"});
    const [filterCategories, setFilterCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [click, setClick] = useState(false);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const url = `${process.env.REACT_APP_API_URL}/api/product/?page=${page}&sort=${sort.sort},${
                    sort.order
                }&categories=${filterCategories.toString()}&search=${search}`; 
                const {data} = await axios.get(url);
                setObj(data);
                // console.log(data, "data");
            } catch (err) {
                console.log(err);
            }
        };
        getAllProducts();
    }, [sort, filterCategories, page, search]);

    return (
        <>
            <div>
                <div className="relative">
                    <div className="relative">
                        {/* <img className="logo" /> */}
                        <div className="flex px-10 mt-5 w-full">
                            <SearchComponent
                                setSearch={(search) => setSearch(search)}
                            />
                            <div className="flex justify-center items-center">
                                {/* <img
                                    className="h-10 z-50"
                                    src="https://img.icons8.com/ios-filled/45/000000/filter--v1.png"
                                    onClick={() => setClick(!click)}
                                /> */}
                                <FunnelIcon
                                    className="h-5 w-5 cursor-pointer"
                                    aria-hidden="true"
                                    onClick={() => setClick(!click)}
                                />
                            </div>
                        </div>
                        {click ? (
                            <>
                                <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-40"></div>
                                <div
                                    id="small-modal"
                                    tabindex="-1"
                                    className="flex justify-center items-center fixed z-50 w-full md:inset-0 h-modal md:h-full"
                                >
                                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                                        <div className="relative bg-white rounded-lg shadow">
                                            <div className="flex justify-between items-center p-5 rounded-t border-b">
                                                <h3 className="text-xl font-medium text-gray-900">
                                                    Category
                                                </h3>
                                                <button
                                                    type="button"
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                                    data-modal-toggle="small-modal"
                                                    onClick={() =>
                                                        setClick(!click)
                                                    }
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                    <span className="sr-only">
                                                        Close modal
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="pb-6 space-y-6">
                                                <div className="bg-white right-10 w-[200px] pl-6 my-2 py-3">
                                                    <SortComponent
                                                        sort={sort}
                                                        setSort={(sort) =>
                                                            setSort(sort)
                                                        }
                                                    />
                                                    <CategoriesComponent
                                                        filterCategories={
                                                            filterCategories
                                                        }
                                                        categories={
                                                            obj.categories
                                                                ? obj.categories
                                                                : []
                                                        }
                                                        setFilterCategories={(
                                                            category
                                                        ) =>
                                                            setFilterCategories(
                                                                category
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                    <div>
                        <div className="w-[95vw] flex-col justify-center items-center">
                            <TableComponent
                                products={obj.products ? obj.products : []}
                            />
                            <PaginationComponent
                                page={page}
                                limit={obj.limit ? obj.limit : 0}
                                total={obj.total ? obj.total : 0}
                                setPage={(page) => setPage(page)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsComponent;
