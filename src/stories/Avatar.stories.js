import { Avatar } from "./Avatar";

export default {
    title: "components/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {
        status: "online",
    },

    parameters: {
        backgrounds: {
            default: "dark",
            values: [{ name: "dark", value: "#888888" }],
        },
    },
};

export const primary = {
    args: {},
};

export const status = {
    args: {
        status: "online",
    },
};
