import { Avatar } from "./Avatar";

export default {
    title: "components/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {
        // theme: {
        //     options: ["neutral", "primary", "secondary", "success", "danger"],
        //     control: { type: "select" },
        // },
        isOnline: false,
    },
};

export const isOnline = {
    args: {
        isOnline: true,
    },
};
