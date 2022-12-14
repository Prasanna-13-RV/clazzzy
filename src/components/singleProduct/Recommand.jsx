import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const Recommand = ({category}) => {
    const [products, setProducts] = useState([]);
    const [recommandation, setRecommandation] = useState([]);
    const [recommand, setRecommand] = useState([]);

    const getProducts = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/recommend`)
            .then((response) => {
                // setProducts(response.data.filter);
                const categoriesOptions = [
                    "Clothing",
                    "Fruits",
                    "Vegetables",
                    "Others",
                    "Shirts",
                ];
                const all = response.data.filter((pro) => {
                    // return pro.categories.forEach((e) => {
                    // categoriesOptions.forEach(element => {
                    // })
                    return pro.categories.some((element) =>
                        category.includes(element)
                    );
                    // });
                });
                setProducts(all);
            });
    };

    useEffect(() => {
        getProducts();
        console.log(category);
    }, [category]);

    // const recommandProducts = () => {
    //     {
    //         products &&
    //             products.map((e, index) => {
    //                 // console.log(e.categories);
    //                 e.categories.forEach((element2) => {
    //                     category.forEach((element) => {
    //                         if (element == element2) {
    //                             setRecommandation([...recommandation, e]);
    //                         }
    //                     });
    //                 });
    //             });
    //     }
    // };

    // useEffect(() => {
    //     recommandProducts();
    // }, []);

    return (
        <>
            <section className="w-full my-5 px-10">
                <h1 className="w-full m-5 text-2xl flex justify-center items-center">
                    Recommended Products
                    {/* {JSON.stringify(products)} */}
                </h1>

                <div className="flex flex-row flex-wrap justify-center items-center">
                    {products &&
                        products.map((product) => {
                            return (
                                <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
                                    <a href={`/singleproduct/${product._id}`}>
                                        <img
                                            className="w-full h-[15rem] object-contain"
                                            src={product.img}
                                        />
                                    </a>
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
                                                            <p
                                                                key={category}
                                                                className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full"
                                                            >
                                                                {category}
                                                            </p>
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </section>
        </>
    );
};

export default Recommand;
