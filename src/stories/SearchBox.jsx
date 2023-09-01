import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

// icon

import { MdSearch } from "react-icons/md";

export const SearchBox = ({ theme, isFocus, placeholder, outline }) => {
    const [focus, setFocus] = useState(isFocus);

    // style
    const searchBoxClasses = twMerge(
        className(
            "w-fit rounded-full flex items-center px-3 py-1 transition",
            {
                "border border-neutral-300 ": theme == "neutral" && outline,
                "border-neutral-500": theme == "neutral" && focus,
            },
            {
                "border border-blue-300 ": theme == "primary" && outline,
                "border-blue-500": theme == "primary" && focus,
            },
            {
                "border border-neutral-500 ": theme == "secondary" && outline,
                "border-neutral-700": theme == "secondary" && focus,
            },
            {
                "border border-green-300 ": theme == "success" && outline,
                "border-green-500": theme == "success" && focus,
            },
            {
                "border border-red-300 ": theme == "danger" && outline,
                "border-red-500": theme == "denger" && focus,
            }
        )
    );

    const iconClass = twMerge(
        className(
            { "text-neutral-500": theme == "neutral" },
            { "text-blue-500": theme == "primary" },
            { "text-neutral-700": theme == "secondary" },
            { "text-green-500": theme == "success" },
            { "text-red-500": theme == "danger" }
        )
    );

    const searchClasses = twMerge(
        className(
            "outline-none text-neutral-700 placeholder:text-neutral-300",
            {
                "border-b border-neutral-300": theme == "neutral" && !outline,
                "border-b border-blue-300": theme == "primary" && !outline,
                "border-b border-neutral-700": theme == "secondary" && !outline,
                "border-b border-green-300": theme == "success" && !outline,
                "border-b border-red-300": theme == "danger" && !outline,
            },
            {
                "w-0": !focus,
            }
        )
    );

    return (
        <>
            <label
                className={searchBoxClasses}
                htmlFor="searchbox"
                onFocus={() => {
                    focus ? setFocus(false) : setFocus(true);
                }}
            >
                <input
                    className={searchClasses}
                    type="text"
                    name="searchbox"
                    id="searchbox"
                    placeholder={placeholder}
                />
                <MdSearch className={iconClass} />
            </label>
        </>
    );
};

SearchBox.propTypes = {
    isFocus: PropTypes.bool,
    placeholder: PropTypes.string,
};
