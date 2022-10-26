import axios from "axios";
import React, {useState, useEffect} from "react";

const Recommand = ({category}) => {
    const [products, setProducts] = useState([]);
    const [recommandation, setRecommandation] = useState([]);

    const getProducts = () => {
        axios
            .get("http://localhost:8080/recommend")
            .then((response) => setProducts(response.data));
    };
    useEffect(() => {
        getProducts();
    }, []);
    console.log(products);

    const recommandProducts = () => {
        category.map((e) => {
            if (e === products.categories) {
                setRecommandation([...recommandation, e]);
            }
            console.log(e);
        });
    };
    useEffect(() => {
        recommandProducts();
        // console.log(recommandation);
    });

    return (
        <>
            <section className="w-full my-5 px-10">
                <h1 className="w-full m-5 text-2xl flex justify-center items-center">
                    Recommanded Products
                </h1>
                <div className="flex flex-row flex-wrap justify-center items-center">
                    {products &&
                        products.map((product) => {
                            return (
                                <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
                                    <img className="w-full" src={product.img} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            {product.name}
                                        </div>
                                        <p className="text-gray-700 text-base">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <p className="text-gray-500 text-sm">
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
                                        </p>
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
