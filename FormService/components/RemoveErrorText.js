import errorTextCheck from "./ErrorTextCheck.js";

export default function removeErrorText(type)
{
    if(!errorTextCheck(type)) // the error text does not exist
        return;
    
    const errorTextElement = document.getElementsByClassName(`Error${type}`)[0];
    errorTextElement.remove();
    return true;
}