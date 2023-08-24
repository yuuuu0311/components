import { SwitchButton } from "./SwitchButton";

export default {
    title: "components/Switch Button",
    component: SwitchButton,
    tags: ["autodocs"],
    argTypes: {
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
    },
    args: {
        theme: "neutral",
        active: false,
        disable: false,
    },
};

export const primary = {
    args: {
        theme: "primary",
    },
};
