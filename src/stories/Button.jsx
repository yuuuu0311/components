import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

export const Button = ({
    children,
    theme,
    outline,
    shape,
    disable,
    onClickFunc,
}) => {
    const btnClasses = twMerge(
        className(
            "flex items-center justify-center gap-2 box-border py-1 px-6 border border-solid border-current transition",
            {
                "text-neutral-500 bg-white hover:bg-neutral-100 active:bg-neutral-200 active:text-neutral-600":
                    theme == "neutral",
                "text-neutral-500 bg-transprant hover:bg-neutral-100 active:bg-neutral-200 active:text-neutral-500":
                    theme == "neutral" && outline,

                "text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-700 active:border-blue-700":
                    theme == "primary",
                "text-blue-500 bg-transprant border-blue-500 hover:bg-blue-50 hover:border-blue-500 active:bg-blue-100 active:border-blue-500":
                    theme == "primary" && outline,

                "text-white bg-neutral-500 border-neutral-500 hover:bg-neutral-600 hover:border-neutral-600 active:bg-neutral-700 active:border-neutral-700":
                    theme == "secondary",
                "text-neutral-500 bg-transparent border-neutral-500 hover:bg-neutral-50 hover:border-neutral-500 active:bg-neutral-100 active:border-neutral-500":
                    theme == "secondary" && outline,

                "text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 active:bg-green-700 active:border-green-700":
                    theme == "success",
                "text-green-500 bg-transparent hover:bg-green-50 hover:border-green-500 active:bg-green-100 active:border-green-500":
                    theme == "success" && outline,

                "text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 active:bg-red-700 active:border-red-700":
                    theme == "danger",
                "text-red-500 bg-transparent hover:bg-red-50 hover:text-red-500 active:bg-red-100 active:text-red-500":
                    theme == "danger" && outline,

                rounded: shape == "rounded",
                "rounded-full": shape == "rounded-full",

                "text-neutral-500 bg-neutral-100 border-transparent hover:text-neutral-500 hover:bg-neutral-100 hover:border-transparent active:text-neutral-500 active:bg-neutral-100 active:border-transparent cursor-not-allowed":
                    disable,
            }
        )
    );

    return (
        <>
            {disable ? (
                <button className={btnClasses} disabled>
                    {children}
                </button>
            ) : (
                <button className={btnClasses} onClick={onClickFunc}>
                    {children}
                </button>
            )}
        </>
    );
};

Button.propTypes = {
    /**
     *
     */
    theme: PropTypes.string,
    outline: PropTypes.bool,
    shape: PropTypes.oneOf(["rounded", "rounded-full"]),
    disable: PropTypes.bool,
};
