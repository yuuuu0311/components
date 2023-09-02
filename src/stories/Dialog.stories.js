import { Children } from "react";
import { Dialog } from "./Dialog";

export default {
    title: "components/Dialog",
    component: Dialog,
    tags: ["autodocs"],
    argTypes: {
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
        isOpen: {
            options: [true, false],
            control: { type: "switch" },
        },
    },
};

export const primary = {
    args: {
        id: "dialog",
        theme: "primary",
        title: "Dialog Title",
        children:
            "content goes here, content goes here, content goes here, content goes here, content goes here, content goes here",
        closeByBackdrop: false,
    },
};
