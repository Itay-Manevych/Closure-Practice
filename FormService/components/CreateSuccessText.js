import successTextCheck from "./SuccessTextCheck.js";

export default function createSuccessText(type)
{
    const input = document.getElementById(type);
    const successTextElement = document.createElement("p");
    successTextElement.id = "success";
    if(successTextCheck(type)) return true;
    successTextElement.insertAdjacentText("afterbegin","Your form has been submitted succesfully!");
    input.insertAdjacentElement("afterend",successTextElement);
}