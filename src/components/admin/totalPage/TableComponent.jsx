import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const TableComponent = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const {data} = await axios.get(
                    `http://localhost:8080/admin/readproducts`
                );
                // console.log(data);
                setAllProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [allProducts]);

    const navigate = useNavigate();
    const handleRemove = (id) => {
        axios.delete(`http://localhost:8080/admin/deleteproducts/${id}`);
        console.log(id);
        // navigate("/admin/totalproducts");
    };

    return (
        <>
            <div>
                <div>
                    <a href="/admin/createproducts">
                        <div className="ml-4 my-5 py-3 text-xs inline-flex items-center font-bold leading-sm uppercase px-5 bg-green-200 text-green-700 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-arrow-right mr-2"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                            Create Product
                        </div>
                    </a>
                </div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    {/* <span className="sr-only">Image</span> */}
                                    Image
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Product
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    View
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Update
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts &&
                                allProducts.map((product) => {
                                    return (
                                        <>
                                            <tr
                                                className="bg-white border-b hover:bg-gray-50"
                                                key={product}
                                            >
                                                <td className="p-4 w-[30%]">
                                                    <img
                                                        className="w-52"
                                                        src={product.img}
                                                        alt="Apple Watch"
                                                    />
                                                </td>
                                                <td className="py-4 px-6 font-semibold text-gray-900 w-[20%]">
                                                    {product.name}
                                                </td>
                                                <td className="py-4 px-6 font-semibold text-gray-900 w-[20%]">
                                                    {product.pricing}
                                                </td>
                                                <td className="py-4 px-6 w-[10%]">
                                                    <a
                                                        href="#"
                                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                                    >
                                                        <Link
                                                            to={`/admin/viewproducts/${product._id}`}
                                                        >
                                                            View
                                                        </Link>
                                                    </a>
                                                </td>
                                                <td className="py-4 px-6 w-[10%]">
                                                    <a
                                                        href="#"
                                                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                    >
                                                        <Link
                                                            to={`/admin/updateproducts/${product._id}`}
                                                        >
                                                            Update
                                                        </Link>
                                                    </a>
                                                </td>
                                                <td className="py-4 px-6 w-[10%]">
                                                    <button
                                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                        onClick={() =>
                                                            handleRemove(
                                                                product._id
                                                            )
                                                        }
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TableComponent;
