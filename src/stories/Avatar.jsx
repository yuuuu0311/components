import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

export const Avatar = ({ status }) => {
    const avatarClasses = twMerge(
        className("relative w-16 lg:w-20", {
            "brightness-50": status == "offline",
        })
    );

    const imgWrapClasses = twMerge(
        className("rounded-full overflow-hidden border-2 border-white ")
    );

    const statusClasses = twMerge(
        className(
            "absolute right-0.5 bottom-0.5 w-4 h-4 after:content-[''] after:border-white after:border-2 after:rounded-full  after:w-full after:h-full after:block",
            {
                "after:bg-green-400": status == "online",
                "after:bg-gray-400": status == "offline",
                "after:bg-red-400": status == "busy",
                "after:bg-blue-400": status == "available",
            }
        )
    );

    return (
        <div className={avatarClasses}>
            <div className={imgWrapClasses}>
                <img
                    src="https://dinotaeng.com/web/product/medium/202305/5dbcfe683786725441e9ee37ab4bcf9a.png"
                    alt=""
                />
            </div>

            {status ? (
                <>
                    <div className={statusClasses}></div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

Avatar.propTypes = {
    status: PropTypes.oneOf(["online", "offline", "busy", "available"]),
};
