import { SearchBox } from "./SearchBox";

export default {
    title: "components/SearchBox",
    component: SearchBox,
    tags: ["autodocs"],
    argTypes: {
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
    },
    args: {
        theme: "neutral",
    },
};

export const Primary = {
    args: {
        theme: "primary",
        isFocus: true,
        placeholder: "Search",
        outline: false,
    },
};
