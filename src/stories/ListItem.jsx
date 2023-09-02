import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

// react icon
import { MdKeyboardArrowDown } from "react-icons/md";

export const ListItem = ({ theme, listStyle, children }) => {
    // style
    const listItemClasses = twMerge(
        className({
            "list-none": listStyle == "none",
            "list-disc": listStyle == "bullets",
            "list-decimal": listStyle == "decimal",
            "list-roman": listStyle == "roman",
            "list-square": listStyle == "square",
            "list-zh": listStyle == "zh",
            "list-emoji": listStyle == "emoji",
        })
    );

    return <li className={listItemClasses}>{children}</li>;
};

ListItem.propTypes = {
    theme: PropTypes.string,
    listStyle: PropTypes.string, // decimal bullets zh alpha none roman square
};
