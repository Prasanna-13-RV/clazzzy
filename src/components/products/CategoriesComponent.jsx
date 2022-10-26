import React from "react";
import {useEffect} from "react";

import "./CSS/categories.css";

const CategoriesComponent = ({
    categories,
    filterCategories,
    setFilterCategories,
}) => {
    const onChange = ({currentTarget: input}) => {
        if (input.checked) {
            const state = [...filterCategories, input.value];
            setFilterCategories(state);
        } else {
            const state = filterCategories.filter((val) => val !== input.value);
            setFilterCategories(state);
        }
    };

    return (
        <div>
            <h1>Filter By Categories</h1>
            <div>
                {categories.map((category) => {
                    return (
                        <div
                            className="pl-5 flex flex-row justify-start items-center"
                            key={category}
                        >
                            <input
                                type="checkbox"
                                className="category_input"
                                value={category}
                                onChange={onChange}
                            />
                            <p className="category_label">{category}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoriesComponent;
