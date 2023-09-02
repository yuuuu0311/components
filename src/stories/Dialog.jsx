import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// for style
import className from "classnames";
import { twMerge } from "tailwind-merge";
import "./style.css";

// components
import { Button } from "./Button";

export const Dialog = ({ id, theme, title, children, closeByBackdrop }) => {
    const [open, setOepn] = useState(false);

    const operateDialog = () => {
        const targetDialog = document.querySelector(`#${id}`);

        if (open) {
            targetDialog.close();
            setOepn(false);
        } else {
            targetDialog.showModal();
            setOepn(true);
        }
    };

    const handleBackdropClick = (event) => {
        const targetDialog = document.querySelector(`#${id}`);
        event.target == targetDialog && operateDialog();
    };

    // style
    const dialogClasses = twMerge(className("rounded lg:max-w-lg"));
    const titleClasses = twMerge(
        className("font-bold px-3 py-2", {
            "text-neutral-500 bg-neutral-300": theme == "neutral",
            "text-white bg-blue-500": theme == "primary",
            "text-white bg-neutral-700": theme == "secondary",
            "text-white bg-green-500": theme == "success",
            "text-white bg-red-500": theme == "danger",
        })
    );
    const contentClasses = twMerge(
        className("px-3 py-2 leading-5 text-neutral-900", {})
    );

    return (
        <>
            <Button
                theme="primary"
                shape="rounded-full"
                outline
                onClickFunc={operateDialog}
            >
                Click !!
            </Button>

            <dialog
                className={dialogClasses}
                open={open}
                id={id}
                onClick={closeByBackdrop ? handleBackdropClick : null}
            >
                <form method="dialog">
                    <div className={titleClasses}>{title}</div>
                    <div className={contentClasses}>{children}</div>
                    <div className="footer flex justify-center gap-1 p-4">
                        <Button
                            theme="neutral"
                            shape="rounded"
                            onClickFunc={operateDialog}
                        >
                            Close
                        </Button>
                        <Button
                            theme={theme}
                            shape="rounded"
                            onClickFunc={() => {
                                console.log("do submit thing");
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </dialog>
        </>
    );
};

Dialog.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    closeByBackdrop: PropTypes.bool,
};
