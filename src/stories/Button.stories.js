import { Button } from "./Button";

export default {
    title: "components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
    },
    args: {
        children: "Button",
        theme: "neutral",
        outline: false,
        shape: "rounded",
    },
};

export const Primary = {
    args: {
        theme: "primary",
        shape: "rounded",
    },
};
