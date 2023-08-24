import { RadioButton } from "./RadioButton";

export default {
    title: "components/Radio Button",
    component: RadioButton,
    tags: ["autodocs"],
    argTypes: {
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
    },
    args: {
        theme: "neutral",
        label: "radio button",
        checked: false,
        disable: false,
    },
};

export const primary = {
    args: {
        theme: "primary",
    },
};
