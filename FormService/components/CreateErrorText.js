import errorTextCheck from "./ErrorTextCheck.js";

export default function createErrorText(type)
{
    const input = document.getElementById(type);
    const errorTextElement = document.createElement("p");
    if(errorTextCheck(type)) // the error text already exists
        return;

    errorTextElement.className = `Error${type}`;
    errorTextElement.id = "error";
    errorTextElement.insertAdjacentText("afterbegin","ERROR!");
    input.insertAdjacentElement("afterend",errorTextElement);
}