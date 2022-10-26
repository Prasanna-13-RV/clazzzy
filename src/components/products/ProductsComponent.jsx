import React, {useState, useEffect} from "react";
import axios from "axios";
// require(dotenv).config();
import SearchComponent from "./SearchComponent";
import TableComponent from "./TableComponent";
import PaginationComponent from "./PaginationComponent";
import SortComponent from "./SortComponent";
import CategoriesComponent from "./CategoriesComponent";

import "./CSS/products.css";

const base_url = process.env.REACT_APP_API;
// const base_url = `http://localhost:8080/api/product`;

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
                const url = `${base_url}?page=${page}&sort=${sort.sort},${
                    sort.order
                }&categories=${filterCategories.toString()}&search=${search}`;
                const {data} = await axios.get(url);
                setObj(data);
                console.log(data, "data");
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
                            <img
                                className="h-10 z-50"
                                src="https://img.icons8.com/ios-filled/45/000000/filter--v1.png"
                                onClick={() => setClick(!click)}
                            />
                        </div>
                        {click ? (
                            <div className="bg-white absolute top-[-15px] right-10 border w-[200px] pl-6 my-2 py-3">
                                <SortComponent
                                    sort={sort}
                                    setSort={(sort) => setSort(sort)}
                                />
                                <CategoriesComponent
                                    filterCategories={filterCategories}
                                    categories={
                                        obj.categories ? obj.categories : []
                                    }
                                    setFilterCategories={(category) =>
                                        setFilterCategories(category)
                                    }
                                />
                            </div>
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
