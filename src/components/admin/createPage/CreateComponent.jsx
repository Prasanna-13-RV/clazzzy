import React, {useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Select from "react-select";

const CreateComponent = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [image, setImage] = useState("");
    const [category, setCategory] = useState([]);
    const [description, setDescription] = useState("");

    const inputRef = useRef();

    const navigate = useNavigate();

    const createProduct = () => {
        const productDetails = new FormData();
        productDetails.append("name", name);
        productDetails.append("price", price);
        productDetails.append("rating", rating);
        productDetails.append("category", category);
        productDetails.append("description", description);
        productDetails.append("image", image);

        axios
            .post(
                `${process.env.REACT_APP_API_URL}/admin/createproducts`,
                productDetails
            )
            .then((response) => console.log(response));
        navigate("/sellers/totalproducts");
    };

    const options = [
        {value: 1, label: "Shirts"},
        {value: 2, label: "Vegetables"},
        {value: 3, label: "Fruits"},
        {value: 4, label: "Others"},
    ];

    useEffect(() => {}, [category]);

    const handleChange = (e) => {};

    return (
        <>
            <h1
                className="w-full flex justify-center items-center flex-col mt-3 text-center text-4xl text-[#6D6875] font-display font-semibold lg:text-left xl:text-3xl
                    xl:text-bold"
            >
                Create Product
            </h1>
            <div className="w-full px-10 py-5 flex flex-col justify-center items-center">
                <div className="relative z-0 mb-6 w-1/2 group">
                    <input
                        type="text"
                        // name="product_name"
                        id="product_name"
                        className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                        placeholder="Enter Product Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="relative z-0 mb-6 w-1/2 group">
                    <input
                        type="number"
                        // name="product_price"
                        id="product_price"
                        className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                        placeholder="Enter product price"
                        required=""
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="relative z-0 mb-6 w-1/2 group">
                    <input
                        type="number"
                        // name="product_rating"
                        id="product_rating"
                        className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                        placeholder="Enter Rating"
                        required=""
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>
                <div className="relative z-0 mb-6 w-1/2 group">
                    <input
                        type="text"
                        // name="product_image"
                        id="product_image"
                        className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                        placeholder="Enter Product Image URL"
                        required
                        onChange={(e) => {
                            setImage(e.target.value);
                            // console.log(e.target.files[0]);
                        }}
                    />
                </div>
                <div className="relative z-0 mb-6 w-1/2 group">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Enter Product Description
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                        placeholder="Leave a comment..."
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <Select
                    className="basic-multi-select w-1/2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-5"
                    placeholder="Select Option"
                    // value={options.filter(obj => category.includes(obj.value))} // set selected values
                    options={options} // set list of the data
                    // onChange={handleChange} // assign onChange function
                    // onClick={handleChange}
                    isMulti
                    classNamePrefix="select"
                    isClearable
                    onChange={(e) => {
                        // setCategory(
                        //     e.map((cat) => {
                        //         [...category, cat.label];
                        //     })
                        // );
                        e.map((cat) => {
                            setCategory([...category, cat.label]);
                        });
                    }}
                />

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    onClick={createProduct}
                >
                    Submit
                </button>
            </div>
        </>
    );
};

export default CreateComponent;
