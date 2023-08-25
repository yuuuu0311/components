import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

// icon
import { MdCircle } from "react-icons/md";

export const RadioButton = ({ id, label, theme, disable, checked }) => {
    // state
    const [isCheck, setCheck] = useState(checked);

    // handler
    const handleChange = () => {
        isCheck ? setCheck(false) : setCheck(true);
    };

    // style
    const boxClass = twMerge(className("flex items-center gap-x-3"));
    const radioWrapClass = twMerge(
        className(
            "relative w-4 h-4 border rounded-full transition",
            {
                "border-neutral-200": theme == "neutral",
                "border-neutral-300":
                    theme == "neutral" && (isCheck || checked),
            },
            {
                "border-blue-300": theme == "primary",
                "border-blue-500": theme == "primary" && (isCheck || checked),
            },
            {
                "border-neutral-300": theme == "secondary",
                "border-neutral-500":
                    theme == "secondary" && (isCheck || checked),
            },
            {
                "border-green-300": theme == "success",
                "border-green-500": theme == "success" && (isCheck || checked),
            },
            {
                "border-red-300": theme == "danger",
                "border-red-500": theme == "danger" && (isCheck || checked),
            }
        )
    );
    const radioClasses = twMerge(className("appearance-none"));

    const iconClass = twMerge(
        className(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-box border-2 border-white w-full h-full rounded-full opacity-0 transition",
            {
                "border-2 border-white opacity-1": isCheck || checked,
            },
            {
                "text-neutral-300": theme == "neutral" && (isCheck || checked),
            },
            {
                "text-blue-500": theme == "primary" && (isCheck || checked),
            },
            {
                "text-neutral-500":
                    theme == "secondary" && (isCheck || checked),
            },
            {
                "text-green-500": theme == "success" && (isCheck || checked),
            },
            {
                "text-red-500": theme == "danger" && (isCheck || checked),
            }
        )
    );

    // component
    return (
        <div className={boxClass} onClick={handleChange}>
            <div className={radioWrapClass}>
                <input
                    type="radio"
                    name="Radio Button"
                    id={id}
                    disabled={disable}
                    defaultChecked={checked4j}
                    className={radioClasses}
                    onChange={handleChange}
                />
                <MdCircle className={iconClass} />
            </div>
            <label htmlFor={id}> {label} </label>
        </div>
    );
};

RadioButton.propTypes = {
    id: PropTypes.number,
    theme: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    disable: PropTypes.bool,
};
