import { Input } from "./Input";

export default {
    title: "components/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        direction: {
            options: ["vertical", "horizontal"],
            control: { type: "radio" },
        },
        theme: {
            options: ["neutral", "primary", "secondary", "success", "danger"],
            control: { type: "select" },
        },
    },
};

export const Primary = {
    args: {
        theme: "primary",
        direction: "vertical", // horizontal

        inputList: [
            {
                label: "Account",
                type: "text",
                isReadOnly: false,
                isInvalid: false,
                isDisable: false,
                placeholder: "Place Enter Account",
            },
        ],
    },
};

export const Group = {
    args: {
        theme: "primary",
        direction: "vertical", // horizontal

        inputList: [
            {
                label: "Account",
                type: "text",
                isReadOnly: false,
                isInvalid: false,
                isDisable: false,
                placeholder: "Place Enter Account",
            },
            {
                label: "Password",
                type: "password",
                isReadOnly: false,
                isInvalid: false,
                isDisable: false,
                placeholder: "Place Enter Passsword",
            },
        ],
    },
};
