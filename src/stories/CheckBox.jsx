import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

// icon
import { MdOutlineDone } from "react-icons/md";

export const CheckBox = ({ id, label, theme, disable, checked }) => {
    // state
    const [isCheck, setCheck] = useState(checked);

    // handler
    const handleChange = () => {
        isCheck ? setCheck(false) : setCheck(true);
    };

    // style
    const boxClass = twMerge(className("flex items-center gap-x-3"));
    const inputWrapClass = twMerge(
        className(
            "relative w-4 h-4 border rounded-sm transition",
            {
                "border-neutral-200": theme == "neutral",
                "border-neutral-300 bg-neutral-300":
                    theme == "neutral" && (isCheck || checked),
            },
            {
                "border-blue-300": theme == "primary",
                "border-blue-500 bg-blue-500":
                    theme == "primary" && (isCheck || checked),
            },
            {
                "border-neutral-300": theme == "secondary",
                "border-neutral-500 bg-neutral-500":
                    theme == "secondary" && (isCheck || checked),
            },
            {
                "border-green-300": theme == "success",
                "border-green-500 bg-green-500":
                    theme == "success" && (isCheck || checked),
            },
            {
                "border-red-300": theme == "danger",
                "border-red-500 bg-red-500":
                    theme == "danger" && (isCheck || checked),
            },
            {
                "bg-neutral-100 border-neutral-300": disable,
            }
        )
    );
    const inputClass = twMerge(className("appearance-none"));
    const iconClasses = twMerge(
        className(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 text-transparent transition",
            {
                "scale-100 text-white": isCheck || checked,
            }
        )
    );

    // component
    return (
        <div className={boxClass} onClick={handleChange}>
            <div className={inputWrapClass}>
                <input
                    type="checkbox"
                    name="CheckBox"
                    id={id}
                    className={inputClass}
                    checked={isCheck}
                    disabled={disable}
                    onChange={handleChange}
                />
                <MdOutlineDone className={iconClasses} />
            </div>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

CheckBox.propTypes = {
    id: PropTypes.number,
    theme: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    disable: PropTypes.bool,
};
