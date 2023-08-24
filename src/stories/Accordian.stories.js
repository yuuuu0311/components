import { Accordian } from "./Accordian";

export default {
    title: "components/Accordian",
    component: Accordian,
    tags: ["autodocs"],
    argTypes: {
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
    },
    args: {
        theme: "neutral",
        expend: true,
        title: "Accordian Title",
        contentList: [
            {
                label: "item 0",
                link: "#",
            },
            {
                label: "item 1",
                link: "#",
            },
            {
                label: "item 2",
                link: "#",
            },
        ],
    },
};

export const neutral = {
    args: {
        theme: "neutral",
    },
};

export const Primary = {
    args: {
        theme: "primary",
    },
};

export const Group = {
    args: {
        theme: "secondary",
    },
    // render: () => <div>11111</div>,
};
