import { ListItem } from "./ListItem";

export default {
    title: "components/ListItem",
    component: ListItem,
    tags: ["autodocs"],
    argTypes: {
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
        listStyle: {
            options: [
                "bullets",
                "decimal",
                "roman",
                "square",
                "zh",
                "emoji",
                "none",
            ],
            control: { type: "select" },
        },
    },
    args: {
        theme: "neutral",
        listStyle: "none",
    },
};

export const Bullets = {
    args: {
        theme: "primary",
        listStyle: "bullets",
        children: "I'm list item",
    },
};
