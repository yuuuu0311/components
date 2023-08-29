import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

// icon
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Input = ({ theme, direction, inputList }) => {
    return (
        <>
            {inputList.map((input, index) => {
                const {
                    label,
                    type,
                    isReadOnly,
                    isInvalid,
                    isDisable,
                    placeholder,
                } = input;

                const [inputType, setInputType] = useState(type);
                const [inputVal, setInputVal] = useState("");
                const [isVisible, setVisible] = useState(false);

                useEffect(() => {
                    setInputType(type);
                }, [type]);

                const changeVisible = () => {
                    if (isVisible) {
                        setVisible(false);
                        setInputType("password");
                    } else {
                        setVisible(true);
                        setInputType("text");
                    }
                };

                // style
                const lableClasses = twMerge(
                    className(
                        "flex text-neutral-400 transition w-96",
                        {
                            "flex-col": direction == "vertical",
                            "flex-row gap-1 items-center":
                                direction == "horizontal",
                        },
                        {
                            "focus-within:text-neutral-300": theme == "neutral",
                        },
                        {
                            "focus-within:text-blue-500": theme == "primary",
                        },
                        {
                            "focus-within:text-neutral-500":
                                theme == "secondary",
                        },
                        {
                            "focus-within:text-green-500": theme == "success",
                        },
                        {
                            "focus-within:text-red-500": theme == "danger",
                        }
                    )
                );

                const inputWrapClasses = twMerge(
                    className(
                        "inline-flex items-center border-b border-neutral-200",
                        {
                            "pb-1 mb-1 ": direction == "vertical",
                        }
                    )
                );

                const inputClasses = twMerge(
                    className(
                        "outline-none text-slate-800 text-xl placeholder:text-neutral-200"
                    )
                );

                return (
                    <label ket={index} className={lableClasses}>
                        {label}
                        <span className={inputWrapClasses}>
                            <input
                                name={label}
                                type={inputType}
                                readOnly={isReadOnly}
                                disabled={isDisable}
                                placeholder={placeholder}
                                onChange={(event) => {
                                    setInputVal(event.target.value);
                                }}
                                value={inputVal}
                                className={inputClasses}
                            ></input>

                            {type == "password" ? (
                                <span onClick={changeVisible}>
                                    {isVisible ? (
                                        <AiFillEyeInvisible></AiFillEyeInvisible>
                                    ) : (
                                        <AiFillEye></AiFillEye>
                                    )}
                                </span>
                            ) : (
                                <></>
                            )}
                        </span>
                        {isInvalid ? (
                            <span className="text-sm text-red-500">
                                validate fail
                            </span>
                        ) : (
                            <></>
                        )}
                    </label>
                );
            })}
        </>
    );
};

Input.propTypes = {
    direction: PropTypes.oneOf(["vertical", "horizontal"]),

    inputList:
        PropTypes.array[
            {
                type: PropTypes.oneOf([
                    "text",
                    "number",
                    "password",
                    "date",
                    "email",
                ]),
                isReadOnly: PropTypes.bool,
                isDisable: PropTypes.bool,
            }
        ],
};
