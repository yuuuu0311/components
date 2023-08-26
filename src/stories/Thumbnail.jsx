import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

// icon
import { MdShoppingCart } from "react-icons/md";

export const Thumbnail = ({ addCart, isSponsor }) => {
    const wrapperClasses = twMerge(
        className("relative max-w-xs", {
            "overflow-hidden rounded before: content - [''], before:absolute before:inset-0 before:bg-slate-950/50 before:opacity-0 hover:before:opacity-100 before:transition group":
                addCart,
        })
    );

    const cartClasses = twMerge(
        className(
            "w-1/5 h-1/5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition"
        )
    );

    const sponsorClasses = twMerge(
        className(
            "text-sm bg-neutral-400 text-white rounded absolute bottom-2 right-2 px-1.5"
        )
    );

    return (
        <div className={wrapperClasses}>
            <img
                src="https://dinotaeng.com/web/product/medium/202305/5dbcfe683786725441e9ee37ab4bcf9a.png"
                alt=""
                srcset=""
            />
            {addCart ? (
                <MdShoppingCart className={cartClasses}></MdShoppingCart>
            ) : (
                <></>
            )}
            {isSponsor ? <span className={sponsorClasses}>AD</span> : <></>}
        </div>
    );
};

Thumbnail.PropTypes = {
    isSponsor: PropTypes.bool,
};
