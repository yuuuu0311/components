import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";
import { prototype } from "postcss/lib/input";

export const Badge = ({ children, theme, outline }) => {
    const badgeClasses = twMerge(
        className(
            "rounded-full text-white text-xs py-0.5 px-1.5",
            {
                "bg-neutral-100 text-neutral-500": theme == "neutral",
                "text-neutral-500 bg-white border-neutral-200 border":
                    theme == "neutral" && outline,
            },
            {
                "bg-blue-500": theme == "primary",
                "text-blue-500 bg-white border-blue-500 border":
                    theme == "primary" && outline,
            },
            {
                "bg-neutral-500": theme == "secondary",
                "text-neutral-500 bg-white border-neutral-500 border":
                    theme == "secondary" && outline,
            },
            {
                "bg-green-500": theme == "success",
                "text-green-500 bg-white border-green-500 border":
                    theme == "success" && outline,
            },
            {
                "bg-red-500": theme == "danger",
                "text-red-500 bg-white border-red-500 border":
                    theme == "danger" && outline,
            }
        )
    );

    return <span className={badgeClasses}>{children}</span>;
};

Badge.PropTypes = {};
