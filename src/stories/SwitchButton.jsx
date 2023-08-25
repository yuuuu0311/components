import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

export const SwitchButton = ({ theme, disable, active }) => {
    // state
    const [isActive, setActive] = useState(active);

    // handler
    const handleChange = () => {
        isActive ? setActive(false) : setActive(true);
    };

    // style
    const SwitchBtnClasses = twMerge(
        className(
            "overflow-hidden relative flex p-0.5 items-center w-12 h-6 rounded-full before:content-[''] before:bg-white before:rounded-full before:h-5 before:w-5 before:transition transition",
            {
                "bg-neutral-100 ": theme == "neutral",
                "bg-neutral-300 before:translate-x-6":
                    theme == "neutral" && (isActive || active),
            },
            {
                "bg-blue-200 ": theme == "primary",
                "bg-blue-500 before:translate-x-6":
                    theme == "primary" && (isActive || active),
            },
            {
                "bg-neutral-200 ": theme == "secondary",
                "bg-neutral-500 before:translate-x-6":
                    theme == "secondary" && (isActive || active),
            },
            {
                "bg-neutral-200 ": theme == "success",
                "bg-green-500 before:translate-x-6":
                    theme == "success" && (isActive || active),
            },
            {
                "bg-red-200 ": theme == "danger",
                "bg-red-500 before:translate-x-6":
                    theme == "danger" && (isActive || active),
            },
            {
                "bg-neutral-100 ": disable,
                "bg-neutral-300 ": disable && active,
            }
        )
    );

    const iconClasses = twMerge(
        className("appearance-none w-full h-full transition absolute")
    );

    // component
    return (
        <div className={SwitchBtnClasses} onChange={handleChange}>
            <input
                className={iconClasses}
                type="checkbox"
                name="switch-button"
                defaultChecked={active}
                disabled={disable}
                onChange={handleChange}
            />
        </div>
    );
};

SwitchButton.propTypes = {
    theme: PropTypes.string,
    disable: PropTypes.bool,
    active: PropTypes.bool,
};
