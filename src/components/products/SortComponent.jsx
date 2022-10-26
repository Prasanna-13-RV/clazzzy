import React from "react";

import "./CSS/sort.css";

const SortComponent = ({sort, setSort}) => {
    const onselectChange = ({currentTarget: input}) => {
        setSort({sort: input.value, order: sort.order});
    };

    const onArrowChange = () => {
        if (sort.order === "asc") {
            setSort({sort: sort.sort, order: "desc"});
        } else {
            setSort({sort: sort.sort, order: "asc"});
        }
    };

    return (
        <div className="">
            <p className="sort_by">Sort By:</p>
            <div className="flex flex-row ">
                <select
                    className="select"
                    defaultValue={sort.sort}
                    onChange={onselectChange}
                >
                    <option value="year">Year</option>
                    <option value="rating">Rating</option>
                </select>
                <button className="arrow_btn" onClick={onArrowChange}>
                    <p className="up_arrow">&uarr;</p>
                    <p className="down_arrow">&darr;</p>
                </button>
            </div>
        </div>
    );
};

export default SortComponent;
