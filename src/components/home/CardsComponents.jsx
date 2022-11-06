import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const CardsComponents = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/home`)
            .then((response) => setProducts(response.data));
    };

    useEffect(() => {
        getProducts();
    }, [products]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Customers also purchased
                </h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-2 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 py-5">
                            <Link to={`/singleproduct/${product._id}`}>
                                <img className="w-full h-[15rem] object-contain" src={product.img} />
                            </Link>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {product.name}
                                </div>
                                <p className="text-gray-700 text-base">
                                    {product.description}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <div className="text-gray-500 text-sm">
                                    {product.categories &&
                                        product.categories.map(
                                            (category, err) => {
                                                return (
                                                    <div
                                                        key={category}
                                                        className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full"
                                                    >
                                                        {category}
                                                    </div>
                                                );
                                            }
                                        )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardsComponents;
