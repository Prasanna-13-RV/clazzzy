import React from "react";
import {Link, useNavigate} from "react-router-dom";

const TableComponent = ({products}) => {
    return (
        <>
            <div className="w-full flex flex-row justify-center items-center flex-wrap">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="max-w-sm rounded overflow-hidden shadow-lg my-3 mx-5"
                    >
                        <Link to={`/singleproduct/${product._id}`}>
                            <img
                                className="w-full"
                                src={product.img}
                                alt={product.img}
                            />
                        </Link>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {product.name}
                            </div>
                            <p className="text-gray-700 text-base">
                                {product.description}
                            </p>
                            <p className="text-gray-700 text-base">
                                {product.rating}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {product.categories.map((categories, index) => (
                                <p
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                    key={categories}
                                >
                                    {categories}
                                    {index !== product.categories.length - 1 &&
                                        "/"}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TableComponent;
