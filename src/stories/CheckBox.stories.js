import { CheckBox } from "./CheckBox";

export default {
    title: "components/Check Box",
    component: CheckBox,
    tags: ["autodocs"],
    argTypes: {
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
    },
    args: {
        theme: "neutral",
        label: "check box",
        checked: false,
        disable: false,
    },
};

export const primary = {
    args: {
        theme: "primary",
    },
};
