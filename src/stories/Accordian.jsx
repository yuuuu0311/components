import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

// react icon
import { MdKeyboardArrowDown } from "react-icons/md";

export const Accordian = ({ theme, title, contentList, expend }) => {
    // state
    const [isExpaned, setExpaned] = useState(expend);

    // handler
    const handleClick = () => {
        isExpaned ? setExpaned(false) : setExpaned(true);
    };

    // style
    const titleClasses = twMerge(
        className("flex justify-between items-center py-2 px-4 transition", {
            "text-neutral-600 bg-white hover:bg-neutral-100 active:bg-neutral-200 active:text-neutral-700":
                theme == "neutral",
            "bg-neutral-100": theme == "neutral" && isExpaned,

            "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700":
                theme == "primary",
            "bg-blue-600": theme == "primary" && isExpaned,

            "text-white bg-neutral-500 hover:bg-neutral-600 active:bg-neutral-700":
                theme == "secondary",
            "bg-neutral-600": theme == "secondary" && isExpaned,

            "text-white bg-green-500 hover:bg-green-600 active:bg-green-700":
                theme == "success",
            "bg-green-600 hover:bg-green-600 active:bg-green-700":
                theme == "success" && isExpaned,

            "text-white bg-red-500 hover:bg-red-600 active:bg-red-700":
                theme == "danger",
            "bg-red-600 hover:bg-red-600 active:bg-red-700":
                theme == "danger" && isExpaned,
        })
    );

    const iconClasses = twMerge(
        className("rotate-0 transition", {
            "-rotate-180": isExpaned,
        })
    );

    const listWrapClasses = twMerge(className("flex flex-col"));

    const listClasses = twMerge(
        className("py-2 px-4 transition", {
            "text-neutral-500 hover:text-neutral-600 hover:bg-neutral-50":
                theme == "neutral",
            "text-blue-400 hover:text-blue-500 hover:bg-blue-50":
                theme == "primary",
            "text-neutral-500 hover:text-neutral-600 hover:bg-neutral-100":
                theme == "secondary",
            "text-green-500 hover:text-green-600 hover:bg-green-100":
                theme == "success",
            "text-red-500 hover:text-red-600 hover:bg-red-100":
                theme == "danger",
        })
    );

    // component
    return (
        <div className="max-w-sm">
            <h3 className={titleClasses} onClick={handleClick}>
                {title}
                <MdKeyboardArrowDown className={iconClasses} />
            </h3>
            {isExpaned && (
                <ul className={listWrapClasses}>
                    {contentList.map((item, index) => {
                        return (
                            <li key={index} className={listClasses}>
                                <a href={item.link} title={item.label}>
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

Accordian.propTypes = {
    /**
     *
     */
    theme: PropTypes.string,
    title: PropTypes.string,
    expend: PropTypes.bool,
    contentList: PropTypes.array,
};

// Accordian.defaultProps = {
//     theme: "neutral",
//     // expend: false,
//     contentList: {
//         title: "Accordian Title",
//         list: [
//             {
//                 label: "item 0",
//                 link: "#",
//             },
//             {
//                 label: "item 1",
//                 link: "#",
//             },
//             {
//                 label: "item 2",
//                 link: "#",
//             },
//         ],
//     },
// };
