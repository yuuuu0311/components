import { Badge } from "./Badge";

export default {
    title: "components/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
    },
    args: {
        children: "in stock",
        theme: "neutral",
        outline: false,
    },
};

export const Primary = {
    args: {
        theme: "primary",
    },
};
