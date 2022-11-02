import React, {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import Select from "react-select";
import {useNavigate} from "react-router-dom";
import Nav from "../../navbarAdmin/Nav";

const UpdateComponent = ({productid}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [currentproducts, setCurrentproducts] = useState([]);

    const navigate = useNavigate();

    const options = [
        {value: 1, label: "Shirts"},
        {value: 2, label: "Vegetables"},
        {value: 3, label: "Fruits"},
        {value: 4, label: "Screws"},
    ];

    const handleChange = (e) => {
        setCategory(e.map((e) => e.label));
    };

    const updateProduct = (id) => {
        axios.put(`${process.env.REACT_APP_API_URL}/admin/updateproducts/${id}`, {
            name: name,
            price: price,
            image: image,
            category: category,
            description: description,
            rating: rating,
            id: id,
        });
        navigate("/sellers/totalproducts");
    };

    const currentProductFunction = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/admin/updateproducts/${productid}`)
            .then((response) => {
                setCurrentproducts(response.data);
                setName(response.data.name);
                setPrice(response.data.pricing);
                setRating(response.data.rating);
                setImage(response.data.img);
                setCategory(response.data.categories);
                setDescription(response.data.description);
            });
    };

    useEffect(() => {
        currentProductFunction();
    }, []);

    return (
        <>
            <Nav />
            <div
                className="w-full flex justify-center items-center flex-col mt-3 text-center text-4xl text-[#6D6875] font-display font-semibold lg:text-left xl:text-3xl
                    xl:text-bold"
            >
                <h1>Update Product</h1>
                
                <div className="w-full px-10 py-5 flex flex-col justify-center items-center">
                    <div className="relative z-0 mb-6 w-1/2 group">
                        <input
                            type="text"
                            id="product_name"
                            className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                            placeholder="Enter Product Name"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="relative z-0 mb-6 w-1/2 group">
                        <input
                            type="number"
                            id="product_price"
                            className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                            placeholder="Enter product price"
                            required=""
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>

                    <div className="relative z-0 mb-6 w-1/2 group">
                        <input
                            type="number"
                            id="product_rating"
                            className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                            placeholder="Enter Rating"
                            required=""
                            onChange={(e) => setRating(e.target.value)}
                            value={rating}
                        />
                    </div>
                    <div className="relative z-0 mb-6 w-1/2 group">
                        <input
                            type="text"
                            id="product_image"
                            className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                            placeholder="Enter Product Image URL"
                            required
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
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
                            placeholder="Enter description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        ></textarea>
                    </div>


                    <Select
                        className="basic-multi-select w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-5"
                        placeholder="Select Option"
                        // value={options.filter(obj => category.includes(obj.value))} // set selected values
                        options={options} // set list of the data
                        // onChange={handleChange} // assign onChange function
                        // onClick={handleChange}
                        defaultValue={currentproducts.categories}
                        isMulti
                        classNamePrefix="select"
                        isClearable
                        onChange={(e) => handleChange(e)}
                    />

                    {/* {JSON.stringify(currentproducts.categories)} */}

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                        onClick={() => updateProduct(currentproducts._id)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default UpdateComponent;
