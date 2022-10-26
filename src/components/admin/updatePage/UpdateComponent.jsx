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
        {value: 1, label: "shirts"},
        {value: 2, label: "vegetables"},
        {value: 3, label: "fruits"},
        {value: 4, label: "screws"},
    ];

    const handleChange = (e) => {
        setCategory(e.map((e) => e.label));
    };

    const updateProduct = (id) => {
        axios.put(`http://localhost:8080/admin/updateproducts/${id}`, {
            name: name,
            price: price,
            image: image,
            category: category,
            description: description,
            rating: rating,
            id: id,
        });
        navigate("/admin/totalproducts");
    };

    const currentProductFunction = () => {
        axios
            .get(`http://localhost:8080/admin/updateproducts/${productid}`)
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
            <div className="w-full px-10 py-5 flex flex-col justify-center items-center">
                <div className="relative z-0 mb-6 w-1/2 group">
                    <input
                        type="text"
                        id="product_name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Enter description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>

                {/* <div className="relative z-0 mb-6 w-1/2 group">
                    <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Select Project Category
                    </label>
                    <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={category}
                    >
                        <option
                            value="Clothing"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            Clothing
                        </option>
                        <option
                            value="Fruits"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            Fruits
                        </option>
                        <option
                            value="Vegetables"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            Vegetables
                        </option>
                        <option
                            value="Screws"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            Screws
                        </option>
                        <option
                            value="Shirts"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            Shirts
                        </option>
                    </select>
                </div> */}

                <Select
                    className="basic-multi-select w-1/2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-5"
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
        </>
    );
};

export default UpdateComponent;
